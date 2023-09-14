// controllers/formSubmissionController.ts
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import ContactModel from "./contact.model";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

export const sendEmail = catchAsync(async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;

        // Save the form data to MongoDB
        const formSubmission = new ContactModel({
            name,
            email,
            message,
        });
        await formSubmission.save();

        // Send an email using Nodemailer
       const transporter = nodemailer.createTransport({
           service: "Gmail", // Use 'Gmail' as the service
           auth: {
               user: "afnanferdousi550@gmail.com", // Your Gmail email address
               pass: process.env.PASS, // The generated app password
           },
       });

       const mailOptions = {
           from: "afnanferdousi550@gmail.com",
           to: "afnanferdousi550@gmail.com", // Replace with your email address
           subject: "New Form Submission",
           text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
       };

        await transporter.sendMail(mailOptions);

       sendResponse(res, {
           success: true,
           statusCode: httpStatus.OK,
           message: "Email sent successfully",
       })
    } catch (error) {
        console.error("Error processing form submission:", error);
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Error processing form submission",
        })
    }
    
}
)

export default {sendEmail}