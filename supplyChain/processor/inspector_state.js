const { get_inspection_address } = require('../shared/inspection_adderssing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

inspect_land = (state, landparameters, inspectionDetails, inspectors_public_key) => {
    let address = get_inspection_address(landparameters.RegistrationNo, inspectionDetails.FarmersPublicKey, inspectors_public_key)
    console.log("address", address);
    return state.setState({
        [address]: encode({ inspectionDetails, inspectors_public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = { inspect_land }