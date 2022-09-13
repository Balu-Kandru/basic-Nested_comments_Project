const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const app=express();
const userController=require("./routes/user")
const contentController=require("./routes/usercontent")

app.use(cors())
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.listen(process.env.PORT,()=>{
    console.log("server started @ : " +process.env.PORT);
});
// db connection
mongoose.connect(process.env.DATABASE);


// base path;
app.get("/",(req,res)=>{
    res.send("backend works");
});

app.use("/",userController)
app.use("/content",contentController)