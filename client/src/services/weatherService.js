 
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/api/weather/${city}`);
    return response.data;
  } catch (error) {
    return { error: "City not found or API error" };
  }
};
