const env = require('./env')
const { _hash } = require('./Addressing')
let addressing = require('./Addressing')

get_land_registry_address = (RegistrationNo, farmers_public_key) => {
    console.log("prefix", addressing.prefix)
    console.log("addressing", addressing)
    return env.TP_NAMESPACE + addressing.prefix.land + _hash(farmers_public_key) + _hash(RegistrationNo)
}

module.exports = { get_land_registry_address }