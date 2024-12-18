import audiogear from "../assets/images/audio-gear.jpg";
import tipstricks from "../assets/images/tips-tricks.jpg";
import microphone from "../assets/images/microphone.jpg";
import "./Episodes.css";

const Episodes = () => {
  return (
    <section id="episodes" className="episodes">
      <div className="episodes__header">
        <h2 className="episodes__header__title">Latest Episodes</h2>
        <button className="episodes__header__view__all__button">
          View All Episodes
        </button>
      </div>
      <div className="episodes__list">
        <div className="episode__card">
          <img
            src={audiogear}
            alt="Audio Gear"
            className="episode__card__image"
          />
          <div className="episode__card__details">
            <button className="episode__card__category__button">Gear</button>
            <p className="episode__card__number">Episode 3</p>
            <h3 className="episode__card__title">
              Should you get outboard audio gear?
            </h3>
            <p className="episode__card__description">
              Is hardware really worth it when it comes to podcasting? The
              answer is... it depends. Here's why you might want to consider
              picking something up.
            </p>
            <button className="episode__card__details__button">
              View Episode Details
            </button>
          </div>
        </div>
        <div className="episode__card">
          <img
            src={tipstricks}
            alt="Tips and Tricks"
            className="episode__card__image"
          />
          <div className="episode__card__details">
            <button className="episode__card__category__button">
              Tips & Tricks
            </button>
            <p className="episode__card__number">Episode 2</p>
            <h3 className="episode__card__title">
              Mic tricks to take you to the next level
            </h3>
            <p className="episode__card__description">
              Stop rolling with those default settings on your mic. These small
              tweaks will take you from sounding good to great.
            </p>
            <button className="episode__card__details__button">
              View Episode Details
            </button>
          </div>
        </div>
        <div className="episode__card">
          <img
            src={microphone}
            alt="Microphone"
            className="episode__card__image"
          />
          <div className="episode__card__details">
            <button className="episode__card__category__button">Gear</button>
            <p className="episode__card__number">Episode 1</p>
            <h3 className="episode__card__title">
              The best microphone under $200
            </h3>
            <p className="episode__card__description">
              With so many microphones on the market, how are you supposed to
              know what's the best? Take a look at our top picks.
            </p>
            <button className="episode__card__details__button">
              View Episode Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Episodes;
