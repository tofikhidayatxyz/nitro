'use strict'

const replace = (text, replace) => {
    for (const data of replace) {
        text = text.replace(data.key, data.replace)
    }
    console.log(text)
    return text
}

export default replace