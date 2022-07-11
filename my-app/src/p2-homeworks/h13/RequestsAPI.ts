import axios from "axios";

export const requestsAPI = {
    getData(checked: boolean) {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked});
    }
};

export type ResponseType = {
    info: string,
    yourBody: { success: boolean },
    yourQuery: {},
    errorText: string
};