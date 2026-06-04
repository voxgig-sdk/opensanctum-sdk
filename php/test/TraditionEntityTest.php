<?php
declare(strict_types=1);

// Tradition entity test

require_once __DIR__ . '/../opensanctum_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TraditionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = OpensanctumSDK::test(null, null);
        $ent = $testsdk->Tradition(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = tradition_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "tradition." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set OPENSANCTUM_TEST_TRADITION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $tradition_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.tradition")));
        $tradition_ref01_data = null;
        if (count($tradition_ref01_data_raw) > 0) {
            $tradition_ref01_data = Helpers::to_map($tradition_ref01_data_raw[0][1]);
        }

        // LIST
        $tradition_ref01_ent = $client->Tradition(null);
        $tradition_ref01_match = [];

        [$tradition_ref01_list_result, $err] = $tradition_ref01_ent->list($tradition_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($tradition_ref01_list_result);

    }
}

function tradition_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/tradition/TraditionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = OpensanctumSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["tradition01", "tradition02", "tradition03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("OPENSANCTUM_TEST_TRADITION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "OPENSANCTUM_TEST_TRADITION_ENTID" => $idmap,
        "OPENSANCTUM_TEST_LIVE" => "FALSE",
        "OPENSANCTUM_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["OPENSANCTUM_TEST_TRADITION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["OPENSANCTUM_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new OpensanctumSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["OPENSANCTUM_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["OPENSANCTUM_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
