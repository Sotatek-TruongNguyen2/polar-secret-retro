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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var fs_extra_1 = __importDefault(require("fs-extra"));
var task_names_1 = require("../../src/builtin-tasks/task-names");
var errors_list_1 = require("../../src/internal/core/errors-list");
var project_structure_1 = require("../../src/internal/core/project-structure");
var compile_1 = require("../../src/lib/compile/compile");
var environment_1 = require("../helpers/environment");
var errors_1 = require("../helpers/errors");
var project_1 = require("../helpers/project");
describe("Clean task", function () {
    project_1.useFixtureProject("testproject");
    environment_1.useEnvironment();
    afterEach(function () {
        fs_extra_1.default.removeSync("./" + project_structure_1.ARTIFACTS_DIR);
    });
    it("When contract name is not specified", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, compile_1.compile(false, [], false, false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.env.run(task_names_1.TASK_CLEAN, {})];
                    case 2:
                        _a.sent();
                        chai_1.assert.isFalse(fs_extra_1.default.existsSync("./" + project_structure_1.ARTIFACTS_DIR));
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(200000);
    it("When there is no Artifacts directory and contract name is specified", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, errors_1.expectPolarErrorAsync(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.env.run(task_names_1.TASK_CLEAN, { contractName: "sample-project" })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }, errors_list_1.ERRORS.GENERAL.ARTIFACTS_NOT_FOUND)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(200000);
    it("When contract name specified is incorrect", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, compile_1.compile(false, [], false, false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, errors_1.expectPolarErrorAsync(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.env.run(task_names_1.TASK_CLEAN, { contractName: "sample-project1" })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); }, errors_list_1.ERRORS.GENERAL.INCORRECT_CONTRACT_NAME)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(200000);
    it("When contract name is specified", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, compile_1.compile(false, [], false, false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.env.run(task_names_1.TASK_CLEAN, { contractName: "sample-project" })];
                    case 2:
                        _a.sent();
                        chai_1.assert.isFalse(fs_extra_1.default.existsSync("./" + project_structure_1.ARTIFACTS_DIR + "/contracts/sample-project.wasm"));
                        chai_1.assert.isFalse(fs_extra_1.default.existsSync("./" + project_structure_1.ARTIFACTS_DIR + "/schema/sample-project"));
                        chai_1.assert.isFalse(fs_extra_1.default.existsSync("./" + project_structure_1.ARTIFACTS_DIR + "/checkpoints/sample-project.yaml"));
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(200000);
});
