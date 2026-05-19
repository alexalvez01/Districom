import { motion } from 'framer-motion';
import { useState } from 'react';
import { LuAward, LuRocket, LuRefreshCw, LuZap, LuHeart, LuTarget } from 'react-icons/lu';
import './About.css';

const baseBrands = [
  { name: 'NISUTA', logo: '/nisuta.svg' },
  { name: 'EPSON', logo: '/epson.svg' },
  { name: 'SAMSUNG', logo: '/samsung.svg' },
  { name: 'ACER', logo: '/acer.svg' },
  { name: 'AMD', logo: '/amd.svg' },
  { name: 'ASUS', logo: '/asus.svg' },
  { name: 'INTEL', logo: '/intel.svg' },
];

// Multiplicamos las marcas para que nunca haya espacio en blanco al scrollear en pantallas muy anchas (4K)
const brandsData = [...baseBrands, ...baseBrands, ...baseBrands, ...baseBrands].map((b, i) => ({ ...b, id: i + 1 }));

const objectives = [
  { id: 1, title: "Calidad y Valor", text: "Entregar productos de calidad.", icon: <LuAward />, color: "#2563EB", targetX: -450, targetY: -200 },
  { id: 2, title: "Crecimiento", text: "Desarrollo y excelentes servicios.", icon: <LuRocket />, color: "#2563EB", targetX: 380, targetY: -150 },
  { id: 3, title: "Adaptabilidad", text: "Cambios como oportunidad.", icon: <LuRefreshCw />, color: "#2563EB", targetX: -480, targetY: 60 },
  { id: 4, title: "Innovación Tecnológica", text: "Estar a la vanguardia del mercado.", icon: <LuZap />, color: "#2563EB", targetX: 350, targetY: 150 },
  { id: 5, title: "Responsabilidad", text: "Bienestar de nuestra comunidad.", icon: <LuHeart />, color: "#2563EB", targetX: -150, targetY: 250 }
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({ 
    opacity: 1, 
    scale: 1, 
    transition: { 
      delay: 0.8 + (i * 0.15), 
      type: "spring", 
      damping: 20, 
      stiffness: 200 
    } 
  })
};

const textVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.0 + (i * 0.15) } })
};

const About = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        
        {/* BLOQUE 1: Quiénes Somos */}
        <div className="about-intro-wrapper">
          <motion.div 
            className="about-intro-text"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.8 }}
          >
            <h2 id="who-we-are" className="section-title" style={{ textAlign: "left", marginBottom: "30px", scrollMarginTop: "100px" }}>¿Quiénes Somos?</h2>
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
        </div>

        {/* Carrusel de marcas movido ANTES de objetivos */}
        <div className="brands-marquee-container">
          <div className="brands-marquee-wrapper">
            <div className="brands-marquee-track">
              {brandsData.map((brand, index) => (
                <div key={index} className="brand-logo-item">
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

        {/* BLOQUE 2: Objetivos (Automáticos desde el centro) */}
        <div className="objectives-wrapper">
          <motion.h3 
            id="objectives"
            className="objectives-main-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ scrollMarginTop: "100px" }}
          >
            Nuestros Objetivos
          </motion.h3>

          <div className="objectives-constellation-canvas">
            
            {/* LÍNEAS CONECTORAS ELEGANTES */}
            <svg 
              className="constellation-lines"
              width="1000"
              height="1000"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            >
              <g transform="translate(500, 500)">
                {objectives.map((obj, i) => (
                  <motion.line
                    key={`line-${obj.id}`}
                    x1="0"
                    y1="0"
                    x2={obj.targetX}
                    y2={obj.targetY}
                    stroke={obj.color}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    animate={{ 
                      strokeOpacity: hoveredId === obj.id ? 1 : 0.4,
                      strokeWidth: hoveredId === obj.id ? 4 : 1.5,
                      filter: hoveredId === obj.id ? "drop-shadow(0px 0px 8px rgba(37,99,235,0.8))" : "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
                    }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ 
                      pathLength: { delay: 0.3 + (i * 0.15), duration: 0.8, ease: "easeInOut" },
                      default: { duration: 0.3 }
                    }}
                  />
                ))}
              </g>
            </svg>

            {/* NODO CENTRAL (El origen de donde nacen los objetivos) */}
            <motion.div
              className="center-core"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '70px',
                height: '70px',
                marginLeft: '-35px',
                marginTop: '-35px',
                backgroundColor: 'var(--surface-color)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: '0 0 40px rgba(37, 99, 235, 0.3)',
                border: '2px solid rgba(37, 99, 235, 0.5)'
              }}
            >
              {/* Anillo de datos giratorio (Tech Ring) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: hoveredId !== null ? 3 : 15, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                style={{
                  width: '140%',
                  height: '140%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(37, 99, 235, 0.3)',
                  position: 'absolute',
                  zIndex: -1,
                  filter: hoveredId !== null ? 'drop-shadow(0 0 5px #2563EB)' : 'none',
                  opacity: hoveredId !== null ? 1 : 0.2
                }}
              />
              
              {/* Anillo interior inverso */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: hoveredId !== null ? 2 : 10, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                style={{
                  width: '120%',
                  height: '120%',
                  borderRadius: '50%',
                  border: '2px dotted rgba(37, 99, 235, 0.6)',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  position: 'absolute',
                  zIndex: -1,
                  opacity: hoveredId !== null ? 1 : 0.3
                }}
              />
              <LuTarget size={32} color="#2563EB" />
            </motion.div>

            {objectives.map((obj, i) => (
              <motion.div 
                className="objective-node-container" 
                key={obj.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                custom={i}
                style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 2 }}
              >
                {/* CONTENEDOR FINAL CON ÍCONO */}
                <motion.div 
                  variants={cardVariant}
                  custom={i}
                  style={{
                    position: "absolute",
                    x: obj.targetX,
                    y: obj.targetY,
                    marginLeft: "-35px",
                    marginTop: "-35px",
                    width: "max-content",
                    zIndex: 5
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => setHoveredId(obj.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }} 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      cursor: "pointer"
                    }}
                  >
                  <div
                    className="constellation-icon"
                    style={{ 
                      border: `2px solid ${obj.color}`, 
                      boxShadow: `0 0 15px ${obj.color}40`,
                      backgroundColor: "var(--surface-color)",
                      color: obj.color,
                      borderRadius: "16px",
                    }}
                  >
                    {obj.icon}
                  </div>

                  {/* Título flotante revelado después */}
                  <motion.div 
                    className="constellation-text"
                    variants={textVariant}
                    custom={i}
                  >
                    <h4 style={{ color: obj.color }}>{obj.title}</h4>
                    <p>{obj.text}</p>
                  </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
