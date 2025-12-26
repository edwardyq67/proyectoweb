import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { d as datosNosotros, p as productosData, C as ContactoData } from './Layout_Caz5SSO4.mjs';
import { FaUserTie, FaTools, FaCalculator, FaArrowRight, FaIndustry, FaBuilding, FaHome, FaWhatsapp, FaEnvelope, FaMapMarkedAlt, FaClock, FaCalendarWeek, FaCommentAlt, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaCheck, FaExclamationCircle, FaUser, FaMobileAlt, FaSpinner, FaPaperPlane } from 'react-icons/fa';
import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DMru0Gpx.mjs';
import 'piccolore';
import 'clsx';

const categoriasInfo = {
  Domestico: {
    nombre: "Domestico",
    icon: /* @__PURE__ */ jsx(FaHome, {}),
    color: "bg-blue-500",
    descripcion: "Soluciones para hogares y residencias"
  },
  Comercial: {
    nombre: "Comercial",
    icon: /* @__PURE__ */ jsx(FaBuilding, {}),
    color: "bg-green-500",
    descripcion: "Para negocios, oficinas y establecimientos"
  },
  Industrial: {
    nombre: "Industrial",
    icon: /* @__PURE__ */ jsx(FaIndustry, {}),
    color: "bg-purple-500",
    descripcion: "Sistemas para fábricas y plantas industriales"
  },
  Especialistas: {
    nombre: "Especialistas",
    icon: /* @__PURE__ */ jsx(FaUserTie, {}),
    color: "bg-red-500",
    descripcion: "Soluciones especializadas por sector"
  }
};
function Productos({ servicioSlug = null }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Domestico");
  const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);
  const [mostrarSeccion, setMostrarSeccion] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  useEffect(() => {
    const calcularCategoriasYProductos = () => {
      const productosDeData = productosData.productos || [];
      let productosFiltradosPorCategoria = productosDeData;
      const mapeoCategorias = {
        "aire-acondicionado-climatizacion": "ac-comercial",
        "refrigeracion-comercial-industrial": "refrigeracion-industrial"
      };
      if (servicioSlug && mapeoCategorias[servicioSlug]) {
        const categoriaFiltro = mapeoCategorias[servicioSlug];
        productosFiltradosPorCategoria = productosDeData.filter(
          (producto) => producto.categoria === categoriaFiltro
        );
      }
      setProductosFiltrados(productosFiltradosPorCategoria);
      const serviciosFiltrados = servicioSlug ? datosNosotros.servicios.filter((s) => s.slug === servicioSlug) : datosNosotros.servicios;
      const categoriasConProductos = [];
      let hayProductosEnTotal = false;
      Object.keys(categoriasInfo).forEach((categoriaKey) => {
        let tieneProductos = false;
        for (const servicio of serviciosFiltrados) {
          if (categoriaKey === "Especialistas") {
            if (servicio[categoriaKey] && Array.isArray(servicio[categoriaKey]) && servicio[categoriaKey].length > 0) {
              tieneProductos = true;
              hayProductosEnTotal = true;
              break;
            }
          } else {
            if (servicio[categoriaKey] && Array.isArray(servicio[categoriaKey]) && servicio[categoriaKey].length > 0) {
              tieneProductos = true;
              hayProductosEnTotal = true;
              break;
            }
          }
        }
        if (tieneProductos) {
          categoriasConProductos.push(categoriaKey);
        }
      });
      if (productosFiltradosPorCategoria.length > 0) {
        hayProductosEnTotal = true;
        if (!categoriasConProductos.includes("Comercial")) {
          categoriasConProductos.push("Comercial");
        }
      }
      setMostrarSeccion(hayProductosEnTotal);
      if (categoriasConProductos.length > 0) {
        setCategoriasDisponibles(categoriasConProductos);
        if (!categoriasConProductos.includes(categoriaActiva)) {
          setCategoriaActiva(categoriasConProductos[0]);
        }
      } else {
        setCategoriasDisponibles([]);
      }
    };
    calcularCategoriasYProductos();
  }, [servicioSlug, categoriaActiva]);
  const obtenerProductos = () => {
    if (!mostrarSeccion) return [];
    if (categoriaActiva === "Comercial" && productosFiltrados.length > 0) {
      const productosAgrupados = {};
      productosFiltrados.forEach((producto, index) => {
        const slugServicio = producto.servicioSlug || "general";
        const nombreServicio = producto.servicio || "General";
        const imgServicio = producto.servicioImg || null;
        if (!productosAgrupados[slugServicio]) {
          productosAgrupados[slugServicio] = {
            servicio: nombreServicio,
            servicioSlug: slugServicio,
            servicioImg: imgServicio,
            productos: []
          };
        }
        productosAgrupados[slugServicio].productos.push({
          id: `P${slugServicio}-${index + 1}`,
          nombre: producto.titulo,
          tipo: "Producto Comercial",
          descripcion: producto.contenido,
          img: producto.img,
          puntos: producto.puntos || [],
          categoria: producto.categoria || [],
          servicio: nombreServicio,
          servicioSlug: slugServicio,
          servicioImg: imgServicio
        });
      });
      const productosPlanos = [];
      Object.values(productosAgrupados).forEach((grupo) => {
        grupo.productos.forEach((producto) => {
          productosPlanos.push(producto);
        });
      });
      return productosPlanos;
    }
    const productos2 = [];
    const serviciosFiltrados = servicioSlug ? datosNosotros.servicios.filter((s) => s.slug === servicioSlug) : datosNosotros.servicios;
    serviciosFiltrados.forEach((servicio) => {
      if (servicio[categoriaActiva] && Array.isArray(servicio[categoriaActiva]) && servicio[categoriaActiva].length > 0) {
        const idsProductos = servicio[categoriaActiva];
        if (categoriaActiva === "Especialistas") {
          idsProductos.forEach((especialista, index) => {
            productos2.push({
              id: `E${servicio.slug}-${index + 1}`,
              nombre: especialista.titulo,
              tipo: "Especialización",
              descripcion: especialista.descripcion,
              servicio: servicio.titulo,
              servicioSlug: servicio.slug,
              servicioImg: servicio.img,
              categoria: ["Consultoría", "Desarrollo de Proyecto"]
            });
          });
        } else {
          const productosEncontrados = productosData.productos.filter(
            (producto) => idsProductos.includes(producto.id)
          );
          productosEncontrados.forEach((producto) => {
            productos2.push({
              ...producto,
              nombre: producto.titulo,
              tipo: `Producto ${categoriaActiva}`,
              servicio: servicio.titulo,
              servicioSlug: servicio.slug,
              servicioImg: servicio.img,
              categoria: producto.categoria || []
            });
          });
        }
      }
    });
    return productos2;
  };
  const productos = obtenerProductos();
  const servicioActual = servicioSlug ? datosNosotros.servicios.find((s) => s.slug === servicioSlug) : null;
  if (!mostrarSeccion) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-b from-gray-50 to-white", id: "Productos", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: servicioActual ? `Productos y Servicios de ${servicioActual.titulo}` : "Nuestros Productos y Servicios" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-3xl mx-auto", children: servicioActual ? "Soluciones especializadas para tu proyecto" : "Soluciones especializadas según tu tipo de proyecto" })
    ] }),
    categoriasDisponibles.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row justify-center gap-4 flex-wrap", children: categoriasDisponibles.map((categoriaKey) => {
      const info = categoriasInfo[categoriaKey];
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setCategoriaActiva(categoriaKey),
          className: `flex cursor-pointer items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 
              /* En móvil: 100% ancho */
              w-full md:w-auto md:flex-1 
              /* Tamaño máximo solo en desktop */
              md:max-w-xs mx-auto sm:mx-0 md:min-w-[200px]
              ${categoriaActiva === categoriaKey ? `${info.color} text-white shadow-lg` : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"}
            `,
          children: [
            /* @__PURE__ */ jsx("div", { className: `p-2 rounded-lg ${categoriaActiva === categoriaKey ? "bg-white/20" : "bg-gray-100"}`, children: info.icon }),
            /* @__PURE__ */ jsx("div", { className: "text-left flex-1", children: /* @__PURE__ */ jsx("div", { className: "font-bold", children: info.nombre }) })
          ]
        },
        categoriaKey
      );
    }) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: productos.map((producto, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out flex flex-col",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-64 overflow-hidden bg-gradient-to-br from-white to-white flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center p-4", children: producto.img ? /* @__PURE__ */ jsx(
            "img",
            {
              src: producto.img,
              alt: producto.nombre || producto.tipo,
              className: "max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out",
              loading: "lazy"
            }
          ) : producto.servicioImg ? /* @__PURE__ */ jsx(
            "img",
            {
              src: producto.servicioImg,
              alt: producto.servicio,
              className: "max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-40",
              loading: "lazy"
            }
          ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200", children: /* @__PURE__ */ jsx("div", { className: "text-gray-400", children: categoriaActiva === "Especialistas" ? /* @__PURE__ */ jsx(FaUserTie, { className: "text-5xl" }) : /* @__PURE__ */ jsx(FaTools, { className: "text-5xl" }) }) }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
            !servicioActual && producto.servicio !== "General" && /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full", children: producto.servicio }) }),
            /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full", children: producto.tipo }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300", children: producto.nombre.toUpperCase() || producto.tipo.toUpperCase() }),
            producto.puntos && producto.puntos.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-4 flex-grow", children: /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: producto.puntos.slice(0, 3).map((punto, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary mt-1", children: "•" }),
              /* @__PURE__ */ jsx("span", { className: "line-clamp-2", children: punto })
            ] }, idx)) }) }),
            producto.categoria && producto.categoria.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: producto.categoria.map((cat, idx) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors duration-300",
                children: cat
              },
              idx
            )) }) }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/contacto",
                className: "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:gap-3 mt-auto",
                children: [
                  /* @__PURE__ */ jsx(FaCalculator, {}),
                  categoriaActiva === "Especialistas" ? "Solicitar Consultoría" : "Solicitar Información",
                  /* @__PURE__ */ jsx(FaArrowRight, { className: "group-hover:translate-x-1 transition-transform duration-300" })
                ]
              }
            )
          ] })
        ]
      },
      producto.id || index
    )) })
  ] }) });
}

const marcas = /* #__PURE__ */ JSON.parse("[{\"id\":1,\"nombre\":\"image (10)-convertido-de-png.webp\",\"logo\":\"/Empresa/image (10)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":2,\"nombre\":\"image (11)-convertido-de-png\",\"logo\":\"/Empresa/image (11)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":3,\"nombre\":\"image (12)-convertido-de-png\",\"logo\":\"/Empresa/image (12)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":4,\"nombre\":\"image (13)-convertido-de-png\",\"logo\":\"/Empresa/image (13)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":5,\"nombre\":\"image (14)-convertido-de-png\",\"logo\":\"/Empresa/image (14)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":6,\"nombre\":\"image (15)-convertido-de-png\",\"logo\":\"/Empresa/image (15)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":7,\"nombre\":\"image (16)-convertido-de-png\",\"logo\":\"/Empresa/image (16)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":8,\"nombre\":\"image (17)-convertido-de-png\",\"logo\":\"/Empresa/image (17)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":9,\"nombre\":\"image (18)-convertido-de-png\",\"logo\":\"/Empresa/image (18)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":10,\"nombre\":\"image (19)-convertido-de-png\",\"logo\":\"/Empresa/image (19)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":11,\"nombre\":\"image (20)-convertido-de-png\",\"logo\":\"/Empresa/image (20)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":12,\"nombre\":\"image (21)-convertido-de-png\",\"logo\":\"/Empresa/image (21)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":13,\"nombre\":\"image (22)-convertido-de-png\",\"logo\":\"/Empresa/image (22)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":14,\"nombre\":\"image (23)-convertido-de-png\",\"logo\":\"/Empresa/image (23)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":15,\"nombre\":\"image (24)-convertido-de-png\",\"logo\":\"/Empresa/image (24)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":16,\"nombre\":\"image (25)-convertido-de-png\",\"logo\":\"/Empresa/image (25)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":17,\"nombre\":\"image (26)-convertido-de-png\",\"logo\":\"/Empresa/image (26)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":18,\"nombre\":\"image (27)-convertido-de-png\",\"logo\":\"/Empresa/image (27)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":19,\"nombre\":\"image (28)-convertido-de-png\",\"logo\":\"/Empresa/image (28)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":20,\"nombre\":\"image (29)-convertido-de-png\",\"logo\":\"/Empresa/image (29)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":21,\"nombre\":\"image (30)-convertido-de-png\",\"logo\":\"/Empresa/image (30)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":22,\"nombre\":\"image (31)-convertido-de-png\",\"logo\":\"/Empresa/image (31)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":23,\"nombre\":\"image (32)-convertido-de-png\",\"logo\":\"/Empresa/image (32)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":24,\"nombre\":\"image (33)-convertido-de-png\",\"logo\":\"/Empresa/image (33)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":25,\"nombre\":\"image (34)-convertido-de-png\",\"logo\":\"/Empresa/image (34)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":26,\"nombre\":\"image (35)-convertido-de-png\",\"logo\":\"/Empresa/image (35)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":27,\"nombre\":\"image (37)-convertido-de-png\",\"logo\":\"/Empresa/image (37)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":28,\"nombre\":\"image (38)-convertido-de-png\",\"logo\":\"/Empresa/image (38)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":29,\"nombre\":\"image (39)-convertido-de-png\",\"logo\":\"/Empresa/image (39)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":30,\"nombre\":\"image (40)-convertido-de-png\",\"logo\":\"/Empresa/image (40)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":31,\"nombre\":\"image (41)-convertido-de-png\",\"logo\":\"/Empresa/image (41)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":32,\"nombre\":\"image (42)-convertido-de-png\",\"logo\":\"/Empresa/image (42)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":33,\"nombre\":\"image (43)-convertido-de-png\",\"logo\":\"/Empresa/image (43)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":34,\"nombre\":\"image (44)-convertido-de-png\",\"logo\":\"/Empresa/image (44)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":35,\"nombre\":\"image (45)-convertido-de-png\",\"logo\":\"/Empresa/image (45)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":36,\"nombre\":\"image (46)-convertido-de-png\",\"logo\":\"/Empresa/image (46)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":37,\"nombre\":\"image (47)-convertido-de-png\",\"logo\":\"/Empresa/image (47)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":38,\"nombre\":\"image (48)-convertido-de-png\",\"logo\":\"/Empresa/image (48)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":39,\"nombre\":\"image (49)-convertido-de-png\",\"logo\":\"/Empresa/image (49)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":40,\"nombre\":\"image (50)-convertido-de-png\",\"logo\":\"/Empresa/image (50)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":41,\"nombre\":\"image (51)-convertido-de-png\",\"logo\":\"/Empresa/image (51)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":42,\"nombre\":\"image (52)-convertido-de-png\",\"logo\":\"/Empresa/image (52)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":43,\"nombre\":\"image (53)-convertido-de-png\",\"logo\":\"/Empresa/image (53)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":44,\"nombre\":\"image (55)-convertido-de-png\",\"logo\":\"/Empresa/image (55)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":45,\"nombre\":\"image (56)-convertido-de-png\",\"logo\":\"/Empresa/image (56)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":46,\"nombre\":\"image (57)-convertido-de-png\",\"logo\":\"/Empresa/image (57)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":47,\"nombre\":\"image (58)-convertido-de-png\",\"logo\":\"/Empresa/image (58)-convertido-de-png.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":49,\"nombre\":\"image (59)\",\"logo\":\"/Empresa/image (59).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":50,\"nombre\":\"image (61)\",\"logo\":\"/Empresa/image (61).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":51,\"nombre\":\"image (62)\",\"logo\":\"/Empresa/image (62).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":52,\"nombre\":\"image (63)\",\"logo\":\"/Empresa/image (63).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":53,\"nombre\":\"image (64)\",\"logo\":\"/Empresa/image (64).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":54,\"nombre\":\"image (65)\",\"logo\":\"/Empresa/image (65).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":55,\"nombre\":\"image (66)\",\"logo\":\"/Empresa/image (66).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":56,\"nombre\":\"image (67)\",\"logo\":\"/Empresa/image (67).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":57,\"nombre\":\"image (68)\",\"logo\":\"/Empresa/image (68).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":58,\"nombre\":\"image (69)\",\"logo\":\"/Empresa/image (69).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":59,\"nombre\":\"image (70)\",\"logo\":\"/Empresa/image (70).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":60,\"nombre\":\"image (71)\",\"logo\":\"/Empresa/image (71).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image (72)\",\"logo\":\"/Empresa/image (72).webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_1_\",\"logo\":\"/Empresa/image-_1_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_2_\",\"logo\":\"/Empresa/image-_2_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_3_\",\"logo\":\"/Empresa/image-_3_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_4_\",\"logo\":\"/Empresa/image-_4_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_5_\",\"logo\":\"/Empresa/image-_5_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_6_\",\"logo\":\"/Empresa/image-_6_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"},{\"id\":61,\"nombre\":\"image-_7_\",\"logo\":\"/Empresa/image-_7_.webp\",\"slug\":\"systemair\",\"descripcion\":\"Líder mundial en ventilación y calidad del aire interior\"}]");
const metadata = {"titulo":"Marcas que confían en nosotros","descripcion":"Trabajamos con las mejores marcas del sector de climatización y ventilación"};
const carruselData = {
  marcas,
  metadata,
};

const $$Carrusel = createComponent(($$result, $$props, $$slots) => {
  const marcas = carruselData.marcas;
  const metadata = carruselData.metadata;
  const mostrarSeccion = marcas && marcas.length > 0;
  return renderTemplate`${mostrarSeccion && renderTemplate`<!-- Carrusel de Marcas -->
  ${maybeRenderHead()}<section class="py-16 bg-gray-50"><div class="container"><!-- Título y descripción --><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${metadata.titulo}</h2><p class="text-lg text-gray-600 max-w-2xl mx-auto">${metadata.descripcion}</p></div><!-- Contenedor del carrusel --><div class="relative overflow-hidden py-4"><!-- Overlay izquierdo para degradado --><div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div><!-- Carrusel infinito --><div class="flex animate-scroll">${marcas.map((marca) => renderTemplate`<div class="flex-shrink-0 mx-6 bg-white rounded-xl shadow-sm flex items-center justify-center p-6 transition-all duration-300 "><img${addAttribute(marca.logo, "src")}${addAttribute(marca.nombre, "alt")} class="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"${addAttribute(marca.nombre, "title")} loading="lazy" width="200" height="60"></div>`)}<!-- Duplicar las marcas para efecto infinito continuo -->${marcas.map((marca) => renderTemplate`<div class=" mx-6 bg-white rounded-xl flex items-center justify-center p-6  transition-all duration-300 " aria-hidden="true"><img${addAttribute(marca.logo, "src")}${addAttribute(`${marca.nombre} (duplicado)`, "alt")} class="max-w-full max-h-full cu object-contain hover:grayscale-0 transition-all duration-300"${addAttribute(marca.nombre, "title")} loading="lazy" width="200" height="60"></div>`)}</div><!-- Overlay derecho para degradado --><div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div></div></div></section>`}${mostrarSeccion && renderTemplate`<style>
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-100% / 2));
      }
    }
    
    .animate-scroll {
      display: flex;
      width: max-content;
      animation: scroll 80s linear infinite;
    }
    
    /* Pausar animación al hacer hover */
    .animate-scroll:hover {
      animation-play-state: paused;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .animate-scroll {
        animation: scroll 30s linear infinite;
      }
      
      .animate-scroll > div {
        width: 140px;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        height: 100px;
      }
    }
  </style>`}`;
}, "C:/Users/edwar/proyectos/my-project/src/components/Carrusel.astro", void 0);

const Contacto = () => {
  const datos = ContactoData.contacto;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const formData = new FormData(e.target);
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitStatus("success");
          e.target.reset();
        } else {
          setSubmitStatus("error");
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
    twitter: FaTwitter
  };
  const socialColors = {
    facebook: "bg-blue-600 hover:bg-blue-700",
    instagram: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
    tiktok: "bg-black hover:bg-gray-800",
    youtube: "bg-red-600 hover:bg-red-700",
    linkedin: "bg-blue-700 hover:bg-blue-800",
    twitter: "bg-blue-400 hover:bg-blue-500"
  };
  const informacionContacto = datos.informacion_contacto || {};
  const telefonos = informacionContacto.telefonos || [];
  const correos = informacionContacto.correos || [];
  const direcciones = informacionContacto.direcciones || [];
  const redesSociales = datos.redes_sociales || {};
  const whatsappBotones = datos.whatsapp_botones || [];
  const horariosAtencion = datos.horarios_atencion || {};
  return /* @__PURE__ */ jsx("section", { id: "contacto", className: "py-12 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Contáctanos" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Estamos aquí para resolver todas tus necesidades de climatización y ventilación" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: telefonos.map((telefono, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 hover:bg-primary/5 rounded-lg transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: telefono.tipo }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded", children: telefono.descripcion })
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: telefono.whatsapp,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "font-semibold text-foreground hover:text-primary transition-colors text-sm",
                  children: telefono.numero
                }
              )
            ] })
          ] }, index)) }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: correos.map((correo, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 hover:bg-primary/5 rounded-lg transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(FaEnvelope, { className: "text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: correo.tipo }) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${correo.email}`,
                  className: "text-primary hover:text-primary/80 text-sm truncate",
                  children: correo.email
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: correo.descripcion })
            ] })
          ] }, index)) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: direcciones.map((direccion, index) => /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-sm mb-1", children: direccion.tipo }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm", children: direccion.direccion }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-xs", children: [
              direccion.ciudad,
              ", ",
              direccion.pais
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: direccion.mapa,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1 text-primary hover:gap-2 transition-all text-xs mt-1",
              children: [
                /* @__PURE__ */ jsx(FaMapMarkedAlt, {}),
                "Ver mapa"
              ]
            }
          )
        ] }, index)) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-foreground mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FaClock, { className: "text-primary" }),
            "Horarios"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(FaCalendarWeek, { className: "text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: "General" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: horariosAtencion.general })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-foreground mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FaCommentAlt, { className: "text-primary" }),
            "Síguenos"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            Object.entries(redesSociales).map(([key, red]) => {
              const IconComponent = socialIcons[key];
              const colorClass = socialColors[key] || "bg-gray-600 hover:bg-gray-700";
              if (!IconComponent) return null;
              return /* @__PURE__ */ jsx(
                "a",
                {
                  href: red.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `w-9 h-9 rounded-full flex items-center justify-center transition-colors ${colorClass}`,
                  "aria-label": red.nombre,
                  children: /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4 text-white" })
                },
                key
              );
            }),
            whatsappBotones.length > 0 && /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/${whatsappBotones[0].numero.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappBotones[0].mensaje)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-9 h-9 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors",
                "aria-label": "WhatsApp",
                children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-4 h-4 text-white" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-card-foreground mb-2", children: "Envíanos un mensaje" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Completa el formulario y te contactaremos pronto" }),
        submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-green-700", children: [
          /* @__PURE__ */ jsx(FaCheck, { className: "text-green-600" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "¡Mensaje enviado con éxito!" })
        ] }) }),
        submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-700", children: [
          /* @__PURE__ */ jsx(FaExclamationCircle, { className: "text-red-600" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Error al enviar el mensaje" })
        ] }) }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm text-card-foreground mb-1", children: "Nombre completo" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(FaUser, { className: "text-muted-foreground" }) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "nombre",
                  placeholder: "Tu nombre completo",
                  className: "w-full pl-10 pr-4 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm text-card-foreground mb-1", children: "Correo electrónico" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(FaEnvelope, { className: "text-muted-foreground" }) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  placeholder: "tu@email.com",
                  className: "w-full pl-10 pr-4 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm text-card-foreground mb-1", children: "Teléfono" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(FaMobileAlt, { className: "text-muted-foreground" }) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  name: "telefono",
                  placeholder: "Tu número de teléfono",
                  className: "w-full pl-10 pr-4 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm text-card-foreground mb-1", children: "Mensaje" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "mensaje",
                placeholder: "Describe tu consulta o necesidad...",
                rows: 3,
                className: "w-full px-3 py-2.5 border border-input bg-background rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "estado", value: "Solicita Servicio" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: "privacidad",
                className: "mt-0.5",
                required: true
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "privacidad", className: "text-xs text-muted-foreground", children: datos.formulario_contacto.politica_privacidad })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: `w-full py-2.5 font-bold rounded-md transition-colors flex items-center justify-center gap-2 text-sm ${isSubmitting ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`,
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(FaSpinner, { className: "animate-spin" }),
                "Enviando..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(FaPaperPlane, {}),
                "Enviar Mensaje"
              ] })
            }
          )
        ] })
      ] }) })
    ] })
  ] }) });
};

export { $$Carrusel as $, Contacto as C, Productos as P };
