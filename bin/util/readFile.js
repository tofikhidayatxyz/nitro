'use strict'
import fs from 'fs'
import path from 'path'
import config from '../../nitros/config'

/**
 * Handle default read file 
 * @param {*} fileName  
 * @param {*} customDir 
 */
const read = (fileName, customDir=false, extention=false) => {

    return new Promise((resolve, reject) => {
        return fs.readFile(path.join( (customDir || config.view.directory), `${fileName}.${extention || config.view.extetion}`), 'utf8', (err, data) => {
            if(err) {
                return reject(err)
            } else {
                return resolve(data)
            }
        })
    })
}

export default read