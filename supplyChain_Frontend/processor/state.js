const { get_land_registry_address } = require('../shared/Addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))

land_registration = (state, reg_no, farm_address, farmer_name, land_size) => {
    let address = get_land_registry_address(reg_no, farm_address, farmer_name, land_size)
    console.log(address);
    let land_data = {
        reg_no: reg_no,
        farm_address: farm_address,
        farmer_name: farmer_name,
        land_size: land_size
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