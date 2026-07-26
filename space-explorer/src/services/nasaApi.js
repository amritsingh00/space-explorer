import axios from "axios";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

// Astronomy Picture of the Day
export const getPictureOfTheDay = async () => {
  const response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  return response.data;
};

// Mars Rover Photos
export const getMarsPhotos = async () => {
  const response = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );

  return response.data.photos;
};
//picturebyday
export const getPictureByDate = async (date) => {
  const response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  );

  return response.data;
};