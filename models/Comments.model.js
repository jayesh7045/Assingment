import mongoose from "mongoose"


const commentsSchema = new mongoose.Schema({
    nameofuser : {
        type : mongoose.Types.ObjectId,
        ref : "userRegistration"
    },
    content : {
        type :String, 
        required : true
    },
    reply : [{
        type : mongoose.Types.ObjectId,
        ref : "commentsModel"
    }]
}, {timestamps : true})

export const commentsModel = mongoose.model("commentsModel", commentsSchema);