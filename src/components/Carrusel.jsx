// components/Carrusel.jsx
import React, { useEffect, useRef, memo } from 'react';
import carruselData from '../lib/carrusel.json';

const Carrusel = memo(() => {
  const containerRef = useRef(null);
  const marcas = carruselData.marcas || [];
  const metadata = carruselData.metadata || {};
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pauseAnimation = () => {
      container.style.animationPlayState = 'paused';
    };

    const resumeAnimation = () => {
      container.style.animationPlayState = 'running';
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  if (marcas.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {metadata.titulo}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {metadata.descripcion}
          </p>
        </div>
        
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={containerRef}
            className="carrusel-container"
          >
            {marcas.map((marca, index) => (
              <div 
                key={`marca-${index}`}
                className="marca-item"
              >
                <img 
                  src={marca.logo} 
                  alt={marca.nombre}
                  className="marca-logo"
                  title={marca.nombre}
                  loading="lazy"
                  width="200"
                  height="60"
                  decoding="async"
                />
              </div>
            ))}
            
            {marcas.map((marca, index) => (
              <div 
                key={`marca-duplicate-${index}`}
                className="marca-item duplicate"
                aria-hidden="true"
              >
                <img 
                  src={marca.logo} 
                  alt={`${marca.nombre} (duplicado)`}
                  className="marca-logo"
                  title={marca.nombre}
                  loading="lazy"
                  width="200"
                  height="60"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        
        .carrusel-container {
          display: flex;
          width: max-content;
          animation: scroll 500s linear infinite;
        }
        
        .marca-item {
          flex-shrink: 0;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
          background: white;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        
        .marca-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: all 0.3s;
        }
        
        .marca-item:hover .marca-logo {
          filter: grayscale(0);
        }
        
        @media (max-width: 768px) {
          .carrusel-container {
            animation: scroll 100s linear infinite;
          }
          
          .marca-item {
            width: 140px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
});

Carrusel.displayName = 'Carrusel';
export default Carrusel;