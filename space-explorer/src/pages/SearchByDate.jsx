import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { saveFavorite } from "../utils/favorites";
import "../styles/PictureDay.css";

// Same API key used in nasaApi.js
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

      alert("Unable to load NASA picture.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "40px",
          color: "white",
        }}
      >
        <h1>📅 Search NASA Picture by Date</h1>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          className="save-btn"
          onClick={searchPhoto}
          style={{ marginLeft: "15px" }}
        >
          Search
        </button>

        {loading && <h2>Loading...</h2>}

        {photo && (
          <>
            <h2>{photo.title}</h2>

            <p>{photo.date}</p>

            {photo.media_type === "image" ? (
              <img
                src={photo.url}
                alt={photo.title}
                className="picture"
              />
            ) : photo.url.endsWith(".mp4") ? (
              <video
                controls
                className="video-player"
              >
                <source
                  src={photo.url}
                  type="video/mp4"
                />
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
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default SearchByDate;