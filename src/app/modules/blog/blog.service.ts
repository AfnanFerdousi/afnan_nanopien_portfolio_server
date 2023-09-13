// src/services/BlogService.ts

import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlog = async (body: IBlog): Promise<IBlog | null> => {
    const result = await Blog.create(body);
    return result;
};

const getAllBlogs = async (): Promise<IBlog[] | null> => {
    const result = await Blog.find();
    return result;
}

const getBlogById = async (id: string): Promise<IBlog | null> => {
    const result = await Blog.findById(id);
    return result;
}

export default {   
    getAllBlogs,
    getBlogById,
    createBlog
}