import Navbar from "./Navbar/Navbar";
import { linksData } from "../../data/navbarData";
import Hero from "../Hero/Hero";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar logo="assets/imgs/logo.png" links={linksData} btn="login" />
      <Hero
        title="Discover a place you will love to live"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
      />
      <img className="hero-img" src="assets/imgs/hero-img.png" alt="house img" loading="lazy" />
    </header>
  );
};

export default Header;
