const { get_land_registry_address } = require('../shared/Addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))

land_registration = (state, RegistrationNo, FarmerName, FarmAddress, State, Country, ExporterName, ImporterName, DateOfRegistration, signer_public_keys) => {
    let address = get_land_registry_address(RegistrationNo, FarmerName)
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
    let public_key = signer_public_keys;
    return state.setState({
        [address]: encode({ land_data, public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_cultivation = (state, RegistrationNo, CropVariety, Dateofstart, FarmerName, signer_public_keys) => {
    let address = get_cultivation_address(RegistrationNo, FarmerName)
    console.log("address", address);
    let cultivation_data = {
        CropVariety: CropVariety,
        Dateofstart: Dateofstart
    }
    let public_key = signer_public_keys;
    return state.setState({
        [address]: encode({ cultivation_data, public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

start_harvest = (state, RegistrationNo, FarmerName, CropVariety, Temperature, Humidity, Dateofharvest, Quantity, signer_public_keys) => {
    let address = get_harvest_address(RegistrationNo, FarmerName)
    console.log("address", address);
    let harvest_data = {
        CropVariety: CropVariety,
        Temperature: Temperature,
        Humidity: Humidity,
        Dateofharvest: Dateofharvest,
        Quantity: Quantity
    }
    let public_key = signer_public_keys;
    return state.setState({
        [address]: encode({ harvest_data, public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

inspect_land = (state, InspectionReport, DateofInspection, RegistrationNo, InspectorName, FarmerName, signer_public_keys) => {
    let address = get_inspection_address(RegistrationNo, FarmerName)
    console.log("address", address);
    let inspection_data = {
        InspectionReport: InspectionReport,
        DateofInspection: DateofInspection,
        InspectorName: InspectorName
    }
    let public_key = signer_public_keys;
    return state.setState({
        [address]: encode({ inspection_data, public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = { land_registration, start_cultivation, inspect_land }