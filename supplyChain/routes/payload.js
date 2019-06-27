var protobuf = require("protobufjs");
var protos = require("../shared/supplyChain")

function protobuff(payload) {
    console.log("payload", payload)
    if (payload.verb == 'landregistration') {
        var landRegistrationMessage = protos.supplyChainPackage.LandRegistrationParams.create()
        landRegistrationMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        landRegistrationMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        landRegistrationMessage.addressparameters.FarmerName = payload.FarmerName

        landRegistrationMessage.landregistrationparameters = protos.supplyChainPackage.LandRegistrationParameters.create()
        landRegistrationMessage.landregistrationparameters.FarmAddress = payload.FarmAddress
        landRegistrationMessage.landregistrationparameters.State = payload.State
        landRegistrationMessage.landregistrationparameters.Country = payload.Country
        landRegistrationMessage.landregistrationparameters.ExporterName = payload.ExporterName
        landRegistrationMessage.landregistrationparameters.ImporterName = payload.ImporterName
        landRegistrationMessage.landregistrationparameters.DateofRegistration = payload.DateOfRegistration

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.LAND_REGISTRATION;
        payloadInstance.landRegistration = landRegistrationMessage;
        console.log("landRegistration", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'startcultivation') {
        var startCultivationMessage = protos.supplyChainPackage.StartCultivationParams.create()

        startCultivationMessage.startcultivationparameters = protos.supplyChainPackage.StartCultivationParameters.create()
        startCultivationMessage.startcultivationparameters.CropVariety = payload.CropVariety
        startCultivationMessage.startcultivationparameters.Dateofstart = payload.Dateofstart

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

        performHarvestMessage.performharvestparameters = protos.supplyChainPackage.PerformHarvestParameters.create()
        performHarvestMessage.performharvestparameters.CropVariety = payload.CropVariety
        performHarvestMessage.performharvestparameters.Temperature = payload.Temperature
        performHarvestMessage.performharvestparameters.Humidity = payload.Humidity
        performHarvestMessage.performharvestparameters.Dateofharvest = payload.Dateofharvest
        performHarvestMessage.performharvestparameters.Quantity = payload.Quantity

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

        InspectMessage.inspectparameters = protos.supplyChainPackage.InspectParameters.create()
        InspectMessage.inspectparameters.InspectionReport = payload.InspectionReport
        InspectMessage.inspectparameters.DateofInspection = payload.DateofInspection
        InspectMessage.inspectparameters.InspectorName = payload.InspectorName
        InspectMessage.inspectparameters.FarmersPublicKey = payload.FarmersPublicKey

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.INSPECTION;
        payloadInstance.inspection = InspectMessage;
        console.log("landInspection", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'createPackage') {

        var CreatePackageMessage = protos.supplyChainPackage.CreatePackageParams.create();

        CreatePackageMessage.createpackageparameters = protos.supplyChainPackage.CreatePackageParameters.create()
        CreatePackageMessage.createpackageparameters.Quantity = payload.quantity
        CreatePackageMessage.createpackageparameters.RostingDuration = payload.rostingDuration
        CreatePackageMessage.createpackageparameters.PackageDateTime = payload.packageDateTime
        CreatePackageMessage.createpackageparameters.Temperature = payload.temperature
        CreatePackageMessage.createpackageparameters.InternalBatchNo = payload.internalBatchNo
        CreatePackageMessage.createpackageparameters.ProcessorName = payload.processorName
        CreatePackageMessage.createpackageparameters.processorAddress = payload.processorAddress

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.CREATE_PACKAGE
        payloadInstance.createPackage = CreatePackageMessage;
        console.log("createPackage", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'updateProcessDetails') {

        var updateProcessDetailsMessage = protos.supplyChainPackage.UpdateProcessDetailsParams.create();

        updateProcessDetailsMessage.updateprocessdetailsparameters = protos.supplyChainPackage.UpdateProcessDetailsParameters.create()
        updateProcessDetailsMessage.updateprocessdetailsparameters.setPrice = payload.setPrice
        updateProcessDetailsMessage.updateprocessdetailsparameters.ProcessorName = payload.processorName

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.UPDATE_PROCESS_DETAILS;
        payloadInstance.updateProcessDetails = updateProcessDetailsMessage;
        console.log("updateProcessDetails", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'transferPackage') {
        var TransferPackageMessage = protos.supplyChainPackage.TransferPackageParams.create();

        TransferPackageMessage.transferpackageparameters = protos.supplyChainPackage.TransferPackageParameters.create()
        TransferPackageMessage.transferpackageparameters.retailAgentPublicKey = payload.retailAgentPublicKey
        TransferPackageMessage.transferpackageparameters.internalBatchNo = payload.internalBatchNo

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.TRANSFER_PACKAGE;
        payloadInstance.transferPackage = TransferPackageMessage;
        console.log("transferPackage", payloadInstance)
        return payloadInstance;
    }
}

module.exports = { protobuff };