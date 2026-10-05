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

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee);

    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};