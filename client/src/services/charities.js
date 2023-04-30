import api from "./apiConfig.js";

export const getCharities = async () => {
  try {
    const response = await api.get("/charity");
    return response.data;
  } catch (error) {
    console.error(`Failed to get charities - error: ${error}`);
    throw error;
  }
};