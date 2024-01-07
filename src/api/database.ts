import axios from "axios";
import { IConnection } from "./IAPI";

const instance = axios.create({ baseURL: process.env.BASE_URL + '/database' });

export const connectDatabase = (data: IConnection) => {
    return instance.post('/connect', { params: data }).then(resp => resp.data)
}
