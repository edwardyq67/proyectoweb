// src/components/reclamaciones.jsx
import React, { useState } from 'react';
import {
  FaUser,
  FaIdCard,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaClipboardList,
  FaPaperPlane,
  FaSpinner,
  FaCheck,
  FaExclamationCircle,
  FaBuilding,
  FaHome,
  FaShieldAlt,
  FaRegCheckCircle
} from 'react-icons/fa';

const Reclamaciones = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTicketNumber('');

    try {
      const formData = new FormData(e.target);
      
      // Validar longitud de descripción
      const descripcion = formData.get('descripcion');
      if (descripcion.length > 500) {
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/reclamos', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitStatus('success');
          setTicketNumber(result.ticketNumber);
          e.target.reset();
          
          // Mostrar alerta con número de ticket
       
        } else {
          setSubmitStatus('error');
          
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
     
    } finally {
      setIsSubmitting(false);
    }
  };

  const tiposReclamo = [
    { value: 'servicio', label: 'Servicio técnico' },
    { value: 'producto', label: 'Producto defectuoso' },
    { value: 'atencion', label: 'Atención al cliente' },
    { value: 'garantia', label: 'Garantía no cumplida' },
    { value: 'facturacion', label: 'Facturación/Cobro' },
    { value: 'entrega', label: 'Entrega/Logística' },
    { value: 'calidad', label: 'Calidad del producto' },
    { value: 'otros', label: 'Otros' }
  ];

  const departamentos = [
    { value: '', label: 'Selecciona departamento' },
    { value: 'lima', label: 'Lima' },
    { value: 'arequipa', label: 'Arequipa' },
    { value: 'cuzco', label: 'Cuzco' },
    { value: 'piura', label: 'Piura' },
    { value: 'lambayeque', label: 'Lambayeque' },
    { value: 'la libertad', label: 'La Libertad' },
    { value: 'junin', label: 'Junín' },
    { value: 'ancash', label: 'Áncash' },
    { value: 'ica', label: 'Ica' },
    { value: 'tacna', label: 'Tacna' },
    { value: 'otros', label: 'Otros' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Presentar Reclamo
      </h2>
      <p className="text-gray-600 mb-6">
        Completa todos los campos obligatorios (*) para registrar tu reclamo.
      </p>

      {/* Estado del envío */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-700">
            <FaCheck className="text-green-600" />
            <span className="font-medium">¡Reclamo enviado con éxito!</span>
          </div>
          {ticketNumber && (
            <p className="text-green-600 text-sm mt-1">
              Número de ticket: <strong>{ticketNumber}</strong>
            </p>
          )}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2 text-red-700">
            <FaExclamationCircle className="text-red-600" />
            <span className="font-medium">Error al enviar el reclamo</span>
          </div>
          <p className="text-red-600 text-sm mt-1">
            Por favor, intenta nuevamente o contáctanos por teléfono.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sección 1: Información Personal */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
            <FaUser className="text-primary" />
            Información Personal
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaUser className="text-gray-400 text-xs" />
                Nombres *
              </label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tus nombres"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaUser className="text-gray-400 text-xs" />
                Apellidos *
              </label>
              <input
                type="text"
                name="apellidos"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tus apellidos"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaIdCard className="text-gray-400 text-xs" />
                DNI / Carnet de Extranjería *
              </label>
              <input
                type="text"
                name="dni"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tu número de documento"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaPhone className="text-gray-400 text-xs" />
                Teléfono / Celular *
              </label>
              <input
                type="tel"
                name="telefono"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tu número de contacto"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <FaEnvelope className="text-gray-400 text-xs" />
              Correo Electrónico *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>
        
        {/* Sección 2: Dirección */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            Dirección
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaBuilding className="text-gray-400 text-xs" />
                Departamento *
              </label>
              <select
                name="departamento"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
              >
                {departamentos.map((depto) => (
                  <option key={depto.value} value={depto.value}>
                    {depto.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaBuilding className="text-gray-400 text-xs" />
                Provincia *
              </label>
              <input
                type="text"
                name="provincia"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa provincia"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <FaHome className="text-gray-400 text-xs" />
              Dirección Completa *
            </label>
            <input
              type="text"
              name="direccion"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Calle, número, urbanización, referencia"
            />
          </div>
        </div>
        
        {/* Sección 3: Detalles del Reclamo */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
            <FaClipboardList className="text-primary" />
            Detalles del Reclamo
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <FaFileAlt className="text-gray-400 text-xs" />
              Tipo de Reclamo *
            </label>
            <select
              name="tipoReclamo"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
            >
              <option value="">Selecciona tipo de reclamo</option>
              {tiposReclamo.map((tipo) => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <FaFileAlt className="text-gray-400 text-xs" />
              Descripción detallada del reclamo *

            </label>
            <textarea
              name="descripcion"
              rows="5"
              required
              maxLength="500"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              placeholder="Describe tu reclamo de manera clara y detallada..."
              onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
            />
            <p className="text-xs text-gray-500 mt-1">
              Máximo 500 caracteres. Incluye fechas, números de factura, productos/servicios involucrados.
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ¿Qué solución esperas recibir?
            </label>
            <textarea
              name="pedido"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              placeholder="Describe qué esperas como solución a tu reclamo..."
            />
          </div>
        </div>
        
        {/* Términos y condiciones */}
        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            required
            className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <div>
            <label htmlFor="terminos" className="text-sm text-gray-700">
              <div className="flex items-center gap-1 font-medium mb-1">
                <FaShieldAlt className="text-primary" />
                Acepto los términos y condiciones
              </div>
              <p className="text-xs text-gray-600">
                Autorizo el tratamiento de mis datos personales según la Ley de Protección de Datos Personales (Ley N° 29733) y 
                confirmo que he leído la política de privacidad. Entiendo que tengo derecho a recibir respuesta en un plazo 
                máximo de 30 días hábiles según la Ley del Consumidor.
              </p>
            </label>
          </div>
        </div>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 py-3 px-6 font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2 ${
              isSubmitting 
                ? 'bg-primary/70 cursor-not-allowed' 
                : 'bg-primary hover:bg-primary-dark text-white'
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
                Enviar Reclamo
              </>
            )}
          </button>
          
          <button
            type="reset"
            className="flex-1 py-3 px-6 font-semibold bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
            onClick={() => {
              setSubmitStatus(null);
              setTicketNumber('');
            }}
          >
            Limpiar Formulario
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reclamaciones;