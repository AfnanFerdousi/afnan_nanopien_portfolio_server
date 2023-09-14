import { IService } from "./service.interface";
import Service from "./service.model";

const getServices = async (): Promise<IService[] | null> => {
    const result = await Service.find();
    return result;
};

const getServiceById = async (id: string): Promise<IService | null> => {
    const result = await Service.findById(id);
    return result;
};

export default {
    getServices,
    getServiceById
}