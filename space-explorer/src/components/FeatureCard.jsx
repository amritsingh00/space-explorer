import { Link } from "react-router-dom";
import "../styles/FeatureCard.css";

function FeatureCard({ emoji, title, description, link }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{emoji}</div>

      <h2>{title}</h2>

      <p>{description}</p>

      <Link to={link} className="feature-btn">
        Open →
      </Link>
    </div>
  );
}

export default FeatureCard;