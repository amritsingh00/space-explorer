import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "80px" }}>404</h1>

        <h2>Page Not Found</h2>

        <p>The page you are looking for doesn't exist.</p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "#00d9ff",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          🏠 Back to Home
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default NotFound;