const { TransactionHandler } = require("sawtooth-sdk/processor/handler");
const { InvalidTransaction, InternalError } = require("sawtooth-sdk/processor/exceptions");
const cbor = require("cbor");
const env = require("../shared/env");
const { land_registration, start_cultivation, start_harvest } = require("./farmer_state");
const { inspect_land } = require("./inspector_state");
const { create_package, update_processDetails, transfer_package } = require("./process_agent_state");
var protos = require("./../shared/supplyChain");

const encode = obj => Buffer.from(JSON.stringify(obj));
const decode = buf => JSON.parse(buf);

class SupplyChainHandler extends TransactionHandler {
    constructor() {
        super(env.familyName, [env.familyVersion], [env.TP_NAMESPACE]);
        this.signer_public_keys = "";
    }

    apply(transactionProcessRequest, state) {
        let header = transactionProcessRequest.header;
        this.signer_public_keys = header.signerPublicKey;
        let payload = cbor.decode(transactionProcessRequest.payload);
        console.log("payload", payload);

        if (payload.action == protos.supplyChainPackage.PayLoad.Action.LAND_REGISTRATION) {
            let newLandRegistrationPayload = payload.landRegistration;
            console.log("newLandRegistrationPayload", newLandRegistrationPayload);
            return land_registration(
                state,
                newLandRegistrationPayload.addressparameters.RegistrationNo,
                newLandRegistrationPayload.addressparameters.FarmerName,
                newLandRegistrationPayload.landregistrationparameters.FarmAddress,
                newLandRegistrationPayload.landregistrationparameters.State,
                newLandRegistrationPayload.landregistrationparameters.Country,
                newLandRegistrationPayload.landregistrationparameters.ExporterName,
                newLandRegistrationPayload.landregistrationparameters.ImporterName,
                newLandRegistrationPayload.landregistrationparameters
                .DateOfRegistration,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION) {
            let newStartCultivationPayload = payload.startCultivation;
            console.log("newStartCultivationPayload", newStartCultivationPayload);
            return start_cultivation(
                state,
                newStartCultivationPayload.addressparameters.RegistrationNo,
                newStartCultivationPayload.startcultivationparameters.CropVariety,
                newStartCultivationPayload.startcultivationparameters.Dateofstart,
                newStartCultivationPayload.addressparameters.FarmerName,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST) {
            let newPerformHarvestPayload = payload.performHarvest;
            console.log("newPerformHarvestPayload", newPerformHarvestPayload);
            return start_harvest(
                state,
                newPerformHarvestPayload.addressparameters.RegistrationNo,
                newPerformHarvestPayload.addressparameters.FarmerName,
                newPerformHarvestPayload.performharvestparameters.CropVariety,
                newPerformHarvestPayload.performharvestparameters.Temperature,
                newPerformHarvestPayload.performharvestparameters.Humidity,
                newPerformHarvestPayload.performharvestparameters.Dateofharvest,
                newPerformHarvestPayload.performharvestparameters.Quantity,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.INSPECTION) {
            let newInspectionPayload = payload.inspection;
            return inspect_land(
                state,
                newInspectionPayload.inspectparameters.InspectionReport,
                newInspectionPayload.inspectparameters.DateofInspection,
                newInspectionPayload.inspectparameters.addressparameters.RegistrationNo,
                newInspectionPayload.inspectparameters.InspectorName,
                newInspectionPayload.addressparameters.FarmerName,
                newInspectionPayload.inspectparameters.FarmersPublicKey,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.CREATE_PACKAGE) {
            let newCreatePackagePayload = payload.createPackage;
            return create_package(
                state,
                newCreatePackagePayload.createpackageparameters.Quantity,
                newCreatePackagePayload.createpackageparameters.RostingDuration,
                newCreatePackagePayload.createpackageparameters.PackageDateTime,
                newCreatePackagePayload.createpackageparameters.Temperature,
                newCreatePackagePayload.createpackageparameters.InternalBatchNo,
                newCreatePackagePayload.createpackageparameters.ProcessorName,
                newCreatePackagePayload.createpackageparameters.processorAddress,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.UPDATE_PROCESS_DETAILS) {
            let newUpdateProcessDetailsPayload = payload.updateProcessDetails;
            return update_processDetails(
                state,
                newUpdateProcessDetailsPayload.updateprocessdetailsparameters.setPrice,
                newUpdateProcessDetailsPayload.updateprocessdetailsparameters.ProcessorName,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.TRANSFER_PACKAGE) {
            let newTransferPackagePayload = payload.transferPackage;
            return transfer_package(
                state,
                newTransferPackagePayload.transferpackageparameters.retailAgentPublicKey,
                newTransferPackagePayload.transferpackageparameters.internalBatchNo,
                this.signer_public_keys
            );
        } else {
            throw new InvalidTransaction(
                `Didn't recognize Verb "${verb}".\nMust be one of "create_account,deposit_money,make_deposit,withdraw_money or transfer_money"`
            );
        }
    }
}
module.exports = SupplyChainHandler;