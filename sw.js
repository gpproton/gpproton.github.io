if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let l={};const t=e=>n(e,r),a={module:{uri:r},exports:l,require:t};o[r]=Promise.all(s.map((e=>a[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"9482d6f621aede734695bf669655cadf"},{url:"blog/_payload.json",revision:"9f9c4724f0ea741d7ebf79bec354665f"},{url:"blog/components-testing/_payload.json",revision:"8135c437e9cd9a48dc21ca881fbd9b5b"},{url:"blog/draft-root/_payload.json",revision:"f647ae105fc02f9e502edc53c0b01921"},{url:"blog/nested-document-test/_payload.json",revision:"8abd7583b9f48f488e84e01898a49ff3"},{url:"blog/search/_payload.json",revision:"7d2a02e96509cc11c5da22b074c03787"},{url:"blog/welcome-content/_payload.json",revision:"5478950e623868f84096092a992078a7"},{url:"projects/_payload.json",revision:"642f5d2e37e4429028c8c520e369ae7d"},{url:"_nuxt/builds/latest.json",revision:"722052ea7e9183c540ced50569703ded"},{url:"_nuxt/builds/meta/c8ce2ef9-a98b-4d50-8a2b-ef3592ca4a24.json",revision:null},{url:"manifest.webmanifest",revision:"fcf7795751b21e83610430b86788c7a9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));