var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var harvest_schema = new Schema({

    FarmerName: { type: String, required: true },
    RegistrationNo: { type: String, required: true },
    CropVariety: { type: String, required: true },
    CropMeasureCategory: { type: String, required: true },
    DateofEnd: { type: String, required: true },
    Dateofstart: { type: String, required: true },
    Humidity: { type: String, required: true },
    HumidityUnit: { type: String, required: true },
    Quantity: { type: String, required: true },
    QuantityUnit: { type: String, required: true },
    TemerpatureUnit: { type: String, required: true },
    Temperature: { type: String, required: true },
    // state: { type: String, required: true }
});

module.exports = mongoose.model('Harvest', harvest_schema);