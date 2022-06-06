"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5815],{54852:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,s=m["".concat(c,".").concat(b)]||m[b]||p[b]||l;return n?r.createElement(s,o(o({ref:t},d),{},{components:n})):r.createElement(s,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70740:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(91528),a=n(2854),l=(n(49231),n(54852)),o=["components"],i={title:"LoadableLibrary",sidebar_position:4},c=void 0,u={unversionedId:"apis/runtime/utility/loadable/loadable-library",id:"apis/runtime/utility/loadable/loadable-library",title:"LoadableLibrary",description:"lazy.lib \u548c loadable.lib \u51fd\u6570\u8fd4\u56de LoadableLibrary \u5bf9\u8c61",source:"@site/docs/apis/runtime/utility/loadable/loadable-library.md",sourceDirName:"apis/runtime/utility/loadable",slug:"/apis/runtime/utility/loadable/loadable-library",permalink:"/docs/apis/runtime/utility/loadable/loadable-library",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"LoadableLibrary",sidebar_position:4},sidebar:"apisSidebar",previous:{title:"LoadableComponent",permalink:"/docs/apis/runtime/utility/loadable/loadable-component"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/apis/runtime/electron/overview"}},d={},p=[{value:"LoadableLibrary \u7c7b\u578b",id:"loadablelibrary-\u7c7b\u578b",level:2},{value:"fallback",id:"fallback",level:3},{value:"children",id:"children",level:3},{value:"ref",id:"ref",level:3}],m={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lazy.lib")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"loadable.lib")," \u51fd\u6570\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadableLibrary")," \u5bf9\u8c61"),(0,l.kt)("h2",{id:"loadablelibrary-\u7c7b\u578b"},"LoadableLibrary \u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type LoadableLibrary = React.ComponentType<{\n  fallback?: JSX.Element;\n  children?: (module: Module) => React.ReactNode;\n  ref?: React.Ref<Module>;\n}>\n")),(0,l.kt)("h3",{id:"fallback"},"fallback"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,l.kt)("p",null,"\u7ec4\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"loading")," \u9636\u6bb5\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback")," \u5185\u5bb9\u3002"),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("p",null,"\u5e93\u52a0\u8f7d\u5b8c\u6210\u53ea\u6709\u7684\u56de\u8c03\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\nconst Moment = loadable.lib(() => import('moment'))\nfunction FromNow({ date }) {\n  return (\n    <div>\n      <Moment fallback={date.toLocaleDateString()}>\n        {({ default: moment }) => moment(date).fromNow()}\n      </Moment>\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"ref"},"ref"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref<Module>")),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ref")," \u62ff\u5230\u6240\u52a0\u8f7d\u5e93\u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\nconst Moment = loadable.lib(() => import('moment'))\nclass MyComponent {\n  moment = React.createRef()\n  handleClick = () => {\n    if (this.moment.current) {\n      return alert(this.moment.current.default.format('HH:mm'))\n    }\n  }\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>What time is it?</button>\n        <Moment ref={this.moment} />\n      </div>\n    )\n  }\n}\n")))}b.isMDXComponent=!0}}]);