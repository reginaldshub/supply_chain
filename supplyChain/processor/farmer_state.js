const { get_land_registry_address } = require('../shared/land_addressing')
const { get_cultivation_address } = require('../shared/cultivation_addressing')
const { get_harvest_address } = require('../shared/harvest_addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

land_registration = (state, landparameters, landRegistrationDetails, farmers_public_key) => {
    let address = get_land_registry_address(landparameters.RegistrationNo, farmers_public_key)
    console.log("address", address);
    return state.setState({
        [address]: encode({ landparameters, landRegistrationDetails, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_cultivation = (state, landparameters, cultivationDetails, farmers_public_key) => {
    let address = get_cultivation_address(landparameters.RegistrationNo, farmers_public_key)
    console.log("address", address);
    return state.setState({
        [address]: encode({ cultivationDetails, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_harvest = (state, landparameters, harvestDetails, farmers_public_key) => {
    let address = get_harvest_address(landparameters.RegistrationNo, farmers_public_key)
    console.log("address", address);
    return state.setState({
        [address]: encode(landparameters, harvestDetails, farmers_public_key)
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = { land_registration, start_cultivation, start_harvest }