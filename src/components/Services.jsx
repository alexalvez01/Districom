import React from 'react';
import { motion } from 'framer-motion';
import { LuLaptop, LuShieldCheck, LuCamera, LuHeartHandshake } from 'react-icons/lu';
import './Services.css';

const services = [
  {
    id: 1,
    title: "Venta de Equipos Tecnológicos",
    description: "Computadoras, laptops y accesorios de las mejores marcas del mercado. Rendimiento y calidad garantizada.",
    icon: <LuLaptop />,
    bgClass: "bg-laptop",
    colSpan: "span-2"
  },
  {
    id: 2,
    title: "Servicio Técnico",
    description: "Servicio técnico especializado para alargar la vida útil de tus dispositivos.",
    icon: <LuShieldCheck />,
    bgClass: "bg-maintenance",
    colSpan: "span-1"
  },
  {
    id: 3,
    title: "Cámaras de Seguridad y Control",
    description: "Instalación de sistemas CCTV y control de asistencia biométrico.",
    icon: <LuCamera />,
    bgClass: "bg-cctv",
    colSpan: "span-1"
  },
  {
    id: 4,
    title: "Atención Personalizada",
    description: "Te brindamos asesoramiento experto y soporte a medida para que tomes la mejor decisión tecnológica.",
    icon: <LuHeartHandshake />,
    bgClass: "bg-support",
    colSpan: "span-2"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="services-subtitle">
            Soluciones integrales para potenciar el rendimiento de tu empresa con tecnología de vanguardia y soporte experto.
          </p>
        </motion.div>

        <motion.div 
          className="services-bento"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-35%" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className={`service-bento-card ${service.colSpan}`}
              variants={itemVariants}
            >
              <div className={`service-bg-image ${service.bgClass}`}></div>
              <div className="service-bento-content">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link" aria-label={`Conocer más sobre ${service.title}`}>
                  Conocer más 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
