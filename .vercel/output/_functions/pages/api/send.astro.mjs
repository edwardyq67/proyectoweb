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
    const mensaje = formData.get("mensaje");
    const estado = formData.get("estado") || "Solicita Servicio";
    console.log("📩 Datos recibidos:", { nombre, email, telefono, estado });
    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Nombre, email y mensaje son requeridos"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { error } = await resend.emails.send({
      from: "TekniSolutions Web <onboarding@resend.dev>",
      // 👈 Dominio verificado por Resend
      to: ["servicios@teknisolutions.pe"],
      subject: `📧 Contacto web: ${nombre} - ${estado}`,
      html: `
        <h3>📨 Nuevo mensaje desde la web</h3>
        <p><strong>👤 Nombre:</strong> ${nombre}</p>
        <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>📞 Teléfono:</strong> ${telefono || "No proporcionado"}</p>
        <p><strong>📋 Tipo:</strong> ${estado}</p>
        <p><strong>💬 Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>📅 Enviado: ${(/* @__PURE__ */ new Date()).toLocaleString("es-PE")}</small></p>
      `,
      text: `
        NUEVO CONTACTO - TEKNISOLUTIONS
        ================================
        
        👤 Nombre: ${nombre}
        📧 Email: ${email}
        📞 Teléfono: ${telefono || "No proporcionado"}
        📋 Tipo: ${estado}
        
        💬 Mensaje:
        ${mensaje}
        
        ---
        📅 Fecha: ${(/* @__PURE__ */ new Date()).toLocaleString("es-PE")}
      `
    });
    if (error) {
      console.error("Error Resend:", error);
      throw new Error("Error al enviar el email");
    }
    console.log("✅ Email enviado exitosamente a servicios@teknisolutions.pe");
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente. Te contactaremos pronto."
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error en API:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor"
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
