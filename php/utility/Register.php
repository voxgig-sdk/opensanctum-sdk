<?php
declare(strict_types=1);

// Opensanctum SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

OpensanctumUtility::setRegistrar(function (OpensanctumUtility $u): void {
    $u->clean = [OpensanctumClean::class, 'call'];
    $u->done = [OpensanctumDone::class, 'call'];
    $u->make_error = [OpensanctumMakeError::class, 'call'];
    $u->feature_add = [OpensanctumFeatureAdd::class, 'call'];
    $u->feature_hook = [OpensanctumFeatureHook::class, 'call'];
    $u->feature_init = [OpensanctumFeatureInit::class, 'call'];
    $u->fetcher = [OpensanctumFetcher::class, 'call'];
    $u->make_fetch_def = [OpensanctumMakeFetchDef::class, 'call'];
    $u->make_context = [OpensanctumMakeContext::class, 'call'];
    $u->make_options = [OpensanctumMakeOptions::class, 'call'];
    $u->make_request = [OpensanctumMakeRequest::class, 'call'];
    $u->make_response = [OpensanctumMakeResponse::class, 'call'];
    $u->make_result = [OpensanctumMakeResult::class, 'call'];
    $u->make_point = [OpensanctumMakePoint::class, 'call'];
    $u->make_spec = [OpensanctumMakeSpec::class, 'call'];
    $u->make_url = [OpensanctumMakeUrl::class, 'call'];
    $u->param = [OpensanctumParam::class, 'call'];
    $u->prepare_auth = [OpensanctumPrepareAuth::class, 'call'];
    $u->prepare_body = [OpensanctumPrepareBody::class, 'call'];
    $u->prepare_headers = [OpensanctumPrepareHeaders::class, 'call'];
    $u->prepare_method = [OpensanctumPrepareMethod::class, 'call'];
    $u->prepare_params = [OpensanctumPrepareParams::class, 'call'];
    $u->prepare_path = [OpensanctumPreparePath::class, 'call'];
    $u->prepare_query = [OpensanctumPrepareQuery::class, 'call'];
    $u->result_basic = [OpensanctumResultBasic::class, 'call'];
    $u->result_body = [OpensanctumResultBody::class, 'call'];
    $u->result_headers = [OpensanctumResultHeaders::class, 'call'];
    $u->transform_request = [OpensanctumTransformRequest::class, 'call'];
    $u->transform_response = [OpensanctumTransformResponse::class, 'call'];
});
