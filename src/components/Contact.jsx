import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contacto
        </motion.h2>

        {/* Grilla principal de contacto: Información a la izquierda y Mapa a la derecha */}
        <div className="contact-grid">
          <motion.div 
            className="contact-info-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Información de Contacto</h3>
            <div className="contact-links">
              <a href="https://maps.app.goo.gl/6pSwu5Mn2NyT4t4g7" target="_blank" rel="noopener noreferrer" className="contact-row">
                <span className="contact-icon location"><FaMapMarkerAlt /></span>
                <span>Bv. Hipólito Yrigoyen 1058, C. del Uruguay</span>
              </a>
              <a href="https://www.instagram.com/districom_cdelu/" target="_blank" rel="noopener noreferrer" className="contact-row">
                <span className="contact-icon instagram"><FaInstagram /></span>
                <span>@districom_cdelu</span>
              </a>
              <div 
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=ventas@districom.com.ar&su=Consulta desde el sitio web";
                  window.open(gmailUrl, '_blank');
                }}
                className="contact-row"
              >
                <span className="contact-icon email"><FaEnvelope /></span>
                <span>ventas@districom.com.ar</span>
              </div>
            </div>

            <div className="info-card horarios">
              <h3><FaClock /> Horarios de Atención</h3>
              <p><strong>Lunes a viernes:</strong></p>
              <p>de 9:00 a 13:00 hs y de 16:30 a 20:30 hs</p>
              <p className="mt-2"><strong>Sábado:</strong></p>
              <p>de 9:00 a 13:00 hs</p>
            </div>

            <a href="https://wa.me/5493442641345" target="_blank" rel="noopener noreferrer" className="escribenos-btn">
              <FaWhatsapp /> Escribinos por WhatsApp
            </a>
          </motion.div>

          <motion.div 
            className="map-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.793331496763!2d-58.24221392347773!3d-32.47821914838538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdb005ddc5d99%3A0x4854b0f6fe98ac3e!2sDistricom!5e0!3m2!1ses-419!2sar!4v1775238345658!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Ubicación de Districom"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
