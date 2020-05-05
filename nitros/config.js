'use strict'
import env from 'dotenv'
import path from 'path'
env.config()

/**
 * Main config
 */

export default {
    host: process.env.APP_HOST || '127.0.0.1',
    port: process.env.APP_PORT || 8080,
    engine: 'edge', // erb, liquid, ejs
    viewDirectory: path.join(__dirname, '../resources/views')

}