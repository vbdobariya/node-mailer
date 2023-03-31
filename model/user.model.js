const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    country: String,
    hobbyData: Array
},{
    timestamp:true
});

module.exports = mongoose.model('Users',UserSchema);