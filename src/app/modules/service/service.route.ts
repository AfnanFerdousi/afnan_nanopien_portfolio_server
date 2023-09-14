import express from "express";
import serviceController from "./service.controller";

const router = express.Router();

router.get("/", serviceController.getAllServices);
router.get("/:id", serviceController.getServiceById);


export default router;
