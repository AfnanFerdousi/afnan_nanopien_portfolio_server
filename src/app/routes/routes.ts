import express from "express";
const router = express.Router();
import blogRoutes from "../modules/blog/blog.route";
import contactRoutes from "../modules/contact/contact.route";

const moduleRoutes = [
    {
        path: "/",
        route: blogRoutes,
    },
    {
        path: "/contact",
        route: contactRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
