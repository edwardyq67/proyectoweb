// Formulario.jsx
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

function Formulario() {
  const [loading, setLoading] = useState(false)
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' })
  const [archivo, setArchivo] = useState(null)
  
  const fileInputRef = React.useRef(null)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      tecnico: 'Selecciona una profesión',
      distrito: 'Selecciona tu distrito',
      experiencia: 'Selecciona tu experiencia',
      mensaje: ''
    }
  })

  const tecnico = [
    'Refrigeración',
    'Aire acondicionado y Climatizacion'
  ]

  const distritos = [
    'Selecciona tu distrito',
    'Lima Centro',
    'Miraflores',
    'San Isidro',
    'Barranco',
    'Surco',
    'La Molina',
    'San Borja',
    'Jesús María',
    'Lince',
    'Pueblo Libre',
    'Magdalena',
    'San Miguel',
    'Callao',
    'Ventanilla',
    'Puente Piedra',
    'Los Olivos',
    'Comas',
    'Independencia',
    'San Martín de Porres',
    'Rímac',
    'El Agustino',
    'San Juan de Lurigancho',
    'Ate',
    'Chorrillos',
    'Villa El Salvador',
    'Villa María del Triunfo',
    'San Juan de Miraflores',
    'Otro'
  ]

  const nivelesExperiencia = [
    'Selecciona tu experiencia',
    'Sin experiencia',
    'Menos de 1 año',
    '1-3 años',
    '3-5 años',
    'Más de 5 años',
    'Más de 10 años'
  ]

  // useEffect para resetear cuando el modal se abre
  useEffect(() => {
    const modal = document.getElementById('modalFormulario')
    
    const handleModalOpen = () => {
      if (modal && !modal.classList.contains('hidden')) {
        reset()
        setArchivo(null)
        setSubmitResult({ success: false, message: '' })
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleModalOpen()
        }
      })
    })

    if (modal) {
      observer.observe(modal, { attributes: true })
      handleModalOpen()
    }

    return () => {
      if (modal) observer.disconnect()
    }
  }, [reset])

  // Manejar archivo
  const handleFileChange = (e) => {
    setArchivo(e.target.files[0])
  }

  const handleRemoveFile = () => {
    setArchivo(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    setSubmitResult({ success: false, message: '' })

    try {
      // Validaciones básicas
      if (!data.nombre.trim()) {
        throw new Error('El nombre es requerido')
      }
      
      if (!data.email.trim()) {
        throw new Error('El email es requerido')
      }
      
      if (!data.tecnico || data.tecnico === 'Selecciona una profesión') {
        throw new Error('Por favor selecciona una profesión')
      }
      
      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        throw new Error('Por favor ingresa un email válido')
      }
      
      // Validar archivo si existe
      if (archivo) {
        if (archivo.type !== 'application/pdf') {
          throw new Error('Solo se permiten archivos PDF')
        }
        
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (archivo.size > maxSize) {
          throw new Error('El archivo no debe exceder los 5MB')
        }
      }
      
      // Crear FormData
      const formData = new FormData()
      formData.append('nombre', data.nombre.trim())
      formData.append('email', data.email.trim())
      formData.append('telefono', data.telefono?.trim() || '')
      formData.append('tecnico', data.tecnico)
      formData.append('distrito', data.distrito || '')
      formData.append('experiencia', data.experiencia || '')
      formData.append('mensaje', data.mensaje?.trim() || '')
      
      if (archivo) {
        formData.append('archivo', archivo)
      }
      
      // Enviar a la API
      const response = await fetch('/api/TrabajoNosotrosSend', {
        method: 'POST',
        body: formData,
      })
      
      const result = await response.json()
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Error al enviar la solicitud')
      }
      
      setSubmitResult({
        success: true,
        message: result.message || '¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto.'
      })
      
      // Resetear y cerrar modal después de 3 segundos
      setTimeout(() => {
        const modal = document.getElementById('modalFormulario')
        if (modal) modal.classList.add('hidden')
        reset()
        setArchivo(null)
        setSubmitResult({ success: false, message: '' })
      }, 3000)
      
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error.message || 'Error al enviar el formulario. Por favor intenta nuevamente.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Mostrar mensaje de resultado */}
      {submitResult.message && (
        <div className={`p-4 rounded-xl ${submitResult.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {submitResult.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            {...register('nombre', { 
              required: 'El nombre es requerido',
              minLength: {
                value: 2,
                message: 'El nombre debe tener al menos 2 caracteres'
              }
            })}
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Tu nombre completo"
          />
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'El email es requerido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Por favor ingresa un email válido'
              }
            })}
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            {...register('telefono')}
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="+51 999 999 999"
          />
        </div>

        {/* Profesión */}
        <div>
          <label htmlFor="tecnico" className="block text-sm font-medium text-gray-700 mb-2">
            tecnico *
          </label>
          <Controller
            name="tecnico"
            control={control}
            rules={{ validate: value => value !== 'Selecciona una profesión' || 'Por favor selecciona una profesión' }}
            render={({ field }) => (
              <select
                id="tecnico"
                {...field}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                {tecnico.map((prof, index) => (
                  <option key={index} value={prof}>{prof}</option>
                ))}
              </select>
            )}
          />
          {errors.tecnico && (
            <p className="mt-1 text-sm text-red-600">{errors.tecnico.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Distrito */}
        <div>
          <label htmlFor="distrito" className="block text-sm font-medium text-gray-700 mb-2">
            Distrito
          </label>
          <Controller
            name="distrito"
            control={control}
            render={({ field }) => (
              <select
                id="distrito"
                {...field}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                {distritos.map((distrito, index) => (
                  <option key={index} value={distrito}>{distrito}</option>
                ))}
              </select>
            )}
          />
        </div>

        {/* Experiencia */}
        <div>
          <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-2">
            Nivel de Experiencia
          </label>
          <Controller
            name="experiencia"
            control={control}
            render={({ field }) => (
              <select
                id="experiencia"
                {...field}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                {nivelesExperiencia.map((nivel, index) => (
                  <option key={index} value={nivel}>{nivel}</option>
                ))}
              </select>
            )}
          />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje o Comentarios Adicionales
        </label>
        <textarea
          id="mensaje"
          {...register('mensaje')}
          rows="4"
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Cuéntanos más sobre ti, tus habilidades o por qué te interesa trabajar con nosotros..."
        />
      </div>

      {/* Botón de enviar */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar Solicitud'
          )}
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          * Campos obligatorios
        </p>
      </div>
    </form>
  )
}

export default Formulario