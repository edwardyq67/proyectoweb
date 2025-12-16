// Contacto.jsx
import React, { useState } from 'react';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaExclamationCircle,
  FaPaperPlane,
  FaMapMarkedAlt,
  FaCalendarWeek,
  FaCalendarDay,
  FaCalendarTimes,
  FaCommentAlt,
  FaUser,
  FaMobileAlt
} from 'react-icons/fa';
import ContactoData from '../lib/Contacto.json';

const Contacto = () => {
  const datos = ContactoData.contacto;
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
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

  return (
    <section id="contacto" className="py-12 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus necesidades de climatización y ventilación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna Izquierda: Información de Contacto Compacta */}
          <div className="space-y-6">
            {/* Teléfonos y Correos juntos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Teléfonos */}
              <div>
                <div className="space-y-2">
                  {telefonos.map((telefono, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaWhatsapp className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-foreground text-sm">{telefono.tipo}</span>
                          <span className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            {telefono.descripcion}
                          </span>
                        </div>
                        <a
                          href={telefono.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-foreground hover:text-primary transition-colors text-sm"
                        >
                          {telefono.numero}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Correos */}
              <div>
                <div className="space-y-2">
                  {correos.map((correo, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-foreground text-sm">{correo.tipo}</span>
                        </div>
                        <a
                          href={`mailto:${correo.email}`}
                          className="text-primary hover:text-primary/80 text-sm truncate"
                        >
                          {correo.email}
                        </a>
                        <p className="text-xs text-muted-foreground mt-0.5">{correo.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direcciones Compactas */}
            <div>
              <div className="space-y-3">
                {direcciones.map((direccion, index) => (
                  <div key={index} className="">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm mb-1">{direccion.tipo}</h4>
                        <p className="text-foreground text-sm">{direccion.direccion}</p>
                        <p className="text-muted-foreground text-xs">{direccion.ciudad}, {direccion.pais}</p>
                      </div>
                      <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-success" />
                      </div>
                    </div>

                    <a
                      href={direccion.mapa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all text-xs mt-1"
                    >
                      <FaMapMarkedAlt />
                      Ver mapa
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios de Atención */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <FaClock className="text-primary" />
                Horarios
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarWeek className="text-primary" />
                    <span className="text-foreground text-sm">General</span>
                  </div>
                  <span className="text-foreground text-sm">{horariosAtencion.general}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarDay className="text-primary" />
                    <span className="text-foreground text-sm">Sábados</span>
                  </div>
                  <span className="text-foreground text-sm">{horariosAtencion.sabados}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarTimes className="text-primary" />
                    <span className="text-foreground text-sm">Domingos</span>
                  </div>
                  <span className="text-foreground text-sm">{horariosAtencion.domingos}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <FaExclamationCircle className="text-destructive" />
                    <span className="text-foreground text-sm">Emergencias</span>
                  </div>
                  <span className="text-destructive text-sm">{horariosAtencion.emergencias}</span>
                </div>
              </div>
            </div>

            {/* Redes Sociales Compactas - Versión circular */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <FaCommentAlt className="text-primary" />
                Síguenos
              </h3>
              <div className="flex gap-3">
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
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${colorClass}`}
                      aria-label={red.nombre}
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </a>
                  );
                })}
                
                {whatsappBotones.length > 0 && (
                  <a
                    href={`https://wa.me/${whatsappBotones[0].numero.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappBotones[0].mensaje)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:sticky lg:top-4">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Completa el formulario y te contactaremos pronto
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-card-foreground mb-1">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      className="w-full pl-10 pr-4 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-card-foreground mb-1">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      className="w-full pl-10 pr-4 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-card-foreground mb-1">
                    Teléfono
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMobileAlt className="text-muted-foreground" />
                    </div>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Tu número de teléfono"
                      className="w-full pl-10 pr-4 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      required
                      value={formData.telefono}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-card-foreground mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    placeholder="Describe tu consulta o necesidad..."
                    rows={3}
                    className="w-full px-3 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm"
                    required
                    value={formData.mensaje}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacidad"
                    className="mt-0.5"
                    required
                  />
                  <label htmlFor="privacidad" className="text-xs text-muted-foreground">
                    {datos.formulario_contacto.politica_privacidad}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <FaPaperPlane />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;