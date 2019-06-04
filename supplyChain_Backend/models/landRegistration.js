var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var schema = new Schema({
    RegistrationNo: { type: Number, required: true },
    FarmerName: { type: String, required: true },
    FarmAddress: { type: String, required: true },
    State: { type: String, required: true },
    Country: { type: String, required: true },
    ExporterName: { type: String, required: true },
    ImporterName: { type: String, required: true },
    DateOfRegistration: { type: String, required: true }
});

schema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
};

schema.methods.isValid = function(hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
};

module.exports = mongoose.model("landRegistration", schema);