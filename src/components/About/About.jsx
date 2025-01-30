import aboutimage from "../../assets/images/about-image.jpg";
import arrowicon from "../../assets/icons/arrow-right.svg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <div className="about-arrow-icon-wrapper">
            <img src={arrowicon} alt="Icon" className="about-arrow-icon" />
          </div>
          <h2 className="about-heading-secondary">Meet your host</h2>
          <h1 className="about-heading-primary">Jacob Paulaner</h1>
          <p className="about-paragraph">
            Jacob has a background in audio engineering and has been podcasting
            since the early days.
          </p>
          <p className="about-paragraph">
            He's here to help you level up your game by sharing everything he's
            learned along the way.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src={aboutimage} alt="About Image" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
