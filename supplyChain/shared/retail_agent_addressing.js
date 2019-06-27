const env = require('./env')
const addressing = require('./Addressing')
const { createHash } = require('crypto')

get_retail_address = (retail_agents_public_keys) => {
    return env.TP_NAMESPACE + addressing.prefix.retailAgent + createHash('sha512').update(retail_agents_public_keys).digest('hex').toLowerCase().substring(0, 62);
}

module.exports = { get_retail_address }