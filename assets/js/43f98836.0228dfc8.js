"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6332],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73094:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(49231);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},75440:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(14380),r=n(49231),o=n(54920),l=n(8161),s=n(1506),i="tabItem_tmCO";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(k),O=w[0],S=w[1],x=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&S(E)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==O&&(j(t),S(a),null!=m&&N(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},23664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(14380),r=n(8240),o=(n(49231),n(54852)),l=n(75440),s=n(73094),i=["components"],u={title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6"},c=void 0,p={unversionedId:"guides/tutorials/c05-component/5.2-use-standalone-component",id:"guides/tutorials/c05-component/5.2-use-standalone-component",title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5217\u8868\u3002",source:"@site/docs/guides/tutorials/c05-component/5.2-use-standalone-component.md",sourceDirName:"guides/tutorials/c05-component",slug:"/guides/tutorials/c05-component/5.2-use-standalone-component",permalink:"/docs/guides/tutorials/c05-component/5.2-use-standalone-component",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93",permalink:"/docs/guides/tutorials/c05-component/5.1-use-ui-library"},next:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c06-css-and-component/6.1-css-in-js"}},d={},m=[],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5217\u8868\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u6211\u4eec\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6\u6765\u5b9e\u73b0\u8054\u7cfb\u4eba\u7684\u64cd\u4f5c\u6309\u94ae\u3002"),(0,o.kt)("p",null,"\u4ee5\u6309\u94ae\u5e93 ",(0,o.kt)("a",{parentName:"p",href:"https://lab.hakim.se/ladda/"},"Ladda")," \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-ladda"},"React \u5b9e\u73b0")," \u4e3a\u4f8b\uff0c\u5148\u6dfb\u52a0\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-ladda ladda\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u5bfc\u5165\u7ec4\u4ef6\uff0c\u540c\u65f6\u624b\u52a8\u5bfc\u5165\u9700\u8981\u7684 CSS\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import LaddaButton, { S, SLIDE_UP } from 'react-ladda';\nimport 'ladda/dist/ladda.min.css';\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"List.Item")," \u7ec4\u4ef6\u7684\u8c03\u7528\u4ee3\u7801\uff0c\u6dfb\u52a0 actions\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'<List.Item\n  key={name}\n  actions={[\n    <LaddaButton\n      key={email}\n      loading={false}\n      data-size={S}\n      data-style={SLIDE_UP}\n      data-spinner-size={20}\n      data-spinner-color="#ddd"\n      data-spinner-lines={8}>\n      Call\n    </LaddaButton>\n  ]}>\n  <List.Item.Meta\n    avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n    title={name}\n    description={email}\n  />\n</List.Item>\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-ladda")," \u7ec4\u4ef6\u5e93\u6ca1\u6709\u63d0\u4f9b types \u6587\u4ef6\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," \u6587\u4ef6\uff1a"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/modern-app-env.d.ts\n"))),(0,o.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ni src/modern-app-env.d.ts\n")))),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern-app-env.d.ts")," \u4e2d\u6dfb\u52a0\u6a21\u5757\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"declare module 'react-ladda' {\n  const LaddaButton: any;\n  export default LaddaButton;\n  export const S: any;\n  export const SLIDE_UP: any;\n}\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/05/result1.png",alt:"result1"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"CSS \u6587\u4ef6\u4f1a\u81ea\u52a8\u7ecf\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://preset-env.cssdb.org/features"},"postcss-preset-env"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer")," \u7b49\u4e3b\u6d41 PostCSS \u9879\u76ee\u7684\u5904\u7406\uff0c\u4e0d\u7528\u62c5\u5fc3\u5e73\u53f0\u517c\u5bb9\u6027\u95ee\u9898\uff08\u5982\u679c\u6709\u7279\u6b8a\u517c\u5bb9\u9700\u6c42\u53ef\u4ee5\u8c03\u6574 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c04-es6-plus-and-ts/4.3-compatibility"},"browserslist")," \u914d\u7f6e\uff09"),(0,o.kt)("p",{parentName:"div"},"\u4e5f\u652f\u6301\u5bfc\u5165 Scss\u3001Less \u6587\u4ef6\u3002\u6709\u7684\u7ec4\u4ef6\u4f7f\u7528 CSS in JS\uff0c\u4e0d\u9700\u8981\u989d\u5916\u5bfc\u5165\u6837\u5f0f\u6587\u4ef6\uff0c\u4e0b\u4e00\u8282\u4f1a\u6709\u76f8\u5173\u4ecb\u7ecd\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c05/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}v.isMDXComponent=!0}}]);