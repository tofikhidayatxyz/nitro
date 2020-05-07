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
    collection: {
        directory: path.join(__dirname, '../collections')
    },
    data: {
        directory: path.join(__dirname, '../data')
    },
    view: {
        engine: 'edge', // erb, liquid, ejs
        extetion: 'edge', 
        directory: path.join(__dirname, '../resources/views'),
    },
    router: {
        type: 'manual',
        smart: true
    }
}