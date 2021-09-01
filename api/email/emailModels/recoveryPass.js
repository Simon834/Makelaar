const {emailBase} = require('./emailBase')

function recoveryPass(porps){
    return emailBase(porps)
}

module.exports = { recoveryPass }