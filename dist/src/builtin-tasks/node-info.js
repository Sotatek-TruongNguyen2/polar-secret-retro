"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_env_1 = require("../internal/core/config/config-env");
var client_1 = require("../lib/client");
var task_names_1 = require("./task-names");
function default_1() {
    config_env_1.task(task_names_1.TASK_NODE_INFO, "Prints node info and status")
        .setAction(nodeInfo);
}
exports.default = default_1;
function nodeInfo(_taskArgs, env) {
    return __awaiter(this, void 0, void 0, function () {
        var client, _a, _b, _c, _d, _e, _f, nodeInfo;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    client = client_1.getClient(env.network);
                    console.log("Network:", env.network.name);
                    _b = (_a = console).log;
                    _c = ["ChainId:"];
                    return [4 /*yield*/, client.getChainId()];
                case 1:
                    _b.apply(_a, _c.concat([_g.sent()]));
                    _e = (_d = console).log;
                    _f = ["Block height:"];
                    return [4 /*yield*/, client.getHeight()];
                case 2:
                    _e.apply(_d, _f.concat([_g.sent()]));
                    return [4 /*yield*/, client.restClient.nodeInfo()
                            // eslint-disable-next-line
                            .catch(function (err) { throw new Error("Could not fetch node info: " + err); })];
                case 3:
                    nodeInfo = _g.sent();
                    console.log('Node Info: ', nodeInfo);
                    return [2 /*return*/];
            }
        });
    });
}