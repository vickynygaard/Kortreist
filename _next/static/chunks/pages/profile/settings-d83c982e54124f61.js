(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{2150:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/settings",function(){return s(3388)}])},3388:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(7876),a=s(4232),n=s(9099);let l=(0,s(1713).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var o=s(5051),i=s(300),c=s(4957),d=s(5577),u=s(7644),m=s(7685);let f=["avatar1.png","avatar2.png","avatar3.png","avatar4.png","avatar5.png","avatar6.png","avatar7.png","avatar8.png","avatar9.png","avatar10.png","avatar11.png","avatar12.png","avatar13.png","avatar14.png","avatar15.png","avatar16.png"];function p(){let e=(0,n.useRouter)(),{instance:t}=(0,o.dk)(),{userData:s}=(0,i.r)(),p=(null==s?void 0:s.accessToken)?"/api/Profile/getUser":null,{data:g,isLoading:x,error:h}=(0,d.g)(p,null==s?void 0:s.accessToken,{refreshInterval:3e4}),[b,j]=(0,a.useState)(null),[v,w]=(0,a.useState)(""),[y,k]=(0,a.useState)(""),[N,C]=(0,a.useState)(!0),[S,T]=(0,a.useState)(!1),[E,P]=(0,a.useState)(!1);(0,a.useEffect)(()=>{g&&(w(g.nickName),j(g.profilePicture),k(g.address))},[g]);let[A,_]=(0,a.useState)(null);(0,a.useEffect)(()=>{g&&_({nickName:g.nickName,profilePicture:g.profilePicture,address:g.address})},[g]);let[z,L]=(0,a.useState)(!1),[V,B]=(0,a.useState)(""),F=(0,a.useMemo)(()=>!!A&&(v!==A.nickName||b!==A.profilePicture||y!==A.address),[v,b,y,A]),I=async()=>{if(null==s?void 0:s.accessToken){L(!0),B("");try{let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Users/updateProfile",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.accessToken)},body:JSON.stringify({nickName:v,profilePicture:b,address:y})});if(!t.ok)throw Error("Serverfeil: ".concat(t.statusText));let r=await t.json();console.log("Profile updated:",r),m.Ay.success("Profil oppdatert!"),e.push("/profile"),_({nickName:v,profilePicture:b,address:y}),B("Profil oppdatert!")}catch(e){return(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})})}finally{L(!1)}}};return x?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)(u.A,{})}):h?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):(0,r.jsxs)("div",{className:"flex justify-center w-full",children:[(0,r.jsxs)("div",{className:"w-full max-w-md flex flex-col mx-auto px-4",children:[(0,r.jsxs)("div",{className:"relative flex items-center justify-center mb-6",children:[(0,r.jsx)("button",{onClick:()=>e.push("/profile"),className:"absolute left-0 text-black",children:(0,r.jsx)(l,{size:28,strokeWidth:2})}),(0,r.jsx)("h1",{className:"text-2xl font-semibold text-black",children:"Innstillinger"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center mt-4",children:[(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(b||"avatar1.png"),alt:"Profile",onClick:()=>P(!0),className:"w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"}),(0,r.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"Trykk for \xe5 endre bilde"})]}),(0,r.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-semibold mb-1",children:"Endre Kallenavn:"}),(0,r.jsx)("input",{type:"text",value:v,onChange:e=>w(e.target.value),className:"w-full max-w-md p-4 bg-white rounded-lg shadow-md"})]}),(0,r.jsx)("div",{className:"mt-6 w-full max-w-md",children:(0,r.jsx)(c.A,{selectedAddress:y,setSelectedAddress:k})}),(0,r.jsxs)("div",{className:"mt-6 w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md",children:[(0,r.jsx)("span",{className:"text-gray-900 text-sm font-semibold",children:"Varslinger"}),(0,r.jsx)("button",{onClick:()=>C(!N),className:"w-12 h-6 flex items-center rounded-full transition ".concat(N?"bg-green-500":"bg-gray-400"),children:(0,r.jsx)("span",{className:"w-6 h-6 bg-white rounded-full shadow-md transform transition ".concat(N?"translate-x-6":"translate-x-0")})})]}),(0,r.jsxs)("div",{className:"mt-6 w-full max-w-md",children:[(0,r.jsxs)("button",{onClick:()=>T(!S),className:"w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md",children:[(0,r.jsx)("span",{className:"text-gray-900 text-sm font-semibold",children:"Poengsystem Forklaring"}),(0,r.jsx)("span",{className:"text-gray-500",children:S?"▲":"▼"})]}),S&&(0,r.jsxs)("div",{className:"p-4 bg-gray-50 rounded-lg mt-2 text-sm text-gray-600",children:["Tjen poeng for hvert b\xe6rekraftige reisevalg:",(0,r.jsx)("br",{}),"- 100 poeng for \xe5 g\xe5",(0,r.jsx)("br",{}),"- 80 poeng for \xe5 sykle",(0,r.jsx)("br",{}),"- 60 poeng for \xe5 ta buss",(0,r.jsx)("br",{}),"- 50 poeng for \xe5 samkj\xf8re",(0,r.jsx)("br",{}),"- 10 poeng for \xe5 kj\xf8re bil",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Lengre distanse gir flere poeng:",(0,r.jsx)("br",{}),"- 0 - 2 km = 20 poeng",(0,r.jsx)("br",{}),"- 2 - 5 km = 50 poeng",(0,r.jsx)("br",{}),"- 5 - 10 km = 80 poeng",(0,r.jsx)("br",{}),"- 10 - 15 km = 100 poeng",(0,r.jsx)("br",{}),"- 15 - 25 km = 150 poeng",(0,r.jsx)("br",{}),"- 25 km + = 200 poeng",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),'Fullf\xf8r utfordringer og opptjen "badges" for \xe5 samle enda flere poeng!']})]}),(0,r.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[V&&(0,r.jsx)("p",{className:"text-sm text-gray-600",children:V}),(0,r.jsx)("button",{onClick:I,disabled:!F||z,className:"px-4 py-2 rounded-md text-white text-sm font-medium transition ".concat(F&&!z?"bg-customViolet":"bg-gray-400 cursor-not-allowed"),children:z?"Lagrer...":"Lagre profil"})]}),(0,r.jsx)("button",{onClick:()=>{sessionStorage.removeItem("userUpserted"),t.logoutRedirect()},className:"mt-6 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center",children:"Logg ut"})]}),E&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center",onClick:e=>{e.target===e.currentTarget&&P(!1)},children:(0,r.jsxs)("div",{className:"bg-white no-scrollbar overflow-y-auto overscroll-contain rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mb-4 text-center",children:"Velg et profilbilde"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4",children:f.map(e=>(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e||"avatar1.png"),alt:e,onClick:()=>{j(e),P(!1)},className:"w-16 h-16 rounded-full cursor-pointer transition border-4 ".concat(b===e?"border-customViolet scale-110":"border-transparent hover:border-gray-400 hover:scale-105")},e))}),(0,r.jsx)("button",{onClick:()=>P(!1),className:"mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded",children:"Lukk"})]})})]})}},4957:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(7876),a=s(4232),n=s(300);function l(e){let{selectedAddress:t,setSelectedAddress:s,inputBgClass:l="bg-white"}=e,[o,i]=(0,a.useState)(t),[c,d]=(0,a.useState)([]),[u,m]=(0,a.useState)(!1),[f,p]=(0,a.useState)(!1),{userData:g}=(0,n.r)();async function x(e){m(!0);try{if(!(null==g?void 0:g.accessToken))return;let t=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/geocode?address=".concat(encodeURIComponent(e)),{headers:{Authorization:"Bearer ".concat(g.accessToken)}});if(!t.ok){console.error("Failed to fetch suggestions"),d([]);return}let s=await t.json();d(s.features||[])}catch(e){console.error("Error fetching suggestions",e),d([])}finally{m(!1)}}(0,a.useEffect)(()=>{i(t)},[t]),(0,a.useEffect)(()=>{if(!o.trim()){d([]);return}let e=setTimeout(()=>{x(o)},500);return()=>clearTimeout(e)},[o]);let h=e=>{i(e.properties.label),s(e.properties.label),d([]),p(!1)};return(0,r.jsxs)("div",{className:"address-autocomplete relative",children:[(0,r.jsxs)("div",{className:"relative mb-2",children:[(0,r.jsx)("input",{type:"text",value:o,placeholder:"F.eks. Storgata 1, Oslo",onChange:e=>{i(e.target.value)},onFocus:()=>p(!0),onBlur:()=>{setTimeout(()=>{p(!1),o!==t&&i(t)},150)},className:"w-full p-3 rounded border ".concat(l," focus:outline-none focus:ring-2 focus:ring-customViolet")}),o&&(0,r.jsx)("button",{onClick:()=>{i(""),s(""),d([])},className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:"\xd7"})]}),f&&!u&&c.length>0&&o.trim()&&(0,r.jsx)("ul",{className:"absolute z-10 w-full border border-gray-200 rounded shadow-md bg-white max-h-60 overflow-y-auto",children:c.map((e,t)=>(0,r.jsx)("li",{onMouseDown:()=>h(e),className:"p-2 hover:bg-gray-100 cursor-pointer",children:e.properties.label},"".concat(e.properties.osm_id,"-").concat(t)))}),f&&u&&(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsxs)("svg",{className:"animate-spin h-5 w-5 text-customViolet",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),(0,r.jsx)("span",{className:"text-gray-600",children:"Laster adresser..."})]}),f&&!u&&0===c.length&&o.trim()&&(0,r.jsxs)("div",{className:"p-2 text-gray-500 border rounded",children:["Ingen treff p\xe5 “",o,"”"]})]})}},5577:(e,t,s)=>{"use strict";s.d(t,{g:()=>i});var r=s(6768),a=s(9099),n=s.n(a),l=s(7685);async function o(e,t){let s={"Content-Type":"application/json"};t&&(s.Authorization="Bearer ".concat(t));let r=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:s});if(!r.ok){if(428===r.status){l.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),n().push("/onboarding");return}let e=await r.text();throw Error("Error: ".concat(r.statusText," - ").concat(e))}return r.json()}function i(e,t,s){let a=e&&t?[e,t]:null,{data:n,error:l,mutate:i}=(0,r.Ay)(a,a?()=>o(e,t):null,s);return{data:n,isLoading:!n&&!l,error:l,mutate:i}}}},e=>{var t=t=>e(e.s=t);e.O(0,[768,636,593,792],()=>t(2150)),_N_E=e.O()}]);