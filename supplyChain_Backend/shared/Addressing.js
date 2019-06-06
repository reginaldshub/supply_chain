const { createHash } = require('crypto')
const env = require('./env');

_hash1 = (x) => {
    return createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 31);
}
_hash = (x) => {
    return createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 31);
}
get_record_id = (land_hash) => {
    return land_hash.substring(0, 30)
}
_hashforpayload = (x) => {
    return createHash('sha512').update(x).digest('hex');
}

const prefix = {
    land: '00',
    cultivation: '01',
    inspection: '02',
    harvest: '03',
    processing: '04',
    sale: '05',
    purchase: '06'
}

get_land_registry_address = (RegistrationNo, FarmerName) => {
    let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 6);
    console.log("TP_NAMESPACE", TP_NAMESPACE)
    console.log(FarmerName, RegistrationNo)
        // console.log(TP_NAMESPACE + prefix.land + _hash(FarmerName) + _hash(RegistrationNo))
    return TP_NAMESPACE + prefix.land + _hash(FarmerName) + _hash(RegistrationNo)
}

// get_farmer_registry_address = (registration_no, farm_address, farmer_name, land_size) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     let land_hash = createHash('sha512').update(registration_no + farmer_name + farm_address + land_size).digest('hex').toLowerCase().substring(0, 64);
//     return TP_NAMESPACE + land_hash
// }

// get_enrollement_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     return TP_NAMESPACE + record_id + prefix.enrollement + _hash1(id)
// }

// get_cultivation_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     return TP_NAMESPACE + record_id + prefix.cultivation + _hash1(id)
// }

// get_inspection_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6);
//     return TP_NAMESPACE + record_id + prefix.inspection + _hash1(id)
// }

// get_harvest_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     return TP_NAMESPACE + record_id + prefix.harvest + _hash1(id)
// }

// get_processing_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     return TP_NAMESPACE + record_id + prefix.processing + _hash1(id)
// }

// get_sale_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     return TP_NAMESPACE + record_id + prefix.sale + _hash1(id)
// }

// get_purchase_address = (record_id, id) => {
//     let TP_NAMESPACE = createHash('sha512').update('supplychain').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
//     return TP_NAMESPACE + record_id + prefix.purchase + _hash1(id)
// }

module.exports = { _hash1, _hashforpayload, get_record_id, get_land_registry_address }
    // , get_enrollement_address, get_cultivation_address, get_inspection_address, get_harvest_address, get_processing_address, get_sale_address, get_purchase_address }