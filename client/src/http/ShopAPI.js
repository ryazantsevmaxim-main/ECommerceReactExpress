import {axiosAuthClient, axiosClient} from "./axios";


export const createTypeRequest = async ({name}) => {
    const response = await axiosAuthClient.post('api/type', {name});
    const {data} = response;

    return data;
};

export const createBrandRequest = async ({name}) => {
    const response = await axiosAuthClient.post('api/brand', {name});
    const {data} = response;

    return data;
};

export const createDeviceRequest = async (device) => {
    const response = await axiosAuthClient.post('api/device', device);
    const {data} = response;

    return data;
};

export const fetchTypes = async () => {
    const response = await axiosClient.get('api/type');
    const {data} = response;

    return data;
};

export const fetchBrands = async () => {
    const response = await axiosClient.get('api/brand');
    const {data} = response;

    return data;
};

export const fetchDevices = async ({typeId, brandId, page, limit = 5}) => {
    const response = await axiosClient.get('api/device', {params: {typeId, brandId, page, limit}});
    const {data} = response;

    return data;
};

export const fetchOneDevice = async ({deviceId}) => {
    const response = await axiosClient.get('api/device/' + deviceId);
    const {data} = response;

    return data;
};

export const AddToCardRequest = async ({deviceId}) => {
    const response = await axiosClient.get('api/device/' + deviceId);
    const {data} = response;

    return data;
};

