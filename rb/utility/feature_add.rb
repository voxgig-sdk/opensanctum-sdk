# Opensanctum SDK utility: feature_add
module OpensanctumUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
