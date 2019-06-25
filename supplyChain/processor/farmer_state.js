const { get_land_registry_address } = require('../shared/land_addressing')
const { get_cultivation_address } = require('../shared/cultivation_addressing')
const { get_harvest_address } = require('../shared/harvest_addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

land_registration = (state, RegistrationNo, FarmerName, FarmAddress, State, Country, ExporterName, ImporterName, DateOfRegistration, farmers_public_key) => {
    let address = get_land_registry_address(RegistrationNo, farmers_public_key)
    console.log("address", address);
    let land_data = {
        RegistrationNo: RegistrationNo,
        FarmerName: FarmerName,
        FarmAddress: FarmAddress,
        State: State,
        Country: Country,
        ExporterName: ExporterName,
        ImporterName: ImporterName,
        DateOfRegistration: DateOfRegistration
    }
    return state.setState({
        [address]: encode({ land_data, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_cultivation = (state, RegistrationNo, CropVariety, Dateofstart, FarmerName, farmers_public_key) => {
    let address = get_cultivation_address(RegistrationNo, farmers_public_key)
    console.log("address", address);
    let cultivation_data = {
        CropVariety: CropVariety,
        Dateofstart: Dateofstart
    }
    return state.setState({
        [address]: encode({ cultivation_data, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_harvest = (state, RegistrationNo, FarmerName, CropVariety, Temperature, Humidity, Dateofharvest, Quantity, farmers_public_key) => {
    let address = get_harvest_address(RegistrationNo, farmers_public_key)
    console.log("address", address);
    let harvest_data = {
        CropVariety: CropVariety,
        Temperature: Temperature,
        Humidity: Humidity,
        Dateofharvest: Dateofharvest,
        Quantity: Quantity
    }
    return state.setState({
        [address]: encode({ harvest_data, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = { land_registration, start_cultivation, start_harvest }