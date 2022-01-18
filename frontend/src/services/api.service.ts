import axios from "axios";

import {constants} from "../constants";

export const getApiService = async (path: string, query: string = '') => {
    const response = await axios.get(`${constants.apiUrl}${path}${query}`);

    return response;
}

export const postApiService = async (path: string = '', body: any = {}) => {
    const response = await axios.post(`${constants.apiUrl}${path}`, body);

    return response;
}

export const deleteApiService = async (path: string = '', body: any = {}) => {
    const response = await axios.delete(`${constants.apiUrl}${path}`, {
        data: body
    });

    return response;
}