import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import astronaut from "../assets/astronaut.png";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <TypeAnimation
            sequence={[
              "🚀 Explore the Universe",
              2000,
              "🌌 Discover NASA Pictures",
              2000,
              "🛰 Track the ISS Live",
              2000,
              "⭐ Search Space by Date",
              2000,
            ]}
            wrapper="h1"
            repeat={Infinity}
            className="hero-title"
          />

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Explore breathtaking NASA astronomy pictures, search by date,
          track the International Space Station, and save your favorite
          discoveries from the universe.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link to="/picture" className="hero-btn">
            <FaRocket /> Explore Now
          </Link>

          <Link to="/search" className="hero-btn secondary-btn">
            📅 Search by Date
          </Link>
        </motion.div>

      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          src={astronaut}
          className="astronaut"
          alt="Astronaut"
        />
      </motion.div>

    </section>
  );
}

export default Hero;