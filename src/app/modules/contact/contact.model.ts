import mongoose from "mongoose";
import { Contact } from "./contact.interface";

const ContactModel = mongoose.model<Contact>(
    "FormSubmission",
    new mongoose.Schema({
        name: String,
        email: String,
        message: String,
    })
);

export default ContactModel;
