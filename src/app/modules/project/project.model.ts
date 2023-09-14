// src/models/Blog.ts
import mongoose, { Schema } from "mongoose";
import { IProject } from "./project.interface";

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    liveLink: { type: String, required: true },
    githubLink: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IProject>("Project", ProjectSchema);
