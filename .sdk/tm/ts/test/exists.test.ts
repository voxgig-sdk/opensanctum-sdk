
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpensanctumSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpensanctumSDK.test()
    equal(testsdk instanceof OpensanctumSDK, true,
      'OpensanctumSDK.test() must return a client synchronously')
  })

})
