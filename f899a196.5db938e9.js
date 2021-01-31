(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(118)),i={id:"from-redux",title:"From Redux to Rematch",sidebar_label:"From Redux to Rematch",slug:"/migrating-from-redux-to-rematch"},c={unversionedId:"migrating/from-redux",id:"migrating/from-redux",isDocsHomePage:!1,title:"From Redux to Rematch",description:"Moving from Redux to Rematch involves very few steps.",source:"@site/../docs/migrating/from-redux.md",slug:"/migrating-from-redux-to-rematch",permalink:"/docs/migrating-from-redux-to-rematch",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/migrating/from-redux.md",version:"current",sidebar_label:"From Redux to Rematch",sidebar:"docs",previous:{title:"Redux Plugins",permalink:"/docs/recipes/redux-plugins/"},next:{title:"From v1 to v2",permalink:"/docs/migrating-v1-to-v2"}},s=[{value:"1. Setup Rematch <code>init</code> with Redux",id:"1-setup-rematch-init-with-redux",children:[]},{value:"2. Mix reducers &amp; models",id:"2-mix-reducers--models",children:[]}],u={toc:s};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Moving from Redux to Rematch involves very few steps."),Object(o.b)("h3",{id:"1-setup-rematch-init-with-redux"},"1. Setup Rematch ",Object(o.b)("inlineCode",{parentName:"h3"},"init")," with Redux"),Object(o.b)("p",null,"Imagine a simple app than increments a value in a redux store written in React."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport ReactDOM from "react-dom";\nimport { init } from "@rematch/core";\nimport { Provider } from "react-redux";\nimport thunk from "redux-thunk";\n\nimport sharks from "./redux/sharks";\nimport App from "./App";\n\n// generate Redux store\nconst store = init({\n  redux: {\n    reducers: {\n      sharks,\n    },\n    middlewares: [thunk]\n  },\n});\n\nconst Root = () => (\n  <Provider store={store}>\n    <App />\n  </Provider>\n);\n\nReactDOM.render(<Root />, document.querySelector(\'#root\'));\n')),Object(o.b)("h3",{id:"2-mix-reducers--models"},"2. Mix reducers & models"),Object(o.b)("p",null,"Our currently ",Object(o.b)("inlineCode",{parentName:"p"},"Redux")," reducers are currently like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const INCREMENT = "sharks/increment";\n\nexport const incrementSharks = (payload) => ({\n  type: INCREMENT,\n  payload,\n});\n\nexport default (state = 0, action) => {\n  switch(action.type) {\n    case INCREMENT:\n      return state + action.payload;\n    default:\n      return state;\n  }\n};\n')),Object(o.b)("p",null,"But now we'll move them to Rematch Models, create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"/models/sharks.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export default {\n  state: 0,\n  reducers: {\n    increment: (state, payload) => state + payload\n  }\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Both snippets (Redux one and Rematch Model) are equivalent."))),Object(o.b)("p",null,"Now, add it to your ",Object(o.b)("inlineCode",{parentName:"p"},"init()")," method and remove ",Object(o.b)("inlineCode",{parentName:"p"},"redux-thunk")," because isn't required with Rematch:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = init({\n  models: {\n    sharks,\n  }\n});\n")),Object(o.b)("p",null,"Views probably will work out of the box, because we're compatible with ",Object(o.b)("inlineCode",{parentName:"p"},"react-redux"),"."),Object(o.b)("p",null,"Enjoy your refactored code-base :)"))}m.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||l[p]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);