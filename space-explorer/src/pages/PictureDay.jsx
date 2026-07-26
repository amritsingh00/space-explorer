import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { getPictureOfTheDay } from "../services/nasaApi";
import { saveFavorite } from "../utils/favorites";

import "../styles/PictureDay.css";
import "../styles/Video.css";

function PictureDay() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPicture() {
      try {
        const data = await getPictureOfTheDay();

        console.log("NASA Response:", data);

        setPicture(data);
      } catch (error) {
        console.error("NASA API Error:", error);

        if (error.response) {
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPicture();
  }, []);

  const handleFavorite = () => {
    if (!picture) return;

    if (picture.media_type !== "image") {
      alert("Only images can be added to Favorites.");
      return;
    }

    saveFavorite(picture);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  if (!picture) {
    return (
      <>
        <Navbar />

        <div
          style={{
            textAlign: "center",
            padding: "80px",
            color: "white",
          }}
        >
          <h2>Unable to load NASA Picture.</h2>

          <p>Please try again later.</p>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="picture-page">

        <h1>{picture.title}</h1>

        <p className="date">{picture.date}</p>

        {picture.media_type === "image" ? (
          <img
            src={picture.url}
            alt={picture.title}
            className="picture"
          />
        ) : picture.url.endsWith(".mp4") ? (
          <video
            className="video-player"
            controls
            autoPlay={false}
          >
            <source
              src={picture.url}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="video-container">
            <iframe
              src={picture.url}
              title={picture.title}
              className="video-player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <button
          className="save-btn"
          onClick={handleFavorite}
        >
          ❤️ Save to Favorites
        </button>

        <p className="description">
          {picture.explanation}
        </p>

      </div>

      <Footer />
    </>
  );
}

export default PictureDay;