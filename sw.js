if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let c={};const d=e=>n(e,r),l={module:{uri:r},exports:c,require:d};o[r]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"212f3d12827bedf1c36318bcc94ecfb3"},{url:"blog/_payload.json",revision:"cdd81f351fd83165ba6416a815248aa5"},{url:"blog/components-testing/_payload.json",revision:"5a3c0fb930e5c00846082c419f4a7691"},{url:"blog/draft-root/_payload.json",revision:"7632deb92e4ce0c26f6c22866c42d001"},{url:"blog/nested-document-test/_payload.json",revision:"aca8ba8e3c342e05e0ebae822d76f586"},{url:"blog/search/_payload.json",revision:"3cfd97dbf9958ed6da7ad237a5ceb8ce"},{url:"blog/welcome-content/_payload.json",revision:"f700edda8f90dd1ca3478de70edb1758"},{url:"projects/_payload.json",revision:"37faf0693461489cb1406026b46297e0"},{url:"_nuxt/builds/latest.json",revision:"124e937c34061ca3f0dc21ad97800490"},{url:"_nuxt/builds/meta/2f094bd6-4257-40f4-bff4-ba52b1038020.json",revision:null},{url:"manifest.webmanifest",revision:"fcf7795751b21e83610430b86788c7a9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
