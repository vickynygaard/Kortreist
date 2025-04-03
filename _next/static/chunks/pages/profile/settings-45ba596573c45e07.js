(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{724:(e,t,s)=>{"use strict";s.d(t,{y:()=>n});var r=s(1367),a=s.n(r);function n(e,t){var s,r,n;let l=null!==(s=null==t?void 0:t.minLength)&&void 0!==s?s:3,o=null!==(r=null==t?void 0:t.maxLength)&&void 0!==r?r:15,i=null!==(n=null==t?void 0:t.label)&&void 0!==n?n:"Kallenavn";return e.length<l?"".concat(i," m\xe5 v\xe6re minst ").concat(l," tegn."):e.length>o?"".concat(i," kan ikke v\xe6re lengre enn ").concat(o," tegn."):/^[A-Za-zÆØÅæøå0-9_ ]+$/.test(e)?a().check(e)||a().list().some(t=>e.toLowerCase().includes(t))?"Dette kallenavnet inneholder upassende spr\xe5k.":null:"Kallenavn kan kun inneholde bokstaver, tall, mellomrom og understrek."}},2150:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/settings",function(){return s(4554)}])},3784:(e,t,s)=>{"use strict";s.d(t,{g:()=>i});var r=s(7596),a=s(9099),n=s.n(a),l=s(7685);async function o(e,t){let s={"Content-Type":"application/json"};t&&(s.Authorization="Bearer ".concat(t));let r=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:s});if(!r.ok){if(428===r.status){l.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),n().push("/onboarding");return}let e=await r.text();throw Error("Error: ".concat(r.statusText," - ").concat(e))}return r.json()}function i(e,t,s){var a;let n=(null===(a=null==s?void 0:s.enabled)||void 0===a||a)&&e&&t?[e,t]:null,{data:l,error:i,mutate:c}=(0,r.Ay)(n,()=>o(e,t),s);return{data:l,isLoading:!l&&!i,error:i,mutate:c}}},4554:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var r=s(7876),a=s(4232),n=s(9099),l=s(5051),o=s(300),i=s(4957),c=s(3784),d=s(7644),u=s(7685),m=s(724),f=s(7808),g=s(6955);let p=["avatar1.png","avatar2.png","avatar3.png","avatar4.png","avatar5.png","avatar6.png","avatar7.png","avatar8.png","avatar9.png","avatar10.png","avatar11.png","avatar12.png","avatar13.png","avatar14.png","avatar15.png","avatar16.png"];function x(){let e=(0,n.useRouter)(),{instance:t}=(0,l.dk)(),{userData:s}=(0,o.r)(),{data:x,isLoading:h,error:v}=(0,c.g)("/api/Profile/getUser",null==s?void 0:s.accessToken,{refreshInterval:3e4,revalidateOnMount:!0,enabled:!!(null==s?void 0:s.accessToken)}),[b,j]=(0,a.useState)(null),[w,y]=(0,a.useState)(""),[k,N]=(0,a.useState)(""),[C,S]=(0,a.useState)(null),[T,A]=(0,a.useState)(!0),[P,E]=(0,a.useState)(!1),[_,z]=(0,a.useState)(!1);(0,a.useEffect)(()=>{x&&(y(x.nickName),j(x.profilePicture),N(x.address))},[x]);let[L,V]=(0,a.useState)(null);(0,a.useEffect)(()=>{x&&(y(x.nickName),j(x.profilePicture),N(x.address),S((0,m.y)(x.nickName)),V({nickName:x.nickName,profilePicture:x.profilePicture,address:x.address}))},[x]);let[K,O]=(0,a.useState)(!1),[B,F]=(0,a.useState)(""),I=(0,a.useMemo)(()=>!!L&&(w!==L.nickName||b!==L.profilePicture||k!==L.address),[w,b,k,L]),M=async()=>{if(null==s?void 0:s.accessToken){if(C){u.Ay.error("Kallenavnet er ugyldig.");return}O(!0),F("");try{let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Users/updateProfile",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.accessToken)},body:JSON.stringify({nickName:w,profilePicture:b,address:k})});if(!t.ok)throw Error("Serverfeil: ".concat(t.statusText));let r=await t.json();console.log("Profile updated:",r),(0,f.j)(["/api/Profile/overview",s.accessToken]),u.Ay.success("Profil oppdatert!"),e.push("/profile"),V({nickName:w,profilePicture:b,address:k}),F("Profil oppdatert!")}catch(e){return(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})})}finally{O(!1)}}};return h?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)(d.A,{})}):v?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):(0,r.jsxs)("div",{className:"flex justify-center w-full",children:[(0,r.jsxs)("div",{className:"w-full max-w-md flex flex-col mx-auto px-4",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center px-4",children:[(0,r.jsx)("header",{className:"self-start",children:(0,r.jsx)(g.A,{onClick:()=>e.back()})}),(0,r.jsx)("div",{className:"font-bold text-3xl text-violet-950 pb-6",children:"Instillinger"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center mt-4",children:[(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(b||"avatar1.png"),alt:"Profile",onClick:()=>z(!0),className:"w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"}),(0,r.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"Trykk for \xe5 endre bilde"})]}),(0,r.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-semibold mb-1",children:"Endre Kallenavn:"}),(0,r.jsx)("input",{type:"text",value:w,onChange:e=>{let t=e.target.value;y(t),S((0,m.y)(t))},className:"w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-customViolet focus:ring-1 focus:ring-customViolet"}),C&&(0,r.jsx)("p",{className:"text-red-600 text-sm mt-1",children:C})]}),(0,r.jsx)("div",{className:"mt-6 w-full max-w-md",children:(0,r.jsx)(i.A,{selectedAddress:k,setSelectedAddress:N})}),(0,r.jsxs)("div",{className:"mt-6 w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md",children:[(0,r.jsx)("span",{className:"text-gray-900 text-sm font-semibold",children:"Varslinger"}),(0,r.jsx)("button",{onClick:()=>A(!T),className:"w-12 h-6 flex items-center rounded-full transition ".concat(T?"bg-green-500":"bg-gray-400"),children:(0,r.jsx)("span",{className:"w-6 h-6 bg-white rounded-full shadow-md transform transition ".concat(T?"translate-x-6":"translate-x-0")})})]}),(0,r.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,r.jsxs)("button",{onClick:()=>E(!P),className:"w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md",children:[(0,r.jsx)("span",{className:"text-gray-900 text-sm font-semibold",children:"Poengsystem Forklaring"}),(0,r.jsx)("span",{className:"text-gray-500",children:P?"▲":"▼"})]}),P&&(0,r.jsxs)("div",{className:"p-4 bg-gray-50 rounded-lg mt-2 text-sm text-gray-600",children:["Tjen poeng for hvert b\xe6rekraftige reisevalg:",(0,r.jsx)("br",{}),"- 100 poeng for \xe5 g\xe5",(0,r.jsx)("br",{}),"- 80 poeng for \xe5 sykle",(0,r.jsx)("br",{}),"- 60 poeng for \xe5 ta buss",(0,r.jsx)("br",{}),"- 50 poeng for \xe5 samkj\xf8re",(0,r.jsx)("br",{}),"- 10 poeng for \xe5 kj\xf8re bil",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Lengre distanse gir flere poeng:",(0,r.jsx)("br",{}),"- 0 - 2 km = 20 poeng",(0,r.jsx)("br",{}),"- 2 - 5 km = 50 poeng",(0,r.jsx)("br",{}),"- 5 - 10 km = 80 poeng",(0,r.jsx)("br",{}),"- 10 - 15 km = 100 poeng",(0,r.jsx)("br",{}),"- 15 - 25 km = 150 poeng",(0,r.jsx)("br",{}),"- 25 km + = 200 poeng",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),'Fullf\xf8r utfordringer og opptjen "badges" for \xe5 samle enda flere poeng!']})]}),(0,r.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[B&&(0,r.jsx)("p",{className:"text-sm text-gray-600",children:B}),(0,r.jsx)("button",{onClick:M,disabled:!I||K||!!C,className:"px-4 py-2 rounded-md text-white text-sm font-medium transition ".concat(!I||K||C?"bg-gray-400 cursor-not-allowed":"bg-customViolet"),children:K?"Lagrer...":"Lagre profil"})]}),(0,r.jsx)("button",{onClick:()=>{sessionStorage.removeItem("userUpserted"),t.logoutRedirect()},className:"mt-6 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center",children:"Logg ut"})]}),_&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center",onClick:e=>{e.target===e.currentTarget&&z(!1)},children:(0,r.jsxs)("div",{className:"bg-white no-scrollbar overflow-y-auto overscroll-contain rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mb-4 text-center",children:"Velg et profilbilde"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4",children:p.map(e=>(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e||"avatar1.png"),alt:e,onClick:()=>{j(e),z(!1)},className:"w-16 h-16 rounded-full cursor-pointer transition border-4 ".concat(b===e?"border-customViolet scale-110":"border-transparent hover:border-gray-400 hover:scale-105")},e))}),(0,r.jsx)("button",{onClick:()=>z(!1),className:"mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded",children:"Lukk"})]})})]})}},4957:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(7876),a=s(4232),n=s(300);function l(e){let{selectedAddress:t,setSelectedAddress:s,inputBgClass:l="bg-white"}=e,[o,i]=(0,a.useState)(t),[c,d]=(0,a.useState)([]),[u,m]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1),{userData:p}=(0,n.r)();async function x(e){m(!0);try{if(!(null==p?void 0:p.accessToken))return;let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/geocode?address=".concat(encodeURIComponent(e)),{headers:{Authorization:"Bearer ".concat(p.accessToken)}});if(!t.ok){console.error("Failed to fetch suggestions"),d([]);return}let s=await t.json();d(s.features||[])}catch(e){console.error("Error fetching suggestions",e),d([])}finally{m(!1)}}(0,a.useEffect)(()=>{i(t)},[t]),(0,a.useEffect)(()=>{if(!o.trim()){d([]);return}let e=setTimeout(()=>{x(o)},500);return()=>clearTimeout(e)},[o]);let h=e=>{i(e.properties.label),s(e.properties.label),d([]),g(!1)};return(0,r.jsxs)("div",{className:"address-autocomplete relative",children:[(0,r.jsxs)("div",{className:"relative mb-2",children:[(0,r.jsx)("input",{type:"text",value:o,placeholder:"F.eks. Storgata 1, Oslo",onChange:e=>{i(e.target.value)},onFocus:()=>g(!0),onBlur:()=>{setTimeout(()=>{g(!1),o!==t&&i(t)},150)},className:"w-full p-3 rounded border ".concat(l," focus:outline-none focus:ring-2 focus:ring-customViolet")}),o&&(0,r.jsx)("button",{onClick:()=>{i(""),s(""),d([])},className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:"\xd7"})]}),f&&!u&&c.length>0&&o.trim()&&(0,r.jsx)("ul",{className:"absolute z-10 w-full border border-gray-200 rounded shadow-md bg-white max-h-60 overflow-y-auto",children:c.map((e,t)=>(0,r.jsx)("li",{onMouseDown:()=>h(e),className:"p-2 hover:bg-gray-100 cursor-pointer",children:e.properties.label},"".concat(e.properties.osm_id,"-").concat(t)))}),f&&u&&(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsxs)("svg",{className:"animate-spin h-5 w-5 text-customViolet",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),(0,r.jsx)("span",{className:"text-gray-600",children:"Laster adresser..."})]}),f&&!u&&0===c.length&&o.trim()&&(0,r.jsxs)("div",{className:"p-2 text-gray-500 border rounded",children:["Ingen treff p\xe5 “",o,"”"]})]})}},6955:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var r=s(7876);let a=(0,s(1713).A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),n=e=>{let{icon:t=(0,r.jsx)(a,{size:24}),onClick:s}=e;return(0,r.jsx)("button",{onClick:s,className:"flex items-center",children:t})}},7644:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(7876);function a(){return(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-customViolet"})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(2150)),_N_E=e.O()}]);