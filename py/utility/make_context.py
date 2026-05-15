# Opensanctum SDK utility: make_context

from core.context import OpensanctumContext


def make_context_util(ctxmap, basectx):
    return OpensanctumContext(ctxmap, basectx)
