import mongoose, { Schema } from "mongoose";
import { IService } from "./service.interface";

const ServiceSchema: Schema = new Schema({
    icon: String,
    title: String,
    desc: String,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IService>("Service", ServiceSchema);
