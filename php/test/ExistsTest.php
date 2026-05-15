<?php
declare(strict_types=1);

// Opensanctum SDK exists test

require_once __DIR__ . '/../opensanctum_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = OpensanctumSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
