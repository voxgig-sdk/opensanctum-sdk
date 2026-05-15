<?php
declare(strict_types=1);

// Opensanctum SDK utility: prepare_body

class OpensanctumPrepareBody
{
    public static function call(OpensanctumContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
