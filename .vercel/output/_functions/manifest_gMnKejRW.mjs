import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_C2Sbro3l.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BJ08HdQT.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/edwar/proyectos/my-project/","cacheDir":"file:///C:/Users/edwar/proyectos/my-project/node_modules/.astro/","outDir":"file:///C:/Users/edwar/proyectos/my-project/dist/","srcDir":"file:///C:/Users/edwar/proyectos/my-project/src/","publicDir":"file:///C:/Users/edwar/proyectos/my-project/public/","buildClientDir":"file:///C:/Users/edwar/proyectos/my-project/dist/client/","buildServerDir":"file:///C:/Users/edwar/proyectos/my-project/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"Blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/Blog\\/?$","segments":[[{"content":"Blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Blog.astro","pathname":"/Blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"privacidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacidad","isIndex":false,"type":"page","pattern":"^\\/privacidad\\/?$","segments":[[{"content":"privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacidad.astro","pathname":"/privacidad","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"reclamaciones/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/reclamaciones","isIndex":false,"type":"page","pattern":"^\\/reclamaciones\\/?$","segments":[[{"content":"reclamaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reclamaciones.astro","pathname":"/reclamaciones","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/history","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/history\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"history","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/history.ts","pathname":"/api/history","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/reclamos","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/reclamos\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"reclamos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/reclamos.ts","pathname":"/api/reclamos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/trabajonosotrossend","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/TrabajoNosotrosSend\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"TrabajoNosotrosSend","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/TrabajoNosotrosSend.ts","pathname":"/api/TrabajoNosotrosSend","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://tudominio.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/edwar/proyectos/my-project/src/pages/Blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/edwar/proyectos/my-project/src/pages/[servicio].astro",{"propagation":"none","containsHead":true}],["C:/Users/edwar/proyectos/my-project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/edwar/proyectos/my-project/src/pages/privacidad.astro",{"propagation":"none","containsHead":true}],["C:/Users/edwar/proyectos/my-project/src/pages/reclamaciones.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/history@_@ts":"pages/api/history.astro.mjs","\u0000@astro-page:src/pages/api/reclamos@_@ts":"pages/api/reclamos.astro.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"pages/api/send.astro.mjs","\u0000@astro-page:src/pages/api/TrabajoNosotrosSend@_@ts":"pages/api/trabajonosotrossend.astro.mjs","\u0000@astro-page:src/pages/Blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/privacidad@_@astro":"pages/privacidad.astro.mjs","\u0000@astro-page:src/pages/reclamaciones@_@astro":"pages/reclamaciones.astro.mjs","\u0000@astro-page:src/pages/[servicio]@_@astro":"pages/_servicio_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_gMnKejRW.mjs","C:/Users/edwar/proyectos/my-project/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BGo0KcrR.mjs","C:/Users/edwar/proyectos/my-project/src/components/reclamaciones/Reclamaciones.jsx":"_astro/Reclamaciones.C_NJrMos.js","C:/Users/edwar/proyectos/my-project/src/components/Header.jsx":"_astro/Header.DDwjhB8b.js","C:/Users/edwar/proyectos/my-project/src/components/Footer.jsx":"_astro/Footer.Ci4TrxkH.js","C:/Users/edwar/proyectos/my-project/src/pages/[servicio].astro?astro&type=script&index=0&lang.ts":"_astro/_servicio_.astro_astro_type_script_index_0_lang.wle8e0kL.js","C:/Users/edwar/proyectos/my-project/src/components/Inicio.astro?astro&type=script&index=0&lang.ts":"_astro/Inicio.astro_astro_type_script_index_0_lang.Cof-PWhd.js","C:/Users/edwar/proyectos/my-project/src/components/Nosotros.astro?astro&type=script&index=0&lang.ts":"_astro/Nosotros.astro_astro_type_script_index_0_lang.BhiNOoC2.js","C:/Users/edwar/proyectos/my-project/src/components/nosotros/Formulario.jsx":"_astro/Formulario.BM2G4Zqa.js","C:/Users/edwar/proyectos/my-project/src/components/Carrusel.jsx":"_astro/Carrusel.DNHnRZb-.js","C:/Users/edwar/proyectos/my-project/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.QW52Ox2j.js","@astrojs/react/client.js":"_astro/client.DCKK-Ipe.js","C:/Users/edwar/proyectos/my-project/src/components/Productos":"_astro/Productos.u6J9Hf8l.js","C:/Users/edwar/proyectos/my-project/src/components/Contacto":"_astro/Contacto.BPvhRcPs.js","C:/Users/edwar/proyectos/my-project/src/components/Productos.jsx":"_astro/Productos.CHRx9LYd.js","C:/Users/edwar/proyectos/my-project/src/components/Contacto.jsx":"_astro/Contacto.D_2PoS2f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/edwar/proyectos/my-project/src/pages/[servicio].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.querySelector('a[href=\"/#contacto\"]');t&&t.addEventListener(\"click\",function(n){if(window.location.pathname===\"/\"){n.preventDefault();const o=document.getElementById(\"contacto\");o?o.scrollIntoView({behavior:\"smooth\"}):window.location.hash=\"contacto\"}})});"],["C:/Users/edwar/proyectos/my-project/src/components/Inicio.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelectorAll('[id^=\"slide-\"]');let t=0,n=!1;if(e.length<=1)return;function s(){if(n)return;n=!0;const i=(t+1)%e.length;e[i].classList.remove(\"opacity-0\"),setTimeout(()=>{e[t].classList.add(\"opacity-0\"),t=i,n=!1},1e3)}setInterval(s,5e3)});"],["C:/Users/edwar/proyectos/my-project/src/components/Nosotros.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const d=document.getElementById(\"modalFormulario\");document.addEventListener(\"keydown\",function(n){n.key===\"Escape\"&&!d.classList.contains(\"hidden\")&&d.classList.add(\"hidden\")}),d.addEventListener(\"click\",function(n){n.target===d&&d.classList.add(\"hidden\")})});"]],"assets":["/_astro/Blog.D4iWyv2U.css","/favicon.svg","/transparente.png","/TS-Group-logo-Color.webp","/AireAcodiciondo/aire acondicionado split decorativo piso techo.webp","/AireAcodiciondo/aire acondicionado split ducto.webp","/AireAcodiciondo/aire acondicionado tipo paquete.webp","/AireAcodiciondo/cassette.webp","/AireAcodiciondo/chiller.webp","/AireAcodiciondo/ductos.webp","/AireAcodiciondo/fan coil.webp","/AireAcodiciondo/HVAC.webp","/AireAcodiciondo/MiniSpliPardeFrioCalor.webp","/AireAcodiciondo/MultiV.webp","/AireAcodiciondo/paquete rooftop.webp","/AireAcodiciondo/SplitParedFrioCalor.webp","/AireAcodiciondo/VRF.webp","/AireAcodiciondo/VRV.webp","/Empresa/image (10)-convertido-de-png.webp","/Empresa/image (11)-convertido-de-png.webp","/Empresa/image (12)-convertido-de-png.webp","/Empresa/image (13)-convertido-de-png.webp","/Empresa/image (14)-convertido-de-png.webp","/Empresa/image (15)-convertido-de-png.webp","/Empresa/image (16)-convertido-de-png.webp","/Empresa/image (17)-convertido-de-png.webp","/Empresa/image (18)-convertido-de-png.webp","/Empresa/image (19)-convertido-de-png.webp","/Empresa/image (20)-convertido-de-png.webp","/Empresa/image (21)-convertido-de-png.webp","/Empresa/image (22)-convertido-de-png.webp","/Empresa/image (23)-convertido-de-png.webp","/Empresa/image (24)-convertido-de-png.webp","/Empresa/image (25)-convertido-de-png.webp","/Empresa/image (26)-convertido-de-png.webp","/Empresa/image (27)-convertido-de-png.webp","/Empresa/image (28)-convertido-de-png.webp","/Empresa/image (29)-convertido-de-png.webp","/Empresa/image (30)-convertido-de-png.webp","/Empresa/image (31)-convertido-de-png.webp","/Empresa/image (32)-convertido-de-png.webp","/Empresa/image (33)-convertido-de-png.webp","/Empresa/image (34)-convertido-de-png.webp","/Empresa/image (35)-convertido-de-png.webp","/Empresa/image (37)-convertido-de-png.webp","/Empresa/image (38)-convertido-de-png.webp","/Empresa/image (39)-convertido-de-png.webp","/Empresa/image (40)-convertido-de-png.webp","/Empresa/image (41)-convertido-de-png.webp","/Empresa/image (42)-convertido-de-png.webp","/Empresa/image (43)-convertido-de-png.webp","/Empresa/image (44)-convertido-de-png.webp","/Empresa/image (45)-convertido-de-png.webp","/Empresa/image (46)-convertido-de-png.webp","/Empresa/image (47)-convertido-de-png.webp","/Empresa/image (48)-convertido-de-png.webp","/Empresa/image (49)-convertido-de-png.webp","/Empresa/image (50)-convertido-de-png.webp","/Empresa/image (51)-convertido-de-png.webp","/Empresa/image (52)-convertido-de-png.webp","/Empresa/image (53)-convertido-de-png.webp","/Empresa/image (54)-convertido-de-png.webp","/Empresa/image (55)-convertido-de-png.webp","/Empresa/image (56)-convertido-de-png.webp","/Empresa/image (57)-convertido-de-png.webp","/Empresa/image (58)-convertido-de-png.webp","/Empresa/image (59).webp","/Empresa/image (61).webp","/Empresa/image (62).webp","/Empresa/image (63).webp","/Empresa/image (64).webp","/Empresa/image (65).webp","/Empresa/image (66).webp","/Empresa/image (67).webp","/Empresa/image (68).webp","/Empresa/image (69).webp","/Empresa/image (70).webp","/Empresa/image (71).webp","/Empresa/image (72).webp","/Empresa/image-_1_.webp","/Empresa/image-_2_.webp","/Empresa/image-_3_.webp","/Empresa/image-_4_.webp","/Empresa/image-_5_.webp","/Empresa/image-_6_.webp","/Empresa/image-_7_.webp","/Inicio/FOTO-1.gif","/Inicio/horno.avif","/Inicio/imagen-web-1---22.12.gif","/Servicios/AireAcodicionadoClimatizacion.webp","/Servicios/Asesoramiento.webp","/Servicios/CamaraFrigorificas.webp","/Servicios/camaraFrio.webp","/Servicios/Nuestro Portafolio de Servicios.webp","/Servicios/RefrigeracionComercialEIndustrial.webp","/Servicios/Ventilación y Climatización.webp","/Nosotros/Foto04-casco.gif","/RefrigeracionComercialIndustrial/camara frigorifica industrial.webp","/RefrigeracionComercialIndustrial/camara frigorifica.webp","/RefrigeracionComercialIndustrial/chiller industrial.webp","/RefrigeracionComercialIndustrial/congelador horizontal.webp","/RefrigeracionComercialIndustrial/congelador vertical.webp","/RefrigeracionComercialIndustrial/cuarto frio.webp","/RefrigeracionComercialIndustrial/enfriador industrial.webp","/RefrigeracionComercialIndustrial/exhibidor.webp","/RefrigeracionComercialIndustrial/hidrocooler.webp","/RefrigeracionComercialIndustrial/maquina de hielo industrial.webp","/RefrigeracionComercialIndustrial/maquina de hielo.webp","/RefrigeracionComercialIndustrial/sala de proceso.webp","/RefrigeracionComercialIndustrial/tunel de enfriamiento.webp","/RefrigeracionComercialIndustrial/visicooler.webp","/_astro/Carrusel.DNHnRZb-.js","/_astro/client.DCKK-Ipe.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.QW52Ox2j.js","/_astro/Contacto.BPvhRcPs.js","/_astro/Contacto.BVEOTUsl.js","/_astro/Contacto.D_2PoS2f.js","/_astro/Footer.Ci4TrxkH.js","/_astro/Formulario.BM2G4Zqa.js","/_astro/Header.DDwjhB8b.js","/_astro/index.BmW6Ki2V.js","/_astro/index.CqhaHeD_.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Nosotros.D2NzG5mc.js","/_astro/Productos.CHRx9LYd.js","/_astro/Productos.u6J9Hf8l.js","/_astro/Reclamaciones.C_NJrMos.js","/Blog/index.html","/privacidad/index.html","/reclamaciones/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"vk80IkXGz2bfDW1yr1HimRbf5dHaYRmqe/ulSWPxWDc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
