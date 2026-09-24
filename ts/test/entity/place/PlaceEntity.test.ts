

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the place","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the place","t":"`$STRING`","key$":"id","index$":1},"imageUrl":{"a":true,"fo":"uri","h":"Image Url","n":"imageUrl","r":false,"sh":"URL to an image of the place","t":"`$STRING`","key$":"imageUrl","index$":2},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$OBJECT`","key$":"location","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the place of worship","t":"`$STRING`","key$":"name","index$":4},"religion":{"a":true,"h":"Religion","n":"religion","r":false,"sh":"Primary religion or faith tradition","t":"`$STRING`","key$":"religion","index$":5},"significance":{"a":true,"h":"Significance","n":"significance","r":false,"sh":"Historical or spiritual significance","t":"`$STRING`","key$":"significance","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of worship site","t":"`$STRING`","key$":"type","index$":7},"website":{"a":true,"fo":"uri","h":"Website","n":"website","r":false,"sh":"Official website URL","t":"`$STRING`","key$":"website","index$":8},"yearEstablished":{"a":true,"h":"Year Established","n":"yearEstablished","r":false,"sh":"Year the place was established or built","t":"`$INTEGER`","key$":"yearEstablished","index$":9}},"id":{"field":"id","name":"id"},"name":"place","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /places","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"religion","or":"religion","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/places","q":{"exist":["country","limit","offset","religion","type"]},"r":{},"s":[{"lit":"places"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"place","name__orig":"place","Name":"Place","name_":"place","name-":"place","NAME":"PLACE","index$":0}, {"active":true,"entity":"place","key$":"BasicPlaceFlow","kind":"basic","name":"BasicPlaceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"place_ref01"}}],"index$":0}]}, 'Place', {"GET /places":{"protocol":"http","operationId":"getPlaces","responses":{"200":{"description":"Successful response with list of places","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"data":{"items":{"properties":{"description":{"description":"Detailed description of the place","type":"string","key$":"description"},"id":{"description":"Unique identifier for the place","type":"string","key$":"id"},"imageUrl":{"description":"URL to an image of the place","format":"uri","type":"string","key$":"imageUrl"},"location":{"properties":{"address":{"type":"string"},"city":{"type":"string"},"coordinates":{"properties":{"latitude":{"format":"double","type":"number"},"longitude":{"format":"double","type":"number"}},"type":"object"},"country":{"type":"string"}},"type":"object","key$":"location"},"name":{"description":"Name of the place of worship","type":"string","key$":"name"},"religion":{"description":"Primary religion or faith tradition","type":"string","key$":"religion"},"significance":{"description":"Historical or spiritual significance","type":"string","key$":"significance"},"type":{"description":"Type of worship site","enum":["Temple","Church","Mosque","Synagogue","Shrine","Cathedral","Monastery"],"type":"string","key$":"type"},"website":{"description":"Official website URL","format":"uri","type":"string","key$":"website"},"yearEstablished":{"description":"Year the place was established or built","type":"integer","key$":"yearEstablished"}},"type":"object","x-ref":"#/components/schemas/Place","index$":0},"key$":"data","type":"array"},"pagination":{"key$":"pagination","properties":{"limit":{"type":"integer"},"offset":{"type":"integer"},"total":{"type":"integer"}},"type":"object"}}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"country","in":"query","description":"Filter places by country","required":false,"schema":{"type":"string"},"index$":0},{"name":"religion","in":"query","description":"Filter places by religion or faith tradition","required":false,"schema":{"type":"string","enum":["Christianity","Islam","Hinduism","Buddhism","Judaism","Sikhism","Other"]},"index$":1},{"name":"type","in":"query","description":"Filter places by type of worship site","required":false,"schema":{"type":"string","enum":["Temple","Church","Mosque","Synagogue","Shrine","Cathedral","Monastery"]},"index$":2},{"name":"limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","default":20,"minimum":1,"maximum":100},"index$":3},{"name":"offset","in":"query","description":"Number of results to skip for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":4}],"securitySource":"unspecified"}})
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
  
