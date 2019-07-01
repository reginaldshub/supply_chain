var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cultivation_schema = new Schema({
    CropName: { type: String, require: true },
    CropSeason: { type: String, require: true },
    Dateofstart: { type: Date, required: true },
    RegistrationNo: { type: String, required: true },
    email: { type: String, required: false },
    // state: { type: String, required: true }
});

module.exports = mongoose.model('Cultivation', cultivation_schema);