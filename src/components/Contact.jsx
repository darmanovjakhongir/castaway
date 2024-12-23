import star from "../assets/icons/star.svg";
import "./Contact.css";

const Contact = () => {
  const testimonials = [
    {
      id: 1,
      text: "I can't recommend this podcast enough",
      author: "Betty Lacey",
    },
    { id: 2, text: "Jacob is the best in the business", author: "Adam Driver" },
    { id: 3, text: "A wealth of audio knowledge", author: "Marcus Brown" },
    { id: 4, text: "Every episode is a gem!", author: "Jessica Knowl" },
    {
      id: 5,
      text: "Whoa whoa, let me take some notes!",
      author: "Scott Adams",
    },
    {
      id: 6,
      text: "I've upped my game considerably since I started listening",
      author: "Steven Blast",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__subscribe-container">
        <div className="contact__subscribe-text">
          <h2 className="contact__heading--secondary">Email Newsletter</h2>
          <h1 className="contact__heading--primary">Subscribe for updates</h1>
        </div>
        <form className="contact__form">
          <input
            type="text"
            placeholder="Name"
            required
            className="contact__input contact__input--name"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="contact__input contact__input--email"
          />
          <button className="contact__submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact__testimonials-container">
        {testimonials.map(({ id, text, author }) => (
          <div key={id} className="contact__testimonial-card">
            <div className="contact__stars">
              <img src={star} alt="Star icon" className="contact__star-icon" />
              <img src={star} alt="Star icon" className="contact__star-icon" />
              <img src={star} alt="Star icon" className="contact__star-icon" />
              <img src={star} alt="Star icon" className="contact__star-icon" />
              <img src={star} alt="Star icon" className="contact__star-icon" />
            </div>
            <p className="contact__testimonial-text">{text}</p>
            <h4 className="contact__testimonial-author">{author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
