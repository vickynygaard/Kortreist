(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{724:(e,t,a)=>{"use strict";a.d(t,{y:()=>s});var r=a(1367),l=a.n(r);function s(e,t){var a,r,s;let n=null!==(a=null==t?void 0:t.minLength)&&void 0!==a?a:3,i=null!==(r=null==t?void 0:t.maxLength)&&void 0!==r?r:15,c=null!==(s=null==t?void 0:t.label)&&void 0!==s?s:"Kallenavn";return e.length<n?"".concat(c," m\xe5 v\xe6re minst ").concat(n," tegn."):e.length>i?"".concat(c," kan ikke v\xe6re lengre enn ").concat(i," tegn."):/^[A-Za-zÆØÅæøå0-9_ ]+$/.test(e)?l().check(e)||l().list().some(t=>e.toLowerCase().includes(t))?"Dette kallenavnet inneholder upassende spr\xe5k.":null:"Kallenavn kan kun inneholde bokstaver, tall, mellomrom og understrek."}},3784:(e,t,a)=>{"use strict";a.d(t,{g:()=>c});var r=a(7596),l=a(9099),s=a.n(l),n=a(7685);async function i(e,t){let a={"Content-Type":"application/json"};t&&(a.Authorization="Bearer ".concat(t));let r=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:a});if(!r.ok){if(428===r.status){n.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),s().push("/onboarding");return}let e=await r.text();throw Error("Error: ".concat(r.statusText," - ").concat(e))}return r.json()}function c(e,t,a){var l;let s=(null===(l=null==a?void 0:a.enabled)||void 0===l||l)&&e&&t?[e,t]:null,{data:n,error:c,mutate:o}=(0,r.Ay)(s,()=>i(e,t),a);return{data:n,isLoading:!n&&!c,error:c,mutate:o}}},4842:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(7876);function l(e){let{message:t,onConfirm:a,onCancel:l,confirmColor:s="green"}=e;return(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 w-80 text-center",children:[(0,r.jsx)("p",{className:"text-lg font-semibold text-black",children:t}),(0,r.jsxs)("div",{className:"mt-4 flex justify-center gap-4",children:[(0,r.jsx)("button",{onClick:a,className:"red"===s?"px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition":"px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition",children:"Bekreft"}),(0,r.jsx)("button",{onClick:l,className:"px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition",children:"Avbryt"})]})]})})}a(4232)},6401:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var r=a(7876),l=a(4232);let s=(0,a(1713).A)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);var n=a(7685),i=a(7808),c=a(724);function o(e){let{teamName:t,totalScore:a,teamProfilePicture:o,accessToken:m,teamId:d}=e,[x,u]=(0,l.useState)(!1),[g,p]=(0,l.useState)(t),[f,h]=(0,l.useState)(t),[b,v]=(0,l.useState)(null),j=(0,l.useRef)(null),k=(0,l.useRef)(!1),[N,w]=(0,l.useState)(!1),[y,A]=(0,l.useState)(o||"teamAvatar1.png");(0,l.useEffect)(()=>{p(t),h(t)},[t]);let C=async(e,t)=>{if(m&&d)try{if(!(await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/editTeam",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m)},body:JSON.stringify({teamId:d,name:e,teamProfilePicture:t})})).ok)throw Error("Kunne ikke oppdatere laget.");n.Ay.success("Lagprofil oppdatert!"),await (0,i.j)(["/api/team/myteam",m]),h(e),u(!1)}catch(e){console.error(e),n.Ay.error("Noe gikk galt ved oppdatering.")}},T=e=>{A(e),w(!1),b||g.trim()!==f?b||""===g.trim()?n.Ay.error("Kan ikke oppdatere lagbilde med ugyldig lagnavn."):C(g.trim(),e):C(f,e)};(0,l.useRef)();let P=e=>{p(e),v((0,c.y)(e,{maxLength:15,label:"Lagnavn"}))};return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/team-pictures/").concat(y),alt:t,onClick:()=>w(!0),className:"w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-customViolet shadow-md mb-4 cursor-pointer hover:opacity-80 transition"}),(0,r.jsx)("p",{className:"text-xs text-gray-500 -mt-2",children:"Trykk for \xe5 endre lagbilde"}),x?(0,r.jsxs)("div",{className:"flex flex-col items-center mt-2 w-full",children:[(0,r.jsxs)("div",{className:"w-[90%] mx-auto",children:[(0,r.jsx)("input",{type:"text",value:g,onChange:e=>P(e.target.value),onBlur:e=>{if(k.current){k.current=!1;return}e.relatedTarget!==j.current&&(g.trim()===f||b?u(!1):C(g.trim(),y))},className:"w-full text-2xl sm:text-3xl font-bold text-customViolet text-center border-b border-customViolet bg-transparent focus:outline-none",autoFocus:!0}),b&&(0,r.jsx)("p",{className:"mt-2 text-md text-red-600 text-center",children:b})]}),!b&&(0,r.jsxs)("div",{className:"mt-2 flex gap-3",children:[(0,r.jsx)("button",{ref:j,onClick:()=>C(g,y),disabled:g===f,className:"text-sm px-4 py-1 rounded-full font-medium transition ".concat(g===f?"bg-gray-400 text-white cursor-not-allowed":"bg-green-600 text-white hover:bg-green-700"),children:"Lagre"}),(0,r.jsx)("button",{onMouseDown:()=>{k.current=!0},onClick:()=>{p(f),v(null),u(!1)},className:"text-sm px-4 py-1 rounded-full font-medium transition bg-gray-200 text-gray-800 hover:bg-gray-300",children:"Avbryt"})]})]}):(0,r.jsxs)("div",{className:"mt-2 flex items-center justify-center cursor-pointer",onClick:()=>u(!0),children:[(0,r.jsx)("h2",{className:"text-2xl sm:text-3xl font-bold text-customViolet text-center",children:g}),(0,r.jsx)(s,{size:18,className:"text-black ml-2"})]}),(0,r.jsx)("p",{className:"text-base sm:text-lg text-black mt-2 text-center",children:"Gratulerer, laget ditt har opptjent"}),(0,r.jsxs)("p",{className:"text-3xl sm:text-4xl font-extrabold text-customViolet mt-1 text-center",children:[a.toLocaleString("no-NO")," poeng"]}),N&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center",onClick:e=>{e.target===e.currentTarget&&w(!1)},children:(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg overflow-y-auto",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mb-4 text-center",children:"Velg et lagbilde"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4",children:["teamAvatar1.png","teamAvatar2.png","teamAvatar3.png","teamAvatar4.png","teamAvatar5.png","teamAvatar6.png","teamAvatar7.png","teamAvatar8.png","teamAvatar9.png","teamAvatar10.png","teamAvatar11.png","teamAvatar12.png","teamAvatar13.png","teamAvatar14.png","teamAvatar15.png","teamAvatar16.png","teamAvatar17.png","teamAvatar18.png","teamAvatar19.png","teamAvatar20.png"].map(e=>(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/team-pictures/").concat(e),alt:e,onClick:()=>T(e),className:"w-16 h-16 rounded-full cursor-pointer transition border-4 ".concat(y===e?"border-customViolet scale-110":"border-transparent hover:border-gray-400 hover:scale-105")},e))}),(0,r.jsx)("button",{onClick:()=>w(!1),className:"mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded",children:"Lukk"})]})})]})}var m=a(300),d=a(9099),x=a.n(d),u=a(3784),g=a(7644),p=a(4842),f=a(2142);function h(){let e;let[t,a]=(0,l.useState)("lagstatistikk"),[s,n]=(0,l.useState)(!1),{userData:i,loading:c}=(0,m.r)();{let t=localStorage.getItem("teamData");if(t)try{e=JSON.parse(t)}catch(e){console.error("Failed to parse cached team data:",e)}}let{data:d,isLoading:h,error:b}=(0,u.g)("/api/team/myteam",null==i?void 0:i.accessToken,{refreshInterval:3e4,revalidateOnMount:!0,fallbackData:e,enabled:!!(null==i?void 0:i.accessToken)});(0,l.useEffect)(()=>{d&&localStorage.setItem("teamData",JSON.stringify(d))},[d]);let v=c||h||!d;(0,l.useEffect)(()=>{v||d||b||x().replace("/team/onboarding")},[v,d,b]);let j=(0,f.o)();if(v&&j)return(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)(g.A,{})});if(b)return b.message.includes("404")?null:(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})});if(!d)return null;let k=d.members.map(e=>({id:e.userId,NickName:e.nickName,points:e.totalScore,profilePicture:e.profilePicture}))||[],N=[...k].sort((e,t)=>t.points-e.points).slice(0,3),w=async()=>{if(n(!1),null==i?void 0:i.accessToken)try{if(!(await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/leave",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.accessToken)}})).ok)throw Error("Klarte ikke forlate laget");x().replace("/team")}catch(e){console.error(e)}};return(0,r.jsxs)("div",{className:"flex flex-col items-center px-4",children:[(0,r.jsxs)("div",{className:"w-full max-w-xs sm:max-w-md relative",children:[(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full bg-customYellow2 z-30 h-18 overflow-hidden",children:(0,r.jsx)("div",{className:"w-full max-w-xs sm:max-w-md mx-auto",children:(0,r.jsxs)("div",{className:"flex items-center border-4 border-customViolet rounded-full mt-4 p-1",children:[(0,r.jsx)("button",{className:"w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ".concat("lagstatistikk"===t?"bg-customViolet text-white":"text-black"),onClick:()=>a("lagstatistikk"),children:"Lagstatistikk"}),(0,r.jsx)("button",{className:"w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ".concat("medlemmer"===t?"bg-customViolet text-white":"text-black"),onClick:()=>a("medlemmer"),children:"Medlemmer"})]})})}),"lagstatistikk"===t?(0,r.jsxs)("main",{className:"mt-20 flex flex-col gap-6",children:[(0,r.jsx)("div",{className:"p-4 bg-customYellow2 text-center",children:(0,r.jsx)(o,{teamName:d.name,totalScore:d.teamTotalScore,teamProfilePicture:d.teamProfilePicture,accessToken:null==i?void 0:i.accessToken,teamId:d.teamId})}),(0,r.jsx)("p",{className:"text-2xl font-semibold text-customViolet text-center mt-4",children:"Ukens b\xe6rekraftshelter"}),(0,r.jsx)("div",{className:"mt-0 flex gap-4 overflow-x-auto px-4",children:N.map(e=>(0,r.jsxs)("div",{className:"flex flex-col bg-customYellow2 items-center border-2 border-violet-900 rounded-2xl p-4 w-32 flex-shrink-0 h-44",children:[(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e.profilePicture||"avatar1.png"),alt:e.NickName,className:"w-14 h-14 rounded-full object-cover border-2 border-customViolet"}),(0,r.jsx)("div",{className:"h-12 flex items-center justify-center",children:(0,r.jsx)("p",{className:"text-md max-w-24 line-clamp-2 break-all font-semibold text-black text-center leading-tight",children:e.NickName})}),(0,r.jsxs)("div",{className:"mt-auto flex flex-col items-center",children:[(0,r.jsx)("p",{className:"text-sm text-gray-700",children:"Poeng"}),(0,r.jsx)("p",{className:"text-lg font-bold text-customViolet",children:e.points})]})]},e.id))})]}):(0,r.jsxs)("main",{className:"mt-28 w-full",children:[(0,r.jsxs)("div",{className:"relative z-10 flex justify-between items-center bg-customYellow2 px-4 py-3 border-2 border-violet-900 rounded-2xl shadow-md",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-customViolet line-clamp-1 break-words max-w-[10rem] sm:max-w-[16rem]",children:d.name}),(0,r.jsxs)("p",{className:"mt-1 text-sm sm:text-base text-black",children:["Dere er ",k.length," medlemmer"]})]}),(0,r.jsx)("button",{onClick:()=>n(!0),className:"bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-200 transition",children:"Forlat Lag"})]}),(0,r.jsx)("div",{className:"relative mt-4 pt-4 z-10 pb-8",children:(0,r.jsx)("div",{className:"flex flex-col gap-4",children:k.map(e=>(0,r.jsxs)("div",{className:"flex items-center justify-between p-3 bg-customYellow2 border-2 border-violet-900 rounded-2xl",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e.profilePicture||"avatar1.png"),alt:e.NickName,className:"w-12 h-12 rounded-full object-cover border-2 border-customViolet"}),(0,r.jsx)("p",{className:"text-base font-medium text-black break-all line-clamp-1 max-w-[18rem]",children:e.NickName})]}),(0,r.jsxs)("div",{className:"text-right",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Poeng"}),(0,r.jsx)("p",{className:"text-lg font-bold text-customViolet",children:e.points})]})]},e.id))})})]})]}),s&&(0,r.jsx)(p.A,{message:"Er du sikker p\xe5 at du vil forlate laget?",onConfirm:w,onCancel:()=>n(!1),confirmColor:"red"})]})}},7644:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(7876);function l(){return(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-customViolet"})})}},8540:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/dashboard",function(){return a(6401)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(8540)),_N_E=e.O()}]);