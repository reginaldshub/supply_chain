var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    InspectionReport: { type: String, require: true },
    DateofInspection: { type: Date, required: true },
    RegistrationNo: { type: String, required: true },
    InspectorName: { type: String, required: true }
});

module.exports = mongoose.model('Inspection', schema);