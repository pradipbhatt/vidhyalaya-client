import axios from "axios";

// Create an instance of axios with a base URL for the local API
const API = axios.create({
  baseURL: "http://localhost:8081/api/",
});

// Function to handle user signup
export const UserSignUp = async (data) => 
  // Make a POST request to the /user/signup endpoint with the provided data
  API.post("/user/signup", data);

// Function to handle user signin
export const UserSignIn = async (data) => 
  // Make a POST request to the /user/signin endpoint with the provided data
  API.post("/user/login", data);  // Changed endpoint to /user/login
