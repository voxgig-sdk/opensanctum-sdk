

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpensanctumSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TraditionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENSANCTUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENSANCTUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpensanctumSDK.test()
    const ent = testsdk.Tradition()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENSANCTUM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tradition.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"culturalSignificance","req":false,"short":"Cultural and historical significance","type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"short":"Detailed description of the tradition","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the tradition","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Name of the religious tradition or practice","type":"`$STRING`","index$":3},{"active":true,"name":"observances","req":false,"short":"Regular observances or ceremonies","type":"`$ARRAY`","index$":4},{"active":true,"name":"origin","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"practices","req":false,"short":"List of associated practices or rituals","type":"`$ARRAY`","index$":6},{"active":true,"name":"religion","req":false,"short":"Associated religion","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"tradition","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"region","orig":"region","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"religion","orig":"religion","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /traditions","json":"{\"operationId\":\"getTraditions\",\"parameters\":[{\"description\":\"Filter traditions by religion\",\"in\":\"query\",\"name\":\"religion\",\"required\":false,\"schema\":{\"enum\":[\"Christianity\",\"Islam\",\"Hinduism\",\"Buddhism\",\"Judaism\",\"Sikhism\",\"Other\"],\"type\":\"string\"}},{\"description\":\"Filter traditions by geographical region\",\"in\":\"query\",\"name\":\"region\",\"required\":false,\"schema\":{\"enum\":[\"Asia\",\"Europe\",\"Africa\",\"North America\",\"South America\",\"Oceania\",\"Middle East\"],\"type\":\"string\"}},{\"description\":\"Search traditions by name or description\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"culturalSignificance\":{\"description\":\"Cultural and historical significance\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the tradition\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the tradition\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the religious tradition or practice\",\"type\":\"string\"},\"observances\":{\"description\":\"Regular observances or ceremonies\",\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"frequency\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"origin\":{\"properties\":{\"country\":{\"description\":\"Country of origin\",\"type\":\"string\"},\"period\":{\"description\":\"Historical period of origin\",\"type\":\"string\"},\"region\":{\"description\":\"Geographical region of origin\",\"type\":\"string\"}},\"type\":\"object\"},\"practices\":{\"description\":\"List of associated practices or rituals\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"religion\":{\"description\":\"Associated religion\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"limit\":{\"type\":\"integer\"},\"offset\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of traditions\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/traditions","segments":[{"lit":"traditions"}],"select":{"exist":["limit","offset","region","religion","search"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tradition","name__orig":"tradition","Name":"Tradition","name_":"tradition","name-":"tradition","NAME":"TRADITION","index$":1}, {"active":true,"entity":"tradition","key$":"BasicTraditionFlow","kind":"basic","name":"BasicTraditionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"tradition_ref01"}}],"index$":0}]}, 'Tradition')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tradition_ref01_data = Object.values(setup.data.existing.tradition)[0] as any

    // LIST
    const tradition_ref01_ent = client.Tradition()
    const tradition_ref01_match: any = {}

    const tradition_ref01_list = (await tradition_ref01_ent.list(tradition_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tradition/TraditionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpensanctumSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['tradition01','tradition02','tradition03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENSANCTUM_TEST_TRADITION_ENTID': idmap,
    'OPENSANCTUM_TEST_LIVE': 'FALSE',
    'OPENSANCTUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPENSANCTUM_TEST_TRADITION_ENTID']

  const live = 'TRUE' === env.OPENSANCTUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENSANCTUM_TEST_TRADITION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpensanctumSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OPENSANCTUM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
