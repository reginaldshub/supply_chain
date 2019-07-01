var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inspection_schema = new Schema({
    RegistrationNo: { type: String, required: true },
    email: { type: String, required: false },
    // state: { type: String, required: true },
    InspectionData: [{
        InspectorName: { type: String, required: true },
        InspectionReport: { type: String, required: true },
        InspectionDate: { type: Date, required: true },
        CropVariety: { type: String, required: true },
        CropSeason: { type: String, required: true },
        CropName: { type: String, required: true },
        Temperature: { type: String, required: true },
        TemerpatureUnit: { type: String, required: true },
        Humidity: { type: String, required: true },
        HumidityUnit: { type: String, required: true },
    }]
});

module.exports = mongoose.model('Inspection', inspection_schema);