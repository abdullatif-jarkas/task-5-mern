import { useState } from "react";
import Container from "../../Container/Container";
import "./Navbar.css";
import NavItems from "./NavItems";

const Navbar = ({ links, logo, btn }) => {
  const [active, setActive] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const changePosition = () => {
    if (window.scrollY >= 1) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changePosition);


  return (
    <>
      <nav className={navBar? "active" : ""}>
        <img className="logo" src={logo} alt="flora logo" loading="lazy" />
        <NavItems links={links} btn={btn} />
        <button className="bars-btn" onClick={() => setActive(true)}>
          <img src="assets/imgs/bars.png" alt="bars icon" loading="lazyZ" />
        </button>
      </nav>
      <div className={`offcanvas ${active ? "show" : ""}`}>
        <Container>
          <div className="offcanvas-header">
            <img className="logo" src={logo} alt="flora logo" loading="lazy" />
            <img
              src="assets/imgs/close.png"
              alt="close button"
              loading="lazy"
              onClick={() => setActive(false)}
            />
          </div>
        </Container>
        <NavItems links={links} btn={btn} />
      </div>
    </>
  );
};

export default Navbar;
