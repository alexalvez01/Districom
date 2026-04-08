import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const brandsData = [
  { name: 'NISUTA', id: 1, logo: '/nisuta.svg' },
  { name: 'EPSON', id: 2, logo: '/epson.svg' },
  { name: 'SAMSUNG', id: 3, logo: '/samsung.svg' },
  { name: 'ACER', id: 4, logo: '/acer.svg' },
  { name: 'AMD', id: 5, logo: '/amd.svg' },
  { name: 'ASUS', id: 6, logo: '/asus.svg' },
  { name: 'INTEL', id: 8, logo: '/intel.svg' },
  // Duplicado para el efecto infinito
  { name: 'NISUTA', id: 10, logo: '/nisuta.svg' },
  { name: 'EPSON', id: 11, logo: '/epson.svg' },
  { name: 'SAMSUNG', id: 12, logo: '/samsung.svg' },
  { name: 'ACER', id: 13, logo: '/acer.svg' },
  { name: 'AMD', id: 14, logo: '/amd.svg' },
  { name: 'ASUS', id: 15, logo: '/asus.svg' },
  { name: 'INTEL', id: 17, logo: '/intel.svg' }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#who-we-are') setActiveTab('who-we-are');
      if (hash === '#objectives') setActiveTab('objectives');
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nosotros
        </motion.h2>
        
        <div className="about-tabs">
          <button 
            className={`tab-btn ${activeTab === 'who-we-are' ? 'active' : ''}`}
            onClick={() => { setActiveTab('who-we-are'); window.location.hash = 'who-we-are'; }}
          >
            ¿Quiénes Somos?
          </button>
          <button 
            className={`tab-btn ${activeTab === 'objectives' ? 'active' : ''}`}
            onClick={() => { setActiveTab('objectives'); window.location.hash = 'objectives'; }}
          >
            Objetivos
          </button>
        </div>

        <div className="about-content-wrapper">
          <AnimatePresence mode="wait">
            {activeTab === 'who-we-are' && (
              <motion.div 
                key="who-we-are"
                id="who-we-are-content"
                className="who-we-are-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3>¿Quiénes Somos?</h3>
                <p>
                  <strong>Districom</strong> es una empresa dedicada a la comercialización de productos de informática, 
                  tecnología y soluciones digitales. Nos especializamos en brindar equipamiento, accesorios, insumos 
                  y servicios técnicos tanto para el hogar como para empresas de nuestra zona.
                </p>
                <p>
                  Nuestro compromiso es acompañar a cada cliente con asesoramiento personalizado, precios competitivos 
                  y un servicio de confianza. Creemos que entre cada cliente que nos elige y nosotros existe un único 
                  vínculo: <strong>la confianza</strong>.
                </p>
                <p className="highlight">Gracias por permitirnos crecer junto a Usted.</p>
              </motion.div>
            )}

            {activeTab === 'objectives' && (
              <motion.div 
                key="objectives"
                id="objectives-content"
                className="objectives-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="objectives-list"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="objective-box" 
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <h4 className="objective-title">Calidad y Valor</h4>
                    <p>Entregar productos, servicios y soluciones de calidad, otorgando más valor a nuestros clientes.</p>
                  </motion.div>
                  <motion.div 
                    className="objective-box" 
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <h4 className="objective-title">Crecimiento</h4>
                    <p>Crecer mediante el desarrollo de nuevos productos, excelentes servicios y asesoramiento útil.</p>
                  </motion.div>
                  <motion.div 
                    className="objective-box" 
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <h4 className="objective-title">Adaptabilidad</h4>
                    <p>Considerar los cambios del mercado como una oportunidad de crecimiento.</p>
                  </motion.div>
                  <motion.div 
                    className="objective-box" 
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <h4 className="objective-title">Innovación Tecnológica</h4>
                    <p>Mantenernos actualizados en productos y soluciones tecnológicas para ofrecer siempre lo más actual del mercado.</p>
                  </motion.div>
                  <motion.div 
                    className="objective-box" 
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <h4 className="objective-title">Responsabilidad</h4>
                    <p>Hacer honor a nuestra responsabilidad hacia la sociedad, contribuyendo al bienestar de la comunidad.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Carrusel de marcas */}
        <div className="brands-marquee-container">
          <div className="brands-marquee-wrapper">
            <div className="brands-marquee-track">
              {brandsData.map((brand) => (
                <div key={brand.id} className="brand-logo-item">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className={`brand-logo-img ${brand.name === 'GENIUS' ? 'logo-genius' : ''} ${brand.name === 'EPSON' ? 'logo-epson' : ''}`} 
                    />
                  ) : (
                    <span>{brand.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
