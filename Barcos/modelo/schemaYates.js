const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BoatSchema = Schema({
    name: String,
    model: String,
    Capacity: String
})

module.exports = mongoose.model("Botes", BoatSchema);