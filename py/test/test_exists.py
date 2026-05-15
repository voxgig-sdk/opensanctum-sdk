# ProjectName SDK exists test

import pytest
from opensanctum_sdk import OpensanctumSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OpensanctumSDK.test(None, None)
        assert testsdk is not None
