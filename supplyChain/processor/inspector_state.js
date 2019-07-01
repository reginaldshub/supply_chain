const { get_inspection_address } = require('../shared/inspection_adderssing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

inspect_land = (state, addressparameters, inspectparameters, inspectors_public_key) => {
    // console.log(addressparameters, inspectparameters, inspectors_public_key)
    let address = get_inspection_address(addressparameters.RegistrationNo, inspectparameters.FarmersPublicKey, inspectors_public_key)
    console.log("address", address);
    let inspection_data = {
        InspectionReport: inspectparameters.InspectionReport,
        InspectionDate: inspectparameters.InspectionDate,
        InspectorName: inspectparameters.InspectorName,
        CropVariety: inspectparameters.CropVariety,
        CropSeason: inspectparameters.CropSeason,
        CropName: inspectparameters.CropName,
        Temperature: inspectparameters.Temperature,
        TemerpatureUnit: inspectparameters.TemerpatureUnit,
        Humidity: inspectparameters.Humidity,
        HumidityUnit: inspectparameters.HumidityUnit,
    }
    console.log("inspection_data", inspection_data);
    return state.setState({
        [address]: encode({ inspection_data, inspectors_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = { inspect_land }