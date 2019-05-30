const { get_land_registry_address } = require('../shared/Addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))

land_registration = (state, reg_no, farm_address, farmer_name) => {
    let address = get_land_registry_address(reg_no, farm_address, farmer_name)
    console.log(address);
    let land_data = {
        reg_no: reg_no,
        farm_address: farm_address,
        farmer_name: farmer_name
    }
    let public_key = this.signer_public_keys;
    return state.setState({
        [address]: encode({ land_data, public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = { land_registration }