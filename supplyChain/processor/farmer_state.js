const { get_land_registry_address } = require('../shared/land_addressing')
const { get_cultivation_address } = require('../shared/cultivation_addressing')
const { get_harvest_address } = require('../shared/harvest_addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

land_registration = (state, addressparameters, landregistrationparameters, farmers_public_key) => {
    let address = get_land_registry_address(addressparameters.RegistrationNo, farmers_public_key)
    console.log("address", address);
    let land_data = {
        RegistrationNo: addressparameters.RegistrationNo,
        FarmerName: addressparameters.FarmerName,
        FarmAddress: addressparameters.FarmAddress,
        State: addressparameters.State,
        panchayat: addressparameters.panchayat,
        landSurveyNumber: addressparameters.landSurveyNumber,
        ownerName: addressparameters.ownerName,
        landID: addressparameters.landID,
        FarmAddress: landregistrationparameters.FarmAddress,
        State: landregistrationparameters.State,
        Country: landregistrationparameters.Country,
        ExporterName: landregistrationparameters.ExporterName,
        ImporterName: landregistrationparameters.ImporterName,
        DateOfRegistration: landregistrationparameters.DateOfRegistration
    }
    return state.setState({
        [address]: encode({ land_data, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_cultivation = (state, addressparameters, startcultivationparameters, farmers_public_key) => {
    let address = get_cultivation_address(addressparameters.RegistrationNo, farmers_public_key)
    console.log("address", address);
    let cultivation_data = {
        CropName: startcultivationparameters.CropName,
        CropSeason: startcultivationparameters.CropSeason,
        Dateofstart: startcultivationparameters.Dateofstart
    }
    console.log("state", cultivation_data)
    return state.setState({
        [address]: encode({ cultivation_data, farmers_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_harvest = (state, addressparameters, performharvestparameters, farmers_public_key) => {
    let address = get_harvest_address(addressparameters.RegistrationNo, farmers_public_key)
    console.log("address", address);
    let harvest_data = {
        RegistrationNo: addressparameters.RegistrationNo,
        FarmerName: addressparameters.FarmerName,
        CropVariety: performharvestparameters.CropVariety,
        CropMeasureCategory: performharvestparameters.CropMeasureCategory,
        DateofEnd: performharvestparameters.DateofEnd,
        Dateofstart: performharvestparameters.Dateofstart,
        Humidity: performharvestparameters.Humidity,
        HumidityUnit: performharvestparameters.HumidityUnit,
        Quantity: performharvestparameters.Quantity,
        QuantityUnit: performharvestparameters.QuantityUnit,
        TemerpatureUnit: performharvestparameters.TemerpatureUnit,
        Temperature: performharvestparameters.Temperature
    }
    console.log("harvest_data", harvest_data)
    return state.setState({
        [address]: encode(harvest_data, farmers_public_key)
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = { land_registration, start_cultivation, start_harvest }