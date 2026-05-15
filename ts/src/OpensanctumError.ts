
import { Context } from './Context'


class OpensanctumError extends Error {

  isOpensanctumError = true

  sdk = 'Opensanctum'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OpensanctumError
}

