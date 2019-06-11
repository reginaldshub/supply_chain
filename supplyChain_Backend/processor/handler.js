const { TransactionHandler } = require('sawtooth-sdk/processor/handler')
const { InvalidTransaction, InternalError } = require('sawtooth-sdk/processor/exceptions')
const cbor = require('cbor')
const env = require('../shared/env');
const { land_registration, start_cultivation, inspect_land } = require('./state')

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
        console.log(payload);
        if (payload.verb === 'landregistration') {
            return land_registration(state, payload.RegistrationNo, payload.FarmerName, payload.FarmAddress, payload.State, payload.Country, payload.ExporterName, payload.ImporterName, payload.DateOfRegistration, this.signer_public_keys)
        } else if (payload.verb === 'startcultivation') {
            return start_cultivation(state, payload.RegistrationNo, payload.CropVariety, payload.Dateofstart, payload.FarmerName, this.signer_public_keys)
        } else if (payload.verb === 'performharvest') {
            return start_harvest(state, payload.RegistrationNo, payload.FarmerName, payload.CropVariety, payload.Temperature, payload.Humidity, payload.Dateofharvest, payload.Quantity, this.signer_public_keys)
        } else if (payload.verb === 'landInspection') {
            return inspect_land(state, payload.InspectionReport, payload.DateofInspection, payload.RegistrationNo, payload.InspectorName, payload.FarmerName, this.signer_public_keys)
        } else {
            throw new InvalidTransaction(`Didn't recognize Verb "${verb}".\nMust be one of "create_account,deposit_money,make_deposit,withdraw_money or transfer_money"`)
        }
    }
}
module.exports = SupplyChainHandler;