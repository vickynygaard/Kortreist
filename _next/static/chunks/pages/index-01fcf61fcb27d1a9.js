(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2282:(e,t,s)=>{"use strict";s.d(t,{O:()=>n});var r=s(4232),i=s(9099),l=s(300);function n(){let e=(0,i.useRouter)(),{userData:t}=(0,l.r)();(0,r.useEffect)(()=>{if(!(null==t?void 0:t.accessToken))return;let s=e.pathname;["/","/profile","/team","/leaderboard"].filter(e=>e!==s).forEach(t=>e.prefetch(t))},[e.pathname,null==t?void 0:t.accessToken])}},3784:(e,t,s)=>{"use strict";s.d(t,{g:()=>c});var r=s(7596),i=s(9099),l=s.n(i),n=s(7685);async function a(e,t){let s={"Content-Type":"application/json"};t&&(s.Authorization="Bearer ".concat(t));let r=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:s});if(!r.ok){if(428===r.status){n.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),l().push("/onboarding");return}let e=await r.text();throw Error("Error: ".concat(r.statusText," - ").concat(e))}return r.json()}function c(e,t,s){let i=e&&t?[e,t]:null,{data:l,error:n,mutate:c}=(0,r.Ay)(i,i?()=>a(e,t):null,s);return{data:l,isLoading:!l&&!n,error:n,mutate:c}}},4277:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(7876),i=s(4587),l=s.n(i);let n=(0,s(1713).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var a=s(9099);let c=e=>{let{href:t,image:s,title:i,description:c}=e,o=(0,a.useRouter)();return(0,r.jsxs)("button",{onClick:()=>o.push(t),className:"grid grid-cols-5 grid-rows-2 h-24 w-full rounded-2xl bg-customYellow2 border-2 border-violet-900 gap-2  focus:ring focus:ring-violet-600",children:[(0,r.jsxs)("div",{className:"col-span-4 row-span-2 grid grid-cols-3 grid-rows-4 py-2",children:[(0,r.jsx)("div",{className:"row-span-4 flex items-center justify-center",children:(0,r.jsx)(l(),{src:s,alt:i,width:64,height:64})}),(0,r.jsx)("div",{className:"col-span-2 row-span-2 flex items-center justify-start text-xl font-bold truncate",children:i}),(0,r.jsx)("div",{className:"col-span-2 row-span-2 flex items-center justify-start text-sm text-left",children:c})]}),(0,r.jsx)("div",{className:"row-span-2 flex items-center justify-center self-center justify-self-center",children:(0,r.jsx)(n,{size:24,strokeWidth:2})})]})},o=e=>{let{profilePic:t,name:s,points:i}=e;return(0,r.jsxs)("div",{className:"grid grid-rows-5 w-full gap-2",children:[(0,r.jsxs)("div",{className:"row-span-3 grid grid-cols-5 gap-2",children:[(0,r.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,r.jsx)("div",{className:"w-16 h-16 rounded-full overflow-hidden",children:(0,r.jsx)(l(),{src:t,alt:"Profilbilde",width:64,height:64,objectFit:"cover"})})}),(0,r.jsxs)("div",{className:"col-span-4 flex items-center justify-start text-2xl font-semibold",children:["Hei, ",(0,r.jsx)("br",{}),s,"!"]})]}),(0,r.jsx)("div",{className:"row-span-2 flex items-center justify-start text-lg",children:(0,r.jsxs)("p",{children:["Du har samlet inn ",(0,r.jsxs)("strong",{children:[i," poeng"]})," ",(0,r.jsx)("br",{}),"St\xe5 p\xe5!"]})})]})};var d=s(300),u=s(7644),f=s(3784),h=s(2282),x=s(2142);let m=()=>{var e,t,s;let{userData:i}=(0,d.r)();(0,h.O)();let l=(null==i?void 0:i.accessToken)?"/api/Profile/getUser":null,{data:n,isLoading:a,error:m}=(0,f.g)(l,null==i?void 0:i.accessToken,{refreshInterval:3e4}),g=(0,x.o)();return a&&g?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)(u.A,{})}):m?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):(0,r.jsx)("div",{className:"flex flex-col w-full justify-between",children:(0,r.jsxs)("main",{className:"flex flex-col w-full gap-4 p-4",children:[(0,r.jsx)(o,{profilePic:"".concat("/Kortreist","/images/profile-pictures/").concat(null==n?void 0:n.profilePicture),name:null!==(t=null==n?void 0:n.name)&&void 0!==t?t:"Bruker",points:null!==(s=null==n?void 0:null===(e=n.totalScore)||void 0===e?void 0:e.toString())&&void 0!==s?s:"0"}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 pt-4",children:[(0,r.jsx)(c,{href:"travelForm",image:"".concat("/Kortreist","/images/RegistrerReise.svg"),title:"Registrer reise",description:"Samle poeng for \xe5 reise b\xe6rekraftig til jobb"}),(0,r.jsx)(c,{href:"/team",image:"".concat("/Kortreist","/images/RegistrerReise.svg"),title:"Ditt lag",description:"Se lagstatistikk, medlemmer..."}),(0,r.jsx)(c,{href:"challenges",image:"".concat("/Kortreist","/images/RegistrerReise.svg"),title:"Ukens utfordringer",description:"Fullf\xf8r utfordringer for \xe5 samle poeng"})]})]})})}},6760:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4277)}])},7644:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(7876);function i(){return(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(6760)),_N_E=e.O()}]);