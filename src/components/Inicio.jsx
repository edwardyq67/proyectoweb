import { useEffect, useRef, useState } from 'react';
import datosInicio from '../lib/Inicio.json';

const Inicio = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentDescIndex, setCurrentDescIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  
  const intervalIdRef = useRef(null);
  const isTransitioningRef = useRef(false);

  // Precargar todas las imágenes al montar el componente
  useEffect(() => {
    const loadPromises = datosInicio.fondos.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [index]: true }));
          resolve();
        };
        img.onerror = () => {
          console.error(`Error cargando imagen: ${src}`);
          setImagesLoaded(prev => ({ ...prev, [index]: false }));
          resolve();
        };
      });
    });

    Promise.all(loadPromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  const goToSlide = (slideIndex) => {
    if (isTransitioningRef.current || slideIndex === activeSlide) return;

    isTransitioningRef.current = true;

    // Actualizar el slide activo
    setActiveSlide(slideIndex);
    setCurrentTitleIndex(slideIndex);
    setCurrentDescIndex(slideIndex);

    // Restablecer el temporizador del carrusel automático
    resetAutoSlide();

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 1000);
  };

  const nextSlide = () => {
    if (datosInicio.fondos.length <= 1 || isTransitioningRef.current) return;
    const nextSlideIndex = (activeSlide + 1) % datosInicio.fondos.length;
    goToSlide(nextSlideIndex);
  };

  const resetAutoSlide = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    intervalIdRef.current = setInterval(nextSlide, 5000);
  };

  // Iniciar el carrusel automático cuando las imágenes estén cargadas
  useEffect(() => {
    if (!allImagesLoaded) return;
    resetAutoSlide();
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [allImagesLoaded, activeSlide]);

  return (
    <section id="Inicio" className="relative flex items-center justify-center overflow-hidden min-h-screen pt-16 md:pt-0">
      {/* Pantalla de carga */}
      {!allImagesLoaded && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-white text-lg font-medium">Cargando imágenes...</p>
            <div className="flex gap-1 justify-center mt-4">
              {datosInicio.fondos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imagesLoaded[index] ? 'bg-green-500' : 'bg-white/30 animate-pulse'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Carrusel de fondos */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full h-full">
          {datosInicio.fondos.map((fondo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${fondo}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/80" />
            </div>
          ))}
        </div>

        {/* Indicadores de paginación */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
          {datosInicio.fondos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group"
              aria-label={`Ir a imagen ${index + 1}`}
              disabled={!allImagesLoaded}
            >
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
      <div className={`container relative z-10 text-center text-white px-4 py-8 md:py-16 lg:py-20 transition-opacity duration-500 ${
        allImagesLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 tracking-tight"
          style={{
            animation: 'fade-in-up 1s ease-out 0.3s forwards',
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          <span className="text-white">
            {datosInicio.titulo[currentTitleIndex]}
          </span>
        </h1>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed"
            style={{
              animation: 'fade-in-up 0.8s ease-out 0.6s forwards',
              opacity: 0,
              transform: 'translateY(30px)'
            }}
          >
            {datosInicio.descripcion[currentDescIndex]}
          </p>
        </div>

        {/* Botones */}
        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2 sm:px-0"
          style={{
            animation: 'fade-in-up 0.8s ease-out 0.9s forwards',
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          <a
            href="https://wa.me/51912909920?text=Hola,%20quiero%20más%20información%20del%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 md:py-4 bg-gradient-to-br from-white to-gray-100 text-primary font-bold text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              {datosInicio.botones.contacto.texto}
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
          </a>

          <a
            href="#Nosotros"
            className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 md:py-4 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-white/20 hover:border-white/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              {datosInicio.botones.servicios.texto}
              <span className="group-hover:rotate-90 transition-transform duration-300">+</span>
            </span>
          </a>
        </div>

        {/* Estadísticas */}
        <div
          className="mt-8 sm:mt-12 md:mt-14 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          style={{
            animation: 'fade-in 1s ease-out 1.2s forwards',
            opacity: 0
          }}
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
        
        @media (max-width: 380px) {
          h1 {
            font-size: 2rem !important;
          }
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .absolute.bottom-8 {
            bottom: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Inicio;