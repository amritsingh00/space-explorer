import axios from "axios";

export const getISSLocation = async () => {
  const response = await axios.get(
    "https://api.wheretheiss.at/v1/satellites/25544"
  );

  return response.data;
};