import axios from "axios";
import { config } from "../Config";
import { errorToast, successToast } from "../lib/Toast";
import { ErrorMessage } from "../Enum/ErrorMessage";
export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${config.Port}/api/products/add`, product);
        console.log('Product added:', response.data);
        // Handle success, e.g., show a success message or redirect
        successToast(ErrorMessage.PRODUCT_ADDED);
    } catch (error) {
        console.error('Error adding product:', error);
        errorToast(ErrorMessage.PR);
        // Handle error, e.g., show an error message
    }
};

