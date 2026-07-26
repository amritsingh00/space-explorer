import axios from "axios";

// TEMPORARY: Hardcoded NASA API Key
// After confirming everything works, you can switch back to import.meta.env.VITE_NASA_API_KEY
const API_KEY = "TWQCBs4K4Wh4S6YrB9l4LWi9IiuNJ5EruNf5WkZA";

console.log("NASA API KEY:", API_KEY);

// Astronomy Picture of the Day
export const getPictureOfTheDay = async () => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );

    console.log("APOD Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("APOD Error:", error);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    }

    throw error;
  }
};

// Mars Rover Photos
export const getMarsPhotos = async () => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    );

    return response.data.photos;
  } catch (error) {
    console.error("Mars API Error:", error);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    }

    throw error;
  }
};

// Picture By Date
export const getPictureByDate = async (date) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error("Search API Error:", error);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    }

    throw error;
  }
};