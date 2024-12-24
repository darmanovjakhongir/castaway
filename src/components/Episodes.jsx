import audiogear from "../assets/images/audio-gear.jpg";
import tipstricks from "../assets/images/tips-tricks.jpg";
import microphone from "../assets/images/microphone.jpg";
import "./Episodes.css";

const Episodes = () => {
  return (
    <section id="episodes" className="episodes">
      <div className="episodes__header">
        <h2 className="episodes__title">Latest Episodes</h2>
        <button className="episodes__view-all-button">
          View All Episodes
        </button>
      </div>
      <div className="episodes__list">
        <div className="episodes__card">
          <img src={audiogear} alt="Audio Gear" className="episodes__image" />
          <div className="episodes__details">
            <button className="episodes__category-button">Gear</button>
            <p className="episodes__number">Episode 3</p>
            <h3 className="episodes__card-title">
              Should you get outboard audio gear?
            </h3>
            <p className="episodes__description">
              Is hardware really worth it when it comes to podcasting? The
              answer is... it depends. Here's why you might want to consider
              picking something up.
            </p>
            <button className="episodes__details-button">
              View Episode Details
            </button>
          </div>
        </div>
        <div className="episodes__card">
          <img
            src={tipstricks}
            alt="Tips and Tricks"
            className="episodes__image"
          />
          <div className="episodes__details">
            <button className="episodes__category-button">
              Tips & Tricks
            </button>
            <p className="episodes__number">Episode 2</p>
            <h3 className="episodes__card-title">
              Mic tricks to take you to the next level
            </h3>
            <p className="episodes__description">
              Stop rolling with those default settings on your mic. These small
              tweaks will take you from sounding good to great.
            </p>
            <button className="episodes__details-button">
              View Episode Details
            </button>
          </div>
        </div>
        <div className="episodes__card">
          <img
            src={microphone}
            alt="Microphone"
            className="episodes__image"
          />
          <div className="episodes__details">
            <button className="episodes__category-button">Gear</button>
            <p className="episodes__number">Episode 1</p>
            <h3 className="episodes__card-title">
              The best microphone under $200
            </h3>
            <p className="episodes__description">
              With so many microphones on the market, how are you supposed to
              know what's the best? Take a look at our top picks.
            </p>
            <button className="episodes__details-button">
              View Episode Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
