import express from "express";
import URLRoutes from "./routes/url.js"
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB()
.then(() =>{
    console.log("Database Connected Succesfully ...")
})

app.use(express.json())
app.use(express.urlencoded({ extended : true}))


app.use("/api/url",URLRoutes)

app.get("/",(req,res) =>{
    return res.json({
        success : true,
        message : "Backend is running .."
    })
})


app.listen(PORT, () =>{
    console.log(`Backend running at PORT ${PORT} `)
})