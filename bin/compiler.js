'use strict'
import edge from './engine/edge'
import config from '../nitros/config'

/**
 * Load a file and validate them
 * @param {*} file 
 */

const readFile = async file => {

}

/**
 * Compile by engine 
 * @param {*} file 
 */
const compile = (file, params={}) => { 
    switch(config.engine) {
        case 'edge':
            return edge.compile(file, params)
        default:
            return edge.compile(file, params)
            
    }
}


export {
    compile
}