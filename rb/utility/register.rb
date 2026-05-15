# Opensanctum SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OpensanctumUtility.registrar = ->(u) {
  u.clean = OpensanctumUtilities::Clean
  u.done = OpensanctumUtilities::Done
  u.make_error = OpensanctumUtilities::MakeError
  u.feature_add = OpensanctumUtilities::FeatureAdd
  u.feature_hook = OpensanctumUtilities::FeatureHook
  u.feature_init = OpensanctumUtilities::FeatureInit
  u.fetcher = OpensanctumUtilities::Fetcher
  u.make_fetch_def = OpensanctumUtilities::MakeFetchDef
  u.make_context = OpensanctumUtilities::MakeContext
  u.make_options = OpensanctumUtilities::MakeOptions
  u.make_request = OpensanctumUtilities::MakeRequest
  u.make_response = OpensanctumUtilities::MakeResponse
  u.make_result = OpensanctumUtilities::MakeResult
  u.make_point = OpensanctumUtilities::MakePoint
  u.make_spec = OpensanctumUtilities::MakeSpec
  u.make_url = OpensanctumUtilities::MakeUrl
  u.param = OpensanctumUtilities::Param
  u.prepare_auth = OpensanctumUtilities::PrepareAuth
  u.prepare_body = OpensanctumUtilities::PrepareBody
  u.prepare_headers = OpensanctumUtilities::PrepareHeaders
  u.prepare_method = OpensanctumUtilities::PrepareMethod
  u.prepare_params = OpensanctumUtilities::PrepareParams
  u.prepare_path = OpensanctumUtilities::PreparePath
  u.prepare_query = OpensanctumUtilities::PrepareQuery
  u.result_basic = OpensanctumUtilities::ResultBasic
  u.result_body = OpensanctumUtilities::ResultBody
  u.result_headers = OpensanctumUtilities::ResultHeaders
  u.transform_request = OpensanctumUtilities::TransformRequest
  u.transform_response = OpensanctumUtilities::TransformResponse
}
