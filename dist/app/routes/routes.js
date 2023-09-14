"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const blog_route_1 = __importDefault(require("../modules/blog/blog.route"));
const contact_route_1 = __importDefault(require("../modules/contact/contact.route"));
const service_route_1 = __importDefault(require("../modules/service/service.route"));
const project_route_1 = __importDefault(require("../modules/project/project.route"));
const moduleRoutes = [
    {
        path: "/",
        route: blog_route_1.default,
    },
    {
        path: "/contact",
        route: contact_route_1.default,
    },
    {
        path: "/services",
        route: service_route_1.default,
    },
    {
        path: "/projects",
        route: project_route_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
