var protobuf = require("protobufjs");
var protos = require("../shared/supplyChain")

function protobuff(payload) {
    console.log("payload", payload)
    if (payload.verb == 'landregistration') {
        var landRegistrationMessage = protos.supplyChainPackage.LandRegistrationParams.create()
        landRegistrationMessage.land = protos.supplyChainPackage.Land.create()
        landRegistrationMessage.land.RegistrationNo = payload.RegistrationNo
        landRegistrationMessage.land.FarmerName = payload.FarmerName
        landRegistrationMessage.land.FarmAddress = payload.FarmAddress
        landRegistrationMessage.land.State = payload.State
        landRegistrationMessage.land.panchayat = payload.panchayat
        landRegistrationMessage.land.landSurveyNumber = payload.landSurveyNumber
        landRegistrationMessage.land.ownerName = payload.State
        landRegistrationMessage.land.landID = payload.landID

        landRegistrationMessage.landregistrationparameters = protos.supplyChainPackage.LandRegistration.create()
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

        startCultivationMessage.startcultivationparameters = protos.supplyChainPackage.CultivationData.create()
        startCultivationMessage.startcultivationparameters.CropName = payload.CropName
        startCultivationMessage.startcultivationparameters.CropSeason = payload.CropSeason
        startCultivationMessage.startcultivationparameters.Dateofstart = payload.Dateofstart

        startCultivationMessage.land = protos.supplyChainPackage.Land.create()
        startCultivationMessage.land.RegistrationNo = payload.RegistrationNo
        startCultivationMessage.land.FarmerName = payload.FarmerName

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION;
        payloadInstance.startCultivation = startCultivationMessage;
        console.log("startCultivation", payloadInstance)
        return payloadInstance;
    } else if (payload.verb == 'performharvest') {
        var performHarvestMessage = protos.supplyChainPackage.PerformHarvestParams.create()
        performHarvestMessage.land = protos.supplyChainPackage.Land.create()
        performHarvestMessage.land.RegistrationNo = payload.RegistrationNo
        performHarvestMessage.land.FarmerName = payload.FarmerName

        performHarvestMessage.performharvestparameters = protos.supplyChainPackage.HarvestData.create()

        performHarvestMessage.performharvestparameters.CropVariety = payload.CropVariety
        performHarvestMessage.performharvestparameters.CropMeasureCategory = payload.CropMeasureCategory
        performHarvestMessage.performharvestparameters.DateofEnd = payload.DateofEnd
        performHarvestMessage.performharvestparameters.Dateofstart = payload.Dateofstart
        performHarvestMessage.performharvestparameters.Humidity = payload.Humidity
        performHarvestMessage.performharvestparameters.HumidityUnit = payload.HumidityUnit
        performHarvestMessage.performharvestparameters.Quantity = payload.Quantity
        performHarvestMessage.performharvestparameters.QuantityUnit = payload.QuantityUnit
        performHarvestMessage.performharvestparameters.TemerpatureUnit = payload.TemerpatureUnit
        performHarvestMessage.performharvestparameters.Temperature = payload.Temperature

        var payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST;
        payloadInstance.performHarvest = performHarvestMessage;
        console.log("performHarvest", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'landInspection') {
        var InspectMessage = protos.supplyChainPackage.InspectParams.create();
        InspectMessage.land = protos.supplyChainPackage.Land.create()
        InspectMessage.land.RegistrationNo = payload.RegistrationNo
        InspectMessage.land.FarmerName = payload.FarmerName

        InspectMessage.inspectparameters = protos.supplyChainPackage.InspectionData.create()
        InspectMessage.inspectparameters.InspectionReport = payload.InspectionReport
        InspectMessage.inspectparameters.InspectorName = payload.InspectorName
        InspectMessage.inspectparameters.FarmersPublicKey = payload.FarmersPublicKey
        InspectMessage.inspectparameters.InspectionDate = payload.InspectionDate
        InspectMessage.inspectparameters.CropVariety = payload.CropVariety
        InspectMessage.inspectparameters.CropSeason = payload.CropSeason
        InspectMessage.inspectparameters.CropName = payload.CropName
        InspectMessage.inspectparameters.Temperature = payload.Temperature
        InspectMessage.inspectparameters.TemerpatureUnit = payload.TemerpatureUnit
        InspectMessage.inspectparameters.Humidity = payload.Humidity
        InspectMessage.inspectparameters.HumidityUnit = payload.HumidityUnit

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.INSPECTION;
        payloadInstance.inspection = InspectMessage;
        console.log("landInspection", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'createPackage') {

        var CreatePackageMessage = protos.supplyChainPackage.CreatePackageParams.create();

        CreatePackageMessage.createpackageparameters = protos.supplyChainPackage.PackageData.create()
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