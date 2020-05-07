'use strict'
import env from 'dotenv'
import server from './server'
import {autoloader as compilerLoader} from './compiler'
import collection from './loader/collection'

/**
 * Main command
 * @param Object args
 * @return void 
 */
 const test = async ()=> {
     // name, encription
    const view  = await collection('post', 'md5')
    console.log(view)
 }


export const start = args => {
    // load env
    env.config()
    // reset compile loader event
    compilerLoader()
    
    if(args._.indexOf('serve') >= 0 ) {
        server()   
    }
    test()
}



