import Navbar from "./components/Navbar";
import Projects from "./components/Projects"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact/Contact"


function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

