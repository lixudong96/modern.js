"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4516],{54852:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(49231);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48941:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(14380),r=t(8240),o=(t(49231),t(54852)),i=["components"],l={sidebar_position:2,title:"\u5b50\u5e94\u7528\u8c03\u8bd5"},d=void 0,p={unversionedId:"guides/features/micro-frontend/debugging",id:"guides/features/micro-frontend/debugging",title:"\u5b50\u5e94\u7528\u8c03\u8bd5",description:"\u6839\u636e\u7814\u53d1\u7684\u4e0d\u540c\u9636\u6bb5\uff0c\u6211\u4eec\u5c06\u5b50\u5e94\u7528\u8c03\u8bd5\u5206\u4e3a\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a",source:"@site/docs/guides/features/micro-frontend/debugging.md",sourceDirName:"guides/features/micro-frontend",slug:"/guides/features/micro-frontend/debugging",permalink:"/docs/guides/features/micro-frontend/debugging",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5b50\u5e94\u7528\u8c03\u8bd5"},sidebar:"guidesSidebar",previous:{title:"\u5fae\u524d\u7aef\u4ecb\u7ecd",permalink:"/docs/guides/features/micro-frontend/introduction"},next:{title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1",permalink:"/docs/guides/features/micro-frontend/communicate"}},s={},u=[{value:"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5",id:"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5",level:2},{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"\u52a0\u8f7d\u5b50\u5e94\u7528",id:"\u52a0\u8f7d\u5b50\u5e94\u7528",level:4},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:4},{value:"\u5b50\u5e94\u7528\u4ee3\u7801",id:"\u5b50\u5e94\u7528\u4ee3\u7801",level:4},{value:"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5",id:"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5",level:2},{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528-1",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-2",level:4},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528-1",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-3",level:4},{value:"Query \u6a21\u5f0f\u8c03\u8bd5",id:"query-\u6a21\u5f0f\u8c03\u8bd5",level:3},{value:"Header \u6a21\u5f0f\u8c03\u8bd5\uff08\u63a8\u8350\uff09",id:"header-\u6a21\u5f0f\u8c03\u8bd5\u63a8\u8350",level:3},{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:4},{value:"\u914d\u7f6e Header",id:"\u914d\u7f6e-header",level:4}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6839\u636e\u7814\u53d1\u7684\u4e0d\u540c\u9636\u6bb5\uff0c\u6211\u4eec\u5c06\u5b50\u5e94\u7528\u8c03\u8bd5\u5206\u4e3a\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5"},"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5"),(0,o.kt)("p",null,"\u9879\u76ee\u521d\u671f\uff0c\u4e3b\u5e94\u7528\u672a\u90e8\u7f72\uff0c\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u5206\u522b\u542f\u52a8\u4e3b\u5e94\u7528\u3001\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,o.kt)("h3",{id:"\u4e3b\u5e94\u7528"},"\u4e3b\u5e94\u7528"),(0,o.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "modernConfig": {\n    "runtime": {\n      "router": true,\n      "masterApp": {\n        "manifest": {\n          "modules": [\n            {\n              "name": "Dashboard",\n              "entry": "http://localhost:8081"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"\u5047\u8bbe\u672c\u5730\u7684\u5b50\u5e94\u7528\u7684\u540d\u5b57\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"DashBoard")," \u4e14\u542f\u52a8\u670d\u52a1\u7684\u5730\u5740\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"\u3002\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime.masterApp.modules")," \u5b57\u6bb5\u6307\u5b9a\u5b50\u5e94\u7528\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.kt)("h4",{id:"\u52a0\u8f7d\u5b50\u5e94\u7528"},"\u52a0\u8f7d\u5b50\u5e94\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/runtime/app/use-module-apps"},"useModuleApps")," API \u83b7\u53d6\u5b50\u5e94\u7528\u7ec4\u4ef6\uff0c\u5e76\u52a0\u8f7d\u5b50\u5e94\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"import { useModuleApps } from '@modern-js/runtime';\n\nfunction App() {\n  const { Dashboard } = useModuleApps();\n\n  return <div>\n    Master APP\n    <Route path='/dashboard'>\n      <Dashboard />\n    </Route>\n  </div>;\n}\n")),(0,o.kt)("h3",{id:"\u5b50\u5e94\u7528"},"\u5b50\u5e94\u7528"),(0,o.kt)("h4",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "modernConfig": {\n    "deploy": {\n      "microFrontend": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy.microFrontend")," \u5b57\u6bb5\u914d\u7f6e\u4e3a true \u7684\u65f6\u5019\uff0cModern.js \u5c06\u8ba4\u4e3a\u5f53\u524d\u5e94\u7528\u662f\u4e00\u4e2a\u5fae\u524d\u7aef\u5b50\u5e94\u7528\uff0c\u5e76\u5c06\u5176\u7f16\u8bd1\u4e3a\u7b26\u5408 Garfish \u5b50\u5e94\u7528\u89c4\u8303\u7684\u4ea7\u7269\u3002"),(0,o.kt)("h4",{id:"\u5b50\u5e94\u7528\u4ee3\u7801"},"\u5b50\u5e94\u7528\u4ee3\u7801"),(0,o.kt)("p",null,"\u5b50\u5e94\u7528\u5728\u4ee3\u7801\u5c42\u9762\u548c MWA \u662f\u5b8c\u5168\u4e00\u81f4\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/App.tsx",title:"src/App.tsx"},"function App() {\n  return <div>\n    dashboard\n  </div>;\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u76ee\u524d\u4e0d\u652f\u6301\u5728\u5b50\u5e94\u7528\u4e2d\u4f7f\u7528 BFF \u529f\u80fd\u3002"))),(0,o.kt)("p",null,"\u7136\u540e\u5206\u522b\u542f\u52a8\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\uff08\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm dev"),"\uff09\uff0c\u4e3b\u5e94\u7528\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")," \u7aef\u53e3\uff0c\u5b50\u5e94\u7528\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"8081")," \u7aef\u53e3\u3002\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/dashboard")," \u5c31\u80fd\u770b\u5230\u52a0\u8f7d\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u5b50\u5e94\u7528\u7684\u6548\u679c\u4e86\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5"},"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5"),(0,o.kt)("p",null,"\u5f53\u4e3b\u5e94\u7528\u9879\u76ee\u90e8\u7f72\u4e4b\u540e\uff0cModern.js \u63d0\u4f9b\u4e86\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5\u672c\u5730\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u5c0f\u8282\u6240\u7528\u7ebf\u4e0a\u5730\u5740\u5747\u662f\u865a\u6784\uff0c\u53ea\u4e3a\u6f14\u793a\u65b9\u4fbf\u3002"))),(0,o.kt)("h3",{id:"\u4e3b\u5e94\u7528-1"},"\u4e3b\u5e94\u7528"),(0,o.kt)("h4",{id:"\u914d\u7f6e-2"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "modernConfig": {\n    "server": {\n      "enableMicroFrontendDebug": true\n    },\n    "runtime": {\n      "router": true,\n      "masterApp": {\n        "manifest": {\n          "modules": [\n            {\n              "name": "Dashboard",\n              "entry": "http://modern-js.dev/dashboard"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"enableMicroFrontendDebug")," \u4f1a\u5728\u7ebf\u4e0a\u5f00\u542f \u5fae\u524d\u7aef Debug \u6a21\u5f0f\uff0c\u5982\u62c5\u5fc3\u5b89\u5168\u9690\u60a3\uff0c\u53ef\u53ea\u5728\u7ebf\u4e0a\u6d4b\u8bd5\u73af\u5883\u5f00\u542f\uff0c\u7ebf\u4e0a\u6b63\u5f0f\u73af\u5883\u5173\u6389\u8be5\u914d\u7f6e\u3002"))),(0,o.kt)("h3",{id:"\u5b50\u5e94\u7528-1"},"\u5b50\u5e94\u7528"),(0,o.kt)("h4",{id:"\u914d\u7f6e-3"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "modernConfig": {\n    "deploy": {\n      "microFrontend": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"\u672c\u5730\u542f\u52a8\u5b50\u5e94\u7528\uff0c\u5176\u7aef\u53e3\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"8080"),"\u3002"),(0,o.kt)("h3",{id:"query-\u6a21\u5f0f\u8c03\u8bd5"},"Query \u6a21\u5f0f\u8c03\u8bd5"),(0,o.kt)("p",null,"\u8bbf\u95ee\u4e3b\u5e94\u7528\u5730\u5740 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://master.example.com/")," \u5e76\u5728 URL \u540e\u52a0\u4e0a Query ",(0,o.kt)("inlineCode",{parentName:"p"},"?__debug__micro-frontend-debug-name=TableList&__debug__micro-frontend-debug-entry=http://localhost:8080"),"\u3002"),(0,o.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee\u4e3b\u5e94\u7528\u540e\uff0c\u670d\u52a1\u7aef\u6ce8\u5165\u7684\u5b50\u5e94\u7528\u6a21\u5757\u4fe1\u606f\u5c06\u88ab\u66ff\u6362\u4e3a\u6211\u4eec Query \u91cc\u7684\u4fe1\u606f\u3002\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"entry")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"\u3002\u7ebf\u4e0a\u4e3b\u5e94\u7528\u5207\u6362\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"/tablelist")," \u8def\u7531\u540e\u5c06\u4f1a\u52a0\u8f7d\u672c\u5730\u7684\u5b50\u5e94\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/query-debug.png",alt:"query-debug"})),(0,o.kt)("h3",{id:"header-\u6a21\u5f0f\u8c03\u8bd5\u63a8\u8350"},"Header \u6a21\u5f0f\u8c03\u8bd5\uff08\u63a8\u8350\uff09"),(0,o.kt)("p",null,"Query \u8c03\u8bd5\u65f6\uff0c\u5f53\u8def\u900f\u8df3\u8f6c\u7684\u65f6\u5019\uff0cQuery \u53c2\u6570\u4f1a\u4e22\u5931\uff0creload \u9875\u9762\u540e\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u5b50\u5e94\u7528\u4fe1\u606f\u91cc\u5c06\u4e0d\u4f1a\u6ce8\u5165\u672c\u5730\u7684\u5b50\u5e94\u7528\u4fe1\u606f\u3002\u53ef\u4ee5\u4f7f\u7528 Header \u6a21\u5f0f\u6765\u8c03\u8bd5\uff0c\u83b7\u53d6\u66f4\u7a33\u5b9a\u7684\u8c03\u8bd5\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,o.kt)("h4",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://modheader.com/install"},"ModHeader")," \u662f\u7528\u4e8e Mock \u6d4f\u89c8\u5668\u8bf7\u6c42/\u8fd4\u56de Header \u7684\u6d4f\u89c8\u5668\u63d2\u4ef6\u3002\u4f7f\u7528 ModHeader \u652f\u6301\u7684\u6d4f\u89c8\u5668\uff08Chrome\u3001Firfox\u3001Opera\u3001Edge\uff09\uff0c\u5e76\u5b89\u88c5 ModHeader \u63d2\u4ef6\u3002"),(0,o.kt)("h4",{id:"\u914d\u7f6e-header"},"\u914d\u7f6e Header"),(0,o.kt)("p",null,"\u914d\u7f6e\u5982\u4e0b Header"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"x-micro-frontend-module-name  TableList")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"x-micro-frontend-module-entry  http://localhost:8080")),(0,o.kt)("p",null,"\u8bbf\u95ee\u4e3b\u5e94\u7528\u5730\u5740\u5982\u4e0b\u6240\u793a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/header-debug.png",alt:"header-debug"})),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6b64\u65f6\u670d\u52a1\u7aef\u8fd4\u56de\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528\u4fe1\u606f\u662f Header \u91cc\u9762\u6307\u5b9a\u7684\u672c\u5730\u57df\u540d ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")))}m.isMDXComponent=!0}}]);