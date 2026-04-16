import { motion } from 'framer-motion';
import { FaUserTie, FaTachometerAlt, FaTools, FaBoxes, FaShoppingCart } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaUserTie />,
    title: 'Atención personalizada',
    desc: 'Nos enfocamos en entender tus necesidades para brindarte las mejores soluciones.',
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
  },
  {
    icon: <FaTachometerAlt />,
    title: 'Rapidez y Diagnóstico',
    desc: 'Agilidad en nuestros diagnósticos y presupuestos para que no pierdas tiempo.',
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070"
  },
  {
    icon: <FaTools />,
    title: 'Servicio Técnico',
    desc: 'Especialistas en CPU, monitores, impresoras y electrónica en general.',
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=2070"
  },
  {
    icon: <FaBoxes />,
    title: 'Stock Permanente',
    desc: 'Más de 10.000 artículos en stock permanente. Todo lo que buscas, en un solo lugar.',
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
  },
  {
    icon: <FaShoppingCart />,
    title: 'Venta de Hardware e Insumos',
    desc: 'Equipamiento de última generación y los mejores insumos para potenciar tu hogar o empresa.',
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Variantes para cada tarjeta individual
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="services-container-wide">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Servicios y Trabajos
        </motion.h2>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
            >
              <div 
                className="card-bg" 
                style={{ backgroundImage: `url('${service.img}')` }}
              ></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <div className="desc-container">
                  <p className="service-description">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
