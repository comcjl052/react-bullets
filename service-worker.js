if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!c[e]&&(await new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}),!c[e]))throw new Error(`Module ${e} didn’t register its module`);return c[e]},s=async(s,c)=>{const i=await Promise.all(s.map(e));c(1===i.length?i[0]:i)};s.toUrl=e=>`./${e}`;const c={require:Promise.resolve(s)};self.define=(s,i,r)=>{c[s]||(c[s]=new Promise(async c=>{let t={};const a={uri:location.origin+s.slice(1)},b=await Promise.all(i.map(s=>"exports"===s?t:"module"===s?a:e(s))),d=r(...b);t.default||(t.default=d),c(t)}))}}define("./service-worker.js",["./workbox-ff0258e0"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/rc-bullets/index.html",revision:"03370d32d660e9946bc6aa172fb0996b"},{url:"/rc-bullets/static/js/2.f2ab8e6e.chunk.js",revision:"a7687cb83251259371f53d031f0b8b54"},{url:"/rc-bullets/static/js/2.f2ab8e6e.chunk.js.LICENSE.txt",revision:"c480732c648da2404e08a57ab549557c"},{url:"/rc-bullets/static/js/3.f2b4d048.chunk.js",revision:"bd0384193ca3b8d660ffbed0452697b7"},{url:"/rc-bullets/static/js/4.7307addd.chunk.js",revision:"bc5db33a1311c4fedbcfb94d14bcb0ea"},{url:"/rc-bullets/static/js/5.a294dada.chunk.js",revision:"ad2e3d17b05b59b5edbda95f2c465775"},{url:"/rc-bullets/static/js/main.59eb8b53.chunk.js",revision:"894aceb1c64830f24aaeba56620b5796"},{url:"/rc-bullets/static/js/runtime-main.b619aeaf.js",revision:"8e442cdd791bdc78f78b9f67305f9ce3"},{url:"/rc-bullets/static/media/end.73c65247.mp3",revision:"73c6524764007bb4732b79f3e3db3aa3"},{url:"/rc-bullets/static/media/reward.75ef3c78.jpg",revision:"75ef3c781d94dbd80e4140524cd518dc"},{url:"/rc-bullets/static/media/start.943b632d.mp3",revision:"943b632dabfcd3109a9f244c88631813"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/rc-bullets/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
