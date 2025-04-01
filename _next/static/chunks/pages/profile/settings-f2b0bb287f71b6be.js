(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{724:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var s=r(1367),a=r.n(s);function n(e,t){var r,s,n;let l=null!==(r=null==t?void 0:t.minLength)&&void 0!==r?r:3,o=null!==(s=null==t?void 0:t.maxLength)&&void 0!==s?s:15,i=null!==(n=null==t?void 0:t.label)&&void 0!==n?n:"Kallenavn";return e.length<l?"".concat(i," m\xe5 v\xe6re minst ").concat(l," tegn."):e.length>o?"".concat(i," kan ikke v\xe6re lengre enn ").concat(o," tegn."):/^[A-Za-zÆØÅæøå0-9_ ]+$/.test(e)?a().check(e)||a().list().some(t=>e.toLowerCase().includes(t))?"Dette kallenavnet inneholder upassende spr\xe5k.":null:"Kallenavn kan kun inneholde bokstaver, tall, mellomrom og understrek."}},2150:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/settings",function(){return r(3388)}])},3388:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(7876),a=r(4232),n=r(9099);let l=(0,r(1713).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var o=r(5051),i=r(300),c=r(4957),d=r(3784),u=r(7644),m=r(7685),g=r(724),f=r(7808);let p=["avatar1.png","avatar2.png","avatar3.png","avatar4.png","avatar5.png","avatar6.png","avatar7.png","avatar8.png","avatar9.png","avatar10.png","avatar11.png","avatar12.png","avatar13.png","avatar14.png","avatar15.png","avatar16.png"];function x(){let e=(0,n.useRouter)(),{instance:t}=(0,o.dk)(),{userData:r}=(0,i.r)(),x=(null==r?void 0:r.accessToken)?"/api/Profile/getUser":null,{data:h,isLoading:b,error:v}=(0,d.g)(x,null==r?void 0:r.accessToken,{refreshInterval:3e4}),[j,w]=(0,a.useState)(null),[y,k]=(0,a.useState)(""),[N,C]=(0,a.useState)(""),[S,T]=(0,a.useState)(null),[P,A]=(0,a.useState)(!0),[E,_]=(0,a.useState)(!1),[z,L]=(0,a.useState)(!1);(0,a.useEffect)(()=>{h&&(k(h.nickName),w(h.profilePicture),C(h.address))},[h]);let[V,K]=(0,a.useState)(null);(0,a.useEffect)(()=>{h&&(k(h.nickName),w(h.profilePicture),C(h.address),T((0,g.y)(h.nickName)),K({nickName:h.nickName,profilePicture:h.profilePicture,address:h.address}))},[h]);let[B,F]=(0,a.useState)(!1),[I,O]=(0,a.useState)(""),H=(0,a.useMemo)(()=>!!V&&(y!==V.nickName||j!==V.profilePicture||N!==V.address),[y,j,N,V]),M=async()=>{if(null==r?void 0:r.accessToken){if(S){m.Ay.error("Kallenavnet er ugyldig.");return}F(!0),O("");try{let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Users/updateProfile",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.accessToken)},body:JSON.stringify({nickName:y,profilePicture:j,address:N})});if(!t.ok)throw Error("Serverfeil: ".concat(t.statusText));let s=await t.json();console.log("Profile updated:",s),(0,f.j)(["/api/Profile/overview",r.accessToken]),m.Ay.success("Profil oppdatert!"),e.push("/profile"),K({nickName:y,profilePicture:j,address:N}),O("Profil oppdatert!")}catch(e){return(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})})}finally{F(!1)}}};return b?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)(u.A,{})}):v?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):(0,s.jsxs)("div",{className:"flex justify-center w-full",children:[(0,s.jsxs)("div",{className:"w-full max-w-md flex flex-col mx-auto px-4",children:[(0,s.jsxs)("div",{className:"relative flex items-center justify-center mb-6",children:[(0,s.jsx)("button",{onClick:()=>e.push("/profile"),className:"absolute left-0 text-black",children:(0,s.jsx)(l,{size:28,strokeWidth:2})}),(0,s.jsx)("h1",{className:"text-2xl font-semibold text-black",children:"Innstillinger"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mt-4",children:[(0,s.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(j||"avatar1.png"),alt:"Profile",onClick:()=>L(!0),className:"w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"Trykk for \xe5 endre bilde"})]}),(0,s.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-semibold mb-1",children:"Endre Kallenavn:"}),(0,s.jsx)("input",{type:"text",value:y,onChange:e=>{let t=e.target.value;k(t),T((0,g.y)(t))},className:"w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-customViolet focus:ring-1 focus:ring-customViolet"}),S&&(0,s.jsx)("p",{className:"text-red-600 text-sm mt-1",children:S})]}),(0,s.jsx)("div",{className:"mt-6 w-full max-w-md",children:(0,s.jsx)(c.A,{selectedAddress:N,setSelectedAddress:C})}),(0,s.jsxs)("div",{className:"mt-6 w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md",children:[(0,s.jsx)("span",{className:"text-gray-900 text-sm font-semibold",children:"Varslinger"}),(0,s.jsx)("button",{onClick:()=>A(!P),className:"w-12 h-6 flex items-center rounded-full transition ".concat(P?"bg-green-500":"bg-gray-400"),children:(0,s.jsx)("span",{className:"w-6 h-6 bg-white rounded-full shadow-md transform transition ".concat(P?"translate-x-6":"translate-x-0")})})]}),(0,s.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,s.jsxs)("button",{onClick:()=>_(!E),className:"w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md",children:[(0,s.jsx)("span",{className:"text-gray-900 text-sm font-semibold",children:"Poengsystem Forklaring"}),(0,s.jsx)("span",{className:"text-gray-500",children:E?"▲":"▼"})]}),E&&(0,s.jsxs)("div",{className:"p-4 bg-gray-50 rounded-lg mt-2 text-sm text-gray-600",children:["Tjen poeng for hvert b\xe6rekraftige reisevalg:",(0,s.jsx)("br",{}),"- 100 poeng for \xe5 g\xe5",(0,s.jsx)("br",{}),"- 80 poeng for \xe5 sykle",(0,s.jsx)("br",{}),"- 60 poeng for \xe5 ta buss",(0,s.jsx)("br",{}),"- 50 poeng for \xe5 samkj\xf8re",(0,s.jsx)("br",{}),"- 10 poeng for \xe5 kj\xf8re bil",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Lengre distanse gir flere poeng:",(0,s.jsx)("br",{}),"- 0 - 2 km = 20 poeng",(0,s.jsx)("br",{}),"- 2 - 5 km = 50 poeng",(0,s.jsx)("br",{}),"- 5 - 10 km = 80 poeng",(0,s.jsx)("br",{}),"- 10 - 15 km = 100 poeng",(0,s.jsx)("br",{}),"- 15 - 25 km = 150 poeng",(0,s.jsx)("br",{}),"- 25 km + = 200 poeng",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),'Fullf\xf8r utfordringer og opptjen "badges" for \xe5 samle enda flere poeng!']})]}),(0,s.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[I&&(0,s.jsx)("p",{className:"text-sm text-gray-600",children:I}),(0,s.jsx)("button",{onClick:M,disabled:!H||B||!!S,className:"px-4 py-2 rounded-md text-white text-sm font-medium transition ".concat(!H||B||S?"bg-gray-400 cursor-not-allowed":"bg-customViolet"),children:B?"Lagrer...":"Lagre profil"})]}),(0,s.jsx)("button",{onClick:()=>{sessionStorage.removeItem("userUpserted"),t.logoutRedirect()},className:"mt-6 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center",children:"Logg ut"})]}),z&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center",onClick:e=>{e.target===e.currentTarget&&L(!1)},children:(0,s.jsxs)("div",{className:"bg-white no-scrollbar overflow-y-auto overscroll-contain rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold mb-4 text-center",children:"Velg et profilbilde"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-4",children:p.map(e=>(0,s.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e||"avatar1.png"),alt:e,onClick:()=>{w(e),L(!1)},className:"w-16 h-16 rounded-full cursor-pointer transition border-4 ".concat(j===e?"border-customViolet scale-110":"border-transparent hover:border-gray-400 hover:scale-105")},e))}),(0,s.jsx)("button",{onClick:()=>L(!1),className:"mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded",children:"Lukk"})]})})]})}},3784:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var s=r(7596),a=r(9099),n=r.n(a),l=r(7685);async function o(e,t){let r={"Content-Type":"application/json"};t&&(r.Authorization="Bearer ".concat(t));let s=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:r});if(!s.ok){if(428===s.status){l.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),n().push("/onboarding");return}let e=await s.text();throw Error("Error: ".concat(s.statusText," - ").concat(e))}return s.json()}function i(e,t,r){let a=e&&t?[e,t]:null,{data:n,error:l,mutate:i}=(0,s.Ay)(a,a?()=>o(e,t):null,r);return{data:n,isLoading:!n&&!l,error:l,mutate:i}}},4957:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(7876),a=r(4232),n=r(300);function l(e){let{selectedAddress:t,setSelectedAddress:r,inputBgClass:l="bg-white"}=e,[o,i]=(0,a.useState)(t),[c,d]=(0,a.useState)([]),[u,m]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),{userData:p}=(0,n.r)();async function x(e){m(!0);try{if(!(null==p?void 0:p.accessToken))return;let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/geocode?address=".concat(encodeURIComponent(e)),{headers:{Authorization:"Bearer ".concat(p.accessToken)}});if(!t.ok){console.error("Failed to fetch suggestions"),d([]);return}let r=await t.json();d(r.features||[])}catch(e){console.error("Error fetching suggestions",e),d([])}finally{m(!1)}}(0,a.useEffect)(()=>{i(t)},[t]),(0,a.useEffect)(()=>{if(!o.trim()){d([]);return}let e=setTimeout(()=>{x(o)},500);return()=>clearTimeout(e)},[o]);let h=e=>{i(e.properties.label),r(e.properties.label),d([]),f(!1)};return(0,s.jsxs)("div",{className:"address-autocomplete relative",children:[(0,s.jsxs)("div",{className:"relative mb-2",children:[(0,s.jsx)("input",{type:"text",value:o,placeholder:"F.eks. Storgata 1, Oslo",onChange:e=>{i(e.target.value)},onFocus:()=>f(!0),onBlur:()=>{setTimeout(()=>{f(!1),o!==t&&i(t)},150)},className:"w-full p-3 rounded border ".concat(l," focus:outline-none focus:ring-2 focus:ring-customViolet")}),o&&(0,s.jsx)("button",{onClick:()=>{i(""),r(""),d([])},className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:"\xd7"})]}),g&&!u&&c.length>0&&o.trim()&&(0,s.jsx)("ul",{className:"absolute z-10 w-full border border-gray-200 rounded shadow-md bg-white max-h-60 overflow-y-auto",children:c.map((e,t)=>(0,s.jsx)("li",{onMouseDown:()=>h(e),className:"p-2 hover:bg-gray-100 cursor-pointer",children:e.properties.label},"".concat(e.properties.osm_id,"-").concat(t)))}),g&&u&&(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsxs)("svg",{className:"animate-spin h-5 w-5 text-customViolet",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),(0,s.jsx)("span",{className:"text-gray-600",children:"Laster adresser..."})]}),g&&!u&&0===c.length&&o.trim()&&(0,s.jsxs)("div",{className:"p-2 text-gray-500 border rounded",children:["Ingen treff p\xe5 “",o,"”"]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(2150)),_N_E=e.O()}]);