import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 Space Explorer</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/picture">Picture of the Day</Link>
        
        <Link to="/iss">ISS</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;