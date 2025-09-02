/// <reference types="vitest" />
import { defineConfig, loadEnv, type ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

type TMode = 'development' | 'test' | 'production'

interface AppEnv {
    PORT: string
    BACKEND_PROXY: string
    VITE_ENV: TMode
}

const validateEnv = (envMode: TMode, env: AppEnv) => {
    const requiredVars: (keyof AppEnv)[] = ['PORT', 'BACKEND_PROXY', 'VITE_ENV']

    for (const key of requiredVars) {
        if (!env[key]) {
            throw new Error(`${key} is missing! Please define it in your .env.${envMode}`)
        }
    }
}

const normalizePort = (port: string): number => {
    const normalizedPort = parseInt(port, 10)
    if (isNaN(normalizedPort)) {
        throw new Error(`Invalid port number: ${port}. Please provide a valid port number in your .env file.`)
    }
    return normalizedPort
}

export default defineConfig(({ mode }) => {
    const envMode = mode as TMode
    const env = loadEnv(envMode, process.cwd(), '') as unknown as AppEnv

    validateEnv(envMode, env)

    const port = normalizePort(env.PORT)

    const config: ServerOptions = {
        port,
        open: true,
        proxy: {
            '/api': {
                target: env.BACKEND_PROXY,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }

    return {
        plugins: [
            react(),
            tailwindcss(),
            VitePWA({
                registerType: 'autoUpdate',
                injectRegister: 'auto',

                includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],

                manifest: {
                    name: 'albero',
                    short_name: 'albero',
                    description: 'albero',
                    theme_color: '#ffffff',
                    background_color: '#ffffff',
                    display: 'standalone',
                    icons: [
                        {
                            src: '/pwa-192x192.png',
                            sizes: '192x192',
                            type: 'image/png'
                        },
                        {
                            src: '/pwa-512x512.png',
                            sizes: '512x512',
                            type: 'image/png'
                        },
                        {
                            src: '/pwa-512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            purpose: 'any maskable'
                        }
                    ]
                },

                workbox: {
                    globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                    cleanupOutdatedCaches: true,
                    clientsClaim: true
                },

                devOptions: {
                    enabled: true, // only for dev preview
                    navigateFallback: 'index.html'
                }
            })
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: 'src/setupTests.ts',
            include: ['src/**/*.{test,spec}.{ts,tsx}'],
            coverage: {
                reporter: ['json', 'html'],
                include: ['src/**/*.{ts,tsx}'],
                exclude: ['coverage', 'dist', 'build', 'src/setupTests.ts', 'src/**/*.{test,spec}.{ts,tsx}'],
                thresholds: {
                    statements: 5,
                    branches: 5,
                    functions: 5,
                    lines: 5
                }
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@shared': path.resolve(__dirname, 'src/shared')
            }
        },
        server: config,
        preview: config,
        build: {
            minify: true,
            sourcemap: env.VITE_ENV === 'production',
            rollupOptions: {
                external: [/.*\.(test|spec)\.(ts|tsx)$/]
            }
        }
    }
})
