if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const c=e=>a(e,t),o={module:{uri:t},exports:n,require:c};s[t]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Kortreist/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/Kortreist/_next/static/PS4hCfZUeK6Hhu1FHxA27/_buildManifest.js",revision:"3a87a5122f0cbe4d627c14ae3a9aeae7"},{url:"/Kortreist/_next/static/PS4hCfZUeK6Hhu1FHxA27/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/Kortreist/_next/static/chunks/587-e2c33e2237a8c76d.js",revision:"e2c33e2237a8c76d"},{url:"/Kortreist/_next/static/chunks/framework-3522b0d93c8e64f4.js",revision:"3522b0d93c8e64f4"},{url:"/Kortreist/_next/static/chunks/main-e85d1cae1a22c301.js",revision:"e85d1cae1a22c301"},{url:"/Kortreist/_next/static/chunks/pages/_app-5b50a369478a5b2f.js",revision:"5b50a369478a5b2f"},{url:"/Kortreist/_next/static/chunks/pages/_error-41608b100cc61246.js",revision:"41608b100cc61246"},{url:"/Kortreist/_next/static/chunks/pages/index-ed436e8680458ca1.js",revision:"ed436e8680458ca1"},{url:"/Kortreist/_next/static/chunks/pages/leaderboard-75b178d75f3d0ebd.js",revision:"75b178d75f3d0ebd"},{url:"/Kortreist/_next/static/chunks/pages/leaderboard/company-50903454fc551461.js",revision:"50903454fc551461"},{url:"/Kortreist/_next/static/chunks/pages/leaderboard/team-343e299b6c5b3f0c.js",revision:"343e299b6c5b3f0c"},{url:"/Kortreist/_next/static/chunks/pages/login-05af5e9cc257ac8b.js",revision:"05af5e9cc257ac8b"},{url:"/Kortreist/_next/static/chunks/pages/logout-f77057c772abb001.js",revision:"f77057c772abb001"},{url:"/Kortreist/_next/static/chunks/pages/onboarding-761ee3e70e30f6d8.js",revision:"761ee3e70e30f6d8"},{url:"/Kortreist/_next/static/chunks/pages/profile-e212cc94ad720f8f.js",revision:"e212cc94ad720f8f"},{url:"/Kortreist/_next/static/chunks/pages/settings-1aa67d7ba4aebe1a.js",revision:"1aa67d7ba4aebe1a"},{url:"/Kortreist/_next/static/chunks/pages/team-9f544fb362e7aeec.js",revision:"9f544fb362e7aeec"},{url:"/Kortreist/_next/static/chunks/pages/team/dashboard-735d4db786855a9f.js",revision:"735d4db786855a9f"},{url:"/Kortreist/_next/static/chunks/pages/team/onboarding-6f918f240aa1a0ef.js",revision:"6f918f240aa1a0ef"},{url:"/Kortreist/_next/static/chunks/pages/travelForm-604aae3a5a03bfad.js",revision:"604aae3a5a03bfad"},{url:"/Kortreist/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/Kortreist/_next/static/chunks/webpack-e4534050af70a430.js",revision:"e4534050af70a430"},{url:"/Kortreist/_next/static/css/de6bc08db845516c.css",revision:"de6bc08db845516c"},{url:"/Kortreist/data.json",revision:"7114546048f10ede2737a354bc3bb5dd"},{url:"/Kortreist/images/Grass.png",revision:"f0a228f5acf13049dfe5e72073cd5ae4"},{url:"/Kortreist/images/Ikon-wide.png",revision:"137e32f9914390b17cd0498d3964a8d1"},{url:"/Kortreist/images/Ikon.png",revision:"87e003fdf1c509384de17eb91de7a11a"},{url:"/Kortreist/images/Logo.png",revision:"3492150a3726776f0d9f7ae51352234d"},{url:"/Kortreist/images/RegistrerReise.svg",revision:"60ce904cf21835f3caa631cc79befba3"},{url:"/Kortreist/images/Scenery.png",revision:"75b12c06ccb40ab5943dc4aae66b9384"},{url:"/Kortreist/images/favicon/favicon-16x16.png",revision:"36e5e7a677a8a44db4aac9c87301d049"},{url:"/Kortreist/images/favicon/favicon-32x32.png",revision:"44f233aad08d10010beec9e64069336e"},{url:"/Kortreist/images/favicon/favicon.ico",revision:"cc535bbcbcea1f9a6a0ab2dacbb36a36"},{url:"/Kortreist/images/favicon/icon-192.png",revision:"3ef8c6bc6517d9a8d7568115a1e1b002"},{url:"/Kortreist/images/favicon/icon-512.png",revision:"673200b990bddd6bcacf124c4e102592"},{url:"/Kortreist/images/favicon/icon-maskable-192.png",revision:"183008549415d11c44ad8e98326aaee9"},{url:"/Kortreist/images/favicon/icon-maskable-512.png",revision:"1687f931a422ac47f4e834d23d930112"},{url:"/Kortreist/images/profile-pictures/avatar1.png",revision:"f10eb7287cdf0f7802f052cb1788cab2"},{url:"/Kortreist/images/profile-pictures/avatar10.png",revision:"4b4f9b69aaa5089f442712b519f18455"},{url:"/Kortreist/images/profile-pictures/avatar11.png",revision:"4e7ee390cbafd316cbb54c6e85b55b11"},{url:"/Kortreist/images/profile-pictures/avatar12.png",revision:"24a6095a587218116e62f1a2e8c169ca"},{url:"/Kortreist/images/profile-pictures/avatar13.png",revision:"63e17af77295603b3b4ecf25df2495e3"},{url:"/Kortreist/images/profile-pictures/avatar14.png",revision:"a2895c1561af0af3787dcf9f17a96f49"},{url:"/Kortreist/images/profile-pictures/avatar15.png",revision:"f91515b26d610a653163040149aa10e0"},{url:"/Kortreist/images/profile-pictures/avatar16.png",revision:"e612744f50f252f6c9d8d7e604cb27b2"},{url:"/Kortreist/images/profile-pictures/avatar2.png",revision:"79da50959d1dad613adc5112923996ff"},{url:"/Kortreist/images/profile-pictures/avatar3.png",revision:"5501ce23f4044091780caaab2d5deb43"},{url:"/Kortreist/images/profile-pictures/avatar4.png",revision:"a36f96169168379ef5b37b9c78ed444c"},{url:"/Kortreist/images/profile-pictures/avatar5.png",revision:"3191c101beb6589829223d9d88aa81fb"},{url:"/Kortreist/images/profile-pictures/avatar6.png",revision:"68e6dcb72c2a6ab1653bc3dd7d654f3a"},{url:"/Kortreist/images/profile-pictures/avatar7.png",revision:"f56d282f94c7ce534f803b7293e0d948"},{url:"/Kortreist/images/profile-pictures/avatar8.png",revision:"8d1358411b317d246ff63ce50346027e"},{url:"/Kortreist/images/profile-pictures/avatar9.png",revision:"4eea326f3728e6720f3d2b950d4f4213"},{url:"/Kortreist/images/travelForm/Carpool.svg",revision:"6777bbf52ccb6897f05f019c340a414c"},{url:"/Kortreist/images/travelForm/Gange.svg",revision:"9f060b5620fef4d47514ff4c0df23909"},{url:"/Kortreist/images/travelForm/Kollektiv.svg",revision:"292e3d85a0d27b0deb4192d0f9cb3527"},{url:"/Kortreist/images/travelForm/Sykkel.svg",revision:"d495d1e810f79d0ef71bbab5598a39e5"},{url:"/Kortreist/manifest.json",revision:"d1ee523c74eb32c35ae5ee5a6c670aaa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Kortreist",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
