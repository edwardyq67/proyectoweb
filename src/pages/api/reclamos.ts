// src/pages/api/reclamos.ts
export const prerender = false

import type { APIRoute } from "astro"
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    
    // Datos personales
    const nombre = formData.get('nombre') as string
    const apellidos = formData.get('apellidos') as string
    const dni = formData.get('dni') as string
    const telefono = formData.get('telefono') as string
    const email = formData.get('email') as string
    
    // Dirección
    const departamento = formData.get('departamento') as string
    const provincia = formData.get('provincia') as string
    const direccion = formData.get('direccion') as string
    
    // Detalles del reclamo
    const tipoReclamo = formData.get('tipoReclamo') as string
    const descripcion = formData.get('descripcion') as string
    const pedido = formData.get('pedido') as string
    
    // Generar número de ticket
    const ticketNumber = 'REC-' + Date.now().toString().slice(-6)
    
    console.log('📋 Reclamo recibido:', { 
      ticketNumber, 
      nombre, 
      email, 
      tipoReclamo 
    })
    
    // Validación básica
    if (!nombre?.trim() || !email?.trim() || !descripcion?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Nombre, email y descripción son requeridos'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    if (descripcion.length > 500) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'La descripción no puede exceder los 500 caracteres'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // Enviar email similar al send.ts
    const { error } = await resend.emails.send({
      from: 'TekniSolutions Reclamos <onboarding@resend.dev>',
      to: ['servicios@teknisolutions.pe'], // Cambia este email
      replyTo: email,
      subject: `🚨 NUEVO RECLAMO #${ticketNumber} - ${tipoReclamo}`,
      html: `
        <h2>🚨 NUEVO RECLAMO REGISTRADO</h2>
        <p><strong>Número de Ticket:</strong> ${ticketNumber}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-PE')}</p>
        
        <h3>👤 Información Personal</h3>
        <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
        <p><strong>DNI/CE:</strong> ${dni}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        
        <h3>📍 Dirección</h3>
        <p><strong>Departamento:</strong> ${departamento}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        
        <h3>📝 Detalles del Reclamo</h3>
        <p><strong>Tipo:</strong> ${tipoReclamo}</p>
        
        <h4>Descripción:</h4>
        <p>${descripcion.replace(/\n/g, '<br>')}</p>
        
        ${pedido ? `
          <h4>Solución esperada:</h4>
          <p>${pedido.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        <hr>
        <p><small>📅 Enviado: ${new Date().toLocaleString('es-PE')}</small></p>
      `,
      text: `
        NUEVO RECLAMO - TEKNISOLUTIONS
        ================================
        
        Número de Ticket: ${ticketNumber}
        Fecha: ${new Date().toLocaleString('es-PE')}
        
        INFORMACIÓN PERSONAL
        --------------------
        Nombre: ${nombre} ${apellidos}
        DNI/CE: ${dni}
        Teléfono: ${telefono}
        Email: ${email}
        
        DIRECCIÓN
        ---------
        Departamento: ${departamento}
        Provincia: ${provincia}
        Dirección: ${direccion}
        
        DETALLES DEL RECLAMO
        --------------------
        Tipo: ${tipoReclamo}
        
        Descripción:
        ${descripcion}
        
        ${pedido ? `Solución esperada:\n${pedido}\n` : ''}
        
        ---
        📅 Enviado: ${new Date().toLocaleString('es-PE')}
      `
    })
    
    if (error) {
      console.error('❌ Error Resend:', error)
      throw new Error('Error al enviar el email')
    }
    
    console.log('✅ Email enviado exitosamente')
    
    return new Response(
      JSON.stringify({
        success: true,
        ticketNumber: ticketNumber,
        message: 'Reclamo enviado correctamente. Te contactaremos pronto.',
        fecha: new Date().toLocaleString('es-PE')
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
    
  } catch (error) {
    console.error('❌ Error en API de Reclamos:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error interno del servidor. Por favor, inténtalo más tarde.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}