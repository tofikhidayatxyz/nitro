'use strict'
import env from 'dotenv'
env.config()

/**
 * Main config
 */
export default {
    host: process.env.APP_HOST || '127.0.0.1',
    port: process.env.APP_PORT || 8080
}