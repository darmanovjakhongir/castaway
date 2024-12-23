import podcast from "../assets/images/podcast-image.jpg";
import spotify from "../assets/icons/spotify.svg";
import pocketcasts from "../assets/icons/pocketcasts.svg";
import soundcloud from "../assets/icons/soundcloud.svg";
import applepodcasts from "../assets/icons/applepodcasts.svg";
import itunes from "../assets/icons/itunes.svg";
import "./Header.css";

const Header = () => {
  return (
    <header id="home" className="header">
      <nav className="header__navbar">
        <h1 className="header__logo">Castaway</h1>
        <div className="header__menu">
          <a href="#home" className="header__link">
            Home
          </a>
          <a href="#episodes" className="header__link">
            Episodes
          </a>
          <a href="#about" className="header__link">
            About
          </a>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </div>
      </nav>
      <div className="header__hero">
        <div className="header__image-wrapper">
          <img src={podcast} alt="Podcast" className="header__image" />
        </div>
        <div className="header__text">
          <h2 className="header__title">
            Take your <br />
            podcast to the{" "}
            <span className="header__highlight">next level</span>
          </h2>
          <p className="header__subtitle">Listen on</p>
          <div className="header__platform-icons">
            <img
              src={spotify}
              alt="Spotify Icon"
              className="header__platform-icon"
            />
            <img
              src={pocketcasts}
              alt="Pocket Casts Icon"
              className="header__platform-icon"
            />
            <img
              src={soundcloud}
              alt="Soundcloud Icon"
              className="header__platform-icon"
            />
            <img
              src={applepodcasts}
              alt="Apple Podcasts Icon"
              className="header__platform-icon"
            />
            <img
              src={itunes}
              alt="iTunes Icon"
              className="header__platform-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
