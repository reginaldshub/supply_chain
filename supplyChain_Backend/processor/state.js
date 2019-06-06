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

module.exports = { land_registration }