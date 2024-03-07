const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const connectDB = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`)
    }
    catch(err)
    {
        console.log("Mongo Connect Error " + err);
    }
}
module.exports = connectDB