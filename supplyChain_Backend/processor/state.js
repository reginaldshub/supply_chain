const { get_land_registry_address } = require('../shared/Addressing')
const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

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
    let address = get_inspection_address(RegistrationNo, FarmerName, InspectorName)
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



process_harvest = (state, Quantity, RostingDuration, PackageDateTime, Temperature, InternalBatchNo, ProcessorName, processorAddress, signer_public_keys) => {
    let address = get_process_address(ProcessorName)
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
    let public_key = signer_public_keys;
    return state.setState({
        [address]: encode({ process_data, public_key })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

update_processDetails = (state, setPrice, ProcessorName, signer_public_keys) => {
    let address = get_process_address(ProcessorName)
    if (!address) {
        throw InvalidTransaction("Failed to load Account: {:?}", err)
    } else {
        return state.getState([address]).then((stateEntries) => {
            const entry = stateEntries[address]
            let account = decode(entry);
            console.log("entry", entry);
            console.log("account", account);
            account.process_data.setPrice = setPrice;
            return state.setState({
                [address]: encode(account, ProcessorName)
            }).then((result) => {
                console.log("Updated Price" + result)
            }).catch((err) => {
                console.log(err);
            })

        })
    }
}

module.exports = { land_registration, start_cultivation, inspect_land, process_harvest, update_processDetails }