import express from "express";
import serviceController from "./service.controller";

const router = express.Router();

router.post("/services", serviceController.getService);

export default router;
