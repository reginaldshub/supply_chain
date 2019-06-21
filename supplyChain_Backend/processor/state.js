const { get_land_registry_address } = require('../shared/Addressing')
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



create_package = (state, Quantity, RostingDuration, PackageDateTime, Temperature, InternalBatchNo, ProcessorName, processorAddress, process_agents_public_keys) => {
    let address = get_process_address(process_agents_public_keys)
    console.log("address", address);
    let process_data = {
        Quantity: Quantity,
        RostingDuration: RostingDuration,
        PackageDateTime: PackageDateTime,
        Temperature: Temperature,
        InternalBatchNo: InternalBatchNo,
        ProcessorName: ProcessorName,
        processorAddress: processorAddress,
    }
    return state.setState({
        [address]: encode({ process_data, process_agents_public_keys })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

update_processDetails = (state, setPrice, ProcessorName, process_agents_public_keys) => {
    let address = get_process_address(process_agents_public_keys)
    if (!address) {
        throw InvalidTransaction("Failed to load Account", err)
    } else {
        return state.getState([address]).then((stateEntries) => {
            const entry = stateEntries[address]
            let account = decode(entry);
            console.log("entry", entry);
            console.log("account", account);
            account.process_data.setPrice = setPrice;
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

transfer_package = (state, retailAgentPublicKey, internalBatchNo, process_agents_public_keys) => {
    let processAgentAddress = get_process_address(process_agents_public_keys)
    let retailAgentAddress = get_retail_address(retailAgentPublicKey)
    if (!processAgentAddress) {
        throw InvalidTransaction("Failed to load Account", err)
    } else {
        return state.getState([processAgentAddress]).then((stateEntries) => {
            const entry = stateEntries[processAgentAddress]
            let account = decode(entry);
            console.log("entry", entry);
            console.log("account", account);
            return state.setState({
                [retailAgentAddress]: encode({ account, retailAgentPublicKey })
            }).then((result) => {
                console.log("Updated to Retail Agent" + result)
            }).catch((err) => {
                console.log(err);
            })
        })
    }
}

module.exports = { land_registration, start_cultivation, inspect_land, create_package, update_processDetails, transfer_package }