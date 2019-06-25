var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var harvest_schema = new Schema({
    CropVariety: { type: String, require: true },
    Temperature: { type: String, require: true },
    Humidity: { type: String, require: true },
    Dateofharvest: { type: String, require: true },
    Quantity: { type: String, require: true },
    RegistrationNo: { type: String, required: true },
    email: { type: String, required: false },
    state: { type: String, required: true }
});

module.exports = mongoose.model('Harvest', harvest_schema);