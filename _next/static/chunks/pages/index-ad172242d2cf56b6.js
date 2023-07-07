(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6616)}])},6772:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(5893),l=s(8420),r=s(6159);function a(e){let{dateString:t}=e,s=(0,l.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,r.Z)(s,"LLLL d, yyyy")})}},8769:function(e,t,s){"use strict";s.d(t,{Z:function(){return c},y:function(){return i}});var n=s(5893),l=s(9008),r=s.n(l);s(5675);var a=s(1664),o=s.n(a);let i="Paul Treanor";function c(e){let{children:t,home:s}=e;return(0,n.jsxs)("div",{className:"mx-2 md:mx-20 lg:mx-40 font-open-sans mb-32",children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"description",content:"My personal website where I keep my notes and thoughts."}),(0,n.jsx)("meta",{name:"og:title",content:i}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"RSS Feed for paultreanor.com",href:"/rss.xml"})]}),(0,n.jsx)("header",{className:"max-w-2xl mx-auto",children:!s&&(0,n.jsx)("div",{className:"mt-10 mb-8",children:(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("div",{className:"text-4xl",children:"\uD83C\uDFE0"})})})}),(0,n.jsx)("main",{children:t})]})}},6616:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return h},default:function(){return p}});var n=s(5893),l=s(9008),r=s.n(l);s(5675);var a=s(8769),o=s(1664),i=s.n(o),c=s(6772),m=s(7294);function d(){navigator.clipboard.writeText("paul@paultreanor.com");let e=document.querySelector(".tooltip"),t=e.innerText;e.innerText="Email copied!",e.style.display="block",setTimeout(()=>{e.innerText=t},1200)}function u(){let e=document.querySelector(".tooltip");e.style.display="none"}let x=()=>{let e=document.querySelector(".tooltip");e.style.display="block"};var h=!0;function p(e){let{allPagesData:t}=e,[s,l]=(0,m.useState)(""),o=t.filter(e=>{let t=s.toLowerCase(),n=e.tags.map(e=>e.toLowerCase()).join(" ");if(""===s||n.includes(t)||e.title.toLowerCase().includes(t))return e});return(0,n.jsxs)(a.Z,{home:!0,children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:a.y})}),(0,n.jsxs)("section",{className:"blurb my-11",children:[(0,n.jsx)("img",{className:"mt-5 mb-7",src:"/images/me.png",alt:"",width:100}),(0,n.jsx)("h2",{className:"text-4xl font-open-sans font-bold py-4 ",children:"Hi, I'm Paul \uD83D\uDC2E"}),(0,n.jsx)("p",{className:"text-lg font-open-sans",children:"I'm a fullstack indie developer until I run out of money. This website is my digital notebook."}),(0,n.jsx)("p",{className:"text-lg font-open-sans",children:"Feel free to get in touch!"}),(0,n.jsxs)("div",{className:"row pt-4 text-2xl",children:[(0,n.jsx)("a",{className:"mr-3",href:"https://github.com/PaulTreanor",children:(0,n.jsx)("ion-icon",{name:"logo-github"})}),(0,n.jsx)("a",{className:"mr-3",href:"https://twitter.com/paultreanordev",children:(0,n.jsx)("ion-icon",{name:"logo-twitter"})}),(0,n.jsx)("a",{className:"mr-3",href:"https://paultreanor.com/rss.xml",children:(0,n.jsx)("ion-icon",{name:"logo-rss"})}),(0,n.jsxs)("a",{className:"mr-3 emailCopy",onClick:d,onMouseEnter:x,onMouseLeave:u,children:[(0,n.jsx)("ion-icon",{name:"mail"}),(0,n.jsx)("span",{className:"tooltip",children:"Copy email to clipboard"})]})]})]}),(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"home-page",children:[(0,n.jsx)("h2",{className:"text-4xl font-open-sans font-bold py-4",children:"\uD83D\uDCDD Latest Notes"}),(0,n.jsxs)("div",{className:"articles pb-40",children:[(0,n.jsx)("div",{className:"search-box py-2",children:(0,n.jsx)("input",{value:s,onChange:e=>l(e.target.value),type:"text",placeholder:"Search for tags or post titles \uD83D\uDD0E",className:"bg-slate-50 border border-sky-300 text-slate-900 rounded-lg active:border-sky-400 hover:border-sky-400 focus:border-sky-400 block p-2.5 w-96 max-w-full"})}),(0,n.jsx)("ul",{className:"my-7 max-w-2xl list-none",children:o.map(e=>{let{id:t,date:s,title:r,tags:a}=e;return(0,n.jsxs)("li",{className:"border-slate-300 border-b-2 border-solid pb-8 mt-4 no-underline ml-0",children:[(0,n.jsx)(i(),{href:"/".concat(t),children:(0,n.jsx)("h5",{className:"font-open-sans text-xl font-medium text-slate-900 hover:bg-sky-200 active:focus:bg-sky-400 pb-4 w-fit no-underline",children:r})}),(0,n.jsxs)("div",{className:"flex flex-wrap",children:[(0,n.jsx)("small",{className:"pt-1 font-open-sans text-slate-600 hover:bg-sky-200 active:focus:bg-sky-400 w-fit no-underline pr-4",children:(0,n.jsx)(c.Z,{dateString:s})}),a.map(e=>(0,n.jsx)("button",{onClick:()=>l(e),className:"bg-sky-100 text-sky-800 text-sm font-open-sans font-semibold rounded-full px-3 py-1 mr-2 w-fit",children:e},e))]}),(0,n.jsx)("br",{})]},t)})})]})]})})]})}}},function(e){e.O(0,[562,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);