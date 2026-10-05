import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};