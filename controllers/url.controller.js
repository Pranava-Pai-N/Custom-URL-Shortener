import { nanoid } from "nanoid"
import { URL } from "../models/url.js"


export const getShortId = async (req, res) => {
    try {
        const { redirectUrl , customURL } = req.body;

        let isCustomDomain;
        if(customURL)
            isCustomDomain = true;
        else    
            isCustomDomain = false

        if (!redirectUrl)
            return res.status(400).json({
                success: false,
                message: "Please Provide a redirect url in the Params .."
            });

        const shortId = customURL || nanoid(8);


        const shortenedURL = `${process.env.BACKEND_URL}/${shortId}`


        const urlexists = await URL.findOne({ shortId })

        if(urlexists)
            return res.status(404).json({
                success : false,
                message : "This url is already taken . Add a new URL ..."
        })

        const URLObject = {
            shortId: shortId,
            redirectUrl: redirectUrl,
            shortenedURL : shortenedURL,
            userClicks : 0,
            customDomain : isCustomDomain
        }

        const url = await URL.create(URLObject);

        return res.status(200).json({
            success: true,
            message: "ShortId generated successfully ...",
            shortenedURL : URLObject.shortenedURL,
            LinkClicks : URLObject.userClicks,
            CustomDomain : URLObject.customDomain
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export const getRedirectUrl = async(req,res) =>{
    const { shortId } = req.params;

    if(!shortId)
        return res.status(400).json({
            success : false,
            message : "Enter a shortId in the params"
    })

    const url = await URL.findOneAndUpdate({ shortId }, { $inc : { userClicks : 1}}, { new : true})

    if(!url)
        return res.status(404).json({
            success : false,
            message : "URL not found . Please Try Again .."
    })

    res.redirect(url.redirectUrl)
}
