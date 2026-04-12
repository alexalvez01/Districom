# Districom Landing Page

Repositorio de la landing page de **Districom**, una empresa líder en comercialización de productos informáticos, tecnología y servicios técnicos integrales.

Este proyecto ha sido diseñado para ofrecer una experiencia de usuario premium, moderna y altamente interactiva, reflejando la innovación y confianza que Districom brinda a sus clientes.

## Características Principales

- **Hero 3D Interactivo:** Grilla tipo "Bento" con efectos de inclinación 3D (Parallax Tilt) que responden al movimiento del mouse.
- **Estado en Tiempo Real:** Indicador dinámico de horarios de atención que muestra si el local está abierto o cerrado según la hora local de Argentina.
- **Estética Dark Tech:** Interfaz moderna basada en glassmorphism, desenfoques profundos y una paleta de colores azul corporativa profesional.
- **Optimización Responsiva:** Experiencia fluida adaptada a todos los dispositivos (Mobile, Tablet, Desktop) con media queries unificadas para un mantenimiento sencillo.
- **Secciones Interactivas:**
  - **Nosotros:** Historias y objetivos presentados mediante pestañas dinámicas.
  - **Servicios:** Galería de servicios con efectos de expansión al pasar el mouse.
  - **Contacto:** Integración directa con WhatsApp, Instagram y ubicación exacta vía Google Maps.

## Tecnologías Utilizadas

- **React:** Biblioteca principal para la interfaz de usuario.
- **Framer Motion:** Motor de animaciones de alto rendimiento para gestos y transiciones suaves.
- **Vite:** Herramienta de construcción ultrarrápida para el desarrollo frontend.
- **CSS3:** Estilos puros con variables personalizadas y animaciones optimizadas para GPU.
- **React Icons / Lucide:** Set de iconos modernos y consistentes.

## Estructura del Proyecto

```text
src/
├── components/     # Componentes modulares (Hero, Navbar, About, etc.)
├── assets/         # Recursos estáticos (Imágenes, Logos)
├── App.jsx         # Orquestador principal de la aplicación
├── index.css       # Estilos globales y variables de diseño
└── main.jsx        # Punto de entrada de la aplicación
```

## Desarrollo

Para ejecutar el proyecto localmente:

1. Instala las dependencias: `npm install`
2. Inicia el servidor de desarrollo: `npm run dev`
3. Construye para producción: `npm run build`
