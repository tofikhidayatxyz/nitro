'use strict'
import ejs from 'ejs'
import config from '../../nitros/config'
import readFile from '../util/readFile'
import replaceFile from '../util/replaceFileString'
import replacer from '../../nitros/replacer'
import helpers from '../../nitros/helper'

/**
 * Compile layout for edge plugin
 */

const compile = async (file, params = {}) => {
    return new Promise((resolve, reject) => {
        readFile(file)
            .then( result => {
                try {
                    let compiled = result;
                    params.helper = helpers
                    compiled = replaceFile(compiled, replacer.beforeCompile)
                    compiled = ejs.render(result, params, {
                        root: config.view.directory
                    })
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



export default {
    compile
}