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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const rateLimiter_1 = require("./config/rateLimiter");
const db_1 = __importDefault(require("./service/db"));
const logger_1 = __importDefault(require("./util/logger"));
const cron_1 = __importDefault(require("./config/cron"));
const server = app_1.default.listen(config_1.default.PORT);
if (config_1.default.ENV === 'production')
    cron_1.default.start();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.default.connect();
        logger_1.default.info(`DATABASE_CONNECTION`, {
            meta: {
                host: connection.host,
                port: connection.port,
                name: connection.name
            }
        });
        (0, rateLimiter_1.initRateLimiter)(process.env.DATABASE_URL);
        logger_1.default.info(`RATE_LIMITER_INITIALIZED`);
        logger_1.default.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config_1.default.PORT,
                SERVER_URL: config_1.default.SERVER_URL
            }
        });
    }
    catch (err) {
        logger_1.default.error(`APPLICATION_ERROR`, { meta: err });
        server.close((error) => {
            if (error) {
                logger_1.default.error(`APPLICATION_ERROR`, { meta: err });
            }
            process.exit(1);
        });
    }
}))();
//# sourceMappingURL=server.js.map