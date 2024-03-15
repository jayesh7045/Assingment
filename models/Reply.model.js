import mongoose from "mongoose"
const ReplySchema = new mongoose.Schema({
    content : {
        type :String, 
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "userRegistration"
    }
}, {timestamps : true})

export const replyModel = mongoose.model("replyModel", ReplySchema);