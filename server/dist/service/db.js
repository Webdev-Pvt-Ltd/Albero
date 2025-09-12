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
const pg_1 = require("pg");
const config_1 = __importDefault(require("../config/config"));
const url_1 = require("url");
let pool = null;
exports.default = {
    connect: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            pool = new pg_1.Pool({
                connectionString: config_1.default.DATABASE_URL,
                ssl: { rejectUnauthorized: false }
            });
            const client = yield pool.connect();
            client.release();
            const dbUrl = new url_1.URL(config_1.default.DATABASE_URL);
            return {
                pool,
                host: dbUrl.hostname,
                port: parseInt(dbUrl.port || '5432', 10),
                name: dbUrl.pathname.replace('/', '')
            };
        }
        catch (error) {
            throw new Error(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }),
    getPool: () => {
        if (!pool) {
            throw new Error('Database connection not initialized. Call connect() first.');
        }
        return pool;
    }
};
//# sourceMappingURL=db.js.map