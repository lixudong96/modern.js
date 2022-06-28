"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9451],{54852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(49231);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(86215),i=(t(49231),t(54852));const r={sidebar_position:2},s="Tailwind CSS",o={unversionedId:"guides/usages/css/tailwindcss",id:"guides/usages/css/tailwindcss",title:"Tailwind CSS",description:"Tailwind CSS \u662f\u4e00\u4e2a\u4ee5 Utility Class \u4e3a\u57fa\u7840\u7684 CSS \u6846\u67b6\u548c\u8bbe\u8ba1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5e38\u7528\u6837\u5f0f\uff0c\u540c\u65f6\u652f\u6301\u4e3b\u9898\u6837\u5f0f\u7684\u7075\u6d3b\u6269\u5c55\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 Tailwind CSS\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c pnpm run new \u5e76\u5f00\u542f\u3002",source:"@site/docs/guides/usages/css/tailwindcss.md",sourceDirName:"guides/usages/css",slug:"/guides/usages/css/tailwindcss",permalink:"/docs/guides/usages/css/tailwindcss",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"CSS-in-JS",permalink:"/docs/guides/usages/css/css-in-js"},next:{title:"PostCSS",permalink:"/docs/guides/usages/css/postcss"}},p={},l=[{value:"\u4f7f\u7528 <code>Twin</code> \u5e93",id:"\u4f7f\u7528-twin-\u5e93",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tailwind-css"},"Tailwind CSS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u662f\u4e00\u4e2a\u4ee5 Utility Class \u4e3a\u57fa\u7840\u7684 CSS \u6846\u67b6\u548c\u8bbe\u8ba1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5e38\u7528\u6837\u5f0f\uff0c\u540c\u65f6\u652f\u6301\u4e3b\u9898\u6837\u5f0f\u7684\u7075\u6d3b\u6269\u5c55\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u5e76\u5f00\u542f\u3002"),(0,i.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u9009\u62e9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c: \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd: \u542f\u7528 Tailwind CSS \u652f\u6301\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u65f6\u5728\u5165\u53e3\u7684\u6839\u7ec4\u4ef6(\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.jsx"),")\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n")),(0,i.kt)("p",null,"\u7136\u540e\u5373\u53ef\u5728\u5404\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Tailwind CSS \u63d0\u4f9b\u7684 Utility Class \u4e86\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6839\u636e\u4e0d\u540c\u9700\u6c42\uff0c\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u5bfc\u5165 Tailwind CSS \u63d0\u4f9b\u7684 CSS \u6587\u4ef6\u3002\u7531\u4e8e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@taiwind")," \u4e0e\u76f4\u63a5\u5bfc\u5165 CSS \u6587\u4ef6\u7684\u4f5c\u7528\u7b49\u4ef7\uff0c\u56e0\u6b64\u5173\u4e8e Tailwind CSS \u63d0\u4f9b\u7684 CSS \u6587\u4ef6\u7684\u7528\u9014\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#tailwind"},(0,i.kt)("inlineCode",{parentName:"a"},"@tailwind")," \u7684\u4f7f\u7528")," \u6587\u6863\u4e2d\u6ce8\u91ca\u91cc\u7684\u5185\u5bb9\u3002"))),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u81ea\u5b9a\u4e49 Tailwind CSS \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"theme")," \u914d\u7f6e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u4e2d\u4fee\u6539\uff0c\u4f8b\u5982\uff0c\u989c\u8272\u4e3b\u9898\u4e2d\u589e\u52a0\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"primary"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    designSystem: {\n      extend: {\n        colors: {\n          primary: '#5c6ac4',\n        },\n      },\n    },\n  },\n});\n")),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u5bf9 Tailwind CSS \u505a ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"theme")," \u4ee5\u5916\u7684\u5176\u4ed6\u7279\u6b8a\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/tailwindcss"},(0,i.kt)("inlineCode",{parentName:"a"},"tools.tailwindcss"))," \u4e2d\u914d\u7f6e\uff0c\u4f8b\u5982\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"variants"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    tailwindcss: {\n      variants: {\n        extend: {\n          backgroundColor: ['active'],\n        },\n      },\n    },\n  },\n});\n")),(0,i.kt)("h2",{id:"\u4f7f\u7528-twin-\u5e93"},"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ben-rogerson/twin.macro"},(0,i.kt)("inlineCode",{parentName:"a"},"Twin"))," \u5e93"),(0,i.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u4e2d\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662f CSS-in-JS \u4ee5\u53ca\u793e\u533a\u5e38\u7528\u7684 CSS-in-JS \u5e93 ",(0,i.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),"\u3002\u8fd9\u4e00\u90e8\u5206\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-rogerson/twin.macro"},(0,i.kt)("inlineCode",{parentName:"a"},"Twin"))," \u5728 CSS-in-JS \u4e2d\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\u3002\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-rogerson/twin.macro"},(0,i.kt)("inlineCode",{parentName:"a"},"Twin"))," \u53ef\u4ee5\u66f4\u5bb9\u6613\u5728 CSS-in-JS \u7684\u4ee3\u7801\u4e2d\u4f7f\u7528 Tailwind CSS\u3002",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-rogerson/twin.macro"},(0,i.kt)("inlineCode",{parentName:"a"},"Twin"))," \u5bf9\u4e8e\u81ea\u5df1\u7684\u63cf\u8ff0\u662f\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Twin blends the magic of Tailwind with the flexibility of css-in-js"))),(0,i.kt)("p",null,"\u5728\u5f00\u542f\u300cTailwind CSS \u652f\u6301\u300d\u7684\u529f\u80fd\u540e\uff0c\u9996\u5148\u9700\u8981\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-rogerson/twin.macro"},(0,i.kt)("inlineCode",{parentName:"a"},"Twin"))," \u4f9d\u8d56:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# package manager is `pnpm`\npnpm add twin.macro -D\n\n# package manager is `yarn`\nyarn add twin.macro -D\n")),(0,i.kt)("p",null,"\u5f53\u9879\u76ee\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u4f9d\u8d56\u540e\uff0cModern.js \u4f1a\u68c0\u6d4b\u5230\u8be5\u4f9d\u8d56\u5e76\u5bf9\u5185\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-plugin-macro")," \u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u76f8\u5173\u7684\u914d\u7f6e\u3002\u56e0\u6b64\u5728\u5b89\u88c5\u5b8c\u4f9d\u8d56\u540e\uff0c\u65e0\u9700\u624b\u52a8\u914d\u7f6e\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u7684\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import tw from 'twin.macro'\n\nconst Input = tw.input`border hover:border-black`\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"MacroError: /project/App.tsx")," \u9519\u8bef\u7684\u65f6\u5019\uff0c\u6709\u53ef\u80fd\u662f\u7f3a\u5c11 ",(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u4f9d\u8d56\u5bfc\u81f4\u7684\u3002"))),(0,i.kt)("p",null,"\u66f4\u591a\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-rogerson/twin.macro/blob/master/docs/index.md"},"\u6587\u6863"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u9ed8\u8ba4\u4f1a\u8bfb\u53d6\u9879\u76ee\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwindcss.config.js")," \u6587\u4ef6\uff0c\u6216\u8005\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-plugin-macro")," \u4e0a\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md#options"},(0,i.kt)("inlineCode",{parentName:"a"},"twin.config"))," \u6307\u5b9a\u7684\u6587\u4ef6\u8def\u5f84\u8bfb\u53d6 Tailwind CSS \u914d\u7f6e\u3002\u4e0d\u8fc7\u5728 Modern.js \u4e2d\u4e0d\u9700\u8981\u8fdb\u884c\u8fd9\u4e9b\u989d\u5916\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5f53\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u548c  ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/tailwindcss"},(0,i.kt)("inlineCode",{parentName:"a"},"tools.tailwindcss"))," \u5bf9 Tailwind CSS \u8fdb\u884c\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u914d\u7f6e\u4e5f\u4f1a\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"twin.macro")," \u751f\u6548\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f53\u4e3a\u9879\u76ee\u914d\u7f6e Tailwind CSS \u7684\u65f6\u5019\uff0c",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u548c  ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/tailwindcss"},(0,i.kt)("inlineCode",{parentName:"a"},"tools.tailwindcss"))," \u8fd9\u4e24\u4e2a\u914d\u7f6e\u7684\u7ec4\u5408\u7b49\u4ef7\u4e8e\u5355\u72ec\u914d\u7f6e\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwindcss.config.js")," \u6587\u4ef6\u3002\n\u5176\u4e2d",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem")),"\u7b49\u6548\u4e8e Tailwind CSS \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://v2.tailwindcss.com/docs/configuration#theme"},(0,i.kt)("inlineCode",{parentName:"a"},"theme"))," \u914d\u7f6e\u3002")))}d.isMDXComponent=!0}}]);