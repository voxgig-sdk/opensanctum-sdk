

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"culturalSignificance":{"a":true,"h":"Cultural Significance","n":"culturalSignificance","r":false,"sh":"Cultural and historical significance","t":"`$STRING`","key$":"culturalSignificance","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the tradition","t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the tradition","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the religious tradition or practice","t":"`$STRING`","key$":"name","index$":3},"observances":{"a":true,"h":"Observances","n":"observances","r":false,"sh":"Regular observances or ceremonies","t":"`$ARRAY`","key$":"observances","index$":4},"origin":{"a":true,"h":"Origin","n":"origin","r":false,"t":"`$OBJECT`","key$":"origin","index$":5},"practices":{"a":true,"h":"Practices","n":"practices","r":false,"sh":"List of associated practices or rituals","t":"`$ARRAY`","key$":"practices","index$":6},"religion":{"a":true,"h":"Religion","n":"religion","r":false,"sh":"Associated religion","t":"`$STRING`","key$":"religion","index$":7}},"id":{"field":"id","name":"id"},"name":"tradition","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /traditions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"region","or":"region","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"religion","or":"religion","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/traditions","q":{"exist":["limit","offset","region","religion","search"]},"r":{},"s":[{"lit":"traditions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tradition","name__orig":"tradition","Name":"Tradition","name_":"tradition","name-":"tradition","NAME":"TRADITION","index$":1}, {"active":true,"entity":"tradition","key$":"BasicTraditionFlow","kind":"basic","name":"BasicTraditionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tradition_ref01"}}],"index$":0}]}, 'Tradition', {"GET /traditions":{"protocol":"http","operationId":"getTraditions","responses":{"200":{"description":"Successful response with list of traditions","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"data":{"items":{"properties":{"culturalSignificance":{"description":"Cultural and historical significance","type":"string","key$":"culturalSignificance"},"description":{"description":"Detailed description of the tradition","type":"string","key$":"description"},"id":{"description":"Unique identifier for the tradition","type":"string","key$":"id"},"name":{"description":"Name of the religious tradition or practice","type":"string","key$":"name"},"observances":{"description":"Regular observances or ceremonies","items":{"properties":{"description":{"type":"string"},"frequency":{"type":"string"},"name":{"type":"string"}},"type":"object"},"type":"array","key$":"observances"},"origin":{"properties":{"country":{"description":"Country of origin","type":"string"},"period":{"description":"Historical period of origin","type":"string"},"region":{"description":"Geographical region of origin","type":"string"}},"type":"object","key$":"origin"},"practices":{"description":"List of associated practices or rituals","items":{"type":"string"},"type":"array","key$":"practices"},"religion":{"description":"Associated religion","type":"string","key$":"religion"}},"type":"object","x-ref":"#/components/schemas/Tradition","index$":0},"key$":"data","type":"array"},"pagination":{"key$":"pagination","properties":{"limit":{"type":"integer"},"offset":{"type":"integer"},"total":{"type":"integer"}},"type":"object"}}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"religion","in":"query","description":"Filter traditions by religion","required":false,"schema":{"type":"string","enum":["Christianity","Islam","Hinduism","Buddhism","Judaism","Sikhism","Other"]},"index$":0},{"name":"region","in":"query","description":"Filter traditions by geographical region","required":false,"schema":{"type":"string","enum":["Asia","Europe","Africa","North America","South America","Oceania","Middle East"]},"index$":1},{"name":"search","in":"query","description":"Search traditions by name or description","required":false,"schema":{"type":"string"},"index$":2},{"name":"limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","default":20,"minimum":1,"maximum":100},"index$":3},{"name":"offset","in":"query","description":"Number of results to skip for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":4}],"securitySource":"unspecified"}})
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
  
