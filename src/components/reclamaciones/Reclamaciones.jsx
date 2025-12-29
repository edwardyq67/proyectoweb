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
  FaRegCheckCircle,
  FaStore,
  FaFileInvoice,
  FaMoneyBillWave,
  FaInfoCircle
} from 'react-icons/fa';

export default function Reclamaciones  ()  {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ticketNumber, setTicketNumber] = useState('');
  const [descripcionLength, setDescripcionLength] = useState(0);
  const [tipoDocumento, setTipoDocumento] = useState('dni');

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
      if (descripcion.length > 1000) {
        alert('La descripción no puede exceder los 1000 caracteres');
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
          setTicketNumber(result.codigoReclamo);
          e.target.reset();
          setDescripcionLength(0);
          
          // Mostrar alerta con número de ticket
          alert(`✅ Reclamo registrado exitosamente\nCódigo de seguimiento: ${result.codigoReclamo}\nSe ha enviado una copia a su correo electrónico.`);
        } else {
          setSubmitStatus('error');
          alert(result.message || 'Error al procesar el reclamo');
        }
      } else {
        setSubmitStatus('error');
        alert('Error en la conexión con el servidor');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Error al enviar el reclamo. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tiposDocumento = [
    { value: 'dni', label: 'DNI' },
    { value: 'ruc', label: 'RUC' },
    { value: 'ce', label: 'Carnet de Extranjería' },
    { value: 'pasaporte', label: 'Pasaporte' }
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

  const tiposReclamo = [
    { value: 'reclamo', label: 'Reclamo' },
    { value: 'queja', label: 'Queja' }
  ];

  return (
    <div className="container bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Encabezado del Libro de Reclamaciones */}
      <div className="text-center mb-8 border-b pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <FaFileInvoice className="inline mr-3 text-primary" />
          Libro de Reclamaciones Virtual
        </h1>
        <p className="text-gray-600 mb-4">
          Conforme a lo establecido en el Código de Protección y Defensa del Consumidor esta tienda cuenta con un Libro de Reclamaciones Virtual a tu disposición.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left">
          <p className="text-yellow-700 font-medium flex items-center">
            <FaExclamationCircle className="mr-2" />
            Los campos marcados con (*) son obligatorios.
          </p>
        </div>
      </div>

      {/* Datos de la empresa */}
      <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaStore className="text-blue-600" />
          Datos de la empresa
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Razón social del proveedor:</p>
            <p className="text-lg font-bold text-gray-900">Teknisolutions S.A.C</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">R.U.C.:</p>
            <p className="text-lg font-bold text-gray-900">N° 20611923679</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-gray-700">Dirección del Establecimiento:</p>
            <p className="text-gray-900">CAL.MARIA JOSE DE ARCE NRO. 261 URB. MARANGA ET. UNO LIMA - LIMA - SAN MIGUEL</p>
          </div>
        </div>
      </div>

      {/* Estado del envío */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-6 bg-green-50 border-2 border-green-300 rounded-xl">
          <div className="flex items-start gap-4">
            <FaCheck className="text-3xl text-green-600 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-green-800 mb-2">¡Reclamo registrado exitosamente!</h4>
              {ticketNumber && (
                <div className="mb-3">
                  <p className="text-green-700 font-medium">Código de seguimiento:</p>
                  <p className="text-2xl font-bold text-green-800 tracking-wider">{ticketNumber}</p>
                </div>
              )}
              <p className="text-green-700">
                Se ha enviado una copia de su reclamo al correo electrónico proporcionado. 
                Puede realizar el seguimiento con el código proporcionado.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-6 bg-red-50 border-2 border-red-300 rounded-xl">
          <div className="flex items-start gap-4">
            <FaExclamationCircle className="text-3xl text-red-600 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-red-800 mb-2">Error al registrar el reclamo</h4>
              <p className="text-red-700">
                Por favor, verifique los datos ingresados e intente nuevamente. 
                Si el problema persiste, contáctenos por teléfono.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Sección 1: Información del Consumidor Reclamante */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 flex items-center gap-3">
            <FaUser className="text-primary text-2xl" />
            Información del Consumidor Reclamante
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaIdCard className="text-gray-500" />
                Tipo de Documento *
              </label>
              <select
                name="tipoDocumento"
                required
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
              >
                {tiposDocumento.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaIdCard className="text-gray-500" />
                Número de Documento *
              </label>
              <input
                type="text"
                name="numeroDocumento"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder={tipoDocumento === 'ruc' ? 'Ingrese su RUC' : 'Ingrese su documento'}
                maxLength={tipoDocumento === 'ruc' ? '11' : '12'}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaUser className="text-gray-500" />
                Nombres *
              </label>
              <input
                type="text"
                name="nombres"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tus nombres completos"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaUser className="text-gray-500" />
                Apellidos *
              </label>
              <input
                type="text"
                name="apellidos"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tus apellidos completos"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaPhone className="text-gray-500" />
                Teléfono / Celular *
              </label>
              <input
                type="tel"
                name="telefono"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ingresa tu número de contacto"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaEnvelope className="text-gray-500" />
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="ejemplo@correo.com"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaHome className="text-gray-500" />
                Dirección Completa *
              </label>
              <input
                type="text"
                name="direccion"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Calle, número, urbanización, referencia"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <FaBuilding className="text-gray-500" />
                  Departamento *
                </label>
                <select
                  name="departamento"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
                >
                  {departamentos.map((depto) => (
                    <option key={depto.value} value={depto.value}>
                      {depto.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <FaBuilding className="text-gray-500" />
                  Provincia *
                </label>
                <input
                  type="text"
                  name="provincia"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Ingresa provincia"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <FaBuilding className="text-gray-500" />
                  Distrito *
                </label>
                <input
                  type="text"
                  name="distrito"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Ingresa distrito"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección 2: Identificación del Bien Contratado */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 flex items-center gap-3">
            <FaMoneyBillWave className="text-primary text-2xl" />
            Identificación del Bien Contratado
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Bien o Servicio *
              </label>
              <input
                type="text"
                name="bienServicio"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Ej: Laptop, Servicio técnico, etc."
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monto reclamado (S/) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 font-bold">S/</span>
                <input
                  type="number"
                  name="montoReclamado"
                  required
                  step="0.01"
                  min="0"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descripción del bien o servicio *
            </label>
            <textarea
              name="descripcionBien"
              rows="3"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              placeholder="Describa el bien o servicio adquirido..."
            />
          </div>
        </div>
        
        {/* Sección 3: Detalle de su reclamo */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 flex items-center gap-3">
            <FaClipboardList className="text-primary text-2xl" />
            Detalle de su reclamo
          </h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-blue-800 mb-2 font-semibold flex items-center gap-2">
              <FaInfoCircle />
              Definiciones según el Código del Consumidor:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded border">
                <p className="font-semibold text-red-600">Reclamo:</p>
                <p className="text-gray-700">Cuando el consumidor no está conforme con los bienes adquiridos o servicios prestados.</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="font-semibold text-red-600">Queja:</p>
                <p className="text-gray-700">Cuando el consumidor expresa su malestar respecto de algún tema que no tenga que ver directamente con el giro del negocio, ejemplo, mala atención.</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo *
              </label>
              <select
                name="tipoReclamo"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
              >
                <option value="">Seleccione tipo</option>
                {tiposReclamo.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fecha del hecho reclamado *
              </label>
              <input
                type="date"
                name="fechaHecho"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descripción detallada del reclamo/queja *
            </label>
            <textarea
              name="descripcion"
              rows="6"
              required
              maxLength="1000"
              onChange={(e) => setDescripcionLength(e.target.value.length)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              placeholder="Describa detalladamente los hechos, incluyendo fechas, horas, personas involucradas, documentos de referencia, etc."
            />
            <div className="flex justify-between mt-2">
              <p className="text-xs text-gray-500">
                Incluya todos los detalles relevantes para una adecuada atención.
              </p>
              <p className={`text-sm ${descripcionLength > 900 ? 'text-red-600' : 'text-gray-500'}`}>
                {descripcionLength}/1000 caracteres
              </p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pedido o solución esperada *
            </label>
            <textarea
              name="pedido"
              rows="3"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              placeholder="Especifique claramente qué solución espera recibir..."
            />
          </div>
        </div>
        
        {/* Observaciones legales */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            <FaFileAlt className="inline mr-2" />
            Información Importante
          </h4>
          
          <div className="space-y-3 text-sm text-gray-700">
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Observaciones y acciones adoptadas por el Proveedor:</strong> La respuesta a este reclamo o queja será enviada al correo electrónico consignado en el presente formulario.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Declaración:</strong> Con el envío del presente formulario, EL USUARIO valida la información consignada y declara haber sido debidamente informado por Teknisolutions S.A.C sobre el procedimiento, plazo de atención y medio de respuesta correspondiente.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Notificación:</strong> En caso el reclamo resulte procedente o improcedente, la decisión será notificada al correo electrónico proporcionado.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Código de seguimiento:</strong> Al registrar su reclamo o queja, se generará un código único que será enviado a su correo electrónico para su seguimiento.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Validación:</strong> En caso no se consigne como mínimo el nombre, número de documento, dirección o correo electrónico, y la descripción del reclamo o queja, este será considerado no presentado, conforme al artículo 5 del Reglamento del Libro de Reclamaciones.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Otras vías:</strong> La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para presentar una denuncia ante INDECOPI.</span>
            </p>
            
            <p className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 mt-1" />
              <span><strong>Disponibilidad:</strong> Este establecimiento cuenta con un Libro de Reclamaciones a disposición del consumidor, conforme a lo exigido por la Ley.</span>
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <p className="text-center text-blue-900 font-semibold text-lg">
              MUCHAS GRACIAS POR SU COMUNICACIÓN,
            </p>
            <p className="text-center text-blue-800 font-bold text-xl mt-2">
              Atentamente, Teknisolutions S.A.C
            </p>
          </div>
        </div>
        
        {/* Declaración y Términos */}
        <div className="flex items-start gap-3 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
          <input
            type="checkbox"
            id="declaracion"
            name="declaracion"
            required
            className="mt-1 h-5 w-5 text-primary focus:ring-primary border-gray-400 rounded"
          />
          <div>
            <label htmlFor="declaracion" className="text-gray-900 font-semibold flex items-center gap-2 mb-2">
              <FaShieldAlt className="text-primary" />
              DECLARACIÓN Y CONSENTIMIENTO *
            </label>
            <p className="text-sm text-gray-700">
              <strong>Declaro que los datos consignados son correctos y fiel expresión de la verdad.</strong> 
              Autorizo expresamente a Teknisolutions S.A.C al tratamiento de mis datos personales para los fines relacionados 
              con la atención de mi reclamo o queja, conforme a lo establecido en la Ley de Protección de Datos Personales 
              (Ley N° 29733) y su Reglamento. Confirmo que he sido informado sobre mis derechos ARCO (Acceso, Rectificación, 
              Cancelación y Oposición) y que conozco la política de privacidad de la empresa.
            </p>
          </div>
        </div>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 py-4 px-6 font-bold rounded-xl transition duration-300 flex items-center justify-center gap-3 text-lg ${
              isSubmitting 
                ? 'bg-primary/70 cursor-not-allowed' 
                : 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" />
                Registrando reclamo...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Registrar en Libro de Reclamaciones
              </>
            )}
          </button>
          
          <button
            type="reset"
            className="flex-1 py-4 px-6 font-bold bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition shadow hover:shadow-lg"
            onClick={() => {
              setSubmitStatus(null);
              setTicketNumber('');
              setDescripcionLength(0);
              setTipoDocumento('dni');
            }}
          >
            Limpiar Formulario
          </button>
        </div>
      </form>
    </div>
  );
};
