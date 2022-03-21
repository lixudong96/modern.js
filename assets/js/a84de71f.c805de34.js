"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4570],{54852:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},13514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(14380),o=r(8240),a=(r(49231),r(54852)),i=["components"],s={sidebar_position:5,title:"\u6df7\u5408\u6280\u672f\u6808"},c=void 0,p={unversionedId:"guides/features/micro-frontend/mixed-stack",id:"guides/features/micro-frontend/mixed-stack",title:"\u6df7\u5408\u6280\u672f\u6808",description:"Modern.js \u5fae\u524d\u7aef\u65b9\u6848\u662f\u57fa\u4e8e Garfish \u5c01\u88c5\u7684\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u66f4\u5f00\u7bb1\u5373\u7528\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/docs/guides/features/micro-frontend/mixed-stack.md",sourceDirName:"guides/features/micro-frontend",slug:"/guides/features/micro-frontend/mixed-stack",permalink:"/docs/guides/features/micro-frontend/mixed-stack",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u6df7\u5408\u6280\u672f\u6808"},sidebar:"guidesSidebar",previous:{title:"\u52a0\u8f7d\u5b50\u5e94\u7528",permalink:"/docs/guides/features/micro-frontend/route-mode"},next:{title:"Electron \u7b80\u4ecb",permalink:"/docs/guides/features/electron/basic"}},u={},d=[{value:"\u5b50\u5e94\u7528\u662f Modern.js",id:"\u5b50\u5e94\u7528\u662f-modernjs",level:2},{value:"\u4e3b\u5e94\u7528\u662f Modern.js",id:"\u4e3b\u5e94\u7528\u662f-modernjs",level:2}],l={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u5fae\u524d\u7aef\u65b9\u6848\u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://garfish.top/"},"Garfish")," \u5c01\u88c5\u7684\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u66f4\u5f00\u7bb1\u5373\u7528\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5f53\u4f60\u7684\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u4e0d\u5168\u662f Modern.js \u5e94\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u53c2\u8003\u8fd9\u7247\u6587\u6863\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b50\u5e94\u7528\u662f ",(0,a.kt)("strong",{parentName:"li"},"Modern.js"),"\uff0c\u4e3b\u5e94\u7528\u4f7f\u7528\u7684\u539f\u751f Garfish \u5fae\u524d\u7aef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e3b\u5e94\u7528\u662f ",(0,a.kt)("strong",{parentName:"li"},"Modern.js"),"\uff0c\u5b50\u5e94\u7528\u6709\u7684\u662f\u5176\u5b83\u6280\u672f\u6808\u3002")),(0,a.kt)("h2",{id:"\u5b50\u5e94\u7528\u662f-modernjs"},"\u5b50\u5e94\u7528\u662f Modern.js"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Modern.js")," \u5b50\u5e94\u7528\u7f16\u8bd1\u540e\u4f1a\u751f\u6210\u6807\u51c6\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://garfish.top/quick-start#%E5%AD%90%E5%BA%94%E7%94%A8"},"Garfish \u5b50\u5e94\u7528\u5bfc\u51fa"),"\u3002\n\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u63a5\u5165\u6807\u51c6\u7684\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5b50\u5e94\u7528\u662f ",(0,a.kt)("strong",{parentName:"p"},"Modern.js"),"\uff0c\u4e3b\u5e94\u7528\u4f7f\u7528\u7684\u539f\u751f Garfish \u5fae\u524d\u7aef\u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u5e94\u7528\u8c03\u8bd5\u6a21\u5f0f")," \u4e0d\u53ef\u7528\u3002"))),(0,a.kt)("h2",{id:"\u4e3b\u5e94\u7528\u662f-modernjs"},"\u4e3b\u5e94\u7528\u662f Modern.js"),(0,a.kt)("p",null,"\u4e3b\u5e94\u7528\u662f ",(0,a.kt)("strong",{parentName:"p"},"Modern.js"),"\uff0c\u5b50\u5e94\u7528\u7528\u7684\u5176\u5b83\u6280\u672f\u6808\u3002\u5b50\u5e94\u7528\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://garfish.top/quick-start#%E5%AD%90%E5%BA%94%E7%94%A8"},"Garfish \u5b50\u5e94\u7528\u6807\u51c6")," \u5f00\u53d1\u5373\u53ef\u3002"))}f.isMDXComponent=!0}}]);