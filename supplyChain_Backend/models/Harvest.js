var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    CropVariety: { type: String, require: true },
    Temperature: { type: String, require: true },
    Humidity: { type: String, require: true },
    Dateofharvest: { type: String, require: true },
    quantity: { type: String, require: true },
    RegistrationNo: { type: String, required: true }
});

module.exports = mongoose.model('Harvest', schema);