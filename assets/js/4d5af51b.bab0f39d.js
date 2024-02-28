"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=i,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(5773),i=(a(7294),a(3905));const r={id:"ima_plugin_cli",title:"Module: @ima/plugin-cli",sidebar_label:"@ima/plugin-cli",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/modules/ima_plugin_cli",id:"api/modules/ima_plugin_cli",title:"Module: @ima/plugin-cli",description:"Interfaces",source:"@site/../docs/api/modules/ima_plugin_cli.md",sourceDirName:"api/modules",slug:"/api/modules/ima_plugin_cli",permalink:"/api/modules/ima_plugin_cli",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ima_plugin_cli",title:"Module: @ima/plugin-cli",sidebar_label:"@ima/plugin-cli",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"@ima/dev-utils",permalink:"/api/modules/ima_dev_utils"},next:{title:"@ima/react-page-renderer",permalink:"/api/modules/ima_react_page_renderer"}},o={},m=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Command",id:"command",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Plugin",id:"plugin",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"Transformer",id:"transformer",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"TransformerOptions",id:"transformeroptions",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Variables",id:"variables",level:2},{value:"clientServerConfig",id:"clientserverconfig",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"defaultConfig",id:"defaultconfig",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"nodeConfig",id:"nodeconfig",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Functions",id:"functions",level:2},{value:"preprocessTransformer",id:"preprocesstransformer",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"swcTransformer",id:"swctransformer",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"typescriptDeclarationsPlugin",id:"typescriptdeclarationsplugin",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-9",level:4}],s={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/ima_plugin_cli.Context"},"Context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/ima_plugin_cli.ImaPluginConfig"},"ImaPluginConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/ima_plugin_cli.PipeContext"},"PipeContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/ima_plugin_cli.Source"},"Source"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"command"},"Command"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Command"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"dev"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"link"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/types.ts#L16"},"types.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Plugin"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Context"},(0,i.kt)("inlineCode",{parentName:"a"},"Context")),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/interfaces/ima_plugin_cli.Context"},(0,i.kt)("inlineCode",{parentName:"a"},"Context")))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/types.ts#L69"},"types.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transformer"},"Transformer"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Transformer"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"{\n  source,\n  context,\n}"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.PipeContext"},(0,i.kt)("inlineCode",{parentName:"a"},"PipeContext"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source")),"  }) => ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source")),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"{\n  source,\n  context,\n}"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source")),">"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type")))),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"{\n  source,\n  context,\n}")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"{\n  source,\n  context,\n}.context")," | ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.PipeContext"},(0,i.kt)("inlineCode",{parentName:"a"},"PipeContext"))," |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"{\n  source,\n  context,\n}.source")," | ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source"))," |"),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.Source"},(0,i.kt)("inlineCode",{parentName:"a"},"Source")),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/types.ts#L4"},"types.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transformeroptions"},"TransformerOptions"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"TransformerOptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"test")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RegExp"))))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/types.ts#L11"},"types.ts:11")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"clientserverconfig"},"clientServerConfig"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"clientServerConfig"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.ImaPluginConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ImaPluginConfig"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/utils/configurations.ts#L42"},"utils/configurations.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultconfig"},"defaultConfig"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"defaultConfig"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.ImaPluginConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ImaPluginConfig"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/utils/configurations.ts#L6"},"utils/configurations.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nodeconfig"},"nodeConfig"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"nodeConfig"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_plugin_cli.ImaPluginConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ImaPluginConfig"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/utils/configurations.ts#L70"},"utils/configurations.ts:70")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"preprocesstransformer"},"preprocessTransformer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"preprocessTransformer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#transformer"},(0,i.kt)("inlineCode",{parentName:"a"},"Transformer"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PreprocessTransformerOptions"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#transformer"},(0,i.kt)("inlineCode",{parentName:"a"},"Transformer"))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/transformers/preprocessTransformer.ts#L11"},"transformers/preprocessTransformer.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"swctransformer"},"swcTransformer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"swcTransformer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#transformer"},(0,i.kt)("inlineCode",{parentName:"a"},"Transformer"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Options"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#transformer"},(0,i.kt)("inlineCode",{parentName:"a"},"Transformer"))),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/transformers/swcTransformer.ts#L59"},"transformers/swcTransformer.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typescriptdeclarationsplugin"},"typescriptDeclarationsPlugin"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"typescriptDeclarationsPlugin"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"Plugin"))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TypescriptDeclarationsPluginOptions"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"Plugin"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azlato/ima/blob/acb479b/packages/plugin-cli/src/plugins/typescriptDeclarationsPlugin.ts#L28"},"plugins/typescriptDeclarationsPlugin.ts:28")))}u.isMDXComponent=!0}}]);