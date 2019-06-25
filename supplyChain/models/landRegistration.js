var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var land_schema = new Schema({
    RegistrationNo: { type: String, required: true },
    FarmerName: { type: String, required: true },
    FarmAddress: { type: String, required: true },
    State: { type: String, required: true },
    Country: { type: String, required: true },
    ExporterName: { type: String, required: true },
    ImporterName: { type: String, required: true },
    DateOfRegistration: { type: String, required: true },
    status: { type: String, required: true },
    inspectionStatus: { type: Boolean, required: false },
    email: { type: String, required: true },
    // state: { type: String, required: true }
});

land_schema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
};

land_schema.methods.isValid = function(hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
};

module.exports = mongoose.model("landRegistration", land_schema);