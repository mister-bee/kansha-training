(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8484)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=r(7294))&&u.__esModule?u:{default:u},i=r(1003),c=r(880),l=r(9246);var f={};function s(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),u=a.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],u=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):u||r}}),[n,e.href,e.as]),d=u.href,p=u.as,h=a.default.useRef(d),v=a.default.useRef(p),y=e.children,b=e.replace,m=e.shallow,g=e.scroll,j=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var x=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),3),O=w[0],_=w[1],E=w[2],S=a.default.useCallback((function(e){v.current===p&&h.current===d||(E(),v.current=p,h.current=d),O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[p,x,d,E,O]);a.default.useEffect((function(){var e=_&&r&&i.isLocalURL(d),t="undefined"!==typeof j?j:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,_,j,r,n]);var A={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:a}))}(e,n,d,p,b,m,g,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof j?j:n&&n.locale,M=n&&n.isLocaleDomain&&i.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);A.href=M||i.addBasePath(i.addLocale(p,C,n&&n.defaultLocale))}return a.default.cloneElement(t,A)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,f=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],h=o(u.useState(t?t.current:null),2),v=h[0],y=h[1],b=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),m=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){t&&y(t.current)}),[t]),[b,d,m]};var u=r(7294),a=r(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1728:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(){return(0,n.jsx)("h6",{children:"Kansha (c) 2022"})}},5122:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(7294);function o(){return(0,n.jsx)("h1",{children:"Kansha Training"})}},8796:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(1728)),u=r(5122),a=r(3377);function i(e){var t=e.children;return(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)(u.default,{}),(0,n.jsx)(a.default,{}),t,(0,n.jsx)(o.default,{})]})}},3377:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(1664),u=r.n(o);t.default=function(){return(0,n.jsxs)("nav",{children:[(0,n.jsx)("div",{className:"logo",children:"Kansha Training"}),(0,n.jsx)(u(),{href:"/",children:(0,n.jsx)("a",{children:"Home"})}),(0,n.jsx)(u(),{href:"/Admins",children:(0,n.jsx)("a",{children:" Administrators"})}),(0,n.jsx)(u(),{href:"/Teachers",children:(0,n.jsx)("a",{children:" Teachers"})}),(0,n.jsx)(u(),{href:"/Students",children:(0,n.jsx)("a",{children:" Student"})})]})}},8484:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(6774),r(8796));function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(o.default,{children:(0,n.jsx)(t,a({},r))})}},6774:function(){},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var r=e.O();_N_E=r}]);