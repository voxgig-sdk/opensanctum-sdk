

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


describe('PlaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENSANCTUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENSANCTUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpensanctumSDK.test()
    const ent = testsdk.Place()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENSANCTUM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'place.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Detailed description of the place","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique identifier for the place","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"imageUrl","req":false,"short":"URL to an image of the place","type":"`$STRING`","index$":2},{"active":true,"name":"location","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"name","req":false,"short":"Name of the place of worship","type":"`$STRING`","index$":4},{"active":true,"name":"religion","req":false,"short":"Primary religion or faith tradition","type":"`$STRING`","index$":5},{"active":true,"name":"significance","req":false,"short":"Historical or spiritual significance","type":"`$STRING`","index$":6},{"active":true,"name":"type","req":false,"short":"Type of worship site","type":"`$STRING`","index$":7},{"active":true,"format":"uri","name":"website","req":false,"short":"Official website URL","type":"`$STRING`","index$":8},{"active":true,"name":"yearEstablished","req":false,"short":"Year the place was established or built","type":"`$INTEGER`","index$":9}],"id":{"field":"id","name":"id"},"name":"place","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"religion","orig":"religion","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /places","json":"{\"operationId\":\"getPlaces\",\"parameters\":[{\"description\":\"Filter places by country\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter places by religion or faith tradition\",\"in\":\"query\",\"name\":\"religion\",\"required\":false,\"schema\":{\"enum\":[\"Christianity\",\"Islam\",\"Hinduism\",\"Buddhism\",\"Judaism\",\"Sikhism\",\"Other\"],\"type\":\"string\"}},{\"description\":\"Filter places by type of worship site\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"enum\":[\"Temple\",\"Church\",\"Mosque\",\"Synagogue\",\"Shrine\",\"Cathedral\",\"Monastery\"],\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the place\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the place\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to an image of the place\",\"format\":\"uri\",\"type\":\"string\"},\"location\":{\"properties\":{\"address\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"coordinates\":{\"properties\":{\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"country\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the place of worship\",\"type\":\"string\"},\"religion\":{\"description\":\"Primary religion or faith tradition\",\"type\":\"string\"},\"significance\":{\"description\":\"Historical or spiritual significance\",\"type\":\"string\"},\"type\":{\"description\":\"Type of worship site\",\"enum\":[\"Temple\",\"Church\",\"Mosque\",\"Synagogue\",\"Shrine\",\"Cathedral\",\"Monastery\"],\"type\":\"string\"},\"website\":{\"description\":\"Official website URL\",\"format\":\"uri\",\"type\":\"string\"},\"yearEstablished\":{\"description\":\"Year the place was established or built\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"limit\":{\"type\":\"integer\"},\"offset\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of places\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/places","segments":[{"lit":"places"}],"select":{"exist":["country","limit","offset","religion","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"place","name__orig":"place","Name":"Place","name_":"place","name-":"place","NAME":"PLACE","index$":0}, {"active":true,"entity":"place","key$":"BasicPlaceFlow","kind":"basic","name":"BasicPlaceFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"place_ref01"}}],"index$":0}]}, 'Place')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let place_ref01_data = Object.values(setup.data.existing.place)[0] as any

    // LIST
    const place_ref01_ent = client.Place()
    const place_ref01_match: any = {}

    const place_ref01_list = (await place_ref01_ent.list(place_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/place/PlaceTestData.json')

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
    ['place01','place02','place03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENSANCTUM_TEST_PLACE_ENTID': idmap,
    'OPENSANCTUM_TEST_LIVE': 'FALSE',
    'OPENSANCTUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPENSANCTUM_TEST_PLACE_ENTID']

  const live = 'TRUE' === env.OPENSANCTUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENSANCTUM_TEST_PLACE_ENTID']
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
  
