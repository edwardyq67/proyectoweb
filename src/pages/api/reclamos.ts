// src/pages/api/libro-reclamaciones.ts
export const prerender = false

import type { APIRoute } from "astro"
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

// Función para generar código único de seguimiento según formato INDECOPI
function generarCodigoSeguimiento(): string {
  const fecha = new Date()
  const año = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const dia = String(fecha.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `REC-${año}${mes}${dia}-${random}`
}

// Función para obtener el nombre del tipo de documento
function obtenerTipoDocumentoNombre(tipo: string): string {
  const tipos: { [key: string]: string } = {
    'dni': 'DNI',
    'ruc': 'RUC',
    'ce': 'Carnet de Extranjería',
    'pasaporte': 'Pasaporte'
  }
  return tipos[tipo] || tipo
}

// Función para obtener el nombre del tipo de reclamo
function obtenerTipoReclamoNombre(tipo: string): string {
  const tipos: { [key: string]: string } = {
    'reclamo': 'Reclamo',
    'queja': 'Queja'
  }
  return tipos[tipo] || tipo
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    
    // Datos de la empresa (fijos según SOFLENDIL S.A.C.)
    const empresa = {
      razonSocial: 'SOFLENDIL S.A.C.',
      ruc: '20605848444',
      direccion: 'CAL.SANTA ELENA NORTE NRO. 155 URB. CENTRO COMERCIAL MONTERRICO LIMA - LIMA - SANTIAGO DE SURCO',
      telefono: '(01) 123-4567',
      email: 'reclamos@soflendil.pe'
    }
    
    // Información del Consumidor Reclamante
    const tipoDocumento = formData.get('tipoDocumento') as string
    const numeroDocumento = formData.get('numeroDocumento') as string
    const nombres = formData.get('nombres') as string
    const apellidos = formData.get('apellidos') as string
    const telefono = formData.get('telefono') as string
    const email = formData.get('email') as string
    const direccion = formData.get('direccion') as string
    const departamento = formData.get('departamento') as string
    const provincia = formData.get('provincia') as string
    const distrito = formData.get('distrito') as string
    
    // Identificación del Bien Contratado
    const bienServicio = formData.get('bienServicio') as string
    const montoReclamado = formData.get('montoReclamado') as string
    const descripcionBien = formData.get('descripcionBien') as string
    
    // Detalle del reclamo
    const tipoReclamo = formData.get('tipoReclamo') as string
    const fechaHecho = formData.get('fechaHecho') as string
    const descripcion = formData.get('descripcion') as string
    const pedido = formData.get('pedido') as string
    
    // Declaración
    const declaracion = formData.get('declaracion') as string
    
    // Generar código único de seguimiento
    const codigoReclamo = generarCodigoSeguimiento()
    const fechaRegistro = new Date().toLocaleString('es-PE')
    const fechaFormato = new Date().toISOString().split('T')[0]
    
    console.log('📋 Libro de Reclamaciones - Registro recibido:', { 
      codigoReclamo, 
      nombres, 
      email, 
      tipoReclamo,
      tipoDocumento: obtenerTipoDocumentoNombre(tipoDocumento)
    })
    
    // Validaciones según INDECOPI
    if (!nombres?.trim() || !apellidos?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Nombre y apellidos son requeridos según el artículo 5 del Reglamento del Libro de Reclamaciones'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    if (!numeroDocumento?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Número de documento es requerido'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    if (!email?.trim() && !telefono?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Correo electrónico o teléfono es requerido para la notificación'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    if (!descripcion?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'La descripción del reclamo/queja es obligatoria'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    if (descripcion.length > 1000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'La descripción no puede exceder los 1000 caracteres'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    if (!declaracion) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Debe aceptar la declaración de veracidad de los datos'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // Validar formato de RUC si aplica
    if (tipoDocumento === 'ruc' && numeroDocumento.length !== 11) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'El RUC debe tener 11 dígitos'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // Enviar email a la empresa
    const emailEmpresa = await resend.emails.send({
      from: 'Libro de Reclamaciones SOFLENDIL <onboarding@resend.dev>',
      to: [empresa.email, 'servicios@soflendil.pe'], // Emails de la empresa
      replyTo: email,
      subject: `📋 LIBRO RECLAMACIONES - ${obtenerTipoReclamoNombre(tipoReclamo).toUpperCase()} #${codigoReclamo}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-left: 5px solid #dc3545; margin-bottom: 20px; }
            .section { background: #fff; border: 1px solid #dee2e6; border-radius: 5px; padding: 15px; margin-bottom: 15px; }
            .section-title { color: #dc3545; border-bottom: 2px solid #dc3545; padding-bottom: 5px; margin-bottom: 10px; }
            .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
            .info-item { margin-bottom: 5px; }
            .info-label { font-weight: bold; color: #495057; }
            .info-value { color: #212529; }
            .codigo { background: #dc3545; color: white; padding: 10px 20px; text-align: center; font-size: 24px; font-weight: bold; border-radius: 5px; margin: 20px 0; letter-spacing: 2px; }
            .footer { margin-top: 30px; padding: 15px; background: #f8f9fa; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d; }
            .plazo { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin: 15px 0; }
            .empresa-info { background: #e9ecef; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 LIBRO DE RECLAMACIONES VIRTUAL</h1>
              <h3>${empresa.razonSocial} - RUC: ${empresa.ruc}</h3>
            </div>
            
            <div class="codigo">
              CÓDIGO DE SEGUIMIENTO: ${codigoReclamo}
            </div>
            
            <div class="plazo">
              ⚠️ <strong>PLAZO DE RESPUESTA:</strong> 30 días hábiles según Ley del Consumidor (Artículo 63)
            </div>
            
            <div class="section">
              <h3 class="section-title">📄 INFORMACIÓN DEL REGISTRO</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Tipo:</span>
                  <span class="info-value">${obtenerTipoReclamoNombre(tipoReclamo)}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Fecha de registro:</span>
                  <span class="info-value">${fechaRegistro}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Fecha del hecho:</span>
                  <span class="info-value">${fechaHecho || 'No especificada'}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Monto reclamado:</span>
                  <span class="info-value">S/ ${montoReclamado || '0.00'}</span>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h3 class="section-title">👤 CONSUMIDOR RECLAMANTE</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Tipo Documento:</span>
                  <span class="info-value">${obtenerTipoDocumentoNombre(tipoDocumento)}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Número:</span>
                  <span class="info-value">${numeroDocumento}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Nombres:</span>
                  <span class="info-value">${nombres}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Apellidos:</span>
                  <span class="info-value">${apellidos}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Teléfono:</span>
                  <span class="info-value">${telefono || 'No especificado'}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email:</span>
                  <span class="info-value"><a href="mailto:${email}">${email}</a></span>
                </div>
              </div>
              <div class="info-item">
                <span class="info-label">Dirección completa:</span>
                <span class="info-value">${direccion}, ${distrito}, ${provincia}, ${departamento}</span>
              </div>
            </div>
            
            <div class="section">
              <h3 class="section-title">🛒 BIEN O SERVICIO RECLAMADO</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Descripción:</span>
                  <span class="info-value">${bienServicio}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Detalles:</span>
                  <span class="info-value">${descripcionBien}</span>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h3 class="section-title">📝 DETALLE DEL ${obtenerTipoReclamoNombre(tipoReclamo).toUpperCase()}</h3>
              <div class="info-item">
                <span class="info-label">Descripción:</span>
                <div class="info-value" style="white-space: pre-wrap; background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 5px;">
                  ${descripcion.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="section">
              <h3 class="section-title">✅ SOLUCIÓN ESPERADA</h3>
              <div class="info-item">
                <div class="info-value" style="white-space: pre-wrap; background: #f8f9fa; padding: 10px; border-radius: 5px;">
                  ${pedido?.replace(/\n/g, '<br>') || 'No especificado'}
                </div>
              </div>
            </div>
            
            <div class="section">
              <h3 class="section-title">📋 DECLARACIÓN DEL CONSUMIDOR</h3>
              <p>El consumidor ha declarado bajo fe de juramento que los datos consignados son correctos y fiel expresión de la verdad.</p>
              <p><strong>✔️ Aceptó los términos y condiciones</strong></p>
            </div>
            
            <div class="empresa-info">
              <h3>🏢 DATOS DEL PROVEEDOR</h3>
              <p><strong>Razón Social:</strong> ${empresa.razonSocial}</p>
              <p><strong>RUC:</strong> ${empresa.ruc}</p>
              <p><strong>Dirección:</strong> ${empresa.direccion}</p>
              <p><strong>Email:</strong> ${empresa.email}</p>
              <p><strong>Teléfono:</strong> ${empresa.telefono}</p>
            </div>
            
            <div class="footer">
              <p><strong>INFORMACIÓN LEGAL:</strong></p>
              <p>• Este reclamo/queja fue registrado en el Libro de Reclamaciones Virtual conforme a la Ley N° 29571 - Código de Protección y Defensa del Consumidor.</p>
              <p>• El proveedor tiene un plazo máximo de 30 días hábiles para responder, contados desde el día siguiente de la presentación.</p>
              <p>• La respuesta será enviada al correo electrónico: ${email}</p>
              <p>• Código único para seguimiento: <strong>${codigoReclamo}</strong></p>
              <p>• Fecha y hora de registro: ${fechaRegistro}</p>
              <hr>
              <p><em>SOFLENDIL S.A.C. - Sistema de Libro de Reclamaciones Virtual</em></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        LIBRO DE RECLAMACIONES VIRTUAL - ${empresa.razonSocial}
        ===========================================================
        
        CÓDIGO DE SEGUIMIENTO: ${codigoReclamo}
        Fecha de registro: ${fechaRegistro}
        Tipo: ${obtenerTipoReclamoNombre(tipoReclamo)}
        
        ⚠️ PLAZO DE RESPUESTA: 30 días hábiles según Ley del Consumidor
        
        INFORMACIÓN DEL CONSUMIDOR
        --------------------------
        Nombre completo: ${nombres} ${apellidos}
        Tipo Documento: ${obtenerTipoDocumentoNombre(tipoDocumento)}
        Número Documento: ${numeroDocumento}
        Teléfono: ${telefono || 'No especificado'}
        Email: ${email}
        Dirección: ${direccion}, ${distrito}, ${provincia}, ${departamento}
        
        BIEN O SERVICIO RECLAMADO
        -------------------------
        Descripción: ${bienServicio}
        Detalles: ${descripcionBien}
        Monto reclamado: S/ ${montoReclamado || '0.00'}
        Fecha del hecho: ${fechaHecho || 'No especificada'}
        
        DETALLE DEL ${obtenerTipoReclamoNombre(tipoReclamo).toUpperCase()}
        -----------------------------------------------------
        ${descripcion}
        
        SOLUCIÓN ESPERADA
        -----------------
        ${pedido || 'No especificado'}
        
        DECLARACIÓN
        -----------
        El consumidor ha declarado bajo fe de juramento que los datos 
        consignados son correctos y fiel expresión de la verdad.
        
        DATOS DEL PROVEEDOR
        -------------------
        Razón Social: ${empresa.razonSocial}
        RUC: ${empresa.ruc}
        Dirección: ${empresa.direccion}
        Email: ${empresa.email}
        Teléfono: ${empresa.telefono}
        
        INFORMACIÓN LEGAL
        -----------------
        • Este reclamo/queja fue registrado en el Libro de Reclamaciones Virtual
        conforme a la Ley N° 29571 - Código de Protección y Defensa del Consumidor.
        
        • El proveedor tiene un plazo máximo de 30 días hábiles para responder,
        contados desde el día siguiente de la presentación.
        
        • La respuesta será enviada al correo electrónico: ${email}
        
        • Código único para seguimiento: ${codigoReclamo}
        
        • Fecha y hora de registro: ${fechaRegistro}
        
        ---
        SOFLENDIL S.A.C. - Sistema de Libro de Reclamaciones Virtual
      `
    })
    
    if (emailEmpresa.error) {
      console.error('❌ Error al enviar email a la empresa:', emailEmpresa.error)
    } else {
      console.log('✅ Email enviado a la empresa')
    }
    
    // Enviar copia de confirmación al consumidor (opcional)
    if (email) {
      const emailConsumidor = await resend.emails.send({
        from: 'Libro de Reclamaciones SOFLENDIL <onboarding@resend.dev>',
        to: [email],
        subject: `✅ Confirmación de registro - Reclamo #${codigoReclamo}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #28a745;">✅ Su reclamo ha sido registrado exitosamente</h2>
            <p>Estimado(a) <strong>${nombres} ${apellidos}</strong>,</p>
            
            <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #28a745; margin: 20px 0;">
              <h3 style="margin-top: 0;">Código de seguimiento:</h3>
              <div style="font-size: 24px; font-weight: bold; color: #dc3545; letter-spacing: 2px;">
                ${codigoReclamo}
              </div>
            </div>
            
            <p>Hemos registrado su ${obtenerTipoReclamoNombre(tipoReclamo).toLowerCase()} en nuestro Libro de Reclamaciones Virtual. Los detalles son:</p>
            
            <ul>
              <li><strong>Fecha de registro:</strong> ${fechaRegistro}</li>
              <li><strong>Tipo:</strong> ${obtenerTipoReclamoNombre(tipoReclamo)}</li>
              <li><strong>Plazo de respuesta:</strong> 30 días hábiles</li>
              <li><strong>Medio de respuesta:</strong> Correo electrónico</li>
            </ul>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="margin-top: 0;">📋 Información importante:</h4>
              <p>Puede realizar seguimiento de su reclamo utilizando el código proporcionado.</p>
              <p>La respuesta será enviada al correo: <strong>${email}</strong></p>
            </div>
            
            <p>Atentamente,<br>
            <strong>${empresa.razonSocial}</strong><br>
            RUC: ${empresa.ruc}</p>
            
            <hr style="margin: 30px 0;">
            <p style="font-size: 12px; color: #6c757d;">
              Este es un correo automático de confirmación. Por favor no responda a este mensaje.
            </p>
          </div>
        `,
        text: `
          ✅ CONFIRMACIÓN DE REGISTRO - LIBRO DE RECLAMACIONES
        
          Estimado(a) ${nombres} ${apellidos},
        
          Hemos registrado su ${obtenerTipoReclamoNombre(tipoReclamo).toLowerCase()} en nuestro 
          Libro de Reclamaciones Virtual conforme a la normativa vigente.
        
          CÓDIGO DE SEGUIMIENTO: ${codigoReclamo}
          Fecha de registro: ${fechaRegistro}
          Tipo: ${obtenerTipoReclamoNombre(tipoReclamo)}
          Plazo de respuesta: 30 días hábiles
          Medio de respuesta: Correo electrónico
        
          INFORMACIÓN IMPORTANTE:
          - Puede realizar seguimiento de su reclamo utilizando el código proporcionado.
          - La respuesta será enviada al correo: ${email}
          - Recuerde conservar este código para futuras consultas.
        
          Atentamente,
          ${empresa.razonSocial}
          RUC: ${empresa.ruc}
          
          ---
          Este es un correo automático de confirmación.
        `
      })
      
      if (emailConsumidor.error) {
        console.error('⚠️ Error al enviar email de confirmación:', emailConsumidor.error)
      } else {
        console.log('✅ Email de confirmación enviado al consumidor')
      }
    }
    
    console.log('🎉 Reclamo registrado exitosamente:', codigoReclamo)
    
    return new Response(
      JSON.stringify({
        success: true,
        codigoReclamo: codigoReclamo,
        message: `Su ${obtenerTipoReclamoNombre(tipoReclamo).toLowerCase()} ha sido registrado exitosamente en el Libro de Reclamaciones Virtual.`,
        informacion: {
          plazoRespuesta: '30 días hábiles',
          medioRespuesta: 'Correo electrónico',
          fechaRegistro: fechaRegistro,
          contactoEmpresa: empresa.email
        },
        legal: {
          ley: 'Ley N° 29571 - Código de Protección y Defensa del Consumidor',
          articulo: 'Artículo 63',
          reglamento: 'Reglamento del Libro de Reclamaciones (D.S. N° 001-2010-PCM)'
        }
      }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    )
    
  } catch (error) {
    console.error('❌ Error en API de Libro de Reclamaciones:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error interno del servidor. Por favor, inténtelo más tarde.',
        recomendacion: 'Si el problema persiste, puede presentar su reclamo directamente en nuestro establecimiento físico.'
      }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    )
  }
}