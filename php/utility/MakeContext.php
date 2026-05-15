<?php
declare(strict_types=1);

// Opensanctum SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OpensanctumMakeContext
{
    public static function call(array $ctxmap, ?OpensanctumContext $basectx): OpensanctumContext
    {
        return new OpensanctumContext($ctxmap, $basectx);
    }
}
