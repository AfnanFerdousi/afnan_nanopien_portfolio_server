import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IService } from "./service.interface";
import serviceServices from "./service.services";

const getAllServices = catchAsync(async (req: Request, res: Response) => {
    const blogs = await serviceServices.getServices();
    sendResponse<IService[]>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Successfully fetched blogs",
        data: blogs,
    });
});

const getServiceById = catchAsync(async (req: Request, res: Response) => {
    const blog = await serviceServices.getServiceById(req.params.id);
    sendResponse<IService>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Successfully fetched blog",
        data: blog,
    });
});

export default {
    getAllServices,
    getServiceById
}