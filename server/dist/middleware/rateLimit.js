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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rateLimiter_1 = require("../config/rateLimiter");
const httpError_1 = __importDefault(require("../util/httpError"));
const responseMessage_1 = __importDefault(require("../constant/responseMessage"));
exports.default = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!rateLimiter_1.rateLimiterPostgres) {
        return (0, httpError_1.default)(next, new Error('Rate limiter not initialized'), req, 500);
    }
    try {
        yield rateLimiter_1.rateLimiterPostgres.consume((_a = req.ip) !== null && _a !== void 0 ? _a : 'unknown');
        next();
    }
    catch (_b) {
        (0, httpError_1.default)(next, new Error(responseMessage_1.default.TOO_MANY_REQUESTS), req, 429);
    }
});
//# sourceMappingURL=rateLimit.js.map