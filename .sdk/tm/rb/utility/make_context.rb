# Opensanctum SDK utility: make_context
require_relative '../core/context'
module OpensanctumUtilities
  MakeContext = ->(ctxmap, basectx) {
    OpensanctumContext.new(ctxmap, basectx)
  }
end
