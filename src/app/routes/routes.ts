import express from "express";
const router = express.Router();
import blogRoutes from "../modules/blog/blog.route";

const moduleRoutes = [
    {
        path: "/",
        route: blogRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
