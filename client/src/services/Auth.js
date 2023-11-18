import axios from "axios";
import { config } from "../Config";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${config.Port}/api/auth/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const submitLocation = async (lat, long) => {
  try {
    const response = await axios.post(`${config.Port}/api/auth/getlocation`, {
      latlong: { lat, long },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "location failed");
  }
};
export const signUpUser = async (credentials) => {
  try {
    const response = await axios.post(`${config.Port}/api/auth/users`, {
      name: credentials.name,
      email: credentials.email,
      location: credentials.address,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message, "error.response?.data?.message");
    throw new Error(error.response?.data?.message);
  }
};
