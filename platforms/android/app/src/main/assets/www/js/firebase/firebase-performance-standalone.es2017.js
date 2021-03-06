!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).firebase=e()}(this,(function(){"use strict";
/**
     * @license
     * Copyright 2017 Google Inc.
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
     * Copyright 2017 Google Inc.
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
     */function t(e,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return n}for(const r in n)n.hasOwnProperty(r)&&(e[r]=t(e[r],n[r]));return e}
/**
     * @license
     * Copyright 2017 Google Inc.
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
     */const e="FirebaseError";class n extends Error{constructor(t,i){super(i),this.code=t,this.name=e,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r.prototype.create)}}class r{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const r=e[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?function(t,e){return t.replace(i,(t,n)=>{const r=e[n];return null!=r?r.toString():`<${n}?>`})}(a,r):"Error",c=`${this.serviceName}: ${s} (${o}).`,u=new n(o,c);for(const t of Object.keys(r))"_"!==t.slice(-1)&&(t in u&&console.warn(`Overwriting FirebaseError base field "${t}" can cause unexpected behavior.`),u[t]=r[t]);return u}}const i=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google Inc.
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
     */function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}
/**
     * @license
     * Copyright 2017 Google Inc.
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
     */var a;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(a||(a={}));const s=a.INFO,c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString();switch(e){case a.DEBUG:case a.VERBOSE:console.log(`[${r}]  ${t.name}:`,...n);break;case a.INFO:console.info(`[${r}]  ${t.name}:`,...n);break;case a.WARN:console.warn(`[${r}]  ${t.name}:`,...n);break;case a.ERROR:console.error(`[${r}]  ${t.name}:`,...n);break;default:throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)}};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in a))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}debug(...t){this._logHandler(this,a.DEBUG,...t)}log(...t){this._logHandler(this,a.VERBOSE,...t)}info(...t){this._logHandler(this,a.INFO,...t)}warn(...t){this._logHandler(this,a.WARN,...t)}error(...t){this._logHandler(this,a.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */const l=new r("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),p="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google Inc.
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
class f{constructor(e,n,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.INTERNAL={},this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=t(void 0,e)}get automaticDataCollectionEnabled(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_}set automaticDataCollectionEnabled(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t}get name(){return this.checkDestroyed_(),this.name_}get options(){return this.checkDestroyed_(),this.options_}delete(){return new Promise(t=>{this.checkDestroyed_(),t()}).then(()=>{this.firebase_.INTERNAL.removeApp(this.name_);const t=[];for(const e of Object.keys(this.services_))for(const n of Object.keys(this.services_[e]))t.push(this.services_[e][n]);return Promise.all(t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()))}).then(()=>{this.isDeleted_=!0,this.services_={}})}_getService(t,e=p){if(this.checkDestroyed_(),this.services_[t]||(this.services_[t]={}),!this.services_[t][e]){const n=e!==p?e:void 0,r=this.firebase_.INTERNAL.factories[t](this,this.extendApp.bind(this),n);this.services_[t][e]=r}return this.services_[t][e]}extendApp(e){t(this,e)}checkDestroyed_(){if(this.isDeleted_)throw l.create("app-deleted",{appName:this.name_})}}const h="7.4.0",d=new u("@firebase/app");
/**
     * @license
     * Copyright 2019 Google Inc.
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
     * Copyright 2019 Google Inc.
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
const g=
/**
     * @license
     * Copyright 2019 Google Inc.
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
function(){const e=
/**
     * @license
     * Copyright 2019 Google Inc.
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
function(e){const n={},r={},i={},a={__esModule:!0,initializeApp:function(t,r={}){if("object"!=typeof r||null===r){r={name:r}}const i=r;void 0===i.name&&(i.name=p);const{name:s}=i;if("string"!=typeof s||!s)throw l.create("bad-app-name",{appName:String(s)});if(o(n,s))throw l.create("duplicate-app",{appName:s});const c=new e(t,i,a);return n[s]=c,u(c,"create"),c},app:s,apps:null,SDK_VERSION:h,INTERNAL:{registerService:function(n,o,u,p,f=!1){if(r[n])return d.debug(`There were multiple attempts to register service ${n}.`),a[n];r[n]=o,p&&(i[n]=p,c().forEach(t=>{p("create",t)}));function h(t=s()){if("function"!=typeof t[n])throw l.create("invalid-app-argument",{appName:n});return t[n]()}void 0!==u&&t(h,u);return a[n]=h,e.prototype[n]=function(...t){return this._getService.bind(this,n).apply(this,f?t:[])},h},removeApp:function(t){u(n[t],"delete"),delete n[t]},factories:r,useAsService:f}};function s(t){if(!o(n,t=t||p))throw l.create("no-app",{appName:t});return n[t]}function c(){return Object.keys(n).map(t=>n[t])}function u(t,e){for(const n of Object.keys(r)){const r=f(t,n);if(null===r)return;i[r]&&i[r](e,t)}}function f(t,e){if("serverAuth"===e)return null;return e}return(a.default=a,Object.defineProperty(a,"apps",{get:c}),s.App=e,a)}(f);e.SDK_VERSION=`${e.SDK_VERSION}_LITE`;const n=e.INTERNAL.registerService;return e.INTERNAL.registerService=function(t,e,r,i,o){if("performance"!==t&&"installations"!==t)throw Error(`${t} cannot register with the standalone perf instance`);return n(t,e,r,i,o)},e}();function m(t){return Array.prototype.slice.call(t)}function b(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function _(t,e,n){var r,i=new Promise((function(i,o){b(r=t[e].apply(t,n)).then(i,o)}));return i.request=r,i}function w(t,e,n){var r=_(t,e,n);return r.then((function(t){if(t)return new T(t,r.request)}))}function y(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function v(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return _(this[e],r,arguments)})}))}function E(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function I(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return w(this[e],r,arguments)})}))}function S(t){this._index=t}function T(t,e){this._cursor=t,this._request=e}function A(t){this._store=t}function N(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function k(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new N(n)}function O(t){this._db=t}y(S,"_index",["name","keyPath","multiEntry","unique"]),v(S,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),I(S,"_index",IDBIndex,["openCursor","openKeyCursor"]),y(T,"_cursor",["direction","key","primaryKey","value"]),v(T,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(T.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,n),b(e._request).then((function(t){if(t)return new T(t,e._request)}))}))})})),A.prototype.createIndex=function(){return new S(this._store.createIndex.apply(this._store,arguments))},A.prototype.index=function(){return new S(this._store.index.apply(this._store,arguments))},y(A,"_store",["name","keyPath","indexNames","autoIncrement"]),v(A,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),I(A,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),E(A,"_store",IDBObjectStore,["deleteIndex"]),N.prototype.objectStore=function(){return new A(this._tx.objectStore.apply(this._tx,arguments))},y(N,"_tx",["objectStoreNames","mode"]),E(N,"_tx",IDBTransaction,["abort"]),k.prototype.createObjectStore=function(){return new A(this._db.createObjectStore.apply(this._db,arguments))},y(k,"_db",["name","version","objectStoreNames"]),E(k,"_db",IDBDatabase,["deleteObjectStore","close"]),O.prototype.transaction=function(){return new N(this._db.transaction.apply(this._db,arguments))},y(O,"_db",["name","version","objectStoreNames"]),E(O,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[A,S].forEach((function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=m(arguments),n=e[e.length-1],r=this._store||this._index,i=r[t].apply(r,e.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[S,A].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})}));const D=1e4,R="w:0.3.5",j="FIS_v2",$="https://firebaseinstallations.googleapis.com/v1",P=36e5,M=new r("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */function C(t){return t instanceof n&&t.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */function L(t){if(!t||!t.options)throw B("App Configuration");if(!t.name)throw B("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw B(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function B(t){return M.create("missing-app-config-values",{valueName:t})}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */function q({projectId:t}){return`${$}/projects/${t}/installations`}function U(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function x(t,e){const n=(await e.json()).error;return M.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function F({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function K(t,{refreshToken:e}){const n=F(t);return n.append("Authorization",function(t){return`${j} ${t}`}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(e)),n}async function V(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
     * @license
     * Copyright 2019 Google Inc.
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
function H(t){return new Promise(e=>{setTimeout(e,t)})}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     * Copyright 2019 Google Inc.
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
const W=/^[cdef][\w-]{21}$/,J="";function z(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(t);return W.test(e)?e:J}catch(t){return J}}const G="firebase-installations-database",Z=1,Q="firebase-installations-store";let X=null;function Y(){return X||(X=function(t,e,n){var r=_(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(t){n&&n(new k(i.result,t.oldVersion,i.transaction))}),r.then((function(t){return new O(t)}))}(G,Z,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Q)}})),X}async function tt(t,e){const n=rt(t),r=(await Y()).transaction(Q,"readwrite");return await r.objectStore(Q).put(e,n),await r.complete,e}async function et(t){const e=rt(t),n=(await Y()).transaction(Q,"readwrite");await n.objectStore(Q).delete(e),await n.complete}async function nt(t,e){const n=rt(t),r=(await Y()).transaction(Q,"readwrite"),i=r.objectStore(Q),o=e(await i.get(n));return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,o}function rt(t){return`${t.appName}!${t.appId}`}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */async function it(t){let e;const n=await nt(t,n=>{const r=function(t){return st(t||{fid:z(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(M.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function(t,{fid:e}){const n=q(t),r=F(t),i={fid:e,authVersion:j,appId:t.appId,sdkVersion:R},o={method:"POST",headers:r,body:JSON.stringify(i)},a=await V(()=>fetch(n,o));if(a.ok){const t=await a.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:U(t.authToken)}}throw await x("Create Installation",a)}(t,e);return tt(t,n)}catch(n){throw C(n)&&409===n.serverCode?await et(t):await tt(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ot(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===J?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function ot(t){let e=await at(t);for(;1===e.registrationStatus;)await H(100),e=await at(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await it(t);return n||e}return e}function at(t){return nt(t,t=>{if(!t)throw M.create("installation-not-found");return st(t)})}function st(t){return 1===(e=t).registrationStatus&&e.registrationTime+D<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */}async function ct(t,e){const n=function(t,{fid:e}){return`${q(t)}/${e}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(t,e),r=K(t,e),i={installation:{sdkVersion:R}},o={method:"POST",headers:r,body:JSON.stringify(i)},a=await V(()=>fetch(n,o));if(a.ok){return U(await a.json())}throw await x("Generate Auth Token",a)}async function ut(t,e=!1){let n;const r=await nt(t,r=>{if(!pt(r))throw M.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+P}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await lt(t);for(;1===n.authToken.requestStatus;)await H(100),n=await lt(t);const r=n.authToken;return 0===r.requestStatus?ut(t,e):r}(t,e),r;{if(!navigator.onLine)throw M.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await ct(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await tt(t,r),n}catch(n){if(!C(n)||401!==n.serverCode&&404!==n.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tt(t,n)}else await et(t);throw n}}(t,e),e}});return n?await n:r.authToken}function lt(t){return nt(t,t=>{if(!pt(t))throw M.create("not-registered");return function(t){return 1===t.requestStatus&&t.requestTime+D<Date.now()}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(t.authToken)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function pt(t){return void 0!==t&&2===t.registrationStatus}
/**
     * @license
     * Copyright 2019 Google Inc.
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
async function ft(t,e=!1){const n=L(t);return await async function(t){const{registrationPromise:e}=await it(t);e&&await e}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(n),(await ut(n,e)).token}async function ht(t,e){const n=function(t,{fid:e}){return`${q(t)}/${e}`}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(t,e),r={method:"DELETE",headers:K(t,e)},i=await V(()=>fetch(n,r));if(!i.ok)throw await x("Delete Installation",i)}g.INTERNAL.registerService("installations",t=>(L(t),{app:t,getId:()=>(async function(t){const e=L(t),{installationEntry:n,registrationPromise:r}=await it(e);return r?r.catch(console.error):ut(e).catch(console.error),n.fid})(t),getToken:e=>ft(t,e),delete:()=>(async function(t){const e=L(t),n=await nt(e,t=>{if(!t||0!==t.registrationStatus)return t});if(n){if(1===n.registrationStatus)throw M.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw M.create("app-offline");await ht(e,n),await et(e)}}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */)(t)}));const dt="0.2.25",gt="FB-PERF-TRACE-START",mt="FB-PERF-TRACE-STOP",bt="FB-PERF-TRACE-MEASURE",_t="_wt_",wt="_fp",yt="_fcp",vt="_fid",Et="@firebase/performance/config",It="@firebase/performance/configexpire",St=new r("performance","Performance",{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalide custom metric name":"Custom metric name {$customMetricName} is invalid"});
/**
     * @license
     * Copyright 2017 Google Inc.
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
     * Copyright 2019 Google Inc.
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
let Tt,At,Nt,kt;class Ot{constructor(t){if(!t)throw St.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)}setupObserver(t,e){if(!this.PerformanceObserver)return;new this.PerformanceObserver(t=>{for(const n of t.getEntries())e(n)}).observe({entryTypes:[t]})}static getInstance(){return void 0===Tt&&(Tt=new Ot(At)),Tt}}class Dt{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getAppId(){const t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw St.create("no app id");return t}getProjectId(){const t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw St.create("no project id");return t}getApiKey(){const t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw St.create("no api key");return t}static getInstance(){return void 0===Nt&&(Nt=new Dt),Nt}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */function Rt(){return kt}
/**
     * @license
     * Copyright 2019 Google Inc.
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
var jt;!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(jt||(jt={}));const $t=["firebase_","google_","ga_"],Pt=new RegExp("^[a-zA-Z]\\w*$"),Mt=40,Ct=100;function Lt(){const t=Ot.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function Bt(){switch(Ot.getInstance().document.visibilityState){case"visible":return jt.VISIBLE;case"hidden":return jt.HIDDEN;case"prerender":return jt.PRERENDER;default:return jt.UNKNOWN}}function qt(){const t=Ot.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
const Ut=new u("Performance");Ut.logLevel=a.INFO;
/**
     * @license
     * Copyright 2019 Google Inc.
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
const xt="0.0.1",Ft={loggingEnabled:!0},Kt="FIREBASE_INSTALLATIONS_AUTH";function Vt(t){const e=function(){const t=Ot.getInstance().localStorage,e=t.getItem(It);if(!(e&&(n=e,Number(n)>Date.now())))return;var n;const r=t.getItem(Et);if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return e?(Wt(e),Promise.resolve()):function(t){return function(){const t=Dt.getInstance().firebaseAppInstance.installations().getToken();return t.then(t=>{}),t}().then(e=>{const n=`https://firebaseremoteconfig.googleapis.com/v1/projects/${Dt.getInstance().getProjectId()}/namespaces/fireperf:fetch?key=${Dt.getInstance().getApiKey()}`,r=new Request(n,{method:"POST",headers:{Authorization:`${Kt} ${e}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:Dt.getInstance().getAppId(),app_version:dt,sdk_version:xt})});return fetch(r).then(t=>{if(t.ok)return t.json();throw St.create("RC response not ok")})}).catch(()=>{Ut.info(Ht)})}(t).then(t=>Wt(t)).then(t=>(function(t){if(!t)return;const e=Ot.getInstance().localStorage;e.setItem(Et,JSON.stringify(t)),e.setItem(It,String(Date.now()+60*Dt.getInstance().configTimeToLive*60*1e3))})(t),()=>{})}const Ht="Could not fetch config, will use default configs";function Wt(t){if(!t)return t;const e=Dt.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=Ft.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=Jt(e.tracesSamplingRate),e.logNetworkAfterSampling=Jt(e.networkRequestsSamplingRate),t}function Jt(t){return Math.random()<=t}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */let zt,Gt=1;function Zt(){return Gt=2,zt=zt||function(){const t=Ot.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){const n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}().then(()=>(function(){const t=Dt.getInstance().firebaseAppInstance.installations().getId();return t.then(t=>{kt=t}),t})()).then(t=>Vt(t)).then(()=>Qt(),()=>Qt())}function Qt(){Gt=3}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */const Xt=1e4,Yt=3;let te,ee=Yt,ne=[];function re(t){return(e,n,...r)=>{!function(t){if(!t.eventTime||!t.message)throw St.create("invalid cc log");ne=[...ne,t]}({message:t(...r),eventTime:Date.now()})}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */function ie(){if(te)return te;const t=re(se);return(te=new u("@firebase/performance/cc")).logHandler=t,te}function oe(t){const e=Dt.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&Ot.getInstance().requiredApisAvailable()&&(t.isAuto&&Bt()!==jt.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===Gt?ae(t):Zt().then(()=>ae(t),()=>ae(t))))}function ae(t){Rt()&&setTimeout(()=>ie().log(t,1),0)}function se(t,e){return 0===e?function(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:ce(),network_request_metric:e};return JSON.stringify(n)}(t):function(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=ue(t.counters));const n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=ue(n));const r={application_info:ce(),trace_metric:e};return JSON.stringify(r)}(t)}function ce(){return{google_app_id:Dt.getInstance().getAppId(),app_instance_id:Rt(),web_app_info:{sdk_version:dt,page_url:Ot.getInstance().getUrl(),service_worker_status:Lt(),visibility_state:Bt(),effective_connection_type:qt()},application_process_state:0}}function ue(t){return Object.keys(t).map(e=>({key:e,value:t[e]}))}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */!function t(e){setTimeout(()=>{if(0===ee)return;if(!ne.length)return t(Xt);const e=[...ne];ne=[];const n=e.map(t=>({source_extension_json:t.message,event_time_ms:String(t.eventTime)})),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Dt.getInstance().logSource,log_event:n};fetch(Dt.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(t=>(t.ok||Ut.info("Call to Firebase backend failed."),t.json())).then(e=>{const n=Number(e.next_request_wait_millis),r=isNaN(n)?Xt:Math.max(Xt,n);ee=Yt,t(r)}).catch(()=>{ne=[...e,...ne],ee--,Ut.info(`Tries left: ${ee}.`),t(Xt)})},e)}(5500);const le=100,pe="_",fe=[wt,yt,vt];
/**
     * @license
     * Copyright 2019 Google Inc.
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
class he{constructor(t,e=!1,n){this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=Ot.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`${gt}-${this.randomId}-${this.name}`,this.traceStopMark=`${mt}-${this.randomId}-${this.name}`,this.traceMeasure=n||`${bt}-${this.randomId}-${this.name}`,n&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw St.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw St.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),oe(this)}record(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const t of Object.keys(n.metrics))isNaN(Number(n.metrics[t]))||(this.counters[t]=Number(Math.floor(n.metrics[t])));oe(this)}incrementMetric(t,e=1){void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e}putMetric(t,e){if(n=t,r=this.name,0===n.length||n.length>le||!(r&&r.startsWith(_t)&&fe.indexOf(n)>-1)&&n.startsWith(pe))throw St.create("invalide custom metric name",{customMetricName:t});var n,r;this.counters[t]=e}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const n=!(0===(r=t).length||r.length>Mt||$t.some(t=>r.startsWith(t))||!r.match(Pt));var r;const i=function(t){return 0!==t.length&&t.length<=Ct}(e);if(n&&i)this.customAttributes[t]=e;else{if(!n)throw St.create("invalid attribute name",{attributeName:t});if(!i)throw St.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n){const r=Ot.getInstance().getUrl();if(!r)return;const i=new he(_t+r,!0),o=Math.floor(1e3*Ot.getInstance().getTimeOrigin());i.setStartTime(o),t&&t[0]&&(i.setDuration(Math.floor(1e3*t[0].duration)),i.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),i.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),i.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd)));if(e){const t=e.find(t=>"first-paint"===t.name);t&&t.startTime&&i.putMetric(wt,Math.floor(1e3*t.startTime));const r=e.find(t=>"first-contentful-paint"===t.name);r&&r.startTime&&i.putMetric(yt,Math.floor(1e3*r.startTime)),n&&i.putMetric(vt,Math.floor(1e3*n))}oe(i)}static createUserTimingTrace(t){oe(new he(t,!1,t))}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */function de(t){const e=t;if(!e||void 0===e.responseStart)return;const n=Ot.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){const e=Dt.getInstance();e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>ie().log(t,0),0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */const ge=5e3;function me(){Rt()&&(setTimeout(()=>(function(){const t=Ot.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){let r=setTimeout(()=>{he.createOobTrace(e,n),r=void 0},ge);t.onFirstInputDelay(t=>{r&&(clearTimeout(r),he.createOobTrace(e,n,t))})}else he.createOobTrace(e,n)})(),0),setTimeout(()=>(function(){const t=Ot.getInstance(),e=t.getEntriesByType("resource");for(const t of e)de(t);t.setupObserver("resource",de)})(),0),setTimeout(()=>(function(){const t=Ot.getInstance(),e=t.getEntriesByType("measure");for(const t of e)be(t);t.setupObserver("measure",be)})(),0))}function be(t){const e=t.name;e.substring(0,bt.length)!==bt&&he.createUserTimingTrace(e)}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */class _e{constructor(t){this.app=t,Ot.getInstance().requiredApisAvailable()?Zt().then(me,me):Ut.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}trace(t){return new he(t)}set instrumentationEnabled(t){Dt.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return Dt.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){Dt.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return Dt.getInstance().dataCollectionEnabled}}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */const we="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google Inc.
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
return function(t){t.INTERNAL.registerService("performance",t=>{if(t.name!==we)throw St.create("FB not default");if("undefined"==typeof window)throw St.create("no window");return function(t){At=t}
/**
     * @license
     * Copyright 2019 Google Inc.
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
     */(window),Dt.getInstance().firebaseAppInstance=t,new _e(t)},{})}(g),g}));
//# sourceMappingURL=firebase-performance-standalone.es2017.js.map
