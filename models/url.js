import mongoose, { Schema } from "mongoose";


const URLSchema = new Schema({
    shortId : {
        type : String,
        required : true,
        trim : true
    },

    redirectUrl : {
        type : String,
        required : true
    },

    shortenedURL : {
        type : String,
        required : true
    },

    userClicks : {
        type : Number,
        default : 0
    },

    customDomain : {
        type : Boolean,
        default : false
    }

} , { timestamps : true})



export const URL = mongoose.model("URL",URLSchema);


