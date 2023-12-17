import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//database
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("welcome to authentication")
})

//Port
const PORT = process.env.PORT || 8080 ;

//run listen
app.listen(PORT,()=> {
    console.log(`Server Running on Port ${PORT}`)
})
 