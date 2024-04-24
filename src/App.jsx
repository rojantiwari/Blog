import "./App.css";
import Contact from "./Contact";
import Experiance from "./Experiance";
import Footer from "./Footer";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortFolio from "./components/PortFolio";
import Toaster from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <PortFolio />
      <Experiance />
      <Contact />
      <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
