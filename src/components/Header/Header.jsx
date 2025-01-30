import podcast from "../../assets/images/podcast-image.jpg";
import spotify from "../../assets/icons/spotify.svg";
import pocketcasts from "../../assets/icons/pocketcasts.svg";
import soundcloud from "../../assets/icons/soundcloud.svg";
import applepodcasts from "../../assets/icons/applepodcasts.svg";
import itunes from "../../assets/icons/itunes.svg";
import "./Header.css";

const Header = () => {
  return (
    <header id="home" className="header">
      <nav className="header-navbar">
        <h1 className="header-navbar-logo">Castaway</h1>
        <div className="header-navbar-menu">
          <a href="#home" className="header-navbar-link">
            Home
          </a>
          <a href="#episodes" className="header-navbar-link">
            Episodes
          </a>
          <a href="#about" className="header-navbar-link">
            About
          </a>
          <a href="#contact" className="header-navbar-link">
            Contact
          </a>
        </div>
      </nav>
      <div className="header-hero">
        <div className="header-hero-image-wrapper">
          <img src={podcast} alt="Podcast" className="header-hero-image" />
        </div>
        <div className="header-hero-text">
          <h2 className="header-hero-title">
            Take your <br />
            podcast to the{" "}
            <span className="header-hero-highlighted-text">next level</span>
          </h2>
          <p className="header-hero-subtitle">Listen on</p>
          <div className="header-hero-platform-icons">
            <img
              src={spotify}
              alt="Spotify Icon"
              className="header-platform-icon"
            />
            <img
              src={pocketcasts}
              alt="Pocket Casts Icon"
              className="header-platform-icon"
            />
            <img
              src={soundcloud}
              alt="Soundcloud Icon"
              className="header-platform-icon"
            />
            <img
              src={applepodcasts}
              alt="Apple Podcasts Icon"
              className="header-platform-icon"
            />
            <img
              src={itunes}
              alt="iTunes Icon"
              className="header-platform-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
