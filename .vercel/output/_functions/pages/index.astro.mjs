import { e as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_DMru0Gpx.mjs';
import 'piccolore';
import { $ as $$Carrusel, P as Productos, C as Contacto } from '../chunks/Contacto_CccL-CDR.mjs';
import 'clsx';
/* empty css                                 */
import { d as datosNosotros, $ as $$Layout } from '../chunks/Layout_Caz5SSO4.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
export { renderers } from '../renderers.mjs';

const fondos = ["/Inicio/imagen-web-1---22.12.gif","/Inicio/horno.avif"];
const titulo = "Bienvenido a Nuestra Empresa";
const subtitulo = "Soluciones domesticas, comerciales e industriales de alta calidad, con +2 años de experiencia";
const botones = {"contacto":{"texto":"CONTACTANOS"},"servicios":{"texto":"SERVICIOS"}};
const datosInicio = {
  fondos,
  titulo,
  subtitulo,
  botones,
};

const $$Inicio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden" data-astro-cid-ic2x36vr> <!-- Carrusel de fondos --> <div class="absolute inset-0 z-0" data-astro-cid-ic2x36vr> <!-- Contenedor para el carrusel --> <div class="relative w-full h-full" data-astro-cid-ic2x36vr> ${datosInicio.fondos.map((fondo, index) => renderTemplate`<div${addAttribute(`slide-${index}`, "id")}${addAttribute(`absolute inset-0 transition-all duration-5000 ease-in-out ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")}${addAttribute(`
              background-image: url('${fondo}');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            `, "style")} data-astro-cid-ic2x36vr> <!-- Overlay fijo --> <div class="absolute inset-0 bg-black/50 md:bg-black/60" data-astro-cid-ic2x36vr></div> </div>`)} </div> </div> <!-- Contenido --> <div class="container relative z-10 text-center text-white px-4 py-8 md:py-16 lg:py-20" data-astro-cid-ic2x36vr> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 tracking-tight opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]" style="transform: translateY(30px); text-shadow: 0 10px 30px rgba(0,0,0,0.3);" data-astro-cid-ic2x36vr> <span class="bg-primary text-white from-white via-primary/30 to-white bg-clip-text  animate-background-shine " data-astro-cid-ic2x36vr> ${datosInicio.titulo} </span> </h1> <!-- Subtítulo --> <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-2 sm:px-4 opacity-0 animate-[fade-in_1.2s_ease-out_0.8s_forwards]" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);" data-astro-cid-ic2x36vr> ${datosInicio.subtitulo} </p> <!-- Botones --> <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-[fade-in-up_0.8s_ease-out_1s_forwards] opacity-0 px-2 sm:px-0" data-astro-cid-ic2x36vr> <a href="#contacto" class="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 md:py-5 bg-gradient-to-br from-white to-gray-100 text-primary font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95" data-astro-cid-ic2x36vr> <span class="relative z-10 flex items-center justify-center gap-2 sm:gap-3" data-astro-cid-ic2x36vr> ${datosInicio.botones.contacto.texto} <span class="group-hover:translate-x-2 transition-transform duration-300" data-astro-cid-ic2x36vr>→</span> </span> <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity duration-300" data-astro-cid-ic2x36vr></div> </a> <a href="#Nosotros" class="group relative w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 md:py-5 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-white/20 hover:border-white/50" data-astro-cid-ic2x36vr> <span class="relative z-10 flex items-center justify-center gap-2 sm:gap-3" data-astro-cid-ic2x36vr> ${datosInicio.botones.servicios.texto} <span class="group-hover:rotate-90 transition-transform duration-300" data-astro-cid-ic2x36vr>+</span> </span> </a> </div> <!-- Estadísticas --> <div class="mt-10 sm:mt-14 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]" data-astro-cid-ic2x36vr> <div class="text-center sm:min-w-0 px-2" data-astro-cid-ic2x36vr> <div class="text-2xl sm:text-3xl font-bold mb-1 animate-pulse" data-astro-cid-ic2x36vr>500+</div> <div class="text-xs sm:text-sm text-white/70" data-astro-cid-ic2x36vr>Clientes Satisfechos</div> </div> <div class="text-center sm:min-w-0 px-2" data-astro-cid-ic2x36vr> <div class="text-2xl sm:text-3xl font-bold mb-1 animate-pulse" style="animation-delay: 0.2s" data-astro-cid-ic2x36vr>100%</div> <div class="text-xs sm:text-sm text-white/70" data-astro-cid-ic2x36vr>Tasa de Éxito</div> </div> <div class="text-center sm:min-w-0 px-2" data-astro-cid-ic2x36vr> <div class="text-2xl sm:text-3xl font-bold mb-1 animate-pulse" style="animation-delay: 0.4s" data-astro-cid-ic2x36vr>24/7</div> <div class="text-xs sm:text-sm text-white/70" data-astro-cid-ic2x36vr>Soporte Disponible</div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/edwar/proyectos/my-project/src/components/Inicio.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/edwar/proyectos/my-project/src/components/Inicio.astro", void 0);

function Formulario() {
  const [loading, setLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: "" });
  const [archivo, setArchivo] = useState(null);
  const fileInputRef = React.useRef(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      tecnico: "Selecciona una profesión",
      distrito: "Selecciona tu distrito",
      experiencia: "Selecciona tu experiencia",
      mensaje: ""
    }
  });
  const tecnico = [
    "Refrigeración",
    "Aire acondicionado y Climatizacion"
  ];
  const distritos = [
    "Selecciona tu distrito",
    "Lima Centro",
    "Miraflores",
    "San Isidro",
    "Barranco",
    "Surco",
    "La Molina",
    "San Borja",
    "Jesús María",
    "Lince",
    "Pueblo Libre",
    "Magdalena",
    "San Miguel",
    "Callao",
    "Ventanilla",
    "Puente Piedra",
    "Los Olivos",
    "Comas",
    "Independencia",
    "San Martín de Porres",
    "Rímac",
    "El Agustino",
    "San Juan de Lurigancho",
    "Ate",
    "Chorrillos",
    "Villa El Salvador",
    "Villa María del Triunfo",
    "San Juan de Miraflores",
    "Otro"
  ];
  const nivelesExperiencia = [
    "Selecciona tu experiencia",
    "Sin experiencia",
    "Menos de 1 año",
    "1-3 años",
    "3-5 años",
    "Más de 5 años",
    "Más de 10 años"
  ];
  useEffect(() => {
    const modal = document.getElementById("modalFormulario");
    const handleModalOpen = () => {
      if (modal && !modal.classList.contains("hidden")) {
        reset();
        setArchivo(null);
        setSubmitResult({ success: false, message: "" });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          handleModalOpen();
        }
      });
    });
    if (modal) {
      observer.observe(modal, { attributes: true });
      handleModalOpen();
    }
    return () => {
      if (modal) observer.disconnect();
    };
  }, [reset]);
  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitResult({ success: false, message: "" });
    try {
      if (!data.nombre.trim()) {
        throw new Error("El nombre es requerido");
      }
      if (!data.email.trim()) {
        throw new Error("El email es requerido");
      }
      if (!data.tecnico || data.tecnico === "Selecciona una profesión") {
        throw new Error("Por favor selecciona una profesión");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error("Por favor ingresa un email válido");
      }
      if (archivo) {
        if (archivo.type !== "application/pdf") {
          throw new Error("Solo se permiten archivos PDF");
        }
        const maxSize = 5 * 1024 * 1024;
        if (archivo.size > maxSize) {
          throw new Error("El archivo no debe exceder los 5MB");
        }
      }
      const formData = new FormData();
      formData.append("nombre", data.nombre.trim());
      formData.append("email", data.email.trim());
      formData.append("telefono", data.telefono?.trim() || "");
      formData.append("tecnico", data.tecnico);
      formData.append("distrito", data.distrito || "");
      formData.append("experiencia", data.experiencia || "");
      formData.append("mensaje", data.mensaje?.trim() || "");
      if (archivo) {
        formData.append("archivo", archivo);
      }
      const response = await fetch("/api/TrabajoNosotrosSend", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Error al enviar la solicitud");
      }
      setSubmitResult({
        success: true,
        message: result.message || "¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto."
      });
      setTimeout(() => {
        const modal = document.getElementById("modalFormulario");
        if (modal) modal.classList.add("hidden");
        reset();
        setArchivo(null);
        setSubmitResult({ success: false, message: "" });
      }, 3e3);
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error.message || "Error al enviar el formulario. Por favor intenta nuevamente."
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6", children: [
    submitResult.message && /* @__PURE__ */ jsx("div", { className: `p-4 rounded-xl ${submitResult.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`, children: submitResult.message }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "nombre", className: "block text-sm font-medium text-gray-700 mb-2", children: "Nombre Completo *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "nombre",
            ...register("nombre", {
              required: "El nombre es requerido",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres"
              }
            }),
            disabled: loading,
            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
            placeholder: "Tu nombre completo"
          }
        ),
        errors.nombre && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.nombre.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            ...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Por favor ingresa un email válido"
              }
            }),
            disabled: loading,
            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
            placeholder: "tu@email.com"
          }
        ),
        errors.email && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.email.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "telefono", className: "block text-sm font-medium text-gray-700 mb-2", children: "Teléfono" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            id: "telefono",
            ...register("telefono"),
            disabled: loading,
            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
            placeholder: "+51 999 999 999"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "tecnico", className: "block text-sm font-medium text-gray-700 mb-2", children: "tecnico *" }),
        /* @__PURE__ */ jsx(
          Controller,
          {
            name: "tecnico",
            control,
            rules: { validate: (value) => value !== "Selecciona una profesión" || "Por favor selecciona una profesión" },
            render: ({ field }) => /* @__PURE__ */ jsx(
              "select",
              {
                id: "tecnico",
                ...field,
                disabled: loading,
                className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
                children: tecnico.map((prof, index) => /* @__PURE__ */ jsx("option", { value: prof, children: prof }, index))
              }
            )
          }
        ),
        errors.tecnico && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.tecnico.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "distrito", className: "block text-sm font-medium text-gray-700 mb-2", children: "Distrito" }),
        /* @__PURE__ */ jsx(
          Controller,
          {
            name: "distrito",
            control,
            render: ({ field }) => /* @__PURE__ */ jsx(
              "select",
              {
                id: "distrito",
                ...field,
                disabled: loading,
                className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
                children: distritos.map((distrito, index) => /* @__PURE__ */ jsx("option", { value: distrito, children: distrito }, index))
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "experiencia", className: "block text-sm font-medium text-gray-700 mb-2", children: "Nivel de Experiencia" }),
        /* @__PURE__ */ jsx(
          Controller,
          {
            name: "experiencia",
            control,
            render: ({ field }) => /* @__PURE__ */ jsx(
              "select",
              {
                id: "experiencia",
                ...field,
                disabled: loading,
                className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
                children: nivelesExperiencia.map((nivel, index) => /* @__PURE__ */ jsx("option", { value: nivel, children: nivel }, index))
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "mensaje", className: "block text-sm font-medium text-gray-700 mb-2", children: "Mensaje o Comentarios Adicionales" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "mensaje",
          ...register("mensaje"),
          rows: "4",
          disabled: loading,
          className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
          placeholder: "Cuéntanos más sobre ti, tus habilidades o por qué te interesa trabajar con nosotros..."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center",
          children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ] }),
            "Enviando..."
          ] }) : "Enviar Solicitud"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 text-center mt-3", children: "* Campos obligatorios" })
    ] })
  ] });
}

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Modal del Formulario -->${maybeRenderHead()}<div id="modalFormulario" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-astro-cid-zetw4zt5> <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-zetw4zt5> <div class="p-6" data-astro-cid-zetw4zt5> <div class="flex justify-between items-center mb-6" data-astro-cid-zetw4zt5> <h3 class="text-2xl font-bold text-gray-800" data-astro-cid-zetw4zt5>Trabaja con Nosotros</h3> <button onclick="document.getElementById('modalFormulario').classList.add('hidden')" class="text-gray-500 hover:text-gray-700 text-2xl" data-astro-cid-zetw4zt5>
&times;
</button> </div> ${renderComponent($$result, "Formulario", Formulario, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/nosotros/Formulario.jsx", "client:component-export": "default", "data-astro-cid-zetw4zt5": true })} </div> </div> </div> <!-- Sección principal - Minimalista pero impactante --> <section id="Nosotros" class="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-white to-gray-50" data-astro-cid-zetw4zt5> <!-- Elementos decorativos de fondo --> <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-32 translate-x-32" data-astro-cid-zetw4zt5></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-48 -translate-x-48" data-astro-cid-zetw4zt5></div> <div class="container relative" data-astro-cid-zetw4zt5> <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-astro-cid-zetw4zt5> <!-- Texto - Animaciones sutiles --> <div class="opacity-0 animate-[fade-in-right_0.8s_ease-out_forwards]" data-astro-cid-zetw4zt5> <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight" data-astro-cid-zetw4zt5> <span class="bg-gradient-to-r text-black from-primary via-primary/80 to-primary bg-clip-text " data-astro-cid-zetw4zt5> ${datosNosotros.titulo} </span> </h1> <p class="text-lg text-gray-600 mb-8 leading-relaxed opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]" data-astro-cid-zetw4zt5> ${datosNosotros.contenido} </p> <!-- Logros en grid compacto --> <div class="grid grid-cols-2 gap-4 mb-8" data-astro-cid-zetw4zt5> ${datosNosotros.logros.map((logro, index) => renderTemplate`<div class="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow opacity-0"${addAttribute(`animation: fade-in-up 0.6s ease-out ${0.3 + index * 0.1}s forwards`, "style")} data-astro-cid-zetw4zt5> <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0" data-astro-cid-zetw4zt5> <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-zetw4zt5> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-zetw4zt5></path> </svg> </div> <span class="text-sm font-medium text-gray-800" data-astro-cid-zetw4zt5>${logro}</span> </div>`)} </div> <!-- Botón Trabaja con Nosotros - Abre Modal --> <button onclick="document.getElementById('modalFormulario').classList.remove('hidden')" class="group relative inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer" data-astro-cid-zetw4zt5> <span class="relative z-10" data-astro-cid-zetw4zt5>Trabaja con Nosotros</span> <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-zetw4zt5></div> <div class="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" data-astro-cid-zetw4zt5></div> </button> </div> <!-- Imagen con efecto flotante --> <div class="relative opacity-0 animate-[fade-in-left_0.8s_ease-out_0.3s_forwards]" data-astro-cid-zetw4zt5> <div class="relative overflow-hidden rounded-2xl shadow-xl group transition-all duration-500 ease-out" data-astro-cid-zetw4zt5> <img${addAttribute(datosNosotros.foto, "src")} alt="Equipo de trabajo" class="w-full h-auto transform group-hover:scale-[1.02] transition-all duration-700 ease-out" data-astro-cid-zetw4zt5> <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" data-astro-cid-zetw4zt5></div> </div> <!-- Sello flotante --> <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300" data-astro-cid-zetw4zt5> <div class="text-center" data-astro-cid-zetw4zt5> <div class="text-3xl font-black text-primary mb-1" data-astro-cid-zetw4zt5>${datosNosotros.sello.numero}</div> <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-astro-cid-zetw4zt5>${datosNosotros.sello.texto}</div> </div> </div> </div> </div> <!-- Servicios en cards compactas --> <div class="mt-20 lg:mt-32" data-astro-cid-zetw4zt5> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-zetw4zt5> ${datosNosotros.servicios.map((servicio, index) => renderTemplate`<a${addAttribute(servicio.url, "href")} class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-72 block" style="view-transition-name: card-{index};" data-astro-cid-zetw4zt5> <img${addAttribute(servicio.img, "src")}${addAttribute(servicio.titulo, "alt")} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-500 ease-out"${addAttribute(`view-transition-name: servicio-titulo-${index};`, "style")} data-astro-cid-zetw4zt5> <!-- Overlay con gradiente --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" data-astro-cid-zetw4zt5></div> <!-- Contenido siempre visible pero con hover --> <div class="absolute inset-0 flex flex-col justify-end p-6 text-white" data-astro-cid-zetw4zt5> <h3 class="text-xl font-bold mb-2 transform group-hover:translate-y-0 transition-transform duration-300" style="view-transition-name: servicio-titulo-{index};" data-astro-cid-zetw4zt5> ${servicio.titulo} </h3> <div class="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-zetw4zt5> <span class="mr-2" data-astro-cid-zetw4zt5>Ver detalles</span> <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zetw4zt5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-zetw4zt5></path> </svg> </div> </div> </a>`)} </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/edwar/proyectos/my-project/src/components/Nosotros.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/edwar/proyectos/my-project/src/components/Nosotros.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio - Mi Sitio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Inicio", $$Inicio, {})} ${renderComponent($$result2, "Nosotros", $$Nosotros, {})} ${renderComponent($$result2, "Carrusel", $$Carrusel, {})} ${renderComponent($$result2, "Productos", Productos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/Productos.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Contacto", Contacto, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/Contacto.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/edwar/proyectos/my-project/src/pages/index.astro", void 0);

const $$file = "C:/Users/edwar/proyectos/my-project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
