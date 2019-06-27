const env = require('./env')
const addressing = require('./Addressing')
const { createHash } = require('crypto')

get_process_address = (process_agents_public_keys) => {
    return env.TP_NAMESPACE + addressing.prefix.processAgent + createHash('sha512').update(process_agents_public_keys).digest('hex').toLowerCase().substring(0, 62);
}

module.exports = { get_process_address }