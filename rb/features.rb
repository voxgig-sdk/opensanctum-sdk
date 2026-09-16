# Opensanctum SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OpensanctumFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpensanctumBaseFeature.new
    when "ratelimit"
      OpensanctumRatelimitFeature.new
    when "retry"
      OpensanctumRetryFeature.new
    when "test"
      OpensanctumTestFeature.new
    when "timeout"
      OpensanctumTimeoutFeature.new
    else
      OpensanctumBaseFeature.new
    end
  end
end
