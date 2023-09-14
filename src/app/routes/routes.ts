import express from "express";
const router = express.Router();
import blogRoutes from "../modules/blog/blog.route";
import contactRoutes from "../modules/contact/contact.route";
import serviceRoutes from "../modules/service/service.route";
import projectRoutes from "../modules/project/project.route";

const moduleRoutes = [
    {
        path: "/",
        route: blogRoutes,
    },
    {
        path: "/contact",
        route: contactRoutes,
    },
    {
        path: "/services",
        route: serviceRoutes,
    },
    {
        path: "/projects",
        route: projectRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
