(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{3784:(e,t,s)=>{"use strict";s.d(t,{g:()=>c});var l=s(7596),r=s(9099),a=s.n(r),i=s(7685);async function n(e,t){let s={"Content-Type":"application/json"};t&&(s.Authorization="Bearer ".concat(t));let l=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:s});if(!l.ok){if(428===l.status){i.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),a().push("/onboarding");return}let e=await l.text();throw Error("Error: ".concat(l.statusText," - ").concat(e))}return l.json()}function c(e,t,s){let r=e&&t?[e,t]:null,{data:a,error:i,mutate:c}=(0,l.Ay)(r,r?()=>n(e,t):null,s);return{data:a,isLoading:!a&&!i,error:i,mutate:c}}},4842:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var l=s(7876);function r(e){let{message:t,onConfirm:s,onCancel:r,confirmColor:a="green"}=e;return(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,l.jsxs)("div",{className:"bg-white rounded-lg p-6 w-80 text-center",children:[(0,l.jsx)("p",{className:"text-lg font-semibold text-black",children:t}),(0,l.jsxs)("div",{className:"mt-4 flex justify-center gap-4",children:[(0,l.jsx)("button",{onClick:s,className:"red"===a?"px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition":"px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition",children:"Bekreft"}),(0,l.jsx)("button",{onClick:r,className:"px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition",children:"Avbryt"})]})]})})}s(4232)},8296:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var l=s(7876),r=s(4232);function a(e){let{teamName:t,totalScore:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"text-2xl sm:text-3xl font-semibold text-customViolet mb-2",children:t}),(0,l.jsx)("p",{className:"text-xl text-black font-semibold",children:"Gratulerer, ditt lag har opptjent"}),(0,l.jsxs)("p",{className:"text-3xl font-bold text-customViolet mt-2",children:[s," poeng"]})]})}var i=s(300),n=s(9099),c=s.n(n),o=s(3784),d=s(7644),m=s(4842);function x(){let[e,t]=(0,r.useState)("lagstatistikk"),[s,n]=(0,r.useState)(!1),{userData:x,loading:u}=(0,i.r)(),{data:f,isLoading:h,error:p}=(0,o.g)((null==x?void 0:x.accessToken)?"/api/team/myteam":null,null==x?void 0:x.accessToken,{refreshInterval:3e4}),b=u||h||!f;(0,r.useEffect)(()=>{p&&p.message.includes("404")&&c().replace("/team/onboarding")},[p]);let g=(null==f?void 0:f.members.map(e=>({id:e.userId,NickName:e.nickName,points:e.totalScore,profilePicture:e.profilePicture})))||[],j=[...g].sort((e,t)=>t.points-e.points).slice(0,3);if(b)return(0,l.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,l.jsx)(d.A,{})});if(p)return p.message.includes("404")?null:(0,l.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,l.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})});let N=async()=>{if(n(!1),null==x?void 0:x.accessToken)try{if(!(await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/leave",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(x.accessToken)}})).ok)throw Error("Klarte ikke forlate laget");c().replace("/team")}catch(e){console.error(e)}};return(0,l.jsxs)("div",{className:"flex flex-col items-center px-4",children:[(0,l.jsxs)("div",{className:"w-full max-w-xs sm:max-w-md relative",children:[(0,l.jsx)("div",{className:"fixed top-0 left-0 w-full bg-customYellow2 z-30 h-18 overflow-hidden",children:(0,l.jsx)("div",{className:"w-full max-w-xs sm:max-w-md mx-auto",children:(0,l.jsxs)("div",{className:"flex items-center border-4 border-customViolet rounded-full mt-4 p-1",children:[(0,l.jsx)("button",{className:"w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ".concat("lagstatistikk"===e?"bg-customViolet text-white":"text-black"),onClick:()=>t("lagstatistikk"),children:"Lagstatistikk"}),(0,l.jsx)("button",{className:"w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ".concat("medlemmer"===e?"bg-customViolet text-white":"text-black"),onClick:()=>t("medlemmer"),children:"Medlemmer"})]})})}),"lagstatistikk"===e?(0,l.jsxs)("main",{className:"mt-28 flex flex-col gap-6",children:[(0,l.jsx)("div",{className:"p-4 bg-customYellow2 border-2 border-violet-900 rounded-2xl text-center",children:(0,l.jsx)(a,{teamName:f.name,totalScore:f.teamTotalScore})}),(0,l.jsx)("p",{className:"text-2xl font-semibold text-customViolet text-center mt-4",children:"Ukens b\xe6rekraftshelter"}),(0,l.jsx)("div",{className:"mt-0 flex gap-4 overflow-x-auto px-4",children:j.map(e=>(0,l.jsxs)("div",{className:"flex flex-col bg-customYellow2 items-center border-2 border-violet-900 rounded-2xl p-4 w-32 flex-shrink-0 h-44",children:[(0,l.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e.profilePicture||"avatar1.png"),alt:e.NickName,className:"w-14 h-14 rounded-full object-cover border-2 border-customViolet"}),(0,l.jsx)("div",{className:"h-12 flex items-center justify-center",children:(0,l.jsx)("p",{className:"text-md max-w-24 line-clamp-2 break-all font-semibold text-black text-center leading-tight",children:e.NickName})}),(0,l.jsxs)("div",{className:"mt-auto flex flex-col items-center",children:[(0,l.jsx)("p",{className:"text-sm text-gray-700",children:"Poeng"}),(0,l.jsx)("p",{className:"text-lg font-bold text-customViolet",children:e.points})]})]},e.id))})]}):(0,l.jsxs)("main",{className:"mt-28 w-full",children:[(0,l.jsxs)("div",{className:"relative z-10 flex justify-between items-center bg-customYellow2 px-4 py-3 border-2 border-violet-900 rounded-2xl shadow-md",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-customViolet line-clamp-1 break-words max-w-[10rem] sm:max-w-[16rem]",children:f.name}),(0,l.jsxs)("p",{className:"mt-1 text-sm sm:text-base text-black",children:["Dere er ",g.length," medlemmer"]})]}),(0,l.jsx)("button",{onClick:()=>n(!0),className:"bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-200 transition",children:"Forlat Lag"})]}),(0,l.jsx)("div",{className:"relative mt-4 pt-4 z-10 pb-8",children:(0,l.jsx)("div",{className:"flex flex-col gap-4",children:g.map(e=>(0,l.jsxs)("div",{className:"flex items-center justify-between p-3 bg-customYellow2 border-2 border-violet-900 rounded-2xl",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(e.profilePicture||"avatar1.png"),alt:e.NickName,className:"w-12 h-12 rounded-full object-cover border-2 border-customViolet"}),(0,l.jsx)("p",{className:"text-base font-medium text-black break-all line-clamp-1 max-w-[18rem]",children:e.NickName})]}),(0,l.jsxs)("div",{className:"text-right",children:[(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"Poeng"}),(0,l.jsx)("p",{className:"text-lg font-bold text-customViolet",children:e.points})]})]},e.id))})})]})]}),s&&(0,l.jsx)(m.A,{message:"Er du sikker p\xe5 at du vil forlate laget?",onConfirm:N,onCancel:()=>n(!1),confirmColor:"red"})]})}},8540:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/dashboard",function(){return s(8296)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(8540)),_N_E=e.O()}]);