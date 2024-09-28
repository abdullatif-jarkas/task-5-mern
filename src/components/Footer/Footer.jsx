import Container from "../Container/Container";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="main-content">
          <div className="col">
            <img
              src="assets/imgs/logo.png"
              className="logo"
              alt="logo"
              loading="lazy"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>
          </div>
          <div className="col">
            <h5>Service</h5>
            <ul>
              <li>Payment & Tax</li>
              <li>Features</li>
              <li>View Booking</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="col">
            <h5>About</h5>
            <ul>
              <li>About us</li>
              <li>News</li>
              <li>Pricing</li>
              <li>New Property</li>
            </ul>
          </div>
          <div className="col">
            <h5>Our Location</h5>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <div className="social-icons">
              <div className="icon">
                <img src="assets/imgs/facebook.svg" alt="" />
              </div>
              <div className="icon">
                <img src="assets/imgs/twitter.svg" alt="" />
              </div>
              <div className="icon">
                <img src="assets/imgs/linkedin.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2024 flora. All Rights Reserved</p>
          <p className="terms">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
