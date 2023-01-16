import React from 'react'

const convertFunction = (num) => {
    let conValue = parseFloat(num.replace(/,/g, ''))
    return conValue
}

export default convertFunction
