var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    CropVariety: { type: String, require: true },
    Dateofstart: { type: Date, required: true }
});

module.exports = mongoose.model('Cultivation', schema);