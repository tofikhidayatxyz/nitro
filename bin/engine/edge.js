'use strict'
import edge from 'edge.js'
import config from '../../nitros/config'
import readFile from '../util/readFile'
import replaceFile from '../util/replaceFileString'
import replacer from '../../nitros/replacer'

/**
 * Compile layout for edge plugin
 */
edge.registerViews(config.view.directory)

const compile = async (file, params = {}) => {
    return new Promise((resolve, reject) => {
        readFile(file)
            .then( result => {
                try {
                    let compiled = result;
                    compiled = replaceFile(compiled, replacer.beforeCompile)
                    compiled = edge.renderString(compiled, params)
                    compiled = replaceFile(compiled, replacer.afterCompile)
                    return resolve(compiled)
                } catch(e) {
                    reject(e)
                }
            })
            .catch(err => {
                return reject(err)
            })
    })
} 

// register helper
const helper = (name, run) => {
    return edge.global(name, function (param1=null, param2=null, param3=null, param4=null, param5=null, param6=null, param7=null) {
        return run(this, param1, param2, param3, param4, param5, param6, param7)
    })
}   

export default {
    compile,
    helper
}