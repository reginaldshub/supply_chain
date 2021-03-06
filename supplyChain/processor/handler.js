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
        if (payload == null || payload.action == null) {
            throw new InvalidTransaction("One or more parameters passed in Payload Details is null or whole Payload is found null");
        } else {
            if (payload.action == protos.supplyChainPackage.PayLoad.Action.LAND_REGISTRATION) {
                if (payload.landRegistration.landDetails == null || payload.landRegistration.landRegistrationDetails == null)
                    throw new InvalidTransaction("One or more parameters passed in landRegistration Details is null or whole landRegistration details is found null");
                land_registration(
                    state,
                    payload.landRegistration.landDetails,
                    payload.landRegistration.landRegistrationDetails,
                    this.signer_public_keys
                );
            } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION) {
                if (payload.startCultivation.landDetails == null || payload.startCultivation.cultivationDetails == null)
                    throw new InvalidTransaction("One or more parameters passed in Cultivation Details is null or whole cultivation details is found null");
                start_cultivation(
                    state,
                    payload.startCultivation.landDetails,
                    payload.startCultivation.cultivationDetails,
                    this.signer_public_keys
                );
            } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST) {
                if (payload.performHarvest.landDetails == null || payload.performHarvest.harvestDetails == null)
                    throw new InvalidTransaction("One or more parameters passed in harvest Details is null or whole harvest details is found null");
                start_harvest(
                    state,
                    payload.performHarvest.landDetails,
                    payload.performHarvest.harvestDetails,
                    this.signer_public_keys
                );
            } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.INSPECTION) {
                if (payload.inspection.landDetails == null || payload.inspection.inspectionDetails == null)
                    throw new InvalidTransaction("One or more parameters passed in inspection Details is null or whole inspection details is found null");
                inspect_land(
                    state,
                    payload.inspection.landDetails,
                    payload.inspection.inspectionDetails,
                    this.signer_public_keys,
                );
            } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.CREATE_PACKAGE) {
                if (payload.createPackage.landDetails == null || payload.createPackage.packageDetails == null)
                    throw new InvalidTransaction("One or more parameters passed in package Details is null or whole package details is found null");
                create_package(
                    state,
                    payload.createPackage.packageDetails,
                    this.signer_public_keys
                );
            } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.UPDATE_PROCESS_DETAILS) {
                if (payload.updateProcessDetails.landDetails == null || payload.updateProcessDetails.updateprocessdetailsparameters == null)
                    throw new InvalidTransaction("One or more parameters passed in process Details is null or whole process details is found nulla");
                update_processDetails(
                    state,
                    payload.updateProcessDetails.updateprocessdetailsparameters,
                    this.signer_public_keys
                );
            } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.TRANSFER_PACKAGE) {
                if (payload.transferPackage.transferpackageparameters == null)
                    throw new InvalidTransaction("One or more parameters passed in transfer package Details is null or whole transfer details is found null");
                transfer_package(
                    state,
                    payload.transferPackage.transferpackageparameters,
                    this.signer_public_keys
                );
            } else {
                throw new InvalidTransaction(
                    `Didn't recognize Verb "${verb}".\nMust be one of "create_account,deposit_money,make_deposit,withdraw_money or transfer_money"`
                );
            }
        }
    }
}
module.exports = SupplyChainHandler;