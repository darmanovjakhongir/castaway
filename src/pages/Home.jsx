import Header from "../components/Header";
import Episodes from "../components/Episodes";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Episodes />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
