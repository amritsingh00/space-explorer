import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { saveFavorite } from "../utils/favorites";

import "../styles/PictureDay.css";
import "../styles/SearchByDate.css";
import "../styles/Video.css";

const API_KEY = "TWQCBs4K4Wh4S6YrB9l4LWi9IiuNJ5EruNf5WkZA";

function SearchByDate() {
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchPhoto = async () => {
    if (!date) {
      alert("Please select a date.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      );

      setPhoto(response.data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Unable to load NASA Picture.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="search-page">

        <h1>📅 Search NASA Picture by Date</h1>

        <div className="search-controls">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            className="save-btn"
            onClick={searchPhoto}
          >
            🔍 Search
          </button>
        </div>

        {loading && (
          <h2>Loading...</h2>
        )}

        {photo && (
          <div className="search-result">

            <h2>{photo.title}</h2>

            <p className="date">{photo.date}</p>

            {photo.media_type === "image" ? (
              <img
                src={photo.url}
                alt={photo.title}
                className="picture"
              />
            ) : photo.url.endsWith(".mp4") ? (
              <video
                className="video-player"
                controls
              >
                <source
                  src={photo.url}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={photo.url}
                title={photo.title}
                className="video-player"
                allowFullScreen
              />
            )}

            {photo.media_type === "image" && (
              <button
                className="save-btn"
                onClick={() => saveFavorite(photo)}
              >
                ❤️ Save to Favorites
              </button>
            )}

            <p className="description">
              {photo.explanation}
            </p>

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default SearchByDate;