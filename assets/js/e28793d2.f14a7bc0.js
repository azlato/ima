"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},o="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=s(a),m=r,k=o["".concat(d,".").concat(m)]||o[m]||h[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(5773),r=(a(7294),a(3905));const i={id:"ima_core.Cache",title:"Class: Cache<V>",sidebar_label:"@ima/core.Cache",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/ima_core.Cache",id:"api/classes/ima_core.Cache",title:"Class: Cache<V>",description:"@ima/core.Cache",source:"@site/../docs/api/classes/ima_core.Cache.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.Cache",permalink:"/api/classes/ima_core.Cache",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.Cache",title:"Class: Cache<V>",sidebar_label:"@ima/core.Cache",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.Bootstrap",permalink:"/api/classes/ima_core.Bootstrap"},next:{title:"@ima/core.CacheEntry",permalink:"/api/classes/ima_core.CacheEntry"}},d={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"delete",id:"delete",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"deserialize",id:"deserialize",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"disable",id:"disable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"enable",id:"enable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"has",id:"has",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"serialize",id:"serialize",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4}],c={toc:s},o="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".Cache"),(0,r.kt)("p",null,"The cache provides a temporary storage for expirable information. The\nprimary use of a cache is caching information obtained via costly means\n(CPU-heavy computation or networking) to speed up the application's\nperformance when the same information needs to be retrieved multiple times."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"V")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Cache"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.CacheImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"CacheImpl"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.CacheImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"CacheImpl"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Cache"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"V"),">","()"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"V")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clears the cache by deleting all entries."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L15"},"packages/core/src/cache/Cache.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"delete"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Deletes the specified cache entry. The method has no effect if the entry\ndoes not exist."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the cache entry.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L69"},"packages/core/src/cache/Cache.ts:69")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deserialize"},"deserialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"serializedData"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Loads the provided serialized cache data into this cache. Entries\npresent in this cache but not specified in the provided data will remain\nin this cache intact."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serializedData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#serializeddata"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedData")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"V"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An object representing the state of the cache to load, obtained by parsing the JSON string returned by the ",(0,r.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Cache#serialize"},"serialize")," method.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L118"},"packages/core/src/cache/Cache.ts:118")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disable"},"disable"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"disable"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Disables the cache, preventing the retrieval of any cached entries and\nreporting all cache entries as non-existing. Disabling the cache does\nnot however prevent modifying the existing or creating new cache\nentries."),(0,r.kt)("p",null,"Disabling the cache also clears all of its current entries."),(0,r.kt)("p",null,"The method has no effect if the cache is already disabled."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L83"},"packages/core/src/cache/Cache.ts:83")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"enable"},"enable"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"enable"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Enables the cache, allowing the retrieval of cache entries."),(0,r.kt)("p",null,"The method has no effect if the cache is already enabled."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L92"},"packages/core/src/cache/Cache.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"V")),(0,r.kt)("p",null,"Returns the value of the entry identified by the specified key."),(0,r.kt)("p",null,"The method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the specified entry does not exist, has\nalready expired, or the cache is currently disabled."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the cache entry.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"V")),(0,r.kt)("p",null,"The value of the specified cache entry, or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the entry\nis not available."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L43"},"packages/core/src/cache/Cache.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"has"},"has"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"has"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tests whether the cache contains a fresh entry for the specified key. A\ncache entry is fresh if the has not expired its TTL (time to live)."),(0,r.kt)("p",null,"The method always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the cache is currently disabled."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the cache entry.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the cache is enabled, the entry exists and has\nnot expired yet."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L29"},"packages/core/src/cache/Cache.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serialize"},"serialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"serialize"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Exports the state of this cache to an HTML-safe JSON string. The data\nobtained by parsing the result of this method are compatible with the\n",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Cache#deserialize"},"deserialize")," method."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"A JSON string containing an object representing of the\ncurrent state of this cache."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L104"},"packages/core/src/cache/Cache.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set"},"set"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"set"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets the cache entry identified by the specified key to the provided\nvalue. The entry is created if it does not exist yet."),(0,r.kt)("p",null,"The method has no effect if the cache is currently disabled."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the cache entry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"V")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The cache entry value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ttl?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cache entry time to live in milliseconds. The entry will expire after the specified amount of milliseconds. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," or omit the parameter to use the default TTL of this cache.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/cache/Cache.ts#L59"},"packages/core/src/cache/Cache.ts:59")))}h.isMDXComponent=!0}}]);