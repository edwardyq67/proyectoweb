import { useEffect, useRef, useState } from 'react';
import datosInicio from '../lib/Inicio.json';

const Inicio = () => {
  const intervalIdRef = useRef(null);
  const currentSlideRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (slideIndex) => {
    if (isTransitioningRef.current || slideIndex === currentSlideRef.current) return;
    
    const slides = document.querySelectorAll('[id^="slide-"]');
    if (!slides.length) return;
    
    isTransitioningRef.current = true;
    
    // Mostrar el slide seleccionado
    slides[slideIndex].classList.remove('opacity-0');
    
    // Ocultar el slide actual
    slides[currentSlideRef.current].classList.add('opacity-0');
    
    // Actualizar referencias y estado
    currentSlideRef.current = slideIndex;
    setCurrentTitleIndex(slideIndex);
    setActiveSlide(slideIndex);
    
    // Restablecer el temporizador del carrusel automático
    resetAutoSlide();
    
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 1000);
  };

  const nextSlide = () => {
    const slides = document.querySelectorAll('[id^="slide-"]');
    if (slides.length <= 1 || isTransitioningRef.current) return;
    
    const nextSlideIndex = (currentSlideRef.current + 1) % slides.length;
    goToSlide(nextSlideIndex);
  };

  const resetAutoSlide = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    
    // Reiniciar el carrusel automático después de 10 segundos
    intervalIdRef.current = setInterval(nextSlide, 10000);
  };

  useEffect(() => {
    const slides = document.querySelectorAll('[id^="slide-"]');
    
    if (slides.length <= 1) return;

    // Iniciar el carrusel automático
    intervalIdRef.current = setInterval(nextSlide, 5000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <section id="Inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de fondos */}
      <div className="absolute inset-0 z-0">
        {/* Contenedor para el carrusel */}
        <div className="relative w-full h-full">
          {datosInicio.fondos.map((fondo, index) => (
            <div 
              key={index}
              id={`slide-${index}`}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === 0 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${fondo}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay fijo */}
              <div className="absolute inset-0 bg-black/50 md:bg-black/60" />
            </div>
          ))}
        </div>

        {/* Indicadores de paginación (círculos) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
          {datosInicio.fondos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="flex flex-col items-center gap-1 group"
              aria-label={`Ir a imagen ${index + 1}`}
            >
              {/* Círculo de paginación */}
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 group-hover:bg-white/70'
              }`} />
              
            </button>
          ))}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="container relative z-10 text-center text-white px-4 py-8 md:py-16 lg:py-20">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 tracking-tight opacity-0"
          style={{
            transform: 'translateY(30px)',
            textShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'fade-in-up 1s ease-out 0.3s forwards'
          }}
        >
          <span 
            className="bg-primary text-white from-white via-primary/30 to-white bg-clip-text animate-background-shine"
            key={currentTitleIndex}
          >
            {datosInicio.titulo[currentTitleIndex]}
          </span>
        </h1>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 px-2 sm:px-0"
          style={{ animation: 'fade-in-up 0.8s ease-out 1s forwards' }}
        >
          <a
            href="#contacto"
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 md:py-5 bg-gradient-to-br from-white to-gray-100 text-primary font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              {datosInicio.botones.contacto.texto}
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#Nosotros"
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 md:py-5 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-white/20 hover:border-white/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              {datosInicio.botones.servicios.texto}
              <span className="group-hover:rotate-90 transition-transform duration-300">+</span>
            </span>
          </a>
        </div>
        
        {/* Estadísticas */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 opacity-0"
          style={{ animation: 'fade-in 1s ease-out 1.5s forwards' }}
        >
          <div className="text-center sm:min-w-0 px-2">
            <div className="text-2xl sm:text-3xl font-bold mb-1 animate-pulse">500+</div>
            <div className="text-xs sm:text-sm text-white/70">Clientes Satisfechos</div>
          </div>
          <div className="text-center sm:min-w-0 px-2">
            <div className="text-2xl sm:text-3xl font-bold mb-1 animate-pulse" style={{ animationDelay: '0.2s' }}>100%</div>
            <div className="text-xs sm:text-sm text-white/70">Tasa de Éxito</div>
          </div>
          <div className="text-center sm:min-w-0 px-2">
            <div className="text-2xl sm:text-3xl font-bold mb-1 animate-pulse" style={{ animationDelay: '0.4s' }}>24/7</div>
            <div className="text-xs sm:text-sm text-white/70">Soporte Disponible</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Animaciones del fondo */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes background-shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        /* Animación para cambio de texto */
        @keyframes text-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-background-shine {
          background-size: 200% auto;
          animation: background-shine 5s ease-in-out infinite;
        }
        
        /* Optimización para móviles pequeños */
        @media (max-width: 380px) {
          h1 {
            font-size: 2.5rem !important;
          }
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .absolute.bottom-8 {
            bottom: 6rem;
          }
        }
        
        /* Efecto de pulso para círculo activo */
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        
        .bg-white.scale-125 {
          animation: pulse-dot 2s infinite;
        }
      `}</style>
      
      <style jsx global>{`
        span[class*="bg-clip-text"] {
          display: inline-block;
          animation: text-fade-in 0.5s ease-out;
        }
        
        /* Efecto hover para los círculos */
        button.flex.flex-col:hover div.w-3.h-3:not(.bg-white.scale-125) {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
};

export default Inicio;