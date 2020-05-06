'use strict'
import edge from './engine/edge'
import ejs from './engine/ejs'
import config from '../nitros/config'
import helper from '../nitros/helper'

/**
 * Helper autoloader
 * @param {*} any
 */

 const autoloader = () => {
    switch(config.view.engine) {
        case 'edge':
            for (const key in helper) {
                edge.helper(key, helper[key])
            }
        default:
            return new Error('Invalid template Engine')  
    }
     
 }

/**
 * Compile by engine 
 * @param {*} file 
 */
const compile = (file, params={}) => { 
    switch(config.view.engine) {
        case 'edge':
            return edge.compile(file, params)
        case 'ejs': 
            return ejs.compile(file, params)
        default:
            return new Error('Invalid template Engine')
    }
}


export {
    compile,
    autoloader
}