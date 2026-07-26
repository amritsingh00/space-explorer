import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Favorites.css";
import { Link } from "react-router-dom";

import {
  getFavorites,
  removeFavorite,
  clearFavorites,
} from "../utils/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const deleteImage = (date) => {
    removeFavorite(date);
    setFavorites(getFavorites());
  };

  const deleteAll = () => {
    clearFavorites();
    setFavorites([]);
  };

  return (
    <>
      <Navbar />

      <div className="favorites-page">
        <h1>❤️ Favorites</h1>

        {favorites.length > 0 && (
          <button
            className="clear-btn"
            onClick={deleteAll}
          >
            Clear All
          </button>
        )}

        <div className="favorites-grid">
          {favorites.length === 0 ? (
            <h2>No Favorites Yet</h2>
          ) : (
            favorites.map((item) => (
              <div
                className="favorite-card"
                key={item.date}
              >
                <Link
                  to="/favorite-details"
                  state={item}
                >
                 {item.media_type === "image" ? (
  <img
    src={item.url}
    alt={item.title}
  />
) : (
  <video
    className="favorite-video"
    controls
    preload="metadata"
  >
    <source
      src={item.url}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
)}
                </Link>

                <h3>{item.title}</h3>

                <p>{item.date}</p>

                <button
                  className="remove-btn"
                  onClick={() => deleteImage(item.date)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Favorites;