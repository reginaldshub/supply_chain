var protobuf = require("protobufjs");
var protos = require("./../shared/supplyChain")

function protobuff(payload) {
    // return new Promise((resolve, reject) => {
    console.log("payload", payload)
    if (payload.verb == 'landregistration') {
        var landRegistrationMessage = protos.supplyChainPackage.LandRegistrationParams.create()
        var addressParams = protos.supplyChainPackage.AddressParams.create()
        addressParams.RegistrationNo = payload.RegistrationNo
        addressParams.FarmerName = payload.FarmerName
        landRegistrationMessage.addressparameters.push(addressParams)

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
        var addressParams = protos.supplyChainPackage.AddressParams.create()
        addressParams.RegistrationNo = payload.RegistrationNo
        addressParams.FarmerName = payload.FarmerName
        startCultivationMessage.addressparameters.push(addressParams)
        console.log(addressParams)

        let payloadInstance = protos.supplyChainPackage.PayLoad.create()
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION;
        payloadInstance.startCultivation = startCultivationMessage;
        console.log("startCultivation", payloadInstance)
        return payloadInstance;
    } else if (payload.verb == 'performharvest') {
        var performHarvestMessage = protos.supplyChainPackage.PerformHarvestParams.create()
        var addressParams = protos.supplyChainPackage.AddressParams.create()
        addressParams.RegistrationNo = payload.RegistrationNo
        addressParams.FarmerName = payload.FarmerName
        performHarvestMessage.addressparameters.push(addressParams)
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
        var addressParams = protos.supplyChainPackage.AddressParams.create()
        addressParams.RegistrationNo = payload.RegistrationNo
        addressParams.FarmerName = payload.FarmerName
        InspectMessage.addressparameters.push(addressParams)
        InspectMessage.InspectionReport = payload.InspectionReport
        InspectMessage.DateofInspection = payload.DateofInspection
        InspectMessage.InspectorName = payload.InspectorName

        var payloadInstance = protos.supplyChainPackage.PayLoad.create();
        payloadInstance.action = protos.supplyChainPackage.PayLoad.Action.INSPECTION;
        payloadInstance.inspection = InspectMessage;
        console.log("landInspection", payloadInstance)
        return payloadInstance;

    } else if (payload.verb == 'processharvest') {

        // Quantity Rosting_duration Package_date_time Temperature Internal_batch_no Processor_name Processor_address var ProcessHarvestMessage = protos.supplyChainPackage.ProcessHarvestParams.create();
        var ProcessHarvestMessage = protos.supplyChainPackage.ProcessHarvestParams.create();
        var addressParams = protos.supplyChainPackage.AddressParams.create()
        addressParams.RegistrationNo = payload.RegistrationNo
        addressParams.FarmerName = payload.FarmerName
        ProcessHarvestMessage.addressparameters.push(addressParams)
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
        var addressParams = protos.supplyChainPackage.AddressParams.create()
        addressParams.RegistrationNo = payload.RegistrationNo
        addressParams.FarmerName = payload.FarmerName
        PurchaseGrainsMessage.addressparameters.push(addressParams)
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