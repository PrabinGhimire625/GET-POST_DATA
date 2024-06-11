const mongoose = require('mongoose');

// Define the person schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    work: {type: String, enum: ['UI/UX designer', 'Web developer', 'App developer'], required: true},
    mobile: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    salary: {type: Number, required: true}
});

// Create the Person model
const user = mongoose.model('user', userSchema);

// Export the model
module.exports = user;
