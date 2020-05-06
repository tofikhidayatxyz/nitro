'use strict'
import env from 'dotenv'
import server from './server'
import {compile, autoloader as compilerLoader} from './compiler'

/**
 * Main command
 * @param Object args
 * @return void 
 */
 const test = async ()=> {
    const view  = await compile('pages/index')
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



