<?php
declare(strict_types=1);

// Opensanctum SDK utility: feature_add

class OpensanctumFeatureAdd
{
    public static function call(OpensanctumContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
