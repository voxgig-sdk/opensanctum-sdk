# Opensanctum SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OpensanctumFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpensanctumBaseFeature.new
    when "test"
      OpensanctumTestFeature.new
    else
      OpensanctumBaseFeature.new
    end
  end
end
