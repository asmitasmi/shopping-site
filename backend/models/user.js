const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    name: {type: String, required: true, trim: true},
    surName: {type: String, required: true, trim: true},
    phoneNumber: {type: Number, required: true},
    emailAddress: {type: String, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    profilePicture: {type: String},
})

const User = mongoose.model('User', userSchema);

module.exports = User;