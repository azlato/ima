"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5474],{9397:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devtools-options-hooks-2fdd2fd693c5d19a2fa51324203dfb48.png"},5788:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devtools-options-presets-56585f5bb82b8f0ae6ae7a76eab8fc76.png"},1879:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devtools-options-97fb2793e7e2266935451949a7cc0b28.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(5773),a=(n(7294),n(3905));const r={title:"Options",description:"Devtools > Available options and customization"},i=void 0,l={unversionedId:"devtools/devtools-options",id:"devtools/devtools-options",title:"Options",description:"Devtools > Available options and customization",source:"@site/../docs/devtools/devtools-options.md",sourceDirName:"devtools",slug:"/devtools/devtools-options",permalink:"/devtools/devtools-options",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/devtools/devtools-options.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1708954194,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"Options",description:"Devtools > Available options and customization"},sidebar:"docs",previous:{title:"UI & Controls",permalink:"/devtools/devtools-ui"},next:{title:"Migration 0.14.0",permalink:"/migration/migration-0.14.0"}},s={},p=[{value:"Quick UI overview",id:"quick-ui-overview",level:2},{value:"Presets modal window",id:"presets-modal-window",level:3},{value:"Hooks",id:"hooks",level:2},{value:"Available API",id:"available-api",level:3},{value:"1. <code>aop(target, pattern)</code>",id:"1-aoptarget-pattern",level:4},{value:"2. <code>createHook(name, regular, callback)</code>",id:"2-createhookname-regular-callback",level:4},{value:"3. <code>emit(identifier, meta, options, overrides = {})</code>",id:"3-emitidentifier-meta-options-overrides--",level:4},{value:"4. <code>importIMAClass(path, module);</code>",id:"4-importimaclasspath-module",level:4},{value:"Message colors",id:"message-colors",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1879).Z,width:"1017",height:"701"})),(0,a.kt)("p",null,"As we've already talked about in ",(0,a.kt)("a",{parentName:"p",href:"./devtools-introduction"},"the introduction section"),", the devtools\nuse special devtools script which defines which parts of IMA.js application should send messages about\ntheir activity to the IMA.js devtool panel. This code can be easily customized through the extension's options page."),(0,a.kt)("p",null,"You can get to this page either by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Settings button")," in the devtool panel itself (",(0,a.kt)("em",{parentName:"p"},'hidden behind the\n"three dots" menu button'),') or by mouse-right clicking on the extension icon in chrome toolbar\nand choosing the "Options" button.'),(0,a.kt)("h2",{id:"quick-ui-overview"},"Quick UI overview"),(0,a.kt)("p",null,"Main concept of the options is that you can create multiple ",(0,a.kt)("strong",{parentName:"p"},"presets"),", where each preset contains a set of ",(0,a.kt)("strong",{parentName:"p"},"hooks")," -\nthese are snippets of JavaScript code, that define which parts of IMA.js app should be wrapped in previously mentioned\n",(0,a.kt)("a",{parentName:"p",href:"/devtools/devtools-introduction#devtools-script"},"proxies"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Don't forget to always save your changes after doing any changes, otherwise the changes won't propagate.")),(0,a.kt)("h3",{id:"presets-modal-window"},"Presets modal window"),(0,a.kt)("p",null,"You can create multiple presets or edit existing ones by clicking on the ",(0,a.kt)("strong",{parentName:"p"},'"Load or Create Preset"')," button, where\nyou're presented with Presets modal window. Selected presets are ",(0,a.kt)("strong",{parentName:"p"},"marked bold"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5788).Z,width:"801",height:"258"})),(0,a.kt)("p",null,"Notice that there's already a ",(0,a.kt)("strong",{parentName:"p"},"Default")," preset, which is not editable (but can be copied!). This preset\nis read-only and you can't edit it directly. This is so in the future we can safely update the default detection script\nwithout a need to worry about breaking your own code."),(0,a.kt)("p",null,"To create new preset or edit the default one, start by creating a blank preset by clicking on the ",(0,a.kt)("strong",{parentName:"p"},'"Create Preset"'),"\nbutton, or copy exiting one using the duplicate icon."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Changes to the presets are saved after closing the modal window.")),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9397).Z,width:"917",height:"866"})),(0,a.kt)("p",null,"Each hook can be individually ",(0,a.kt)("strong",{parentName:"p"},"enabled/disabled")," and has it's own name, description and code. First three are pretty\nself explanatory so we'll talk mostly about the ",(0,a.kt)("strong",{parentName:"p"},"code")," and available API."),(0,a.kt)("p",null,"First thing you need to understand is, that all hooks that are enabled, in whole active preset are concatenated and\nbasically copy & pasted into the devtools code, so they're part of the devtools code itself. This means that if you\nhave any error in any hook, ",(0,a.kt)("strong",{parentName:"p"},"it can prevent the extension from working correctly"),". To minimize the size of the extension\nbundle and for the simplicity sake we don't include any syntax validation in the UI, so please keep mind on that."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," As this code is injected to every web page with IMA.js present, you can use chrome devtools and it's debugger\nto debug and fix any potential issues with your hook's code.")),(0,a.kt)("h3",{id:"available-api"},"Available API"),(0,a.kt)("p",null,"There are mainly ",(0,a.kt)("strong",{parentName:"p"},"three functions")," that you can (and probably will) use in your hooks:"),(0,a.kt)("h4",{id:"1-aoptarget-pattern"},"1. ",(0,a.kt)("inlineCode",{parentName:"h4"},"aop(target, pattern)")),(0,a.kt)("p",null,"This is the main hooks function, which defines which ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," should be wrapped in what proxy, defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," ",(0,a.kt)("strong",{parentName:"li"},"{Class}")," - JavaScript class/object constructor that is wrapped in proxy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern")," ",(0,a.kt)("strong",{parentName:"li"},"{object}")," - result of ",(0,a.kt)("inlineCode",{parentName:"li"},"createHook")," function.")),(0,a.kt)("h4",{id:"2-createhookname-regular-callback"},"2. ",(0,a.kt)("inlineCode",{parentName:"h4"},"createHook(name, regular, callback)")),(0,a.kt)("p",null,"Helper function that defines proxies on methods that match ",(0,a.kt)("inlineCode",{parentName:"p"},"regular")," regular expression. It's essentially used\nin the ",(0,a.kt)("strong",{parentName:"p"},"second argument")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"aop()")," function."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ",(0,a.kt)("strong",{parentName:"li"},"{hookName}")," - defines when the proxy content should be executed (e.g. event message sent to devtools)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"regular")," ",(0,a.kt)("strong",{parentName:"li"},"{(string","|","function","|","RegExp)}")," - string or regexp that defines method names which should be wrapped in\nproxy or a function that returns true for given metadata."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback")," ",(0,a.kt)("strong",{parentName:"li"},"{function}")," - callback that is executed, when proxy is called. Receives ",(0,a.kt)("inlineCode",{parentName:"li"},"meta")," object as an argument.")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"hookName")," is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const hookName = Object.freeze({\n  beforeMethod: 'beforeMethod',\n  afterMethod: 'afterMethod',\n  aroundMethod: 'aroundMethod',\n  beforeGetter: 'beforeGetter',\n  afterGetter: 'afterGetter',\n  aroundGetter: 'aroundGetter',\n  beforeSetter: 'beforeSetter',\n  afterSetter: 'afterSetter',\n  aroundSetter: 'aroundSetter'\n});\n")),(0,a.kt)("h4",{id:"3-emitidentifier-meta-options-overrides--"},"3. ",(0,a.kt)("inlineCode",{parentName:"h4"},"emit(identifier, meta, options, overrides = {})")),(0,a.kt)("p",null,"Helper function that sends passed in data to the devtools panel, while doing some pre-processing so the data\ncan be displayed properly. It is used ",(0,a.kt)("strong",{parentName:"p"},"at the end of ",(0,a.kt)("inlineCode",{parentName:"strong"},"createHook")," callback function"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identifier")," ",(0,a.kt)("strong",{parentName:"li"},"{string}")," - name identifying sent message displayed in devtool panel.\nBy default it corresponds to the name of the wrapped class, but it can be overridden in the ",(0,a.kt)("inlineCode",{parentName:"li"},"options"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"meta")," ",(0,a.kt)("strong",{parentName:"li"},"{object}")," - metadata describing received event. They're automatically created as a callback parameter\nin the ",(0,a.kt)("inlineCode",{parentName:"li"},"createHook")," function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ",(0,a.kt)("strong",{parentName:"li"},"{object}")," - additional options passed into the event payload. Currently only ",(0,a.kt)("inlineCode",{parentName:"li"},"{ color: 'color' }")," is supported\n(for available colors, see below)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"overrides"),"  ",(0,a.kt)("strong",{parentName:"li"},"{object}")," - optional object with overrides, that is merged with the ",(0,a.kt)("inlineCode",{parentName:"li"},"meta")," sent in second argument.")),(0,a.kt)("h4",{id:"4-importimaclasspath-module"},"4. ",(0,a.kt)("inlineCode",{parentName:"h4"},"importIMAClass(path, module);")),(0,a.kt)("p",null,"Utility function, used to import modules from ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.Loader.modules"),", that can be used in creating your own\ncustom hooks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," ",(0,a.kt)("strong",{parentName:"li"},"{string}")," - corresponds to absolute path to application's class from the ",(0,a.kt)("inlineCode",{parentName:"li"},"/app")," directory. Or a package name\nin case of npm package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module")," ",(0,a.kt)("strong",{parentName:"li"},"{?string}")," - used for named exports, can be left blank in case of default exports.")),(0,a.kt)("h3",{id:"message-colors"},"Message colors"),(0,a.kt)("p",null,"Currently there are 13 colors (we're using the ",(0,a.kt)("a",{parentName:"p",href:"https://yeun.github.io/open-color/"},"Open Color")," color scheme),\nthat you can use to differentiate each hook with:"),(0,a.kt)("table",{class:"table is-bordered"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Color"))),(0,a.kt)("tbody",null)),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"You should by ok with the ",(0,a.kt)("strong",{parentName:"p"},"default preset")," for most cases but in case you head into defining a custom one, here are\nsome notes on this matter."),(0,a.kt)("p",null,"Defining ",(0,a.kt)("strong",{parentName:"p"},"custom hooks")," requires some more knowledge into the devtools that you can get by studying the devtool script to see how things work. We suggest to start by customizing the default set, changing few rules or splitting\nexisting hooks into more smaller ones, before heading in and defining whole new preset."))}u.isMDXComponent=!0}}]);