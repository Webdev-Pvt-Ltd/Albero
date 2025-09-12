"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = __importDefault(require("../controller/contactController"));
const router = (0, express_1.Router)();
router.route('/contact').post(contactController_1.default.contact);
exports.default = router;
//# sourceMappingURL=contactRouter.js.map