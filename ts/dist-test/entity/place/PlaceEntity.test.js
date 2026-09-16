"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PlaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENSANCTUM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENSANCTUM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpensanctumSDK.test();
        const ent = testsdk.Place();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENSANCTUM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'place.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "short": "Detailed description of the place", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the place", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "uri", "name": "imageUrl", "req": false, "short": "URL to an image of the place", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "location", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "name", "req": false, "short": "Name of the place of worship", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "religion", "req": false, "short": "Primary religion or faith tradition", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "significance", "req": false, "short": "Historical or spiritual significance", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "type", "req": false, "short": "Type of worship site", "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "uri", "name": "website", "req": false, "short": "Official website URL", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "yearEstablished", "req": false, "short": "Year the place was established or built", "type": "`$INTEGER`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "place", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "country", "orig": "country", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "religion", "orig": "religion", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /places", "json": "{\"operationId\":\"getPlaces\",\"parameters\":[{\"description\":\"Filter places by country\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter places by religion or faith tradition\",\"in\":\"query\",\"name\":\"religion\",\"required\":false,\"schema\":{\"enum\":[\"Christianity\",\"Islam\",\"Hinduism\",\"Buddhism\",\"Judaism\",\"Sikhism\",\"Other\"],\"type\":\"string\"}},{\"description\":\"Filter places by type of worship site\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"enum\":[\"Temple\",\"Church\",\"Mosque\",\"Synagogue\",\"Shrine\",\"Cathedral\",\"Monastery\"],\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the place\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the place\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to an image of the place\",\"format\":\"uri\",\"type\":\"string\"},\"location\":{\"properties\":{\"address\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"coordinates\":{\"properties\":{\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"country\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the place of worship\",\"type\":\"string\"},\"religion\":{\"description\":\"Primary religion or faith tradition\",\"type\":\"string\"},\"significance\":{\"description\":\"Historical or spiritual significance\",\"type\":\"string\"},\"type\":{\"description\":\"Type of worship site\",\"enum\":[\"Temple\",\"Church\",\"Mosque\",\"Synagogue\",\"Shrine\",\"Cathedral\",\"Monastery\"],\"type\":\"string\"},\"website\":{\"description\":\"Official website URL\",\"format\":\"uri\",\"type\":\"string\"},\"yearEstablished\":{\"description\":\"Year the place was established or built\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"limit\":{\"type\":\"integer\"},\"offset\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of places\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/places", "segments": [{ "lit": "places" }], "select": { "exist": ["country", "limit", "offset", "religion", "type"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "place", "name__orig": "place", "Name": "Place", "name_": "place", "name-": "place", "NAME": "PLACE", "index$": 0 }, { "active": true, "entity": "place", "key$": "BasicPlaceFlow", "kind": "basic", "name": "BasicPlaceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "place_ref01" } }], "index$": 0 }] }, 'Place');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let place_ref01_data = Object.values(setup.data.existing.place)[0];
        // LIST
        const place_ref01_ent = client.Place();
        const place_ref01_match = {};
        const place_ref01_list = (await place_ref01_ent.list(place_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/place/PlaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpensanctumSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['place01', 'place02', 'place03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENSANCTUM_TEST_PLACE_ENTID': idmap,
        'OPENSANCTUM_TEST_LIVE': 'FALSE',
        'OPENSANCTUM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OPENSANCTUM_TEST_PLACE_ENTID'];
    const live = 'TRUE' === env.OPENSANCTUM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENSANCTUM_TEST_PLACE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OpensanctumSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=PlaceEntity.test.js.map