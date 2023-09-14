"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_controller_1 = __importDefault(require("./contact.controller"));
const router = express_1.default.Router();
router.post("/sendEmail", contact_controller_1.default.sendEmail);
exports.default = router;
