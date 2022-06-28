"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3089],{22092:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(49231),r=a(1506),n=a(78657),i=a(25389);const s="sidebar_kLyf",m="sidebarItemTitle_QW5_",o="sidebarItemList_pDLt",c="sidebarItem_GCIK",d="sidebarItemLink_jOFS",g="sidebarItemLinkActive_C_NJ";var p=a(51558);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function E(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},26570:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(49231),r=a(52936),n=a(22092),i=a(86720),s=a(51558),m=a(33201);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{permalink:a,title:l.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(m.Z,{permalink:r,title:l.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}var c=a(99226);function d(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:m}}=(0,r.Z)(),{blogDescription:d,blogTitle:g,permalink:p}=t,u="/"===p?m:g;return l.createElement(n.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},86720:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(49231),r=a(1506),n=a(54852),i=a(51558),s=a(25389),m=a(42580),o=a(99226),c=a(70429),d=a(27864),g=a(42999);const p="blogPostTitle_lZkV",u="blogPostData_ithL",E="blogPostDetailsFull_Jc8d";var h=a(95409);const b="image_wrmx";function v(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:i}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:b,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:n,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const _="authorCol_gFoE",N="imageOnlyAuthorRow_gobM",f="imageOnlyAuthorCol_ytbE";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?N:"row")},t.map(((e,t)=>{var i;return l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?f:_),key:t},l.createElement(v,{author:{...e,imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL}}))})))}function k(e){var t;const a=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,m.C)(),{children:v,frontMatter:_,assets:N,metadata:f,truncated:k,isBlogPostPage:P=!1}=e,{date:T,formattedDate:w,permalink:L,tags:y,readingTime:I,title:C,editUrl:M,authors:A}=f,x=null!=(t=N.image)?t:_.image,R=!P&&k,B=y.length>0,U=P?"h1":"h2";return l.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(U,{className:p,itemProp:"headline"},P?C:l.createElement(s.Z,{itemProp:"url",to:L},C)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",a(I))),l.createElement(Z,{authors:A,assets:N})),x&&l.createElement("meta",{itemProp:"image",content:b(x,{absolute:!0})}),l.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(n.Zo,{components:d.Z},v)),(B||k)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[E]:P})},B&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":R})},l.createElement(h.Z,{tags:y})),P&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:M})),R&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":B})},l.createElement(s.Z,{to:f.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},42999:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(49231),r=a(51558),n=a(86215),i=a(1506);const s="iconEdit_uX6c";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(99226);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},33201:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(49231),r=a(25389);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},95409:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(49231),r=a(1506),n=a(51558),i=a(25389);const s="tag_favH",m="tagRegular_cAEN",o="tagWithCount_ypsq";function c(e){const{permalink:t,name:a,count:n}=e;return l.createElement(i.Z,{href:t,className:(0,r.Z)(s,{[m]:!n,[o]:n})},a,n&&l.createElement("span",null,n))}const d="tags_IyLo",g="tag_vMB6";function p(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(d,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);