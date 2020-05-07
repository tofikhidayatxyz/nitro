'use strict'

const helpers = {
    haveA: (parent, str) => {
        return str.includes('a')
    },
    haveB: (parent, str) => {
        return str.includes('b')
    }
}

export default helpers