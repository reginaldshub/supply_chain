const env = require('./env')
const { _hash } = require('./Addressing')
const addressing = require('./Addressing')

get_harvest_address = (RegistrationNo, farmers_public_key) => {
    console.log("get_harvest_address", RegistrationNo, farmers_public_key, addressing.prefix.inspection)
    return env.TP_NAMESPACE + addressing.prefix.inspection + _hash(farmers_public_key) + _hash(JSON.stringify(RegistrationNo))
}

module.exports = { get_harvest_address }