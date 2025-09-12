"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRateLimiter = exports.rateLimiterPostgres = void 0;
const rate_limiter_flexible_1 = require("rate-limiter-flexible");
const pg_1 = require("pg");
exports.rateLimiterPostgres = null;
const DURATION = 60;
const POINTS = 10;
const initRateLimiter = (databaseUrl) => {
    if (!databaseUrl) {
        throw new Error('DATABASE_URL environment variable is not defined');
    }
    const pool = new pg_1.Pool({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false }
    });
    exports.rateLimiterPostgres = new rate_limiter_flexible_1.RateLimiterPostgres({
        storeClient: pool,
        points: POINTS,
        duration: DURATION,
        tableName: 'Rate_Limiter'
    });
};
exports.initRateLimiter = initRateLimiter;
//# sourceMappingURL=rateLimiter.js.map