"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("../util/logger"));
const healthCheck = () => {
    const url = config_1.default.SERVER_URL;
    if (!url) {
        logger_1.default.error('SERVER_URL is not defined in config');
        return;
    }
    const client = url.startsWith('https') ? https_1.default : http_1.default;
    client
        .get(url + '/api/v1/health', (res) => {
        if (res.statusCode === 200) {
            logger_1.default.info(`Health check passed for ${url}, status: ${res.statusCode}`);
        }
        else {
            logger_1.default.warn(`Health check failed for ${url}, status: ${res.statusCode}`);
        }
    })
        .on('error', (err) => {
        const message = err && typeof err.message === 'string' ? err.message : String(err);
        logger_1.default.error(`Health check error for ${url}: ${message}`);
    });
};
const job = new cron_1.CronJob('*/15 * * * *', healthCheck, null, true, 'Asia/Kolkata');
exports.default = job;
//# sourceMappingURL=cron.js.map