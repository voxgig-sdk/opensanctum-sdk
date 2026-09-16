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
(0, node_test_1.describe)('TraditionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENSANCTUM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENSANCTUM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpensanctumSDK.test();
        const ent = testsdk.Tradition();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENSANCTUM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tradition.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "culturalSignificance", "req": false, "short": "Cultural and historical significance", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "description", "req": false, "short": "Detailed description of the tradition", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the tradition", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": false, "short": "Name of the religious tradition or practice", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "observances", "req": false, "short": "Regular observances or ceremonies", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "origin", "req": false, "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "practices", "req": false, "short": "List of associated practices or rituals", "type": "`$ARRAY`", "index$": 6 }, { "active": true, "name": "religion", "req": false, "short": "Associated religion", "type": "`$STRING`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "tradition", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 20, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "region", "orig": "region", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "religion", "orig": "religion", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "search", "orig": "search", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /traditions", "json": "{\"operationId\":\"getTraditions\",\"parameters\":[{\"description\":\"Filter traditions by religion\",\"in\":\"query\",\"name\":\"religion\",\"required\":false,\"schema\":{\"enum\":[\"Christianity\",\"Islam\",\"Hinduism\",\"Buddhism\",\"Judaism\",\"Sikhism\",\"Other\"],\"type\":\"string\"}},{\"description\":\"Filter traditions by geographical region\",\"in\":\"query\",\"name\":\"region\",\"required\":false,\"schema\":{\"enum\":[\"Asia\",\"Europe\",\"Africa\",\"North America\",\"South America\",\"Oceania\",\"Middle East\"],\"type\":\"string\"}},{\"description\":\"Search traditions by name or description\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"culturalSignificance\":{\"description\":\"Cultural and historical significance\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the tradition\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the tradition\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the religious tradition or practice\",\"type\":\"string\"},\"observances\":{\"description\":\"Regular observances or ceremonies\",\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"frequency\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"origin\":{\"properties\":{\"country\":{\"description\":\"Country of origin\",\"type\":\"string\"},\"period\":{\"description\":\"Historical period of origin\",\"type\":\"string\"},\"region\":{\"description\":\"Geographical region of origin\",\"type\":\"string\"}},\"type\":\"object\"},\"practices\":{\"description\":\"List of associated practices or rituals\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"religion\":{\"description\":\"Associated religion\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"limit\":{\"type\":\"integer\"},\"offset\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of traditions\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/traditions", "segments": [{ "lit": "traditions" }], "select": { "exist": ["limit", "offset", "region", "religion", "search"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "tradition", "name__orig": "tradition", "Name": "Tradition", "name_": "tradition", "name-": "tradition", "NAME": "TRADITION", "index$": 1 }, { "active": true, "entity": "tradition", "key$": "BasicTraditionFlow", "kind": "basic", "name": "BasicTraditionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "tradition_ref01" } }], "index$": 0 }] }, 'Tradition');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tradition_ref01_data = Object.values(setup.data.existing.tradition)[0];
        // LIST
        const tradition_ref01_ent = client.Tradition();
        const tradition_ref01_match = {};
        const tradition_ref01_list = (await tradition_ref01_ent.list(tradition_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tradition/TraditionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpensanctumSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tradition01', 'tradition02', 'tradition03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENSANCTUM_TEST_TRADITION_ENTID': idmap,
        'OPENSANCTUM_TEST_LIVE': 'FALSE',
        'OPENSANCTUM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OPENSANCTUM_TEST_TRADITION_ENTID'];
    const live = 'TRUE' === env.OPENSANCTUM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENSANCTUM_TEST_TRADITION_ENTID'];
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
//# sourceMappingURL=TraditionEntity.test.js.map