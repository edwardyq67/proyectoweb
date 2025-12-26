import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DMru0Gpx.mjs';
import 'piccolore';
import { d as datosNosotros, $ as $$Layout } from '../../chunks/Layout_Caz5SSO4.mjs';
import { $ as $$Icon } from '../../chunks/Icon_BiWHzSZ5.mjs';
/* empty css                                   */
import { $ as $$Carrusel, P as Productos, C as Contacto } from '../../chunks/Contacto_CccL-CDR.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return datosNosotros.servicios.map((servicio) => ({
    params: {
      servicio: servicio.slug
    }
  }));
}
const $$servicio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$servicio;
  const { servicio } = Astro2.params;
  const servicioEncontrado = datosNosotros.servicios.find(
    (s) => s.slug === servicio
  );
  if (!servicioEncontrado) {
    return Astro2.redirect("/404");
  }
  const servicioSlugParaProductos = servicioEncontrado?.slug || null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": servicioEncontrado.titulo, "data-astro-cid-lmqf7jrb": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-16 min-h-[50vh] flex items-center justify-center overflow-hidden" data-astro-cid-lmqf7jrb> <div class="absolute inset-0 z-0"${addAttribute(`
        background-image: url('${servicioEncontrado.img}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `, "style")} data-astro-cid-lmqf7jrb> <div class="absolute inset-0 bg-black/70" data-astro-cid-lmqf7jrb></div> </div> <div class="container relative z-10 px-4" data-astro-cid-lmqf7jrb> <div class="max-w-4xl mx-auto text-center" data-astro-cid-lmqf7jrb> <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-astro-cid-lmqf7jrb> ${servicioEncontrado.titulo} </h1> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-lmqf7jrb> <a href="#contacto" class="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:calendar-check", "class": "w-5 h-5 mr-2", "data-astro-cid-lmqf7jrb": true })}
Solicitar Cotización
</a> ${(servicioEncontrado.titulo === "Aire acondicionado y climatizaci\xF3n" || servicioEncontrado.titulo === "Refrigeraci\xF3n comercial e industrial") && renderTemplate`<a${addAttribute(`https://wa.me/51912909920?text=${encodeURIComponent(`Hola, quiero un asesoramiento para: ${servicioEncontrado.titulo}`)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:whatsapp", "class": "w-5 h-5 mr-2", "data-astro-cid-lmqf7jrb": true })}
Asesoramiento por WhatsApp
</a>`} </div> </div> </div> </section>  <section class="py-16 lg:py-24 bg-white" data-astro-cid-lmqf7jrb> <div class="container" data-astro-cid-lmqf7jrb> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-lmqf7jrb> <div class="relative" data-astro-cid-lmqf7jrb> <div class="relative rounded-2xl overflow-hidden shadow-2xl" data-astro-cid-lmqf7jrb> <img${addAttribute(servicioEncontrado.img, "src")}${addAttribute(servicioEncontrado.titulo, "alt")} class="w-full h-auto object-cover" data-astro-cid-lmqf7jrb> </div> <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full -z-10" data-astro-cid-lmqf7jrb></div> </div> <div data-astro-cid-lmqf7jrb> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-lmqf7jrb> ${servicioEncontrado.titulo} </h2> <p class="text-lg text-gray-600 mb-6 leading-relaxed" data-astro-cid-lmqf7jrb> ${servicioEncontrado.descripcion_larga} </p> <div class="space-y-4 mt-8" data-astro-cid-lmqf7jrb> <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors" data-astro-cid-lmqf7jrb> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:certificate", "class": "w-6 h-6 text-primary", "data-astro-cid-lmqf7jrb": true })} </div> <div data-astro-cid-lmqf7jrb> <h4 class="font-semibold text-gray-900 mb-1" data-astro-cid-lmqf7jrb>Experiencia Certificada</h4> <p class="text-gray-600 text-sm" data-astro-cid-lmqf7jrb>Equipo técnico especializado con certificaciones internacionales</p> </div> </div> <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors" data-astro-cid-lmqf7jrb> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:lightning-bolt", "class": "w-6 h-6 text-primary", "data-astro-cid-lmqf7jrb": true })} </div> <div data-astro-cid-lmqf7jrb> <h4 class="font-semibold text-gray-900 mb-1" data-astro-cid-lmqf7jrb>Alta Eficiencia Energética</h4> <p class="text-gray-600 text-sm" data-astro-cid-lmqf7jrb>Equipos que reducen hasta 40% el consumo eléctrico</p> </div> </div> <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors" data-astro-cid-lmqf7jrb> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:shield-check", "class": "w-6 h-6 text-primary", "data-astro-cid-lmqf7jrb": true })} </div> <div data-astro-cid-lmqf7jrb> <h4 class="font-semibold text-gray-900 mb-1" data-astro-cid-lmqf7jrb>Garantía y Seguridad</h4> <p class="text-gray-600 text-sm" data-astro-cid-lmqf7jrb>Instalaciones certificadas con garantía extendida</p> </div> </div> </div> </div> </div> </div> </section> ${Object.keys(servicioEncontrado.VentilacionClimatizacion).length > 0 && servicioEncontrado.VentilacionClimatizacion.servicios && renderTemplate`<section class="py-16 lg:py-24 bg-gradient-to-br from-primary-950 to-primary-950" data-astro-cid-lmqf7jrb> <div class="container" data-astro-cid-lmqf7jrb> <div class="text-center mb-12" data-astro-cid-lmqf7jrb> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" data-astro-cid-lmqf7jrb> ${servicioEncontrado.VentilacionClimatizacion.titulo} </h2> <p class="text-lg text-gray-300 max-w-3xl mx-auto" data-astro-cid-lmqf7jrb>
Sistemas especializados para calidad del aire y confort ambiental
</p> </div> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-lmqf7jrb> <div class="relative order-2 lg:order-1" data-astro-cid-lmqf7jrb> <div class="relative rounded-2xl overflow-hidden shadow-2xl" data-astro-cid-lmqf7jrb> <img${addAttribute(servicioEncontrado.VentilacionClimatizacion.img || servicioEncontrado.img, "src")}${addAttribute(servicioEncontrado.VentilacionClimatizacion.titulo, "alt")} class="w-full h-auto object-cover" data-astro-cid-lmqf7jrb> <div class="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent" data-astro-cid-lmqf7jrb></div> </div> <div class="absolute -top-6 -left-6 w-40 h-40 bg-primary-500/5 rounded-full -z-10" data-astro-cid-lmqf7jrb></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10" data-astro-cid-lmqf7jrb></div> </div> <!-- Contenido --> <div class="order-1 lg:order-2" data-astro-cid-lmqf7jrb> <!-- Servicios de Ventilación --> <div class="grid grid-cols-2 gap-4 mb-8" data-astro-cid-lmqf7jrb> ${servicioEncontrado.VentilacionClimatizacion.servicios.map((servicioVent, index) => renderTemplate`<div class="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100" data-astro-cid-lmqf7jrb> <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-3" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": servicioVent.icono, "class": "w-6 h-6 text-primary-600", "data-astro-cid-lmqf7jrb": true })} </div> <h4 class="font-semibold text-gray-900 mb-2" data-astro-cid-lmqf7jrb> ${servicioVent.nombre} </h4> <p class="text-gray-600 text-sm" data-astro-cid-lmqf7jrb> ${servicioVent.descripcion} </p> </div>`)} </div> </div> </div> </div> </section>`} ${servicioEncontrado.secciones && servicioEncontrado.secciones.length > 0 && renderTemplate`<section class="py-16 lg:py-24 bg-white" data-astro-cid-lmqf7jrb> <div class="container" data-astro-cid-lmqf7jrb> <!-- Encabezado de la sección --> <div class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-lmqf7jrb> <span class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:chart-box", "class": "w-4 h-4", "data-astro-cid-lmqf7jrb": true })}
Información Especializada
</span> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-astro-cid-lmqf7jrb> ${servicioEncontrado.secciones[0].titulo} </h2> ${servicioEncontrado.secciones[0].contenido && renderTemplate`<p class="text-lg md:text-xl text-gray-600 leading-relaxed" data-astro-cid-lmqf7jrb> ${servicioEncontrado.secciones[0].contenido} </p>`} </div> <!-- Contenido de la sección - Layout mejorado --> ${servicioEncontrado.secciones[0].items && Array.isArray(servicioEncontrado.secciones[0].items) && servicioEncontrado.secciones[0].items.length > 0 && renderTemplate`<div class="max-w-6xl mx-auto" data-astro-cid-lmqf7jrb> <!-- Para 5 items, diseño especial --> ${servicioEncontrado.secciones[0].items.length === 5 ? renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-astro-cid-lmqf7jrb> <!-- Items restantes (4 items) --> ${servicioEncontrado.secciones[0].items.map((item, idx) => {
    const getIconName = (titulo) => {
      if (!titulo) return "mdi:information";
      if (titulo.includes("Salud") || titulo.includes("Hospitalario")) return "mdi:medical-bag";
      if (titulo.includes("Farmac\xE9utica")) return "mdi:pill";
      if (titulo.includes("Alimentaria") || titulo.includes("Procesamiento")) return "mdi:food-apple";
      if (titulo.includes("Corporativo") || titulo.includes("Comercial")) return "mdi:office-building";
      if (titulo.includes("Residencial")) return "mdi:home";
      if (titulo.includes("Retail")) return "mdi:store";
      if (titulo.includes("Horeca")) return "mdi:chef-hat";
      return "mdi:information";
    };
    return renderTemplate`<div class="bg-gradient-to-br from-primary-50 to-white border border-gray-100 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-300" data-astro-cid-lmqf7jrb> <div class="flex items-start gap-4" data-astro-cid-lmqf7jrb> <div class="flex-shrink-0 mt-1" data-astro-cid-lmqf7jrb> <div class="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": getIconName(item?.titulo), "class": "w-6 h-6 text-primary-600", "data-astro-cid-lmqf7jrb": true })} </div> </div> <div data-astro-cid-lmqf7jrb> <h4 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-lmqf7jrb> ${item?.titulo || "Sector especializado"} </h4> <p class="text-gray-600" data-astro-cid-lmqf7jrb> ${item?.descripcion || "Informaci\xF3n especializada del sector"} </p> </div> </div> </div>`;
  })} </div>` : renderTemplate`<!-- Layout estándar para otros números de items -->
            <div class="grid grid-cols-1 lg:grid-cols-2  gap-6" data-astro-cid-lmqf7jrb> ${servicioEncontrado.secciones[0].items.map((item, idx) => {
    const getIconName = (titulo) => {
      if (!titulo) return "mdi:information";
      if (titulo.includes("Salud") || titulo.includes("Hospitalario")) return "mdi:hospital";
      if (titulo.includes("Farmac\xE9utica")) return "mdi:pill";
      if (titulo.includes("Alimentaria") || titulo.includes("Procesamiento")) return "mdi:food";
      if (titulo.includes("Corporativo") || titulo.includes("Comercial")) return "mdi:briefcase";
      if (titulo.includes("Residencial")) return "mdi:home";
      if (titulo.includes("Retail")) return "mdi:store";
      if (titulo.includes("Horeca")) return "mdi:chef-hat";
      return "mdi:information";
    };
    return renderTemplate`<div class="flex flex-col cursor-pointer hover:border-primary-200 hover:shadow-lg transition-all duration-300 md:flex-row items-start gap-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10 border border-primary-100" data-astro-cid-lmqf7jrb> <!-- Icono --> <div class="mb-4" data-astro-cid-lmqf7jrb> <div class="w-14 h-14 rounded-xl from-primary-50 to-primary-100 flex items-center justify-center group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": getIconName(item?.titulo), "class": "w-7 h-7 text-primary-600", "data-astro-cid-lmqf7jrb": true })} </div> </div> <div data-astro-cid-lmqf7jrb> <!-- Contenido --> <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors" data-astro-cid-lmqf7jrb> ${item?.titulo || "Sector especializado"} </h3> <p class="text-gray-600 text-sm leading-relaxed" data-astro-cid-lmqf7jrb> ${item?.descripcion || "Informaci\xF3n especializada del sector"} </p> </div> </div>`;
  })} </div>`} </div>`} </div> </section>`}${(servicioEncontrado.Domestico.length > 0 || servicioEncontrado.Comercial.length > 0 || servicioEncontrado.Industrial.length > 0) && renderTemplate`${renderComponent($$result2, "Carrusel", $$Carrusel, { "data-astro-cid-lmqf7jrb": true })}`}${(servicioEncontrado.Domestico.length > 0 || servicioEncontrado.Comercial.length > 0 || servicioEncontrado.Industrial.length > 0) && renderTemplate`${renderComponent($$result2, "Productos", Productos, { "client:load": true, "servicioSlug": servicioSlugParaProductos, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/Productos", "client:component-export": "default", "data-astro-cid-lmqf7jrb": true })}`} <section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-lmqf7jrb> <div class="container" data-astro-cid-lmqf7jrb> <div class="text-center mb-12" data-astro-cid-lmqf7jrb> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-lmqf7jrb>
Servicios Relacionados
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-lmqf7jrb>
Soluciones completas para todas tus necesidades de climatización
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-lmqf7jrb> ${datosNosotros.servicios.filter((s) => s.slug !== servicio).slice(0, 3).map((servicioRel, index) => renderTemplate`<a${addAttribute(servicioRel.url, "href")} class="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" data-astro-cid-lmqf7jrb> <div class="relative h-48 overflow-hidden" data-astro-cid-lmqf7jrb> <img${addAttribute(servicioRel.img, "src")}${addAttribute(servicioRel.titulo, "alt")} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" data-astro-cid-lmqf7jrb> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" data-astro-cid-lmqf7jrb></div> <div class="absolute top-4 left-4" data-astro-cid-lmqf7jrb> <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center" data-astro-cid-lmqf7jrb> ${renderComponent($$result2, "Icon", $$Icon, { "name": servicioRel.icono, "class": "w-6 h-6 text-white", "data-astro-cid-lmqf7jrb": true })} </div> </div> </div> <div class="p-6" data-astro-cid-lmqf7jrb> <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors" data-astro-cid-lmqf7jrb> ${servicioRel.titulo} </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2" data-astro-cid-lmqf7jrb> ${servicioRel.contenido} </p> <div class="flex items-center justify-between" data-astro-cid-lmqf7jrb> <span class="text-primary font-semibold group-hover:underline" data-astro-cid-lmqf7jrb>
Ver detalles
</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "w-5 h-5 text-primary transform group-hover:translate-x-2 transition-transform", "data-astro-cid-lmqf7jrb": true })} </div> </div> <div class="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300" data-astro-cid-lmqf7jrb></div> </a>`)} </div> </div> </section> ${renderComponent($$result2, "Contacto", Contacto, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/components/Contacto", "client:component-export": "default", "data-astro-cid-lmqf7jrb": true })} ` })}  ${renderScript($$result, "C:/Users/edwar/proyectos/my-project/src/pages/servicios/[servicio].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/edwar/proyectos/my-project/src/pages/servicios/[servicio].astro", void 0);

const $$file = "C:/Users/edwar/proyectos/my-project/src/pages/servicios/[servicio].astro";
const $$url = "/servicios/[servicio]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$servicio,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
