import api from "./apiConfig.js";

export const createPledge = async (pledge) => {
    try {
      const response = await api.post("/pledges", pledge);
      return response.data;
    } catch (error) {
      throw error;
    }
  };