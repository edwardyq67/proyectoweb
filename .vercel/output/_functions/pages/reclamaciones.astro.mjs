import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_DMru0Gpx.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Caz5SSO4.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { FaFileInvoice, FaExclamationCircle, FaStore, FaCheck, FaUser, FaIdCard, FaPhone, FaEnvelope, FaHome, FaBuilding, FaMoneyBillWave, FaClipboardList, FaInfoCircle, FaFileAlt, FaRegCheckCircle, FaShieldAlt, FaSpinner, FaPaperPlane } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

function Reclamaciones() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");
  const [descripcionLength, setDescripcionLength] = useState(0);
  const [tipoDocumento, setTipoDocumento] = useState("dni");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTicketNumber("");
    try {
      const formData = new FormData(e.target);
      const descripcion = formData.get("descripcion");
      if (descripcion.length > 1e3) {
        alert("La descripción no puede exceder los 1000 caracteres");
        setIsSubmitting(false);
        return;
      }
      const response = await fetch("/api/reclamos", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitStatus("success");
          setTicketNumber(result.codigoReclamo);
          e.target.reset();
          setDescripcionLength(0);
          alert(`✅ Reclamo registrado exitosamente
Código de seguimiento: ${result.codigoReclamo}
Se ha enviado una copia a su correo electrónico.`);
        } else {
          setSubmitStatus("error");
          alert(result.message || "Error al procesar el reclamo");
        }
      } else {
        setSubmitStatus("error");
        alert("Error en la conexión con el servidor");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      alert("Error al enviar el reclamo. Por favor, intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const tiposDocumento = [
    { value: "dni", label: "DNI" },
    { value: "ruc", label: "RUC" },
    { value: "ce", label: "Carnet de Extranjería" },
    { value: "pasaporte", label: "Pasaporte" }
  ];
  const departamentos = [
    { value: "", label: "Selecciona departamento" },
    { value: "lima", label: "Lima" },
    { value: "arequipa", label: "Arequipa" },
    { value: "cuzco", label: "Cuzco" },
    { value: "piura", label: "Piura" },
    { value: "lambayeque", label: "Lambayeque" },
    { value: "la libertad", label: "La Libertad" },
    { value: "junin", label: "Junín" },
    { value: "ancash", label: "Áncash" },
    { value: "ica", label: "Ica" },
    { value: "tacna", label: "Tacna" },
    { value: "otros", label: "Otros" }
  ];
  const tiposReclamo = [
    { value: "reclamo", label: "Reclamo" },
    { value: "queja", label: "Queja" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "container bg-white rounded-xl shadow-lg p-6 md:p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 border-b pb-6", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: [
        /* @__PURE__ */ jsx(FaFileInvoice, { className: "inline mr-3 text-primary" }),
        "Libro de Reclamaciones Virtual"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Conforme a lo establecido en el Código de Protección y Defensa del Consumidor esta tienda cuenta con un Libro de Reclamaciones Virtual a tu disposición." }),
      /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left", children: /* @__PURE__ */ jsxs("p", { className: "text-yellow-700 font-medium flex items-center", children: [
        /* @__PURE__ */ jsx(FaExclamationCircle, { className: "mr-2" }),
        "Los campos marcados con (*) son obligatorios."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(FaStore, { className: "text-blue-600" }),
        "Datos de la empresa"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700", children: "Razón social del proveedor:" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-gray-900", children: "Teknisolutions S.A.C" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700", children: "R.U.C.:" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-gray-900", children: "N° 20611923679" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700", children: "Dirección del Establecimiento:" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: "CAL.MARIA JOSE DE ARCE NRO. 261 URB. MARANGA ET. UNO LIMA - LIMA - SAN MIGUEL" })
        ] })
      ] })
    ] }),
    submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "mb-6 p-6 bg-green-50 border-2 border-green-300 rounded-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx(FaCheck, { className: "text-3xl text-green-600 mt-1" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-green-800 mb-2", children: "¡Reclamo registrado exitosamente!" }),
        ticketNumber && /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-green-700 font-medium", children: "Código de seguimiento:" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-green-800 tracking-wider", children: ticketNumber })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-green-700", children: "Se ha enviado una copia de su reclamo al correo electrónico proporcionado. Puede realizar el seguimiento con el código proporcionado." })
      ] })
    ] }) }),
    submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "mb-6 p-6 bg-red-50 border-2 border-red-300 rounded-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx(FaExclamationCircle, { className: "text-3xl text-red-600 mt-1" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-red-800 mb-2", children: "Error al registrar el reclamo" }),
        /* @__PURE__ */ jsx("p", { className: "text-red-700", children: "Por favor, verifique los datos ingresados e intente nuevamente. Si el problema persiste, contáctenos por teléfono." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FaUser, { className: "text-primary text-2xl" }),
          "Información del Consumidor Reclamante"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaIdCard, { className: "text-gray-500" }),
              "Tipo de Documento *"
            ] }),
            /* @__PURE__ */ jsx(
              "select",
              {
                name: "tipoDocumento",
                required: true,
                value: tipoDocumento,
                onChange: (e) => setTipoDocumento(e.target.value),
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white",
                children: tiposDocumento.map((tipo) => /* @__PURE__ */ jsx("option", { value: tipo.value, children: tipo.label }, tipo.value))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaIdCard, { className: "text-gray-500" }),
              "Número de Documento *"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "numeroDocumento",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: tipoDocumento === "ruc" ? "Ingrese su RUC" : "Ingrese su documento",
                maxLength: tipoDocumento === "ruc" ? "11" : "12"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaUser, { className: "text-gray-500" }),
              "Nombres *"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "nombres",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: "Ingresa tus nombres completos"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaUser, { className: "text-gray-500" }),
              "Apellidos *"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "apellidos",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: "Ingresa tus apellidos completos"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaPhone, { className: "text-gray-500" }),
              "Teléfono / Celular *"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                name: "telefono",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: "Ingresa tu número de contacto"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaEnvelope, { className: "text-gray-500" }),
              "Correo Electrónico *"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: "ejemplo@correo.com"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FaHome, { className: "text-gray-500" }),
              "Dirección Completa *"
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "direccion",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: "Calle, número, urbanización, referencia"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(FaBuilding, { className: "text-gray-500" }),
                "Departamento *"
              ] }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  name: "departamento",
                  required: true,
                  className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white",
                  children: departamentos.map((depto) => /* @__PURE__ */ jsx("option", { value: depto.value, children: depto.label }, depto.value))
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(FaBuilding, { className: "text-gray-500" }),
                "Provincia *"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "provincia",
                  required: true,
                  className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                  placeholder: "Ingresa provincia"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(FaBuilding, { className: "text-gray-500" }),
                "Distrito *"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "distrito",
                  required: true,
                  className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                  placeholder: "Ingresa distrito"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FaMoneyBillWave, { className: "text-primary text-2xl" }),
          "Identificación del Bien Contratado"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Bien o Servicio *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "bienServicio",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                placeholder: "Ej: Laptop, Servicio técnico, etc."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Monto reclamado (S/) *" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-3 text-gray-500 font-bold", children: "S/" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  name: "montoReclamado",
                  required: true,
                  step: "0.01",
                  min: "0",
                  className: "w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition",
                  placeholder: "0.00"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Descripción del bien o servicio *" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "descripcionBien",
              rows: "3",
              required: true,
              className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none",
              placeholder: "Describa el bien o servicio adquirido..."
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FaClipboardList, { className: "text-primary text-2xl" }),
          "Detalle de su reclamo"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mb-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-blue-800 mb-2 font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FaInfoCircle, {}),
            "Definiciones según el Código del Consumidor:"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-red-600", children: "Reclamo:" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Cuando el consumidor no está conforme con los bienes adquiridos o servicios prestados." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-red-600", children: "Queja:" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Cuando el consumidor expresa su malestar respecto de algún tema que no tenga que ver directamente con el giro del negocio, ejemplo, mala atención." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Tipo *" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                name: "tipoReclamo",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Seleccione tipo" }),
                  tiposReclamo.map((tipo) => /* @__PURE__ */ jsx("option", { value: tipo.value, children: tipo.label }, tipo.value))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Fecha del hecho reclamado *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                name: "fechaHecho",
                required: true,
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Descripción detallada del reclamo/queja *" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "descripcion",
              rows: "6",
              required: true,
              maxLength: "1000",
              onChange: (e) => setDescripcionLength(e.target.value.length),
              className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none",
              placeholder: "Describa detalladamente los hechos, incluyendo fechas, horas, personas involucradas, documentos de referencia, etc."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Incluya todos los detalles relevantes para una adecuada atención." }),
            /* @__PURE__ */ jsxs("p", { className: `text-sm ${descripcionLength > 900 ? "text-red-600" : "text-gray-500"}`, children: [
              descripcionLength,
              "/1000 caracteres"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Pedido o solución esperada *" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "pedido",
              rows: "3",
              required: true,
              className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none",
              placeholder: "Especifique claramente qué solución espera recibir..."
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 bg-gray-50 p-6 rounded-xl", children: [
        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-gray-900 mb-3", children: [
          /* @__PURE__ */ jsx(FaFileAlt, { className: "inline mr-2" }),
          "Información Importante"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Observaciones y acciones adoptadas por el Proveedor:" }),
              " La respuesta a este reclamo o queja será enviada al correo electrónico consignado en el presente formulario."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Declaración:" }),
              " Con el envío del presente formulario, EL USUARIO valida la información consignada y declara haber sido debidamente informado por Teknisolutions S.A.C sobre el procedimiento, plazo de atención y medio de respuesta correspondiente."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Notificación:" }),
              " En caso el reclamo resulte procedente o improcedente, la decisión será notificada al correo electrónico proporcionado."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Código de seguimiento:" }),
              " Al registrar su reclamo o queja, se generará un código único que será enviado a su correo electrónico para su seguimiento."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Validación:" }),
              " En caso no se consigne como mínimo el nombre, número de documento, dirección o correo electrónico, y la descripción del reclamo o queja, este será considerado no presentado, conforme al artículo 5 del Reglamento del Libro de Reclamaciones."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Otras vías:" }),
              " La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para presentar una denuncia ante INDECOPI."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FaRegCheckCircle, { className: "text-green-600 mt-1" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Disponibilidad:" }),
              " Este establecimiento cuenta con un Libro de Reclamaciones a disposición del consumidor, conforme a lo exigido por la Ley."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-blue-100 rounded-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-center text-blue-900 font-semibold text-lg", children: "MUCHAS GRACIAS POR SU COMUNICACIÓN," }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-blue-800 font-bold text-xl mt-2", children: "Atentamente, Teknisolutions S.A.C" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-6 bg-blue-50 rounded-xl border-2 border-blue-200", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "declaracion",
            name: "declaracion",
            required: true,
            className: "mt-1 h-5 w-5 text-primary focus:ring-primary border-gray-400 rounded"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "declaracion", className: "text-gray-900 font-semibold flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(FaShieldAlt, { className: "text-primary" }),
            "DECLARACIÓN Y CONSENTIMIENTO *"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
            /* @__PURE__ */ jsx("strong", { children: "Declaro que los datos consignados son correctos y fiel expresión de la verdad." }),
            "Autorizo expresamente a Teknisolutions S.A.C al tratamiento de mis datos personales para los fines relacionados con la atención de mi reclamo o queja, conforme a lo establecido en la Ley de Protección de Datos Personales (Ley N° 29733) y su Reglamento. Confirmo que he sido informado sobre mis derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) y que conozco la política de privacidad de la empresa."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: `flex-1 py-4 px-6 font-bold rounded-xl transition duration-300 flex items-center justify-center gap-3 text-lg ${isSubmitting ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl"}`,
            children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(FaSpinner, { className: "animate-spin" }),
              "Registrando reclamo..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(FaPaperPlane, {}),
              "Registrar en Libro de Reclamaciones"
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "reset",
            className: "flex-1 py-4 px-6 font-bold bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition shadow hover:shadow-lg",
            onClick: () => {
              setSubmitStatus(null);
              setTicketNumber("");
              setDescripcionLength(0);
              setTipoDocumento("dni");
            },
            children: "Limpiar Formulario"
          }
        )
      ] })
    ] })
  ] });
}

const $$Reclamaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reclamaciones", "description": "P\xE1gina de reclamaciones" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ReclamacionesComponent", Reclamaciones, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/pages/reclamaciones/Reclamaciones.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/edwar/proyectos/my-project/src/pages/reclamaciones.astro", void 0);

const $$file = "C:/Users/edwar/proyectos/my-project/src/pages/reclamaciones.astro";
const $$url = "/reclamaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reclamaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
