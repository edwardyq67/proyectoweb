// src/pages/api/send.ts
export const prerender = false

import type { APIRoute } from "astro"
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    
    const nombre = formData.get('nombre') as string
    const email = formData.get('email') as string
    const telefono = formData.get('telefono') as string
    const mensaje = formData.get('mensaje') as string
    const estado = formData.get('estado') as string || 'Solicita Servicio'
    
    console.log('📩 Datos recibidos:', { nombre, email, telefono, estado })
    
    // Validación
    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Nombre, email y mensaje son requeridos'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // USAR UN DOMINIO VERIFICADO DE RESEND (onboarding@resend.dev)
    const { error } = await resend.emails.send({
      from: 'TekniSolutions Web <onboarding@resend.dev>', // 👈 Dominio verificado por Resend
      to: ['servicios@teknisolutions.pe'],
      subject: `📧 Contacto web: ${nombre} - ${estado}`,
      html: `
        <h3>📨 Nuevo mensaje desde la web</h3>
        <p><strong>👤 Nombre:</strong> ${nombre}</p>
        <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>📞 Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>📋 Tipo:</strong> ${estado}</p>
        <p><strong>💬 Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>📅 Enviado: ${new Date().toLocaleString('es-PE')}</small></p>
      `,
      text: `
        NUEVO CONTACTO - TEKNISOLUTIONS
        ================================
        
        👤 Nombre: ${nombre}
        📧 Email: ${email}
        📞 Teléfono: ${telefono || 'No proporcionado'}
        📋 Tipo: ${estado}
        
        💬 Mensaje:
        ${mensaje}
        
        ---
        📅 Fecha: ${new Date().toLocaleString('es-PE')}
      `
    })
    
    if (error) {
      console.error('Error Resend:', error)
      throw new Error('Error al enviar el email')
    }
    
    console.log('✅ Email enviado exitosamente a servicios@teknisolutions.pe')
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
    
  } catch (error) {
    console.error('Error en API:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error interno del servidor'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}