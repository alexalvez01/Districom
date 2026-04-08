import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { LuArrowRight, LuWrench, LuShieldCheck, LuZap, LuHistory, LuMapPin, LuStar, LuUsers } from 'react-icons/lu';
import './Hero.css';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
];

// Componente auxiliar para el efecto de inclinación 30
const TiltCard = ({ children, className, variants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={variants}
      className={className}
    >
      <div style={{
        transform: "translateZ(50px)",
        transformStyle: "preserve-3d",
        display: "flex",
        flexDirection: "inherit",
        justifyContent: "inherit",
        alignItems: "inherit",
        height: "100%",
        width: "100%"
      }}>
        {children}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  // Lógica de horarios comerciales
  const checkIsOpen = () => {
    const now = new Date();
    // Hora local de Argentina (UTC-3)
    const argentinaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
    const day = argentinaTime.getDay();
    const hours = argentinaTime.getHours();
    const minutes = argentinaTime.getMinutes();
    const currentTime = hours * 100 + minutes;

    if (day >= 1 && day <= 5) { // Lunes a Viernes
      return (currentTime >= 900 && currentTime <= 1300) || (currentTime >= 1630 && currentTime <= 2030);
    } else if (day === 6) { // Sábado
      return (currentTime >= 900 && currentTime <= 1300);
    }
    return false; // Domingo o fuera de horario
  };

  // Lógica del estado y del controlador del slider de fondo
  useEffect(() => {
    // Initial check
    setIsOpen(checkIsOpen());

    // Transición de fondo
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    // Actualización de estado cada minuto
    const statusTimer = setInterval(() => {
      setIsOpen(checkIsOpen());
    }, 60000);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Bv.+Hipolito+Yrigoyen+1058,+Concepcion+del+Uruguay,+Entre+Rios";

  // Definición de variantes de animación
  const cardVariants = {
    hidden: { y: 30, opacity: 0.01 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* Carrusel de fondo dinámico */}
      <div className="hero-bg-slider">
        <AnimatePresence>
          <motion.div
            key={currentImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="hero-slide"
            style={{
              backgroundImage: `url(${HERO_IMAGES[currentImg]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Superposición de claridad y Glassmorphism */}
      <div className="hero-overlay"></div>

      <div className="hero-glow-container">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="container-wide">
        <div className="hero-grid">

          {/* Columna izquierda: Textos y CTAs */}
          <motion.div
            className="hero-text-content"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textItemVariants} className="hero-badge">
              <span className="badge-pulse">
                <span className="pulse-ping"></span>
                <span className="pulse-dot"></span>
              </span>
              <span className="badge-text">Atención local especializada</span>
            </motion.div>

            <motion.div variants={textItemVariants} className="hero-title-group">
              <h1 className="hero-brand-title">
                <span className="part-1">Distri</span><span className="part-2">Com</span>
              </h1>
              <p className="hero-slogan">
                El hardware que buscas. <br className="hide-mobile" />
                <span className="gradient-text">El respaldo que mereces.</span>
              </p>
            </motion.div>

            <motion.p variants={textItemVariants} className="hero-description">
              Expertos en tecnología con servicios integrales para que nunca dejes de avanzar. No solo vendemos dispositivos, acompañamos tu crecimiento.
            </motion.p>

            <motion.div variants={textItemVariants} className="hero-actions">
              <a href="#services" className="btn-primary">
                Ver más
                <LuArrowRight className="btn-icon" />
              </a>

              <a href="#contact" className="btn-secondary">
                <LuWrench className="btn-icon" />
                Presupuesto Sin Cargo
              </a>
            </motion.div>

            {/* Indicadores de confianza */}
            <motion.div variants={textItemVariants} className="hero-trust">
              <div className="trust-item">
                <LuShieldCheck className="trust-icon" />
                <span>Calidad Garantizada</span>
              </div>
              <div className="trust-item hide-mobile">
                <LuZap className="trust-icon" />
                <span>Respuesta Rápida</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha: Grilla Bento visual */}
          <motion.div
            className="hero-bento-wrapper"
            variants={{
              hidden: { opacity: 0.1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="bento-grid">

              {/* Tarjeta 1: Trayectoria (Larga) */}
              <TiltCard
                className="bento-card card-stock col-span-2"
                variants={cardVariants}
              >
                <div className="card-pattern"></div>
                <div className="card-left">
                  <p className="card-label">Nuestra Trayectoria</p>
                  <div className="card-main-val">
                    <span className="val-number">20+</span>
                    <span className="val-text">Años de Confianza</span>
                  </div>
                </div>
                <div className="card-icon-box">
                  <LuHistory />
                </div>
              </TiltCard>

              {/* Tarjeta 2: Ubicación (Alta) - Enlace interactivo */}
              <TiltCard
                className="bento-card card-diagnosis card-interactive"
                variants={cardVariants}
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', transformStyle: "preserve-3d" }}
                >
                  <div className="card-icon-small">
                    <LuMapPin />
                  </div>
                  <div className="card-bottom">
                    <p className="card-label">Local Céntrico</p>
                    <p>Bv. Hipólito Yrigoyen 1058</p>
                    <span className="card-cta">Cómo llegar <LuArrowRight /></span>
                  </div>
                </a>
              </TiltCard>

              {/* Tarjeta 3: Prueba Social (Formato grande) */}
              <TiltCard
                className="bento-card card-rating"
                variants={cardVariants}
              >
                <div className="card-label">Opiniones de clientes</div>
                <div className="rating-content">
                  <div className="rating-main">
                    <span className="val-number">4.6</span>
                    <div className="rating-right-col">
                      <div className="stars-group">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <LuStar key={s} className={s === 5 ? "rating-star-half" : "rating-star"} />
                        ))}
                      </div>
                      <span className="val-text-google">en Google Maps</span>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Tarjeta 4: Soporte (Pequeña) - Estado en tiempo real */}
              <TiltCard
                className="bento-card card-mini card-targets card-interactive"
                variants={cardVariants}
              >
                <a
                  href="#contact"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', transformStyle: "preserve-3d" }}
                >
                  <LuUsers className="bg-icon" />
                  <div className="mini-content">
                    <p className="card-label">Atención al Cliente</p>
                    <div className="status-indicator">
                      <span className={`status-dot ${isOpen ? 'open' : 'closed'}`}></span>
                      <span>{isOpen ? 'Abierto ahora' : 'Cerrado ahora'}</span>
                    </div>
                    {isOpen && (
                      <span className="card-cta" style={{ marginTop: '12px' }}>
                        Consultar <LuArrowRight />
                      </span>
                    )}
                  </div>
                </a>
              </TiltCard>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
