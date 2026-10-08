import axios from "axios";
import type { ApplyRequest } from "../models/ApplyRequest";
// import type { ApplyRequest } from "../models/ApplyRequest";

const URL = "https://localhost";
const PORT = 7172;

export const applyCampaign = async (request: ApplyRequest) => {
  try {
    const response = await axios.post(
      `${URL}:${PORT}/api/campaigns/calculate`,
      request,
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw error;
  }
};
