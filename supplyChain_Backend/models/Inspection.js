var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Report: { type: String, require: true },
    DateofInspection: { type: Date, required: true },
    RegistrationNo: { type: String, required: true }
});

module.exports = mongoose.model('Inspection', schema);