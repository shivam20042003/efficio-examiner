const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/login-tut')
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });


const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const collection = mongoose.model("User", loginSchema);
module.exports = collection;


