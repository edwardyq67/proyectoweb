import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaExclamationCircle,
  FaPaperPlane,
  FaTimes,
  FaMapMarkedAlt,
  FaCalendarWeek,
  FaCommentAlt,
  FaUser,
  FaMobileAlt,
  FaCheck,
  FaSpinner
} from 'react-icons/fa';
import ContactoData from '../lib/Contacto.json';

const Contacto = ({ tipo }) => {
  const datos = ContactoData.contacto;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleOpenTermsModal = (e) => {
    e.preventDefault();
    setShowTermsModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);

      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitStatus('success');
          e.target.reset();
        } else {
          setSubmitStatus('error');
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
    twitter: FaTwitter
  };

  const socialColors = {
    facebook: 'bg-blue-600 hover:bg-blue-700',
    instagram: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
    tiktok: 'bg-black hover:bg-gray-800',
    youtube: 'bg-red-600 hover:bg-red-700',
    linkedin: 'bg-blue-700 hover:bg-blue-800',
    twitter: 'bg-blue-400 hover:bg-blue-500'
  };

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
          <div className="space-y-6">
            {/* ... (código anterior del lado izquierdo permanece igual) ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <FaClock className="text-primary" />
                Horarios
              </h3>
              <div className="space-y-1.5">
                {direcciones.map((direccion, index) => (
                  <div key={index} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarWeek className="text-primary" />
                      <span className="text-foreground text-sm">{horariosAtencion.general}</span> /
                      <span className="text-foreground text-sm">Sabado: {direccion.Sabado || "Sábados: 9:00 AM - 1:00 PM"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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

          <div className="lg:sticky lg:top-4">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Completa el formulario y te contactaremos pronto
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <FaCheck className="text-green-600" />
                    <span className="font-medium">¡Mensaje enviado con éxito!</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 text-red-700">
                    <FaExclamationCircle className="text-red-600" />
                    <span className="font-medium">Error al enviar el mensaje</span>
                  </div>
                </div>
              )}

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
                  />
                </div>

                {/* CAMBIO IMPORTANTE: Enviar como "estado" no "tipo" */}
                <input type="hidden" name="estado" value={tipo} />

               <div className="flex items-start gap-2">
  <input
    type="checkbox"
    id="privacidad"
    className="mt-0.5"
    required
  />
  <label htmlFor="privacidad" className="flex flex-wrap gap-1 text-xs text-muted-foreground">
    {datos.formulario_contacto.politica_privacidad.split(' ').map((word, index, array) => {
      if (word === "Términos" || (word === "Terminos" && array[index + 1] === "y")) {
        return (
          <span key={index}>
            <a
              href="#"
              onClick={handleOpenTermsModal}
              className="text-blue-600 cursor-pointer border-b hover:text-blue-800 hover:border-blue-800 transition-colors"
            >
              Términos y condiciones
            </a>
            {' '}
          </span>
        );
      } else if (word === "Política" || word === "politica") {
        return (
          <span key={index}>
            {' '}
            <a
              href="/Politicas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer border-b hover:text-blue-800 hover:border-blue-800 transition-colors"
            >
              Política de privacidad
            </a>
          </span>
        );
      } else if (word !== "y" && word !== "condiciones" && word !== "de" && word !== "privacidad") {
        return <span key={index}>{word} </span>;
      }
      return null;
    })}
  </label>
</div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 font-bold rounded-md transition-colors flex items-center justify-center gap-2 text-sm ${isSubmitting
                    ? 'bg-primary/70 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showTermsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={handleCloseTermsModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 sticky top-0">
              <h2 className="text-xl font-bold text-gray-800">
                Términos y Condiciones
              </h2>
              <button
                onClick={handleCloseTermsModal}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-4 text-gray-700">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-center mb-2">TÉRMINOS Y CONDICIONES</h3>
                  <p className="text-center text-sm text-gray-600 mb-4">Servicios de Instalación y Mantenimiento</p>
                </div>

                <ol className="space-y-6 list-decimal pl-5">
                  <li className="pl-2">
                    <span className="font-medium">TEKNISOLUTIONS</span>, en adelante LA EMPRESA garantizará los servicios de instalación y mantenimiento correctivo, que realice, así como los productos adquiridos, comprados y/o vendidos, por LA EMPRESA, en conformidad con las condiciones generales que pasan a expresarse y que se dan a conocer a EL CLIENTE, por medio de la presente cotización; en los siguientes términos.
                  </li>

                  <li className="pl-2">
                    Si al momento de efectuar el servicio EL CLIENTE no se encuentra en la dirección acordada, o por cualquier motivo no permiten el ingreso, los técnicos esperarán 15 minutos. Pasado este periodo de tiempo, el técnico procederá a retirarse dando por finalizada la atención. Para reprogramar el servicio EL CLIENTE deberá pagar la suma de 25.00 soles.
                  </li>

                  <li className="pl-2">
                    Si EL CLIENTE decide anular el servicio de mantenimiento posterior a la llegada del técnico al lugar de prestación de servicio deberá realizar el pago de 25.00 soles por concepto de movilización a la visita, el cual será descontada del valor del servicio.
                  </li>

                  <li className="pl-2">
                    EL CLIENTE deberá proporcionar el espacio despejado donde ser realizará el mantenimiento o la instalación. En caso de que EL CLIENTE haya solicitado una visita técnica previa, el mismo deberá acondicionar el espacio según lo acordado.
                  </li>

                  <li className="pl-2">
                    <p className="mb-2">La garantía de instalación tendrá una vigencia de 1 año, contados desde la fecha de recepción conforme de la instalación por parte de EL CLIENTE -en caso de no existir tal recepción, el plazo se contará desde la fecha del encargo y pago del servicio-, y cubrirá hasta el monto efectivamente pagado por EL CLIENTE por concepto de instalación adquirida.</p>

                    <p className="font-medium mt-3 mb-1">Esta garantía no cubre:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Si EL CLIENTE hace mal uso del producto.</li>
                      <li>Si EL CLIENTE traslada el producto de donde fue instalado por el técnico de LA EMPRESA.</li>
                      <li>Si, habiendo requerido de un mantenimiento preventivo, este no fue realizado</li>
                      <li>La garantía tampoco cubre deficiencias ocasionadas por tensiones, descargas, distorsiones, interrupciones del circuito de alimentación eléctrica, rayos, deficiencias en la instalación eléctrica, línea telefónica, conexiones indebidas, accidentes, caídas, impactos, insectos, animales, arena, polvo, pelusas, exposición a condiciones ambientales no apropiadas, robo, corrosión, inundación, sismos, incendios o desastres naturales.</li>
                    </ul>

                    <p className="font-medium mt-3 mb-1">Así mismo, la garantía no tendrá validez si:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>EL CLIENTE manipula el equipo, objeto de instalación o mantenimiento sin contar con la presencia del técnico de LA EMPRESA.</li>
                    </ul>
                  </li>

                  <li className="pl-2">
                    <p className="mb-2">En caso EL CLIENTE no esté presente durante el servicio, El mismo podrá dejar un TERCERO el cual deberá acreditar ser mayor de edad.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Toda reprogramación deberá ser como máximo a un día útil de la fecha del servicio (24 hrs previas) escribiendo al WhatsApp 912909920.</li>
                    </ul>
                  </li>

                  <li className="pl-2">
                    <p className="mb-2">EL CLIENTE deberá tomar en cuenta los siguientes puntos para preparar el espacio donde se realizará el SERVICIO:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Por seguridad de EL CLIENTE. Deberán mantener alejados de la zona de trabajo a niños y mascotas.</li>
                      <li>Si EL SERVICIO requiere de perforaciones, EL CLIENTE proveerá los planos del ambiente de no contar con los mismos, la realización de EL SERVICIO quedará bajo la responsabilidad de EL CLIENTE.</li>
                      <li>EL CLIENTE deberá facilitar al técnico de TEKNISOLUTIONS energía eléctrica. Si EL SERVICIO a realizar involucra trabajos en altura, EL CLIENTE deberá proporcionar escaleras o estructuras que permitan llegar al punto de instalación, salvo que la cotización incluya los referidos elementos.</li>
                      <li>El técnico de TEKNISOLUTIONS solo realizara EL SERVICIO, y los trabajos que este conlleve, por el que fue contratado la empresa, los mismos que se encuentran detallados en la cotización. De haber trabajos adicionales, éstos deberán ser realizados previamente por un tercero de la elección de EL CLIENTE.</li>
                    </ul>
                  </li>

                  <li className="pl-2">
                    Si EL CLIENTE realiza una coordinación adicional que no se encuentre en la cotización, con el técnico de TEKNISOLUTIONS quedará sin efecto la garantía de este por LA EMPRESA.
                  </li>

                  <li className="pl-2">
                    Si el técnico de TEKNISOLUTIONS detecta piezas faltantes o dañadas durante el servicio, coordinará con LA EMPRESA para el envío de estas y se reprogramará EL SERVICIO sin costo.
                  </li>

                  <li className="pl-2">
                    Al finalizar EL SERVICIO, se le solicitará a EL CLIENTE confirmar el término de obra en donde podrá indicar su conformidad u observaciones en EL SERVICIO.
                  </li>

                  <li className="pl-2">
                    Respecto al mantenimiento preventivo, el mismo no tiene garantía, ya que, nuestro servicio tiene como objeto realizar limpieza en componentes de los equipos; por lo que no se reemplaza ninguna pieza manteniendo su integridad el equipo.
                  </li>
                </ol>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaExclamationCircle className="text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm text-gray-800 mb-1">
                        Aceptación de Términos
                      </h5>
                      <p className="text-xs text-gray-600">
                        Al marcar la casilla de aceptación, EL CLIENTE declara haber leído, comprendido y aceptado íntegramente los términos y condiciones aquí establecidos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">TEKNISOLUTIONS</span> - Todos los derechos reservados
                </div>
                <button
                  onClick={handleCloseTermsModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacto;