"use strict";(self.webpackChunkchkry=self.webpackChunkchkry||[]).push([[65],{3723:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return p},M:function(){return w},P:function(){return b},_:function(){return i},a:function(){return l},b:function(){return c},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,d);return r.createElement(r.Fragment,null,r.createElement(m,l({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,g);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],b=function(e){let{fallback:t}=e,a=i(e,E);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const w=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;const C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:s().object.isRequired,alt:C},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],x=new Set;let S,I;const T=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:d,onStartLoad:m,onLoad:p,onError:g}=e,h=i(e,k);const{width:f,height:y,layout:v}=n,E=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,v),{style:b,className:w}=E,C=i(E,L),N=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const A=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,y);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(T);if(I&&x.has(T))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:x.has(T),image:n},h)),x.has(T)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,T,x,s,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{x.has(T)&&I&&(N.current.innerHTML=I(l({isLoading:x.has(T),isLoaded:x.has(T),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},C,{style:l({},b,s,{backgroundColor:c}),className:w+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));A.propTypes=N,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),_={src:s().string.isRequired,alt:C,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(R=A,function(e){let{src:t,__imageData:a,__error:n}=e,s=i(e,O);return n&&console.warn(n),a?r.createElement(R,l({image:a},s)):(console.warn("Image not loaded",t),null)});var R;M.displayName="StaticImage",M.propTypes=_},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},7989:function(e,t,a){a.d(t,{T:function(){return n}});var r=a(7294);var n=e=>{let{title:t,children:a}=e;const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{n.current&&n.current.scrollIntoView()}),[]),r.createElement("div",{ref:n,className:"Page-module--page--24e03"},r.createElement("div",{className:"Page-module--inner--4b31d"},t&&r.createElement("h1",{className:"Page-module--title--90338"},t),r.createElement("div",{className:"Page-module--body--561c4"},a)))}},3588:function(e,t,a){a.d(t,{Y:function(){return E}});var r=a(7294),n=a(3649),s=a(1082),l=a(3723);var i=e=>{let{path:t,...a}=e;return r.createElement(s.StaticQuery,{query:"63107425",render:e=>{const{images:{edges:n=[]}={}}=e,s=n.find((e=>{let{node:a}=e;return a.absolutePath.includes(t)}));if(!s)return null;const{node:{childImageSharp:i}}=s;return r.createElement(l.G,Object.assign({},a,{image:i.gatsbyImageData}))}})},o=a(7203),c="Author-module--link--09c17",u="Author-module--title--cf7e5";var d=e=>{let{author:t,isIndex:a}=e;return r.createElement("div",{className:"Author-module--author--cbd31"},r.createElement(s.Link,{to:"/"},r.createElement(i,{alt:t.name,path:t.photo,className:"Author-module--photo--9787b"})),r.createElement("div",{className:"Author-module--titleContainer--4f576"},a?r.createElement("h1",{className:u},r.createElement(s.Link,{className:c,to:"/"},t.name)):r.createElement("h2",{className:u},r.createElement(s.Link,{className:c,to:"/"},t.name)),r.createElement(o.O,null)),r.createElement("p",{className:"Author-module--subtitle--86ec5"},t.bio))},m=a(4832);var p=e=>{let{name:t,icon:a}=e;return r.createElement("svg",{className:"Icon-module--icon--1d7da",viewBox:a.viewBox},r.createElement("title",null,t),r.createElement("path",{d:a.path}))},g=a(2072),h="Contacts-module--link--de1e0";var f=e=>{let{contacts:t}=e;return r.createElement("div",{className:"Contacts-module--contacts--09178"},r.createElement("ul",{className:"Contacts-module--list--9670b"},Object.keys(t).map((e=>t[e]?r.createElement("li",{className:"Contacts-module--item--f9cb0",key:e},"email"===e?r.createElement("span",{className:h,onClick:()=>{window.location.href="mailto:"+(0,m.atob)((0,g.KA)(e,t[e]))}},r.createElement(p,{name:e,icon:(0,g.q7)(e)})):r.createElement("a",{className:h,href:(0,g.KA)(e,t[e]),target:"_blank",rel:"noopener noreferrer"+("mastodon"===e?" me":"")},r.createElement(p,{name:e,icon:(0,g.q7)(e)}))):null))))};var y=e=>{let{copyright:t}=e;return r.createElement("div",{className:"Copyright-module--copyright--2c602"},t)};var v=e=>{let{menu:t}=e;return r.createElement("nav",{className:"Menu-module--menu--113a9"},r.createElement("ul",{className:"Menu-module--list--e1ae3"},t.map((e=>r.createElement("li",{className:"Menu-module--item--8b679",key:e.path},r.createElement(s.Link,{to:e.path,className:"Menu-module--link--a6f02",activeClassName:"Menu-module--active--6cb74"},e.label))))))};var E=e=>{let{isIndex:t}=e;const{author:a,copyright:s,menu:l}=(0,n.$W)();return r.createElement("div",{className:"Sidebar-module--sidebar--1bfa1"},r.createElement("div",{className:"Sidebar-module--inner--344d0"},r.createElement(d,{author:a,isIndex:t}),r.createElement(v,{menu:l}),r.createElement(f,{contacts:a.contacts}),r.createElement(y,{copyright:s})))}}}]);
//# sourceMappingURL=cfe4c78499ef4c57d2caa026eb88c0600d550e03-bd9fdac3eca7c5861f9f.js.map