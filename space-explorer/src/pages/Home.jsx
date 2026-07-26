import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import Stats from "../components/Stats";
import About from "../components/About";
import "../styles/FeatureCard.css";
import "../styles/Stats.css";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

    <section className="features">

  <FeatureCard
    emoji="🌌"
    title="NASA Picture"
    description="Discover NASA's Astronomy Picture of the Day."
    link="/picture"
  />

  <FeatureCard
    emoji="📅"
    title="Search by Date"
    description="Explore NASA images from any date."
    link="/search"
  />

  <FeatureCard
    emoji="🛰"
    title="ISS Tracker"
    description="Track the International Space Station live."
    link="/iss"
  />

  <FeatureCard
    emoji="❤️"
    title="Favorites"
    description="View your saved NASA pictures."
    link="/favorites"
  />

  </section>
      <Stats />
      <About/>

      <Footer />
    </>
  );
}

export default Home;