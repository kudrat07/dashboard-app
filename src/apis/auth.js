const API_URL = "https://reqres.in/api";
import axios from "axios";

// LOGIN

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response?.data);
      throw new Error(error.response.data.error || "Something went wrong")
    }
    else if(error.request) {
        console.error("No response received:", error.request);
        throw new Error("Server is not responding, Please try again later")
    }
  }
};
