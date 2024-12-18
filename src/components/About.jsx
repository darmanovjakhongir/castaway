import aboutimage from "../assets/images/about-image.jpg";
import arrowicon from "../assets/icons/arrow-right.svg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__text">
          <div className="about__arrow__icon__wrapper">
            <img src={arrowicon} alt="Arrow Icon" className="about__arrow__icon" />
          </div>
          <h2 className="about__heading__secondary">Meet your host</h2>
          <h1 className="about__heading__primary">Jacob Paulaner</h1>
          <p className="about__paragraph">
            Jacob has a background in audio engineering and has been podcasting
            since the early days.
          </p>
          <p className="about__paragraph">
            He's here to help you level up your game by sharing everything he's
            learned along the way.
          </p>
        </div>
        <div className="about__image__wrapper">
          <img src={aboutimage} alt="About Image" className="about__image" />
        </div>
      </div>
    </section>
  );
}

export default About;
