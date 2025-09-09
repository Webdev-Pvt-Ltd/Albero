import { createLogger, format, transports } from 'winston'
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports'
import util from 'util'
import { EApplicationEnvironment } from '../constant/application'
import config from '../config/config'
import path from 'path'
import * as sourceMapSupport from 'source-map-support'
import { blue, green, red, yellow } from 'colorette'

// Linking Trace Support
sourceMapSupport.install()

const colorizeLevel = (level: string) => {
    switch (level) {
        case 'ERROR':
            return red(level)
        case 'INFO':
            return blue(level)
        case 'WARN':
            return yellow(level)
        default:
            return level
    }
}

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info

    const customLevel = colorizeLevel(level.toUpperCase())
    const customTimestamp = green(timestamp as string)

    const customMeta = util.inspect(meta, {
        showHidden: false,
        depth: null,
        colors: true
    })

    return `${String(customLevel)} [${String(customTimestamp)}] ${String(message)}\nMETA ${String(customMeta)}\n`
})

const consoleTransport = (): Array<ConsoleTransportInstance> => {
    if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), consoleLogFormat)
            })
        ]
    }
    return []
}

const fileLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info
    const logMeta: Record<string, unknown> = {}

    if (typeof meta === 'object' && meta !== null && !Array.isArray(meta)) {
        for (const [key, value] of Object.entries(meta)) {
            if (value instanceof Error) {
                logMeta[key] = {
                    name: value.name,
                    message: value.message,
                    trace: value.stack || ''
                }
            } else {
                logMeta[key] = value
            }
        }
    }

    return JSON.stringify({
        level: level.toUpperCase(),
        message,
        timestamp,
        meta: logMeta
    }, null, 4)
})

const FileTransport = (): Array<FileTransportInstance> => {
    return [
        new transports.File({
            filename: path.join(__dirname, '../', '../', 'logs', `${config.ENV}.log`),
            level: 'info',
            format: format.combine(format.timestamp(), fileLogFormat)
        })
    ]
}

export default createLogger({
    defaultMeta: { meta: {} },
    transports: [...FileTransport(), ...consoleTransport()]
})
