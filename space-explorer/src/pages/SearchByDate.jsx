import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { saveFavorite } from "../utils/favorites";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

function SearchByDate() {
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState(null);

  const searchPhoto = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      );

      setPhoto(response.data);
    } catch (error) {
      console.log(error);
      alert("No picture found.");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>📅 Search NASA Picture</h1>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={searchPhoto}>
          Search
        </button>

        {photo && (
          <>
            <h2>{photo.title}</h2>

            <img
              src={photo.url}
              width="600"
              alt={photo.title}
            />
            <button
            className="save-btn"
            onClick={() => saveFavorite(photo)}
            >
            ❤️ Save
            </button>

            <p>{photo.explanation}</p>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default SearchByDate;