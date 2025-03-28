(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{28:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(7876),s=a(4232);let r=e=>{let{onClick:t,children:a,className:s="",disabled:r=!1,variant:l="primary"}=e,c={primary:"bg-customViolet text-white",secondary:"bg-customGreen text-white"},i=r?"bg-gray-400 text-gray-700 cursor-not-allowed":c[l]||c.primary;return(0,n.jsx)("button",{onClick:t,disabled:r,className:"".concat("py-3 px-4 w-full sm:w-auto flex-grow rounded-md font-medium flex items-center justify-center gap-2 whitespace-nowrap"," ").concat(i," ").concat(s),children:a})},l=(0,a(1713).A)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);function c(e){let{onCreate:t}=e;return(0,n.jsx)("div",{className:"flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto",children:(0,n.jsxs)(r,{onClick:t,variant:"primary",className:"flex-1",children:[(0,n.jsx)(l,{size:20}),"Opprett et lag"]})})}function i(e){let{teamName:t,setTeamName:a,accessToken:r,onCreateTeam:l,onBack:c}=e,[i,o]=(0,s.useState)(!1),[d,m]=(0,s.useState)(""),u=async()=>{o(!0),m("");try{let e=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/upsert",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({name:t,companyId:1})});if(!e.ok){let t=await e.text();throw Error(t||"Noe gikk galt under oppretting av lag.")}l()}catch(e){console.error("Create team error:",e),m(e.message||"Ukjent feil")}finally{o(!1)}};return(0,n.jsxs)("div",{className:"flex flex-col gap-4 mt-4",children:[(0,n.jsx)("input",{type:"text",value:t,onChange:e=>a(e.target.value),placeholder:"Skriv inn lagnavn...",className:"p-2 border border-gray-400 rounded-md"}),(0,n.jsx)("button",{onClick:u,disabled:!t.trim()||i,className:"py-3 rounded-md text-white font-medium ".concat(t.trim()&&!i?"bg-customViolet":"bg-gray-400 cursor-not-allowed"),children:i?"Oppretter...":"Opprett lag"}),d&&(0,n.jsx)("p",{className:"text-red-500 text-sm",children:d}),(0,n.jsx)("button",{onClick:c,className:"text-gray-600 hover:text-black",children:"Tilbake"})]})}function o(e){let{existingTeams:t,accessToken:a,onJoinTeam:r,onBack:l}=e,[c,i]=(0,s.useState)(!1),[o,d]=(0,s.useState)(""),m=async e=>{i(!0),d("");try{if(!t.find(t=>t.teamId===e))throw Error("Fant ikke valgt lag.");let n=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/join",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({teamId:e})});if(!n.ok){let e=await n.text();throw Error(e||"Kunne ikke bli med i laget.")}r()}catch(e){console.error("Join team error:",e),d(e.message||"Ukjent feil")}finally{i(!1)}};return(0,n.jsxs)("div",{className:"flex flex-col gap-8 mt-4",children:[t.map(e=>(0,n.jsxs)("div",{className:"bg-white rounded-xl shadow-md p-4 flex flex-col justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-2",children:e.name}),(0,n.jsxs)("p",{className:"text-gray-600",children:["Medlemmer: ",e.memberCount," / 5"]})]}),(0,n.jsx)("button",{onClick:()=>m(e.teamId),disabled:c||e.memberCount>=5,className:"w-full py-2 mt-4 rounded-md text-white font-medium ".concat(!c&&e.memberCount<5?"bg-customGreen hover:bg-green-600":"bg-gray-400 cursor-not-allowed"),children:c?"Bli med...":"Bli med i laget"})]},e.teamId)),o&&(0,n.jsx)("p",{className:"text-red-500 text-sm",children:o})]})}var d=a(9099),m=a(300);function u(){let[e,t]=(0,s.useState)(""),[a,r]=(0,s.useState)(""),[l,u]=(0,s.useState)([]),[x,h]=(0,s.useState)(!0),f=(0,d.useRouter)(),{userData:p,loading:g,error:w}=(0,m.r)();(0,s.useEffect)(()=>{(null==p?void 0:p.accessToken)&&(async()=>{try{let e=await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Team/company",{headers:{Authorization:"Bearer ".concat(p.accessToken)}});if(!e.ok)throw Error("Feil ved henting av lag: ".concat(e.statusText));let t=await e.json();console.log(t),u(t)}catch(e){console.error("Feil ved henting av lag:",e)}finally{h(!1)}})()},[null==p?void 0:p.accessToken]);let y=()=>{f.replace("/team/dashboard")};return g||x?(0,n.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,n.jsx)("p",{children:"Laster inn..."})}):!w&&(null==p?void 0:p.accessToken)?(0,n.jsxs)("main",{className:"flex flex-col items-center px-4",children:[(0,n.jsx)("div",{className:"w-full text-center text-2xl font-medium pb-4",children:(0,n.jsx)("h1",{children:"Velg et Lag"})}),(0,n.jsxs)("div",{className:"w-full max-w-xs sm:max-w-md flex flex-col gap-4 mt-6 text-center",children:[(0,n.jsx)("p",{className:"text-lg sm:text-xl font-medium text-black",children:"Du er ikke medlem av et lag:"}),""===e&&(0,n.jsx)(c,{onCreate:()=>t("create")}),"create"===e&&(0,n.jsx)(i,{teamName:a,setTeamName:r,accessToken:p.accessToken,onCreateTeam:y,onBack:()=>t("")}),(0,n.jsx)(o,{existingTeams:l,accessToken:p.accessToken,onJoinTeam:y,onBack:()=>t("")})]})]}):(0,n.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,n.jsx)("p",{children:"Kunne ikke laste inn. Vennligst logg inn p\xe5 nytt."})})}},1468:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/onboarding",function(){return a(28)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(1468)),_N_E=e.O()}]);