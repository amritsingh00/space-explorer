import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { getPictureOfTheDay } from "../services/nasaApi";
import "../styles/PictureDay.css";
import "../styles/Video.css";
import { saveFavorite } from "../utils/favorites";



function PictureDay() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPicture() {
      try {
        const data = await getPictureOfTheDay();
        setPicture(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPicture();
  }, []);

  // Save to Favorites
  const handleFavorite = () => {
    if (!picture) return;

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find(
      (item) => item.date === picture.date
    );

    if (exists) {
      alert("Already in Favorites ❤️");
      return;
    }

    favorites.push(picture);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert("Added to Favorites ❤️");
  };

  // Loading
  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  // Error
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
    preload="metadata"
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