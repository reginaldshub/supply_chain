var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    RegistrationNo: { type: String, required: true },
    email: { type: String, required: true },
    InspectionData: [{
        InspectorName: { type: String, required: true },
        InspectionReport: { type: String, require: true },
        DateofInspection: { type: Date, required: true },
    }]
});

module.exports = mongoose.model('Inspection', schema);