import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BkcA5a2h.mjs';
import { manifest } from './manifest_gMnKejRW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/history.astro.mjs');
const _page2 = () => import('./pages/api/reclamos.astro.mjs');
const _page3 = () => import('./pages/api/send.astro.mjs');
const _page4 = () => import('./pages/api/trabajonosotrossend.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/privacidad.astro.mjs');
const _page7 = () => import('./pages/reclamaciones.astro.mjs');
const _page8 = () => import('./pages/_servicio_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/history.ts", _page1],
    ["src/pages/api/reclamos.ts", _page2],
    ["src/pages/api/send.ts", _page3],
    ["src/pages/api/TrabajoNosotrosSend.ts", _page4],
    ["src/pages/Blog.astro", _page5],
    ["src/pages/privacidad.astro", _page6],
    ["src/pages/reclamaciones.astro", _page7],
    ["src/pages/[servicio].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "19c52ced-0587-4c84-ab71-ab5097837359",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
