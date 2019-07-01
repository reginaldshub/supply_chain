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
            console.log("newLandRegistrationPayload", payload.landRegistration);
            return land_registration(
                state,
                payload.landRegistration.addressparameters,
                payload.landRegistration.landregistrationparameters,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION) {
            console.log("newStartCultivationPayload", payload.startCultivation);
            return start_cultivation(
                state,
                payload.startCultivation.addressparameters,
                payload.startCultivation.startcultivationparameters,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST) {
            console.log("newPerformHarvestPayload", payload.performHarvest);
            return start_harvest(
                state,
                payload.performHarvest.addressparameters,
                payload.performHarvest.performharvestparameters,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.INSPECTION) {
            return inspect_land(
                state,
                payload.inspection.addressparameters,
                payload.inspection.inspectparameters,
                this.signer_public_keys,
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.CREATE_PACKAGE) {
            return create_package(
                state,
                payload.createPackage.createpackageparameters,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.UPDATE_PROCESS_DETAILS) {
            return update_processDetails(
                state,
                payload.updateProcessDetails.updateprocessdetailsparameters,
                this.signer_public_keys
            );
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.TRANSFER_PACKAGE) {
            return transfer_package(
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
module.exports = SupplyChainHandler;