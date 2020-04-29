#!/usr/bin/env node

/**
 * Base module
 * @module esm
 * @param args
 * @return void
 */
const argv = require('yargs').argv
require = require('esm')(module, {})
module.exports = require("./bin/command.js").start(argv)
