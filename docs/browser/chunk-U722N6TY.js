import{C as ue,Ca as ge,I as ce,L as x,N as y,Q as E,S as p,T as g,U as le,W as de,X as he,a as Y,c as k,ca as fe,ea as K,f as W,i as ie,l as se,m as Z,ma as X,q as P,w as oe,y as ae}from"./chunk-UVVM2BGK.js";var ye=null;function H(){return ye}function dn(n){ye??=n}var De=class{};var $=new E(""),Ee=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=y({token:n,factory:()=>g($e),providedIn:"platform"})}return n})();var $e=(()=>{class n extends Ee{_location;_history;_doc=g($);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return H().getBaseHref(this._doc)}onPopState(e){let r=H().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=H().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=y({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function we(n,t){if(n.length==0)return t;if(t.length==0)return n;let e=0;return n.endsWith("/")&&e++,t.startsWith("/")&&e++,e==2?n+t.substring(1):e==1?n+t:n+"/"+t}function pe(n){let t=n.match(/#|\?|$/),e=t&&t.index||n.length,r=e-(n[e-1]==="/"?1:0);return n.slice(0,r)+n.slice(e)}function S(n){return n&&n[0]!=="?"?"?"+n:n}var J=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=y({token:n,factory:()=>g(ze),providedIn:"root"})}return n})(),je=new E(""),ze=(()=>{class n extends J{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??g($).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return we(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+S(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+S(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+S(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||n)(p(Ee),p(je,8))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve=(()=>{class n{_subject=new ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=We(pe(me(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+S(r))}normalize(e){return n.stripTrailingSlash(Ye(this._basePath,me(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+S(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+S(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=S;static joinWithSlash=we;static stripTrailingSlash=pe;static \u0275fac=function(r){return new(r||n)(p(J))};static \u0275prov=y({token:n,factory:()=>Ge(),providedIn:"root"})}return n})();function Ge(){return new Ve(p(J))}function Ye(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function me(n){return n.replace(/\/index.html$/,"")}function We(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function Fe(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}function Ze(n,t){return new x(2100,!1)}var hn=(()=>{class n{transform(e){if(e==null)return null;if(typeof e!="string")throw Ze(n,e);return e.toUpperCase()}static \u0275fac=function(r){return new(r||n)};static \u0275pipe=ge({name:"uppercase",type:n,pure:!0})}return n})();var fn="browser",Ke="server";function Xe(n){return n===Ke}var U=class{};var L=class{},z=class{},w=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(l=>o.indexOf(l)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(t,e){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(t,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=t.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Q=class{encodeKey(t){return Ce(t)}encodeValue(t){return Ce(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Je(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,l]=o==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],a=e.get(s)||[];a.push(l),e.set(s,a)}),e}var qe=/%(\d[a-f0-9])/gi,Qe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ce(n){return encodeURIComponent(n).replace(qe,(t,e)=>Qe[e]??t)}function j(n){return`${n}`}var A=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Q,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Je(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let r=t.fromObject[e],i=Array.isArray(r)?r.map(j):[j(r)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(r=>{let i=t[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(j(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],i=r.indexOf(j(t.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var ee=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function et(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ae(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function be(n){return typeof Blob<"u"&&n instanceof Blob}function ve(n){return typeof FormData<"u"&&n instanceof FormData}function tt(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var O=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,r,i){this.url=e,this.method=t.toUpperCase();let o;if(et(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new w,this.context??=new ee,!this.params)this.params=new A,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e.indexOf("?"),a=l===-1?"?":l<e.length-1?"&":"";this.urlWithParams=e+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ae(this.body)||be(this.body)||ve(this.body)||tt(this.body)?this.body:this.body instanceof A?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ve(this.body)?null:be(this.body)?this.body.type||null:Ae(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof A?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,l=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,f=t.headers||this.headers,D=t.params||this.params,m=t.context??this.context;return t.setHeaders!==void 0&&(f=Object.keys(t.setHeaders).reduce((v,d)=>v.set(d,t.setHeaders[d]),f)),t.setParams&&(D=Object.keys(t.setParams).reduce((v,d)=>v.set(d,t.setParams[d]),D)),new n(e,r,s,{params:D,headers:f,context:m,reportProgress:a,responseType:i,withCredentials:l,transferCache:o})}},b=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(b||{}),N=class{headers;status;statusText;url;ok;type;constructor(t,e=200,r="OK"){this.headers=t.headers||new w,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},V=class n extends N{constructor(t={}){super(t)}type=b.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},B=class n extends N{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=b.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},C=class extends N{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Ie=200,nt=204;function q(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var rt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof O)o=e;else{let a;i.headers instanceof w?a=i.headers:a=new w(i.headers);let f;i.params&&(i.params instanceof A?f=i.params:f=new A({fromObject:i.params})),o=new O(e,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:f,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let s=Z(o).pipe(ae(a=>this.handler.handle(a)));if(e instanceof O||i.observe==="events")return s;let l=s.pipe(oe(a=>a instanceof B));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return l.pipe(P(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return l.pipe(P(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return l.pipe(P(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return l.pipe(P(a=>a.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new A().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,q(i,r))}post(e,r,i={}){return this.request("POST",e,q(i,r))}put(e,r,i={}){return this.request("PUT",e,q(i,r))}static \u0275fac=function(r){return new(r||n)(p(L))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),it=/^\)\]\}',?\n/,st="X-Request-URL";function _e(n){if(n.url)return n.url;let t=st.toLocaleLowerCase();return n.headers.get(t)}var ot=(()=>{class n{fetchImpl=g(te,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=g(K);handle(e){return new W(r=>{let i=new AbortController;return this.doRequest(e,i.signal,r).then(ne,o=>r.error(new C({error:o}))),()=>i.abort()})}doRequest(e,r,i){return k(this,null,function*(){let o=this.createRequestInit(e),s;try{let d=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,Y({signal:r},o)));at(d),i.next({type:b.Sent}),s=yield d}catch(d){i.error(new C({error:d,status:d.status??0,statusText:d.statusText,url:e.urlWithParams,headers:d.headers}));return}let l=new w(s.headers),a=s.statusText,f=_e(s)??e.urlWithParams,D=s.status,m=null;if(e.reportProgress&&i.next(new V({headers:l,status:D,statusText:a,url:f})),s.body){let d=s.headers.get("content-length"),I=[],u=s.body.getReader(),c=0,F,T,h=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>k(this,null,function*(){for(;;){let{done:_,value:M}=yield u.read();if(_)break;if(I.push(M),c+=M.length,e.reportProgress){T=e.responseType==="text"?(T??"")+(F??=new TextDecoder).decode(M,{stream:!0}):void 0;let re=()=>i.next({type:b.DownloadProgress,total:d?+d:void 0,loaded:c,partialText:T});h?h.run(re):re()}}}));let R=this.concatChunks(I,c);try{let _=s.headers.get("Content-Type")??"";m=this.parseBody(e,R,_)}catch(_){i.error(new C({error:_,headers:new w(s.headers),status:s.status,statusText:s.statusText,url:_e(s)??e.urlWithParams}));return}}D===0&&(D=m?Ie:0),D>=200&&D<300?(i.next(new B({body:m,headers:l,status:D,statusText:a,url:f})),i.complete()):i.error(new C({error:m,headers:l,status:D,statusText:a,url:f}))})}parseBody(e,r,i){switch(e.responseType){case"json":let o=new TextDecoder().decode(r).replace(it,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(e){let r={},i=e.withCredentials?"include":void 0;if(e.headers.forEach((o,s)=>r[o]=s.join(",")),e.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let o=e.detectContentTypeHeader();o!==null&&(r["Content-Type"]=o)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:i}}concatChunks(e,r){let i=new Uint8Array(r),o=0;for(let s of e)i.set(s,o),o+=s.length;return i}static \u0275fac=function(r){return new(r||n)};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),te=class{};function ne(){}function at(n){n.then(ne,ne)}function ut(n,t){return t(n)}function ct(n,t,e){return(r,i)=>he(e,()=>t(r,o=>n(o,i)))}var Re=new E(""),lt=new E(""),dt=new E("",{providedIn:"root",factory:()=>!0});var Se=(()=>{class n extends L{backend;injector;chain=null;pendingTasks=g(fe);contributeToStability=g(dt);constructor(e,r){super(),this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Re),...this.injector.get(lt,[])]));this.chain=r.reduceRight((i,o)=>ct(i,o,this.injector),ut)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ue(()=>this.pendingTasks.remove(r)))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||n)(p(z),p(de))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();var ht=/^\)\]\}',?\n/;function ft(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var Te=(()=>{class n{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new x(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?se(r.\u0275loadImpl()):Z(null)).pipe(ce(()=>new W(o=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((u,c)=>s.setRequestHeader(u,c.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let u=e.detectContentTypeHeader();u!==null&&s.setRequestHeader("Content-Type",u)}if(e.responseType){let u=e.responseType.toLowerCase();s.responseType=u!=="json"?u:"text"}let l=e.serializeBody(),a=null,f=()=>{if(a!==null)return a;let u=s.statusText||"OK",c=new w(s.getAllResponseHeaders()),F=ft(s)||e.url;return a=new V({headers:c,status:s.status,statusText:u,url:F}),a},D=()=>{let{headers:u,status:c,statusText:F,url:T}=f(),h=null;c!==nt&&(h=typeof s.response>"u"?s.responseText:s.response),c===0&&(c=h?Ie:0);let R=c>=200&&c<300;if(e.responseType==="json"&&typeof h=="string"){let _=h;h=h.replace(ht,"");try{h=h!==""?JSON.parse(h):null}catch(M){h=_,R&&(R=!1,h={error:M,text:h})}}R?(o.next(new B({body:h,headers:u,status:c,statusText:F,url:T||void 0})),o.complete()):o.error(new C({error:h,headers:u,status:c,statusText:F,url:T||void 0}))},m=u=>{let{url:c}=f(),F=new C({error:u,status:s.status||0,statusText:s.statusText||"Unknown Error",url:c||void 0});o.error(F)},v=!1,d=u=>{v||(o.next(f()),v=!0);let c={type:b.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(c.total=u.total),e.responseType==="text"&&s.responseText&&(c.partialText=s.responseText),o.next(c)},I=u=>{let c={type:b.UploadProgress,loaded:u.loaded};u.lengthComputable&&(c.total=u.total),o.next(c)};return s.addEventListener("load",D),s.addEventListener("error",m),s.addEventListener("timeout",m),s.addEventListener("abort",m),e.reportProgress&&(s.addEventListener("progress",d),l!==null&&s.upload&&s.upload.addEventListener("progress",I)),s.send(l),o.next({type:b.Sent}),()=>{s.removeEventListener("error",m),s.removeEventListener("abort",m),s.removeEventListener("load",D),s.removeEventListener("timeout",m),e.reportProgress&&(s.removeEventListener("progress",d),l!==null&&s.upload&&s.upload.removeEventListener("progress",I)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||n)(p(U))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),Me=new E(""),gt="XSRF-TOKEN",Dt=new E("",{providedIn:"root",factory:()=>gt}),pt="X-XSRF-TOKEN",mt=new E("",{providedIn:"root",factory:()=>pt}),G=class{},yt=(()=>{class n{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,r,i){this.doc=e,this.platform=r,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Fe(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||n)(p($),p(X),p(Dt))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();function Et(n,t){let e=n.url.toLowerCase();if(!g(Me)||n.method==="GET"||n.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(n);let r=g(G).getToken(),i=g(mt);return r!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,r)})),t(n)}function Rn(...n){let t=[rt,Te,Se,{provide:L,useExisting:Se},{provide:z,useFactory:()=>g(ot,{optional:!0})??g(Te)},{provide:Re,useValue:Et,multi:!0},{provide:Me,useValue:!0},{provide:G,useClass:yt}];for(let e of n)t.push(...e.\u0275providers);return le(t)}export{H as a,dn as b,De as c,$ as d,J as e,Ve as f,Fe as g,hn as h,fn as i,Xe as j,U as k,rt as l,Rn as m};
