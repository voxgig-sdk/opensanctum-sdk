<?php
declare(strict_types=1);

// Opensanctum SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OpensanctumFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OpensanctumBaseFeature();
            case "test":
                return new OpensanctumTestFeature();
            default:
                return new OpensanctumBaseFeature();
        }
    }
}
