var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    CropVariety: { type: String, require: true },
    Dateofstart: { type: Date, required: true },
    RegistrationNo: { type: String, required: true },
    email: { type: String, required: false }
});

module.exports = mongoose.model('Cultivation', schema);