'use strict'
import edge from 'edge.js'
import config from '../../nitros/config'
import readFile from '../util/readFile'
import replaceFile from '../util/replaceFileString'
import helper from '../../nitros/helper'

/**
 * Compile layout for edge plugin
 */
edge.registerViews(config.viewDirectory)

const compile = async (file, params = {}) => {
    return new Promise((resolve, reject) => {
        readFile(file)
            .then( result => {
                try {
                    let compiled = result;
                    compiled = replaceFile(compiled, helper.beforeCompile)
                    compiled = edge.renderString(result, params)
                    compiled = replaceFile(compiled, helper.afterCompile)
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


const helpers = ({name, params}) => {

} 

export default {
    compile,
    helpers
}