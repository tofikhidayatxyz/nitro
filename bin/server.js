'use strict'

import path from 'path'
import http from 'http'
import * as logger from 'morgan'
import express from 'express'
import debug from 'debug'
import config from '../nitro/config'
import bodyParser from 'body-parser'
import compression from 'compression'
import chalk from 'chalk'
import {normalizePort} from './util/http'

/**
 * Main server
 */
export default function serve() {
    const app  = express()
    const host = config.host
    const port = normalizePort(config.port)

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json()) 
    app.use(compression())

    app.use(express.static(path.join(__dirname, '../dist')));

    const server = http.createServer(app);
    server.listen(port, host, () => {
        console.log(`[SRV] listen on ${chalk.blue(host)}:${chalk.blue(port)}`)
    });
    server.on('error', error => {
        console.log(error)
    });
    server.on('listening', () =>{
        const addr = server.address();
        const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
    });
}