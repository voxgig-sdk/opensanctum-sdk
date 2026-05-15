# Opensanctum SDK feature factory

from feature.base_feature import OpensanctumBaseFeature
from feature.test_feature import OpensanctumTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpensanctumBaseFeature(),
        "test": lambda: OpensanctumTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
