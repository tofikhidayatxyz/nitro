(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{107:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(16);var c=a(31),s=a.n(c),o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var{isNavLink:t}=e,a=o(e,["isNavLink"]);const{to:c,href:m}=a,i=c||m,u=/^\/(?!\/)/.test(i),d=Object(r.useRef)(!1),E=t?l.c:l.b,f=s.a.canUseIntersectionObserver;let g;return Object(r.useEffect)(()=>(!f&&u&&window.docusaurus.prefetch(i),()=>{f&&g&&g.disconnect()}),[i,f,u]),i&&u&&!i.startsWith("#")?n.a.createElement(E,Object.assign({},a,{onMouseEnter:()=>{d.current||(window.docusaurus.preload(i),d.current=!0)},innerRef:e=>{var t,a;f&&e&&u&&(t=e,a=()=>{window.docusaurus.prefetch(i)},g=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(g.unobserve(t),g.disconnect(),a())})}),g.observe(t))},to:i})):n.a.createElement("a",Object.assign({},a,{href:i}))}},109:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(107);const c=["January","February","March","April","May","June","July","August","September","October","November","December"],s=e=>Math.ceil(e);t.a=function(e){const{children:t,frontMatter:a,metadata:r,truncated:o,isBlogPostPage:m=!1}=e,{date:i,readingTime:u,tags:d,permalink:E,editUrl:f}=r,{author:g,title:p}=a,h=a.author_url||a.authorURL,b=a.author_image_url||a.authorImageURL,v=i.substring(0,10).split("-"),w=v[0],y=c[parseInt(v[1],10)-1],N=parseInt(v[2],10);return n.a.createElement("article",{className:"card h-100 shadow"},n.a.createElement("div",{className:"row no-gutters rows-col-2 m-3"},n.a.createElement("div",{className:"col-xs mr-3"},b&&n.a.createElement("img",{style:{width:"50px"},src:b,alt:g})),n.a.createElement("div",{className:"col"},g&&n.a.createElement("h5",null,n.a.createElement("a",{href:h,alt:g},g)),n.a.createElement("time",{className:"card-subtitle mb-md-4 font-weight-light",dateTime:i},y," ",N,", ",w," ",m&&u&&n.a.createElement(n.a.Fragment,null," \xb7 ",s(u)," min read"))),n.a.createElement("div",{className:"col text-right"},m&&f&&n.a.createElement("span",null,n.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},n.a.createElement("g",null,n.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")))),n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card-title text-primary mr-2"},p),n.a.createElement("div",{className:"lead"},t)),n.a.createElement("footer",{className:"row no-gutters m-3 justify-content-between"},n.a.createElement("div",{className:"col col-xs"},d.length>0&&n.a.createElement(n.a.Fragment,null,d.map(({label:e,permalink:t})=>n.a.createElement(l.a,{key:t,className:"m-1",to:t},n.a.createElement("span",{className:"badge badge-primary"},e))))),n.a.createElement("div",{className:"col align-self-center text-right"},!m&&u&&n.a.createElement("small",{className:o?"mr-2":""},s(u)," min read"),o&&n.a.createElement(l.a,{to:E,"aria-label":"Read more about "+p},n.a.createElement("span",{className:"stretched-link"},"Read more")))))}},99:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(109);t.default=function(e){const{content:t}=e,{frontMatter:a,metadata:r}=t;return n.a.createElement("div",{className:"container-fluid my-5"},n.a.createElement("div",{className:"row row-cols-1 row-cols-sm-1"},n.a.createElement("div",{key:r.permalink,className:"col col-md-6 offset-md-3 col-xs-6 mb-5"},n.a.createElement(l.a,{frontMatter:a,metadata:r,isBlogPostPage:!0},n.a.createElement(t,null)))))}}}]);