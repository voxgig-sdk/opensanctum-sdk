-- Opensanctum SDK error

local OpensanctumError = {}
OpensanctumError.__index = OpensanctumError


function OpensanctumError.new(code, msg, ctx)
  local self = setmetatable({}, OpensanctumError)
  self.is_sdk_error = true
  self.sdk = "Opensanctum"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OpensanctumError:error()
  return self.msg
end


function OpensanctumError:__tostring()
  return self.msg
end


return OpensanctumError
