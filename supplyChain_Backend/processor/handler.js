const { TransactionHandler } = require('sawtooth-sdk/processor/handler')
const { InvalidTransaction, InternalError } = require('sawtooth-sdk/processor/exceptions')
const cbor = require('cbor')
const env = require('../shared/env');
const { land_registration, start_cultivation, inspect_land } = require('./state')
var protos = require("./../shared/supplyChain")

const encode = obj => Buffer.from(JSON.stringify(obj))
const decode = buf => JSON.parse(buf);

class SupplyChainHandler extends TransactionHandler {

    constructor() {
        super(env.familyName, [env.familyVersion], [env.TP_NAMESPACE])
        this.signer_public_keys = "";
    }

    apply(transactionProcessRequest, state) {
        let header = transactionProcessRequest.header;
        this.signer_public_keys = header.signerPublicKey;
        let payload = cbor.decode(transactionProcessRequest.payload);
        console.log("payload", payload)
        if (payload.action == protos.supplyChainPackage.PayLoad.Action.LAND_REGISTRATION) {
            let newPayload = payload.landRegistration;
            console.log("newPayload", newPayload)
            return land_registration(state, newPayload.addressparameters.RegistrationNo, newPayload.addressparameters.FarmerName, newPayload.FarmAddress, newPayload.State, newPayload.Country, newPayload.ExporterName, newPayload.ImporterName, newPayload.DateOfRegistration, this.signer_public_keys)
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.START_CULTIVATION) {
            let newPayload = payload.startCultivation;
            console.log("newPayload", newPayload)
            return start_cultivation(state, newPayload.addressparameters.RegistrationNo, newPayload.CropVariety, newPayload.Dateofstart, newPayload.addressparameters.FarmerName, this.signer_public_keys)
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.PERFORM_HARVEST) {
            let newPayload = payload.performHarvest;
            console.log("newPayload", newPayload)
            return start_harvest(state, newPayload.addressparameters.RegistrationNo, newPayload.addressparameters.FarmerName, newPayload.CropVariety, newPayload.Temperature, newPayload.Humidity, newPayload.Dateofharvest, newPayload.Quantity, this.signer_public_keys)
        } else if (payload.action == protos.supplyChainPackage.PayLoad.Action.INSPECTION) {
            let newPayload = payload.inspection;
            return inspect_land(state, newPayload.InspectionReport, newPayload.DateofInspection, newPayload.addressparameters.RegistrationNo, newPayload.InspectorName, newPayload.addressparameters.FarmerName, this.signer_public_keys)
        } else {
            throw new InvalidTransaction(`Didn't recognize Verb "${verb}".\nMust be one of "create_account,deposit_money,make_deposit,withdraw_money or transfer_money"`)
        }
    }
}
module.exports = SupplyChainHandler;