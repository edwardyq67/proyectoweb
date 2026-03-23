import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import Formulario from './nosotros/Formulario.jsx';
import datosNosotros from '../lib/Nosotros.json';

const Nosotros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Modal del Formulario */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/5 teb z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Trabaja con Nosotros</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <Formulario />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sección principal con Motion */}
      <section id="Nosotros" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Elementos decorativos de fondo con Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-32 sm:translate-y-48 -translate-x-32 sm:-translate-x-48"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Texto con Motion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r text-black from-primary via-primary/80 to-primary bg-clip-text">
                  {datosNosotros.titulo}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                {datosNosotros.contenido}
              </motion.p>

              {/* Logros en grid responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {datosNosotros.logros.map((logro, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <FaCheck className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-1">{logro}</span>
                  </motion.div>
                ))}
              </div>

              {/* Botón Trabaja con Nosotros */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-sm sm:text-base"
              >
                <span className="relative z-10">Trabaja con Nosotros</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Imagen con efecto flotante y Motion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="order-1 lg:order-2 relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl group"
              >
                <img
                  src={datosNosotros.foto}
                  alt="Equipo de trabajo"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Sello flotante con Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mb-0.5 sm:mb-1">{datosNosotros.sello.numero}</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{datosNosotros.sello.texto}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Servicios en cards responsivas con Motion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-20 lg:mt-32"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {datosNosotros.servicios.map((servicio, index) => (
                <motion.a
                  key={index}
                  href={servicio.url}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow cursor-pointer h-64 sm:h-72 block"
                >
                  <img
                    src={servicio.img}
                    alt={servicio.titulo}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Contenido */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                      {servicio.titulo}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="flex items-center text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="mr-2">Ver detalles</span>
                      <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
};

export default Nosotros;