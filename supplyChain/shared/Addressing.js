const { createHash } = require('crypto')

_hash = (x) => {
    return createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 31);
}
_hashforpayload = (x) => {
    return createHash('sha512').update(x).digest('hex');
}

const prefix = {
    land: '00',
    cultivation: '01',
    inspection: '02',
    harvest: '03',
    processAgent: '04',
    retailAgent: '05',
    purchase: '06'
}

module.exports = { prefix, _hash, _hashforpayload }