<?php
declare(strict_types=1);

// Opensanctum SDK utility: result_body

class OpensanctumResultBody
{
    public static function call(OpensanctumContext $ctx): ?OpensanctumResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
