import axios from "axios";
import { config } from "../Config";
export const fetchFoodData = async () => {
    const response = await axios.post(`${config.Port}/api/auth/foodData`);
    return response.data;
};