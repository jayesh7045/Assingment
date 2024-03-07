const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const userRoutes = require("./routes/userRoutes.js")
const blogRoutes = require("./routes/blogRoutes.js")
connectDB();

 

app.get('/', (req, res)=>{
    res.status(200).send({
        "message" : "Node server"
    })
})




app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blog", blogRoutes);
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`.bgCyan.white)
})

