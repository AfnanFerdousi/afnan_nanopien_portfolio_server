import { IProject } from "./project.interface";
import Project from "./project.model";

const getAllProjects = async (): Promise<IProject[] | null> => {
    const result = await Project.find();
    return result;
};

const getProjectById = async (id: string): Promise<IProject | null> => {
    const result = await Project.findById(id);
    return result;
};

export default {
    getAllProjects,
    getProjectById
}