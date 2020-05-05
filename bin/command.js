'use strict'
import env from 'dotenv'
import server from './server'
import {compile} from './compiler'

/**
 * Main command
 * @param Object args
 * @return void 
 */
 const test = async ()=> {
    const view  = await compile('pages/index.edge')
    console.log(view)
 }


export const start = args => {
    env.config()
    
    if(args._.indexOf('serve') >= 0 ) {
        server()   
    }
    test()
}



