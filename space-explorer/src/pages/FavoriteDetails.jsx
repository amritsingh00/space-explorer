import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FavoriteDetails.css";

function FavoriteDetails() {
  console.log("FavoriteDetails Loaded");

  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  if (!state) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Favorite not found.
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {state.media_type === "image" ? (
  <img
    src={state.url}
    alt={state.title}
    className="details-image"
  />
) : (
  <video
    className="details-video"
    controls
    autoPlay={false}
  >
    <source
      src={state.url}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
)}

        <h1>{state.title}</h1>

        <p>
          <strong>Date:</strong> {state.date}
        </p>

        {state.copyright && (
          <p>
            <strong>Copyright:</strong> {state.copyright}
          </p>
        )}

        <p className="details-text">
          {state.explanation}
        </p>
      </div>

      <Footer />
    </>
  );
}

export default FavoriteDetails;