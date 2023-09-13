"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controller_1 = __importDefault(require("./blog.controller"));
const router = express_1.default.Router();
router.get("/blogs", blog_controller_1.default.getAllBlogs);
router.get("/blogs/:id", blog_controller_1.default.getBlogById);
router.post("/blog", blog_controller_1.default.createBlog);
exports.default = router;
