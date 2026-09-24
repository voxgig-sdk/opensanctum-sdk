"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpensanctumError = void 0;
class OpensanctumError extends Error {
    isOpensanctumError = true;
    sdk = 'Opensanctum';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OpensanctumError = OpensanctumError;
//# sourceMappingURL=OpensanctumError.js.map