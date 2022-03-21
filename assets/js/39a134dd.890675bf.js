"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1985],{54852:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(14380),a=n(8240),o=(n(49231),n(54852)),i=["components"],l={sidebar_position:3},s="hook",p={unversionedId:"apis/runtime/bff-server/hook",id:"apis/runtime/bff-server/hook",title:"hook",description:"\u7528\u4e8e\u5728 BFF \u51fd\u6570\u5199\u6cd5\u4e0b\u6dfb\u52a0\u6846\u67b6\u4e2d\u95f4\u4ef6\uff0c\u6dfb\u52a0\u7684\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4f1a\u5728BFF\u51fd\u6570\u5b9a\u4e49\u7684\u8def\u7531\u4e4b\u524d\u3002",source:"@site/docs/apis/runtime/bff-server/hook.md",sourceDirName:"apis/runtime/bff-server",slug:"/apis/runtime/bff-server/hook",permalink:"/docs/apis/runtime/bff-server/hook",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"useContext",permalink:"/docs/apis/runtime/bff-server/use-context"},next:{title:"model",permalink:"/docs/apis/runtime/model/model_"}},d={},u=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Express",id:"express",level:3},{value:"Nest",id:"nest",level:3},{value:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",level:4},{value:"\u6dfb\u52a0 Module",id:"\u6dfb\u52a0-module",level:4},{value:"Koa",id:"koa",level:3},{value:"egg",id:"egg",level:3},{value:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6-1",level:4},{value:"\u7ed9\u4e2d\u95f4\u4ef6\u6ce8\u5165\u53c2\u6570",id:"\u7ed9\u4e2d\u95f4\u4ef6\u6ce8\u5165\u53c2\u6570",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hook"},"hook"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7528\u4e8e\u5728 BFF \u51fd\u6570\u5199\u6cd5\u4e0b\u6dfb\u52a0\u6846\u67b6\u4e2d\u95f4\u4ef6\uff0c\u6dfb\u52a0\u7684\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4f1a\u5728",(0,o.kt)("strong",{parentName:"p"},"BFF\u51fd\u6570"),"\u5b9a\u4e49\u7684\u8def\u7531\u4e4b\u524d\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hook(options) => void")),(0,o.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"options: ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),"\uff0cModern.js \u63d0\u4f9b\u7684\u4e00\u7cfb\u5217\u94a9\u5b50\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[addMiddleware]",": ",(0,o.kt)("inlineCode",{parentName:"li"},"string | function"),"\uff0c\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u94a9\u5b50\u3002")))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0d\u540c\u7684\u6846\u67b6\uff0c\u5e94\u6dfb\u52a0\u4e0d\u540c\u6846\u67b6\u7684\u4e2d\u95f4\u4ef6\u3002\u76ee\u524d\u652f\u6301 ",(0,o.kt)("strong",{parentName:"p"},"express"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"nest"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"koa")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"egg"),"\u3002"),(0,o.kt)("h3",{id:"express"},"Express"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/_app.ts",title:"api/_app.ts"},"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req, res, next) => {\n    req.query.id = 'express';\n    await next();\n  });\n});\n")),(0,o.kt)("h3",{id:"nest"},"Nest"),(0,o.kt)("h4",{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/_app.ts",title:"api/_app.ts"},"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req, res, next) => {\n    req.query.id = 'express';\n    await next();\n  });\n});\n")),(0,o.kt)("h4",{id:"\u6dfb\u52a0-module"},"\u6dfb\u52a0 Module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/_app.ts",title:"api/_app.ts"},"import { hook } from '@modern-js/runtime/server';\nimport {\n  Injectable,\n  MiddlewareConsumer,\n  Module,\n  NestMiddleware,\n} from '@nestjs/common';\n\n@Injectable()\nexport class LoggerMiddleware implements NestMiddleware {\n  async use(req: any, res: any, next: any) {\n      console.info(`access url: ${req.url}`);\n      next();\n  }\n}\n\n@Module()\nexport class AppModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer.apply(LoggerMiddleware).forRoutes('*');\n  }\n}\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(AppModule);\n});\n")),(0,o.kt)("h3",{id:"koa"},"Koa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/_app.ts",title:"api/_app.ts"},"export default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx, next) => {\n    ctx.req.query.id = 'koa';\n    await next();\n  });\n});\n")),(0,o.kt)("h3",{id:"egg"},"egg"),(0,o.kt)("h4",{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6-1"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/_app.ts",title:"api/_app.ts"},"export default hook(({ addMiddleware }) => {\n  addMiddleware(() => async (ctx, next) => {\n    ctx.req.query.id = 'egg';\n    await next();\n  });\n});\n")),(0,o.kt)("h4",{id:"\u7ed9\u4e2d\u95f4\u4ef6\u6ce8\u5165\u53c2\u6570"},"\u7ed9\u4e2d\u95f4\u4ef6\u6ce8\u5165\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/_app.ts",title:"api/_app.ts"},"export default hook(({ addMiddleware }) => {\n  addMiddleware([\n    'eggMiddleware',        // \u8fd9\u91cc\u4e3a\u7b2c\u4e09\u65b9 node_module \u5305\u540d\n    {\n      key: 'value',\n    },\n  ])\n});\n")))}m.isMDXComponent=!0}}]);