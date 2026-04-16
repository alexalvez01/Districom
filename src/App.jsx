import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
