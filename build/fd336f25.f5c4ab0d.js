(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(0),r(106)),u={title:"Blog Plugin",author:"Fanny Vieira",authorTitle:"Maintainer of Docusaurus",authorURL:"https://github.com/fanny",authorImageURL:"https://github.com/fanny.png",authorTwitter:"fannyvieiira",tags:["blog","docusaurus"]},i={permalink:"/blog/2020/04/14/blog-plugin",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-04-14-blog-plugin.md",source:"@site/blog/2020-04-14-blog-plugin.md",description:"You can use our blog plugin to do your posts",date:"2020-04-14T00:00:00.000Z",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],title:"Blog Plugin",readingTime:.145,truncated:!0,prevItem:{title:"A large blog post",permalink:"/blog/2020/04/14/large-blog-post"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l=[],c={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"You can use our blog plugin to do your posts"))}p.isMDXComponent=!0},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),b=n,f=g["".concat(u,".").concat(b)]||g[b]||s[b]||a;return r?o.a.createElement(f,i({ref:t},c,{components:r})):o.a.createElement(f,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);