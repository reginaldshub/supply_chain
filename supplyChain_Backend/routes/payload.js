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

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.INSPECTION;
        payloadInstance.inspection = InspectMessage;
        console.log("landInspection", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'processharvest') {

        var ProcessHarvestMessage = protos.supplyChainPackage.ProcessHarvestParams.create();
        ProcessHarvestMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        ProcessHarvestMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        ProcessHarvestMessage.addressparameters.FarmerName = payload.FarmerName

        ProcessHarvestMessage.Quantity = payload.Quantity
        ProcessHarvestMessage.RostingDuration = payload.RostingDuration
        ProcessHarvestMessage.PackageDateTime = payload.PackageDateTime
        ProcessHarvestMessage.Temperature = payload.Temperature
        ProcessHarvestMessage.InternalBatchNo = payload.InternalBatchNo
        ProcessHarvestMessage.ProcessorName = payload.ProcessorName
        ProcessHarvestMessage.ProcessorName = payload.ProcessorAddress

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PROCESS_HARVEST;
        payloadInstance.processHarvest = ProcessHarvestMessage;
        console.log("processHarvest", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'purchasegrains') {
        var PurchaseGrainsMessage = protos.supplyChainPackage.PurchaseGrainsParams.create();

        PurchaseGrainsMessage.addressparameters = protos.supplyChainPackage.AddressParams.create()
        PurchaseGrainsMessage.addressparameters.RegistrationNo = payload.RegistrationNo
        PurchaseGrainsMessage.addressparameters.FarmerName = payload.FarmerName

        PurchaseGrainsMessage.Quantity = payload.Quantity
        PurchaseGrainsMessage.RostingDuration = payload.RostingDuration
        PurchaseGrainsMessage.PackageDateTime = payload.PackageDateTime
        PurchaseGrainsMessage.Temperature = payload.Temperature
        PurchaseGrainsMessage.InternalBatchNo = payload.InternalBatchNo
        PurchaseGrainsMessage.ProcessorName = payload.ProcessorName
        PurchaseGrainsMessage.ProcessorName = payload.ProcessorAddress

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.PURCHASE_GRAINS;
        payloadInstance.processHarvest = PurchaseGrainsMessage;
        console.log("purchasegrains", payloadInstance)
        return payloadInstance;
    }
}

module.exports = { protobuff };