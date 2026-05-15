
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpensanctumSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OpensanctumSDK.test()
    equal(null !== testsdk, true)
  })

})
