const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
    },
    age: {
        type: Number,
        min: [0, 'Age must be positive']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
