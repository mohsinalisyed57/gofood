import axios from "axios";
import { config } from "../Config";

export const myOrderData = async() => {
        const response =await axios.post(`${config.Port}/api/auth/myOrderData`, {
            email: localStorage.getItem('userEmail'),
        });
        return response.data;
};