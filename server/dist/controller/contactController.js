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
const httpResponse_1 = __importDefault(require("../util/httpResponse"));
const responseMessage_1 = __importDefault(require("../constant/responseMessage"));
const httpError_1 = __importDefault(require("../util/httpError"));
const prisma_1 = __importDefault(require("../util/prisma"));
const transporter_1 = require("../util/transporter");
const welcome_1 = require("../mails/welcome");
const notification_1 = require("../mails/notification");
const config_1 = __importDefault(require("../config/config"));
exports.default = {
    contact: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, phone, message } = req.body;
            if (!name || !email || !message) {
                return res.status(400).json({ error: 'Name, email, and message are required.' });
            }
            const contact = yield prisma_1.default.contact.create({
                data: { name, email, phone, message }
            });
            yield transporter_1.transporter.sendMail({
                from: config_1.default.EMAIL_USER,
                to: email,
                subject: 'We received your message – Albero',
                html: (0, welcome_1.generateWelcomeEmail)({ name, email, message })
            });
            yield transporter_1.transporter.sendMail({
                from: config_1.default.EMAIL_USER,
                to: config_1.default.ADMIN_EMAIL,
                subject: `New Contact Submission from ${name}`,
                html: (0, notification_1.generateNotificationEmail)({ name, email, phone: phone || '', message })
            });
            return (0, httpResponse_1.default)(req, res, 200, responseMessage_1.default.SUCCESS, contact);
        }
        catch (err) {
            return (0, httpError_1.default)(next, err, req, 500);
        }
    })
};
//# sourceMappingURL=contactController.js.map