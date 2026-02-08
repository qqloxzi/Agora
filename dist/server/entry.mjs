import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DcHlLsVl.mjs';
import { manifest } from './manifest_DeWNSlof.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/create-course.astro.mjs');
const _page4 = () => import('./pages/api/create-course.astro.mjs');
const _page5 = () => import('./pages/api/join-course.astro.mjs');
const _page6 = () => import('./pages/blog/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/courses/_id_.astro.mjs');
const _page10 = () => import('./pages/courses.astro.mjs');
const _page11 = () => import('./pages/egitmen.astro.mjs');
const _page12 = () => import('./pages/goagaci.astro.mjs');
const _page13 = () => import('./pages/kvkk.astro.mjs');
const _page14 = () => import('./pages/ligler.astro.mjs');
const _page15 = () => import('./pages/login.astro.mjs');
const _page16 = () => import('./pages/mevzuat.astro.mjs');
const _page17 = () => import('./pages/pricing.astro.mjs');
const _page18 = () => import('./pages/profile.astro.mjs');
const _page19 = () => import('./pages/signup.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.1_@types+node@25.0.3_jiti@1.21.7_rollup@4.54.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin/create-course.astro", _page3],
    ["src/pages/api/create-course.ts", _page4],
    ["src/pages/api/join-course.ts", _page5],
    ["src/pages/blog/[slug].astro", _page6],
    ["src/pages/blog.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/courses/[id].astro", _page9],
    ["src/pages/courses.astro", _page10],
    ["src/pages/egitmen.astro", _page11],
    ["src/pages/goagaci.astro", _page12],
    ["src/pages/KVKK.astro", _page13],
    ["src/pages/ligler.astro", _page14],
    ["src/pages/login.astro", _page15],
    ["src/pages/mevzuat.astro", _page16],
    ["src/pages/pricing.astro", _page17],
    ["src/pages/profile.astro", _page18],
    ["src/pages/signup.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/alikarakaya/Desktop/Agora/Agora_1.0.1/dist/client/",
    "server": "file:///home/alikarakaya/Desktop/Agora/Agora_1.0.1/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
