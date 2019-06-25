var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var user_schema = new Schema({
    email: { type: String, require: true },
    name: { type: String, require: true },
    id: { type: Number, require: true },
    role: { type: String, require: true },
    password: { type: String, require: true }
});

user_schema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

user_schema.methods.isValid = function(hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User', user_schema);