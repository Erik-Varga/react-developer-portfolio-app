import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer autoClose={5000} />
      <div className="pt-24 bg-primary">
        <Home />
      </div>
      <About />
      <Skills />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
