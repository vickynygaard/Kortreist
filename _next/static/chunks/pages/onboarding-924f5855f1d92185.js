(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{724:(e,t,a)=>{"use strict";a.d(t,{y:()=>r});var s=a(1367),l=a.n(s);function r(e,t){var a,s,r;let n=null!==(a=null==t?void 0:t.minLength)&&void 0!==a?a:3,o=null!==(s=null==t?void 0:t.maxLength)&&void 0!==s?s:15,c=null!==(r=null==t?void 0:t.label)&&void 0!==r?r:"Kallenavn";return e.length<n?"".concat(c," m\xe5 v\xe6re minst ").concat(n," tegn."):e.length>o?"".concat(c," kan ikke v\xe6re lengre enn ").concat(o," tegn."):/^[A-Za-zÆØÅæøå0-9_ ]+$/.test(e)?l().check(e)||l().list().some(t=>e.toLowerCase().includes(t))?"Dette kallenavnet inneholder upassende spr\xe5k.":null:"Kallenavn kan kun inneholde bokstaver, tall, mellomrom og understrek."}},3792:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var s=a(7876),l=a(4232),r=a(300),n=a(9099),o=a(4957),c=a(724);function i(){let{userData:e}=(0,r.r)(),[t,a]=(0,l.useState)([]),[i,u]=(0,l.useState)(null),[d,h]=(0,l.useState)(null),[m,p]=(0,l.useState)(""),[f,g]=(0,l.useState)(""),[b,v]=(0,l.useState)(!1),[x,k]=(0,l.useState)(null),w=(0,n.useRouter)(),y=e=>{let t=e.target.value;p(t),k((0,c.y)(t))};(0,l.useEffect)(()=>{(null==e?void 0:e.accessToken)&&(async()=>{try{let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/allComp",{headers:{Authorization:"Bearer ".concat(e.accessToken)}});if(!t.ok)throw Error("Feil ved henting av selskaper");let s=await t.json();a(s)}catch(e){console.error(e)}})()},[null==e?void 0:e.accessToken]),(0,l.useEffect)(()=>{(null==e?void 0:e.accessToken)&&(async()=>{try{let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/getUser",{headers:{Authorization:"Bearer ".concat(e.accessToken)}});if(!t.ok)throw Error("Feil ved henting av brukerdata: ".concat(t.statusText));let a=await t.json();console.log("Fetched user profile:",a),u(a),a.companyId&&h(a.companyId),a.nickName&&(p(a.nickName),y({target:{value:a.nickName}})),a.address&&g(a.address)}catch(e){console.error(e)}})()},[null==e?void 0:e.accessToken]);let j=async()=>{if(!(null==e?void 0:e.accessToken)||!d||!m||!f){alert("Vennligst fyll ut alle felter.");return}if(x){alert("Vennligst rett opp i kallenavnfeilen f\xf8r du fortsetter.");return}v(!0);try{if(!(await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/companySet",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.accessToken)},body:JSON.stringify({companyId:d,nickName:m,address:f})})).ok)throw Error("Klarte ikke oppdatere profil");console.log("Brukerdata oppdatert"),w.push("/")}catch(e){console.error(e)}finally{v(!1)}};return(0,s.jsx)("div",{className:"bg-customYellow2 p-6 flex flex-col justify-center items-center",children:(0,s.jsxs)("div",{className:"w-full max-w-md bg-white p-6 rounded-lg shadow-md",children:[(0,s.jsx)("h1",{className:"text-2xl font-semibold text-customViolet mb-6 text-center",children:"Fullf\xf8r profilen din"}),(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700",children:"Velg selskap:"}),(0,s.jsxs)("select",{className:"w-full p-3 mb-4 rounded border",value:null!=d?d:"",onChange:e=>h(Number(e.target.value)),children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Velg et selskap"}),t.map(e=>(0,s.jsx)("option",{value:e.companyId,children:e.name},e.companyId))]}),(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700",children:"Kallenavn:"}),(0,s.jsx)("input",{type:"text",className:"w-full p-3 mb-1 rounded border",value:m,onChange:y,placeholder:"F.eks. SuperPer"}),x&&(0,s.jsx)("p",{className:"text-red-600 text-sm mb-4",children:x}),(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700",children:"Adresse:"}),(0,s.jsx)(o.A,{selectedAddress:f,setSelectedAddress:g}),(0,s.jsx)("button",{onClick:j,disabled:b||!!x,className:"w-full bg-customViolet text-white p-3 rounded font-semibold hover:opacity-90 transition",children:b?"Lagrer...":"Fullf\xf8r"})]})})}},4957:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var s=a(7876),l=a(4232),r=a(300);function n(e){let{selectedAddress:t,setSelectedAddress:a,inputBgClass:n="bg-white"}=e,[o,c]=(0,l.useState)(t),[i,u]=(0,l.useState)([]),[d,h]=(0,l.useState)(!1),[m,p]=(0,l.useState)(!1),{userData:f}=(0,r.r)();async function g(e){h(!0);try{if(!(null==f?void 0:f.accessToken))return;let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/geocode?address=".concat(encodeURIComponent(e)),{headers:{Authorization:"Bearer ".concat(f.accessToken)}});if(!t.ok){console.error("Failed to fetch suggestions"),u([]);return}let a=await t.json();u(a.features||[])}catch(e){console.error("Error fetching suggestions",e),u([])}finally{h(!1)}}(0,l.useEffect)(()=>{c(t)},[t]),(0,l.useEffect)(()=>{if(!o.trim()){u([]);return}let e=setTimeout(()=>{g(o)},500);return()=>clearTimeout(e)},[o]);let b=e=>{c(e.properties.label),a(e.properties.label),u([]),p(!1)};return(0,s.jsxs)("div",{className:"address-autocomplete relative",children:[(0,s.jsxs)("div",{className:"relative mb-2",children:[(0,s.jsx)("input",{type:"text",value:o,placeholder:"F.eks. Storgata 1, Oslo",onChange:e=>{c(e.target.value)},onFocus:()=>p(!0),onBlur:()=>{setTimeout(()=>{p(!1),o!==t&&c(t)},150)},className:"w-full p-3 rounded border ".concat(n," focus:outline-none focus:ring-2 focus:ring-customViolet")}),o&&(0,s.jsx)("button",{onClick:()=>{c(""),a(""),u([])},className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:"\xd7"})]}),m&&!d&&i.length>0&&o.trim()&&(0,s.jsx)("ul",{className:"absolute z-10 w-full border border-gray-200 rounded shadow-md bg-white max-h-60 overflow-y-auto",children:i.map((e,t)=>(0,s.jsx)("li",{onMouseDown:()=>b(e),className:"p-2 hover:bg-gray-100 cursor-pointer",children:e.properties.label},"".concat(e.properties.osm_id,"-").concat(t)))}),m&&d&&(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsxs)("svg",{className:"animate-spin h-5 w-5 text-customViolet",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),(0,s.jsx)("span",{className:"text-gray-600",children:"Laster adresser..."})]}),m&&!d&&0===i.length&&o.trim()&&(0,s.jsxs)("div",{className:"p-2 text-gray-500 border rounded",children:["Ingen treff p\xe5 “",o,"”"]})]})}},6250:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/onboarding",function(){return a(3792)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6250)),_N_E=e.O()}]);