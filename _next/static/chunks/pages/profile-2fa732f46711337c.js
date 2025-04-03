(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{2282:(e,t,l)=>{"use strict";l.d(t,{O:()=>i});var a=l(4232),r=l(9099),s=l(300);function i(){let e=(0,r.useRouter)(),{userData:t}=(0,s.r)();(0,a.useEffect)(()=>{if(!(null==t?void 0:t.accessToken))return;let l=e.pathname,a=["/","/profile","/team","/leaderboard"];"/profile"===l&&a.push("/profile/settings"),"/leaderboard"===l&&a.push("/leaderboard/company","/leaderboard/team"),"/"===l&&a.push("/travelForm","/challenges"),l.startsWith("/team")&&("/team"===l&&a.push("/team/dashboard","/team/onboarding"),"/team/dashboard"===l&&a.push("/team/onboarding"),"/team/onboarding"===l&&a.push("/team/dashboard")),a.filter(e=>e!==l).forEach(t=>e.prefetch(t))},[e.pathname,null==t?void 0:t.accessToken])}},3649:(e,t,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(4462)}])},3784:(e,t,l)=>{"use strict";l.d(t,{g:()=>n});var a=l(7596),r=l(9099),s=l.n(r),i=l(7685);async function c(e,t){let l={"Content-Type":"application/json"};t&&(l.Authorization="Bearer ".concat(t));let a=await fetch("".concat("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net").concat(e),{headers:l});if(!a.ok){if(428===a.status){i.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),s().push("/onboarding");return}let e=await a.text();throw Error("Error: ".concat(a.statusText," - ").concat(e))}return a.json()}function n(e,t,l){var r;let s=(null===(r=null==l?void 0:l.enabled)||void 0===r||r)&&e&&t?[e,t]:null,{data:i,error:n,mutate:o}=(0,a.Ay)(s,()=>c(e,t),l);return{data:i,isLoading:!i&&!n,error:n,mutate:o}}},4462:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>E});var a=l(7876),r=l(4232),s=l(8230),i=l.n(s),c=l(1713);let n=(0,c.A)("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]),o=(0,c.A)("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]),d=(0,c.A)("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]),u=(0,c.A)("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),x=(0,c.A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);var h=l(4463);let m=(0,c.A)("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]),p=(0,c.A)("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),f=(0,c.A)("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]),v=(0,c.A)("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);var y=l(6558);let g=(0,c.A)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),b=(0,c.A)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),k=(0,c.A)("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),j=(0,c.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),w=(0,c.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var N=l(300),_=l(3784),M=l(7644),A=l(2142),z=l(2282);function E(){var e,t,l,s,c,E,C;let F;let[O,S]=(0,r.useState)("co2"),[V,D]=(0,r.useState)(null),{userData:P,loading:T}=(0,N.r)();(0,z.O)();{let e=localStorage.getItem("profileOverview");if(e)try{F=JSON.parse(e)}catch(e){console.error("Failed to parse cached overview:",e)}}let{data:L,isLoading:B,error:Y}=(0,_.g)("/api/Profile/overview",null==P?void 0:P.accessToken,{fallbackData:F,revalidateOnMount:!0,enabled:!!(null==P?void 0:P.accessToken)});(0,r.useEffect)(()=>{L&&localStorage.setItem("profileOverview",JSON.stringify(L))},[L]);let q=(0,A.o)(),G=T||B||!L;if(Y)return(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,a.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})});if(G&&q)return(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,a.jsx)(M.A,{})});let H={co2:{value:(null!==(e=null==L?void 0:L.totalCo2Savings)&&void 0!==e?e:0).toFixed(4),unit:"kg",label:"CO₂ spart"},money:{value:Math.floor(null!==(t=null==L?void 0:L.totalMoneySaved)&&void 0!==t?t:0),unit:"kr",label:"Penger spart"}};return(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"w-full px-4 flex text-center items-center justify-between",children:[(0,a.jsx)("h1",{className:"font-bold text-3xl text-violet-950 pb-6",children:"Min Profil"}),(0,a.jsx)(i(),{href:"/profile/settings",className:"text-black",children:(0,a.jsx)(g,{size:28,strokeWidth:2})})]}),(0,a.jsx)("div",{className:"w-full px-4",children:(0,a.jsxs)("div",{className:"w-full bg-customYellow2 p-4 rounded-2xl flex flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("img",{src:"".concat("/Kortreist","/images/profile-pictures/").concat((null==L?void 0:L.user.profilePicture)||"avatar1.png"),alt:"Default Profile",className:"w-16 h-16 rounded-full object-cover border-2 border-customViolet"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"text-lg font-semibold break-all line-clamp-1 max-w-[20rem]",children:null!==(l=null==L?void 0:L.user.nickName)&&void 0!==l?l:"Bruker"}),(0,a.jsx)("span",{className:"text-sm text-gray-600 break-all line-clamp-1 max-w-[14rem]",children:null!==(s=null==L?void 0:L.user.name)&&void 0!==s?s:""})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-3 gap-2 bg-customYellow2 border-2 border-customViolet rounded-2xl mt-4 py-3 shadow-sm",children:[{icon:(0,a.jsx)(b,{size:20,className:"text-yellow-500 mb-2"}),value:null!==(c=null==L?void 0:L.user.totalScore)&&void 0!==c?c:0,label:"Poeng"},{icon:(0,a.jsx)(k,{size:20,className:"text-pink-400 mb-2"}),value:null!==(E=null==L?void 0:L.completedChallenges)&&void 0!==E?E:0,label:"Utfordringer"},{icon:(0,a.jsx)(j,{size:20,className:"text-customGreen mb-2"}),value:null!==(C=null==L?void 0:L.totalTravels)&&void 0!==C?C:0,label:"Reiser"}].map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col items-center px-2 ".concat(0!==t?"border-l border-customViolet":""),children:[e.icon,(0,a.jsx)("p",{className:"text-lg font-bold text-black-100 leading-none",children:e.value}),(0,a.jsx)("p",{className:"text-xs text-gray-600 mt-0.5",children:e.label})]},t))})]})}),(0,a.jsxs)("div",{className:"w-full flex flex-col items-center mt-8 justify-center",children:[(0,a.jsxs)("div",{className:"relative w-36 h-36 rounded-full bg-gradient-to-br from-customYellow2 to-gray-100 shadow-inner flex items-center justify-center",children:[(0,a.jsx)("div",{className:"absolute w-full h-full rounded-full animate-pulse\n        ".concat("co2"===O?"shadow-[0_0_25px_#1D8800]":"shadow-[0_0_25px_#ffb508]")}),(0,a.jsxs)("div",{className:"z-10 flex flex-col items-center",children:[(0,a.jsxs)("p",{className:"text-xl font-bold text-gray-800",children:[H[O].value," ",H[O].unit]}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:H[O].label})]})]}),(0,a.jsx)("div",{className:"flex w-[75%] max-w-xs items-center justify-center space-x-2 bg-customYellow2 rounded-2xl mt-8 p-2 border-2 border-violet-900 shadow-sm",children:["co2","money"].map(e=>(0,a.jsx)("button",{className:"flex-1 py-2 rounded-xl flex items-center justify-center transition-all duration-200 ease-in-out \n              ".concat(O===e?"co2"===e?"bg-customGreen text-white shadow-md":"bg-yellow-500 text-white shadow-md":"bg-gray-100 text-gray-600"),onClick:()=>S(e),children:"co2"===e?(0,a.jsx)(p,{size:24}):(0,a.jsx)(f,{size:24})},e))})]}),(0,a.jsx)("div",{className:"w-full px-4 mt-10",children:(0,a.jsxs)("div",{className:"bg-customYellow2 p-4 rounded-2xl border-2 border-violet-900",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold mb-3",children:"Merker"}),(0,a.jsx)("div",{className:"grid grid-cols-5 gap-3 place-items-center sm:grid-cols-5",children:null==L?void 0:L.achievements.map(e=>(0,a.jsx)("button",{className:"w-14 h-14 flex items-center justify-center rounded-xl shadow-sm transition-all duration-200 text-gray-700\n          ".concat(function(e){switch(e){case 1:return"border-[#BD824A] border-2 bg-[linear-gradient(135deg,_#F0C59D_0%,_#F0C59D_35%,_#E6AE7D_35%,_#E6AE7D_100%)] text-yellow-900";case 2:return"border-[#92A7BA] border-2 bg-[linear-gradient(135deg,_#E4F1FA_0%,_#E4F1FA_35%,_#D6E4EF_35%,_#D6E4EF_100%)] text-slate-900";case 3:return"border-[#FA9702] border-2 bg-[linear-gradient(135deg,_#FEE332_0%,_#FEE332_35%,_#FED602_35%,_#FED602_100%)] text-yellow-800";default:return"border-gray-300 bg-white/50"}}(e.tier)," }"),onClick:()=>D({id:e.achievementId,name:e.name,description:e.description,progress:e.progress,total:e.total}),children:function(e){let t=e.split(" ")[0],l={Turgåer:(0,a.jsx)(n,{size:24}),Syklist:(0,a.jsx)(o,{size:24}),Bussreisende:(0,a.jsx)(d,{size:24}),Samkjører:(0,a.jsx)(u,{size:24}),Utforsker:(0,a.jsx)(x,{size:24}),Joker:(0,a.jsx)(h.A,{size:24}),Poengjeger:(0,a.jsx)(m,{size:24}),"CO₂-sparer":(0,a.jsx)(p,{size:24}),Pengebesparer:(0,a.jsx)(f,{size:24}),Opplåser:(0,a.jsx)(v,{size:24}),default:(0,a.jsx)(y.A,{size:24})};return l[t]||l.default}(e.name)},e.achievementId))})]})}),V&&(()=>{let e=Math.min(V.progress,V.total),t=e/V.total*100;return(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",onClick:()=>D(null),children:(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg text-center w-80 relative",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{className:"absolute top-4 right-4 text-gray-600",onClick:()=>D(null),children:(0,a.jsx)(w,{size:24})}),(0,a.jsx)("h3",{className:"font-semibold text-lg",children:V.name}),(0,a.jsx)("p",{className:"text-gray-600",children:V.description}),(0,a.jsx)("div",{className:"w-full bg-gray-300 h-3 rounded-full mt-3",children:(0,a.jsx)("div",{className:"bg-customViolet h-3 rounded-full",style:{width:"".concat(t,"%")}})}),(0,a.jsxs)("p",{className:"text-sm text-gray-700 mt-1",children:[e,"/",V.total," ",e>=V.total?"fullf\xf8rt":"p\xe5g\xe5r"]})]})})})()]})}},4463:(e,t,l)=>{"use strict";l.d(t,{A:()=>a});let a=(0,l(1713).A)("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]])},7644:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});var a=l(7876);function r(){return(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-customViolet"})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[596,636,593,792],()=>t(3649)),_N_E=e.O()}]);