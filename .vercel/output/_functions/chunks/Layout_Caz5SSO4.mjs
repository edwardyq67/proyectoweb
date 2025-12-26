import { e as createComponent, f as createAstro, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent, o as renderSlot, p as renderHead } from './astro/server_DMru0Gpx.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import { FaHome, FaInfoCircle, FaCog, FaChevronRight, FaBox, FaPhone, FaWhatsapp, FaPhoneAlt, FaBars, FaTimes, FaClipboardCheck, FaIndustry, FaSnowflake, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaUserTie, FaShieldAlt, FaFilter, FaWrench, FaTools, FaCheckCircle, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/edwar/proyectos/my-project/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/edwar/proyectos/my-project/node_modules/astro/components/ClientRouter.astro", void 0);

const titulo = "Sobre Nosotros";
const contenido = "Somos una empresa líder en el sector de aire acondicionado y ventilación mecánica con más de 2 años de experiencia especializada en instalación, mantenimiento y reparación de sistemas HVAC para el sector comercial, industrial y residencial.";
const foto = "/Nosotros/Foto04-casco.gif";
const logros = ["Más de 2 años de experiencia","Equipo de especialistas certificados","Tecnología de última generación","Soporte técnico 24/7","Certificaciones internacionales","Proyectos en todo el país"];
const sello = {"numero":"2+","texto":"Años de experiencia"};
const servicios = [{"img":"/Servicios/AireAcodicionadoClimatizacion.webp","titulo":"Aire acondicionado y climatización","contenido":"Realizamos la instalación, mantenimiento y reparación de sistemas tipo Split, MultiSplit, Piso-Techo, Cassette, VRF/VRV y sistemas HVAC centralizados.","url":"/servicios/aire-acondicionado-climatizacion","slug":"aire-acondicionado-climatizacion","descripcion_larga":"En Teknisolutions, somos especialistas en ofrecer un servicio integral de climatización y ventilación en Lima, proporcionando la instalación de una amplia gama de equipos como Split Pared, Ducto, Cassette, VRF, Paquete (Rooftop) y Chillers, adaptados a las necesidades de viviendas, oficinas, locales comerciales e instalaciones industriales. Nuestra propuesta combina tecnología de vanguardia y equipos de alta eficiencia energética para garantizar ambientes frescos, máximo confort y ahorro operativo en cada proyecto.","icono":"mdi:snowflake","VentilacionClimatizacion":{"titulo":"Ventilación y Climatización","img":"/Servicios/Ventilación y Climatización.webp","servicios":[{"nombre":"Extractores Axiales","descripcion":"Suministramos e instalamos ventiladores axiales de placa, tubo axiales de uso industrial y minero.","icono":"mdi:fan"},{"nombre":"Extractores Centrífugos","descripcion":"Ofrecemos ventiladores de simple y doble aspiración, álabes hacia adelante y atrás.","icono":"mdi:cog"},{"nombre":"Extractores Eólicos","descripcion":"Suministramos equipos eólicos que no necesitan motor y por ende no tienen consumo eléctrico.","icono":"mdi:wind-power"},{"nombre":"Mantenimiento","descripcion":"Realizamos mantenimiento de equipos de ventilación, mantén tus ventiladores siempre en buenas condiciones.","icono":"mdi:wrench"}]},"Domestico":[9,12],"Comercial":[1,2,3,4,5,6,7,8,9,11,12,13,14],"Industrial":[1,2,3,4,5,6,7,8,9,11,12,13,14]},{"img":"/Servicios/RefrigeracionComercialEIndustrial.webp","titulo":"Refrigeración comercial e industrial","contenido":"En Teknisolutions, nos especializamos en soluciones integrales de refrigeración industrial y comercial, diseñando e implementando cámaras frigoríficas, túneles de enfriamiento y sistemas de congelamiento de alto rendimiento.","url":"/servicios/refrigeracion-comercial-industrial","slug":"refrigeracion-comercial-industrial","descripcion_larga":"En Teknisolutions, nos especializamos en soluciones integrales de refrigeración industrial y comercial, diseñando e implementando cámaras frigoríficas, túneles de enfriamiento y sistemas de congelamiento de alto rendimiento. Gracias a nuestra tecnología de vanguardia y un equipo de ingeniería experto, optimizamos la climatización de salas de procesos y la operación de plantas de hielo, garantizando sistemas eficientes, confiables y con un control térmico riguroso para la conservación y procesamiento de sus productos.","icono":"mdi:snowflake-thermometer","VentilacionClimatizacion":{},"Domestico":[],"Comercial":[15,16,24,25,18,19,22,28],"Industrial":[17,20,21,23,26,27,24,25,15,16]},{"img":"/Servicios/Asesoramiento.webp","titulo":"Consultoría de desarrollo y ejecución de proyecto","contenido":"Diseñamos y ejecutamos proyectos integrales de climatización, ventilación y refrigeración industrial a medida.","url":"/servicios/consultoria-desarrollo-ejecucion-proyecto","slug":"consultoria-desarrollo-ejecucion-proyecto","descripcion_larga":"En Teknisolutions, diseñamos y ejecutamos proyectos integrales de climatización, ventilación y refrigeración industrial a medida. Nuestro equipo de ingenieros especializados gestiona cada etapa del proceso, desde el cálculo de redes de ductos y selección de equipos hasta la implementación final, garantizando el cumplimiento normativo, la eficiencia energética y la puntualidad en cada entrega.","icono":"mdi:clipboard-check","secciones":[{"titulo":"Soluciones Especializadas por Sector","contenido":"Desarrollamos proyectos personalizados adaptados a las exigencias críticas de diversos entornos:","items":[{"titulo":"Sector Salud y Hospitalario","descripcion":"Sistemas de climatización con filtrado especial y control de presión para hospitales y clínicas."},{"titulo":"Industria Farmacéutica","descripcion":"Diseño de almacenes especializados para medicamentos, cámaras de frío con monitoreo térmico y sistemas de climatización para laboratorios bajo estrictos estándares de bioseguridad."},{"titulo":"Industria Alimentaria","descripcion":"Diseño de cámaras frigoríficas, cuartos fríos, túneles de congelamiento y climatización de salas de procesos."},{"titulo":"Corporativo y Comercial","descripcion":"Soluciones de aire acondicionado para oficinas, edificios y restaurantes, optimizando el confort y el consumo eléctrico."},{"titulo":"Residencial","descripcion":"Instalaciones de alta eficiencia para hogares modernos."}]}],"VentilacionClimatizacion":{"titulo":"Nuestro Portafolio de Servicios","img":"/Servicios/Nuestro Portafolio de Servicios.webp","servicios":[{"nombre":"Sistemas HVAC","descripcion":"Instalación de equipos Split (Pared, Ducto, Cassette), sistemas VRF, unidades Paquete (Rooftop), Chillers y Fan Coils.","icono":"mdi:air-conditioner"},{"nombre":"Ventilación y Seguridad","descripcion":"Diseño de sistemas de ventilación mecánica, extracción de monóxido y presurización de escaleras contra incendios.","icono":"mdi:shield-airplane"},{"nombre":"Ingeniería de Ductos","descripcion":"Fabricación e instalación de ductos personalizados para garantizar un flujo de aire óptimo y duradero.","icono":"mdi:pipe"},{"nombre":"Mantenimiento Especializado","descripcion":"Planes preventivos y correctivos para asegurar el rendimiento continuo y prolongar la vida útil de sus activos.","icono":"mdi:tools"}]},"marcas":[],"Domestico":[],"Comercial":[],"Industrial":[]},{"img":"/Servicios/CamaraFrigorificas.webp","titulo":"Servicio especial de cámara frigorífica","contenido":"Soluciones integrales de refrigeración industrial y comercial diseñadas para maximizar la eficiencia y confiabilidad en la conservación de productos.","url":"/servicios/servicio-especial-camara-frigorifica","slug":"servicio-especial-camara-frigorifica","descripcion_larga":"En Teknisolutions, nos especializamos en ofrecer soluciones integrales de refrigeración industrial y comercial, diseñadas para maximizar la eficiencia y confiabilidad en la conservación de sus productos. Proporcionamos un servicio completo que abarca desde el diseño técnico hasta la instalación de infraestructura de alta precisión.","icono":"mdi:clipboard-check","secciones":[{"titulo":"Soluciones Especializadas por Sector","contenido":"Colaboramos estrechamente con contratistas y usuarios finales en diversos sectores estratégicos, adaptándonos a las exigencias de cada industria:","items":[{"titulo":"Retail y Horeca","descripcion":"Sistemas especializados para la conservación de flores y productos perecederos."},{"titulo":"Procesamiento","descripcion":"Equipamiento para plantas industriales de alimentos y centros de distribución."},{"titulo":"Industria Farmacéutica","descripcion":"Diseño de almacenes especializados para medicamentos, cámaras de frío con monitoreo térmico y sistemas de climatización para laboratorios bajo estrictos estándares de bioseguridad."},{"titulo":"Sector Salud y Hospitalario","descripcion":"Climatización de salas de operaciones, unidades de cuidados intensivos y centros médicos con sistemas de filtrado de aire de alta eficiencia."}]}],"VentilacionClimatizacion":{"titulo":"Sectores de Especialización","img":"/Servicios/Nuestro Portafolio de Servicios.webp","servicios":[{"nombre":"Almacenamiento Térmico","descripcion":"Diseño e instalación de cámaras frigoríficas, cámaras de congelación y túneles de congelado rápido.","icono":"mdi:fridge-industrial"},{"nombre":"Unidades de Potencia","descripcion":"Implementación de sistemas de racks de compresores, unidades condensadoras y sistemas de Chillers.","icono":"mdi:engine"},{"nombre":"Componentes Especializados","descripcion":"Suministro de paneles aislantes, puertas para cámaras frigoríficas y unidades enfriadoras de aire (evaporadores)","icono":"mdi:package-variant-closed"},{"nombre":"Ingeniería de Salas","descripcion":"Climatización precisa para salas de procesamiento, garantizando estándares óptimos de higiene y temperatura.","icono":"mdi:office-building-cog"}]},"marcas":[],"Domestico":[],"Comercial":[],"Industrial":[]}];
const datosNosotros = {
  titulo,
  contenido,
  foto,
  logros,
  sello,
  servicios,
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [currentHash, setCurrentHash] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
      const handleHashChange = () => {
        setCurrentHash(window.location.hash);
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);
  const isHomePage = currentPath === "/";
  const getIconForService = (title) => {
    const iconMap = {
      "Aire acondicionado y climatización": FaSnowflake,
      "Refrigeración comercial e industrial": FaIndustry,
      "Consultoría de desarrollo y ejecución de proyecto": FaClipboardCheck,
      "Servicio especial de cámara frigorífica": FaClipboardCheck
    };
    return iconMap[title] || FaCog;
  };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isLinkActive = (section) => {
    const targetHash = `#${section}`;
    if (isHomePage) {
      return currentHash === targetHash;
    } else {
      return currentPath === `/#${section}` || currentHash === targetHash;
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "flex items-center gap-2 font-bold text-xl transition-transform hover:scale-105",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/TS-Group-logo-Color.webp",
              alt: "TS Group - Soluciones Integrales",
              width: "180",
              height: "60",
              className: "h-20 w-auto md:h-24",
              loading: "eager",
              decoding: "async"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: isHomePage ? "#Inicio" : "/#Inicio",
            className: `text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${isHomePage && currentHash === "#Inicio" ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-foreground hover:bg-accent/50"}`,
            children: [
              /* @__PURE__ */ jsx(FaHome, { className: `w-4 h-4 ${isHomePage && currentHash === "#Inicio" ? "text-primary" : "group-hover:text-primary transition-colors"}` }),
              "INICIO"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: isHomePage ? "#Nosotros" : "/#Nosotros",
            className: `text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${isLinkActive("Nosotros") ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-foreground hover:bg-accent/50"}`,
            children: [
              /* @__PURE__ */ jsx(FaInfoCircle, { className: `w-4 h-4 ${isLinkActive("Nosotros") ? "text-primary" : "group-hover:text-primary transition-colors"}` }),
              "NOSOTROS"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground px-3 py-2 rounded-lg hover:bg-accent/50", children: [
            /* @__PURE__ */ jsx(FaCog, { className: "w-4 h-4 group-hover:text-primary transition-colors" }),
            "SERVICIOS",
            /* @__PURE__ */ jsx("svg", { className: "h-4 w-4 transition-transform duration-200 group-hover:rotate-180", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[400px] rounded-xl border bg-white shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2", children: datosNosotros.servicios.map((servicio, index) => {
            const IconComponent = getIconForService(servicio.titulo);
            const isServiceActive = currentPath.includes(servicio.slug || "");
            return /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/servicios/${servicio.slug || "#"}`,
                className: `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 hover:shadow-sm ${isServiceActive ? "bg-primary-50 text-primary-700" : ""}`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-5 h-5 text-primary-600" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: servicio.titulo }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 line-clamp-1", children: servicio.contenido })
                  ] }),
                  /* @__PURE__ */ jsx(FaChevronRight, { className: "w-4 h-4 text-gray-400" })
                ]
              },
              index
            );
          }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: isHomePage ? "#Productos" : "/#Productos",
            className: `text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${isLinkActive("Productos") ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-foreground hover:bg-accent/50"}`,
            children: [
              /* @__PURE__ */ jsx(FaBox, { className: `w-4 h-4 ${isLinkActive("Productos") ? "text-primary" : "group-hover:text-primary transition-colors"}` }),
              "PRODUCTOS"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: isHomePage ? "#contacto" : "/#contacto",
            className: `text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${isLinkActive("contacto") ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-foreground hover:bg-accent/50"}`,
            children: [
              /* @__PURE__ */ jsx(FaPhone, { className: `w-4 h-4 ${isLinkActive("contacto") ? "text-primary" : "group-hover:text-primary transition-colors"}` }),
              "CONTACTO"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/519XXXXXXXX",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden base:inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors bg-green-500 text-white hover:bg-green-600 h-10 px-4 gap-2 shadow-md hover:shadow-lg",
            children: [
              /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-5 h-5" }),
              "WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: isHomePage ? "#contacto" : "/#contacto",
            className: "hidden base:inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors bg-primary text-white hover:bg-primary/90 h-10 px-6 gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform",
            children: [
              /* @__PURE__ */ jsx(FaPhoneAlt, { className: "w-4 h-4" }),
              "CONTACTANOS"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleMobileMenu,
            className: "md:hidden p-2 rounded-lg hover:bg-accent transition-colors",
            "aria-label": "Abrir menú",
            children: /* @__PURE__ */ jsx(FaBars, { className: "h-6 w-6" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `md:hidden fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
        onClick: closeMobileMenu,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`,
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-900", children: "Menú" }),
                /* @__PURE__ */ jsx("button", { onClick: closeMobileMenu, className: "p-2 rounded-lg hover:bg-gray-100", children: /* @__PURE__ */ jsx(FaTimes, { className: "h-6 w-6" }) })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                [
                  { section: "Inicio", href: isHomePage ? "#Inicio" : "/#Inicio", icon: FaHome, text: "INICIO" },
                  { section: "Nosotros", href: isHomePage ? "#Nosotros" : "/#Nosotros", icon: FaInfoCircle, text: "NOSOTROS" },
                  { section: "Productos", href: isHomePage ? "#Productos" : "/#Productos", icon: FaBox, text: "PRODUCTOS" },
                  { section: "contacto", href: isHomePage ? "#contacto" : "/#contacto", icon: FaPhone, text: "CONTACTO" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: item.href,
                      onClick: closeMobileMenu,
                      className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isLinkActive(item.section) ? "bg-primary-50 text-primary-700" : "hover:bg-primary-50 hover:text-primary-700"}`,
                      children: [
                        /* @__PURE__ */ jsx(IconComponent, { className: "w-5 h-5" }),
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.text })
                      ]
                    },
                    index
                  );
                }),
                /* @__PURE__ */ jsxs("div", { className: "border-t pt-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-4 px-4", children: "SERVICIOS" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: datosNosotros.servicios.map((servicio, index) => {
                    const IconComponent = getIconForService(servicio.titulo);
                    const isServiceActive = currentPath.includes(servicio.slug || "");
                    return /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: `/servicios/${servicio.slug || "#"}`,
                        onClick: closeMobileMenu,
                        className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isServiceActive ? "bg-primary-50 text-primary-700" : "hover:bg-primary-50"}`,
                        children: [
                          /* @__PURE__ */ jsx(IconComponent, { className: "w-5 h-5 text-primary-600" }),
                          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900", children: servicio.titulo }) })
                        ]
                      },
                      index
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-6 border-t", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://wa.me/51912909920",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      onClick: closeMobileMenu,
                      className: "flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600",
                      children: [
                        /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-5 h-5" }),
                        "WhatsApp"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: isHomePage ? "#contacto" : "/#contacto",
                      onClick: closeMobileMenu,
                      className: "flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90",
                      children: [
                        /* @__PURE__ */ jsx(FaPhoneAlt, { className: "w-5 h-5" }),
                        "CONTACTANOS"
                      ]
                    }
                  )
                ] })
              ] }) }) })
            ]
          }
        )
      }
    )
  ] });
};

const contacto = {"informacion_contacto":{"telefonos":[{"tipo":"Principal","numero":"+51 912 909 920","whatsapp":"https://wa.me/51912909920","descripcion":"Atención general y ventas"}],"correos":[{"tipo":"General","email":"servicios@teknisolutions.pe","descripcion":"Consultas generales"}],"direcciones":[{"tipo":"Oficina Principal","direccion":"JIRON MARÍA JOSÉ DE ARCE 261, SAN MIGUEL","ciudad":"Lima","pais":"Perú","mapa":"https://www.google.com/maps/place/Jr.+Mar%C3%ADa+Jos%C3%A9+de+Arce+261,+Lima+15087/@-12.0808518,-77.093553,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c9709d87e7c3:0xf774936e84aa5580!8m2!3d-12.0808571!4d-77.0909781!16s%2Fg%2F11y3306t0q?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D","horario":"Lun-Vie: 9:00 AM - 6:00 PM"}]},"redes_sociales":{"facebook":{"nombre":"Facebook","icono":"mdi:facebook","url":"https://www.facebook.com/profile.php?id=61582764215863","usuario":"@TS GROUP","color":"bg-blue-600"},"tiktok":{"nombre":"TikTok","icono":"mdi:tiktok","url":"https://www.tiktok.com/@ts.group.peru?_r=1&_t=ZS-92KnR5t9hyC","usuario":"@TS GROUP","color":"bg-black"}},"formulario_contacto":{"politica_privacidad":"Acepto la política de privacidad"},"whatsapp_botones":[{"tipo":"Consulta General","numero":"+51 912 909 920","mensaje":"Hola, me gustaría hacer una consulta","color":"bg-green-500","icono":"mdi:whatsapp"}],"horarios_atencion":{"general":"Lunes a Viernes: 9:00 AM - 6:00 PM"}};
const ContactoData = {
  contacto,
};

const clientes_nombres = ["Edward Yllanes","María Rodríguez","Carlos Mendoza","Ana Sánchez","Luis Torres","Jorge Pérez","Laura González","Roberto Castro","Patricia Vargas","Fernando Ruiz","Gabriela Morales","Ricardo Herrera","Sofía López","Miguel Ángel Díaz","Carmen Flores","Andrés Silva","Isabel Ríos","José Martínez","Daniela Ortega","Juan Carlos Soto","Verónica Medina","Francisco Núñez","Elena Castillo","Raúl Delgado","Adriana Peña","Antonio Reyes","Teresa Vega","Héctor Guzmán","Natalia Cruz","Oscar Ramírez","Lucía Mendoza","Alberto Salazar","Rosa Jiménez","Pedro Navarro","Claudia Romero","Manuel Acosta","Beatriz Rojas","Sergio Paredes","Carolina Torres","Felipe Chávez","Valeria Espinoza","Diego Valdez","Monica Herrera","Arturo Campos","Liliana Fuentes","Javier Lozano","Paola Miranda","Gustavo Ríos","Karla Salinas","Roberto Mejía","Silvia Orozco","Mario León","Eugenia Cervantes","Alfonso Ponce","Irene Montes","Armando Solís","Ruth Palacios","Emilio Cabrera","Victoria Lira","Renato Gallegos","Diana Olvera","Hugo Barrera","Marisol Avalos","Rubén Cárdenas","Olivia Zúñiga","Federico Villegas","Fabiola Quiroz","Rodrigo Correa","Alicia Valencia","Saúl Ibarra","Estela Peralta","Enrique Cordero","Norma Escobar","Gerardo Arellano","Rocío Duarte","Raúl Marín","Leticia Galván","Salvador Tapia","Gladys Rangel","Eduardo Carmona","Yolanda Venegas","Ignacio Montoya","Consuelo Juárez","Ramón Vázquez","Rebeca Bustos","Alfredo Lara","Miriam Carrillo","Óscar Franco","Sara de la Torre","Marcelo Santana","Alejandra Moya","Feliciano Serrano","Griselda Mora","Bernardo Ochoa","Elvira Esquivel","César Pacheco","Tania Lerma","Donato Villanueva","Rita Caballero","Gregorio Téllez","Susana Ávila","Humberto Barrios","Clara Macías","Víctor Reséndiz","Matilde Salgado","Simón Zamora","Josefina Maldonado","Fermín Rivas","Amelia Pizarro","Leopoldo Godínez","Dulce Figueroa","Aníbal Valencia","Margarita Andrade","Ismael Nieto","Carmelo Zavala","Cecilia Arredondo","Baltazar Aguirre","Rosario Murillo","Maximiliano Segura","Blanca Orozco","Genaro Calderón","Maricela Montiel","Severiano Treviño","Aurora Escamilla","Cornelio Uribe","Guadalupe Alvarado","Benjamín Luevano","Magdalena Collado","Teodoro Amador","Lourdes Velasco","Celestino Alanís","Pilar Cardona","Arnulfo Barragán","Soledad Ceballos","Filemón Arriaga","Jacinta Villagómez","Nicolás Gallardo","Berta Cano","Marcos Bernal","Esther Alarcón","Agustín Olmos","Petrona Mireles","Cirino Bañuelos","Ester Osorio","Bonifacio Zepeda","Ramona Anguiano","Claudio Camacho","Gloria Partida","Melitón Gaytán","Herminia Varela","Rosendo Arcos","Florencia Tovar","Adalberto Aldana","Candelaria Badillo","Eleuterio Casas","Jovita Carreón","Próspero Guevara","Dorotea de la Rosa","Amador Barrientos","Sabina Bustamante","Leoncio Mayorga","Tecla Nava","Heliodoro Perales","Úrsula Aguilera","Nicéforo Delgadillo","Bernardina Llamas","Inocencio Zaragoza","Modesta Palomo","Quirino Dueñas","Fidelina Corral","Severino Roldán","Epifania Sauceda","Dámaso Valdivia","Eulogia Montaño","Celso Rentería","Librada Loredo","Diómedes Barrios","Priscila Vela","Macario Almanza","Gregoria Aranda","Nemesio Tirado","Marcial Villaseñor","Benita Páez","Gumersindo Heredia","Cirila Vallejo","Adolfo Manzano","Apolonia Cardoso","Donaciano Olivas","Fortunata Galindo","Justo Alcalá","Custodia Arévalo","Cesáreo Benítez","Gertrudis Carrasco","Abundio Negrete","Demetria Chavarría","Aurelio Mesa","Esperanza Casillas","Julián Limón","Josefa Cortés","Nazario Portillo","Leonor Palacios","Raimundo Quintana","Rosalía Medrano"];
const adjetivos = ["recientemente","hace un momento","hoy","esta semana","ahora mismo","acaba de","justo ahora","en este momento","recién"];
const verbos = ["solicitó","contrató","adquirió","eligió","se decidió por","confió en","seleccionó","tomó","obtuvo","pidió"];
const SatisfechoData = {
  clientes_nombres,
  adjetivos,
  verbos};

const productos = [{"id":1,"img":"/AireAcodiciondo/aire acondicionado split decorativo piso techo.webp","titulo":"Aire acondicionado split decorativo piso techo","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":2,"img":"/AireAcodiciondo/aire acondicionado split ducto.webp","titulo":"Aire acondicionado split ducto","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":3,"img":"/AireAcodiciondo/aire acondicionado tipo paquete.webp","titulo":"Aire acondicionado tipo paquete","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":4,"img":"/AireAcodiciondo/cassette.webp","titulo":"Cassette","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":5,"img":"/AireAcodiciondo/chiller.webp","titulo":"Chiller","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":6,"img":"/AireAcodiciondo/ductos.webp","titulo":"Ductos","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":7,"img":"/AireAcodiciondo/fan coil.webp","titulo":"Fan Coil","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":8,"img":"/AireAcodiciondo/HVAC.webp","titulo":"HVAC","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":9,"img":"/AireAcodiciondo/MiniSpliPardeFrioCalor.webp","titulo":"split y minisplit convencional e inverter","categoria":["Mantenimiento","Reparación","Instalación"]},{"id":10,"img":"/AireAcodiciondo/MultiV.webp","titulo":"MultiV","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":11,"img":"/AireAcodiciondo/paquete rooftop.webp","titulo":"paquete rooftop","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":12,"img":"/AireAcodiciondo/SplitParedFrioCalor.webp","titulo":"Split Pared Frio/Calor","categoria":["Mantenimiento","Reparación","Instalación"]},{"id":13,"img":"/AireAcodiciondo/VRF.webp","titulo":"VRF","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":14,"img":"/AireAcodiciondo/VRV.webp","titulo":"VRV","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":15,"img":"/RefrigeracionComercialIndustrial/camara frigorifica industrial.webp","titulo":"camara frigorifica industrial","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":16,"img":"/RefrigeracionComercialIndustrial/camara frigorifica.webp","titulo":"congelador vertical","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":17,"img":"/RefrigeracionComercialIndustrial/chiller industrial.webp","titulo":"chiller industrial","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":18,"img":"/RefrigeracionComercialIndustrial/congelador horizontal.webp","titulo":"congelador horizontal","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":19,"img":"/RefrigeracionComercialIndustrial/congelador vertical.webp","titulo":"visicooler","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":20,"img":"/RefrigeracionComercialIndustrial/cuarto frio.webp","titulo":"cuarto frio","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":21,"img":"/RefrigeracionComercialIndustrial/enfriador industrial.webp","titulo":"enfriador industrial","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":22,"img":"/RefrigeracionComercialIndustrial/exhibidor.webp","titulo":"exhibidor","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":23,"img":"/RefrigeracionComercialIndustrial/hidrocooler.webp","titulo":"hidrocooler","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":24,"img":"/RefrigeracionComercialIndustrial/maquina de hielo industrial.webp","titulo":"maquina de hielo industrial","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":25,"img":"/RefrigeracionComercialIndustrial/maquina de hielo.webp","titulo":"maquina de hielo","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":26,"img":"/RefrigeracionComercialIndustrial/sala de proceso.webp","titulo":"sala de proceso","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":27,"img":"/RefrigeracionComercialIndustrial/tunel de enfriamiento.webp","titulo":"tunel de enfriamiento","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]},{"id":28,"img":"/RefrigeracionComercialIndustrial/visicooler.webp","titulo":"visicooler","categoria":["Mantenimiento","Reparación","Instalación","Desarrollo","Ejecución de Proyecto"]}];
const productosData = {
  productos,
};

const Footer = () => {
  const datos = ContactoData.contacto || {};
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [allCombinations, setAllCombinations] = useState([]);
  const generateAllCombinations = useCallback(() => {
    const combinations = [];
    const clientes = SatisfechoData.clientes_nombres || [];
    const adjetivos = SatisfechoData.adjetivos || [];
    const verbos = SatisfechoData.verbos || [];
    const productos = productosData.productos || [];
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i];
      const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
      const verbo = verbos[Math.floor(Math.random() * verbos.length)];
      const producto = productos[Math.floor(Math.random() * productos.length)];
      combinations.push({
        id: i,
        cliente,
        adjetivo,
        verbo,
        producto,
        timestamp: Date.now() + i
        // Para hacerlos únicos
      });
    }
    return combinations;
  }, []);
  useEffect(() => {
    const combinations = generateAllCombinations();
    setAllCombinations(combinations);
  }, [generateAllCombinations]);
  const showRandomNotification = useCallback(() => {
    if (allCombinations.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allCombinations.length);
    const notification = allCombinations[randomIndex];
    setCurrentNotification(notification);
    setIsVisible(true);
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      const removeTimeout = setTimeout(() => {
        setCurrentNotification(null);
      }, 500);
      return () => clearTimeout(removeTimeout);
    }, 5e3);
    return () => clearTimeout(hideTimeout);
  }, [allCombinations]);
  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showRandomNotification();
    }, 3e3);
    const interval = setInterval(() => {
      showRandomNotification();
    }, 1e4 + Math.random() * 1e4);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [showRandomNotification]);
  const closeNotification = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentNotification(null);
    }, 500);
  };
  const iconMap = {
    "Mantenimiento Preventivo": FaCheckCircle,
    "Instalación de Sistemas": FaTools,
    "Reparación Especializada": FaWrench,
    "Ductos y Ventilación": FaFilter,
    "Control de Calidad": FaShieldAlt,
    "Consultoría HVAC": FaUserTie
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
  const servicios = datosNosotros.servicios || [];
  const logros = datosNosotros.logros || [];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white pt-12 pb-8", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-6", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/transparente.png",
              alt: "Logo de la empresa",
              className: "w-52 h-auto max-w-full",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: "Especialistas en sistemas de climatización y ventilación industrial. Soluciones HVAC de alta calidad desde 2010." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
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
                  className: `w-10 h-10 rounded-full flex items-center justify-center transition-colors ${colorClass}`,
                  "aria-label": red.nombre,
                  children: /* @__PURE__ */ jsx(IconComponent, { className: "w-5 h-5" })
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
                className: "w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors",
                "aria-label": "WhatsApp",
                children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-6", children: "Servicios" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: servicios.slice(0, 6).map((servicio, index) => {
            const IconComponent = iconMap[servicio.titulo] || FaCog;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: servicio.url || "#",
                className: "text-gray-400 hover:text-primary transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4" }),
                  servicio.titulo
                ]
              }
            ) }, index);
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-6", children: "Contacto" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
            direcciones.map((direccion, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(FaMapMarkerAlt, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                direccion.direccion,
                /* @__PURE__ */ jsx("br", {}),
                direccion.ciudad,
                ", ",
                direccion.pais
              ] })
            ] }, index)),
            telefonos.map((telefono, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(FaPhone, { className: "w-5 h-5 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:${telefono.numero}`,
                  className: "text-gray-400 hover:text-primary transition-colors",
                  children: telefono.numero
                }
              )
            ] }, index)),
            correos.map((correo, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(FaEnvelope, { className: "w-5 h-5 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${correo.email}`,
                  className: "text-gray-400 hover:text-primary transition-colors",
                  children: correo.email
                }
              )
            ] }, index)),
            whatsappBotones.slice(0, 1).map((boton, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://wa.me/${boton.numero.replace(/\D/g, "")}?text=${encodeURIComponent(boton.mensaje)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-green-400 hover:text-green-300 transition-colors font-medium",
                  children: [
                    "WhatsApp: ",
                    boton.numero
                  ]
                }
              )
            ] }, index))
          ] }),
          Object.keys(horariosAtencion).length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-gray-800", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2", children: "Horario de Atención" }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm", children: [
              horariosAtencion.general,
              /* @__PURE__ */ jsx("br", {}),
              horariosAtencion.sabados
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "p-3 cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300",
              onClick: () => window.location.href = "/reclamaciones",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "https://friotemp.com.pe/wp-content/uploads/libroreclamaciones-blanco.avif",
                  alt: "Libro de Reclamaciones",
                  className: "h-20 w-auto hover:scale-105 transition-transform duration-300",
                  loading: "lazy"
                }
              )
            }
          ),
          logros.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-gray-800", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-4", children: "Nuestros Logros" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: logros.slice(0, 3).map((logro, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(FaCheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: logro })
            ] }, index)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-800 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-gray-500 text-sm", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " MiEmpresa. Todos los derechos reservados."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/privacidad",
              className: "text-gray-400 hover:text-primary transition-colors text-sm",
              children: "Política de Privacidad"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/terminos",
              className: "text-gray-400 hover:text-primary transition-colors text-sm",
              children: "Términos de Servicio"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/cookies",
              className: "text-gray-400 hover:text-primary transition-colors text-sm",
              children: "Cookies"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/sitemap.xml",
              className: "text-gray-400 hover:text-primary transition-colors text-sm",
              children: "Mapa del Sitio"
            }
          )
        ] })
      ] }) })
    ] }) }),
    whatsappBotones.length > 0 && /* @__PURE__ */ jsxs(
      "a",
      {
        href: `https://wa.me/${whatsappBotones[0].numero.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappBotones[0].mensaje)}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hidden md:fixed md:flex bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group",
        "aria-label": "Contactar por WhatsApp",
        children: [
          /* @__PURE__ */ jsx(FaWhatsapp, { className: "w-7 h-7" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute flex flex-col right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all", children: [
            /* @__PURE__ */ jsx("span", { children: "¿Necesitas ayuda? " }),
            /* @__PURE__ */ jsx("span", { children: whatsappBotones[0].numero })
          ] })
        ]
      }
    ),
    currentNotification && /* @__PURE__ */ jsx("div", { className: `hidden md:fixed md:flex bottom-6 left-6 z-40 transition-all duration-500 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`, children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white border border-gray-300 rounded-lg shadow-xl p-3 max-w-64", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: closeNotification,
          className: "absolute -top-2 cursor-pointer  -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors",
          "aria-label": "Cerrar notificación",
          children: /* @__PURE__ */ jsx(FaTimes, {})
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start mt-1", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: currentNotification.producto?.img || "/default-product.jpg",
            className: "w-12 h-12 object-cover rounded-md border border-gray-200",
            alt: currentNotification.producto?.titulo || "Producto",
            onError: (e) => {
              e.target.src = "/default-product.jpg";
            }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 font-medium", children: "Ahora" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full", children: "Solicitó servicio" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-semibold text-gray-800 text-sm mb-1", children: currentNotification.cliente }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-tight", children: [
            currentNotification.adjetivo,
            " ",
            currentNotification.verbo,
            " el servicio de",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: currentNotification.producto?.titulo || "nuestro servicio" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 pt-2 border-t border-gray-100", children: /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
            "Hace ",
            Math.floor(Math.random() * 5) + 1,
            " minutos"
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Teknisolutions - Especialistas en Climatizaci\xF3n y Refrigeraci\xF3n",
    description = "Soluciones integrales en aire acondicionado, refrigeraci\xF3n industrial, c\xE1maras frigor\xEDficas y sistemas HVAC en Lima, Per\xFA.",
    image = "/Servicios/AireAcodicionadoClimatizacion.webp",
    canonical = Astro2.url
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="light" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="TS Group - Soluciones Integrales" href="/TS-Group-logo-Color.webp"><meta name="generator"', '><title>TS Group</title><!-- Meta tags SEO --><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Schema Markup --><script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "HVACBusiness",\n				"name": "Teknisolutions",\n				"image": "/TS-Group-logo-Color.webp",\n				"description": "{description}"\n			}\n		<\/script>', "", "", "</head> <body data-astro-cid-sckkx6r4> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/Header.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/Footer.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true }));
}, "C:/Users/edwar/proyectos/my-project/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ContactoData as C, datosNosotros as d, productosData as p };
