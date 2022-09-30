function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=i.parcelRequire3143;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},i.parcelRequire3143=o),o.register("bRlFp",(function(t,e){var i=o("2bBga"),n=o("djt5d"),r=o("6zSb1"),s=o("d0EKm");var a=function t(e){var o=new r(e),a=n(r.prototype.request,o);return i.extend(a,r.prototype,o),i.extend(a,o),a.create=function(i){return t(s(e,i))},a}(o("hqlPG"));a.Axios=r,a.CanceledError=o("83xK9"),a.CancelToken=o("2sjhC"),a.isCancel=o("ksuZT"),a.VERSION=o("50GW0").version,a.toFormData=o("aewVa"),a.AxiosError=o("121rJ"),a.Cancel=a.CanceledError,a.all=function(t){return Promise.all(t)},a.spread=o("av9gA"),a.isAxiosError=o("gNhGc"),t.exports=a,t.exports.default=a})),o.register("2bBga",(function(t,e){var i,n=o("djt5d"),r=Object.prototype.toString,s=(i=Object.create(null),function(t){var e=r.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())});function a(t){return t=t.toLowerCase(),function(e){return s(e)===t}}function l(t){return Array.isArray(t)}function c(t){return void 0===t}var u=a("ArrayBuffer");function h(t){return null!==t&&"object"==typeof t}function f(t){if("object"!==s(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var d=a("Date"),p=a("File"),m=a("Blob"),g=a("FileList");function y(t){return"[object Function]"===r.call(t)}var b=a("URLSearchParams");function v(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),l(t))for(var i=0,n=t.length;i<n;i++)e.call(null,t[i],i,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}var w,x=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(t){return w&&t instanceof w});t.exports={isArray:l,isArrayBuffer:u,isBuffer:function(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){var e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||r.call(t)===e||y(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:h,isPlainObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:m,isFunction:y,isStream:function(t){return h(t)&&y(t.pipe)},isURLSearchParams:b,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:v,merge:function t(){var e={};function i(i,n){f(e[n])&&f(i)?e[n]=t(e[n],i):f(i)?e[n]=t({},i):l(i)?e[n]=i.slice():e[n]=i}for(var n=0,r=arguments.length;n<r;n++)v(arguments[n],i);return e},extend:function(t,e,i){return v(e,(function(e,r){t[r]=i&&"function"==typeof e?n(e,i):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,i,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,i&&Object.assign(t.prototype,i)},toFlatObject:function(t,e,i){var n,r,o,s={};e=e||{};do{for(r=(n=Object.getOwnPropertyNames(t)).length;r-- >0;)s[o=n[r]]||(e[o]=t[o],s[o]=!0);t=Object.getPrototypeOf(t)}while(t&&(!i||i(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:a,endsWith:function(t,e,i){t=String(t),(void 0===i||i>t.length)&&(i=t.length),i-=e.length;var n=t.indexOf(e,i);return-1!==n&&n===i},toArray:function(t){if(!t)return null;var e=t.length;if(c(e))return null;for(var i=new Array(e);e-- >0;)i[e]=t[e];return i},isTypedArray:x,isFileList:g}})),o.register("djt5d",(function(t,e){t.exports=function(t,e){return function(){for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];return t.apply(e,i)}}})),o.register("6zSb1",(function(t,e){var i=o("2bBga"),n=o("2RNjJ"),r=o("5Dm7L"),s=o("eQ5d8"),a=o("d0EKm"),l=o("1ZTQa"),c=o("6zj0X"),u=c.validators;function h(t){this.defaults=t,this.interceptors={request:new r,response:new r}}h.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var i=e.transitional;void 0!==i&&c.assertOptions(i,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,l=[];if(this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)})),!r){var h=[s,void 0];for(Array.prototype.unshift.apply(h,n),h=h.concat(l),o=Promise.resolve(e);h.length;)o=o.then(h.shift(),h.shift());return o}for(var f=e;n.length;){var d=n.shift(),p=n.shift();try{f=d(f)}catch(t){p(t);break}}try{o=s(f)}catch(t){return Promise.reject(t)}for(;l.length;)o=o.then(l.shift(),l.shift());return o},h.prototype.getUri=function(t){t=a(this.defaults,t);var e=l(t.baseURL,t.url);return n(e,t.params,t.paramsSerializer)},i.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,i){return this.request(a(i||{},{method:t,url:e,data:(i||{}).data}))}})),i.forEach(["post","put","patch"],(function(t){function e(e){return function(i,n,r){return this.request(a(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:i,data:n}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)})),t.exports=h})),o.register("2RNjJ",(function(t,e){var i=o("2bBga");function n(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var o;if(r)o=r(e);else if(i.isURLSearchParams(e))o=e.toString();else{var s=[];i.forEach(e,(function(t,e){null!=t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,(function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))})))})),o=s.join("&")}if(o){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}})),o.register("5Dm7L",(function(t,e){var i=o("2bBga");function n(){this.handlers=[]}n.prototype.use=function(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){i.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=n})),o.register("eQ5d8",(function(t,e){var i=o("2bBga"),n=o("bhEpd"),r=o("ksuZT"),s=o("hqlPG"),a=o("83xK9");function l(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){return l(t),t.headers=t.headers||{},t.data=n.call(t,t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||s.adapter)(t).then((function(e){return l(t),e.data=n.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return r(e)||(l(t),e&&e.response&&(e.response.data=n.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}})),o.register("bhEpd",(function(t,e){var i=o("2bBga"),n=o("hqlPG");t.exports=function(t,e,r){var o=this||n;return i.forEach(r,(function(i){t=i.call(o,t,e)})),t}})),o.register("hqlPG",(function(t,e){var i=o("4TNnu"),n=o("2bBga"),r=o("i16eu"),s=o("121rJ"),a=o("2wfLM"),l=o("aewVa"),c={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var h,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==i&&"[object process]"===Object.prototype.toString.call(i))&&(h=o("9VVcb")),h),transformRequest:[function(t,e){if(r(e,"Accept"),r(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t))return t;if(n.isArrayBufferView(t))return t.buffer;if(n.isURLSearchParams(t))return u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var i,o=n.isObject(t),s=e&&e["Content-Type"];if((i=n.isFileList(t))||o&&"multipart/form-data"===s){var a=this.env&&this.env.FormData;return l(i?{"files[]":t}:t,a&&new a)}return o||"application/json"===s?(u(e,"application/json"),function(t,e,i){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(i||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||f.transitional,i=e&&e.silentJSONParsing,r=e&&e.forcedJSONParsing,o=!i&&"json"===this.responseType;if(o||r&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(o){if("SyntaxError"===t.name)throw s.from(t,s.ERR_BAD_RESPONSE,this,null,this.response);throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("1gvAv")},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){f.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){f.headers[t]=n.merge(c)})),t.exports=f})),o.register("4TNnu",(function(t,e){var i,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(i===setTimeout)return setTimeout(t,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(t){i=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var l,c=[],u=!1,h=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&d())}function d(){if(!u){var t=a(f);u=!0;for(var e=c.length;e;){for(l=c,c=[];++h<e;)l&&l[h].run();h=-1,e=c.length}l=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];c.push(new p(t,e)),1!==c.length||u||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),o.register("i16eu",(function(t,e){var i=o("2bBga");t.exports=function(t,e){i.forEach(t,(function(i,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=i,delete t[n])}))}})),o.register("121rJ",(function(t,e){var i=o("2bBga");function n(t,e,i,n,r){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),i&&(this.config=i),n&&(this.request=n),r&&(this.response=r)}i.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var r=n.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){s[t]={value:t}})),Object.defineProperties(n,s),Object.defineProperty(r,"isAxiosError",{value:!0}),n.from=function(t,e,o,s,a,l){var c=Object.create(r);return i.toFlatObject(t,c,(function(t){return t!==Error.prototype})),n.call(c,t.message,e,o,s,a),c.name=t.name,l&&Object.assign(c,l),c},t.exports=n})),o.register("2wfLM",(function(t,e){t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("aewVa",(function(t,e){var i=o("ihoyg").Buffer,n=o("2bBga");t.exports=function(t,e){e=e||new FormData;var r=[];function o(t){return null===t?"":n.isDate(t)?t.toISOString():n.isArrayBuffer(t)||n.isTypedArray(t)?"function"==typeof Blob?new Blob([t]):i.from(t):t}return function t(i,s){if(n.isPlainObject(i)||n.isArray(i)){if(-1!==r.indexOf(i))throw Error("Circular reference detected in "+s);r.push(i),n.forEach(i,(function(i,r){if(!n.isUndefined(i)){var a,l=s?s+"."+r:r;if(i&&!s&&"object"==typeof i)if(n.endsWith(r,"{}"))i=JSON.stringify(i);else if(n.endsWith(r,"[]")&&(a=n.toArray(i)))return void a.forEach((function(t){!n.isUndefined(t)&&e.append(l,o(t))}));t(i,l)}})),r.pop()}else e.append(s,o(i))}(t),e}})),o.register("ihoyg",(function(e,i){var n,r;t(e.exports,"Buffer",(function(){return n}),(function(t){return n=t})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(t){return r=t}));var s=o("hqZtu"),a=o("5WQj6");const l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;n=h,r=50;const c=2147483647;function u(t){if(t>c)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,i){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return f(t,e,i)}function f(t,e,i){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const i=0|b(t,e);let n=u(i);const r=n.write(t,e);r!==i&&(n=n.slice(0,r));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Q(t,Uint8Array)){const e=new Uint8Array(t);return g(e.buffer,e.byteOffset,e.byteLength)}return m(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Q(t,ArrayBuffer)||t&&Q(t.buffer,ArrayBuffer))return g(t,e,i);if("undefined"!=typeof SharedArrayBuffer&&(Q(t,SharedArrayBuffer)||t&&Q(t.buffer,SharedArrayBuffer)))return g(t,e,i);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return h.from(n,e,i);const r=function(t){if(h.isBuffer(t)){const e=0|y(t.length),i=u(e);return 0===i.length||t.copy(i,0,0,e),i}if(void 0!==t.length)return"number"!=typeof t.length||Z(t.length)?u(0):m(t);if("Buffer"===t.type&&Array.isArray(t.data))return m(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return d(t),u(t<0?0:0|y(t))}function m(t){const e=t.length<0?0:0|y(t.length),i=u(e);for(let n=0;n<e;n+=1)i[n]=255&t[n];return i}function g(t,e,i){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),Object.setPrototypeOf(n,h.prototype),n}function y(t){if(t>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|t}function b(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Q(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const i=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===i)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return J(t).length;default:if(r)return n?-1:$(t).length;e=(""+e).toLowerCase(),r=!0}}function v(t,e,i){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),i<=0)return"";if((i>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,i);case"utf8":case"utf-8":return C(this,e,i);case"ascii":return R(this,e,i);case"latin1":case"binary":return L(this,e,i);case"base64":return S(this,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,e,i);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,i){const n=t[e];t[e]=t[i],t[i]=n}function x(t,e,i,n,r){if(0===t.length)return-1;if("string"==typeof i?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),Z(i=+i)&&(i=r?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(r)return-1;i=t.length-1}else if(i<0){if(!r)return-1;i=0}if("string"==typeof e&&(e=h.from(e,n)),h.isBuffer(e))return 0===e.length?-1:k(t,e,i,n,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):k(t,[e],i,n,r);throw new TypeError("val must be string, number or Buffer")}function k(t,e,i,n,r){let o,s=1,a=t.length,l=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,i/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){let n=-1;for(o=i;o<a;o++)if(c(t,o)===c(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(i+l>a&&(i=a-l),o=i;o>=0;o--){let i=!0;for(let n=0;n<l;n++)if(c(t,o+n)!==c(e,n)){i=!1;break}if(i)return o}return-1}function I(t,e,i,n){i=Number(i)||0;const r=t.length-i;n?(n=Number(n))>r&&(n=r):n=r;const o=e.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(Z(n))return s;t[i+s]=n}return s}function E(t,e,i,n){return Y($(e,t.length-i),t,i,n)}function N(t,e,i,n){return Y(function(t){const e=[];for(let i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(e),t,i,n)}function T(t,e,i,n){return Y(J(e),t,i,n)}function A(t,e,i,n){return Y(function(t,e){let i,n,r;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)i=t.charCodeAt(s),n=i>>8,r=i%256,o.push(r),o.push(n);return o}(e,t.length-i),t,i,n)}function S(t,e,i){return 0===e&&i===t.length?s.fromByteArray(t):s.fromByteArray(t.slice(e,i))}function C(t,e,i){i=Math.min(t.length,i);const n=[];let r=e;for(;r<i;){const e=t[r];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(r+s<=i){let i,n,a,l;switch(s){case 1:e<128&&(o=e);break;case 2:i=t[r+1],128==(192&i)&&(l=(31&e)<<6|63&i,l>127&&(o=l));break;case 3:i=t[r+1],n=t[r+2],128==(192&i)&&128==(192&n)&&(l=(15&e)<<12|(63&i)<<6|63&n,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:i=t[r+1],n=t[r+2],a=t[r+3],128==(192&i)&&128==(192&n)&&128==(192&a)&&(l=(15&e)<<18|(63&i)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),r+=s}return function(t){const e=t.length;if(e<=_)return String.fromCharCode.apply(String,t);let i="",n=0;for(;n<e;)i+=String.fromCharCode.apply(String,t.slice(n,n+=_));return i}(n)}h.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,i){return f(t,e,i)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,i){return function(t,e,i){return d(t),t<=0?u(t):void 0!==e?"string"==typeof i?u(t).fill(e,i):u(t).fill(e):u(t)}(t,e,i)},h.allocUnsafe=function(t){return p(t)},h.allocUnsafeSlow=function(t){return p(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype},h.compare=function(t,e){if(Q(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),Q(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let i=t.length,n=e.length;for(let r=0,o=Math.min(i,n);r<o;++r)if(t[r]!==e[r]){i=t[r],n=e[r];break}return i<n?-1:n<i?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);let i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;const n=h.allocUnsafe(e);let r=0;for(i=0;i<t.length;++i){let e=t[i];if(Q(e,Uint8Array))r+e.length>n.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(n,r)):Uint8Array.prototype.set.call(n,e,r);else{if(!h.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,r)}r+=e.length}return n},h.byteLength=b,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},h.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?C(this,0,t):v.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="";const e=r;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(h.prototype[l]=h.prototype.inspect),h.prototype.compare=function(t,e,i,n,r){if(Q(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===n&&(n=0),void 0===r&&(r=this.length),e<0||i>t.length||n<0||r>this.length)throw new RangeError("out of range index");if(n>=r&&e>=i)return 0;if(n>=r)return-1;if(e>=i)return 1;if(this===t)return 0;let o=(r>>>=0)-(n>>>=0),s=(i>>>=0)-(e>>>=0);const a=Math.min(o,s),l=this.slice(n,r),c=t.slice(e,i);for(let t=0;t<a;++t)if(l[t]!==c[t]){o=l[t],s=c[t];break}return o<s?-1:s<o?1:0},h.prototype.includes=function(t,e,i){return-1!==this.indexOf(t,e,i)},h.prototype.indexOf=function(t,e,i){return x(this,t,e,i,!0)},h.prototype.lastIndexOf=function(t,e,i){return x(this,t,e,i,!1)},h.prototype.write=function(t,e,i,n){if(void 0===e)n="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)n=e,i=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(i)?(i>>>=0,void 0===n&&(n="utf8")):(n=i,i=void 0)}const r=this.length-e;if((void 0===i||i>r)&&(i=r),t.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return I(this,t,e,i);case"utf8":case"utf-8":return E(this,t,e,i);case"ascii":case"latin1":case"binary":return N(this,t,e,i);case"base64":return T(this,t,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,i);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const _=4096;function R(t,e,i){let n="";i=Math.min(t.length,i);for(let r=e;r<i;++r)n+=String.fromCharCode(127&t[r]);return n}function L(t,e,i){let n="";i=Math.min(t.length,i);for(let r=e;r<i;++r)n+=String.fromCharCode(t[r]);return n}function O(t,e,i){const n=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>n)&&(i=n);let r="";for(let n=e;n<i;++n)r+=tt[t[n]];return r}function D(t,e,i){const n=t.slice(e,i);let r="";for(let t=0;t<n.length-1;t+=2)r+=String.fromCharCode(n[t]+256*n[t+1]);return r}function M(t,e,i){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>i)throw new RangeError("Trying to access beyond buffer length")}function P(t,e,i,n,r,o){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<o)throw new RangeError('"value" argument is out of bounds');if(i+n>t.length)throw new RangeError("Index out of range")}function B(t,e,i,n,r){X(e,n,r,t,i,7);let o=Number(e&BigInt(4294967295));t[i++]=o,o>>=8,t[i++]=o,o>>=8,t[i++]=o,o>>=8,t[i++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[i++]=s,s>>=8,t[i++]=s,s>>=8,t[i++]=s,s>>=8,t[i++]=s,i}function z(t,e,i,n,r){X(e,n,r,t,i,7);let o=Number(e&BigInt(4294967295));t[i+7]=o,o>>=8,t[i+6]=o,o>>=8,t[i+5]=o,o>>=8,t[i+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[i+3]=s,s>>=8,t[i+2]=s,s>>=8,t[i+1]=s,s>>=8,t[i]=s,i+8}function U(t,e,i,n,r,o){if(i+n>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function j(t,e,i,n,r){return e=+e,i>>>=0,r||U(t,0,i,4),a.write(t,e,i,n,23,4),i+4}function F(t,e,i,n,r){return e=+e,i>>>=0,r||U(t,0,i,8),a.write(t,e,i,n,52,8),i+8}h.prototype.slice=function(t,e){const i=this.length;(t=~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),(e=void 0===e?i:~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,h.prototype),n},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||M(t,e,this.length);let n=this[t],r=1,o=0;for(;++o<e&&(r*=256);)n+=this[t+o]*r;return n},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||M(t,e,this.length);let n=this[t+--e],r=1;for(;e>0&&(r*=256);)n+=this[t+--e]*r;return n},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=et((function(t){K(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+i*2**24;return BigInt(n)+(BigInt(r)<<BigInt(32))})),h.prototype.readBigUInt64BE=et((function(t){K(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+i;return(BigInt(n)<<BigInt(32))+BigInt(r)})),h.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||M(t,e,this.length);let n=this[t],r=1,o=0;for(;++o<e&&(r*=256);)n+=this[t+o]*r;return r*=128,n>=r&&(n-=Math.pow(2,8*e)),n},h.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||M(t,e,this.length);let n=e,r=1,o=this[t+--n];for(;n>0&&(r*=256);)o+=this[t+--n]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*e)),o},h.prototype.readInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||M(t,2,this.length);const i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},h.prototype.readInt16BE=function(t,e){t>>>=0,e||M(t,2,this.length);const i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=et((function(t){K(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),h.prototype.readBigInt64BE=et((function(t){K(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+i)})),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||M(t,4,this.length),a.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||M(t,4,this.length),a.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||M(t,8,this.length),a.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||M(t,8,this.length),a.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,i,n){if(t=+t,e>>>=0,i>>>=0,!n){P(this,t,e,i,Math.pow(2,8*i)-1,0)}let r=1,o=0;for(this[e]=255&t;++o<i&&(r*=256);)this[e+o]=t/r&255;return e+i},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,i,n){if(t=+t,e>>>=0,i>>>=0,!n){P(this,t,e,i,Math.pow(2,8*i)-1,0)}let r=i-1,o=1;for(this[e+r]=255&t;--r>=0&&(o*=256);)this[e+r]=t/o&255;return e+i},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=et((function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=et((function(t,e=0){return z(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(t,e,i,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*i-1);P(this,t,e,i,n-1,-n)}let r=0,o=1,s=0;for(this[e]=255&t;++r<i&&(o*=256);)t<0&&0===s&&0!==this[e+r-1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+i},h.prototype.writeIntBE=function(t,e,i,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*i-1);P(this,t,e,i,n-1,-n)}let r=i-1,o=1,s=0;for(this[e+r]=255&t;--r>=0&&(o*=256);)t<0&&0===s&&0!==this[e+r+1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+i},h.prototype.writeInt8=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=et((function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=et((function(t,e=0){return z(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(t,e,i){return j(this,t,e,!0,i)},h.prototype.writeFloatBE=function(t,e,i){return j(this,t,e,!1,i)},h.prototype.writeDoubleLE=function(t,e,i){return F(this,t,e,!0,i)},h.prototype.writeDoubleBE=function(t,e,i){return F(this,t,e,!1,i)},h.prototype.copy=function(t,e,i,n){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(i||(i=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<i&&(n=i),n===i)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-i&&(n=t.length-e+i);const r=n-i;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,i,n):Uint8Array.prototype.set.call(t,this.subarray(i,n),e),r},h.prototype.fill=function(t,e,i,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;let r;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(r=e;r<i;++r)this[r]=t;else{const o=h.isBuffer(t)?t:h.from(t,n),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<i-e;++r)this[r+e]=o[r%s]}return this};const W={};function H(t,e,i){W[t]=class extends i{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function V(t){let e="",i=t.length;const n="-"===t[0]?1:0;for(;i>=n+4;i-=3)e=`_${t.slice(i-3,i)}${e}`;return`${t.slice(0,i)}${e}`}function X(t,e,i,n,r,o){if(t>i||t<e){const n="bigint"==typeof e?"n":"";let r;throw r=o>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${e}${n} and <= ${i}${n}`,new W.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,i){K(e,"offset"),void 0!==t[e]&&void 0!==t[e+i]||G(e,t.length-(i+1))}(n,r,o)}function K(t,e){if("number"!=typeof t)throw new W.ERR_INVALID_ARG_TYPE(e,"number",t)}function G(t,e,i){if(Math.floor(t)!==t)throw K(t,i),new W.ERR_OUT_OF_RANGE(i||"offset","an integer",t);if(e<0)throw new W.ERR_BUFFER_OUT_OF_BOUNDS;throw new W.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${e}`,t)}H("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),H("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),H("ERR_OUT_OF_RANGE",(function(t,e,i){let n=`The value of "${t}" is out of range.`,r=i;return Number.isInteger(i)&&Math.abs(i)>2**32?r=V(String(i)):"bigint"==typeof i&&(r=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(r=V(r)),r+="n"),n+=` It must be ${e}. Received ${r}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function $(t,e){let i;e=e||1/0;const n=t.length;let r=null;const o=[];for(let s=0;s<n;++s){if(i=t.charCodeAt(s),i>55295&&i<57344){if(!r){if(i>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}r=i;continue}if(i<56320){(e-=3)>-1&&o.push(239,191,189),r=i;continue}i=65536+(r-55296<<10|i-56320)}else r&&(e-=3)>-1&&o.push(239,191,189);if(r=null,i<128){if((e-=1)<0)break;o.push(i)}else if(i<2048){if((e-=2)<0)break;o.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;o.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return o}function J(t){return s.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Y(t,e,i,n){let r;for(r=0;r<n&&!(r+i>=e.length||r>=t.length);++r)e[r+i]=t[r];return r}function Q(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const tt=function(){const t="0123456789abcdef",e=new Array(256);for(let i=0;i<16;++i){const n=16*i;for(let r=0;r<16;++r)e[n+r]=t[i]+t[r]}return e}();function et(t){return"undefined"==typeof BigInt?it:t}function it(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(e,i){var n,r;t(e.exports,"toByteArray",(function(){return n}),(function(t){return n=t})),t(e.exports,"fromByteArray",(function(){return r}),(function(t){return r=t})),n=function(t){var e,i,n=h(t),r=n[0],o=n[1],l=new a(function(t,e,i){return 3*(e+i)/4-i}(0,r,o)),c=0,u=o>0?r-4:r;for(i=0;i<u;i+=4)e=s[t.charCodeAt(i)]<<18|s[t.charCodeAt(i+1)]<<12|s[t.charCodeAt(i+2)]<<6|s[t.charCodeAt(i+3)],l[c++]=e>>16&255,l[c++]=e>>8&255,l[c++]=255&e;2===o&&(e=s[t.charCodeAt(i)]<<2|s[t.charCodeAt(i+1)]>>4,l[c++]=255&e);1===o&&(e=s[t.charCodeAt(i)]<<10|s[t.charCodeAt(i+1)]<<4|s[t.charCodeAt(i+2)]>>2,l[c++]=e>>8&255,l[c++]=255&e);return l},r=function(t){for(var e,i=t.length,n=i%3,r=[],s=16383,a=0,l=i-n;a<l;a+=s)r.push(f(t,a,a+s>l?l:a+s));1===n?(e=t[i-1],r.push(o[e>>2]+o[e<<4&63]+"==")):2===n&&(e=(t[i-2]<<8)+t[i-1],r.push(o[e>>10]+o[e>>4&63]+o[e<<2&63]+"="));return r.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,u=l.length;c<u;++c)o[c]=l[c],s[l.charCodeAt(c)]=c;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");return-1===i&&(i=e),[i,i===e?0:4-i%4]}function f(t,e,i){for(var n,r,s=[],a=e;a<i;a+=3)n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(o[(r=n)>>18&63]+o[r>>12&63]+o[r>>6&63]+o[63&r]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(e,i){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,r;t(e.exports,"read",(function(){return n}),(function(t){return n=t})),t(e.exports,"write",(function(){return r}),(function(t){return r=t})),n=function(t,e,i,n,r){var o,s,a=8*r-n-1,l=(1<<a)-1,c=l>>1,u=-7,h=i?r-1:0,f=i?-1:1,d=t[e+h];for(h+=f,o=d&(1<<-u)-1,d>>=-u,u+=a;u>0;o=256*o+t[e+h],h+=f,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=n;u>0;s=256*s+t[e+h],h+=f,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,n),o-=c}return(d?-1:1)*s*Math.pow(2,o-n)},r=function(t,e,i,n,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,h=u>>1,f=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+h>=1?f/l:f*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(e*l-1)*Math.pow(2,r),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;t[i+d]=255&a,d+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;t[i+d]=255&s,d+=p,s/=256,c-=8);t[i+d-p]|=128*m}})),o.register("9VVcb",(function(t,e){var i=o("2bBga"),n=o("1TQad"),r=o("kTwUV"),s=o("2RNjJ"),a=o("1ZTQa"),l=o("9cPEm"),c=o("g3yOT"),u=o("2wfLM"),h=o("121rJ"),f=o("83xK9"),d=o("8wMQb");t.exports=function(t){return new Promise((function(e,o){var p,m=t.data,g=t.headers,y=t.responseType;function b(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}i.isFormData(m)&&i.isStandardBrowserEnv()&&delete g["Content-Type"];var v=new XMLHttpRequest;if(t.auth){var w=t.auth.username||"",x=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";g.Authorization="Basic "+btoa(w+":"+x)}var k=a(t.baseURL,t.url);function I(){if(v){var i="getAllResponseHeaders"in v?l(v.getAllResponseHeaders()):null,r={data:y&&"text"!==y&&"json"!==y?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:i,config:t,request:v};n((function(t){e(t),b()}),(function(t){o(t),b()}),r),v=null}}if(v.open(t.method.toUpperCase(),s(k,t.params,t.paramsSerializer),!0),v.timeout=t.timeout,"onloadend"in v?v.onloadend=I:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(I)},v.onabort=function(){v&&(o(new h("Request aborted",h.ECONNABORTED,t,v)),v=null)},v.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,t,v,v)),v=null},v.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",i=t.transitional||u;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),o(new h(e,i.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,v)),v=null},i.isStandardBrowserEnv()){var E=(t.withCredentials||c(k))&&t.xsrfCookieName?r.read(t.xsrfCookieName):void 0;E&&(g[t.xsrfHeaderName]=E)}"setRequestHeader"in v&&i.forEach(g,(function(t,e){void 0===m&&"content-type"===e.toLowerCase()?delete g[e]:v.setRequestHeader(e,t)})),i.isUndefined(t.withCredentials)||(v.withCredentials=!!t.withCredentials),y&&"json"!==y&&(v.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&v.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){v&&(o(!t||t&&t.type?new f:t),v.abort(),v=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),m||(m=null);var N=d(k);N&&-1===["http","https","file"].indexOf(N)?o(new h("Unsupported protocol "+N+":",h.ERR_BAD_REQUEST,t)):v.send(m)}))}})),o.register("1TQad",(function(t,e){var i=o("121rJ");t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new i("Request failed with status code "+n.status,[i.ERR_BAD_REQUEST,i.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}})),o.register("kTwUV",(function(t,e){var i=o("2bBga");t.exports=i.isStandardBrowserEnv()?{write:function(t,e,n,r,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(t,e){var i=o("iUwU6"),n=o("91vFE");t.exports=function(t,e){return t&&!i(e)?n(t,e):e}})),o.register("iUwU6",(function(t,e){t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}})),o.register("91vFE",(function(t,e){t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}})),o.register("9cPEm",(function(t,e){var i=o("2bBga"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,o,s={};return t?(i.forEach(t.split("\n"),(function(t){if(o=t.indexOf(":"),e=i.trim(t.substr(0,o)).toLowerCase(),r=i.trim(t.substr(o+1)),e){if(s[e]&&n.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([r]):s[e]?s[e]+", "+r:r}})),s):s}})),o.register("g3yOT",(function(t,e){var i=o("2bBga");t.exports=i.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var i=t;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=i.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}})),o.register("83xK9",(function(t,e){var i=o("121rJ");function n(t){i.call(this,null==t?"canceled":t,i.ERR_CANCELED),this.name="CanceledError"}o("2bBga").inherits(n,i,{__CANCEL__:!0}),t.exports=n})),o.register("8wMQb",(function(t,e){t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}})),o.register("1gvAv",(function(t,e){t.exports=null})),o.register("ksuZT",(function(t,e){t.exports=function(t){return!(!t||!t.__CANCEL__)}})),o.register("d0EKm",(function(t,e){var i=o("2bBga");t.exports=function(t,e){e=e||{};var n={};function r(t,e){return i.isPlainObject(t)&&i.isPlainObject(e)?i.merge(t,e):i.isPlainObject(e)?i.merge({},e):i.isArray(e)?e.slice():e}function o(n){return i.isUndefined(e[n])?i.isUndefined(t[n])?void 0:r(void 0,t[n]):r(t[n],e[n])}function s(t){if(!i.isUndefined(e[t]))return r(void 0,e[t])}function a(n){return i.isUndefined(e[n])?i.isUndefined(t[n])?void 0:r(void 0,t[n]):r(void 0,e[n])}function l(i){return i in e?r(t[i],e[i]):i in t?r(void 0,t[i]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return i.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||o,r=e(t);i.isUndefined(r)&&e!==l||(n[t]=r)})),n}})),o.register("6zj0X",(function(t,e){var i=o("50GW0").version,n=o("121rJ"),r={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){r[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}}));var s={};r.transitional=function(t,e,r){function o(t,e){return"[Axios v"+i+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return function(i,r,a){if(!1===t)throw new n(o(r," has been removed"+(e?" in "+e:"")),n.ERR_DEPRECATED);return e&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(i,r,a)}},t.exports={assertOptions:function(t,e,i){if("object"!=typeof t)throw new n("options must be an object",n.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),o=r.length;o-- >0;){var s=r[o],a=e[s];if(a){var l=t[s],c=void 0===l||a(l,s,t);if(!0!==c)throw new n("option "+s+" must be "+c,n.ERR_BAD_OPTION_VALUE)}else if(!0!==i)throw new n("Unknown option "+s,n.ERR_BAD_OPTION)}},validators:r}})),o.register("50GW0",(function(t,e){t.exports={version:"0.27.2"}})),o.register("2sjhC",(function(t,e){var i=o("83xK9");function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,i=n._listeners.length;for(e=0;e<i;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,i=new Promise((function(t){n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t){n.reason||(n.reason=new i(t),e(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},n.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},n.source=function(){var t;return{token:new n((function(e){t=e})),cancel:t}},t.exports=n})),o.register("av9gA",(function(t,e){t.exports=function(t){return function(e){return t.apply(null,e)}}})),o.register("gNhGc",(function(t,e){var i=o("2bBga");t.exports=function(t){return i.isObject(t)&&!0===t.isAxiosError}}));var s;s=o("bRlFp");const a="5f2a66e63fa9a8139a0b7e8b9aba27ca";e(s).defaults.baseURL="https://api.themoviedb.org/";const l=async(t=1,i="en-US")=>{try{const n=await e(s).get(`3/trending/movie/day?api_key=${a}&page=${t}&language=${i}`);return await n.data}catch(t){console.error(t)}},c=async(t,i="en-US",n=1)=>{try{const r=await e(s).get(`3/search/movie?api_key=${a}&language=${i}&query=${t}&page=${n}&include_adult=false`);return await r.data}catch(t){console.error(t)}},u=async(t="en-US")=>{try{const i=await e(s).get(`3/genre/movie/list?api_key=${a}&language=${t}`);return await i.data}catch(t){console.error(t)}},h=async(t,i="en-US")=>{try{const n=await e(s).get(`3/movie/${t}?api_key=${a}&language=${i}`);return await n.data}catch(t){console.error(t)}},f=async t=>{try{const i=await e(s).get(`3/movie/${t}/videos?api_key=${a}`);return await i.data}catch(t){console.error(t)}},d=document.querySelector("#gallery-list");!async function(){!async function(t){const e=(await async function(t){return await u(t)}("en-US")).genres;let i=null;const n=t.results.map((({id:t,title:n,vote_average:r,genre_ids:o,release_date:s,poster_path:a})=>{a&&(i=`https://image.tmdb.org/t/p/original/${a}`),null===a&&(i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEXv8PL6+/35+vyAiZDw8fPz9Pbv8PDt8fLe3+Tk5uqQmJyBjI+Nlpni5OZ8h4yMk5iHkJh8ho/c3eOorrPt7ez09PODiY6OlZyvtLh+hIqGj5a6v8Po7O/P1Nju7vN6gIWhpqpkbXBpcXhxe4DT2dyZn6TDyMxwfX+vsrfLy81zeH3q8PW2vMA2PLLIAAAGXklEQVR4nO2djXaiOBSAA0kA2wWkgAhGmF0Ztz/7/s+3N8G21oodxDI3zP3OaXuOCOTjJrkhRMucucN+dwG+HTK0HzK0HzK0HzK0HzK0HzK0HzK0HzK0HzK0HzK0nz/a0LWJqwwtwj38nONiDL+jMN/CpZL2GcI+0iLc4TF0HVcwexD9TfFSDH93sX8VIZi8Ioaua40h04bDY0iGmCBDMsQPGfYY2pMPKYZkaAFkSIb4IcM/1pAyPiLIkAzxQ4ZkiB8y7DGkjI8IMiRD/JAhGeKHDHsMKeMjggzJED9kSIb4IcMeQ8r4iCBDMsQPGZLhr55Fr0a+QWmlMAcbdu6JDA/FG48cWH2myvhgp5Q3FtAbfJWmi6EQYryhOdgwy6l6Gl2o8TG8pn+byNAEcfynX8QVXc2EtVQFowmDMBvaKU9j+AJdzUMa/zWWOI7TVnoIDaXwFmlzP5pVxZtU5QgNFcuCgm8X49lWRYsxhj4TQRX7o4d6gi2WVegO3GeKjO9nEgxDM3gbM3zL2KKIH+pB+0wUw0w+LO9C/1rY4a8nwjhuMWYLKNrD0sTQnHM4Xb5hng+GwdBMNb3hRbpxC8h4Z+pzDoZVgLGnYV5+aIdfAlVSvy3LM8nEp+EL1NJlIAYp4jP0hKr1CE2xM33mHAx1iWTYtspR5zbOwFAyX63vyrLYg6J36jIHQ3D80US8SpoNKP6+djj0Hn+AobP5G/ySZfJPKOcZQzeOuBbk5drJ5tiX5oonnK/gV/PDqU8HaLMwlKsy4RVPqt3aVaenmYNh5q53OooV37Uym2M79NywAkEe7VJf5tlpcWdgCAPT4Geza/hap8PT2/k5GCq5kGq737fw9/P752AolAzzPJeSQUcqT0du1mR8c7Pv+6Ku4Te7eCz5YX7UkhhqP8lU5tVC1MxjivXO00MoxfEcsCWG3WSN/vKf/VrJWmjB/tkbPa55O5slhp4we9f19v7ftK5NRug5Xvfg8d3eEsNDydlTHN3vHmvJvngUcTSdYY2hkEoIEITM3kBF1a/3BRFel8q2WmqqnXwy9xA8ih6VTgrnoyi3T1JfD6sMpYDRpnK2q5J3lOmLZF72sUMVSuiX2rtyc6ijYFrbYCiF0tXO2b76dYpMmKTxflTlw4VwA4hzs3e0nvR1ILFnfF0/dYJT7vb52LBJX0yM5HvSMO2vrUoelc/r7hv+XLgG2GP4OkCR26biR6xA0T90sK87ZMJteanfVj7vJQx+mLkI2A27fv9lu4JGeORYrkwUjxfdZPpZTqm7In0BNkLWrJY+ekPRzYbuqxJuAc1doEG77tKup3lzlG38WpGjiG9e6to8wsdvCGd8ivkZmkflHiUN3YvCq0l3GaL7japNmsFq6OV5W8ULGGXDWNQk+s+UKSR2PX0o9bKS9md5vBGiaMavnjEcdO6J1mJkIoh1O1RQRc8LQnNLIQfCTX2eacHkQ0vVURQwCM9UXD1gfLomDs+AF+57oj8bReFJDwQDqKLJ8aYqKsuNflITxkUw6NRTrVQ49KWQ6Fe9gtGqTH0/y4QMioZ/iKAJMSjWLIBaOslajKEZP/e0obN95v0hBEVIGp5yg6o53ZRUOi/+54A8DzGuNukM1bYpefkpOG81seSrXQqJvko+b0x0U9xtXFUVSJ8B69Umm3ue9PodNjWPgRY8jXRimmUU7RfF8iFHmC20YcFXphe9UE3N5qI8E0JDBPV4XSxRxlCvVCj6Cj4AfTsZo8yHtzIE/gRDlBn/tjEkw5sYDl25N/t2aLLFrA09wVRaJkk0EjiAHp6jNFQySO9GU9zdpYHwERrqKW6hwvGL9YNgIYWPcNSmlxlm4z9uISVzZeZ9WkeEwLCbDB02njxf2g/PaX5xn0nu8XWh/Bt8dE2wM4tOv9plms89QesRL1ev8z4C9CZZyU6fx0cEGZIhfsiQDPFDhj2GlPERQYZkiB8yJEP8kGGPIWV8RJAhGeKHDMkQP2TYY0gZHxFkSIb4IUMyxA8Z9hhSxkcEGZIhfsiQDPFDhj2GlPERQYZkiJ/59zQMDJ2rDG/yL1W+H3Gloa6lV3wt9/RoSekONnRsaofacHA7hEvi3uA/jkyFe5Vhb9zR0WunuWzo2sDVhpYx3HA2kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9/A/YxOI/ygJFZAAAAABJRU5ErkJggg==");const l=[];return e.map((t=>{o.includes(t.id)&&l.push(t.name)})).join(", "),`<li data-movie-id="${t}" class="card__item">\n    <a class="card__link" href = "">\n        <img class="card__img"\n        src="${i}"\n        alt="${n}"\n        loading=lazy\n    />\n    \n    <h2 class="card__title">${n}</h2>\n    <div class="card__text">\n        <p class="card__info">${l} | ${s.split("",4).join("")}</p>\n        <div class="card__rating">${r.toString().split("",3).join("")}</div>\n    </div>\n    </a>\n\n</li>`})).join("");d.insertAdjacentHTML("beforeend",n)}(await l(1,"en-US"))}();const p=(t,e)=>{const i=document.querySelector("body"),n=document.querySelector(`[data-modal="${t}"]`),r=n.closest(".backdrop"),o=document.querySelector(`[data-modal-close="${t}"]`),s=()=>{r.classList.add("is-hidden"),n.classList.add("is-hidden"),"movie-trailer"!==t&&i.classList.remove("noscroll"),o&&o.removeEventListener("click",s),e.innerHTML=""},a=t=>{"Escape"===t.code&&(s(),window.removeEventListener("keydown",a))},l=t=>{t.target.classList.contains("backdrop")&&(s(),r.removeEventListener("click",l))};r.classList.remove("is-hidden"),n.classList.remove("is-hidden"),i.classList.add("noscroll"),o&&o.addEventListener("click",s),window.addEventListener("keydown",a),r.addEventListener("click",l),o&&o.addEventListener("click",s)},m=document.getElementById("gallery-list"),g=document.getElementById("modal-movie-detail"),y=document.getElementById("modal-movie-trailer"),b=(t,e)=>{t.innerHTML=e};m.addEventListener("click",(async t=>{t.preventDefault();const e=t.target.closest(".card__item").dataset.movieId,i=await h(e),n=await f(e);b(g,(t=>{const{poster_path:e,title:i,vote_average:n,vote_count:r,popularity:o,original_title:s,genres:a,overview:l,id:c}=t;return`\n        <div class="movie__tumb">\n        <img\n          src=https://image.tmdb.org/t/p/w500${e}\n          width="375"\n          height="478"\n          alt="${i}"\n        />\n      </div>\n      <div class="movie__content">\n      <div class="movie__body">\n      <h2 class="movie__title">${i}</h2>\n        <ul class="movie__stats stats">\n          <li class="stats__row">\n            <span class="stats__name">Vote / Votes</span>\n            <span class="statss__value">\n              <span class="stats__vote">${Math.round(10*n)/10}</span>\n              /\n              <span class="stats__votes">${r}</span>\n            </span>\n          </li>\n          <li class="stats__row">\n            <span class="stats__name">Popularity</span>\n            <span class="stats__value">${Math.round(10*o)/10}</span>\n          </li>\n          <li class="stats__row">\n            <span class="stats__name">Original Title</span>\n            <sapn class="stats__value stats__value--uppercase">\n              ${s}\n            </sapn>\n          </li>\n          <li class="stats__row">\n            <span class="stats__name">Genre</span>\n            <span class="stats__value">${a.map((t=>t.name)).join(", ")}</span>\n          </li>\n        </ul>\n        <h3 class="movie__sub-title">About</h3>\n        <p class="movie__description">\n          ${l}\n        </p>\n        <button class="movie__button-trailer" data-movie-tailer-id="${c}"></button>\n        </div>  \n        <div class="movie__actions">\n          <button type="button" class="movie__button">Add to watched</button>\n          <button type="button" class="movie__button">Add to Queue</button>\n        </div>\n      </div>\n  `})(i)),p("movie",g);document.querySelector("[data-movie-tailer-id]").addEventListener("click",(()=>{b(y,(t=>`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${t.results[0].key}?autoplay=1" title="${t.results[0].name}" frameborder="0" allow="accelerometer"; autoplay; clipboard-write; encrypted-media; allowfullscreen></iframe>`)(n)),p("movie-trailer",y)}))}));const v=document.querySelector(".theme-switch__marker"),w=document.querySelector("#theme-switch-toggle");function x(){document.body.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"),v.translateX(0)}w.addEventListener("change",(()=>{w.checked?x():(document.body.classList.remove("dark-theme"),localStorage.removeItem("theme","dark-theme"))})),"dark-theme"===localStorage.getItem("theme")&&x();const k={searchForm:document.querySelector("#search-form"),openModalMovie:document.querySelector("[data-movie-modal-open]"),closeModalMovie:document.querySelector("[data-movie-modal-close]")};var I,E,N={};I=void 0===i?"undefined"==typeof window?N:window:i,E=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i,n,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",f={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",v="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",I="Hourglass",E="Circle",N="Arrows",T="Dots",A="Pulse",S="Custom",C="Notiflix",_={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",O="Circle",D="Arrows",M="Dots",P="Pulse",B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},z=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},U=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},j=function(e){return e||(e="head"),null!==t.document[e]||(z('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},F=function(e,i){if(!j("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var n=t.document.createElement("style");n.id=i,n.innerHTML=e(),t.document.head.appendChild(n)}},W=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=e&&"[object Object]"===Object.prototype.toString.call(i[n])?W(t[n],i[n]):i[n])};i<arguments.length;i++)n(arguments[i]);return t},H=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(i,n,r,o){if(!j("body"))return!1;e||lt.Notify.init({});var s=W(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),e=W(!0,e,d)}var p=e[i.toLocaleLowerCase("en")];Y++,"string"!=typeof n&&(n="Notiflix "+i),e.plainText&&(n=H(n)),!e.plainText&&n.length>e.messageMaxLength&&(e=W(!0,e,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>e.messageMaxLength&&(n=n.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(f.wrapID)||t.document.createElement("div");if(m.id=f.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(f.overlayID)||t.document.createElement("div");g.id=f.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(f.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(f.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+Y,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var b="";if(e.closeButton&&"function"!=typeof r&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(e.closeButton?b:"");else{var v="";i===l?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===c?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===u?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===h&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=v+'<span class="nx-message nx-with-icon">'+n+"</span>"+(e.closeButton?b:"")}else y.innerHTML='<span class="nx-message">'+n+"</span>"+(e.closeButton?b:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(f.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(f.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,I,E=function(){x.classList.add("nx-remove");var e=t.document.getElementById(f.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},N=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(f.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(I)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){E();var t=setTimeout((function(){N(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),E();var t=setTimeout((function(){N(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var T=function(){k=setTimeout((function(){E()}),e.timeout),I=setTimeout((function(){N()}),e.timeout+e.cssAnimationDuration)};T(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(I)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),T()})))}}if(e.showOnlyTheLastOne&&0<Y)for(var A,S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Y+"])"),C=0;C<S.length;C++)null!==(A=S[C]).parentNode&&A.parentNode.removeChild(A);e=W(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,n,r,o,s,l){if(!j("body"))return!1;i||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,i,{}),i=W(!0,i,u)}var h=i[e.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+e),"string"!=typeof r&&(e===d?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),i.plainText&&(n=H(n),r=H(r),o=H(o)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonMaxLength&&(o=o.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=y.ID,f.className=i.className,f.style.zIndex=i.zindex,f.style.borderRadius=i.borderRadius,f.style.fontFamily='"'+i.fontFamily+'", '+a,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on")),f.style.display="flex",f.style.flexWrap="wrap",f.style.flexDirection="column",f.style.alignItems="center",f.style.justifyContent="center";var b="",v=!0===i.backOverlayClickToClose;i.backOverlay&&(b='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(v?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===d?(w=i.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,h.svgColor)),f.innerHTML=b+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+k+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+h.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var I=function(){var e=t.document.getElementById(f.id);e.classList.add("nx-remove");var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(n)}),i.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),I()})),b&&v&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){I()}))}i=W(!0,i,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},it=function(e,i,r,o,s,l,c,u,h){if(!j("body"))return!1;n||lt.Confirm.init({});var f=W(!0,n,{});"object"!=typeof h||Array.isArray(h)||(n=W(!0,n,h)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),n.plainText&&(i=H(i),r=H(r),s=H(s),l=H(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonsMaxLength&&(s=s.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=x.ID,d.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),d.style.zIndex=n.zindex,d.style.padding=n.distance,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on"));var p="string"==typeof n.position?n.position.trim():"center";d.classList.add("nx-position-"+p),d.style.fontFamily='"'+n.fontFamily+'", '+a;var m="";n.backOverlay&&(m='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var y="",b=null,k=void 0;if(e===v||e===w){b=o||"";var I=e===v||200<b.length?Math.ceil(1.5*b.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+b+'"':"")+' maxlength="'+I+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(d.innerHTML=m+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+r+y+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var E=t.document.getElementById(d.id),N=t.document.getElementById("NXConfirmButtonOk"),T=t.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(t){var i=t.target.value;e===v&&i!==b?(t.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(e===v&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&N.dispatchEvent(new Event("click")))}))),N.addEventListener("click",(function(t){if(e===v&&b&&T){if((T.value||"").toString()!==b)return T.focus(),T.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&T&&(k=T.value||""),c(k)),E.classList.add("nx-remove");var i=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(i))}),n.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&T&&(k=T.value||""),u(k)),E.classList.add("nx-remove");var t=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(t))}),n.cssAnimationDuration)}))}n=W(!0,n,f)},nt=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,i,n,o,s){if(!j("body"))return!1;r||lt.Loading.init({});var l=W(!0,r,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),r=W(!0,r,c)}var u="";if("string"==typeof i&&0<i.length&&(u=i),o){var h="";0<(u=u.length>r.messageMaxLength?H(u).toString().substring(0,r.messageMaxLength)+"...":H(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var f="";if(e===k)f=V(r.svgSize,r.svgColor);else if(e===I)f=X(r.svgSize,r.svgColor);else if(e===E)f=K(r.svgSize,r.svgColor);else if(e===N)f=G(r.svgSize,r.svgColor);else if(e===T)f=q(r.svgSize,r.svgColor);else if(e===A)f=$(r.svgSize,r.svgColor);else if(e===S&&null!==r.customSvgCode&&null===r.customSvgUrl)f=r.customSvgCode||"";else if(e===S&&null!==r.customSvgUrl&&null===r.customSvgCode)f='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===S&&(null===r.customSvgUrl||null===r.customSvgCode))return z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;f=function(t,e,i){return t||(t="60px"),e||(e="#f8f8f8"),i||(i="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+i+'" stroke="'+i+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var d=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=d>=p?p-40+"px":d+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+f+"</div>",y=t.document.createElement("div");y.id=_.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(_.ID))var b=t.document.getElementById(_.ID),v=setTimeout((function(){b.classList.add("nx-remove");var t=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(v)}),s);r=W(!0,r,l)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,i,n,r,s,l){var c;if(Array.isArray(n)){if(1>n.length)return z("Array of HTMLElements should contains at least one HTMLElement."),!1;c=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(n);if(1>u.length)return z('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||lt.Block.init({});var h=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),o=W(!0,o,f)}var d="";"string"==typeof r&&0<r.length&&(d=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=B.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var b,v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(b=c[w]){if(-1<v.indexOf(b.tagName.toLocaleLowerCase("en")))break;var x=b.querySelectorAll("[id^="+B.ID+"]");if(1>x.length){var k="";i&&(k=i===L?X(o.svgSize,o.svgColor):i===O?K(o.svgSize,o.svgColor):i===D?G(o.svgSize,o.svgColor):i===M?q(o.svgSize,o.svgColor):i===P?$(o.svgSize,o.svgColor):V(o.svgSize,o.svgColor));var I='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",E="";0<d.length&&(d=d.length>o.messageMaxLength?H(d).substring(0,o.messageMaxLength)+"...":H(d),E='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+d+"</span>"),st++;var N=t.document.createElement("div");N.id=B.ID+"-"+st,N.className=p+(o.cssAnimation?" nx-with-animation":""),N.style.position=o.position,N.style.zIndex=o.zindex,N.style.background=o.backgroundColor,N.style.animationDuration=o.cssAnimationDuration+"ms",N.style.fontFamily='"'+o.fontFamily+'", '+a,N.style.display="flex",N.style.flexWrap="wrap",N.style.flexDirection="column",N.style.alignItems="center",N.style.justifyContent="center",o.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.innerHTML=I+E;var T,A=t.getComputedStyle(b).getPropertyValue("position"),S="string"==typeof A?A.toLocaleLowerCase("en"):"relative",C=Math.round(1.25*parseInt(o.svgSize))+40,_="";C>(b.offsetHeight||0)&&(_="min-height:"+C+"px;"),T=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var R="",F=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(F||0<_.length){if(!j("head"))return!1;F&&(R="position:relative!important;");var J='<style id="Style-'+B.ID+"-"+st+'">'+T+"."+y+"{"+R+_+"}</style>",Y=t.document.createRange();Y.selectNode(t.document.head);var Q=Y.createContextualFragment(J);t.document.head.appendChild(Q),b.classList.add(y)}b.appendChild(N)}}}else var Z=function(e){var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var n=e.getAttribute("id"),r=t.document.getElementById("Style-"+n);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(i)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,i=0;i<t.length;i++)(e=t[i])&&(e.classList.add("nx-remove"),Z(e));else U("string"==typeof n?'"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),o.cssAnimationDuration+300)},it=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+B.ID+"]"),tt(x));clearTimeout(it)}),l);o=W(!0,o,h)},lt={Notify:{init:function(t){e=W(!0,f,t),F(J,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=W(!0,e,t)):(z("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,i){Q(l,t,e,i)},failure:function(t,e,i){Q(c,t,e,i)},warning:function(t,e,i){Q(u,t,e,i)},info:function(t,e,i){Q(h,t,e,i)}},Report:{init:function(t){i=W(!0,y,t),F(Z,"NotiflixReportInternalCSS")},merge:function(t){return i?void(i=W(!0,i,t)):(z("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,i,n,r){tt(d,t,e,i,n,r)},failure:function(t,e,i,n,r){tt(p,t,e,i,n,r)},warning:function(t,e,i,n,r){tt(m,t,e,i,n,r)},info:function(t,e,i,n,r){tt(g,t,e,i,n,r)}},Confirm:{init:function(t){n=W(!0,x,t),F(et,"NotiflixConfirmInternalCSS")},merge:function(t){return n?void(n=W(!0,n,t)):(z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,i,n,r,o,s){it(b,t,e,null,i,n,r,o,s)},ask:function(t,e,i,n,r,o,s,a){it(v,t,e,i,n,r,o,s,a)},prompt:function(t,e,i,n,r,o,s,a){it(w,t,e,i,n,r,o,s,a)}},Loading:{init:function(t){r=W(!0,_,t),F(nt,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=W(!0,r,t)):(z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(I,t,e,!0,0)},circle:function(t,e){rt(E,t,e,!0,0)},arrows:function(t,e){rt(N,t,e,!0,0)},dots:function(t,e){rt(T,t,e,!0,0)},pulse:function(t,e){rt(A,t,e,!0,0)},custom:function(t,e){rt(S,t,e,!0,0)},notiflix:function(t,e){rt(C,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var i=t.document.getElementById(_.ID);if(i)if(0<e.length){e=e.length>r.messageMaxLength?H(e).substring(0,r.messageMaxLength)+"...":H(e);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=e;else{var o=t.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=e,i.appendChild(o)}}else z("Where is the new message?")}(e)}},Block:{init:function(t){o=W(!0,B,t),F(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=W(!0,o,t)):(z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,i){at(!0,R,t,e,i)},hourglass:function(t,e,i){at(!0,L,t,e,i)},circle:function(t,e,i){at(!0,O,t,e,i)},arrows:function(t,e,i){at(!0,D,t,e,i)},dots:function(t,e,i){at(!0,M,t,e,i)},pulse:function(t,e,i){at(!0,P,t,e,i)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?W(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return E(I)})):"object"==typeof N?N=E(I):I.Notiflix=E(I);k.searchForm.addEventListener("submit",(async function(t){t.preventDefault();const i=t.currentTarget.query.value.trim();if(""!==i){A.style.display="none";const t=await c(i,"en-US",1);!async function(t){const e=(await async function(t){return await u(t)}("en-US")).genres,i=t.results.map((({id:t,title:i,vote_average:n,genre_ids:r,release_date:o="un",poster_path:s})=>{const a=[];let l=null;return s&&(l=`https://image.tmdb.org/t/p/original/${s}`),null===s&&(l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEXv8PL6+/35+vyAiZDw8fPz9Pbv8PDt8fLe3+Tk5uqQmJyBjI+Nlpni5OZ8h4yMk5iHkJh8ho/c3eOorrPt7ez09PODiY6OlZyvtLh+hIqGj5a6v8Po7O/P1Nju7vN6gIWhpqpkbXBpcXhxe4DT2dyZn6TDyMxwfX+vsrfLy81zeH3q8PW2vMA2PLLIAAAGXklEQVR4nO2djXaiOBSAA0kA2wWkgAhGmF0Ztz/7/s+3N8G21oodxDI3zP3OaXuOCOTjJrkhRMucucN+dwG+HTK0HzK0HzK0HzK0HzK0HzK0HzK0HzK0HzK0HzK0nz/a0LWJqwwtwj38nONiDL+jMN/CpZL2GcI+0iLc4TF0HVcwexD9TfFSDH93sX8VIZi8Ioaua40h04bDY0iGmCBDMsQPGfYY2pMPKYZkaAFkSIb4IcM/1pAyPiLIkAzxQ4ZkiB8y7DGkjI8IMiRD/JAhGeKHDHsMKeMjggzJED9kSIb4IcMeQ8r4iCBDMsQPGZLhr55Fr0a+QWmlMAcbdu6JDA/FG48cWH2myvhgp5Q3FtAbfJWmi6EQYryhOdgwy6l6Gl2o8TG8pn+byNAEcfynX8QVXc2EtVQFowmDMBvaKU9j+AJdzUMa/zWWOI7TVnoIDaXwFmlzP5pVxZtU5QgNFcuCgm8X49lWRYsxhj4TQRX7o4d6gi2WVegO3GeKjO9nEgxDM3gbM3zL2KKIH+pB+0wUw0w+LO9C/1rY4a8nwjhuMWYLKNrD0sTQnHM4Xb5hng+GwdBMNb3hRbpxC8h4Z+pzDoZVgLGnYV5+aIdfAlVSvy3LM8nEp+EL1NJlIAYp4jP0hKr1CE2xM33mHAx1iWTYtspR5zbOwFAyX63vyrLYg6J36jIHQ3D80US8SpoNKP6+djj0Hn+AobP5G/ySZfJPKOcZQzeOuBbk5drJ5tiX5oonnK/gV/PDqU8HaLMwlKsy4RVPqt3aVaenmYNh5q53OooV37Uym2M79NywAkEe7VJf5tlpcWdgCAPT4Geza/hap8PT2/k5GCq5kGq737fw9/P752AolAzzPJeSQUcqT0du1mR8c7Pv+6Ku4Te7eCz5YX7UkhhqP8lU5tVC1MxjivXO00MoxfEcsCWG3WSN/vKf/VrJWmjB/tkbPa55O5slhp4we9f19v7ftK5NRug5Xvfg8d3eEsNDydlTHN3vHmvJvngUcTSdYY2hkEoIEITM3kBF1a/3BRFel8q2WmqqnXwy9xA8ih6VTgrnoyi3T1JfD6sMpYDRpnK2q5J3lOmLZF72sUMVSuiX2rtyc6ijYFrbYCiF0tXO2b76dYpMmKTxflTlw4VwA4hzs3e0nvR1ILFnfF0/dYJT7vb52LBJX0yM5HvSMO2vrUoelc/r7hv+XLgG2GP4OkCR26biR6xA0T90sK87ZMJteanfVj7vJQx+mLkI2A27fv9lu4JGeORYrkwUjxfdZPpZTqm7In0BNkLWrJY+ekPRzYbuqxJuAc1doEG77tKup3lzlG38WpGjiG9e6to8wsdvCGd8ivkZmkflHiUN3YvCq0l3GaL7japNmsFq6OV5W8ULGGXDWNQk+s+UKSR2PX0o9bKS9md5vBGiaMavnjEcdO6J1mJkIoh1O1RQRc8LQnNLIQfCTX2eacHkQ0vVURQwCM9UXD1gfLomDs+AF+57oj8bReFJDwQDqKLJ8aYqKsuNflITxkUw6NRTrVQ49KWQ6Fe9gtGqTH0/y4QMioZ/iKAJMSjWLIBaOslajKEZP/e0obN95v0hBEVIGp5yg6o53ZRUOi/+54A8DzGuNukM1bYpefkpOG81seSrXQqJvko+b0x0U9xtXFUVSJ8B69Umm3ue9PodNjWPgRY8jXRimmUU7RfF8iFHmC20YcFXphe9UE3N5qI8E0JDBPV4XSxRxlCvVCj6Cj4AfTsZo8yHtzIE/gRDlBn/tjEkw5sYDl25N/t2aLLFrA09wVRaJkk0EjiAHp6jNFQySO9GU9zdpYHwERrqKW6hwvGL9YNgIYWPcNSmlxlm4z9uISVzZeZ9WkeEwLCbDB02njxf2g/PaX5xn0nu8XWh/Bt8dE2wM4tOv9plms89QesRL1ev8z4C9CZZyU6fx0cEGZIhfsiQDPFDhj2GlPERQYZkiB8yJEP8kGGPIWV8RJAhGeKHDMkQP2TYY0gZHxFkSIb4IUMyxA8Z9hhSxkcEGZIhfsiQDPFDhj2GlPERQYZkiJ/59zQMDJ2rDG/yL1W+H3Gloa6lV3wt9/RoSekONnRsaofacHA7hEvi3uA/jkyFe5Vhb9zR0WunuWzo2sDVhpYx3HA2kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9kKH9/A/YxOI/ygJFZAAAAABJRU5ErkJggg=="),e.map((t=>{r.includes(t.id)&&a.push(t.name)})).join(", "),`<li data-movie-id="${t}" class="card__item">\n    <a class="card__link" href = "">\n        <img class="card__img"\n        src="${l}"\n        alt="${i}"\n        loading=lazy\n    />\n\n    <h2 class="card__title">${i}</h2>\n    <div class="card__text">\n        <p class="card__info">${a} | ${o.split("",4).join("")}</p>\n        <div class="card__rating">${n.toString().split("",3).join("")}</div>\n    </div>\n    </a>\n\n</li>`})).join("");T.innerHTML=i}(t),function(t){t.total_results>0&&e(N).Notify.success(`Success! We've found ${t.total_results} movies for you!!!`);0===t.total_results&&e(N).Notify.warning("Sorry! The search has no results, change your serch word, please!")}(t)}if(""===i)return A.style.display="block",void e(N).Notify.failure("Oops, the search is empty, try again.");k.searchForm.reset()}));const T=document.querySelector("#gallery-list"),A=document.querySelector(".warning-notification");var S,C,_={};S=void 0!==i?i:"undefined"!=typeof window?window:_,C=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="Success",n="Failure",r="Warning",o="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=c(t[n],i[n]):t[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,f=function(a,u,f,p){if(!l("body"))return!1;e||d.Notify.init({});var m=c(!0,e,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof f?g=f:"object"==typeof p&&(g=p),e=c(!0,e,g)}var y,b,v=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(b=t.document.createElement("div")).innerHTML=y,u=b.textContent||b.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(w.id=s.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(s.overlayID)||t.document.createElement("div");x.id=s.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=v.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+h,k.className=e.className+" "+v.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=v.textColor,k.style.background=v.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var I="";if(e.closeButton&&"function"!=typeof f&&(I='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?I:"");else{var E="";a===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===o&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=E+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?I:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?I:"");if("left-bottom"===e.position||"right-bottom"===e.position){var N=t.document.getElementById(s.wrapID);N.insertBefore(k,N.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var T=t.document.getElementById(k.id);if(T){var A,S,C=function(){T.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(A)},_=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var t=setTimeout((function(){_(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof f||e.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof f&&f(),C();var t=setTimeout((function(){_(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof f){var R=function(){A=setTimeout((function(){C()}),e.timeout),S=setTimeout((function(){_()}),e.timeout+e.cssAnimationDuration)};R(),e.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(A),clearTimeout(S)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),R()})))}}if(e.showOnlyTheLastOne&&h>0)for(var L=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),O=0;O<L.length;O++){var D=L[O];null!==D.parentNode&&D.parentNode.removeChild(D)}e=c(!0,e,m)},d={Notify:{init:function(i){e=c(!0,s,i),function(e,i){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var n=t.document.createElement("style");n.id=i,n.innerHTML=e(),t.document.head.appendChild(n)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,n){f(i,t,e,n)},failure:function(t,e,i){f(n,t,e,i)},warning:function(t,e,i){f(r,t,e,i)},info:function(t,e,i){f(o,t,e,i)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return C(S)})):"object"==typeof _?_=C(S):S.Notiflix=C(S);var R={};!function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof R?R=e(t):t.Notiflix=e(t)}(void 0!==i?i:"undefined"!=typeof window?window:R,(function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="Standard",n="Hourglass",r="Circle",o="Arrows",s="Dots",a="Pulse",l="Custom",c="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},f=function(e){return e||(e="head"),null!==t.document[e]||(h('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},d=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=d(t[n],i[n]):t[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return t},p=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(c,m,g,b,v){if(!f("body"))return!1;e||y.Loading.init({});var w=d(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var x={};"object"==typeof m?x=m:"object"==typeof g&&(x=g),e=d(!0,e,x)}var k,I,E="";if("string"==typeof m&&m.length>0&&(E=m),b){var N="";(E=E.length>e.messageMaxLength?p(E).toString().substring(0,e.messageMaxLength)+"...":p(E).toString()).length>0&&(N='<p id="'+e.messageID+'" class="nx-loading-message" style="color:'+e.messageColor+";font-size:"+e.messageFontSize+';">'+E+"</p>"),e.cssAnimation||(e.cssAnimationDuration=0);var T="";if(c===i)k=e.svgSize,I=e.svgColor,k||(k="60px"),I||(I="#32c682"),T='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+I+'" width="'+k+'" height="'+k+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===n)T=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(e.svgSize,e.svgColor);else if(c===r)T=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(e.svgSize,e.svgColor);else if(c===o)T=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(e.svgSize,e.svgColor);else if(c===s)T=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(e.svgSize,e.svgColor);else if(c===a)T=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(e.svgSize,e.svgColor);else if(c===l&&null!==e.customSvgCode&&null===e.customSvgUrl)T=e.customSvgCode||"";else if(c===l&&null!==e.customSvgUrl&&null===e.customSvgCode)T='<img class="nx-custom-loading-icon" width="'+e.svgSize+'" height="'+e.svgSize+'" src="'+e.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===e.customSvgUrl||null===e.customSvgCode))return h('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;T=function(t,e,i){return t||(t="60px"),e||(e="#f8f8f8"),i||(i="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+i+'" stroke="'+i+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(e.svgSize,"#f8f8f8","#32c682")}var A=parseInt((e.svgSize||"").replace(/[^0-9]/g,"")),S=t.innerWidth,C=A>=S?S-40+"px":A+"px",_='<div style="width:'+C+"; height:"+C+';" class="'+e.className+"-icon"+(E.length>0?" nx-with-message":"")+'">'+T+"</div>",R=t.document.createElement("div");if(R.id=u.ID,R.className=e.className+(e.cssAnimation?" nx-with-animation":"")+(e.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=e.zindex,R.style.background=e.backgroundColor,R.style.animationDuration=e.cssAnimationDuration+"ms",R.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",e.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=_+N,!t.document.getElementById(R.id))if(t.document.body.appendChild(R),e.clickToClose)t.document.getElementById(R.id).addEventListener("click",(function(){R.classList.add("nx-remove");var t=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(t))}),e.cssAnimationDuration)}))}else if(t.document.getElementById(u.ID))var L=t.document.getElementById(u.ID),O=setTimeout((function(){L.classList.add("nx-remove");var t=setTimeout((function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(t))}),e.cssAnimationDuration);clearTimeout(O)}),v);e=d(!0,e,w)},y={Loading:{init:function(i){e=d(!0,u,i),function(e,i){if(!f("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var n=t.document.createElement("style");n.id=i,n.innerHTML=e(),t.document.head.appendChild(n)}}(m,"NotiflixLoadingInternalCSS")},merge:function(t){if(!e)return h("You have to initialize the Loading module before call Merge function."),!1;e=d(!0,e,t)},standard:function(t,e){g(i,t,e,!0,0)},hourglass:function(t,e){g(n,t,e,!0,0)},circle:function(t,e){g(r,t,e,!0,0)},arrows:function(t,e){g(o,t,e,!0,0)},dots:function(t,e){g(s,t,e,!0,0)},pulse:function(t,e){g(a,t,e,!0,0)},custom:function(t,e){g(l,t,e,!0,0)},notiflix:function(t,e){g(c,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),g(null,null,null,!1,t)},change:function(i){!function(i){"string"!=typeof i&&(i="");var n=t.document.getElementById(u.ID);if(n)if(i.length>0){i=i.length>e.messageMaxLength?p(i).substring(0,e.messageMaxLength)+"...":p(i);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=i;else{var o=t.document.createElement("p");o.id=e.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=e.messageColor,o.style.fontSize=e.messageFontSize,o.innerHTML=i,n.appendChild(o)}}else h("Where is the new message?")}(i)}}};return"object"==typeof t.Notiflix?d(!0,t.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[i++]=r:r<2048?(e[i++]=r>>6|192,e[i++]=63&r|128):55296==(64512&r)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++n)),e[i++]=r>>18|240,e[i++]=r>>12&63|128,e[i++]=r>>6&63|128,e[i++]=63&r|128):(e[i++]=r>>12|224,e[i++]=r>>6&63|128,e[i++]=63&r|128)}return e},O={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let e=0;e<t.length;e+=3){const r=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|l>>6,f=63&l;a||(f=64,o||(h=64)),n.push(i[c],i[u],i[h],i[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,n=0;for(;i<t.length;){const r=t[i++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[i++];e[n++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const o=t[i++],s=t[i++];e[n++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let e=0;e<t.length;){const r=i[t.charAt(e++)],o=e<t.length?i[t.charAt(e)]:0;++e;const s=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==r||null==o||null==s||null==a)throw Error();const l=r<<2|o>>4;if(n.push(l),64!==s){const t=o<<4&240|s>>2;if(n.push(t),64!==a){const t=s<<6&192|a;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},D=function(t){return function(t){const e=L(t);return O.encodeByteArray(e,!0)}(t).replace(/\./g,"")},M=function(t){try{return O.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function z(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function U(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j(){return"object"==typeof indexedDB}class F extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(H,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",s=`${this.serviceName}: ${o} (${n}).`;return new F(n,s,i)}constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}}const H=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function X(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const r of i){if(!n.includes(r))return!1;const i=t[r],o=e[r];if(K(i)&&K(o)){if(!X(i,o))return!1}else if(i!==o)return!1}for(const t of n)if(!i.includes(t))return!1;return!0}function K(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){const e=[];for(const[i,n]of Object.entries(t))Array.isArray(n)?n.forEach((t=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function q(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[i,n]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)}})),e}function $(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e){const i=new Y(t,e);return i.subscribe.bind(i)}class Y{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,i){let n;if(void 0===t&&void 0===e&&void 0===i)throw new Error("Missing Observer.");n=function(t,e){if("object"!=typeof t||null===t)return!1;for(const i of e)if(i in t&&"function"==typeof t[i])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:i},void 0===n.next&&(n.next=Q),void 0===n.error&&(n.error=Q),void 0===n.complete&&(n.complete=Q);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}})),this.observers.push(n),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t){return t&&t._delegate?t._delegate:t}class tt{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new P;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(t)&&e.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(t),this.onInitCallbacks.set(n,r);const o=this.instances.get(n);return o&&t(o,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const n of i)try{n(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,"[DEFAULT]"===n?void 0:n),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var n;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class it{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new et(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=[];var rt,ot;(ot=rt||(rt={}))[ot.DEBUG=0]="DEBUG",ot[ot.VERBOSE=1]="VERBOSE",ot[ot.INFO=2]="INFO",ot[ot.WARN=3]="WARN",ot[ot.ERROR=4]="ERROR",ot[ot.SILENT=5]="SILENT";const st={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},at=rt.INFO,lt={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},ct=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),r=lt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${n}]  ${t.name}:`,...i)};class ut{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?st[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}constructor(t){this.name=t,this._logLevel=at,this._logHandler=ct,this._userLogHandler=null,nt.push(this)}}let ht,ft;const dt=new WeakMap,pt=new WeakMap,mt=new WeakMap,gt=new WeakMap,yt=new WeakMap;let bt={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return pt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||mt.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return xt(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function vt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ft||(ft=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(kt(this),e),xt(dt.get(this))}:function(...e){return xt(t.apply(kt(this),e))}:function(e,...i){const n=t.call(kt(this),e,...i);return mt.set(n,e.sort?e.sort():[e]),xt(n)}}function wt(t){return"function"==typeof t?vt(t):(t instanceof IDBTransaction&&function(t){if(pt.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),n()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));pt.set(t,e)}(t),e=t,(ht||(ht=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,bt):t);var e}function xt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(xt(t.result)),n()},o=()=>{i(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&dt.set(e,t)})).catch((()=>{})),yt.set(e,t),e}(t);if(gt.has(t))return gt.get(t);const e=wt(t);return e!==t&&(gt.set(t,e),yt.set(e,t)),e}const kt=t=>yt.get(t);function It(t,e,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=xt(s);return n&&s.addEventListener("upgradeneeded",(t=>{n(xt(s.result),t.oldVersion,t.newVersion,xt(s.transaction))})),i&&s.addEventListener("blocked",(()=>i())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Et=["get","getKey","getAll","getAllKeys","count"],Nt=["put","add","delete","clear"],Tt=new Map;function At(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Tt.get(e))return Tt.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,r=Nt.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!Et.includes(i))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let s=o.store;return n&&(s=s.index(e.shift())),(await Promise.all([s[i](...e),r&&o.done]))[0]};return Tt.set(e,o),o}bt=(t=>({...t,get:(e,i,n)=>At(e,i)||t.get(e,i,n),has:(e,i)=>!!At(e,i)||t.has(e,i)}))(bt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ct=new ut("@firebase/app"),_t={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Rt=new Map,Lt=new Map;function Ot(t,e){try{t.container.addComponent(e)}catch(i){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function Dt(t){const e=t.name;if(Lt.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Lt.set(e,t);for(const e of Rt.values())Ot(e,t);return!0}function Mt(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pt=new W("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new tt("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t="[DEFAULT]"){const e=Rt.get(t);if(!e)throw Pt.create("no-app",{appName:t});return e}function Ut(t,e,i){var n;let r=null!==(n=_t[t])&&void 0!==n?n:t;i&&(r+=`-${i}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ct.warn(t.join(" "))}Dt(new tt(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let jt=null;function Ft(){return jt||(jt=It("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})}))),jt}async function Wt(t,e){var i;try{const i=(await Ft()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");return await n.put(e,Ht(t)),i.done}catch(t){if(t instanceof F)Ct.warn(t.message);else{const e=Pt.create("idb-set",{originalErrorMessage:null===(i=t)||void 0===i?void 0:i.message});Ct.warn(e.message)}}}function Ht(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Xt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Xt(),{heartbeatsToSend:e,unsentEntries:i}=function(t,e=1024){const i=[];let n=t.slice();for(const r of t){const t=i.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Gt(i)>e){t.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),Gt(i)>e){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=D(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Xt(){return(new Date).toISOString().substring(0,10)}class Kt{async runIndexedDBEnvironmentCheck(){return!!j()&&new Promise(((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await Ft()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ht(t))}catch(t){if(t instanceof F)Ct.warn(t.message);else{const i=Pt.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});Ct.warn(i.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Gt(t){return D(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;qt="",Dt(new tt("platform-logger",(t=>new St(t)),"PRIVATE")),Dt(new tt("heartbeat",(t=>new Vt(t)),"PRIVATE")),Ut("@firebase/app","0.7.33",qt),Ut("@firebase/app","0.7.33","esm2017"),Ut("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ut("firebase","9.10.0","app");var $t,Jt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},Yt={},Qt=Qt||{},Zt=Jt||self;function te(){}function ee(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ie(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ne="closure_uid_"+(1e9*Math.random()>>>0),re=0;function oe(t,e,i){return t.call.apply(t.bind,arguments)}function se(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ae(t,e,i){return(ae=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oe:se).apply(null,arguments)}function le(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ce(t,e){function i(){}i.prototype=e.prototype,t.X=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,n){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[i].apply(t,r)}}function ue(){this.s=this.s,this.o=this.o}var he={};ue.prototype.s=!1,ue.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,ne)&&t[ne]||(t[ne]=++re)}(this);delete he[t]}},ue.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fe=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1};function de(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function pe(t,e){for(let e=1;e<arguments.length;e++){const i=arguments[e];if(ee(i)){const e=t.length||0,n=i.length||0;t.length=e+n;for(let r=0;r<n;r++)t[e+r]=i[r]}else t.push(i)}}function me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!Zt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Zt.addEventListener("test",te,e),Zt.removeEventListener("test",te,e)}catch(t){}return t}();function ye(t){return/^[\s\xa0]*$/.test(t)}var be=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ve(t,e){return t<e?-1:t>e?1:0}function we(){var t=Zt.navigator;return t&&(t=t.userAgent)?t:""}function xe(t){return-1!=we().indexOf(t)}function ke(t){return ke[" "](t),t}ke[" "]=te;var Ie,Ee,Ne=xe("Opera"),Te=xe("Trident")||xe("MSIE"),Ae=xe("Edge"),Se=Ae||Te,Ce=xe("Gecko")&&!(-1!=we().toLowerCase().indexOf("webkit")&&!xe("Edge"))&&!(xe("Trident")||xe("MSIE"))&&!xe("Edge"),_e=-1!=we().toLowerCase().indexOf("webkit")&&!xe("Edge");function Re(){var t=Zt.document;return t?t.documentMode:void 0}t:{var Le="",Oe=(Ee=we(),Ce?/rv:([^\);]+)(\)|;)/.exec(Ee):Ae?/Edge\/([\d\.]+)/.exec(Ee):Te?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ee):_e?/WebKit\/(\S+)/.exec(Ee):Ne?/(?:Version)[ \/]?(\S+)/.exec(Ee):void 0);if(Oe&&(Le=Oe?Oe[1]:""),Te){var De=Re();if(null!=De&&De>parseFloat(Le)){Ie=String(De);break t}}Ie=Le}var Me,Pe={};function Be(){return function(t){var e=Pe;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=be(String(Ie)).split("."),i=be("9").split("."),n=Math.max(e.length,i.length);for(let s=0;0==t&&s<n;s++){var r=e[s]||"",o=i[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==r[0].length&&0==o[0].length)break;t=ve(0==r[1].length?0:parseInt(r[1],10),0==o[1].length?0:parseInt(o[1],10))||ve(0==r[2].length,0==o[2].length)||ve(r[2],o[2]),r=r[3],o=o[3]}while(0==t)}return 0<=t}))}if(Zt.document&&Te){var ze=Re();Me=ze||(parseInt(Ie,10)||void 0)}else Me=void 0;var Ue=Me;function je(t,e){if(me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ce){t:{try{ke(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Fe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&je.X.h.call(this)}}ce(je,me);var Fe={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),He=0;function Ve(t,e,i,n,r){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ha=r,this.key=++He,this.ba=this.ea=!1}function Xe(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ke(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function Ge(t){const e={};for(const i in t)e[i]=t[i];return e}const qe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $e(t,e){let i,n;for(let e=1;e<arguments.length;e++){for(i in n=arguments[e],n)t[i]=n[i];for(let e=0;e<qe.length;e++)i=qe[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function Je(t){this.src=t,this.g={},this.h=0}function Ye(t,e){var i=e.type;if(i in t.g){var n,r=t.g[i],o=fe(r,e);(n=0<=o)&&Array.prototype.splice.call(r,o,1),n&&(Xe(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function Qe(t,e,i,n){for(var r=0;r<t.length;++r){var o=t[r];if(!o.ba&&o.listener==e&&o.capture==!!i&&o.ha==n)return r}return-1}Je.prototype.add=function(t,e,i,n,r){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=Qe(t,e,n,r);return-1<s?(e=t[s],i||(e.ea=!1)):((e=new Ve(e,this.src,o,!!n,r)).ea=i,t.push(e)),e};var Ze="closure_lm_"+(1e6*Math.random()|0),ti={};function ei(t,e,i,n,r){if(n&&n.once)return ni(t,e,i,n,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)ei(t,e[o],i,n,r);return null}return i=ui(i),t&&t[We]?t.N(e,i,ie(n)?!!n.capture:!!n,r):ii(t,e,i,!1,n,r)}function ii(t,e,i,n,r,o){if(!e)throw Error("Invalid event type");var s=ie(r)?!!r.capture:!!r,a=li(t);if(a||(t[Ze]=a=new Je(t)),(i=a.add(e,i,n,s,o)).proxy)return i;if(n=function(){function t(i){return e.call(t.src,t.listener,i)}const e=ai;return t}(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)ge||(r=s),void 0===r&&(r=!1),t.addEventListener(e.toString(),n,r);else if(t.attachEvent)t.attachEvent(si(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function ni(t,e,i,n,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)ni(t,e[o],i,n,r);return null}return i=ui(i),t&&t[We]?t.O(e,i,ie(n)?!!n.capture:!!n,r):ii(t,e,i,!0,n,r)}function ri(t,e,i,n,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)ri(t,e[o],i,n,r);else n=ie(n)?!!n.capture:!!n,i=ui(i),t&&t[We]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=Qe(o=t.g[e],i,n,r))&&(Xe(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=li(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qe(e,i,n,r)),(i=-1<t?e[t]:null)&&oi(i))}function oi(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[We])Ye(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(si(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=li(e))?(Ye(i,t),0==i.h&&(i.src=null,e[Ze]=null)):Xe(t)}}}function si(t){return t in ti?ti[t]:ti[t]="on"+t}function ai(t,e){if(t.ba)t=!0;else{e=new je(e,this);var i=t.listener,n=t.ha||t.src;t.ea&&oi(t),t=i.call(n,e)}return t}function li(t){return(t=t[Ze])instanceof Je?t:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(t){return"function"==typeof t?t:(t[ci]||(t[ci]=function(e){return t.handleEvent(e)}),t[ci])}function hi(){ue.call(this),this.i=new Je(this),this.P=this,this.I=null}function fi(t,e){var i,n=t.I;if(n)for(i=[];n;n=n.I)i.push(n);if(t=t.P,n=e.type||e,"string"==typeof e)e=new me(e,t);else if(e instanceof me)e.target=e.target||t;else{var r=e;$e(e=new me(n,t),r)}if(r=!0,i)for(var o=i.length-1;0<=o;o--){var s=e.g=i[o];r=di(s,n,!0,e)&&r}if(r=di(s=e.g=t,n,!0,e)&&r,r=di(s,n,!1,e)&&r,i)for(o=0;o<i.length;o++)r=di(s=e.g=i[o],n,!1,e)&&r}function di(t,e,i,n){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==i){var a=s.listener,l=s.ha||s.src;s.ea&&Ye(t.i,s),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}ce(hi,ue),hi.prototype[We]=!0,hi.prototype.removeEventListener=function(t,e,i,n){ri(this,t,e,i,n)},hi.prototype.M=function(){if(hi.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)Xe(i[n]);delete e.g[t],e.h--}}this.I=null},hi.prototype.N=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},hi.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var pi=Zt.JSON.stringify;function mi(){var t=ki;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var gi,yi=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new bi),(t=>t.reset()));class bi{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function vi(t){Zt.setTimeout((()=>{throw t}),0)}function wi(t,e){gi||function(){var t=Zt.Promise.resolve(void 0);gi=function(){t.then(Ii)}}(),xi||(gi(),xi=!0),ki.add(t,e)}var xi=!1,ki=new class{add(t,e){const i=yi.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}constructor(){this.h=this.g=null}};function Ii(){for(var t;t=mi();){try{t.h.call(t.g)}catch(t){vi(t)}var e=yi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xi=!1}function Ei(t,e){hi.call(this),this.h=t||1,this.g=e||Zt,this.j=ae(this.kb,this),this.l=Date.now()}function Ni(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ti(t,e,i){if("function"==typeof t)i&&(t=ae(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ae(t.handleEvent,t)}return 2147483647<Number(e)?-1:Zt.setTimeout(t,e||0)}function Ai(t){t.g=Ti((()=>{t.g=null,t.i&&(t.i=!1,Ai(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ce(Ei,hi),($t=Ei.prototype).ca=!1,$t.R=null,$t.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),fi(this,"tick"),this.ca&&(Ni(this),this.start()))}},$t.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},$t.M=function(){Ei.X.M.call(this),Ni(this),delete this.g};class Si extends ue{l(t){this.h=arguments,this.g?this.i=!0:Ai(this)}M(){super.M(),this.g&&(Zt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ci(t){ue.call(this),this.h=t,this.g={}}ce(Ci,ue);var _i=[];function Ri(t,e,i,n){Array.isArray(i)||(i&&(_i[0]=i.toString()),i=_i);for(var r=0;r<i.length;r++){var o=ei(e,i[r],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Li(t){Ke(t.g,(function(t,e){this.g.hasOwnProperty(e)&&oi(t)}),t),t.g={}}function Oi(){this.g=!0}function Di(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}return pi(i)}catch(t){return e}}(t,i)+(n?" "+n:"")}))}Ci.prototype.M=function(){Ci.X.M.call(this),Li(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Oi.prototype.Aa=function(){this.g=!1},Oi.prototype.info=function(){};var Mi={},Pi=null;function Bi(){return Pi=Pi||new hi}function zi(t){me.call(this,Mi.Oa,t)}function Ui(t){const e=Bi();fi(e,new zi(e,t))}function ji(t,e){me.call(this,Mi.STAT_EVENT,t),this.stat=e}function Fi(t){const e=Bi();fi(e,new ji(e,t))}function Wi(t,e){me.call(this,Mi.Pa,t),this.size=e}function Hi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Zt.setTimeout((function(){t()}),e)}Mi.Oa="serverreachability",ce(zi,me),Mi.STAT_EVENT="statevent",ce(ji,me),Mi.Pa="timingevent",ce(Wi,me);var Vi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Xi={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ki(){}function Gi(t){return t.h||(t.h=t.i())}function qi(){}Ki.prototype.h=null;var $i,Ji={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Yi(){me.call(this,"d")}function Qi(){me.call(this,"c")}function Zi(){}function tn(t,e,i,n){this.l=t,this.j=e,this.m=i,this.U=n||1,this.S=new Ci(this),this.O=nn,t=Se?125:void 0,this.T=new Ei(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new en}function en(){this.i=null,this.g="",this.h=!1}ce(Yi,me),ce(Qi,me),ce(Zi,Ki),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},$i=new Zi;var nn=45e3,rn={},on={};function sn(t,e,i){t.K=1,t.v=Nn(wn(e)),t.s=i,t.P=!0,an(t,null)}function an(t,e){t.F=Date.now(),hn(t),t.A=wn(t.v);var i=t.A,n=t.U;Array.isArray(n)||(n=[String(n)]),zn(i.i,"t",n),t.C=0,i=t.l.H,t.h=new en,t.g=Br(t.l,i?e:null,!t.s),0<t.N&&(t.L=new Si(ae(t.Ka,t,t.g),t.N)),Ri(t.S,t.g,"readystatechange",t.hb),e=t.H?Ge(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ui(1),function(t,e,i,n,r,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+c+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+e+"\n"+i+"\n"+s}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ln(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function cn(t,e,i){let n,r=!0;for(;!t.I&&t.C<i.length;){if(n=un(t,i),n==on){4==e&&(t.o=4,Fi(14),r=!1),Di(t.j,t.m,null,"[Incomplete Response]");break}if(n==rn){t.o=4,Fi(15),Di(t.j,t.m,i,"[Invalid Chunk]"),r=!1;break}Di(t.j,t.m,n,null),gn(t,n)}ln(t)&&n!=on&&n!=rn&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,Fi(16),r=!1),t.i=t.i&&r,r?0<i.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),Cr(e),e.K=!0,Fi(11))):(Di(t.j,t.m,i,"[Invalid Chunked Response]"),mn(t),pn(t))}function un(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?on:(i=Number(e.substring(i,n)),isNaN(i)?rn:(n+=1)+i>e.length?on:(e=e.substr(n,i),t.C=n+i,e))}function hn(t){t.V=Date.now()+t.O,fn(t,t.O)}function fn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Hi(ae(t.fb,t),e)}function dn(t){t.B&&(Zt.clearTimeout(t.B),t.B=null)}function pn(t){0==t.l.G||t.I||Lr(t.l,t)}function mn(t){dn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ni(t.T),Li(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gn(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||Vn(i.h,t)))if(!t.J&&Vn(i.h,t)&&3==i.G){try{var n=i.Fa.g.parse(e)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;Rr(i),xr(i)}Sr(i),Fi(18)}}else i.Ba=r[1],0<i.Ba-i.T&&37500>r[2]&&i.L&&0==i.A&&!i.v&&(i.v=Hi(ae(i.bb,i),6e3));if(1>=Hn(i.h)&&i.ja){try{i.ja()}catch(t){}i.ja=void 0}}else Dr(i,11)}else if((t.J||i.g==t)&&Rr(i),!ye(e))for(r=i.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(i.T=c[0],c=c[1],2==i.G)if("c"==c[0]){i.I=c[1],i.ka=c[2];const e=c[3];null!=e&&(i.ma=e,i.j.info("VER="+i.ma));const r=c[4];null!=r&&(i.Ca=r,i.j.info("SVER="+i.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(n=1.5*u,i.J=n,i.j.info("backChannelRequestTimeoutMs_="+n)),n=i;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=n.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Xn(o,o.h),o.h=null))}if(n.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.za=t,En(n.F,n.D,t))}}i.G=3,i.l&&i.l.xa(),i.$&&(i.P=Date.now()-t.F,i.j.info("Handshake RTT: "+i.P+"ms"));var s=t;if((n=i).sa=Pr(n,n.H?n.ka:null,n.V),s.J){Kn(n.h,s);var a=s,l=n.J;l&&a.setTimeout(l),a.B&&(dn(a),hn(a)),n.g=s}else Ar(n);0<i.i.length&&Ir(i)}else"stop"!=c[0]&&"close"!=c[0]||Dr(i,7);else 3==i.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Dr(i,7):wr(i):"noop"!=c[0]&&i.l&&i.l.wa(c),i.A=0)}Ui(4)}catch(t){}}function yn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ee(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var i=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ee(t)||"string"==typeof t){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const n in t)e[i++]=n;return e}}}(t),n=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ee(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}(t),r=n.length,o=0;o<r;o++)e.call(void 0,n[o],i&&i[o],t)}($t=tn.prototype).setTimeout=function(t){this.O=t},$t.hb=function(t){t=t.target;const e=this.L;e&&3==pr(t)?e.l():this.Ka(t)},$t.Ka=function(t){try{if(t==this.g)t:{const u=pr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(3!=u||Se||this.g&&(this.h.h||this.g.fa()||mr(this.g)))){this.I||4!=u||7==e||Ui(8==e||0>=h?3:2),dn(this);var i=this.g.aa();this.Y=i;e:if(ln(this)){var n=mr(this.g);t="";var r=n.length,o=4==pr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){mn(this),pn(this);var s="";break e}this.h.i=new Zt.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:o&&e==r-1});n.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==i,function(t,e,i,n,r,o,s){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+e+"\n"+i+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,u,i),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(a)){var c=a;break e}}c=null}if(!(i=c)){this.i=!1,this.o=3,Fi(12),mn(this),pn(this);break t}Di(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gn(this,i)}this.P?(cn(this,u,s),Se&&this.i&&3==u&&(Ri(this.S,this.T,"tick",this.gb),this.T.start())):(Di(this.j,this.m,s,null),gn(this,s)),4==u&&mn(this),this.i&&!this.I&&(4==u?Lr(this.l,this):(this.i=!1,hn(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.o=3,Fi(12)):(this.o=0,Fi(13)),mn(this),pn(this)}}}catch(t){}},$t.gb=function(){if(this.g){var t=pr(this.g),e=this.g.fa();this.C<e.length&&(dn(this),cn(this,t,e),this.i&&4!=t&&hn(this))}},$t.cancel=function(){this.I=!0,mn(this)},$t.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Ui(3),Fi(17)),mn(this),this.o=2,pn(this)):fn(this,this.V-t)};var bn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vn){this.h=void 0!==e?e:t.h,xn(this,t.j),this.s=t.s,this.g=t.g,kn(this,t.m),this.l=t.l,e=t.i;var i=new Dn;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),In(this,i),this.o=t.o}else t&&(i=String(t).match(bn))?(this.h=!!e,xn(this,i[1]||"",!0),this.s=Tn(i[2]||""),this.g=Tn(i[3]||"",!0),kn(this,i[4]),this.l=Tn(i[5]||"",!0),In(this,i[6]||"",!0),this.o=Tn(i[7]||"")):(this.h=!!e,this.i=new Dn(null,this.h))}function wn(t){return new vn(t)}function xn(t,e,i){t.j=i?Tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function In(t,e,i){e instanceof Dn?(t.i=e,function(t,e){e&&!t.j&&(Mn(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(Pn(this,e),zn(this,i,t))}),t)),t.j=e}(t.i,t.h)):(i||(e=An(e,Ln)),t.i=new Dn(e,t.h))}function En(t,e,i){t.i.set(e,i)}function Nn(t){return En(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function An(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,Sn),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(An(e,Cn,!0),":");var i=this.g;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(An(e,Cn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&t.push("/"),t.push(An(i,"/"==i.charAt(0)?Rn:_n,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.o)&&t.push("#",An(i,On)),t.join("")};var Cn=/[#\/\?@]/g,_n=/[#\?:]/g,Rn=/[#\?]/g,Ln=/[#\?@]/g,On=/#/g;function Dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),r=null;if(0<=n){var o=t[i].substring(0,n);r=t[i].substring(n+1)}else o=t[i];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function Pn(t,e){Mn(t),e=Un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bn(t,e){return Mn(t),e=Un(t,e),t.g.has(e)}function zn(t,e,i){Pn(t,e),0<i.length&&(t.i=null,t.g.set(Un(t,e),de(i)),t.h+=i.length)}function Un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}($t=Dn.prototype).add=function(t,e){Mn(this),this.i=null,t=Un(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},$t.forEach=function(t,e){Mn(this),this.g.forEach((function(i,n){i.forEach((function(i){t.call(e,i,n,this)}),this)}),this)},$t.oa=function(){Mn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let n=0;n<e.length;n++){const r=t[n];for(let t=0;t<r.length;t++)i.push(e[n])}return i},$t.W=function(t){Mn(this);let e=[];if("string"==typeof t)Bn(this,t)&&(e=e.concat(this.g.get(Un(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},$t.set=function(t,e){return Mn(this),this.i=null,Bn(this,t=Un(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},$t.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},$t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var n=e[i];const o=encodeURIComponent(String(n)),s=this.W(n);for(n=0;n<s.length;n++){var r=o;""!==s[n]&&(r+="="+encodeURIComponent(String(s[n]))),t.push(r)}}return this.i=t.join("&")};function jn(t){this.l=t||Fn,Zt.PerformanceNavigationTiming?t=0<(t=Zt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Zt.g&&Zt.g.Ga&&Zt.g.Ga()&&Zt.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fn=10;function Wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Hn(t){return t.h?1:t.g?t.g.size:0}function Vn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Xn(t,e){t.g?t.g.add(e):t.h=e}function Kn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Gn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return de(t.i)}function qn(){}function $n(){this.g=new qn}function Jn(t,e,i){const n=i||"";try{yn(t,(function(t,i){let r=t;ie(t)&&(r=pi(t)),e.push(n+i+"="+encodeURIComponent(r))}))}catch(t){throw e.push(n+"type="+encodeURIComponent("_badmap")),t}}function Yn(t,e,i,n,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(n)}catch(t){}}function Qn(t){this.l=t.$b||null,this.j=t.ib||!1}function Zn(t,e){hi.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}jn.prototype.cancel=function(){if(this.i=Gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},qn.prototype.stringify=function(t){return Zt.JSON.stringify(t,void 0)},qn.prototype.parse=function(t){return Zt.JSON.parse(t,void 0)},ce(Qn,Ki),Qn.prototype.g=function(){return new Zn(this.l,this.j)},Qn.prototype.i=function(t){return function(){return t}}({}),ce(Zn,hi);var tr=0;function er(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}function ir(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nr(t)}function nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}($t=Zn.prototype).open=function(t,e){if(this.readyState!=tr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nr(this)},$t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Zt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))},$t.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ir(this)),this.readyState=tr},$t.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==Zt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;er(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))},$t.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ir(this):nr(this),3==this.readyState&&er(this)}},$t.Ua=function(t){this.g&&(this.response=this.responseText=t,ir(this))},$t.Ta=function(t){this.g&&(this.response=t,ir(this))},$t.ga=function(){this.g&&ir(this)},$t.setRequestHeader=function(t,e){this.v.append(t,e)},$t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},$t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(Zn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var rr=Zt.JSON.parse;function or(t){hi.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sr,this.K=this.L=!1}ce(or,hi);var sr="",ar=/^https?$/i,lr=["POST","PUT"];function cr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ur(t),fr(t)}function ur(t){t.D||(t.D=!0,fi(t,"complete"),fi(t,"error"))}function hr(t){if(t.h&&void 0!==Qt&&(!t.C[1]||4!=pr(t)||2!=t.aa()))if(t.v&&4==pr(t))Ti(t.Ha,0,t);else if(fi(t,"readystatechange"),4==pr(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===a){var r=String(t.H).match(bn)[1]||null;if(!r&&Zt.self&&Zt.self.location){var o=Zt.self.location.protocol;r=o.substr(0,o.length-1)}n=!ar.test(r?r.toLowerCase():"")}i=n}if(i)fi(t,"complete"),fi(t,"success");else{t.m=6;try{var s=2<pr(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.aa()+"]",ur(t)}}finally{fr(t)}}}function fr(t,e){if(t.g){dr(t);const i=t.g,n=t.C[0]?te:null;t.g=null,t.C=null,e||fi(t,"ready");try{i.onreadystatechange=n}catch(t){}}}function dr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Zt.clearTimeout(t.A),t.A=null)}function pr(t){return t.g?t.g.readyState:0}function mr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function gr(t){let e="";return Ke(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function yr(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=gr(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):En(t,e,i))}function br(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function vr(t){this.Ca=0,this.i=[],this.j=new Oi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=br("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=br("baseRetryDelayMs",5e3,t),this.ab=br("retryDelaySeedMs",1e4,t),this.Za=br("forwardChannelMaxRetries",2,t),this.ta=br("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new jn(t&&t.concurrentRequestLimit),this.Fa=new $n,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function wr(t){if(kr(t),3==t.G){var e=t.U++,i=wn(t.F);En(i,"SID",t.I),En(i,"RID",e),En(i,"TYPE","terminate"),Nr(t,i),(e=new tn(t,t.j,e,void 0)).K=2,e.v=Nn(wn(i)),i=!1,Zt.navigator&&Zt.navigator.sendBeacon&&(i=Zt.navigator.sendBeacon(e.v.toString(),"")),!i&&Zt.Image&&((new Image).src=e.v,i=!0),i||(e.g=Br(e.l,null),e.g.da(e.v)),e.F=Date.now(),hn(e)}Mr(t)}function xr(t){t.g&&(Cr(t),t.g.cancel(),t.g=null)}function kr(t){xr(t),t.u&&(Zt.clearTimeout(t.u),t.u=null),Rr(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Zt.clearTimeout(t.m),t.m=null)}function Ir(t){Wn(t.h)||t.m||(t.m=!0,wi(t.Ja,t),t.C=0)}function Er(t,e){var i;i=e?e.m:t.U++;const n=wn(t.F);En(n,"SID",t.I),En(n,"RID",i),En(n,"AID",t.T),Nr(t,n),t.o&&t.s&&yr(n,t.o,t.s),i=new tn(t,t.j,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Tr(t,i,1e3),i.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xn(t.h,i),sn(i,n,e)}function Nr(t,e){t.ia&&Ke(t.ia,(function(t,i){En(e,i,t)})),t.l&&yn({},(function(t,i){En(e,i,t)}))}function Tr(t,e,i){i=Math.min(t.i.length,i);var n=t.l?ae(t.l.Qa,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<i;s++){let i=r[s].h;const a=r[s].g;if(i-=e,0>i)e=Math.max(0,r[s].h-100),o=!1;else try{Jn(a,t,"req"+i+"_")}catch(t){n&&n(a)}}if(o){n=t.join("&");break t}}}return t=t.i.splice(0,i),e.D=t,n}function Ar(t){t.g||t.u||(t.Z=1,wi(t.Ia,t),t.A=0)}function Sr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Hi(ae(t.Ia,t),Or(t,t.A)),t.A++,!0)}function Cr(t){null!=t.B&&(Zt.clearTimeout(t.B),t.B=null)}function _r(t){t.g=new tn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=wn(t.sa);En(e,"RID","rpc"),En(e,"SID",t.I),En(e,"CI",t.L?"0":"1"),En(e,"AID",t.T),En(e,"TYPE","xmlhttp"),Nr(t,e),t.o&&t.s&&yr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var i=t.g;t=t.ka,i.K=1,i.v=Nn(wn(e)),i.s=null,i.P=!0,an(i,t)}function Rr(t){null!=t.v&&(Zt.clearTimeout(t.v),t.v=null)}function Lr(t,e){var i=null;if(t.g==e){Rr(t),Cr(t),t.g=null;var n=2}else{if(!Vn(t.h,e))return;i=e.D,Kn(t.h,e),n=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;fi(n=Bi(),new Wi(n,i,e,r)),Ir(t)}else Ar(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==n&&function(t,e){return!(Hn(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Ya?0:t.Za)||(t.m=Hi(ae(t.Ja,t,e),Or(t,t.C)),t.C++,0)))}(t,e)||2==n&&Sr(t)))switch(i&&0<i.length&&(e=t.h,e.i=e.i.concat(i)),r){case 1:Dr(t,5);break;case 4:Dr(t,10);break;case 3:Dr(t,6);break;default:Dr(t,2)}}function Or(t,e){let i=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(i*=2),i*e}function Dr(t,e){if(t.j.info("Error code "+e),2==e){var i=null;t.l&&(i=null);var n=ae(t.jb,t);i||(i=new vn("//www.google.com/images/cleardot.gif"),Zt.location&&"http"==Zt.location.protocol||xn(i,"https"),Nn(i)),function(t,e){const i=new Oi;if(Zt.Image){const n=new Image;n.onload=le(Yn,i,n,"TestLoadImage: loaded",!0,e),n.onerror=le(Yn,i,n,"TestLoadImage: error",!1,e),n.onabort=le(Yn,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=le(Yn,i,n,"TestLoadImage: timeout",!1,e),Zt.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}(i.toString(),n)}else Fi(2);t.G=0,t.l&&t.l.va(e),Mr(t),kr(t)}function Mr(t){if(t.G=0,t.la=[],t.l){const e=Gn(t.h);0==e.length&&0==t.i.length||(pe(t.la,e),pe(t.la,t.i),t.h.i.length=0,de(t.i),t.i.length=0),t.l.ua()}}function Pr(t,e,i){var n=i instanceof vn?wn(i):new vn(i,void 0);if(""!=n.g)e&&(n.g=e+"."+n.g),kn(n,n.m);else{var r=Zt.location;n=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new vn(null,void 0);n&&xn(o,n),e&&(o.g=e),r&&kn(o,r),i&&(o.l=i),n=o}return i=t.D,e=t.za,i&&e&&En(n,i,e),En(n,"VER",t.ma),Nr(t,n),n}function Br(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=i&&t.Da&&!t.ra?new or(new Qn({ib:!0})):new or(t.ra)).L=t.H,e}function zr(){}function Ur(){if(Te&&!(10<=Number(Ue)))throw Error("Environmental error: no available transport.")}function jr(t,e){hi.call(this),this.g=new vr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!ye(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ye(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Hr(this)}function Fr(t){Yi.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wr(){Qi.call(this),this.status=1}function Hr(t){this.g=t}($t=or.prototype).da=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$i.g(),this.C=this.u?Gi(this.u):Gi($i),this.g.onreadystatechange=ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void cr(this,t)}if(t=i||"",i=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const t of n.keys())i.set(t,n.get(t))}n=Array.from(i.keys()).find((t=>"content-type"==t.toLowerCase())),r=Zt.FormData&&t instanceof Zt.FormData,!(0<=fe(lr,e))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of i)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dr(this),0<this.B&&((this.K=function(t){return Te&&Be()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.qa,this)):this.A=Ti(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){cr(this,t)}},$t.qa=function(){void 0!==Qt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fi(this,"timeout"),this.abort(8))},$t.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fi(this,"complete"),fi(this,"abort"),fr(this))},$t.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fr(this,!0)),or.X.M.call(this)},$t.Ha=function(){this.s||(this.F||this.v||this.l?hr(this):this.eb())},$t.eb=function(){hr(this)},$t.aa=function(){try{return 2<pr(this)?this.g.status:-1}catch(t){return-1}},$t.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},$t.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),rr(e)}},$t.Ea=function(){return this.m},$t.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},($t=vr.prototype).ma=8,$t.G=1,$t.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new tn(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=Ge(o),$e(o,this.S)):o=this.S),null!==this.o||this.N||(r.H=o,o=null),this.O)t:{for(var e=0,i=0;i<this.i.length;i++){var n=this.i[i];if(void 0===(n="__data__"in n.g&&"string"==typeof(n=n.g.__data__)?n.length:void 0))break;if(4096<(e+=n)){e=i;break t}if(4096===e||i===this.i.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Tr(this,r,e),En(i=wn(this.F),"RID",t),En(i,"CVER",22),this.D&&En(i,"X-HTTP-Session-Id",this.D),Nr(this,i),o&&(this.N?e="headers="+encodeURIComponent(String(gr(o)))+"&"+e:this.o&&yr(i,this.o,o)),Xn(this.h,r),this.Xa&&En(i,"TYPE","init"),this.O?(En(i,"$req",e),En(i,"SID","null"),r.Z=!0,sn(r,i,null)):sn(r,i,e),this.G=2}}else 3==this.G&&(t?Er(this,t):0==this.i.length||Wn(this.h)||Er(this))},$t.Ia=function(){if(this.u=null,_r(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Hi(ae(this.cb,this),t)}},$t.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Fi(10),xr(this),_r(this))},$t.bb=function(){null!=this.v&&(this.v=null,xr(this),Sr(this),Fi(19))},$t.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Fi(2)):(this.j.info("Failed to ping google.com"),Fi(1))},($t=zr.prototype).xa=function(){},$t.wa=function(){},$t.va=function(){},$t.ua=function(){},$t.Qa=function(){},Ur.prototype.g=function(t,e){return new jr(t,e)},ce(jr,hi),jr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;Fi(0),t.V=e,t.ia=i||{},t.L=t.Y,t.F=Pr(t,null,t.V),Ir(t)},jr.prototype.close=function(){wr(this.g)},jr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var i={};i.__data__=t,t=i}else this.v&&((i={}).__data__=pi(t),t=i);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.$a++,t)),3==e.G&&Ir(e)},jr.prototype.M=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,jr.X.M.call(this)},ce(Fr,Yi),ce(Wr,Qi),ce(Hr,zr),Hr.prototype.xa=function(){fi(this.g,"a")},Hr.prototype.wa=function(t){fi(this.g,new Fr(t))},Hr.prototype.va=function(t){fi(this.g,new Wr(t))},Hr.prototype.ua=function(){fi(this.g,"b")},Ur.prototype.createWebChannel=Ur.prototype.g,jr.prototype.send=jr.prototype.u,jr.prototype.open=jr.prototype.m,jr.prototype.close=jr.prototype.close,Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,Xi.COMPLETE="complete",qi.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",hi.prototype.listen=hi.prototype.N,or.prototype.listenOnce=or.prototype.O,or.prototype.getLastError=or.prototype.Na,or.prototype.getLastErrorCode=or.prototype.Ea,or.prototype.getStatus=or.prototype.aa,or.prototype.getResponseJson=or.prototype.Ra,or.prototype.getResponseText=or.prototype.fa,or.prototype.send=or.prototype.da;Yt.createWebChannelTransport=function(){return new Ur},Yt.getStatEventTarget=function(){return Bi()},Yt.ErrorCode=Vi,Yt.EventType=Xi,Yt.Event=Mi,Yt.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Yt.FetchXmlHttpFactory=Qn,Yt.WebChannel=qi,Yt.XhrIo=or,o("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Vr.UNAUTHENTICATED=new Vr(null),Vr.GOOGLE_CREDENTIALS=new Vr("google-credentials-uid"),Vr.FIRST_PARTY=new Vr("first-party-uid"),Vr.MOCK_USER=new Vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new ut("@firebase/firestore");function Gr(t,...e){if(Kr.logLevel<=rt.DEBUG){const i=e.map($r);Kr.debug(`Firestore (${Xr}): ${t}`,...i)}}function qr(t,...e){if(Kr.logLevel<=rt.ERROR){const i=e.map($r);Kr.error(`Firestore (${Xr}): ${t}`,...i)}}function $r(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+t;throw qr(e),new Error(e)}function Yr(t,e){t||Jr()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Zr extends F{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class io{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Vr.UNAUTHENTICATED)))}shutdown(){}}class no{start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let r=new to;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new to,t.enqueueRetryable((()=>n(this.currentUser)))};const o=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},s=t=>{Gr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Gr("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new to)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Gr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Yr("string"==typeof e.accessToken),new eo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Yr(null===t||"string"==typeof t),new Vr(t)}constructor(t){this.t=t,this.currentUser=Vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class ro{I(){return this.g?this.g():(Yr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,i,n){this.h=t,this.l=e,this.m=i,this.g=n,this.type="FirstParty",this.user=Vr.FIRST_PARTY,this.p=new Map}}class oo{getToken(){return Promise.resolve(new ro(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,i,n){this.h=t,this.l=e,this.m=i,this.g=n}}class so{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ao{start(t,e){const i=t=>{null!=t.error&&Gr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.A;return this.A=t.token,Gr("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{Gr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?n(t):Gr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Yr("string"==typeof t.token),this.A=t.token,new so(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=lo(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<e&&(i+=t.charAt(n[r]%t.length))}return i}}function uo(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{get length(){return this.len}isEqual(t){return 0===ho.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ho?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),r=e.get(n);if(i<r)return-1;if(i>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,i){void 0===e?e=0:e>t.length&&Jr(),void 0===i?i=t.length-e:i>t.length-e&&Jr(),this.segments=t,this.offset=e,this.len=i}}class fo extends ho{construct(t,e,i){return new fo(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new Zr(Qr.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new fo(e)}static emptyPath(){return new fo([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{static fromPath(t){return new po(fo.fromString(t))}static fromName(t){return new po(fo.fromString(t).popFirst(5))}static empty(){return new po(fo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===fo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return fo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new po(new fo(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}mo.UNKNOWN_ID=-1;function go(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
yo.at=-1;class bo{insert(t,e){return new bo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wo.BLACK,null,null))}remove(t){return new bo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vo(this.root,t,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vo(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||wo.EMPTY}}class vo{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&n&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class wo{copy(t,e,i,n,r){return new wo(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const r=i(t,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===r?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return wo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return wo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jr();if(this.right.isRed())throw Jr();const t=this.left.check();if(t!==this.right.check())throw Jr();return t+(this.isRed()?0:1)}constructor(t,e,i,n,r){this.key=t,this.value=e,this.color=null!=i?i:wo.RED,this.left=null!=n?n:wo.EMPTY,this.right=null!=r?r:wo.EMPTY,this.size=this.left.size+1+this.right.size}}wo.EMPTY=null,wo.RED=!0,wo.BLACK=!1,wo.EMPTY=new class{get key(){throw Jr()}get value(){throw Jr()}get color(){throw Jr()}get left(){throw Jr()}get right(){throw Jr()}copy(t,e,i,n,r){return this}insert(t,e,i){return new wo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ko(this.data.getIterator())}getIteratorFrom(t){return new ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xo(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new bo(this.comparator)}}class ko{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}let Io=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static fromBase64String(t){const e=atob(t);return new Eo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new Eo(e)}[Io](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return uo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Eo.EMPTY_BYTE_STRING=new Eo("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function No(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function To(t){return"string"==typeof t?Eo.fromBase64String(t):Eo.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(t,e,i,n,r,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class So{static empty(){return new So("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof So&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}function Co(t){return 0===t&&1/t==-1/0}function _o(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ro,Lo;(Lo=Ro||(Ro={}))[Lo.OK=0]="OK",Lo[Lo.CANCELLED=1]="CANCELLED",Lo[Lo.UNKNOWN=2]="UNKNOWN",Lo[Lo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lo[Lo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lo[Lo.NOT_FOUND=5]="NOT_FOUND",Lo[Lo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lo[Lo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lo[Lo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lo[Lo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lo[Lo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lo[Lo.ABORTED=10]="ABORTED",Lo[Lo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lo[Lo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lo[Lo.INTERNAL=13]="INTERNAL",Lo[Lo.UNAVAILABLE=14]="UNAVAILABLE",Lo[Lo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new bo(po.comparator);new bo(po.comparator);new bo(po.comparator),new xo(po.comparator);new xo(uo);const Oo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Do=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Mo=Do;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(No(t.integerValue));else if("doubleValue"in t){const i=No(t.doubleValue);isNaN(i)?this.le(e,13):(this.le(e,15),Co(i)?e.fe(0):e.fe(i))}else if("timestampValue"in t){const i=t.timestampValue;this.le(e,20),"string"==typeof i?e.de(i):(e.de(`${i.seconds||""}`),e.fe(i.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(To(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.le(e,45),e.fe(i.latitude||0),e.fe(i.longitude||0)}else"mapValue"in t?_o(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Jr()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const i=t.fields||{};this.le(e,55);for(const t of Object.keys(i))this._e(t,e),this.ae(i[t],e)}pe(t,e){const i=t.values||[];this.le(e,50);for(const t of i)this.ae(t,e)}ge(t,e){this.le(e,37),po.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}constructor(){}}Po.Te=new Po;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class Bo{static withCacheSize(t){return new Bo(t,Bo.DEFAULT_COLLECTION_PERCENTILE,Bo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bo.DEFAULT_COLLECTION_PERCENTILE=10,Bo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bo.DEFAULT=new Bo(41943040,Bo.DEFAULT_COLLECTION_PERCENTILE,Bo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bo.DISABLED=new Bo(-1,0,0);function zo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),n=Math.max(0,e-i);n>0&&Gr("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,n,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(t,e,i=1e3,n=1.5,r=6e4){this.Hs=t,this.timerId=e,this.wo=i,this.mo=n,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{static createAndSchedule(t,e,i,n,r){const o=Date.now()+i,s=new jo(t,e,o,n,r);return s.start(i),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Zr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,i,n,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new to,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Fo(t,e){if(qr("AsyncQueue",`${e}: ${t}`),go(t))return new Zr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Zr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new to;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Fo(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=Vr.UNAUTHENTICATED,this.clientId=co.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{Gr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(Gr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}const Ho=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Zr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Zr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,i,n){if(!0===e&&!0===n)throw new Zr(Qr.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{get app(){if(!this._app)throw new Zr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Zr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new io;switch(t.type){case"gapi":const e=t.client;return new oo(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Zr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ho.get(t);e&&(Gr("ComponentProvider","Removing Datastore"),Ho.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,i,n){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vo({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=zo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new to;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!go(t))throw t;Gr("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw qr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,i){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const n=jo.createAndSchedule(this,t,e,i,(t=>this.Jc(t)));return this.Uc.push(n),n}Wc(){this.qc&&Jr()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Uo(this,"async_queue_retry"),this.jc=()=>{const t=zo();t&&Gr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=zo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}}class Go extends Xo{_terminate(){return this._firestoreClient||qo(this),this._firestoreClient.terminate()}constructor(t,e,i,n){super(t,e,i,n),this.type="firestore",this._queue=new Ko,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}}function qo(t){var e;const i=t._freezeSettings(),n=function(t,e,i,n){return new Ao(t,e,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Wo(t._authCredentials,t._appCheckCredentials,t._queue,n)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){Xr="9.10.0",Dt(new tt("firestore",((t,{instanceIdentifier:i,options:n})=>{const r=t.getProvider("app").getImmediate(),o=new Go(new no(t.getProvider("auth-internal")),new ao(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Zr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(t.options.projectId,e)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),o._setSettings(n),o}),"PUBLIC").setMultipleInstances(!0)),Ut("@firebase/firestore","3.5.0",t),Ut("@firebase/firestore","3.5.0","esm2017")}();function $o(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]])}return i}Object.create;Object.create;function Jo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yo=Jo,Qo=new W("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zo=new ut("@firebase/auth");function ts(t,...e){Zo.logLevel<=rt.ERROR&&Zo.error(`Auth (9.10.0): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t,...e){throw rs(t,...e)}function is(t,...e){return rs(t,...e)}function ns(t,e,i){const n=Object.assign(Object.assign({},Yo()),{[e]:i});return new W("auth","Firebase",n).create(e,{appName:t.name})}function rs(t,...e){if("string"!=typeof t){const i=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(i,...n)}return Qo.create(t,...e)}function os(t,e,...i){if(!t)throw rs(e,...i)}function ss(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ts(e),new Error(e)}function as(t,e){t||ss(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;function cs(t){as(t instanceof Function,"Expected a class definition");let e=ls.get(t);return e?(as(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ls.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function us(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function hs(){return"http:"===fs()||"https:"===fs()}function fs(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(hs()||z()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ps{get(){return ds()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,as(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){as(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},bs=new ps(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,i,n,r={}){return xs(t,r,(async()=>{let r={},o={};n&&("GET"===e?o=n:r={body:JSON.stringify(n)});const s=G(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),gs.fetch()(Is(t,t.config.apiHost,i,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function xs(t,e,i){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},ys),e);try{const e=new Es(t),r=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ns(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[i,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw Ns(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===i)throw Ns(t,"email-already-in-use",o);if("USER_DISABLED"===i)throw Ns(t,"user-disabled",o);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ns(t,a,s);es(t,a)}}catch(e){if(e instanceof F)throw e;es(t,"network-request-failed")}}async function ks(t,e,i,n,r={}){const o=await ws(t,e,i,n,r);return"mfaPendingCredential"in o&&es(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Is(t,e,i,n){const r=`${e}${i}?${n}`;return t.config.emulator?ms(t.config,r):`${t.config.apiScheme}://${r}`}class Es{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(is(this.auth,"network-request-failed"))),bs.get())}))}}function Ns(t,e,i){const n={appName:t.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=is(t,e,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return 1e3*Number(t)}function Ss(t){var e;const[i,n,r]=t.split(".");if(void 0===i||void 0===n||void 0===r)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const t=M(n);return t?JSON.parse(t):(ts("Failed to decode base64 JWT payload"),null)}catch(t){return ts("Caught error parsing JWT payload as JSON",null===(e=t)||void 0===e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Cs(t,e,i=!1){if(i)return e;try{return await e}catch(e){throw e instanceof F&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class _s{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){var e;const i=t.auth,n=await t.getIdToken(),r=await Cs(t,async function(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}(i,{idToken:n}));os(null==r?void 0:r.users.length,i,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((t=>{var{providerId:e}=t,i=$o(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,h=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),f=!!u&&h,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Rs(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){os(t.idToken,"internal-error"),os(void 0!==t.idToken,"internal-error"),os(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ss(t);return os(e,"internal-error"),os(void 0!==e.exp,"internal-error"),os(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return os(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:n,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const i=await xs(t,{},(async()=>{const i=G({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:r}=t.config,o=Is(t,n,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",gs.fetch()(o,{method:"POST",headers:s,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(t,e);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,e){const{refreshToken:i,accessToken:n,expirationTime:r}=e,o=new Os;return i&&(os("string"==typeof i,"internal-error",{appName:t}),o.refreshToken=i),n&&(os("string"==typeof n,"internal-error",{appName:t}),o.accessToken=n),r&&(os("number"==typeof r,"internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return ss("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e){os("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ms{async getIdToken(t){const e=await Cs(this,this.stsTokenManager.getToken(this.auth,t));return os(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const i=Z(t),n=await i.getIdToken(e),r=Ss(n);os(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:Ts(As(r.auth_time)),issuedAtTime:Ts(As(r.iat)),expirationTime:Ts(As(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Z(t);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(os(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ms(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){os(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Ls(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Cs(this,async function(t,e){return ws(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,n,r,o,s,a,l,c;const u=null!==(i=e.displayName)&&void 0!==i?i:void 0,h=null!==(n=e.email)&&void 0!==n?n:void 0,f=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:v,isAnonymous:w,providerData:x,stsTokenManager:k}=e;os(b&&k,t,"internal-error");const I=Os.fromJSON(this.name,k);os("string"==typeof b,t,"internal-error"),Ds(u,t.name),Ds(h,t.name),os("boolean"==typeof v,t,"internal-error"),os("boolean"==typeof w,t,"internal-error"),Ds(f,t.name),Ds(d,t.name),Ds(p,t.name),Ds(m,t.name),Ds(g,t.name),Ds(y,t.name);const E=new Ms({uid:b,auth:t,email:h,emailVerified:v,displayName:u,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((t=>Object.assign({},t)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(t,e,i=!1){const n=new Os;n.updateFromServerResponse(e);const r=new Ms({uid:e.localId,auth:t,stsTokenManager:n,isAnonymous:i});return await Ls(r),r}constructor(t){var{uid:e,auth:i,stsTokenManager:n}=t,r=$o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _s(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rs(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Ps.type="NONE";const Bs=Ps;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e,i){return`firebase:${t}:${e}:${i}`}class Us{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ms._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new Us(cs(Bs),t,i);const n=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=n[0]||cs(Bs);const o=zs(i,t.config.apiKey,t.name);let s=null;for(const i of e)try{const e=await i._get(o);if(e){const n=Ms._fromJSON(t,e);i!==r&&(s=n),r=i;break}}catch(t){}const a=n.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(o)}catch(t){}}))),new Us(r,t,i)):new Us(r,t,i)}constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=zs(this.userKey,n.apiKey,r),this.fullPersistenceKey=zs("persistence",n.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ks(e))return"Blackberry";if(Gs(e))return"Webos";if(Ws(e))return"Safari";if((e.includes("chrome/")||Hs(e))&&!e.includes("edge/"))return"Chrome";if(Xs(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(e);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Fs(t=B()){return/firefox\//i.test(t)}function Ws(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hs(t=B()){return/crios\//i.test(t)}function Vs(t=B()){return/iemobile/i.test(t)}function Xs(t=B()){return/android/i.test(t)}function Ks(t=B()){return/blackberry/i.test(t)}function Gs(t=B()){return/webos/i.test(t)}function qs(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $s(){return U()&&10===document.documentMode}function Js(t=B()){return qs(t)||Xs(t)||Gs(t)||Ks(t)||/windows phone/i.test(t)||Vs(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ys(t,e=[]){let i;switch(t){case"Browser":i=js(B());break;case"Worker":i=`${js(B())}-${t}`;break;default:i=t}return`${i}/JsCore/9.10.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{pushCallback(t,e){const i=e=>new Promise(((i,n)=>{try{i(t(e))}catch(t){n(t)}}));i.onAbort=e,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const i=[];try{for(const e of this.queue)await e(t),e.onAbort&&i.push(e.onAbort)}catch(t){i.reverse();for(const t of i)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=cs(e)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await Us.create(this,t),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==o||!(null==s?void 0:s.user)||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(t){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return os(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Ls(t)}catch(t){if("auth/network-request-failed"!==(null===(e=t)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Z(t):null;return e&&os(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&os(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(cs(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new W("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&cs(t)||this._popupRedirectResolver;os(e,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[cs(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,n){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return os(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,i,n):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return os(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ys(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return i&&(e["X-Firebase-Client"]=i),e}constructor(t,e,i){this.app=t,this.heartbeatServiceProvider=e,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ea(this),this.idTokenSubscription=new ea(this),this.beforeStateQueue=new Qs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}}function ta(t){return Z(t)}class ea{get next(){return os(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=J((t=>this.observer=t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ia{toJSON(){return ss("not implemented")}_getIdTokenResponse(t){return ss("not implemented")}_linkToIdToken(t,e){return ss("not implemented")}_getReauthenticationResolver(t){return ss("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t,e){return ws(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ra extends ia{static _fromEmailAndPassword(t,e){return new ra(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new ra(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return ks(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return ks(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}(t,{email:this._email,oobCode:this._password});default:es(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return na(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return ks(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:es(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,i,n=null){super("password",i),this._email=t,this._password=e,this._tenantId=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t,e){return ks(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends ia{static _fromParams(t){const e=new sa(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):es("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:i,signInMethod:n}=e,r=$o(e,["providerId","signInMethod"]);if(!i||!n)return null;const o=new sa(i,n);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){return oa(t,this.buildRequest())}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,oa(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,oa(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=G(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la extends ia{static _fromVerification(t,e){return new la({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new la({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return ks(t,"POST","/v1/accounts:signInWithPhoneNumber",vs(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const i=await ks(t,"POST","/v1/accounts:signInWithPhoneNumber",vs(t,e));if(i.temporaryProof)throw Ns(t,"account-exists-with-different-credential",i);return i}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return ks(t,"POST","/v1/accounts:signInWithPhoneNumber",vs(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),aa)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:n}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:n}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:r}=t;return i||e||n||r?new la({verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{static parseLink(t){const e=function(t){const e=q($(t)).link,i=e?q($(e)).deep_link_id:null,n=q($(t)).deep_link_id;return(n?q($(n)).link:null)||n||i||e||t}(t);try{return new ca(e)}catch(t){return null}}constructor(t){var e,i,n,r,o,s;const a=q($(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(i=a.oobCode)&&void 0!==i?i:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);os(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{static credential(t,e){return ra._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=ca.parseLink(e);return os(i,"argument-error"),ra._fromEmailAndCode(t,i.code,i.tenantId)}constructor(){this.providerId=ua.PROVIDER_ID}}ua.PROVIDER_ID="password",ua.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ua.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends ha{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da extends fa{static credential(t){return sa._fromParams({providerId:da.PROVIDER_ID,signInMethod:da.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return da.credentialFromTaggedObject(t)}static credentialFromError(t){return da.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return da.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}da.FACEBOOK_SIGN_IN_METHOD="facebook.com",da.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa extends fa{static credential(t,e){return sa._fromParams({providerId:pa.PROVIDER_ID,signInMethod:pa.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pa.credentialFromTaggedObject(t)}static credentialFromError(t){return pa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return pa.credential(e,i)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}pa.GOOGLE_SIGN_IN_METHOD="google.com",pa.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma extends fa{static credential(t){return sa._fromParams({providerId:ma.PROVIDER_ID,signInMethod:ma.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ma.credentialFromTaggedObject(t)}static credentialFromError(t){return ma.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ma.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}ma.GITHUB_SIGN_IN_METHOD="github.com",ma.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga extends fa{static credential(t,e){return sa._fromParams({providerId:ga.PROVIDER_ID,signInMethod:ga.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ga.credentialFromTaggedObject(t)}static credentialFromError(t){return ga.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return ga.credential(e,i)}catch(t){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ya(t,e){return ks(t,"POST","/v1/accounts:signUp",vs(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ga.TWITTER_SIGN_IN_METHOD="twitter.com",ga.PROVIDER_ID="twitter.com";class ba{static async _fromIdTokenResponse(t,e,i,n=!1){const r=await Ms._fromIdTokenResponse(t,i,n),o=va(i);return new ba({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const n=va(i);return new ba({user:t,providerId:n,_tokenResponse:i,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function va(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa extends F{static _fromErrorAndOperation(t,e,i,n){return new wa(t,e,i,n)}constructor(t,e,i,n){var r;super(e.code,e.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,wa.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}}function xa(t,e,i,n){return("reauthenticate"===e?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw wa._fromErrorAndOperation(t,i,e,n);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e,i=!1){const n=await Cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return ba._forOperation(t,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ia(t,e,i=!1){var n;const{auth:r}=t,o="reauthenticate";try{const n=await Cs(t,xa(r,o,e,t),i);os(n.idToken,r,"internal-error");const s=Ss(n.idToken);os(s,r,"internal-error");const{sub:a}=s;return os(t.uid===a,r,"user-mismatch"),ba._forOperation(t,o,n)}catch(t){throw"auth/user-not-found"===(null===(n=t)||void 0===n?void 0:n.code)&&es(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t,e,i=!1){const n="signIn",r=await xa(t,n,e),o=await ba._fromIdTokenResponse(t,n,r);return i||await t._updateCurrentUser(o.user),o}async function Na(t,e,i){const n=ta(t),r=await ya(n,{returnSecureToken:!0,email:e,password:i}),o=await ba._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(o.user),o}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Ta{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),n=this.localCache[e];i!==n&&t(e,n,i)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,i)=>{this.notifyListeners(t,i)}));const i=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(t.newValue!==n)null!==t.newValue?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!e)return}const n=()=>{const t=this.storage.getItem(i);(e||this.localCache[i]!==t)&&this.notifyListeners(i,t)},r=this.storage.getItem(i);$s()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(n,10):n()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=B();return Ws(t)||qs(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Js(),this._shouldAllowMigration=!0}}Aa.type="LOCAL";const Sa=Aa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Ta{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ca.type="SESSION";const _a=Ca;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const i=new Ra(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:n,data:r}=e.data,o=this.handlersMap[n];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const s=Array.from(o).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function La(t="",e=10){let i="";for(let t=0;t<e;t++)i+=Math.floor(10*Math.random());return t+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ra.receivers=[];class Oa{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=La("",20);n.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),i);o={messageChannel:n,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),n.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[n.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ma(){return void 0!==Da().WorkerGlobalScope&&"function"==typeof Da().importScripts}class Pa{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Ba(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function za(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,i)=>{t.addEventListener("error",(()=>{i(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){i(t)}})),t.addEventListener("success",(async()=>{const i=t.result;i.objectStoreNames.contains("firebaseLocalStorage")?e(i):(i.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Pa(t).toPromise()}(),e(await za()))}))}))}async function Ua(t,e,i){const n=Ba(t,!0).put({fbase_key:e,value:i});return new Pa(n).toPromise()}function ja(t,e){const i=Ba(t,!0).delete(e);return new Pa(i).toPromise()}class Fa{async _openDb(){return this.db||(this.db=await za()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ma()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(Ma()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Oa(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=i[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await za();return await Ua(t,"__sak","1"),await ja(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((i=>Ua(i,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const i=Ba(t,!1).get(e),n=await new Pa(i).toPromise();return void 0===n?null:n.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ja(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ba(t,!1).getAll();return new Pa(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],i=new Set;for(const{fbase_key:n,value:r}of t)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),e.push(n));for(const t of Object.keys(this.localCache))this.localCache[t]&&!i.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Fa.type="LOCAL";const Wa=Fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return new Promise(((e,i)=>{const n=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;n.setAttribute("src",t),n.onload=e,n.onerror=t=>{const e=is("internal-error");e.customData=t,i(e)},n.type="text/javascript",n.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(n)}))}function Va(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Va("rcb"),new ps(3e4,6e4);async function Xa(t,e,i){var n;const r=await i.verify();try{let o;if(os("string"==typeof r,t,"argument-error"),os("recaptcha"===i.type,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){os("enroll"===e.type,t,"internal-error");const i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return ws(t,"POST","/v2/accounts/mfaEnrollment:start",vs(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{os("signin"===e.type,t,"internal-error");const i=(null===(n=o.multiFactorHint)||void 0===n?void 0:n.uid)||o.multiFactorUid;os(i,t,"missing-multi-factor-info");const s=await function(t,e){return ws(t,"POST","/v2/accounts/mfaSignIn:start",vs(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return ws(t,"POST","/v1/accounts:sendVerificationCode",vs(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:r});return e}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{verifyPhoneNumber(t,e){return Xa(this.auth,t,Z(e))}static credential(t,e){return la._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ka.credentialFromTaggedObject(e)}static credentialFromError(t){return Ka.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?la._fromTokenResponse(e,i):null}constructor(t){this.providerId=Ka.PROVIDER_ID,this.auth=ta(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ga(t,e){return e?cs(e):(os(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.PROVIDER_ID="phone",Ka.PHONE_SIGN_IN_METHOD="phone";class qa extends ia{_getIdTokenResponse(t){return oa(t,this._buildIdpRequest())}_linkToIdToken(t,e){return oa(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return oa(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function $a(t){return Ea(t.auth,new qa(t),t.bypassAuthState)}function Ja(t){const{auth:e,user:i}=t;return os(i,e,"internal-error"),Ia(i,new qa(t),t.bypassAuthState)}async function Ya(t){const{auth:e,user:i}=t;return os(i,e,"internal-error"),ka(i,new qa(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:n,tenantId:r,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $a;case"linkViaPopup":case"linkViaRedirect":return Ya;case"reauthViaPopup":case"reauthViaRedirect":return Ja;default:es(this.auth,"internal-error")}}resolve(t){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,i,n,r=!1){this.auth=t,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new ps(2e3,1e4);class tl extends Qa{async executeNotNull(){const t=await this.execute();return os(t,this.auth,"internal-error"),t}async onExecution(){as(1===this.filter.length,"Popup operations only handle one event");const t=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(is(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(is(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tl.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(is(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Za.get())};t()}constructor(t,e,i,n,r){super(t,e,n,r),this.provider=i,this.authWindow=null,this.pollId=null,tl.currentPopupAction&&tl.currentPopupAction.cancel(),tl.currentPopupAction=this}}tl.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const el=new Map;class il extends Qa{async execute(){let t=el.get(this.auth._key());if(!t){try{const e=await async function(t,e){const i=ol(e),n=rl(t);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}el.set(this.auth._key(),t)}return this.bypassAuthState||el.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}}function nl(t,e){el.set(t._key(),e)}function rl(t){return cs(t._redirectPersistence)}function ol(t){return zs("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,e,i=!1){const n=ta(t),r=Ga(n,e),o=new il(n,r,i),s=await o.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}class al{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cl(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!cl(t)){const n=(null===(i=t.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";e.onError(is(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ll(t))}saveEventToCache(t){this.cachedEventUids.add(ll(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ll(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function cl({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ul=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hl=/^https?/;async function fl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return ws(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(dl(t))return}catch(t){}es(t,"unauthorized-domain")}function dl(t){const e=us(),{protocol:i,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===n?"chrome-extension:"===i&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!hl.test(i))return!1;if(ul.test(t))return n===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new ps(3e4,6e4);function ml(){const t=Da().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let gl=null;function yl(t){return gl=gl||function(t){return new Promise(((e,i)=>{var n,r,o;function s(){ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ml(),i(is(t,"network-request-failed"))},timeout:pl.get()})}if(null===(r=null===(n=Da().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Da().gapi)||void 0===o?void 0:o.load)){const e=Va("iframefcb");return Da()[e]=()=>{gapi.load?s():i(is(t,"network-request-failed"))},Ha(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>i(t)))}s()}})).catch((t=>{throw gl=null,t}))}(t),gl}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new ps(5e3,15e3),vl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xl(t){const e=t.config;os(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?ms(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,n={apiKey:e.apiKey,appName:t.name,v:"9.10.0"},r=wl.get(t.config.apiHost);r&&(n.eid=r);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${i}?${G(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Il{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function El(t,e,i,n=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kl),{width:n.toString(),height:r.toString(),top:o,left:s}),c=B().toLowerCase();i&&(a=Hs(c)?"_blank":i),Fs(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,i])=>`${t}${e}=${i},`),"");if(function(t=B()){var e;return qs(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const i=document.createElement("a");i.href=t,i.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Il(null);const h=window.open(e||"",a,u);os(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Il(h)}function Nl(t,e,i,n,r,o){os(t.config.authDomain,t,"auth-domain-config-required"),os(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:n,v:"9.10.0",eventId:r};if(e instanceof ha){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",V(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof fa){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?ms(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${G(a).slice(1)}`}const Tl=class{async _openPopup(t,e,i,n){var r;as(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return El(t,Nl(t,e,i,us(),n),La())}async _openRedirect(t,e,i,n){var r;return await this._originValidation(t),r=Nl(t,e,i,us(),n),Da().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:i}=this.eventManagers[e];return t?Promise.resolve(t):(as(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch((()=>{delete this.eventManagers[e]})),i}async initAndGetManager(t){const e=await async function(t){const e=await yl(t),i=Da().gapi;return os(i,t,"internal-error"),e.open({where:document.body,url:xl(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vl,dontclear:!0},(e=>new Promise((async(i,n)=>{await e.restyle({setHideOnLeave:!1});const r=is(t,"network-request-failed"),o=Da().setTimeout((()=>{n(r)}),bl.get());function s(){Da().clearTimeout(o),i(e)}e.ping(s).then(s,(()=>{n(r)}))}))))}(t),i=new al(t);return e.register("authEvent",(e=>{os(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==r&&e(!!r),es(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=fl(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Js()||Ws()||qs()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_a,this._completeRedirectFn=sl,this._overrideRedirectResult=nl}};var Al;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var i;t((null===(i=e)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){os(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Al="Browser",Dt(new tt("auth",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((t,i)=>{os(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),os(!(null==o?void 0:o.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:o,clientPlatform:Al,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ys(Al)},s=new Zs(t,i,n);return function(t,e){const i=(null==e?void 0:e.persistence)||[],n=(Array.isArray(i)?i:[i]).map(cs);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(i,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,i)=>{t.getProvider("auth-internal").initialize()}))),Dt(new tt("auth-internal",(t=>{const e=ta(t.getProvider("auth").getImmediate());return new Sl(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut("@firebase/auth","0.20.7",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Al)),Ut("@firebase/auth","0.20.7","esm2017");const Cl=document.querySelector(".modal-btn-singIn");refs={body:document.querySelector("body"),backdropSingIn:document.querySelector(".backdrop-singIn-modal"),btnCloseSingIn:document.querySelector('[data-modal-close="singIn"]')};const{body:_l,backdropSingIn:Rl,btnCloseSingIn:Ll}=refs;function Ol(){Rl.classList.toggle("is-hidden"),_l.classList.toggle("noscroll")}function Dl(t){t.target.classList.contains("backdrop")&&(Ol(),Rl.removeEventListener("click",Dl))}refs={openSingUpBtn:document.querySelector('[data-modal-open="singUp"]'),body:document.querySelector("body"),backdropSingUp:document.querySelector(".backdrop-reg-modal"),btnCloseSingUp:document.querySelector('[data-modal-close="reg"]')};const{openSingUpBtn:Ml,body:Pl,backdropSingUp:Bl,btnCloseSingUp:zl}=refs;function Ul(){Bl.classList.toggle("is-hidden"),Pl.classList.toggle("noscroll")}function jl(t){"Escape"===t.code&&(Ul(),window.removeEventListener("keydown",jl))}function Fl(t){t.target.classList.contains("backdrop")&&(Ul(),Bl.removeEventListener("click",Fl))}Ml.addEventListener("click",(function(){Ul(),window.addEventListener("keydown",jl),Bl.addEventListener("click",Fl),zl.addEventListener("click",Ul),Cl.addEventListener("click",(()=>{Ul(),Ol(),window.addEventListener("keydown",jl),Rl.addEventListener("click",Dl),Ll.addEventListener("click",Ol)}))})),refs={formSingUp:document.getElementById("reg-modal-form"),logOutBtn:document.querySelector(".logout-btn"),singUpBtn:document.querySelector(".reg-btn-singUp"),singInBtn:document.querySelector(".modal-btn-singIn")};const{formSingUp:Wl,logOutBtn:Hl,singUpBtn:Vl,singInBtn:Xl}=refs,Kl=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t=zt()){const e=Mt(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const i=Mt(t,"auth");if(i.isInitialized()){const t=i.getImmediate();if(X(i.getOptions(),null!=e?e:{}))return t;es(t,"already-initialized")}return i.initialize({options:e})}(t,{popupRedirectResolver:Tl,persistence:[Wa,Sa,_a]})}(function(t,e={}){if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),n=i.name;if("string"!=typeof n||!n)throw Pt.create("bad-app-name",{appName:String(n)});const r=Rt.get(n);if(r){if(X(t,r.options)&&X(i,r.config))return r;throw Pt.create("duplicate-app",{appName:n})}const o=new it(n);for(const t of Lt.values())o.addComponent(t);const s=new Bt(t,i,o);return Rt.set(n,s),s}({apiKey:"AIzaSyDi-ICz73fxtdr7-RyJz1uHSFQUh0rXdhQ",authDomain:"filmoteka-auth-f095a.firebaseapp.com",databaseURL:"https://filmoteka-auth-f095a-default-rtdb.firebaseio.com",projectId:"filmoteka-auth-f095a",storageBucket:"filmoteka-auth-f095a.appspot.com",messagingSenderId:"579941014930",appId:"1:579941014930:web:cda5220011d3007db5354b"}));Wl.addEventListener("submit",(async function(t){t.preventDefault();const e=t.currentTarget.elements.name.value,i=t.currentTarget.elements.email.value,n=t.currentTarget.elements.password.value;try{R.Loading.pulse({svgColor:"#ff6b08"}),R.Loading.remove(250);const t=(await Na(Kl,i,n)).user;Vl.textContent=`Welcome, ${e}`,Ul(),Ml.disabled=!0,Hl.classList.remove("is-hidden"),console.log(t)}catch(t){t.code;t.message&&_.Notify.failure("Password should be at least 6 characters!"),console.log(t)}}));
//# sourceMappingURL=library.7ff2f448.js.map
