var protobuf = require("protobufjs");
var protos = require("./../shared/supplyChain")

function protobuff(payload) {
    console.log("payload", payload)
    if (payload.verb == 'landregistration') {
        var landRegistrationMessage = protos.supplyChainPackage.LandRegistrationParams.create()
        landRegistrationMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        landRegistrationMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        landRegistrationMessage.addressparameters.FarmerName = payload.FarmerName
        landRegistrationMessage.FarmAddress = payload.FarmAddress
        landRegistrationMessage.State = payload.State
        landRegistrationMessage.Country = payload.Country
        landRegistrationMessage.ExporterName = payload.ExporterName
        landRegistrationMessage.ImporterName = payload.ImporterName
        landRegistrationMessage.DateofRegistration = payload.DateOfRegistration

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.LAND_REGISTRATION;
        payloadInstance.landRegistration = landRegistrationMessage;
        console.log("landRegistration", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'startcultivation') {
        var startCultivationMessage = protos.supplyChainPackage.StartCultivationParams.create()

        startCultivationMessage.CropVariety = payload.CropVariety
        startCultivationMessage.Dateofstart = payload.Dateofstart
        startCultivationMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        startCultivationMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        startCultivationMessage.addressparameters.FarmerName = payload.FarmerName

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION;
        payloadInstance.startCultivation = startCultivationMessage;
        console.log("startCultivation", payloadInstance)
        return payloadInstance;
    } else if (payload.verb == 'performharvest') {
        var performHarvestMessage = protos.supplyChainPackage.PerformHarvestParams.create()
        performHarvestMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        performHarvestMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        performHarvestMessage.addressparameters.FarmerName = payload.FarmerName

        performHarvestMessage.CropVariety = payload.CropVariety
        performHarvestMessage.Temperature = payload.Temperature
        performHarvestMessage.Humidity = payload.Humidity
        performHarvestMessage.Dateofharvest = payload.Dateofharvest
        performHarvestMessage.Quantity = payload.Quantity

        var payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST;
        payloadInstance.performHarvest = performHarvestMessage;
        console.log("performHarvest", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'landInspection') {

        var InspectMessage = protos.supplyChainPackage.InspectParams.create();
        InspectMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        InspectMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        InspectMessage.addressparameters.FarmerName = payload.FarmerName

        InspectMessage.InspectionReport = payload.InspectionReport
        InspectMessage.DateofInspection = payload.DateofInspection
        InspectMessage.InspectorName = payload.InspectorName
        InspectMessage.FarmersPublicKey = payload.FarmersPublicKey

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.INSPECTION;
        payloadInstance.inspection = InspectMessage;
        console.log("landInspection", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'processHarvest') {

        var CreatePackageMessage = protos.supplyChainPackage.CreatePackageParams.create();
        CreatePackageMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        CreatePackageMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        CreatePackageMessage.addressparameters.FarmerName = payload.FarmerName

        CreatePackageMessage.Quantity = payload.quantity
        CreatePackageMessage.RostingDuration = payload.rostingDuration
        CreatePackageMessage.PackageDateTime = payload.packageDateTime
        CreatePackageMessage.Temperature = payload.temperature
        CreatePackageMessage.InternalBatchNo = payload.internalBatchNo
        CreatePackageMessage.ProcessorName = payload.processorName
        CreatePackageMessage.processorAddress = payload.processorAddress

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PROCESS_HARVEST;
        payloadInstance.createPackage = CreatePackageMessage;
        console.log("createPackage", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'updateProcessDetails') {

        var updateProcessDetailsMessage = protos.supplyChainPackage.UpdateProcessDetailsParams.create();
        updateProcessDetailsMessage.setPrice = payload.setPrice
        updateProcessDetailsMessage.ProcessorName = payload.processorName

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.UPDATE_PROCESS_DETAILS;
        payloadInstance.updateProcessDetails = updateProcessDetailsMessage;
        console.log("updateProcessDetails", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'transferPackage') {
        var TransferPackageMessage = protos.supplyChainPackage.TransferPackageParams.create();

        TransferPackageMessage.retailAgentPublicKey = payload.retailAgentPublicKey
        TransferPackageMessage.internalBatchNo = payload.internalBatchNo

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PURCHASE_GRAINS;
        payloadInstance.transferPackage = TransferPackageMessage;
        console.log("transferPackage", payloadInstance)
        return payloadInstance;
    }
}

module.exports = { protobuff };