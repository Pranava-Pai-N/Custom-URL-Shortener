import mongoose from "mongoose";


export const connectDB = async(req,res) =>{
    return mongoose.connect(process.env.MONGODB_URL);
}