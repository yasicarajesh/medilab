var mongoose = require('mongoose');

let Schema = mongoose.Schema;
let queriesSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
module.exports = mongoose.model('queries', queriesSchema);