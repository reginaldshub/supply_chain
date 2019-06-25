const env = require('./env')
const { _hash } = require('./Addressing')
const addressing = require('./Addressing')

get_inspection_address = (RegistrationNo, farmers_public_key, inspectors_public_key) => {
    return env.TP_NAMESPACE + addressing.prefix.inspection + _hash(farmers_public_key).substring(0, 20) + _hash(RegistrationNo).substring(0, 20) + _hash(inspectors_public_key).substring(0, 22)
}

module.exports = { get_inspection_address }