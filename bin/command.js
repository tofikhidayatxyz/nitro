'use strict'
import env from 'dotenv'
import server from './server'
/**
 * Main command
 * @param Object args
 * @return void 
 */
export const start = args => {
    env.config()
    
    if(args._.indexOf('serve') >= 0 ) {
        server()   
    }
    
}