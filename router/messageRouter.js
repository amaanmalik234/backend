import express from "express";
import { sendMessage } from "../controller/message.Controller.js";

const router = express.Router();

router.post("/send", sendMessage)

export default router;