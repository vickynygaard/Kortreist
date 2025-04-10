(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{724:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var s=r(1367),a=r.n(s);function n(e,t){var r,s,n;let l=null!==(r=null==t?void 0:t.minLength)&&void 0!==r?r:3,o=null!==(s=null==t?void 0:t.maxLength)&&void 0!==s?s:15,i=null!==(n=null==t?void 0:t.label)&&void 0!==n?n:"Kallenavn";return e.length<l?"".concat(i," m\xe5 v\xe6re minst ").concat(l," tegn."):e.length>o?"".concat(i," kan ikke v\xe6re lengre enn ").concat(o," tegn."):/^[A-Za-zÆØÅæøå0-9_ ]+$/.test(e)?a().check(e)||a().list().some(t=>e.toLowerCase().includes(t))?"Dette kallenavnet inneholder upassende spr\xe5k.":null:"Kallenavn kan kun inneholde bokstaver, tall, mellomrom og understrek."}},2150:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/settings",function(){return r(4554)}])},3784:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var s=r(7596),a=r(9099),n=r.n(a),l=r(7685);async function o(e,t){let r={"Content-Type":"application/json"};t&&(r.Authorization="Bearer ".concat(t));let s=await fetch("".concat("https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net").concat(e),{headers:r});if(!s.ok){if(428===s.status){l.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),n().push("/onboarding");return}let e=await s.text();throw Error("Error: ".concat(s.statusText," - ").concat(e))}return s.json()}function i(e,t,r){var a;let n=(null===(a=null==r?void 0:r.enabled)||void 0===a||a)&&e&&t?[e,t]:null,{data:l,error:i,mutate:c}=(0,s.Ay)(n,()=>o(e,t),r);return{data:l,isLoading:!l&&!i,error:i,mutate:c}}},4554:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(7876),a=r(4232),n=r(9099),l=r(5051),o=r(300),i=r(4957),c=r(3784),d=r(7644),u=r(7685),m=r(724),g=r(7808),f=r(6955),p=r(4842);let x=["Avatar1.png","Avatar2.png","Avatar3.png","Avatar4.png","Avatar5.png","Avatar6.png","Avatar7.png","Avatar8.png","Avatar9.png","Avatar10.png","Avatar11.png","Avatar12.png","Avatar13.png","Avatar14.png","Avatar15.png","Avatar16.png"];function h(){let e=(0,n.useRouter)(),{instance:t}=(0,l.dk)(),{userData:r}=(0,o.r)(),{data:h,isLoading:b,error:v}=(0,c.g)("/api/Profile/getUser",null==r?void 0:r.accessToken,{refreshInterval:3e4,revalidateOnMount:!0,enabled:!!(null==r?void 0:r.accessToken)}),[j,k]=(0,a.useState)(!1),[y,w]=(0,a.useState)(null),[N,A]=(0,a.useState)(""),[C,S]=(0,a.useState)(""),[T,E]=(0,a.useState)(null),[P,_]=(0,a.useState)(!0),[z,L]=(0,a.useState)(!1),[V,M]=(0,a.useState)(!1);(0,a.useEffect)(()=>{h&&(A(h.nickName),w(h.profilePicture),S(h.address))},[h]);let[R,B]=(0,a.useState)(null);(0,a.useEffect)(()=>{h&&(A(h.nickName),w(h.profilePicture),S(h.address),E((0,m.y)(h.nickName)),B({nickName:h.nickName,profilePicture:h.profilePicture,address:h.address}))},[h]);let[K,O]=(0,a.useState)(!1),[F,I]=(0,a.useState)(""),U=(0,a.useMemo)(()=>!!R&&(N!==R.nickName||y!==R.profilePicture||C!==R.address),[N,y,C,R]),D=async()=>{if(null==r?void 0:r.accessToken){if(T){u.Ay.error("Kallenavnet er ugyldig.");return}O(!0),I("");try{let t=await fetch("https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/Users/updateProfile",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.accessToken)},body:JSON.stringify({nickName:N,profilePicture:y,address:C})});if(!t.ok)throw Error("Serverfeil: ".concat(t.statusText));let s=await t.json();console.log("Profile updated:",s),(0,g.j)(["/api/Profile/overview",r.accessToken]),u.Ay.success("Profil oppdatert!"),e.push("/profile"),B({nickName:N,profilePicture:y,address:C}),I("Profil oppdatert!")}catch(e){return(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})})}finally{O(!1)}}};return b?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)(d.A,{})}):v?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):(0,s.jsxs)("div",{className:"flex justify-center w-full",children:[(0,s.jsxs)("div",{className:"w-full max-w-md flex flex-col mx-auto px-4",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("header",{className:"self-start",children:(0,s.jsx)(f.A,{onClick:()=>e.back()})}),(0,s.jsx)("div",{className:"font-bold text-3xl text-violet-950 pb-6",children:"Innstillinger"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mt-4",children:[(0,s.jsx)("img",{src:"".concat("/Kortreist","/images/avatars/").concat(y||"Avatar1.png"),alt:"Profile",onClick:()=>M(!0),className:"w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"Trykk for \xe5 endre profilbilde"})]}),(0,s.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,s.jsx)("label",{className:"block text-gray-500 text-sm mb-2",children:"Endre kallenavn:"}),(0,s.jsx)("input",{type:"text",value:N,onChange:e=>{let t=e.target.value;A(t),E((0,m.y)(t))},className:"w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-customViolet focus:ring-1 focus:ring-customViolet"}),T&&(0,s.jsx)("p",{className:"text-customRed text-sm mt-1",children:T})]}),(0,s.jsx)("div",{className:"mt-6 w-full max-w-md",children:(0,s.jsx)(i.A,{selectedAddress:C,setSelectedAddress:S})}),(0,s.jsxs)("div",{className:"mt-4 w-full max-w-md",children:[(0,s.jsxs)("button",{onClick:()=>L(!z),className:"w-full flex justify-between items-center p-3 bg-white rounded border border-gray-300",children:[(0,s.jsx)("span",{className:"text-black text-base",children:"Forklaring"}),(0,s.jsx)("span",{className:"text-gray-500",children:z?"▲":"▼"})]}),z&&(0,s.jsxs)("div",{className:"p-3 bg-white rounded mt-2 text-sm text-gray-500 border border-gray-300",children:["Velkommen til Kortreist!",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Appens form\xe5l er \xe5 oppmuntre ansatte til \xe5 reise mer b\xe6rekraftig til og fra jobb. Registrer reisem\xe5ten din for \xe5 tjene poeng, fullf\xf8r ukentlige utfordringer, og konkurrer sammen med kollegaer.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Tjen poeng for hvert b\xe6rekraftige reisevalg:",(0,s.jsx)("br",{}),"- ca. 120 poeng pr km for \xe5 g\xe5. Maks 500 poeng.",(0,s.jsx)("br",{}),"- ca. 120 poeng pr km for \xe5 sykkle. Maks 500 poeng.",(0,s.jsx)("br",{}),"- ca. 50 poeng pr km for \xe5 ta buss. Maks 300 poeng.",(0,s.jsx)("br",{}),"- ca. 60 poeng pr km for \xe5 samkj\xf8re. Maks 200 poeng.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Fullf\xf8r utfordringer og tjen merker for \xe5 samle enda flere poeng!",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Lykke til!"]})]}),(0,s.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[F&&(0,s.jsx)("p",{className:"text-sm text-gray-600",children:F}),(0,s.jsx)("button",{onClick:D,disabled:!U||K||!!T,className:"px-4 py-2 rounded-md text-white text-sm font-medium transition ".concat(!U||K||T?"bg-gray-400 cursor-not-allowed":"bg-customViolet"),children:K?"Lagrer...":"Lagre profil"})]}),(0,s.jsx)("button",{onClick:()=>k(!0),className:"mt-10 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center",children:"Logg ut"})]}),j&&(0,s.jsx)(p.A,{message:"Er du sikker p\xe5 at du vil logge ut?",onConfirm:()=>{sessionStorage.removeItem("userUpserted"),t.logoutRedirect()},onCancel:()=>k(!1),confirmColor:"red"}),V&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center",onClick:e=>{e.target===e.currentTarget&&M(!1)},children:(0,s.jsxs)("div",{className:"bg-white no-scrollbar overflow-y-auto overscroll-contain rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold mb-4 text-center",children:"Velg et profilbilde"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-4",children:x.map(e=>(0,s.jsx)("img",{src:"".concat("/Kortreist","/images/avatars/").concat(e||"Avatar1.png"),alt:e,onClick:()=>{w(e),M(!1)},className:"w-16 h-16 rounded-full cursor-pointer transition border-4 ".concat(y===e?"border-customViolet scale-110":"border-transparent hover:border-gray-400 hover:scale-105")},e))}),(0,s.jsx)("button",{onClick:()=>M(!1),className:"mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded",children:"Lukk"})]})})]})}},4842:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(7876);function a(e){let{message:t,onConfirm:r,onCancel:a,confirmColor:n="green"}=e;return(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg p-6 w-80 text-center",children:[(0,s.jsx)("p",{className:"text-lg font-semibold text-black",children:t}),(0,s.jsxs)("div",{className:"mt-4 flex justify-center gap-4",children:[(0,s.jsx)("button",{onClick:r,className:"red"===n?"px-4 py-2 bg-customRed text-white rounded-full hover:bg-red-600 transition":"px-4 py-2 bg-customGreen text-white rounded-full hover:bg-green-600 transition",children:"Bekreft"}),(0,s.jsx)("button",{onClick:a,className:"px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition",children:"Avbryt"})]})]})})}r(4232)},4957:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(7876),a=r(4232),n=r(300);function l(e){let{selectedAddress:t,setSelectedAddress:r,inputBgClass:l="bg-white"}=e,[o,i]=(0,a.useState)(t),[c,d]=(0,a.useState)([]),[u,m]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),{userData:p}=(0,n.r)();async function x(e){m(!0);try{if(!(null==p?void 0:p.accessToken))return;let t=await fetch("https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/geocode?address=".concat(encodeURIComponent(e)),{headers:{Authorization:"Bearer ".concat(p.accessToken)}});if(!t.ok){console.error("Failed to fetch suggestions"),d([]);return}let r=await t.json();d(r.features||[])}catch(e){console.error("Error fetching suggestions",e),d([])}finally{m(!1)}}(0,a.useEffect)(()=>{i(t)},[t]),(0,a.useEffect)(()=>{if(!o.trim()){d([]);return}let e=setTimeout(()=>{x(o)},500);return()=>clearTimeout(e)},[o]);let h=e=>{i(e.properties.label),r(e.properties.label),d([]),f(!1)};return(0,s.jsxs)("div",{className:"address-autocomplete relative",children:[(0,s.jsxs)("div",{className:"relative mb-2",children:[(0,s.jsx)("input",{type:"text",value:o,placeholder:"F.eks. Storgata 1, Oslo",onChange:e=>{i(e.target.value)},onFocus:()=>f(!0),onBlur:()=>{setTimeout(()=>{f(!1),o!==t&&i(t)},150)},className:"w-full p-3 rounded border border-gray-300 ".concat(l," focus:outline-none focus:ring-2 focus:ring-customViolet")}),o&&(0,s.jsx)("button",{onClick:()=>{i(""),r(""),d([])},className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:"\xd7"})]}),g&&!u&&c.length>0&&o.trim()&&(0,s.jsx)("ul",{className:"absolute z-10 w-full border border-gray-200 rounded shadow-md bg-white max-h-60 overflow-y-auto",children:c.map((e,t)=>(0,s.jsx)("li",{onMouseDown:()=>h(e),className:"p-2 hover:bg-gray-100 cursor-pointer",children:e.properties.label},"".concat(e.properties.osm_id,"-").concat(t)))}),g&&u&&(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsxs)("svg",{className:"animate-spin h-5 w-5 text-customViolet",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),(0,s.jsx)("span",{className:"text-gray-600",children:"Laster adresser..."})]}),g&&!u&&0===c.length&&o.trim()&&(0,s.jsxs)("div",{className:"p-2 text-gray-500 border rounded",children:["Ingen treff p\xe5 “",o,"”"]})]})}},6955:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var s=r(7876);let a=(0,r(1713).A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),n=e=>{let{icon:t=(0,s.jsx)(a,{size:24}),onClick:r}=e;return(0,s.jsx)("button",{onClick:r,className:"flex items-center",children:t})}},7644:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(7876);function a(){return(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-customViolet"})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(2150)),_N_E=e.O()}]);