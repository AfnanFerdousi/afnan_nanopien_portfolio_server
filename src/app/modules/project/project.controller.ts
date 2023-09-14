import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import Project from "./project.model";

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
    const result = await Project.find();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Successfully fetched projects",
        data: result,
    });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
    const result = await Project.findById(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Successfully fetched project",
        data: result,
    });
})


export default {
    getAllProjects,
    getProjectById
}
