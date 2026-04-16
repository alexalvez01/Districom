import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5493442641345" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      title="Contactar por WhatsApp"
    >
      <FaWhatsapp className="floating-icon" />
    </a>
  );
};

export default FloatingWhatsApp;
