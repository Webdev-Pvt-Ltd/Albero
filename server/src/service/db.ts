// src/service/db.ts
import { Pool } from 'pg'
import config from '../config/config'
import { URL } from 'url'

let pool: Pool | null = null

export default {
    connect: async () => {
        try {
            pool = new Pool({
                connectionString: config.DATABASE_URL,
                ssl: { rejectUnauthorized: false }
            })

            // Test connection
            const client = await pool.connect()
            client.release()

            // Parse URL for logging info
            const dbUrl = new URL(config.DATABASE_URL as string)

            return {
                pool,
                host: dbUrl.hostname,
                port: parseInt(dbUrl.port || '5432', 10),
                name: dbUrl.pathname.replace('/', '')
            }
        } catch (error) {
            throw new Error(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
        }
    },
    getPool: (): Pool => {
        if (!pool) {
            throw new Error('Database connection not initialized. Call connect() first.')
        }
        return pool
    }
}
