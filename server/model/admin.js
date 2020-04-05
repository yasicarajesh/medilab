var mongoose = require('mongoose');

let Schema = mongoose.Schema;
let adminSchema = new Schema({
    email: String,
    password: String
});
module.exports = mongoose.model('admins', adminSchema);