"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportProperHex = void 0;
function supportProperHex(Assertion) {
    Assertion.addMethod('properHex', function (length) {
        var subject = this._obj;
        var regexp = new RegExp("^0x[0-9-a-fA-F]{" + length + "}$");
        this.assert(regexp.test(subject), "Expected \"" + subject + "\" to be a proper hex of length " + length, "Expected \"" + subject + "\" not to be a proper hex of length " + length + ", but it was", 'proper hex (eg.: 0x12345f5a7)', subject);
    });
}
exports.supportProperHex = supportProperHex;
