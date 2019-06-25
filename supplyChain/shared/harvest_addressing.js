const env = require('./env')
const { _hash } = require('./Addressing')
const addressing = require('./Addressing')

get_harvest_address = (RegistrationNo, farmers_public_key) => {
    return env.TP_NAMESPACE + addressing.prefix.harvest + _hash(farmers_public_key) + _hash(RegistrationNo)
}

module.exports = { get_harvest_address }