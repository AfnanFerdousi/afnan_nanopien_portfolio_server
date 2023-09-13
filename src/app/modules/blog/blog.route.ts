import express from "express";
import blogController from "./blog.controller";

const router = express.Router();

router.get("/blogs", blogController.getAllBlogs);
router.get("/blogs/:id", blogController.getBlogById);
router.post("/blog", blogController.createBlog);

export default router;