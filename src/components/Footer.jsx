// Footer.jsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaCog,
  FaTiktok,
  FaTimes
} from 'react-icons/fa';
import datosNosotros from '../lib/Nosotros.json';
import ContactoData from '../lib/Contacto.json';
import SatisfechoData from '../lib/Satisfecho.json';
import ProductosData from '../lib/Productos.json';

const Footer = () => {
  const datos = ContactoData.contacto || {};
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [allCombinations, setAllCombinations] = useState([]);

  // Función para generar TODAS las combinaciones posibles
  const generateAllCombinations = useCallback(() => {
    const combinations = [];
    
    // Usar todos los nombres de clientes (200 aprox)
    const clientes = SatisfechoData.clientes_nombres || [];
    const adjetivos = SatisfechoData.adjetivos || [];
    const verbos = SatisfechoData.verbos || [];
    const productos = ProductosData.productos || [];
    
    // Crear combinaciones aleatorias únicas
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i];
      const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
      const verbo = verbos[Math.floor(Math.random() * verbos.length)];
      const producto = productos[Math.floor(Math.random() * productos.length)];
      
      combinations.push({
        id: i,
        cliente,
        adjetivo,
        verbo,
        producto,
        timestamp: Date.now() + i // Para hacerlos únicos
      });
    }
    
    return combinations;
  }, []);

  // Inicializar combinaciones
  useEffect(() => {
    const combinations = generateAllCombinations();
    setAllCombinations(combinations);
  }, [generateAllCombinations]);

  // Función para mostrar una notificación aleatoria
  const showRandomNotification = useCallback(() => {
    if (allCombinations.length === 0) return;
    
    // Seleccionar una combinación aleatoria
    const randomIndex = Math.floor(Math.random() * allCombinations.length);
    const notification = allCombinations[randomIndex];
    
    // Mostrar la notificación con animación
    setCurrentNotification(notification);
    setIsVisible(true);
    
    // Ocultar después de 5 segundos
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      
      // Eliminar después de que termine la animación
      const removeTimeout = setTimeout(() => {
        setCurrentNotification(null);
      }, 500); // Tiempo de la animación de salida
      
      return () => clearTimeout(removeTimeout);
    }, 5000); // Mostrar por 5 segundos
    
    return () => clearTimeout(hideTimeout);
  }, [allCombinations]);

  // Efecto para mostrar notificaciones periódicamente
  useEffect(() => {
    // Mostrar primera notificación después de 3 segundos
    const initialDelay = setTimeout(() => {
      showRandomNotification();
    }, 3000);
    
    // Configurar intervalo para mostrar notificaciones cada 10-20 segundos
    const interval = setInterval(() => {
      showRandomNotification();
    }, 10000 + Math.random() * 10000); // Entre 10 y 20 segundos
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [showRandomNotification]);

  // Función para cerrar manualmente la notificación
  const closeNotification = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentNotification(null);
    }, 500);
  };

  // Mapeo de iconos de servicios
  const iconMap = {
    "Mantenimiento Preventivo": FaCheckCircle,
    "Instalación de Sistemas": FaCheckCircle,
    "Reparación Especializada": FaCheckCircle,
    "Ductos y Ventilación": FaCheckCircle,
    "Control de Calidad": FaCheckCircle,
    "Consultoría HVAC": FaCheckCircle,
  };

  // Configuración de iconos para redes sociales
  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    twitter: FaTwitter,
    tiktok: FaTiktok
  };

  // Configuración de colores para redes sociales
  const socialColors = {
    facebook: 'bg-blue-600 hover:bg-blue-700',
    instagram: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
    twitter: 'bg-blue-400 hover:bg-blue-500',
    tiktok: 'bg-black hover:bg-gray-800'
  };

  // Asegurar que los datos existan
  const informacionContacto = datos.informacion_contacto || {};
  const telefonos = informacionContacto.telefonos || [];
  const correos = informacionContacto.correos || [];
  const direcciones = informacionContacto.direcciones || [];
  const redesSociales = datos.redes_sociales || {};
  const whatsappBotones = datos.whatsapp_botones || [];
  const horariosAtencion = datos.horarios_atencion || {};
  const servicios = datosNosotros.servicios || [];
  const logros = datosNosotros.logros || [];

  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Columna 1: Logo y descripción */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/transparente.png"
                  alt="Logo de la empresa"
                  className="w-52 h-auto max-w-full"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Especialistas en sistemas de climatización y ventilación
                industrial. Soluciones HVAC de alta calidad desde 2010.
              </p>

              {/* Redes Sociales en el footer */}
              <div className="flex gap-4">
                {Object.entries(redesSociales).map(([key, red]) => {
                  const IconComponent = socialIcons[key];
                  const colorClass = socialColors[key] || 'bg-gray-600 hover:bg-gray-700';

                  if (!IconComponent) return null;

                  return (
                    <a
                      key={key}
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${colorClass}`}
                      aria-label={red.nombre}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}

                {whatsappBotones.length > 0 && (
                  <a
                    href={`https://wa.me/${whatsappBotones[0].numero.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappBotones[0].mensaje)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Columna 2: Servicios usando .map() */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Servicios</h3>
              <ul className="space-y-3">
                {servicios.slice(0, 6).map((servicio, index) => {
                  const IconComponent = iconMap[servicio.titulo] || FaCog;
                  return (
                    <li key={index}>
                      <a
                        href={servicio.url || "#"}
                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {servicio.titulo}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Columna 3: Contacto desde JSON */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <ul className="space-y-4">
                {direcciones.map((direccion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaMapMarkerAlt className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">
                      {direccion.direccion}
                      <br />
                      {direccion.ciudad}, {direccion.pais}
                    </span>
                  </li>
                ))}

                {telefonos.map((telefono, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaPhone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${telefono.numero}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {telefono.numero}
                    </a>
                  </li>
                ))}

                {correos.map((correo, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaEnvelope className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${correo.email}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {correo.email}
                    </a>
                  </li>
                ))}

                {whatsappBotones.slice(0, 1).map((boton, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaWhatsapp className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <a
                      href={`https://wa.me/${boton.numero.replace(/\D/g, '')}?text=${encodeURIComponent(boton.mensaje)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors font-medium"
                    >
                      WhatsApp: {boton.numero}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Horario de atención actualizado */}
              {Object.keys(horariosAtencion).length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="text-sm font-semibold mb-2">Horario de Atención</h4>
                  <div className="space-y-1">
                    <p className="text-gray-400 text-sm">
                      <span className="font-medium text-gray-300">Lunes a Viernes:</span> 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="font-medium text-gray-300">Sábados:</span> {direcciones[0]?.Sabado || "Mediodia"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Columna 4: Libro de reclamaciones y Logros */}
            <div>
              <div
                className="p-3 cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
                onClick={() => window.location.href = '/reclamaciones'}
              >
                <img
                  src="https://friotemp.com.pe/wp-content/uploads/libroreclamaciones-blanco.avif"
                  alt="Libro de Reclamaciones"
                  className="h-20 w-auto hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Logros usando .map() */}
              {logros.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h4 className="text-sm font-semibold mb-4">Nuestros Logros</h4>
                  <ul className="space-y-2">
                    {logros.slice(0, 3).map((logro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{logro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} TS GROUP. Todos los derechos reservados.
              </div>

              {/* Enlaces legales */}
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                <a
                  href="/Politicas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Política de Privacidad
                </a>

                <a
                  href="/reclamaciones"
                  className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Libro de Reclamaciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp (derecha) */}
      {whatsappBotones.length > 0 && (
        <a
          href={`https://wa.me/${whatsappBotones[0].numero.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappBotones[0].mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:fixed md:flex bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7" />
          <div className="absolute flex flex-col right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <span>¿Necesitas ayuda? </span>
            <span>{whatsappBotones[0].numero}</span>
          </div>
        </a>
      )}

      {/* Notificación emergente de "Cliente satisfecho" (izquierda) - AGREGADA */}
      {currentNotification && (
        <div className={`hidden md:fixed md:flex bottom-6 left-6 z-40 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className='relative bg-white border border-gray-300 rounded-lg shadow-xl p-3 max-w-64'>
            {/* Botón para cerrar */}
            <button
              onClick={closeNotification}
              className="absolute -top-2 cursor-pointer -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
              aria-label="Cerrar notificación"
            >
              <FaTimes />
            </button>
            
            <div className='flex gap-3 items-start mt-1'>
              {/* Imagen del producto */}
              <div className='flex-shrink-0'>
                <img 
                  src={currentNotification.producto?.img || "/default-product.jpg"} 
                  className='w-12 h-12 object-cover rounded-md border border-gray-200' 
                  alt={currentNotification.producto?.titulo || "Producto"}
                  onError={(e) => {
                    e.target.src = "/default-product.jpg";
                  }}
                />
              </div>
              
              {/* Información del cliente */}
              <div className='flex-1 min-w-0'>
                {/* Encabezado con icono y tiempo */}
                <div className='flex items-center justify-between mb-1'>
                  <div className='flex items-center gap-1'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-xs text-gray-500 font-medium'>Ahora</span>
                  </div>
                  <span className='text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full'>
                    Solicitó servicio
                  </span>
                </div>
                
                {/* Nombre del cliente */}
                <h1 className='font-semibold text-gray-800 text-sm mb-1'>
                  {currentNotification.cliente}
                </h1>
                
                {/* Mensaje de la solicitud */}
                <p className='text-xs text-gray-600 leading-tight'>
                  {currentNotification.adjetivo} {currentNotification.verbo} el servicio de{" "}
                  <span className='font-medium text-gray-800'>
                    {currentNotification.producto?.titulo || "nuestro servicio"}
                  </span>
                </p>
                
                {/* Tiempo transcurrido (ficticio) */}
                <div className='mt-2 pt-2 border-t border-gray-100'>
                  <span className='text-xs text-gray-500'>
                    Hace {Math.floor(Math.random() * 5) + 1} minutos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;