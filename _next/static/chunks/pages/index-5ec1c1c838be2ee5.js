(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{1475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var s=r(7876),n=r(4587),l=r.n(n);let i=(0,r(1713).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var a=r(9099);let o=e=>{let{href:t,image:r,title:n,description:o}=e,c=(0,a.useRouter)();return(0,s.jsxs)("button",{onClick:()=>c.push(t),className:"grid grid-cols-5 items-center w-full h-24 px-3 rounded-2xl bg-customYellow2 border-2 border-violet-900 focus:ring focus:ring-violet-600",children:[(0,s.jsx)("div",{className:"col-span-1 flex items-center justify-center w-16 h-16",children:(0,s.jsx)(l(),{src:r,alt:n,width:48,height:48,className:"object-contain"})}),(0,s.jsxs)("div",{className:"col-span-3 flex flex-col justify-center text-left space-y-1",children:[(0,s.jsx)("span",{className:"text-xl font-bold truncate py-0.5 rounded",children:n}),(0,s.jsx)("span",{className:"text-sm py-0.5 rounded",children:o})]}),(0,s.jsx)("div",{className:"col-span-1 flex items-center justify-center h-full",children:(0,s.jsx)(i,{size:24,strokeWidth:2})})]})};var c=r(8230),d=r.n(c);let u=e=>{let{profilePic:t,name:r,points:n}=e;return(0,s.jsxs)("div",{className:"grid grid-rows-5 w-full gap-2",children:[(0,s.jsxs)("div",{className:"row-span-3 grid grid-cols-5 gap-2",children:[(0,s.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,s.jsx)("div",{className:"w-16 h-16 rounded-full border-2 border-customViolet overflow-hidden",children:(0,s.jsx)(d(),{href:"/profile",children:(0,s.jsx)(l(),{src:t,alt:"Profilbilde",width:64,height:64,style:{objectFit:"cover"}})})})}),(0,s.jsxs)("div",{className:"col-span-4 flex items-center justify-start text-2xl font-semibold",children:["Hei, ",(0,s.jsx)("br",{}),r,"!"]})]}),(0,s.jsx)("div",{className:"row-span-2 flex items-center justify-start text-lg",children:(0,s.jsxs)("p",{children:["Du har samlet inn ",(0,s.jsxs)("strong",{children:[n," poeng"]})," ",(0,s.jsx)("br",{}),"St\xe5 p\xe5!"]})})]})};var f=r(300),h=r(7644),p=r(3784),m=r(4232),x=r(2282),g=r(2142),v=r(5048),j=r(1200),b=r(181),y=r(3866),w=r(9751);class N extends m.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=e instanceof HTMLElement&&e.offsetWidth||0,s=this.props.sizeRef.current;s.height=t.offsetHeight||0,s.width=t.offsetWidth||0,s.top=t.offsetTop,s.left=t.offsetLeft,s.right=r-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function k({children:e,isPresent:t,anchorX:r}){let n=(0,m.useId)(),l=(0,m.useRef)(null),i=(0,m.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=(0,m.useContext)(w.Q);return(0,m.useInsertionEffect)(()=>{let{width:e,height:s,top:o,left:c,right:d}=i.current;if(t||!l.current||!e||!s)return;let u="left"===r?`left: ${c}`:`right: ${d}`;l.current.dataset.motionPopId=n;let f=document.createElement("style");return a&&(f.nonce=a),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${u}px !important;
            top: ${o}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[t]),(0,s.jsx)(N,{isPresent:t,childRef:l,sizeRef:i,children:m.cloneElement(e,{ref:l})})}let E=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:l,presenceAffectsLayout:i,mode:a,anchorX:o})=>{let c=(0,j.M)(S),d=(0,m.useId)(),u=(0,m.useCallback)(e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;n&&n()},[c,n]),f=(0,m.useMemo)(()=>({id:d,initial:t,isPresent:r,custom:l,onExitComplete:u,register:e=>(c.set(e,!1),()=>c.delete(e))}),i?[Math.random(),u]:[r,u]);return(0,m.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[r]),m.useEffect(()=>{r||c.size||!n||n()},[r]),"popLayout"===a&&(e=(0,s.jsx)(k,{isPresent:r,anchorX:o,children:e})),(0,s.jsx)(y.t.Provider,{value:f,children:e})};function S(){return new Map}var C=r(3885);let P=e=>e.key||"";function R(e){let t=[];return m.Children.forEach(e,e=>{(0,m.isValidElement)(e)&&t.push(e)}),t}let I=({children:e,custom:t,initial:r=!0,onExitComplete:n,presenceAffectsLayout:l=!0,mode:i="sync",propagate:a=!1,anchorX:o="left"})=>{let[c,d]=(0,C.xQ)(a),u=(0,m.useMemo)(()=>R(e),[e]),f=a&&!c?[]:u.map(P),h=(0,m.useRef)(!0),p=(0,m.useRef)(u),x=(0,j.M)(()=>new Map),[g,y]=(0,m.useState)(u),[w,N]=(0,m.useState)(u);(0,b.E)(()=>{h.current=!1,p.current=u;for(let e=0;e<w.length;e++){let t=P(w[e]);f.includes(t)?x.delete(t):!0!==x.get(t)&&x.set(t,!1)}},[w,f.length,f.join("-")]);let k=[];if(u!==g){let e=[...u];for(let t=0;t<w.length;t++){let r=w[t],s=P(r);f.includes(s)||(e.splice(t,0,r),k.push(r))}return"wait"===i&&k.length&&(e=k),N(R(e)),y(u),null}let{forceRender:S}=(0,m.useContext)(v.L);return(0,s.jsx)(s.Fragment,{children:w.map(e=>{let m=P(e),g=(!a||!!c)&&(u===w||f.includes(m));return(0,s.jsx)(E,{isPresent:g,initial:(!h.current||!!r)&&void 0,custom:t,presenceAffectsLayout:l,mode:i,onExitComplete:g?void 0:()=>{if(!x.has(m))return;x.set(m,!0);let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(S?.(),N(p.current),a&&d?.(),n&&n())},anchorX:o,children:e},m)})})};var T=r(3267);let _=()=>{var e,t,r;let n;let{userData:l}=(0,f.r)();(0,x.O)();{let e=localStorage.getItem("indexData");if(e)try{n=JSON.parse(e)}catch(e){console.error("Failed to parse cached index data:",e)}}let{data:i,isLoading:a,error:c}=(0,p.g)("/api/Profile/getUser",null==l?void 0:l.accessToken,{fallbackData:n,refreshInterval:3e4,enabled:!!(null==l?void 0:l.accessToken)});(0,m.useEffect)(()=>{i&&localStorage.setItem("indexData",JSON.stringify(i))},[i]);let d=(0,g.o)();if(a&&d)return(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)(h.A,{})});if(c)return(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("p",{children:"Her skjedde det noe galt, pr\xf8v \xe5 laste inn p\xe5 nytt"})});let[v,j]=(0,m.useState)(null);return(0,m.useEffect)(()=>{if(i){localStorage.setItem("indexData",JSON.stringify(i));let e=sessionStorage.getItem("pointsEarned");e&&(j(Number(e)),sessionStorage.removeItem("pointsEarned"),setTimeout(()=>j(null),4e3))}},[i]),(0,s.jsxs)("div",{className:"flex flex-col w-full justify-between",children:[(0,s.jsx)(I,{children:null!==v&&(0,s.jsxs)(T.P.div,{className:"absolute top-4 left-0 right-0 mx-auto w-fit z-50 bg-yellow-100 border border-yellow-500 text-yellow-900  px-6 py-3 rounded-xl shadow-md text-base font-semibold flex items-center gap-2 pointer-events-none",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:["\uD83C\uDF89 ",(0,s.jsxs)("span",{className:"text-black",children:["+",v," poeng!"]})]})}),(0,s.jsxs)("main",{className:"flex flex-col w-full gap-4 p-4",children:[(0,s.jsx)(u,{profilePic:"".concat("/Kortreist","/images/avatars/").concat((null==i?void 0:i.profilePicture)||"Avatar1.png"),name:null!==(t=null==i?void 0:i.name)&&void 0!==t?t:"Bruker",points:null!==(r=null==i?void 0:null===(e=i.totalScore)||void 0===e?void 0:e.toString())&&void 0!==r?r:"0"}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 pt-4",children:[(0,s.jsx)(o,{href:"travelForm",image:"".concat("/Kortreist","/images/RegistrerReise.svg"),title:"Registrer reise",description:"Samle poeng for \xe5 reise b\xe6rekraftig til og fra jobb"}),(0,s.jsx)(o,{href:"/team",image:"".concat("/Kortreist","/images/TeamIcon.png"),title:"Ditt lag",description:"Se en oversikt over lagstatistikk og medlemmer"}),(0,s.jsx)(o,{href:"challenges",image:"".concat("/Kortreist","/images/ChallengeIcon.png"),title:"Ukens utfordringer",description:"Fullf\xf8r utfordringer for \xe5 samle poeng"})]})]})]})}},2282:(e,t,r)=>{"use strict";r.d(t,{O:()=>i});var s=r(4232),n=r(9099),l=r(300);function i(){let e=(0,n.useRouter)(),{userData:t}=(0,l.r)();(0,s.useEffect)(()=>{if(!(null==t?void 0:t.accessToken))return;let r=e.pathname,s=["/","/profile","/team","/leaderboard"];"/profile"===r&&s.push("/profile/settings"),"/leaderboard"===r&&s.push("/leaderboard/company","/leaderboard/team"),"/"===r&&s.push("/travelForm","/challenges"),r.startsWith("/team")&&("/team"===r&&s.push("/team/dashboard","/team/onboarding"),"/team/dashboard"===r&&s.push("/team/onboarding"),"/team/onboarding"===r&&s.push("/team/dashboard")),s.filter(e=>e!==r).forEach(t=>e.prefetch(t))},[e.pathname,null==t?void 0:t.accessToken])}},3784:(e,t,r)=>{"use strict";r.d(t,{g:()=>o});var s=r(7596),n=r(9099),l=r.n(n),i=r(7685);async function a(e,t){let r={"Content-Type":"application/json"};t&&(r.Authorization="Bearer ".concat(t));let s=await fetch("".concat("https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net").concat(e),{headers:r});if(!s.ok){if(428===s.status){i.Ay.error("Du m\xe5 fullf\xf8re registreringen f\xf8r du kan fortsette."),l().push("/onboarding");return}let e=await s.text();throw Error("Error: ".concat(s.statusText," - ").concat(e))}return s.json()}function o(e,t,r){var n;let l=(null===(n=null==r?void 0:r.enabled)||void 0===n||n)&&e&&t?[e,t]:null,{data:i,error:o,mutate:c}=(0,s.Ay)(l,()=>a(e,t),r);return{data:i,isLoading:!i&&!o,error:o,mutate:c}}},6760:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1475)}])},7644:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var s=r(7876);function n(){return(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-customViolet"})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[596,267,636,593,792],()=>t(6760)),_N_E=e.O()}]);