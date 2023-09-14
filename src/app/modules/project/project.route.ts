import express from "express";
import projectController from "./project.controller";

const router = express.Router();

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);

export default router;
