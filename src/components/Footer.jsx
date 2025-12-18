// Footer.jsx
import React, { useState } from 'react';
import {
  FaBuilding,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWrench,
  FaFilter,
  FaShieldAlt,
  FaUserTie,
  FaCheckCircle,
  FaPaperPlane,
  FaTools,
  FaCog,
  FaNewspaper,
  FaTiktok,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import datosNosotros from '../lib/Nosotros.json';
import ContactoData from '../lib/Contacto.json';

const Footer = () => {
  const [email, setEmail] = useState('');
  const datos = ContactoData.contacto || {};

  // Mapeo de iconos de servicios
  const iconMap = {
    "Mantenimiento Preventivo": FaCheckCircle,
    "Instalación de Sistemas": FaTools,
    "Reparación Especializada": FaWrench,
    "Ductos y Ventilación": FaFilter,
    "Control de Calidad": FaShieldAlt,
    "Consultoría HVAC": FaUserTie,
  };

  // Configuración de iconos para redes sociales
  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
    twitter: FaTwitter
  };

  // Configuración de colores para redes sociales
  const socialColors = {
    facebook: 'bg-blue-600 hover:bg-blue-700',
    instagram: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
    tiktok: 'bg-black hover:bg-gray-800',
    youtube: 'bg-red-600 hover:bg-red-700',
    linkedin: 'bg-blue-700 hover:bg-blue-800',
    twitter: 'bg-blue-400 hover:bg-blue-500'
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
                <div className="h-10 w-10 text-primary">
                  <FaBuilding className="w-10 h-10" />
                </div>
                <span className="text-2xl font-bold">MiEmpresa</span>
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

              {/* Horario de atención desde JSON */}
              {Object.keys(horariosAtencion).length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="text-sm font-semibold mb-2">Horario de Atención</h4>
                  <p className="text-gray-400 text-sm">
                    {horariosAtencion.general}
                    <br />
                    {horariosAtencion.sabados}
                  </p>
                </div>
              )}
            </div>

            {/* Columna 4: Newsletter */}
            <div>
              <div className="p-3 cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
                <img
                  src="https://friotemp.com.pe/wp-content/uploads/libroreclamaciones-blanco.avif"
                  alt="Libro de Reclamaciones"
                  className="h-20 w-auto"
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
                &copy; {new Date().getFullYear()} MiEmpresa. Todos los derechos
                reservados.
              </div>

              {/* Enlaces legales */}
              <div className="flex flex-wrap gap-6">
                <a
                  href="/privacidad"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Política de Privacidad
                </a>
                <a
                  href="/terminos"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Términos de Servicio
                </a>
                <a
                  href="/cookies"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Cookies
                </a>
                <a
                  href="/sitemap.xml"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Mapa del Sitio
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="hidden md:flex">
        {/* Botón flotante de WhatsApp (derecha) */}
        {whatsappBotones.length > 0 && (
          <a
            href={`https://wa.me/${whatsappBotones[0].numero.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappBotones[0].mensaje)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
            <div className="absolute flex flex-col right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <span>¿Necesitas ayuda? </span>
              <span>{whatsappBotones[0].numero}</span>
            </div>
          </a>
        )}
      </div>


      {/* Botón flotante de Redes Sociales (izquierda) */}
      <div className="hidden md:fixed bottom-6 left-6 z-50 md:flex flex-col gap-3">
        {/* Mapeo dinámico de redes sociales flotantes */}
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
              className={`${colorClass} text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group relative`}
              aria-label={red.nombre}
            >
              <IconComponent className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Footer;