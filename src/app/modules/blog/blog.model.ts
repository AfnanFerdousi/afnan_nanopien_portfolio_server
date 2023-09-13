// src/models/Blog.ts
import mongoose, { Schema } from "mongoose";
import { IBlog } from "./blog.interface";



const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBlog>("Blog", BlogSchema);
