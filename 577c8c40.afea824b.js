(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(118)),i={id:"plugins",title:"Plugins",sidebar_label:"Plugins",slug:"/api-reference/plugins"},c={unversionedId:"api-reference/plugins",id:"api-reference/plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins provide the possibility to extend Rematch functionality. They can overwrite configuration, add new models or even replace the whole store. To get the idea how to build plugins, you can visit plugins section and refer to the source code of each plugin built by the Rematch team.",source:"@site/../docs/api-reference/plugins.md",slug:"/api-reference/plugins",permalink:"/docs/api-reference/plugins",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/plugins.md",version:"current",sidebar_label:"Plugins",sidebar:"docs",previous:{title:"Store",permalink:"/docs/api-reference/store"},next:{title:"Introduction",permalink:"/docs/plugins/"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Example of plugins implementation:",id:"example-of-plugins-implementation",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Plugins provide the possibility to extend Rematch functionality. They can overwrite configuration, add new models or even replace the whole store. To get the idea how to build plugins, you can visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/"}),"plugins")," section and refer to the source code of each plugin built by the Rematch team."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Plugin is an object that can contain the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"config"),"]"," (",Object(o.b)("em",{parentName:"p"},"{models, redux}"),"): object with two properties - ",Object(o.b)("inlineCode",{parentName:"p"},"models")," and ",Object(o.b)("inlineCode",{parentName:"p"},"redux"),". They allow to add additional models to the store with a plugin and overwrite redux configuration. The shape of these properties is the same as accepted by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/#initconfig"}),"init")," method. Refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"models"}),"Models")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"redux"}),"Redux")," documentation for details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"exposed"),"]"," (",Object(o.b)("em",{parentName:"p"},"{","[string]",": ((rematchStore, ...args) => any) | object}"),"): it allows to assign extra properties to the store for communication between plugins as it is executed before ",Object(o.b)("em",{parentName:"p"},"onModel")," and ",Object(o.b)("em",{parentName:"p"},"onStoreCreated")," hooks. It must be either an object or a function accepting Rematch store and returning a value.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"createMiddleware"),"]"," (",Object(o.b)("em",{parentName:"p"},"(bag) => Redux.Middleware"),"): used for creating custom middleware that needs access to Rematch internals available in the Rematch 'bag'. If you don't need to access 'bag', you can also put middleware in ",Object(o.b)("inlineCode",{parentName:"p"},"config.redux.middlewares")," as described in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"redux"}),"Redux"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"onReducer"),"]"," (",Object(o.b)("em",{parentName:"p"},"(reducer, modelName, bag) => reducer | void"),"): executed when a ",Object(o.b)("em",{parentName:"p"},"base reducer")," is created for a model. It can return a new reducer, in which case it will overwrite the one created by Rematch.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"onRootReducer"),"]"," (",Object(o.b)("em",{parentName:"p"},"(reducer, bag) => reducer | void"),"): executed when a ",Object(o.b)("em",{parentName:"p"},"root reducer")," is created for the store. It can return a new root reducer, in which case it will overwrite the one created by Rematch.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"onModel"),"]"," (",Object(o.b)("em",{parentName:"p"},"(namedModel, rematchStore) => void"),"): when the whole setup for models is completed - reducers and dispatchers are ready, ",Object(o.b)("inlineCode",{parentName:"p"},"onModel")," hook is executed for each model. It is also executed every time a model is added dynamically to the store. It can be used to collect information about models' reducers and effects, to overwrite them or create new properties.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"[",Object(o.b)("inlineCode",{parentName:"p"},"onStoreCreated"),"]"," (",Object(o.b)("em",{parentName:"p"},"(rematchStore, bag) => rematchStore | void"),"): the last hook, runs at the end when Rematch Store is ready. It can return a new store, in which case it will overwrite the one created by Rematch. Usually, it is used to add extra properties or functions to the store. If you choose to do this with a plugin with TypeScript, be sure to update your stores typings."))),Object(o.b)("h3",{id:"example-of-plugins-implementation"},"Example of plugins implementation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const plugin = {\n    config: {\n        redux: {\n            combineReducers: customCombineReducers,\n        },\n        models: {\n          extra: extraModel,\n        },\n    },\n    expose: { select: {} },\n    createMiddleware: bag => next => action => {\n        // do something here\n        return next(action)\n    },\n    onReducer(reducer, modelName, bag) {\n      // do something\n    },\n    onRootReducer(reducer, bag) {\n      // do something\n    },\n    onModel(namedModel, rematchStore) {\n      // do something\n    },\n    onStoreCreated(rematchStore, bag) {\n      // do something\n    },\n}\n")),Object(o.b)("p",null,"You can look at our official plugins to check examples to start with."))}d.isMDXComponent=!0}}]);