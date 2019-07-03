var protobuf = require("protobufjs");
var protos = require("../shared/supplyChain")

function protobuff(payload) {
    console.log("payload", payload)
    if (payload.verb == 'landregistration') {
        var landRegistrationMessage = protos.supplyChainPackage.LandRegistrationParams.create()
        landRegistrationMessage.landDetails = protos.supplyChainPackage.Land.create()
        landRegistrationMessage.landDetails.RegistrationNo = payload.RegistrationNo
        landRegistrationMessage.landDetails.FarmerName = payload.FarmerName
        landRegistrationMessage.landDetails.FarmAddress = payload.FarmAddress
        landRegistrationMessage.landDetails.State = payload.State
        landRegistrationMessage.landDetails.panchayat = payload.panchayat
        landRegistrationMessage.landDetails.landSurveyNumber = payload.landSurveyNumber
        landRegistrationMessage.landDetails.ownerName = payload.State
        landRegistrationMessage.landDetails.landID = payload.landID

        landRegistrationMessage.landRegistrationDetails = protos.supplyChainPackage.LandRegistration.create()
        landRegistrationMessage.landRegistrationDetails.FarmAddress = payload.FarmAddress
        landRegistrationMessage.landRegistrationDetails.State = payload.State
        landRegistrationMessage.landRegistrationDetails.Country = payload.Country
        landRegistrationMessage.landRegistrationDetails.ExporterName = payload.ExporterName
        landRegistrationMessage.landRegistrationDetails.ImporterName = payload.ImporterName
        landRegistrationMessage.landRegistrationDetails.DateofRegistration = payload.DateOfRegistration

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.LAND_REGISTRATION;
        payloadInstance.landRegistration = landRegistrationMessage;
        console.log("landRegistration", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'startcultivation') {
        var startCultivationMessage = protos.supplyChainPackage.CultivationParams.create()

        startCultivationMessage.cultivationDetails = protos.supplyChainPackage.CultivationData.create()
        startCultivationMessage.cultivationDetails.CropName = payload.CropName
        startCultivationMessage.cultivationDetails.CropSeason = payload.CropSeason
        startCultivationMessage.cultivationDetails.Dateofstart = payload.Dateofstart

        startCultivationMessage.landDetails = protos.supplyChainPackage.Land.create()
        startCultivationMessage.landDetails.RegistrationNo = payload.RegistrationNo
        startCultivationMessage.landDetails.FarmerName = payload.FarmerName

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION;
        payloadInstance.startCultivation = startCultivationMessage;
        console.log("startCultivation", payloadInstance)
        return payloadInstance;
    } else if (payload.verb == 'performharvest') {
        var performHarvestMessage = protos.supplyChainPackage.HarvestParams.create()
        performHarvestMessage.landDetails = protos.supplyChainPackage.Land.create()
        performHarvestMessage.landDetails.RegistrationNo = payload.RegistrationNo
        performHarvestMessage.landDetails.FarmerName = payload.FarmerName

        performHarvestMessage.harvestDetails = protos.supplyChainPackage.HarvestData.create()

        performHarvestMessage.harvestDetails.CropVariety = payload.CropVariety
        performHarvestMessage.harvestDetails.CropMeasureCategory = payload.CropMeasureCategory
        performHarvestMessage.harvestDetails.DateofEnd = payload.DateofEnd
        performHarvestMessage.harvestDetails.Dateofstart = payload.Dateofstart
        performHarvestMessage.harvestDetails.Humidity = payload.Humidity
        performHarvestMessage.harvestDetails.HumidityUnit = payload.HumidityUnit
        performHarvestMessage.harvestDetails.Quantity = payload.Quantity
        performHarvestMessage.harvestDetails.QuantityUnit = payload.QuantityUnit
        performHarvestMessage.harvestDetails.TemerpatureUnit = payload.TemerpatureUnit
        performHarvestMessage.harvestDetails.Temperature = payload.Temperature

        var payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST;
        payloadInstance.performHarvest = performHarvestMessage;
        console.log("performHarvest", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'landInspection') {
        var InspectMessage = protos.supplyChainPackage.InspectParams.create();
        InspectMessage.landDetails = protos.supplyChainPackage.Land.create()
        InspectMessage.landDetails.RegistrationNo = payload.RegistrationNo
        InspectMessage.landDetails.FarmerName = payload.FarmerName

        InspectMessage.inspectionDetails = protos.supplyChainPackage.InspectionData.create()
        InspectMessage.inspectionDetails.InspectionReport = payload.InspectionReport
        InspectMessage.inspectionDetails.InspectorName = payload.InspectorName
        InspectMessage.inspectionDetails.FarmersPublicKey = payload.FarmersPublicKey
        InspectMessage.inspectionDetails.InspectionDate = payload.InspectionDate
        InspectMessage.inspectionDetails.CropVariety = payload.CropVariety
        InspectMessage.inspectionDetails.CropSeason = payload.CropSeason
        InspectMessage.inspectionDetails.CropName = payload.CropName
        InspectMessage.inspectionDetails.Temperature = payload.Temperature
        InspectMessage.inspectionDetails.TemerpatureUnit = payload.TemerpatureUnit
        InspectMessage.inspectionDetails.Humidity = payload.Humidity
        InspectMessage.inspectionDetails.HumidityUnit = payload.HumidityUnit

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.INSPECTION;
        payloadInstance.inspection = InspectMessage;
        console.log("landInspection", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'createPackage') {

        var CreatePackageMessage = protos.supplyChainPackage.PackageParams.create();

        CreatePackageMessage.packageDetails = protos.supplyChainPackage.PackageData.create()
        CreatePackageMessage.packageDetails.Quantity = payload.Quantity
        CreatePackageMessage.packageDetails.RostingDuration = payload.RostingDuration
        CreatePackageMessage.packageDetails.PackageDateTime = payload.PackageDateTime
        CreatePackageMessage.packageDetails.Temperature = payload.Temperature
        CreatePackageMessage.packageDetails.InternalBatchNo = payload.internalBatchNo
        CreatePackageMessage.packageDetails.ProcessorName = payload.processorName
        CreatePackageMessage.packageDetails.processorAddress = payload.processorAddress

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.CREATE_PACKAGE
        payloadInstance.createPackage = CreatePackageMessage;
        console.log("createPackage", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'updateProcessDetails') {

        var updateProcessDetailsMessage = protos.supplyChainPackage.UpdatePackageParams.create();

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