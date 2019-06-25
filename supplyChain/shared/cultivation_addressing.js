const { _hash } = require('./Addressing')
const addressing = require('./Addressing')
const env = require('./env')

get_cultivation_address = (RegistrationNo, farmers_public_key) => {
    return env.TP_NAMESPACE + addressing.prefix.cultivation + _hash(farmers_public_key) + _hash(RegistrationNo)
}

module.exports = { get_cultivation_address }