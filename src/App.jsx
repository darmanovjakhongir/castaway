import Header from "./components/Header";
import Episodes from "./components/Episodes";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Episodes />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
