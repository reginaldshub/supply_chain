const { get_inspection_address } = require('../shared/inspection_adderssing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

inspect_land = (state, InspectionReport, DateofInspection, RegistrationNo, InspectorName, FarmerName, farmers_public_key, inspectors_public_key) => {
    let address = get_inspection_address(RegistrationNo, farmers_public_key, inspectors_public_key)
    console.log("address", address);
    let inspection_data = {
        InspectionReport: InspectionReport,
        DateofInspection: DateofInspection,
        InspectorName: InspectorName
    }
    return state.setState({
        [address]: encode({ inspection_data, inspectors_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = { inspect_land }