"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(5773),a=(n(7294),n(3905));const i={id:"ima_core.PageRendererSettings",title:"Interface: PageRendererSettings",sidebar_label:"@ima/core.PageRendererSettings",custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/ima_core.PageRendererSettings",id:"api/interfaces/ima_core.PageRendererSettings",title:"Interface: PageRendererSettings",description:"@ima/core.PageRendererSettings",source:"@site/../docs/api/interfaces/ima_core.PageRendererSettings.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_core.PageRendererSettings",permalink:"/api/interfaces/ima_core.PageRendererSettings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageRendererSettings",title:"Interface: PageRendererSettings",sidebar_label:"@ima/core.PageRendererSettings",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageAction",permalink:"/api/interfaces/ima_core.PageAction"},next:{title:"@ima/core.Resources",permalink:"/api/interfaces/ima_core.Resources"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"batchResolve",id:"batchresolve",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"documentView",id:"documentview",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"managedRootView",id:"managedrootview",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"masterElementId",id:"masterelementid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"viewAdapter",id:"viewadapter",level:3},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageRendererSettings"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"batchresolve"},"batchResolve"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"batchResolve"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/boot.ts#L123"},"packages/core/src/boot.ts:123")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"documentview"},"documentView"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"documentView"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/boot.ts#L125"},"packages/core/src/boot.ts:125")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"managedrootview"},"managedRootView"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"managedRootView"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/boot.ts#L126"},"packages/core/src/boot.ts:126")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"masterelementid"},"masterElementId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"masterElementId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/boot.ts#L124"},"packages/core/src/boot.ts:124")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"viewadapter"},"viewAdapter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"viewAdapter"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/boot.ts#L127"},"packages/core/src/boot.ts:127")))}m.isMDXComponent=!0}}]);