"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=i,u=m["".concat(o,".").concat(k)]||m[k]||c[k]||r;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(5773),i=(a(7294),a(3905));const r={id:"ima_core.Extension",title:"Class: Extension<S, R, SS>",sidebar_label:"@ima/core.Extension",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/ima_core.Extension",id:"api/classes/ima_core.Extension",title:"Class: Extension<S, R, SS>",description:"@ima/core.Extension",source:"@site/../docs/api/classes/ima_core.Extension.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.Extension",permalink:"/api/classes/ima_core.Extension",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.Extension",title:"Class: Extension<S, R, SS>",sidebar_label:"@ima/core.Extension",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.Execution",permalink:"/api/classes/ima_core.Execution"},next:{title:"@ima/core.GenericError",permalink:"/api/classes/ima_core.GenericError"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Indexable",id:"indexable",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Properties",id:"properties",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"$name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"activate",id:"activate",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"beginStateTransaction",id:"beginstatetransaction",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"cancelStateTransaction",id:"cancelstatetransaction",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"clearPartialState",id:"clearpartialstate",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"commitStateTransaction",id:"commitstatetransaction",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"deactivate",id:"deactivate",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getAllowedStateKeys",id:"getallowedstatekeys",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getPartialState",id:"getpartialstate",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getRouteParams",id:"getrouteparams",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getState",id:"getstate",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"load",id:"load",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"setPageStateManager",id:"setpagestatemanager",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"setPartialState",id:"setpartialstate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"setRouteParams",id:"setrouteparams",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"setState",id:"setstate",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"switchToPartialState",id:"switchtopartialstate",level:3},{value:"Returns",id:"returns-17",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"switchToStateManager",id:"switchtostatemanager",level:3},{value:"Returns",id:"returns-18",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-19",level:4},{value:"Defined in",id:"defined-in-21",level:4}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".Extension"),(0,i.kt)("p",null,"Extensions provide means of extending the page controllers with additional\nmanaged state and logic."),(0,i.kt)("p",null,"An extension has access to the current route parameters, specify the\nresources to load when the page is loading or being updated, may intercept\nevent bus events and modify the state of the page just like an ordinary\ncontroller, except that the modifications are restricted to the state fields\nwhich the extension explicitly specifies using its\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#getallowedstatekeys"},"getAllowedStateKeys")," method."),(0,i.kt)("p",null,"All extensions to be used on a page must be added to the current controller\nbefore the controller is initialized. After that, the extensions will go\nthrough the same lifecycle as the controller."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,i.kt)("inlineCode",{parentName:"a"},"PageState"))," = {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"R")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/api/modules/ima_core#routeparams"},(0,i.kt)("inlineCode",{parentName:"a"},"RouteParams"))," = {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SS")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"S")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"S"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Extension"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.AbstractExtension"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractExtension"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.AbstractExtension"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractExtension"))))),(0,i.kt)("h2",{id:"indexable"},"Indexable"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyKey"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_core#eventbuseventhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"EventBusEventHandler"))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Extension"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SS"),">","()"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,i.kt)("inlineCode",{parentName:"a"},"PageState"))," = {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"R")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/api/modules/ima_core#routeparams"},(0,i.kt)("inlineCode",{parentName:"a"},"RouteParams"))," = {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SS")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,i.kt)("inlineCode",{parentName:"a"},"PageState"))," = ",(0,i.kt)("inlineCode",{parentName:"td"},"S"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dependencies"},"$dependencies"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"$dependencies"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_core#dependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"Dependencies"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L27"},"packages/core/src/extension/Extension.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"$name"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"$name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L26"},"packages/core/src/extension/Extension.ts:26")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"activate"},"activate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"activate"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Callback for activating the extension in the UI. This is the last\nmethod invoked during controller (and extensions) initialization, called\nafter all the promises returned from the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#load"},"load")," method have\nbeen resolved and the controller has configured the meta manager."),(0,i.kt)("p",null,"The extension may register any React and DOM event listeners in this\nmethod. The extension may start receiving event bus event after this\nmethod completes."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L66"},"packages/core/src/extension/Extension.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beginstatetransaction"},"beginStateTransaction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"beginStateTransaction"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Starts queueing state patches off the controller state. While the transaction\nis active every ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," call has no effect on the current state."),(0,i.kt)("p",null,"Note that call to ",(0,i.kt)("inlineCode",{parentName:"p"},"getState")," after the transaction has begun will\nreturn state as it was before the transaction."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L173"},"packages/core/src/extension/Extension.ts:173")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cancelstatetransaction"},"cancelStateTransaction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"cancelStateTransaction"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Cancels ongoing state transaction. Uncommitted state changes are lost."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L188"},"packages/core/src/extension/Extension.ts:188")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clearpartialstate"},"clearPartialState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"clearPartialState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Clears the current partial state of the extension and sets it value to empty object."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L215"},"packages/core/src/extension/Extension.ts:215")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"commitstatetransaction"},"commitStateTransaction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"commitStateTransaction"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Applies queued state patches to the controller state. All patches are squashed\nand applied with one ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," call."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L181"},"packages/core/src/extension/Extension.ts:181")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deactivate"},"deactivate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deactivate"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Callback for deactivating the extension in the UI. This is the first\nmethod invoked during extension deinitialization. This usually happens\nwhen the user navigates to a different URL."),(0,i.kt)("p",null,"This method is the lifecycle counterpart of the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#activate"},"activate"),"\nmethod."),(0,i.kt)("p",null,"The extension should deregister listeners registered and release all\nresources obtained in the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#activate"},"activate")," method."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L81"},"packages/core/src/extension/Extension.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Finalization callback, called when the controller is being discarded by\nthe application. This usually happens when the user navigates to a\ndifferent URL."),(0,i.kt)("p",null,"This method is the lifecycle counterpart of the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#init"},"init"),"\nmethod."),(0,i.kt)("p",null,"The extension should release all resources obtained in the\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#init"},"init")," method. The extension must release any resources\nthat might not be released automatically when the extensions's instance\nis destroyed by the garbage collector."),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L52"},"packages/core/src/extension/Extension.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getallowedstatekeys"},"getAllowedStateKeys"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAllowedStateKeys"),"(): keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),"[]"),(0,i.kt)("p",null,"Returns the names of the state fields that may be manipulated by this\nextension. Manipulations of other fields of the state will be ignored."),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,"keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),"[]"),(0,i.kt)("p",null,"The names of the state fields that may be manipulated\nby this extension."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L269"},"packages/core/src/extension/Extension.ts:269")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpartialstate"},"getPartialState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPartialState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,i.kt)("p",null,"Returns the current partial state of the extension."),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,i.kt)("p",null,"The current partial state of the extension."),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L208"},"packages/core/src/extension/Extension.ts:208")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getrouteparams"},"getRouteParams"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getRouteParams"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"R")),(0,i.kt)("p",null,"Returns the current route parameters."),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"R")),(0,i.kt)("p",null,"The current route parameters."),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L258"},"packages/core/src/extension/Extension.ts:258")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getstate"},"getState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"SS")),(0,i.kt)("p",null,"Returns the current state of the controller using this extension."),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SS")),(0,i.kt)("p",null,"The current state of the controller."),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L162"},"packages/core/src/extension/Extension.ts:162")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Callback for initializing the controller extension after the route\nparameters have been set on this extension."),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L35"},"packages/core/src/extension/Extension.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"load"},"load"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"load"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,i.kt)("p",null,"Callback the extension uses to request the resources it needs to render\nits related parts of the view. This method is invoked after the\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#init"},"init")," method."),(0,i.kt)("p",null,"The extension should request all resources it needs in this method, and\nrepresent each resource request as a promise that will resolve once the\nresource is ready for use (these can be data fetched over HTTP(S),\ndatabase connections, etc)."),(0,i.kt)("p",null,"The method must return a plain flat object. The field names of the\nobject identify the resources being fetched and prepared, each value\nmust be either the resource (e.g. view configuration or a value\nretrieved synchronously) or a Promise that will resolve to the resource."),(0,i.kt)("p",null,"The IMA will use the object to set the state of the controller."),(0,i.kt)("p",null,"Any returned promise that gets rejected will redirect the application to\nthe error page. The error page that will be used depends on the status\ncode of the error."),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,i.kt)("p",null,"A map object of promises resolved when all resources the controller\nrequires are ready. The resolved values will be pushed to the\ncontroller's state."),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L110"},"packages/core/src/extension/Extension.ts:110")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setpagestatemanager"},"setPageStateManager"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setPageStateManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"pageStateManager?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Sets the state manager used to manage the controller's state.."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pageStateManager?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/classes/ima_core.PageStateManager"},(0,i.kt)("inlineCode",{parentName:"a"},"PageStateManager")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"SS"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The current state manager to use.")))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L225"},"packages/core/src/extension/Extension.ts:225")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setpartialstate"},"setPartialState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setPartialState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"partialStatePatch"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Patches the partial state of the extension. The extension is able\nduring its load and update phase receive state from active controller\nusing this extension and from previously loaded/updated extensions."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialStatePatch")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Patch of the controller's state to apply.")))),(0,i.kt)("h4",{id:"returns-14"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L199"},"packages/core/src/extension/Extension.ts:199")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setrouteparams"},"setRouteParams"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setRouteParams"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Sets the current route parameters. This method is invoked before the\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#init"},"init")," method."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"R")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The current route parameters.")))),(0,i.kt)("h4",{id:"returns-15"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L249"},"packages/core/src/extension/Extension.ts:249")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setstate"},"setState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setState"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"statePatch"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Patches the state of the controller using this extension by using the\nprovided object by copying the provided patch object fields to the\ncontroller's state object."),(0,i.kt)("p",null,"Note that the state is not patched recursively but by replacing the\nvalues of the top-level fields of the state object."),(0,i.kt)("p",null,"Note that the extension may modify only the fields of the state that it\nhas specified by its ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#getallowedstatekeys"},"getAllowedStateKeys")," method."),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"statePatch")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"S")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"K"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Patch of the controller's state to apply.")))),(0,i.kt)("h4",{id:"returns-16"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L153"},"packages/core/src/extension/Extension.ts:153")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"switchtopartialstate"},"switchToPartialState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"switchToPartialState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Disables using PageStateManager for getting state."),(0,i.kt)("h4",{id:"returns-17"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L239"},"packages/core/src/extension/Extension.ts:239")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"switchtostatemanager"},"switchToStateManager"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"switchToStateManager"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Enables using PageStateManager for getting state."),(0,i.kt)("h4",{id:"returns-18"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L232"},"packages/core/src/extension/Extension.ts:232")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"update"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"prevParams?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,i.kt)("p",null,"Callback for updating the extension after a route update. This method\nis invoked if the current route has the ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyUpdate")," flag set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and\nthe current controller and view match those used by the previously active\nroute, or, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyUpdate")," option of the current route is a callback and\nreturned ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"The method must return an object with the same semantics as the result\nof the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#load"},"load")," method. The controller's state will then be\npatched by the returned object."),(0,i.kt)("p",null,"The other extension lifecycle callbacks (",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#init"},"init"),",\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#load"},"load"),", ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#activate"},"activate"),",\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Extension#deactivate"},"deactivate"),", Extension#deinit) are not call in\ncase this method is used."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prevParams")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"R")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Previous route parameters.")))),(0,i.kt)("h4",{id:"returns-19"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,i.kt)("p",null,"A map object of promises resolved when all resources the controller\nrequires are ready. The resolved values will be pushed to the\ncontroller's state."),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/core/src/extension/Extension.ts#L136"},"packages/core/src/extension/Extension.ts:136")))}c.isMDXComponent=!0}}]);