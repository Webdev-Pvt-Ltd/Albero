"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpResponse_1 = __importDefault(require("../util/httpResponse"));
const responseMessage_1 = __importDefault(require("../constant/responseMessage"));
const httpError_1 = __importDefault(require("../util/httpError"));
const quicker_1 = __importDefault(require("../util/quicker"));
exports.default = {
    self: (req, res, next) => {
        try {
            throw new Error('This is a test error');
            (0, httpResponse_1.default)(req, res, 200, responseMessage_1.default.SUCCESS);
        }
        catch (err) {
            (0, httpError_1.default)(next, err, req, 500);
        }
    },
    health: (req, res, next) => {
        try {
            const healthData = {
                application: quicker_1.default.getApplicationHealth(),
                system: quicker_1.default.getSystemHealth(),
                timestamp: Date.now()
            };
            (0, httpResponse_1.default)(req, res, 200, responseMessage_1.default.SUCCESS, healthData);
        }
        catch (err) {
            (0, httpError_1.default)(next, err, req, 500);
        }
    }
};
//# sourceMappingURL=healthController.js.map