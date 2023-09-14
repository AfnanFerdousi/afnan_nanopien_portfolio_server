import express from "express";
import contactController from "./contact.controller";

const router = express.Router();

router.post("/sendEmail", contactController.sendEmail);

export default router;
