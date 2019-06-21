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
    RetailAgentEmail: { type: String, required: false },
    ProcessAgentEmail: { type: String, required: true }
});

module.exports = mongoose.model('Process', schema);