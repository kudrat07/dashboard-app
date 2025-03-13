import axios from "axios";

// LOGIN

const LOGIN_API_URL = "https://reqres.in/api";

// email = emma.wong@reqres.in
// password = 12345

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${LOGIN_API_URL}/login`, formData);
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

// GETTING USER DETAILS FROM Reqres API
const USER_URL = "https://reqres.in/api/users/3";

export const fetchUserData = async() => {
  try {
    const response = await axios.get(USER_URL);
    return response.data.data;

  } catch (error) {
    if(error.response) {
      console.error(error.response?.data);
      throw new Error(error.response.data.error || "Something went wrong")
    } else if(error.request){
      console.log("No response received:", error.request)
      throw new Error("Server is not responding, Please try again later")
    }
  }
}

// GETTING EXPENSES DATA FROM MockAPI

const EXPENSES_URL = "https://67d1cf1590e0670699bb9e91.mockapi.io/expenses/expenses";

export const fetchExpenses = async() => {
  try {
    const response = await axios.get(EXPENSES_URL);
    return response.data;
  } catch (error) {
    if(error.response) {
      console.error(error.response?.data)
      throw new Error(error.response.data.error || "Something went wrong");
    } else if(error.request) {
      console.error("No response received", error.request)
      throw new Error("Server is not responding, Please try again later")
    }
  }
}

// GETTING PROGRESS BAR DATA FROM MockAPI
const PROGRESS_URL = "https://67d1cf1590e0670699bb9e91.mockapi.io/expenses/progressBar"

export const fetchBarData = async() => {
  try {
    const response = await axios.get(PROGRESS_URL)
    return response.data;
  } catch (error) {
    if(error.response){
      console.error(error.response?.data)
      throw new Error(error.response.data.error || "Something went wrong");
    } else if(error.request) {
      console.log("No response received", error.request);
      throw new Error("Server is not responding, Please try again later")
    }
  }
}
