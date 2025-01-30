import audiogear from "../../assets/images/audio-gear.jpg";
import tipstricks from "../../assets/images/tips-tricks.jpg";
import microphone from "../../assets/images/microphone.jpg";
import "./Episodes.css";

const Episodes = () => {
  return (
    <section id="episodes" className="episodes">
      <div className="episodes-header">
        <h2 className="episodes-header-title">Latest Episodes</h2>
        <button className="episodes-header-view-all-button">
          View All Episodes
        </button>
      </div>
      <div className="episodes-list">
        <div className="episode-card">
          <img
            src={audiogear}
            alt="Audio Gear"
            className="episode-card-image"
          />
          <div className="episode-card-details">
            <button className="episode-card-category-button">Gear</button>
            <p className="episode-card-number">Episode 3</p>
            <h3 className="episode-card-title">
              Should you get outboard audio gear?
            </h3>
            <p className="episode-card-description">
              Is hardware really worth it when it comes to podcasting? The
              answer is... it depends. Here's why you might want to consider
              picking something up.
            </p>
            <button className="episode-card-details-button">
              View Episode Details
            </button>
          </div>
        </div>
        <div className="episode-card">
          <img
            src={tipstricks}
            alt="Tips and Tricks"
            className="episode-card-image"
          />
          <div className="episode-card-details">
            <button className="episode-card-category-button">
              Tips & Tricks
            </button>
            <p className="episode-card-number">Episode 2</p>
            <h3 className="episode-card-title">
              Mic tricks to take you to the next level
            </h3>
            <p className="episode-card-description">
              Stop rolling with those default settings on your mic. These small
              tweaks will take you from sounding good to great.
            </p>
            <button className="episode-card-details-button">
              View Episode Details
            </button>
          </div>
        </div>
        <div className="episode-card">
          <img
            src={microphone}
            alt="Microphone"
            className="episode-card-image"
          />
          <div className="episode-card-details">
            <button className="episode-card-category-button">Gear</button>
            <p className="episode-card-number">Episode 1</p>
            <h3 className="episode-card-title">
              The best microphone under $200
            </h3>
            <p className="episode-card-description">
              With so many microphones on the market, how are you supposed to
              know what's the best? Take a look at our top picks.
            </p>
            <button className="episode-card-details-button">
              View Episode Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Episodes;
