(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{2948:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(7876),l=r(4232);let a=e=>{let{nickName:t,score:r,rank:l,profilePicture:a,visualPosition:n}=e;return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-end w-24 relative",children:[(0,s.jsx)("div",{className:"relative -mb-6 z-10",children:(0,s.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(a||"avatar1.png"),alt:t,className:"w-16 h-16 rounded-full border-4 ".concat({1:"border-yellow-400",2:"border-gray-300",3:"border-amber-600"}[l]||"border-gray-200"," object-cover bg-white")})}),(0,s.jsxs)("div",{className:"w-full flex flex-col items-center justify-end ".concat((e=>1===e?"h-32":2===e?"h-24":3===e?"h-20":"h-16")(l)," bg-violet-900 text-white rounded-t-2xl pt-8 pb-2"),children:[(0,s.jsx)("span",{className:"text-xl font-bold",children:l}),(0,s.jsx)("span",{className:"text-base",children:r})]}),(0,s.jsx)("div",{className:"mt-2 h-8 w-full px-1 text-center",children:(0,s.jsx)("span",{className:"text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600 line-clamp-2 leading-tight break-words",children:t})})]})},n=e=>{let{nickName:t,score:r,rank:l,profilePicture:a}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-between p-4 px-8 gap-4 border-b border-gray-500 last:border-b-0 h-[73px]",children:[(0,s.jsx)("span",{className:"font-bold w-6 text-center",children:l}),(0,s.jsxs)("div",{className:"flex items-center gap-4 flex-grow",children:[(0,s.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(a||"avatar1.png"),alt:t,className:"w-10 h-10 rounded-full border-2 border-customViolet object-cover"}),(0,s.jsx)("p",{className:"break-all max-w-[24rem] max-h-[3.5rem] overflow-hidden",children:t})]}),(0,s.jsx)("span",{className:"font-semibold text-customViolet",children:r})]})};var c=r(300),i=r(3784),o=r(7644);let d=()=>{let[e,t]=(0,l.useState)([]),[r,d]=(0,l.useState)([]),{userData:u,loading:x}=(0,c.r)(),f=(null==u?void 0:u.accessToken)?"/api/users/all":null,{data:m,isLoading:h,error:p}=(0,i.g)(f,null==u?void 0:u.accessToken,{refreshInterval:3e4});return((0,l.useEffect)(()=>{if(!m)return;let e=[...m].sort((e,t)=>t.totalScore-e.totalScore),r=[],s=1;for(let t=0;t<e.length;t++)t>0&&e[t].totalScore===e[t-1].totalScore?r.push({...e[t],rank:r[t-1].rank}):r.push({...e[t],rank:s}),s++;t(r.slice(0,3)),d(r.slice(3))},[m]),p)?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):x||h||p?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)(o.A,{})}):(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"flex justify-center items-end gap-6 mt-10",children:[2,1,3].map(t=>{let r=e[t-1];return r?(0,s.jsx)(a,{rank:r.rank,nickName:r.nickName,score:r.totalScore,profilePicture:r.profilePicture,visualPosition:t},r.userId):null})}),(0,s.jsx)("div",{className:"mt-4 w-full rounded-t-lg bg-customYellow2/50 backdrop-blur-md",children:r.map(e=>(0,s.jsx)(n,{rank:e.rank,nickName:e.nickName,score:e.totalScore,profilePicture:e.profilePicture},e.userId))})]})}},3784:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var s=r(7596),l=r(9099),a=r.n(l),n=r(7685);async function c(e,t){let r={"Content-Type":"application/json"};t&&(r.Authorization="Bearer ".concat(t));let s=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:r});if(!s.ok){if(428===s.status){n.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),a().push("/onboarding");return}let e=await s.text();throw Error("Error: ".concat(s.statusText," - ").concat(e))}return s.json()}function i(e,t,r){let l=e&&t?[e,t]:null,{data:a,error:n,mutate:i}=(0,s.Ay)(l,l?()=>c(e,t):null,r);return{data:a,isLoading:!a&&!n,error:n,mutate:i}}},4996:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/leaderboard/company",function(){return r(5992)}])},5992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(7876),l=r(2948),a=r(6733);function n(){return(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("div",{className:"w-full text-center text-2xl font-medium pb-4",children:(0,s.jsx)("h1",{children:"Ledertavle"})}),(0,s.jsx)(a.A,{}),(0,s.jsx)(l.A,{})]})}},6733:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(7876),l=r(9099),a=r(8230),n=r.n(a);let c=e=>{let{href:t,title:r}=e,a=(0,l.useRouter)().pathname===t;return(0,s.jsxs)(n(),{href:t,className:"relative flex flex-col items-center justify-center w-1/3 text-center",children:[a&&(0,s.jsx)("span",{className:"absolute bottom-[-16px] left-1/2 w-full transform -translate-x-1/2 border-b-2 border-violet-900 z-0 transition-all duration-300"}),(0,s.jsx)("span",{className:"".concat(a?"text-violet-900":"text-gray-700"),children:r})]})},i=()=>(0,s.jsx)("nav",{className:"flex w-full justify-center p-4 font-medium",children:(0,s.jsxs)("div",{className:"flex w-full max-w-md justify-between",children:[(0,s.jsx)(c,{href:"/leaderboard",title:"Solo"}),(0,s.jsx)(c,{href:"/leaderboard/team",title:"Lag"}),(0,s.jsx)(c,{href:"/leaderboard/company",title:"Bedrift"})]})})}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(4996)),_N_E=e.O()}]);