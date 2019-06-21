var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quantity: { type: Number, required: true },
    rostingDuration: { type: String, required: true },
    packageDateTime: { type: Date, required: true },
    temperature: { type: String, required: true },
    internalBatchNo: { type: String, required: true },
    processorName: { type: String, required: true },
    processorAddress: { type: String, required: true },
    setPrice: { type: Number, required: false },
    lands: { type: String, required: true },
    RetailAgentEmail: { type: String, required: true },
    ProcessAgentEmail: { type: String, required: false }
});

module.exports = mongoose.model('Retail', schema);