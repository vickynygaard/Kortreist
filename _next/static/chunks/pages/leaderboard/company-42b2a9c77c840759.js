(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{2948:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var l=r(7876),s=r(4232);let a=e=>{let{nickName:t,score:r,rank:s,profilePicture:a}=e;return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-end w-24 relative",children:[(0,l.jsx)("div",{className:"relative -mb-6 z-10",children:(0,l.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(a||"avatar1.png"),alt:t,className:"w-16 h-16 rounded-full border-4 ".concat({1:"border-yellow-400",2:"border-gray-300",3:"border-amber-600"}[s]," object-cover bg-white")})}),(0,l.jsxs)("div",{className:"w-full flex flex-col items-center justify-end ".concat({1:"h-32",2:"h-24",3:"h-20"}[s]," bg-violet-900 text-white rounded-t-2xl pt-8 pb-2"),children:[(0,l.jsx)("span",{className:"text-xl font-bold",children:s}),(0,l.jsx)("span",{className:"text-base",children:r})]}),(0,l.jsx)("div",{className:"mt-2 h-8 w-full px-1 text-center",children:(0,l.jsx)("span",{className:"text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600 line-clamp-2 leading-tight break-words",children:t})})]})},n=e=>{let{nickName:t,score:r,rank:s,profilePicture:a}=e;return(0,l.jsxs)("div",{className:"flex items-center justify-between p-4 px-8 gap-4 border-b border-gray-500 last:border-b-0",children:[(0,l.jsx)("span",{className:"font-bold w-6 text-center",children:s}),(0,l.jsxs)("div",{className:"flex items-center gap-4 flex-grow",children:[(0,l.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat(a||"avatar1.png"),alt:t,className:"w-10 h-10 rounded-full border-2 border-customViolet object-cover"}),(0,l.jsx)("span",{className:"truncate w-32",children:t})]}),(0,l.jsx)("span",{className:"font-semibold text-customViolet",children:r})]})};var c=r(300),i=r(5577),o=r(7644);let d=()=>{let[e,t]=(0,s.useState)([]),[r,d]=(0,s.useState)([]),{userData:u,loading:f}=(0,c.r)(),x=(null==u?void 0:u.accessToken)?"/api/users/all":null,{data:m,isLoading:h,error:p}=(0,i.g)(x,null==u?void 0:u.accessToken,{refreshInterval:3e4});(0,s.useEffect)(()=>{if(!m)return;let e=[],r=[...m].sort((e,t)=>t.totalScore-e.totalScore),l=1;for(let t=0;t<r.length&&e.length<3;t++)t>0&&r[t].totalScore===r[t-1].totalScore?e.push({...r[t],rank:e[e.length-1].rank}):e.push({...r[t],rank:l}),l++;t(e),d(r.slice(e.length))},[m]);let j=t=>{let r=e.find(e=>e.rank===t);return r?(0,l.jsx)(a,{...r,score:r.totalScore,profilePicture:r.profilePicture}):null};return p?(0,l.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,l.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})}):f||h||p?(0,l.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,l.jsx)(o.A,{})}):(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex justify-center items-end gap-6 mt-10",children:[j(2),j(1),j(3)]}),(0,l.jsx)("div",{className:"mt-4 w-full rounded-t-lg bg-customYellow2/50 backdrop-blur-md",children:r.map((t,r)=>(0,l.jsx)(n,{rank:r+e.length+1,nickName:t.nickName,score:t.totalScore,profilePicture:t.profilePicture},t.userId))})]})}},4996:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/leaderboard/company",function(){return r(5992)}])},5577:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var l=r(6768),s=r(9099),a=r.n(s),n=r(7685);async function c(e,t){let r={"Content-Type":"application/json"};t&&(r.Authorization="Bearer ".concat(t));let l=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:r});if(!l.ok){if(428===l.status){n.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),a().push("/onboarding");return}let e=await l.text();throw Error("Error: ".concat(l.statusText," - ").concat(e))}return l.json()}function i(e,t,r){let s=e&&t?[e,t]:null,{data:a,error:n,mutate:i}=(0,l.Ay)(s,s?()=>c(e,t):null,r);return{data:a,isLoading:!a&&!n,error:n,mutate:i}}},5992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var l=r(7876),s=r(2948),a=r(6733);function n(){return(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("div",{className:"w-full text-center text-2xl font-medium pb-4",children:(0,l.jsx)("h1",{children:"Ledertavle"})}),(0,l.jsx)(a.A,{}),(0,l.jsx)(s.A,{})]})}},6733:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var l=r(7876),s=r(9099),a=r(8230),n=r.n(a);let c=e=>{let{href:t,title:r}=e,a=(0,s.useRouter)().pathname===t;return(0,l.jsxs)(n(),{href:t,className:"relative flex flex-col items-center justify-center w-1/3 text-center",children:[a&&(0,l.jsx)("span",{className:"absolute bottom-[-16px] left-1/2 w-full transform -translate-x-1/2 border-b-2 border-violet-900 z-0 transition-all duration-300"}),(0,l.jsx)("span",{className:"".concat(a?"text-violet-900":"text-gray-700"),children:r})]})},i=()=>(0,l.jsx)("nav",{className:"flex w-full justify-center p-4 font-medium",children:(0,l.jsxs)("div",{className:"flex w-full max-w-md justify-between",children:[(0,l.jsx)(c,{href:"/leaderboard",title:"Solo"}),(0,l.jsx)(c,{href:"/leaderboard/team",title:"Lag"}),(0,l.jsx)(c,{href:"/leaderboard/company",title:"Bedrift"})]})})}},e=>{var t=t=>e(e.s=t);e.O(0,[768,636,593,792],()=>t(4996)),_N_E=e.O()}]);