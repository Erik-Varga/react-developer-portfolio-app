import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { WindowSize } from "./components/WindowSize";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <ToastContainer autoClose={5000} />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      {/* <WindowSize /> */}
      <Footer />
    </div>
  );
}

export default App;
