import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import spotify from "../../assets/icons/spotify.svg";
import pocketcasts from "../../assets/icons/pocketcasts.svg";
import soundcloud from "../../assets/icons/soundcloud.svg";
import applepodcasts from "../../assets/icons/applepodcasts.svg";
import itunes from "../../assets/icons/itunes.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <section className="footer-left">
        <h2 className="footer-left-logo">Castaway</h2>
        <div className="footer-left-social-links">
          <img
            src={instagram}
            alt="Instagram Icon"
            className="footer-social-icon"
          />
          <img
            src={twitter}
            alt="Twitter Icon"
            className="footer-social-icon"
          />
          <img
            src={facebook}
            alt="Facebook Icon"
            className="footer-social-icon"
          />
        </div>
      </section>
      <nav className="footer-center">
        <a href="#home" className="footer-center-nav-link">
          Home
        </a>
        <a href="#about" className="footer-center-nav-link">
          About
        </a>
        <a href="#episodes" className="footer-center-nav-link">
          Episodes
        </a>
        <a href="#contact" className="footer-center-nav-link">
          Contact
        </a>
      </nav>
      <section className="footer-right">
        <a href="#" className="footer-right-extra-link">
          Style Guide
        </a>
        <a href="#" className="footer-right-extra-link">
          Instructions
        </a>
        <a href="#" className="footer-right-extra-link">
          Changelog
        </a>
        <a href="#" className="footer-right-extra-link">
          Credit
        </a>
        <a href="#" className="footer-right-extra-link">
          Licenses
        </a>
      </section>
      <section className="footer-powered">
        <p className="footer-powered-text">Powered by Webflow</p>
        <div className="footer-powered-platform-icons">
          <img
            src={spotify}
            alt="Spotify Icon"
            className="footer-platform-icon"
          />
          <img
            src={pocketcasts}
            alt="Pocket Casts Icon"
            className="footer-platform-icon"
          />
          <img
            src={soundcloud}
            alt="Soundcloud Icon"
            className="footer-platform-icon"
          />
          <img
            src={applepodcasts}
            alt="Apple Podcasts Icon"
            className="footer-platform-icon"
          />
          <img
            src={itunes}
            alt="iTunes Icon"
            className="footer-platform-icon"
          />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
