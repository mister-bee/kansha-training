(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{1616:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/indexOld",function(){return n(3703)}])},9749:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(c){l=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,c=e.priority,s=void 0!==c&&c,h=e.loading,p=e.lazyRoot,j=void 0===p?null:p,O=e.lazyBoundary,E=void 0===O?"200px":O,I=e.className,P=e.quality,L=e.width,R=e.height,N=e.style,C=e.objectFit,q=e.objectPosition,H=e.onLoadingComplete,T=(e.onError,e.placeholder),D=void 0===T?"empty":T,B=e.blurDataURL,W=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),M=u.useContext(g.ImageConfigContext),U=u.useMemo((function(){var e=v||M||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[M]),F=W,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var G=A;if("loader"in F){if(F.loader){var Q=F.loader;G=function(e){e.config;var t=b(e,["config"]);return Q(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var K=S(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(B=B||K.blurDataURL,J=K.src,(!V||"fill"!==V)&&(R=R||K.height,L=L||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}t="string"===typeof t?t:J;var X=z(L),Y=z(R),$=z(P),Z=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(u.useState(!1),2),ne=te[0],ie=te[1],re=o(m.useIntersection({rootRef:j,rootMargin:E,disabled:!Z}),3),oe=re[0],ae=re[1],le=re[2],ce=!Z||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:q};0;0;var me=Object.assign({},N,"raw"===V?{aspectRatio:"".concat(X," / ").concat(Y)}:fe),ge="blur"!==D||ne?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:q||"0% 0%"};if("fill"===V)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Y){var he=Y/X,pe=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(se.display="block",se.position="relative",de=!0,ue.paddingTop=pe):"intrinsic"===V?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===V&&(se.display="inline-block",se.position="relative",se.width=X,se.height=Y)}else 0;var ye={src:_,srcSet:void 0,sizes:void 0};ce&&(ye=x({config:U,src:t,unoptimized:l,layout:V,width:X,quality:$,sizes:n,loader:G}));var be=t;0;var ve,we="imagesrcset",_e="imagesizes";we="imageSrcSet",_e="imageSizes";var je=(r(ve={},we,ye.srcSet),r(ve,_e,ye.sizes),ve),Se=u.default.useLayoutEffect,xe=u.useRef(H),ze=u.useRef(t);u.useEffect((function(){xe.current=H}),[H]),Se((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Ae=y({isLazy:Z,imgAttributes:ye,heightInt:Y,widthInt:X,qualityInt:$,layout:V,className:I,imgStyle:me,blurStyle:ge,loading:h,config:U,unoptimized:l,placeholder:D,loader:G,srcString:be,onLoadingCompleteRef:xe,setBlurComplete:ie,setIntersection:oe,isVisible:ce},F);return u.default.createElement(u.default.Fragment,null,"raw"===V?u.default.createElement(k,Object.assign({},Ae)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(k,Object.assign({},Ae))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var c,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(c=n(3121))&&c.__esModule?c:{default:c},f=n(139),m=n(9246),g=n(8730),h=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var i=null!=t[n]?t[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){p(e,t,i[t])}))},i=1;i<arguments.length;i++)n(i);return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,o=e.width,l=e.quality,c=e.sizes,s=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(i);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,c),d=u.widths,f=u.kind,m=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,i){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:l,width:d[m]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",i=j.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,i,r,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===i&&o(!0),null===r||void 0===r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=e.heightInt,i=e.widthInt,r=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,m=e.srcString,g=e.config,h=e.unoptimized,p=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,_=e.setIntersection,j=e.onError,S=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,"raw"!==o||t.sizes?{}:{height:n,width:i},{decoding:"async","data-nimg":o,className:a,style:y({},l,c),ref:u.useCallback((function(e){_(e),(null===e||void 0===e?void 0:e.complete)&&O(e,m,0,d,v,w)}),[_,m,o,d,v,w]),onLoad:function(e){O(e.currentTarget,m,0,d,v,w)},onError:function(e){"blur"===d&&w(!0),j&&j(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},S,x({config:g,src:m,unoptimized:h,layout:o,width:i,quality:r,sizes:t.sizes,loader:p}),"raw"!==o||t.sizes?{}:{height:n,width:i},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(5893),r=n(9008),o=n(5675),a=n.n(o),l=n(7160),c=n.n(l);function s(){return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"Kansha Training!!!"}),(0,i.jsx)("meta",{name:"description",content:"kansha training"}),(0,i.jsx)("link",{rel:"icon",href:"".concat("/kansha-training","/favicon.ico")})]}),(0,i.jsxs)("main",{className:c().main,children:[(0,i.jsxs)("h1",{className:c().title,children:["How to use ",(0,i.jsx)("a",{href:"https://kansha.app",children:"Kansha!!"})]}),(0,i.jsxs)("p",{className:c().description,children:["Gratitude is the Currrency of Learning"," "]}),(0,i.jsx)("h3",{children:"Students - Teacher - Administrators"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/E7wJTI-1dvQ",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})," "]})]}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:c().logo,children:(0,i.jsx)(a(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=1616,e(e.s=t);var t}));var t=e.O();_N_E=t}]);