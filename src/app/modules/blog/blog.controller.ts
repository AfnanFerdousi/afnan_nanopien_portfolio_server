// src/controllers/BlogController.ts
import { Request, Response } from "express";
import blogService from "./blog.service";
import { IBlog } from "./blog.interface";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const createBlog = catchAsync(async (req: Request, res: Response) => {
    const blog = await blogService.createBlog(req.body);
    sendResponse<IBlog>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Successfully created blog",
        data: blog,
    });
})

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
    const blogs = await blogService.getAllBlogs();
    sendResponse<IBlog[]>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Successfully fetched blogs",
        data: blogs,
    });
})

const getBlogById = catchAsync(async (req: Request, res: Response) => {
    const blog = await blogService.getBlogById(req.params.id);
    sendResponse<IBlog>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Successfully fetched blog",
        data: blog,
    });
})

export default {
    createBlog,
    getAllBlogs,
    getBlogById
}