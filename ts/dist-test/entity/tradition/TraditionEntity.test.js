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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "culturalSignificance": { "a": true, "h": "Cultural Significance", "n": "culturalSignificance", "r": false, "sh": "Cultural and historical significance", "t": "`$STRING`", "key$": "culturalSignificance", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Detailed description of the tradition", "t": "`$STRING`", "key$": "description", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the tradition", "t": "`$STRING`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the religious tradition or practice", "t": "`$STRING`", "key$": "name", "index$": 3 }, "observances": { "a": true, "h": "Observances", "n": "observances", "r": false, "sh": "Regular observances or ceremonies", "t": "`$ARRAY`", "key$": "observances", "index$": 4 }, "origin": { "a": true, "h": "Origin", "n": "origin", "r": false, "t": "`$OBJECT`", "key$": "origin", "index$": 5 }, "practices": { "a": true, "h": "Practices", "n": "practices", "r": false, "sh": "List of associated practices or rituals", "t": "`$ARRAY`", "key$": "practices", "index$": 6 }, "religion": { "a": true, "h": "Religion", "n": "religion", "r": false, "sh": "Associated religion", "t": "`$STRING`", "key$": "religion", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "tradition", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /traditions", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "region", "or": "region", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "religion", "or": "religion", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/traditions", "q": { "exist": ["limit", "offset", "region", "religion", "search"] }, "r": {}, "s": [{ "lit": "traditions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "tradition", "name__orig": "tradition", "Name": "Tradition", "name_": "tradition", "name-": "tradition", "NAME": "TRADITION", "index$": 1 }, { "active": true, "entity": "tradition", "key$": "BasicTraditionFlow", "kind": "basic", "name": "BasicTraditionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tradition_ref01" } }], "index$": 0 }] }, 'Tradition', { "GET /traditions": { "protocol": "http", "operationId": "getTraditions", "responses": { "200": { "description": "Successful response with list of traditions", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "example": true, "key$": "success", "type": "boolean" }, "data": { "items": { "properties": { "culturalSignificance": { "description": "Cultural and historical significance", "type": "string", "key$": "culturalSignificance" }, "description": { "description": "Detailed description of the tradition", "type": "string", "key$": "description" }, "id": { "description": "Unique identifier for the tradition", "type": "string", "key$": "id" }, "name": { "description": "Name of the religious tradition or practice", "type": "string", "key$": "name" }, "observances": { "description": "Regular observances or ceremonies", "items": { "properties": { "description": { "type": "string" }, "frequency": { "type": "string" }, "name": { "type": "string" } }, "type": "object" }, "type": "array", "key$": "observances" }, "origin": { "properties": { "country": { "description": "Country of origin", "type": "string" }, "period": { "description": "Historical period of origin", "type": "string" }, "region": { "description": "Geographical region of origin", "type": "string" } }, "type": "object", "key$": "origin" }, "practices": { "description": "List of associated practices or rituals", "items": { "type": "string" }, "type": "array", "key$": "practices" }, "religion": { "description": "Associated religion", "type": "string", "key$": "religion" } }, "type": "object", "x-ref": "#/components/schemas/Tradition", "index$": 0 }, "key$": "data", "type": "array" }, "pagination": { "key$": "pagination", "properties": { "limit": { "type": "integer" }, "offset": { "type": "integer" }, "total": { "type": "integer" } }, "type": "object" } } } } } }, "400": { "description": "Bad request - Invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "object", "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "object", "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "religion", "in": "query", "description": "Filter traditions by religion", "required": false, "schema": { "type": "string", "enum": ["Christianity", "Islam", "Hinduism", "Buddhism", "Judaism", "Sikhism", "Other"] }, "index$": 0 }, { "name": "region", "in": "query", "description": "Filter traditions by geographical region", "required": false, "schema": { "type": "string", "enum": ["Asia", "Europe", "Africa", "North America", "South America", "Oceania", "Middle East"] }, "index$": 1 }, { "name": "search", "in": "query", "description": "Search traditions by name or description", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "limit", "in": "query", "description": "Maximum number of results to return", "required": false, "schema": { "type": "integer", "default": 20, "minimum": 1, "maximum": 100 }, "index$": 3 }, { "name": "offset", "in": "query", "description": "Number of results to skip for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 4 }], "securitySource": "unspecified" } });
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