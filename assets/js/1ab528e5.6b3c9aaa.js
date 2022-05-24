"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[265],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64424:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(49231);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},71062:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(14380),a=n(49231),o=n(32457),s=n(64221),l=n(1506),i="tabItem_tmCO";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(g),x=w[0],T=w[1],O=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=y[d];null!=I&&I!==x&&b.some((function(e){return e.value===I}))&&T(I)}var _=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==x&&(j(t),T(r),null!=d&&N(d,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},21845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(14380),a=n(8240),o=(n(49231),n(54852)),s=n(71062),l=n(64424),i=["components"],u={title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"},c=void 0,p={unversionedId:"guides/tutorials/c06-css-and-component/6.6-testing",id:"guides/tutorials/c06-css-and-component/6.6-testing",title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b",description:"Modern.js \u96c6\u6210\u4e86 Jest\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7ec4\u4ef6\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002",source:"@site/docs/guides/tutorials/c06-css-and-component/6.6-testing.md",sourceDirName:"guides/tutorials/c06-css-and-component",slug:"/guides/tutorials/c06-css-and-component/6.6-testing",permalink:"/docs/guides/tutorials/c06-css-and-component/6.6-testing",tags:[],version:"current",frontMatter:{title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c06-css-and-component/6.5-storybook"},next:{title:"\u4f7f\u7528\u81ea\u63a7\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.1-code-based-routing"}},m={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modern.js \u96c6\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7ec4\u4ef6\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u5f00\u542f\u6d4b\u8bd5\u529f\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n\u276f \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7ed9 Item \u7ec4\u4ef6\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/components/Item/index.test.tsx\n"))),(0,o.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/components/Item/index.test.tsx\n")))),(0,o.kt)("p",null,"\u6216"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Item/__tests__/\ntouch src/components/Item/__tests__/index.tsx\n"))),(0,o.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Item/__tests__/\nni src/components/Item/__tests__/index.tsx\n")))),(0,o.kt)("p",null,"\u4ee5\u524d\u8005\u4e3a\u4f8b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Item/index.test.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { render } from '@modern-js/runtime/testing';\nimport Item from '.';\n\nconst defaultProps = {\n  info: {\n    avatar: 'https://via.placeholder.com/350x350',\n    name: 'foo',\n    email: 'foo.bar@bytedance.com',\n    archived: false,\n  },\n};\n\ndescribe('Item', () => {\n  it('should have contents', () => {\n    const {\n      info: { name },\n    } = defaultProps;\n    const { getByText } = render(<Item {...defaultProps} />);\n    expect(getByText(name)).toBeInTheDocument();\n  });\n});\n")),(0,o.kt)("p",null,"\u5728\u4e4b\u524d\u7ae0\u8282\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern-app-env.d.ts")," \u6587\u4ef6 ",(0,o.kt)("strong",{parentName:"p"},"\u9876\u90e8"),"\uff08",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#:~:text=Triple-slash%20directives%20are%20only%20valid%20at%20the%20top%20of%20their%20containing%20file."},(0,o.kt)("inlineCode",{parentName:"a"},"///")," \u8bed\u6cd5\u53ea\u5728\u6587\u4ef6\u9876\u90e8\u751f\u6548"),"\uff09 \u52a0\u4e0a\u7c7b\u578b\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference types="@modern-js/plugin-testing/type" />\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/runtime/testing/render"},"Test API"),"\u3002"))),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> modern test\n\n PASS  src/components/Item/index.test.tsx\n  Item\n    \u2713 should have contents (27 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.048 s, estimated 2 s\nRan all test suites.\n")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-6"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}v.isMDXComponent=!0}}]);