const mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String
    
})

module.exports = mongoose.model("Usuarios", UserSchema);