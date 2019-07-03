const { get_process_address } = require('../shared/process_agent_addressing')
const { get_retail_address } = require('../shared/retail_agent_addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

create_package = (state, packageDetails, process_agents_public_keys) => {
    let address = get_process_address(process_agents_public_keys)
    console.log("address", address);
    return state.setState({
        [address]: encode({ packageDetails, process_agents_public_keys })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

update_processDetails = (state, updateprocessdetailsparameters, process_agents_public_keys) => {
    let address = get_process_address(process_agents_public_keys)
    if (!address) {
        throw InvalidTransaction("Failed to load Account", err)
    } else {
        return state.getState([address]).then((stateEntries) => {
            const entry = stateEntries[address]
            let account = decode(entry);
            console.log("entry", entry);
            console.log("account", account);
            account.process_data.setPrice = updateprocessdetailsparameters.setPrice;
            return state.setState({
                [address]: encode({ account, process_agents_public_keys })
            }).then((result) => {
                console.log("Updated Price" + result)
            }).catch((err) => {
                console.log(err);
            })

        })
    }
}

transfer_package = (state, transferpackageparameters, process_agents_public_keys) => {
    let processAgentAddress = get_process_address(process_agents_public_keys)
    let retailAgentAddress = get_retail_address(transferpackageparameters.retailAgentPublicKey)
    if (!processAgentAddress) {
        throw InvalidTransaction("Failed to load Account", err)
    } else {
        return state.getState([processAgentAddress]).then((stateEntries) => {
            const entry = stateEntries[processAgentAddress]
            let account = decode(entry);
            console.log("entry", entry);
            console.log("account", account);
            let RetailAgentPublicKey = transferpackageparameters.retailAgentPublicKey;
            return state.setState({
                [retailAgentAddress]: encode({ account, RetailAgentPublicKey })
            }).then((result) => {
                console.log("Updated to Retail Agent" + result)
            }).catch((err) => {
                console.log(err);
            })
        })
    }
}

module.exports = { create_package, update_processDetails, transfer_package }