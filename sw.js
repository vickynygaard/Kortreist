if(!self.define){let e,a={};const r=(r,s)=>(r=new URL(r+".js",s).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let c={};const n=e=>r(e,t),o={module:{uri:t},exports:c,require:n};a[t]=Promise.all(s.map((e=>o[e]||n(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Kortreist/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/Kortreist/_next/static/N_c8rvj2oURwdbyuQCKEC/_buildManifest.js",revision:"61bf3d6e0c58de30b82bbc6c31da3733"},{url:"/Kortreist/_next/static/N_c8rvj2oURwdbyuQCKEC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/Kortreist/_next/static/chunks/267-d7befbd8a05c3520.js",revision:"d7befbd8a05c3520"},{url:"/Kortreist/_next/static/chunks/596-0b3e3b392ebbe1fb.js",revision:"0b3e3b392ebbe1fb"},{url:"/Kortreist/_next/static/chunks/framework-3522b0d93c8e64f4.js",revision:"3522b0d93c8e64f4"},{url:"/Kortreist/_next/static/chunks/main-e85d1cae1a22c301.js",revision:"e85d1cae1a22c301"},{url:"/Kortreist/_next/static/chunks/pages/_app-cc651fcbe0a0341c.js",revision:"cc651fcbe0a0341c"},{url:"/Kortreist/_next/static/chunks/pages/_error-41608b100cc61246.js",revision:"41608b100cc61246"},{url:"/Kortreist/_next/static/chunks/pages/challenges-734af8d726588bbd.js",revision:"734af8d726588bbd"},{url:"/Kortreist/_next/static/chunks/pages/index-8c608296671378cb.js",revision:"8c608296671378cb"},{url:"/Kortreist/_next/static/chunks/pages/leaderboard-c0ddd8bbb5502d75.js",revision:"c0ddd8bbb5502d75"},{url:"/Kortreist/_next/static/chunks/pages/leaderboard/company-46710cd1f7523f6e.js",revision:"46710cd1f7523f6e"},{url:"/Kortreist/_next/static/chunks/pages/leaderboard/team-83e1ad252d7c7a3f.js",revision:"83e1ad252d7c7a3f"},{url:"/Kortreist/_next/static/chunks/pages/login-fd0766b184ec90e4.js",revision:"fd0766b184ec90e4"},{url:"/Kortreist/_next/static/chunks/pages/logout-df3dc589be812251.js",revision:"df3dc589be812251"},{url:"/Kortreist/_next/static/chunks/pages/onboarding-6c546ac4e762314e.js",revision:"6c546ac4e762314e"},{url:"/Kortreist/_next/static/chunks/pages/profile-7004e532836747d1.js",revision:"7004e532836747d1"},{url:"/Kortreist/_next/static/chunks/pages/profile/settings-1b19f02cf94f866d.js",revision:"1b19f02cf94f866d"},{url:"/Kortreist/_next/static/chunks/pages/team-d1444524a78feea1.js",revision:"d1444524a78feea1"},{url:"/Kortreist/_next/static/chunks/pages/team/dashboard-e9c4bcad48932b1c.js",revision:"e9c4bcad48932b1c"},{url:"/Kortreist/_next/static/chunks/pages/team/onboarding-99819d5d566eeb9e.js",revision:"99819d5d566eeb9e"},{url:"/Kortreist/_next/static/chunks/pages/travelForm-0fbcb6bb92c6a5a8.js",revision:"0fbcb6bb92c6a5a8"},{url:"/Kortreist/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/Kortreist/_next/static/chunks/webpack-e4534050af70a430.js",revision:"e4534050af70a430"},{url:"/Kortreist/_next/static/css/36bd49fbfa1d7dff.css",revision:"36bd49fbfa1d7dff"},{url:"/Kortreist/_next/static/css/d0320de32467736e.css",revision:"d0320de32467736e"},{url:"/Kortreist/data.json",revision:"7114546048f10ede2737a354bc3bb5dd"},{url:"/Kortreist/images/ChallengeIcon.png",revision:"0d1fe37ad84ce36648a6f6b14e4474bb"},{url:"/Kortreist/images/Grass.png",revision:"f0a228f5acf13049dfe5e72073cd5ae4"},{url:"/Kortreist/images/Ikon-wide.png",revision:"137e32f9914390b17cd0498d3964a8d1"},{url:"/Kortreist/images/Ikon.png",revision:"87e003fdf1c509384de17eb91de7a11a"},{url:"/Kortreist/images/Logo.png",revision:"3492150a3726776f0d9f7ae51352234d"},{url:"/Kortreist/images/RegistrerReise.svg",revision:"60ce904cf21835f3caa631cc79befba3"},{url:"/Kortreist/images/Scenery.png",revision:"75b12c06ccb40ab5943dc4aae66b9384"},{url:"/Kortreist/images/TeamIcon.png",revision:"a4f8ee7839d3b5950d1ba7bd4d9dcd2c"},{url:"/Kortreist/images/avatars/Avatar1.png",revision:"3c04460f16f3696acdbcb883af0b5d11"},{url:"/Kortreist/images/avatars/Avatar10.png",revision:"0bd3948506b874e7cf3da04178a5b047"},{url:"/Kortreist/images/avatars/Avatar11.png",revision:"330456e9a084bc828392b91fe4806673"},{url:"/Kortreist/images/avatars/Avatar12.png",revision:"39aa4827854616a116f317a38207824d"},{url:"/Kortreist/images/avatars/Avatar13.png",revision:"b2145a22f252e7fb181904bdad4be9fa"},{url:"/Kortreist/images/avatars/Avatar14.png",revision:"1ae1384bda43c38077258c037d68c442"},{url:"/Kortreist/images/avatars/Avatar15.png",revision:"a98b403af50957a1c30c9088682ad88a"},{url:"/Kortreist/images/avatars/Avatar16.png",revision:"9dea308ba145b2a2b8354f0b317d1389"},{url:"/Kortreist/images/avatars/Avatar2.png",revision:"5bf8e6cc72f097b62e8c00491bc764b3"},{url:"/Kortreist/images/avatars/Avatar3.png",revision:"a02542573184b18ff9c37ee2cdf414fc"},{url:"/Kortreist/images/avatars/Avatar4.png",revision:"983b31a81ea5334af2649b9964172a23"},{url:"/Kortreist/images/avatars/Avatar5.png",revision:"61c8dae3930d475683cf3169575b936a"},{url:"/Kortreist/images/avatars/Avatar6.png",revision:"32124c7ce095313c51087fc2837cbf6a"},{url:"/Kortreist/images/avatars/Avatar7.png",revision:"f4c4b69cb5eea571fa3b4d8b82d3d6b3"},{url:"/Kortreist/images/avatars/Avatar8.png",revision:"a07c7406026ae3d53959aee4da992de1"},{url:"/Kortreist/images/avatars/Avatar9.png",revision:"29619bad0573323c00960ec252b7266a"},{url:"/Kortreist/images/company-pictures/companyA.png",revision:"22782456705f377eae62f04173a6eb1b"},{url:"/Kortreist/images/company-pictures/companyB.png",revision:"c2bd48783919623900b5d8b03188e593"},{url:"/Kortreist/images/company-pictures/companyC.png",revision:"942ee69200ffe25d342aa6ec4114b167"},{url:"/Kortreist/images/company-pictures/companyD.png",revision:"eb9ca4687bfc13422800eb1c404b27c5"},{url:"/Kortreist/images/favicon/favicon-16x16.png",revision:"36e5e7a677a8a44db4aac9c87301d049"},{url:"/Kortreist/images/favicon/favicon-32x32.png",revision:"44f233aad08d10010beec9e64069336e"},{url:"/Kortreist/images/favicon/favicon.ico",revision:"cc535bbcbcea1f9a6a0ab2dacbb36a36"},{url:"/Kortreist/images/favicon/icon-192.png",revision:"3ef8c6bc6517d9a8d7568115a1e1b002"},{url:"/Kortreist/images/favicon/icon-512.png",revision:"673200b990bddd6bcacf124c4e102592"},{url:"/Kortreist/images/favicon/icon-maskable-192.png",revision:"183008549415d11c44ad8e98326aaee9"},{url:"/Kortreist/images/favicon/icon-maskable-512.png",revision:"1687f931a422ac47f4e834d23d930112"},{url:"/Kortreist/images/profile-pictures/avatar1.png",revision:"f10eb7287cdf0f7802f052cb1788cab2"},{url:"/Kortreist/images/profile-pictures/avatar10.png",revision:"4b4f9b69aaa5089f442712b519f18455"},{url:"/Kortreist/images/profile-pictures/avatar11.png",revision:"4e7ee390cbafd316cbb54c6e85b55b11"},{url:"/Kortreist/images/profile-pictures/avatar12.png",revision:"24a6095a587218116e62f1a2e8c169ca"},{url:"/Kortreist/images/profile-pictures/avatar13.png",revision:"63e17af77295603b3b4ecf25df2495e3"},{url:"/Kortreist/images/profile-pictures/avatar14.png",revision:"a2895c1561af0af3787dcf9f17a96f49"},{url:"/Kortreist/images/profile-pictures/avatar15.png",revision:"f91515b26d610a653163040149aa10e0"},{url:"/Kortreist/images/profile-pictures/avatar16.png",revision:"e612744f50f252f6c9d8d7e604cb27b2"},{url:"/Kortreist/images/profile-pictures/avatar2.png",revision:"79da50959d1dad613adc5112923996ff"},{url:"/Kortreist/images/profile-pictures/avatar3.png",revision:"5501ce23f4044091780caaab2d5deb43"},{url:"/Kortreist/images/profile-pictures/avatar4.png",revision:"a36f96169168379ef5b37b9c78ed444c"},{url:"/Kortreist/images/profile-pictures/avatar5.png",revision:"3191c101beb6589829223d9d88aa81fb"},{url:"/Kortreist/images/profile-pictures/avatar6.png",revision:"68e6dcb72c2a6ab1653bc3dd7d654f3a"},{url:"/Kortreist/images/profile-pictures/avatar7.png",revision:"f56d282f94c7ce534f803b7293e0d948"},{url:"/Kortreist/images/profile-pictures/avatar8.png",revision:"8d1358411b317d246ff63ce50346027e"},{url:"/Kortreist/images/profile-pictures/avatar9.png",revision:"4eea326f3728e6720f3d2b950d4f4213"},{url:"/Kortreist/images/team-pictures/teamAvatar1.png",revision:"9ffd33ebbedc667fd44d4ff330efbe3b"},{url:"/Kortreist/images/team-pictures/teamAvatar10.png",revision:"796c6e552eb475c173d8796d204b10e6"},{url:"/Kortreist/images/team-pictures/teamAvatar11.png",revision:"9ae2d760f4fd7119bb3b7bb1fc45695f"},{url:"/Kortreist/images/team-pictures/teamAvatar12.png",revision:"8fbf9fd53e208dbf4e26b764880d1f6b"},{url:"/Kortreist/images/team-pictures/teamAvatar13.png",revision:"669799ad742d29f915f579d4ab1c40b7"},{url:"/Kortreist/images/team-pictures/teamAvatar14.png",revision:"496a064c6d3a9c82e19e5e66e52ea04b"},{url:"/Kortreist/images/team-pictures/teamAvatar15.png",revision:"402cee4f0498540fc13ba0dd2e9339f2"},{url:"/Kortreist/images/team-pictures/teamAvatar16.png",revision:"5f343d709ebf1dbf87d8309fb9b5ea0e"},{url:"/Kortreist/images/team-pictures/teamAvatar17.png",revision:"8f1ddffde89ec2b9872be44886666e05"},{url:"/Kortreist/images/team-pictures/teamAvatar18.png",revision:"4f9a9a74e8a7f09de88241d166697e2d"},{url:"/Kortreist/images/team-pictures/teamAvatar19.png",revision:"13444451462970d55afea097220296e8"},{url:"/Kortreist/images/team-pictures/teamAvatar2.png",revision:"092125c509cf0a02059fb22a52ead1fb"},{url:"/Kortreist/images/team-pictures/teamAvatar20.png",revision:"914c21b9d007147b8f73b4f440f04c0e"},{url:"/Kortreist/images/team-pictures/teamAvatar3.png",revision:"70b7cacd05d0bb01b005606e835fffe6"},{url:"/Kortreist/images/team-pictures/teamAvatar4.png",revision:"e83a9b3b702a0676f7c283ee050423fd"},{url:"/Kortreist/images/team-pictures/teamAvatar5.png",revision:"44023e3e2942e5e6fc4b4c363d5ab550"},{url:"/Kortreist/images/team-pictures/teamAvatar6.png",revision:"6943f396bc00dd733023cdc9e2c86f6b"},{url:"/Kortreist/images/team-pictures/teamAvatar7.png",revision:"5beecfda5a23fa2af65346db4107cf7b"},{url:"/Kortreist/images/team-pictures/teamAvatar8.png",revision:"ab4011418e9ba5dd6ecfc7c89c7766bf"},{url:"/Kortreist/images/team-pictures/teamAvatar9.png",revision:"52c9e90333d08a4b4ee08e7b13653970"},{url:"/Kortreist/images/travelForm/Carpool.svg",revision:"6777bbf52ccb6897f05f019c340a414c"},{url:"/Kortreist/images/travelForm/Gange.svg",revision:"9f060b5620fef4d47514ff4c0df23909"},{url:"/Kortreist/images/travelForm/Kollektiv.svg",revision:"292e3d85a0d27b0deb4192d0f9cb3527"},{url:"/Kortreist/images/travelForm/Sykkel.svg",revision:"d495d1e810f79d0ef71bbab5598a39e5"},{url:"/Kortreist/manifest.json",revision:"d1ee523c74eb32c35ae5ee5a6c670aaa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Kortreist",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:r,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
