import express from "express";
import { getShortId , getRedirectUrl } from "../controllers/url.controller.js";


const router = express.Router();


router.post("/redirectUrl",getShortId);

router.get("/:shortId",getRedirectUrl);


export default router;