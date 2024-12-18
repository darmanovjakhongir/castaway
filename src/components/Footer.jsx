import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import spotify from "../assets/icons/spotify.svg";
import pocketcasts from "../assets/icons/pocketcasts.svg";
import soundcloud from "../assets/icons/soundcloud.svg";
import applepodcasts from "../assets/icons/applepodcasts.svg";
import itunes from "../assets/icons/itunes.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <section className="footer__left">
        <h2 className="footer__left__logo">Castaway</h2>
        <div className="footer__left__social__links">
          <img
            src={instagram}
            alt="Instagram Icon"
            className="footer__social__icon"
          />
          <img
            src={twitter}
            alt="Twitter Icon"
            className="footer__social__icon"
          />
          <img
            src={facebook}
            alt="Facebook Icon"
            className="footer__social__icon"
          />
        </div>
      </section>
      <nav className="footer__center">
        <a href="#home" className="footer__center__nav__link">
          Home
        </a>
        <a href="#about" className="footer__center__nav__link">
          About
        </a>
        <a href="#episodes" className="footer__center__nav__link">
          Episodes
        </a>
        <a href="#contact" className="footer__center__nav__link">
          Contact
        </a>
      </nav>
      <section className="footer__right">
        <a href="#" className="footer__right__extra__link">
          Style Guide
        </a>
        <a href="#" className="footer__right__extra__link">
          Instructions
        </a>
        <a href="#" className="footer__right__extra__link">
          Changelog
        </a>
        <a href="#" className="footer__right__extra__link">
          Credit
        </a>
        <a href="#" className="footer__right__extra__link">
          Licenses
        </a>
      </section>
      <section className="footer__powered">
        <p className="footer__powered__text">Powered by Webflow</p>
        <div className="footer__powered__platform__icons">
          <img
            src={spotify}
            alt="Spotify Icon"
            className="footer__platform__icon"
          />
          <img
            src={pocketcasts}
            alt="Pocket Casts Icon"
            className="footer__platform__icon"
          />
          <img
            src={soundcloud}
            alt="Soundcloud Icon"
            className="footer__platform__icon"
          />
          <img
            src={applepodcasts}
            alt="Apple Podcasts Icon"
            className="footer__platform__icon"
          />
          <img
            src={itunes}
            alt="iTunes Icon"
            className="footer__platform__icon"
          />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
