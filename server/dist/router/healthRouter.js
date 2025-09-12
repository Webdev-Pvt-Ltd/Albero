"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthController_1 = __importDefault(require("../controller/healthController"));
const rateLimit_1 = __importDefault(require("../middleware/rateLimit"));
const router = (0, express_1.Router)();
router.route('/self').get(healthController_1.default.self);
router.route('/health').get(rateLimit_1.default, healthController_1.default.health);
exports.default = router;
//# sourceMappingURL=healthRouter.js.map