"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6290],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(14380),o=n(8240),i=(n(49231),n(54852)),a=["components"],u={title:"Electron \u6a21\u5f0f",sidebar_position:4},l="\u8c03\u8bd5\u5e94\u7528",c={unversionedId:"guides/usages/debug/electron",id:"guides/usages/debug/electron",title:"Electron \u6a21\u5f0f",description:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528",source:"@site/docs/guides/usages/debug/electron.md",sourceDirName:"guides/usages/debug",slug:"/guides/usages/debug/electron",permalink:"/docs/guides/usages/debug/electron",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Electron \u6a21\u5f0f",sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u6a21\u5f0f",permalink:"/docs/guides/usages/debug/micro-frontend"},next:{title:"\u522b\u540d\u3001\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf",permalink:"/docs/guides/usages/basic-configuration/globals"}},s={},p=[{value:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528",id:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528",level:2},{value:"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528",id:"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528",level:2},{value:"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b",id:"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b",level:3},{value:"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b",id:"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8c03\u8bd5\u5e94\u7528"},"\u8c03\u8bd5\u5e94\u7528"),(0,i.kt)("h2",{id:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528"},"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528"),(0,i.kt)("p",null,"\u5728 Electron \u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u4e00\u822c\u9700\u8981\u8c03\u8bd5",(0,i.kt)("strong",{parentName:"p"},"\u4e3b\u8fdb\u7a0b"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u4e24\u79cd\u8fdb\u7a0b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u8fdb\u7a0b"),"\uff0c\u53ef\u4ee5\u5728\u6e90\u7801\uff08\u6bd4\u5982\uff1aTS \u6587\u4ef6\u4e0a\uff09\u76f4\u63a5\u8bbe\u7f6e\u65ad\u70b9\uff0c\u901a\u8fc7 VSCode \u7684 Debug \u7ec8\u7aef\u542f\u52a8\u4e3b\u8fdb\u7a0b\u6765\u8fdb\u884c Debug \u8c03\u8bd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b"),"\uff0c\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u8bbe\u7f6e\u65ad\u70b9\uff0c\u5373\u53ef\u8c03\u8bd5\u3002")),(0,i.kt)("h2",{id:"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528"},"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u8c03\u8bd5\uff0c\u540c\u6837\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,i.kt)("h3",{id:"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b"},"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e3b\u8fdb\u7a0b\uff0c\u53ea\u9700\u5728\u6253\u5305\u4e3b\u8fdb\u7a0b\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u5373\u53ef\u3002\u5728 Modern.js \u5e94\u7528\u9879\u76ee\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u542f\u7528\u300cElectron\u300d\u6a21\u5f0f"),"\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u6709\u5982\u4e0b\u53ef\u6267\u884c\u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"build:main": "modern build electron-main --development"\n')),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c\u6253\u5305\u540e\u7684\u4e3b\u8fdb\u7a0b\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6df7\u6dc6\u538b\u7f29\u3002\u6839\u636e\u590d\u5236\u5230\u5e94\u7528\u4e2d\u7684\u4e3b\u8fdb\u7a0b\u4ee3\u7801\u4f4d\u7f6e\u3002\u6bd4\u5982\uff08\u4e00\u822c\u5728\u5982\u4e0b\u4f4d\u7f6e\uff09\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"./release/mac/test_modern_electron.app/Contents/Resources/app/electron"),"\u3002"),(0,i.kt)("p",null,"\u76f4\u63a5\u5728\u4e3b\u8fdb\u7a0b\u6e90\u7801\u91cc\uff0c\u901a\u8fc7\u4fee\u6539\u6e90\u7801\u8f93\u51fa\u65e5\u5fd7\u6216\u8005\u8c03\u8bd5\u90e8\u5206\u4ee3\u7801\uff0c\u8fdb\u884c Debug \u8c03\u8bd5\u3002"),(0,i.kt)("h3",{id:"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b"},"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b"),(0,i.kt)("p",null,"\u6253\u5f00\u7a97\u53e3\u7684\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u8fdb\u884c Debug \u5373\u53ef\u3002"))}f.isMDXComponent=!0}}]);