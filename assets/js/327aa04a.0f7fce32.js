"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,p(p({ref:t},d),{},{components:n})):r.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(5773),a=(n(7294),n(3905));const i={id:"ima_react_page_renderer.useEventBusType",title:"Interface: useEventBusType",sidebar_label:"@ima/react-page-renderer.useEventBusType",custom_edit_url:null},p=void 0,l={unversionedId:"api/interfaces/ima_react_page_renderer.useEventBusType",id:"api/interfaces/ima_react_page_renderer.useEventBusType",title:"Interface: useEventBusType",description:"@ima/react-page-renderer.useEventBusType",source:"@site/../docs/api/interfaces/ima_react_page_renderer.useEventBusType.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_react_page_renderer.useEventBusType",permalink:"/api/interfaces/ima_react_page_renderer.useEventBusType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_react_page_renderer.useEventBusType",title:"Interface: useEventBusType",sidebar_label:"@ima/react-page-renderer.useEventBusType",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/react-page-renderer.useDispatcherType",permalink:"/api/interfaces/ima_react_page_renderer.useDispatcherType"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"fire",id:"fire",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_react_page_renderer"},"@ima/react-page-renderer"),".useEventBusType"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fire"},"fire"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fire"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"eventTarget"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"EventTarget"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"data?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#eventbusoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"EventBusOptions")),") => ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},(0,a.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},(0,a.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,a.kt)("p",null,"Fires a new custom event of the specified name, carrying the provided\ndata."),(0,a.kt)("p",null,"Note that this method does not prevent the event listeners to modify the\ndata in any way. The order in which the event listeners will be executed\nis unspecified and should not be relied upon."),(0,a.kt)("p",null,"Note that the default options are\n",(0,a.kt)("inlineCode",{parentName:"p"},"{ bubbles: true, cancelable: true }"),", which is different from the\ndefault values used in the native custom events\n(",(0,a.kt)("inlineCode",{parentName:"p"},"{ bubbles: false, cancelable: false }"),")."),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The event target at which the event will be dispatched (e.g. element/document/window).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"eventName")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name of the event to fire.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"data?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The data to pass to the event listeners.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/modules/ima_core#eventbusoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"EventBusOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The override of the default options passed to the constructor of the custom event fired by this event bus. The default options passed to the custom event constructor are ",(0,a.kt)("inlineCode",{parentName:"td"},"{ bubbles: true, cancelable: true }"),".")))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},(0,a.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,a.kt)("p",null,"This custom event bus."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"Thrown if the provided event target cannot be used to\nfire the event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event"},"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/react-page-renderer/src/hooks/eventBus.ts#L7"},"packages/react-page-renderer/src/hooks/eventBus.ts:7")))}c.isMDXComponent=!0}}]);