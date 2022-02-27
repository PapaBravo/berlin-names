var BerlinNames;(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".search-container input[type=text] {\n    padding: 6px;\n    margin-top: 8px;\n    font-size: 17px;\n    border: none;\n}\n\n.search-container button {\n    float: right;\n    padding: 6px;\n    margin-top: 8px;\n    margin-right: 16px;\n    background: #ddd;\n    font-size: 17px;\n    border: none;\n    cursor: pointer;\n}\n\n.search-container button:hover {\n    background: #ccc;\n}",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},891:function(e){e.exports=(()=>{"use strict";var e={870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>o,expose:()=>u,proxy:()=>g,proxyMarker:()=>r,releaseProxy:()=>a,transfer:()=>v,transferHandlers:()=>c,windowEndpoint:()=>y,wrap:()=>p});const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>s(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return u(e,t),[n,[n]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:o,type:a,path:s}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(w);let p;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),n=s.reduce(((e,t)=>e[t]),e);switch(a){case 0:p=n;break;case 1:t[s.slice(-1)[0]]=w(r.data.value),p=!0;break;case 2:p=n.apply(t,c);break;case 3:p=g(new n(...c));break;case 4:{const{port1:t,port2:n}=new MessageChannel;u(e,n),p=v(t,[t])}break;case 5:p=void 0}}catch(e){p={value:e,[i]:0}}Promise.resolve(p).catch((e=>({value:e,[i]:0}))).then((e=>{const[r,i]=b(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),i),5===a&&(t.removeEventListener("message",n),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return f(e,[],t)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(n,o){if(d(r),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{l(e),r=!0}));if("then"===o){if(0===t.length)return{then:()=>i};const n=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return f(e,[...t,o])},set(n,o,a){d(r);const[i,s]=b(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:i},s).then(w)},apply(n,a,i){d(r);const s=t[t.length-1];if(s===o)return E(e,{type:4}).then(w);if("bind"===s)return f(e,t.slice(0,-1));const[c,u]=m(i);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},u).then(w)},construct(n,o){d(r);const[a,i]=m(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},i).then(w)}});return i}function m(e){const t=e.map(b);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function v(e,t){return h.set(e,t),e}function g(e){return Object.assign(e,{[r]:!0})}function y(e,t=self,n="*"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;const i=a(n(870));async function s(e){if(e.data&&"eval"===e.data.action){const t=new Int32Array(e.data.notify,0,2),n=new Uint8Array(e.data.notify,8);let r;try{r={ok:await l(e.data.request)}}catch(t){console.error("worker request error",e.data.request,t),r={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(r));n.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if("BODY"===e.tagName)return"body";const t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let n=1,r=e;for(;r.previousElementSibling;)r=r.previousElementSibling,n++;t.unshift(e.tagName.toLowerCase()+":nth-child("+n+")")}e=e.parentElement}return t.join(" > ")}function u(e){return Object.keys(e)}async function l(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const n={};for(const r of e.columns)"selector"===r?n.selector=c(t):"parent"===r?t.parentElement&&(n.parent=t.parentElement?c(t.parentElement):null):"idx"===r||(n[r]=t[r]);return n}));if("insert"===e.type){if(!e.value.parent)throw Error('"parent" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const n=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");const r=document.createElement(e.value.tagName);for(const t of u(e.value))if(null!==e.value[t]){if("tagName"===t||"parent"===t)continue;if("idx"===t||"selector"===t)throw Error(`${t} can't be set`);r[t]=e.value[t]}return n.appendChild(r),null}if("update"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const n=[];for(const r of u(e.value)){const o=e.value[r];if("parent"!==r){if("idx"!==r&&"selector"!==r&&o!==t[r]){if(console.log("SETTING ",r,t[r],"->",o),"tagName"===r)throw Error("can't change tagName");n.push(r)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const r of n)t[r]=e.value[r];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,n){const r=new Worker(t),o=i.wrap(r),a=await o.SplitFileHttpDatabase(n,e);return r.addEventListener("message",s),{db:a,worker:o,configs:e}}},432:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(162),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(432)})()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},611:(e,t,n)=>{"use strict";e.exports=n.p+"c74ad46623e4ee643959.wasm"},421:(e,t,n)=>{"use strict";e.exports=n.p+"03e1cd6585d66bccd5ba.js"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href;var r={};(()=>{"use strict";n.r(r),n.d(r,{executeQuery:()=>w});var e=n(891),t=n(379),o=n.n(t),a=n(795),i=n.n(a),s=n(569),c=n.n(s),u=n(565),l=n.n(u),p=n(216),d=n.n(p),f=n(589),m=n.n(f),h=n(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const g=new URL(n(421),n.b),y=new URL(n(611),n.b);let b;async function w(){const e=document.getElementById("input_query").value,t=await b.db.query(e);console.log(t)}!async function(){b=await(0,e.createDbWorker)([{from:"inline",config:{serverMode:"full",url:"db.sqlite",requestChunkSize:4096}}],g.toString(),y.toString()),await async function(){const e=document.getElementById("database_description"),t=document.createElement("table");t.innerHTML=[{name:"id",type:"INTEGER"},{name:"vorname",type:"TEXT"},{name:"anzahl",type:"INTEGER"},{name:"geschlecht",type:"TEXT"},{name:"position",type:"INTEGER"},{name:"jahr",type:"INTEGER"},{name:"bezirk",type:"TEXT"}].map((e=>`<tr><td>${e.name}</td><td>${e.type}</td></tr>`)).join("\n"),e?.appendChild(t);const n=document.createElement("div");n.innerHTML=["charlottenburg-wilmersdorf","friedrichshain-kreuzberg","lichtenberg","marzahn-hellersdorf","mitte","neukoelln","pankow","reinickendorf","spandau","standesamt_i","steglitz-zehlendorf","tempelhof-schoeneberg","treptow-koepenick"].join(", "),e?.appendChild(n)}()}()})(),BerlinNames=r})();