"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = __importDefault(require("./project.controller"));
const router = express_1.default.Router();
router.get("/", project_controller_1.default.getAllProjects);
router.get("/:id", project_controller_1.default.getProjectById);
exports.default = router;
