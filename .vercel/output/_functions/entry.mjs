import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_yA09iFq_.mjs';
import { manifest } from './manifest_0aAH3Tcw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/history.astro.mjs');
const _page2 = () => import('./pages/api/login.astro.mjs');
const _page3 = () => import('./pages/api/reclamos.astro.mjs');
const _page4 = () => import('./pages/api/send.astro.mjs');
const _page5 = () => import('./pages/api/trabajonosotrossend.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/login.astro.mjs');
const _page8 = () => import('./pages/reclamaciones.astro.mjs');
const _page9 = () => import('./pages/servicios/_servicio_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/history.ts", _page1],
    ["src/pages/api/login.ts", _page2],
    ["src/pages/api/reclamos.ts", _page3],
    ["src/pages/api/send.ts", _page4],
    ["src/pages/api/TrabajoNosotrosSend.ts", _page5],
    ["src/pages/Blog.astro", _page6],
    ["src/pages/login.astro", _page7],
    ["src/pages/reclamaciones.astro", _page8],
    ["src/pages/servicios/[servicio].astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c54f585d-a9a3-4c53-8d1d-fed992dd566c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
