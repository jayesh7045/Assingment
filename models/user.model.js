const mongoose = require("mongoose");
const blogModel = require("./blog.model");
const userSchema = new mongoose.Schema({
    username : {
        type : String, 
        required : [true, "username is required"],

    },
    email : {
        type : String, 
        required : [true, "email is required"]
    },
    password : {
        type : String, 
        required : [true, "password is required"]
    },
    image : {
        type : String, 
    },
    blogs : [{
        type : mongoose.Types.ObjectId,
        ref : blogModel
    }]
}, {timestamps : true});
const userRegistration = mongoose.model("userRegistration", userSchema);
module.exports = userRegistration