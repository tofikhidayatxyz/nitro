'use strict'
import config from '../../nitros/config'
import path from 'path'
import fs from 'fs'
const yamlFront =  require('yaml-front-matter')
import crypto from 'crypto'
/**
 * Handle load collection
 */

 const createId = (text, type) => {
     switch (type) {
         case 'md5' :
             return crypto.createHash('md5').update(text).digest('hex')
         case 'base64':
             return Buffer.from(text).toString('base64')
         default: 
            return text
     }
 }


const readCollection = (name, enc=false) => {
    const collectionDir = path.join(config.collection.directory, name)
    return new Promise((resolve, reject) => {
        const jsonData = [];
        fs.readdir(collectionDir, async (err, files) => {
            if(err) {
                return reject(err)
            }
            for (const file of files) {
                const result = await fs.readFileSync(path.join(collectionDir, file), 'utf8')
                const loaded = yamlFront.loadFront(result)
                loaded.content = loaded.__content
                delete loaded.__content
                jsonData.push({
                    id : createId(file.replace('.md', ''), enc),
                    ...loaded
                })
            }
            const resultObject = jsonData.filter(Boolean)
            return resolve(resultObject)
        })
        
    })
}

export default readCollection