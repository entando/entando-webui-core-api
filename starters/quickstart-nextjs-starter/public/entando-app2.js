System.register(["react","react-dom"],(function(e,t){var r={},n={};return{setters:[function(e){r.default=e.default},function(e){n.default=e.default}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){const r=document.createElement("a");r.href=e;const n="/"===r.pathname[0]?r.pathname:"/"+r.pathname;let o=0,a=n.length;for(;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);const c=n.slice(0,a+1);return r.protocol+"//"+r.host+c};Number.isInteger},297:e=>{"use strict";e.exports=r},268:e=>{"use strict";e.exports=n}},o={};function a(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.y=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var c={};return(0,a(722).s)(1),(()=>{"use strict";a.r(c),a.d(c,{bootstrap:()=>b,mount:()=>g,myParcel:()=>h,unmount:()=>v});var e=a(297),t=a(268);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=null;try{u=require("react").createContext()}catch(r){}var s={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{}};function p(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function l(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=y(e,t),c=function(e,t){var r=e(t);if(!r)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return r}(o,t);f({elementToRender:a,domElement:c,whenFinished:function(){r(this)},opts:e}),e.domElements[t.name]=c}))}function m(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function d(e,t){return new Promise((function(r,n){f({elementToRender:y(e,t),domElement:e.domElements[t.name],whenFinished:function(){r(this)},opts:e})}))}function f(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o=e.whenFinished;return["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(t.renderType)>=0?t.ReactDOM[t.renderType](n).render(r,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(r,n,o):t.ReactDOM.render(r,n,o)}function y(e,t){var r=e.React.createElement(e.rootComponent,t),n=u?e.React.createElement(u.Provider,{value:t},r):r;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(r){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(r.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(e),n=e.React.createElement(e.errorBoundaryClass,t,n)),n}var h=function(e){if("object"!==r(e))throw new Error("single-spa-react requires a configuration object");var t=i(i({},s),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&t.React.createContext&&(u=t.React.createContext());var n={bootstrap:p.bind(null,t),mount:l.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(n.update=d.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(t){var r=t.echo;return e.default.createElement("span",null,r)},errorBoundary:function(t,r,n){return e.default.createElement("div",null,"This renders when a catastrophic error occurs")}}),b=h.bootstrap,g=h.mount,v=h.unmount})(),c})())}}}));
//# sourceMappingURL=entando-app2.js.map