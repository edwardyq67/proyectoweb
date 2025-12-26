import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_K98AzUHi_4ypQjBoPEHqbi3fyXiF36poZ");
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const profesion = formData.get("profesion");
    const distrito = formData.get("distrito");
    const experiencia = formData.get("experiencia");
    const mensaje = formData.get("mensaje");
    const archivo = formData.get("archivo");
    console.log("💼 Solicitud de trabajo recibida:", {
      nombre,
      email,
      profesion,
      distrito
    });
    if (!nombre?.trim() || !email?.trim() || !profesion?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Nombre, email y profesión son requeridos"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (archivo && archivo.size > 0) {
      if (archivo.type !== "application/pdf") {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Solo se permiten archivos PDF"
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      const maxSize = 5 * 1024 * 1024;
      if (archivo.size > maxSize) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "El archivo no debe exceder los 5MB"
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          💼 Nueva Solicitud de Trabajo - TekniSolutions
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">👤 Nombre:</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">📧 Email:</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">📞 Teléfono:</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${telefono || "No proporcionado"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">💼 Profesión:</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${profesion}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">📍 Distrito:</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${distrito || "No especificado"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">🎯 Experiencia:</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${experiencia || "No especificada"}</td>
          </tr>
        </table>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #475569;">📝 Mensaje:</h3>
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            ${mensaje?.replace(/\n/g, "<br>") || "Sin mensaje adicional"}
          </div>
        </div>
    `;
    if (archivo && archivo.size > 0) {
      const fileSizeKB = (archivo.size / 1024).toFixed(2);
      emailContent += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f0f9ff; border-radius: 8px; border: 1px solid #bae6fd;">
          <strong>📎 Archivo adjunto:</strong> ${archivo.name}<br>
          <small>Tamaño: ${fileSizeKB} KB</small>
        </div>
      `;
    }
    emailContent += `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
          📅 Enviado: ${(/* @__PURE__ */ new Date()).toLocaleString("es-PE")}<br>
          🔗 Formulario: Trabaja con Nosotros
        </div>
      </div>
    `;
    const { error } = await resend.emails.send({
      from: "TekniSolutions Trabajo <onboarding@resend.dev>",
      to: ["servicios@teknisolutions.pe"],
      subject: `💼 Nueva Solicitud: ${nombre} - ${profesion}`,
      html: emailContent,
      text: `
NUEVA SOLICITUD DE TRABAJO - TEKNISOLUTIONS
===========================================

👤 Nombre: ${nombre}
📧 Email: ${email}
📞 Teléfono: ${telefono || "No proporcionado"}
💼 Profesión: ${profesion}
📍 Distrito: ${distrito || "No especificado"}
🎯 Experiencia: ${experiencia || "No especificada"}

📝 Mensaje:
${mensaje || "Sin mensaje adicional"}

${archivo && archivo.size > 0 ? `📎 Archivo adjunto: ${archivo.name}` : ""}

---
📅 Fecha: ${(/* @__PURE__ */ new Date()).toLocaleString("es-PE")}
🔗 Formulario: Trabaja con Nosotros
      `
    });
    if (error) {
      console.error("❌ Error Resend:", error);
      throw new Error("Error al enviar el email");
    }
    console.log("✅ Solicitud de trabajo enviada exitosamente a servicios@teknisolutions.pe");
    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto."
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Error en API TrabajoNosotros:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor. Por favor intenta nuevamente."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
