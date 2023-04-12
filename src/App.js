import Navbar from "./components/Navbar";
import Projects from "./components/Projects"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact/Contact"


function App() {

   return ( 
    <div>
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </div>
  );
}

export default App;

