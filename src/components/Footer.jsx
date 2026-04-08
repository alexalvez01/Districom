import { motion } from 'framer-motion';
import './Footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/districomlogo.webp" alt="Districom" />
            <p>Construyendo confianza a través de la tecnología.</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#home">Inicio</a>
              <span className="footer-sep">·</span>
              <a href="#about">Nosotros</a>
              <span className="footer-sep">·</span>
              <a href="#services">Servicios</a>
              <span className="footer-sep">·</span>
              <a href="#contact">Contacto</a>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/districom_cdelu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/5493442641345" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Districom. Todos los derechos reservados.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
