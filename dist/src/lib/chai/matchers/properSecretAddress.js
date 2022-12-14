"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportProperSecretAddress = void 0;
function supportProperSecretAddress(Assertion) {
    Assertion.addProperty('properSecretAddress', function () {
        var subject = this._obj;
        this.assert(/^secret[0-9-a-fA-F]{39}$/.test(subject), "Expected \"" + subject + "\" to be a proper secret address", "Expected \"" + subject + "\" not to be a proper secret address", 'proper secret address (eg.: secret123456789012345678901234567890123456789)', subject);
    });
}
exports.supportProperSecretAddress = supportProperSecretAddress;
