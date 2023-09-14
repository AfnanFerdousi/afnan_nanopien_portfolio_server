"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const contact_model_1 = __importDefault(require("./contact.model"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
exports.sendEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message } = req.body;
        // Save the form data to MongoDB
        const formSubmission = new contact_model_1.default({
            name,
            email,
            message,
        });
        yield formSubmission.save();
        // Send an email using Nodemailer
        const transporter = nodemailer_1.default.createTransport({
            service: "Gmail",
            auth: {
                user: "afnanferdousi550@gmail.com",
                pass: process.env.PASS, // The generated app password
            },
        });
        const mailOptions = {
            from: "afnanferdousi550@gmail.com",
            to: "afnanferdousi550@gmail.com",
            subject: "New Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        yield transporter.sendMail(mailOptions);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Email sent successfully",
        });
    }
    catch (error) {
        console.error("Error processing form submission:", error);
        (0, sendResponse_1.default)(res, {
            success: false,
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: "Error processing form submission",
        });
    }
}));
exports.default = { sendEmail: exports.sendEmail };
