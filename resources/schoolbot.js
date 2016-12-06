var firebase = null; (function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=function(){l=function(){};h.Symbol||(h.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},n=function(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=
h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});n=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){n();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a){return"function"==t(a)},ea=function(a,
b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)},x=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},y=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var z;z="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=z.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)f=g.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(g=a[k])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){var c=z.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function g(a){try{p(d.next(a))}catch(u){f(u)}}function k(a){try{p(d.throw(a))}catch(u){f(u)}}function p(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,k)}p((d=d.apply(a,b)).next())})};"undefined"!==typeof z.M&&z.M||(z.__extends=__extends,z.__decorate=__decorate,z.__metadata=__metadata,z.__param=__param,z.__awaiter=__awaiter);var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};y(A,Error);A.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var B=function(a,b){b.unshift(a);A.call(this,ga.apply(null,b));b.shift()};y(B,A);B.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new B(""+e,f||[]);},C=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},D=function(a,b,c){v(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var E=function(a,b,c){this.T=c;this.N=a;this.U=b;this.s=0;this.o=null};E.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.N();return a};E.prototype.put=function(a){this.U(a);this.s<this.T&&(this.s++,a.next=this.o,this.o=a)};var F;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){F=ja;break a}}F=""};var ka=function(a){q.setTimeout(function(){throw a;},0)},G,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var H=function(){this.v=this.f=null},ma=new E(function(){return new I},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(C(!this.f),this.f=c);this.v=c};H.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var I=function(){this.next=this.scope=this.B=null};I.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
I.prototype.reset=function(){this.next=this.scope=this.B=null};var M=function(a,b){J||na();L||(J(),L=!0);oa.add(a,b)},J,na=function(){var a=q.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);J=function(){b.then(pa)}}else J=function(){var a=pa;!v(q.setImmediate)||q.Window&&q.Window.prototype&&-1==F.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(G||(G=la()),G(a)):q.setImmediate(a)}},L=!1,oa=new H,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}L=!1};var O=function(a,b){this.b=0;this.L=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}N(c,3,a)})}catch(d){N(this,3,d)}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
var ra=new E(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||M(x(b,a))};O.prototype.then=function(a,b,c){null!=a&&D(a,"opt_onFulfilled should be a function.");null!=b&&D(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,v(a)?a:null,v(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
O.prototype.X=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);C(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new O(function(a,g){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(K){g(K)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(K){g(K)}}:g});e.child.u=a;xa(a,e);return e.child};O.prototype.Y=function(a){C(1==this.b);this.b=0;N(this,2,a)};O.prototype.Z=function(a){C(1==this.b);this.b=0;N(this,3,a)};
var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.L=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof O)return null!=b&&D(b,"opt_onFulfilled should be a function."),null!=c&&D(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(v(f))return za(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},za=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(p){k(p)}},wa=function(a){a.A||(a.A=!0,M(a.P,a))},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&C(null!=b.c);return b};
O.prototype.P=function(){for(var a;a=Aa(this);){var b=this.b,c=this.L;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},ya=function(a,b){a.m=!0;M(function(){a.m&&Ca.call(null,b)})},Ca=ka;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,p;k<a.length;k++)p=a[k],ua(p,x(f,k),g);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(r);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.X;var Q=O;"undefined"!==typeof Promise&&(Q=Promise);var Da=Q;function Ea(a,b){a=new R(a,b);return a.subscribe.bind(a)}var R=function(a,b){var c=this;this.a=[];this.K=0;this.task=Da.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};R.prototype.next=function(a){S(this,function(b){b.next(a)})};R.prototype.error=function(a){S(this,function(b){b.error(a)});this.close(a)};R.prototype.complete=function(){S(this,function(a){a.complete()});this.close()};
R.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Fa(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=T);void 0===e.error&&(e.error=T);void 0===e.complete&&(e.complete=T);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.H?e.error(d.H):e.complete()}catch(f){}});this.a.push(e);return a};
R.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.K,0===this.K&&void 0!==this.D&&this.D(this))};var S=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ga(a,c,b)},Ga=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){"undefined"!==typeof console&&console.error&&console.error(d)}})};R.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.H=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
function Fa(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];n();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function T(){};var Ha=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Ha)Ha(this,U.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var U=function(a,b,c){this.V=a;this.W=b;this.O=c;this.pattern=/\{\$([^}]+)}/g};
U.prototype.create=function(a,b){void 0===b&&(b={});var c=this.O[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var W=Q,X=function(a,b,c){var d=this;this.I=c;this.J=!1;this.i={};this.C=b;this.F=P(void 0,a);a="serviceAccount"in this.F;("credential"in this.F||a)&&"undefined"!==typeof console&&console.log("The '"+(a?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function(a){var b=
c.INTERNAL.useAsService(d,a);null!==b&&(b=d.S.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.I.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.J=!0;a.i={}})};X.prototype.S=function(a){Y(this);void 0===this.i[a]&&(this.i[a]=this.I.INTERNAL.factories[a](this,this.R.bind(this)));return this.i[a]};X.prototype.R=function(a){P(this,a)};
var Y=function(a){a.J&&Z(Ia("deleted",{name:a.C}))};h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.F}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&f[d])f[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("serverAuthMissing"));return c}var d={},e={},f={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
{name:c+""});void 0!==d[c]&&Z("dupApp",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||P(a,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,u){e[b]&&Z("dupService",{name:b});e[b]=c;u&&(f[b]=u);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&P(c,d);return g[b]=c},createFirebaseNamespace:Ja,
extendNamespace:function(a){P(g,a)},createSubscribe:Ea,ErrorFactory:U,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:O,deepExtend:P}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}function Z(a,b){throw Error(Ia(a,b));}
function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[a];
return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof firebase&&(firebase=Ja()); })();
firebase.SDK_VERSION = "3.6.2";
(function(){var h,aa=aa||{},l=this,ba=function(){},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){return null===a},da=function(a){return"array"==m(a)},ea=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},fa=function(a){return"number"==typeof a},p=function(a){return"function"==m(a)},ga=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ha=function(a,b,
c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return q.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ka=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Tc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.af=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(u,Error);u.prototype.name="CustomError";var la=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},na=/&/g,oa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);u.call(this,la.apply(null,b));b.shift()};r(wa,u);wa.prototype.name="AssertionError";
var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},w=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){fa(a)||xa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){n(a)||xa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
2))},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=n(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){b=Ca(a,b);var c;(c=0<=b)&&Ja(a,b);return c},Ja=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply(Array.prototype,
arguments)},Na=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Oa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Pa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Qa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ra=function(a){for(var b in a)return!1;return!0},Sa=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Ta=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
Va=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ua.length;f++)c=Ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Wa;a:{var Xa=l.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){Wa=Ya;break a}}Wa=""}var y=function(a){return v(Wa,a)};var Za=function(a){Za[" "](a);return a};Za[" "]=ba;var ab=function(a,b){var c=$a;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var bb=y("Opera"),z=y("Trident")||y("MSIE"),cb=y("Edge"),db=cb||z,eb=y("Gecko")&&!(v(Wa.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),fb=v(Wa.toLowerCase(),"webkit")&&!y("Edge"),gb=function(){var a=l.document;return a?a.documentMode:void 0},hb;
a:{var ib="",jb=function(){var a=Wa;if(eb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();jb&&(ib=jb?jb[1]:"");if(z){var kb=gb();if(null!=kb&&kb>parseFloat(ib)){hb=String(kb);break a}}hb=ib}
var lb=hb,$a={},A=function(a){return ab(a,function(){for(var b=0,c=ma(String(lb)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==g[2].length,0==k[2].length)||va(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},mb;var nb=l.document;
mb=nb&&z?gb()||("CSS1Compat"==nb.compatMode?parseInt(lb,10):5):void 0;var ob=null,pb=null,rb=function(a){var b="";qb(a,function(a){b+=String.fromCharCode(a)});return b},qb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=pb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}sb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},sb=function(){if(!ob){ob={};pb={};for(var a=0;65>a;a++)ob[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
pb[ob[a]]=a,62<=a&&(pb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var tb=!z||9<=Number(mb),ub=z&&!A("9");!fb||A("528");eb&&A("1.9b")||z&&A("8")||bb&&A("9.5")||fb&&A("528");eb&&!A("8")||z&&A("9");var vb=function(){this.za=this.za;this.Tb=this.Tb};vb.prototype.za=!1;vb.prototype.isDisposed=function(){return this.za};vb.prototype.Oa=function(){if(this.Tb)for(;this.Tb.length;)this.Tb.shift()()};var wb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Wa=!1;this.ud=!0};wb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ud=!1};var xb=function(a,b){wb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.mb=this.state=null;a&&this.init(a,b)};r(xb,wb);
xb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(eb){var e;a:{try{Za(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=fb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=fb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.mb=a;a.defaultPrevented&&
this.preventDefault()};xb.prototype.preventDefault=function(){xb.Tc.preventDefault.call(this);var a=this.mb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ub)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};xb.prototype.fe=function(){return this.mb};var yb="closure_listenable_"+(1E6*Math.random()|0),zb=0;var Ab=function(a,b,c,d,e){this.listener=a;this.$b=null;this.src=b;this.type=c;this.capture=!!d;this.Kb=e;this.key=++zb;this.$a=this.Db=!1},Bb=function(a){a.$a=!0;a.listener=null;a.$b=null;a.src=null;a.Kb=null};var Cb=function(a){this.src=a;this.w={};this.Bb=0};Cb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.w[f];a||(a=this.w[f]=[],this.Bb++);var g=Db(a,b,d,e);-1<g?(b=a[g],c||(b.Db=!1)):(b=new Ab(b,this.src,f,!!d,e),b.Db=c,a.push(b));return b};Cb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.w))return!1;var e=this.w[a];b=Db(e,b,c,d);return-1<b?(Bb(e[b]),Ja(e,b),0==e.length&&(delete this.w[a],this.Bb--),!0):!1};
var Eb=function(a,b){var c=b.type;c in a.w&&Ka(a.w[c],b)&&(Bb(b),0==a.w[c].length&&(delete a.w[c],a.Bb--))};Cb.prototype.zc=function(a,b,c,d){a=this.w[a.toString()];var e=-1;a&&(e=Db(a,b,c,d));return-1<e?a[e]:null};var Db=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.$a&&f.listener==b&&f.capture==!!c&&f.Kb==d)return e}return-1};var Fb="closure_lm_"+(1E6*Math.random()|0),Gb={},Hb=0,Ib=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Ib(a,b[f],c,d,e);else c=Jb(c),a&&a[yb]?a.listen(b,c,d,e):Kb(a,b,c,!1,d,e)},Kb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Lb(a);k||(a[Fb]=k=new Cb(a));c=k.add(b,c,d,e,f);if(!c.$b){d=Mb();c.$b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Nb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Hb++}},Mb=function(){var a=Ob,b=tb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Pb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Pb(a,b[f],c,d,e);else c=Jb(c),a&&a[yb]?Qb(a,b,c,d,e):Kb(a,b,c,!0,d,e)},Rb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Rb(a,b[f],c,d,e);else c=Jb(c),a&&a[yb]?a.$.remove(String(b),c,d,e):a&&(a=Lb(a))&&(b=a.zc(b,c,!!d,e))&&Sb(b)},Sb=function(a){if(!fa(a)&&a&&!a.$a){var b=a.src;if(b&&
b[yb])Eb(b.$,a);else{var c=a.type,d=a.$b;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Nb(c),d);Hb--;(c=Lb(b))?(Eb(c,a),0==c.Bb&&(c.src=null,b[Fb]=null)):Bb(a)}}},Nb=function(a){return a in Gb?Gb[a]:Gb[a]="on"+a},Ub=function(a,b,c,d){var e=!0;if(a=Lb(a))if(b=a.w[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.$a&&(f=Tb(f,d),e=e&&!1!==f)}return e},Tb=function(a,b){var c=a.listener,d=a.Kb||a.src;a.Db&&Sb(a);return c.call(d,
b)},Ob=function(a,b){if(a.$a)return!0;if(!tb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new xb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Wa&&0<=e;e--){b.currentTarget=d[e];var f=Ub(d[e],a,!0,b),c=c&&f}for(e=0;!b.Wa&&e<d.length;e++)b.currentTarget=
d[e],f=Ub(d[e],a,!1,b),c=c&&f}return c}return Tb(a,new xb(b,this))},Lb=function(a){a=a[Fb];return a instanceof Cb?a:null},Vb="__closure_events_fn_"+(1E9*Math.random()>>>0),Jb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[Vb]||(a[Vb]=function(b){return a.handleEvent(b)});return a[Vb]};var Wb=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var Yb=function(){this.ic="";this.Md=Xb};Yb.prototype.Ob=!0;Yb.prototype.Ib=function(){return this.ic};Yb.prototype.toString=function(){return"Const{"+this.ic+"}"};var Zb=function(a){if(a instanceof Yb&&a.constructor===Yb&&a.Md===Xb)return a.ic;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},Xb={},$b=function(a){var b=new Yb;b.ic=a;return b};$b("");var B=function(){this.ka="";this.Ld=ac};B.prototype.Ob=!0;B.prototype.Ib=function(){return this.ka};B.prototype.toString=function(){return"SafeUrl{"+this.ka+"}"};
var bc=function(a){if(a instanceof B&&a.constructor===B&&a.Ld===ac)return a.ka;ya("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},cc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,ec=function(a){if(a instanceof B)return a;a=a.Ob?a.Ib():String(a);cc.test(a)||(a="about:invalid#zClosurez");return dc(a)},ac={},dc=function(a){var b=new B;b.ka=a;return b};dc("about:blank");var fc=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},gc=function(a){a=String(a);if(fc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},jc=function(a){var b=[];hc(new ic,a,b);return b.join("")},ic=function(){this.bc=void 0},
hc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],hc(a,a.bc?a.bc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),kc(d,c),c.push(":"),hc(a,a.bc?a.bc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":kc(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},lc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,kc=function(a,b){b.push('"',a.replace(mc,function(a){var b=lc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
lc[a]=b);return b}),'"')};var nc=function(){};nc.prototype.Wc=null;var oc=function(a){return a.Wc||(a.Wc=a.Cc())};var pc,qc=function(){};r(qc,nc);qc.prototype.Eb=function(){var a=rc(this);return a?new ActiveXObject(a):new XMLHttpRequest};qc.prototype.Cc=function(){var a={};rc(this)&&(a[0]=!0,a[1]=!0);return a};
var rc=function(a){if(!a.jd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.jd=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.jd};pc=new qc;var sc=function(){};r(sc,nc);sc.prototype.Eb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new tc;throw Error("Unsupported browser");};sc.prototype.Cc=function(){return{}};
var tc=function(){this.oa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.oa.onload=q(this.je,this);this.oa.onerror=q(this.gd,this);this.oa.onprogress=q(this.ke,this);this.oa.ontimeout=q(this.le,this)};h=tc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.oa.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.oa.send(a);else throw Error("Only string data is supported");else this.oa.send()};h.abort=function(){this.oa.abort()};h.setRequestHeader=function(){};h.je=function(){this.status=200;this.responseText=this.oa.responseText;uc(this,4)};h.gd=function(){this.status=500;this.responseText="";uc(this,4)};h.le=function(){this.gd()};h.ke=function(){this.status=200;uc(this,1)};var uc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var wc=function(){this.Wb="";this.Nd=vc};wc.prototype.Ob=!0;wc.prototype.Ib=function(){return this.Wb};wc.prototype.toString=function(){return"TrustedResourceUrl{"+this.Wb+"}"};var vc={};var yc=function(){this.ka="";this.Kd=xc};yc.prototype.Ob=!0;yc.prototype.Ib=function(){return this.ka};yc.prototype.toString=function(){return"SafeHtml{"+this.ka+"}"};var zc=function(a){if(a instanceof yc&&a.constructor===yc&&a.Kd===xc)return a.ka;ya("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},xc={};yc.prototype.se=function(a){this.ka=a;return this};!eb&&!z||z&&9<=Number(mb)||eb&&A("1.9.1");z&&A("9");var Bc=function(a,b){Oa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ac.hasOwnProperty(d)?a.setAttribute(Ac[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Cc=function(a,b,c){this.ve=c;this.Ud=a;this.He=b;this.Sb=0;this.Lb=null};Cc.prototype.get=function(){var a;0<this.Sb?(this.Sb--,a=this.Lb,this.Lb=a.next,a.next=null):a=this.Ud();return a};Cc.prototype.put=function(a){this.He(a);this.Sb<this.ve&&(this.Sb++,a.next=this.Lb,this.Lb=a)};var Dc=function(a){l.setTimeout(function(){throw a;},0)},Ec,Fc=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Zc;c.Zc=null;a()}};return function(a){d.next={Zc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Gc=function(){this.nc=this.Ja=null},Ic=new Cc(function(){return new Hc},function(a){a.reset()},100);Gc.prototype.add=function(a,b){var c=Ic.get();c.set(a,b);this.nc?this.nc.next=c:(w(!this.Ja),this.Ja=c);this.nc=c};Gc.prototype.remove=function(){var a=null;this.Ja&&(a=this.Ja,this.Ja=this.Ja.next,this.Ja||(this.nc=null),a.next=null);return a};var Hc=function(){this.next=this.scope=this.yc=null};Hc.prototype.set=function(a,b){this.yc=a;this.scope=b;this.next=null};
Hc.prototype.reset=function(){this.next=this.scope=this.yc=null};var Nc=function(a,b){Jc||Kc();Lc||(Jc(),Lc=!0);Mc.add(a,b)},Jc,Kc=function(){var a=l.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);Jc=function(){b.then(Oc)}}else Jc=function(){var a=Oc;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Ec||(Ec=Fc()),Ec(a)):l.setImmediate(a)}},Lc=!1,Mc=new Gc,Oc=function(){for(var a;a=Mc.remove();){try{a.yc.call(a.scope)}catch(b){Dc(b)}Ic.put(a)}Lc=!1};var Pc=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Qc=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var C=function(a,b){this.G=0;this.ma=void 0;this.Ma=this.ha=this.m=null;this.Jb=this.xc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){Rc(c,2,a)},function(a){if(!(a instanceof Sc))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}Rc(c,3,a)})}catch(d){Rc(this,3,d)}},Tc=function(){this.next=this.context=this.Ta=this.Da=this.child=null;this.ib=!1};Tc.prototype.reset=function(){this.context=this.Ta=this.Da=this.child=null;this.ib=!1};
var Uc=new Cc(function(){return new Tc},function(a){a.reset()},100),Vc=function(a,b,c){var d=Uc.get();d.Da=a;d.Ta=b;d.context=c;return d},D=function(a){if(a instanceof C)return a;var b=new C(ba);Rc(b,2,a);return b},E=function(a){return new C(function(b,c){c(a)})},Xc=function(a,b,c){Wc(a,b,c,null)||Nc(ja(b,a))},Yc=function(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{de:!0,value:f}:{de:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Xc(g,ja(e,f,!0),
ja(e,f,!1));else b(d)})};C.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Zc(this,p(a)?a:null,p(b)?b:null,c)};Pc(C);var ad=function(a,b){b=Vc(b,b,void 0);b.ib=!0;$c(a,b);return a};C.prototype.g=function(a,b){return Zc(this,null,a,b)};C.prototype.cancel=function(a){0==this.G&&Nc(function(){var b=new Sc(a);bd(this,b)},this)};
var bd=function(a,b){if(0==a.G)if(a.m){var c=a.m;if(c.ha){for(var d=0,e=null,f=null,g=c.ha;g&&(g.ib||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.G&&1==d?bd(c,b):(f?(d=f,w(c.ha),w(null!=d),d.next==c.Ma&&(c.Ma=d),d.next=d.next.next):cd(c),dd(c,e,3,b)))}a.m=null}else Rc(a,3,b)},$c=function(a,b){a.ha||2!=a.G&&3!=a.G||ed(a);w(null!=b.Da);a.Ma?a.Ma.next=b:a.ha=b;a.Ma=b},Zc=function(a,b,c,d){var e=Vc(null,null,null);e.child=new C(function(a,g){e.Da=b?function(c){try{var e=b.call(d,c);a(e)}catch(pa){g(pa)}}:
a;e.Ta=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof Sc?g(b):a(e)}catch(pa){g(pa)}}:g});e.child.m=a;$c(a,e);return e.child};C.prototype.Re=function(a){w(1==this.G);this.G=0;Rc(this,2,a)};C.prototype.Se=function(a){w(1==this.G);this.G=0;Rc(this,3,a)};
var Rc=function(a,b,c){0==a.G&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.G=1,Wc(c,a.Re,a.Se,a)||(a.ma=c,a.G=b,a.m=null,ed(a),3!=b||c instanceof Sc||fd(a,c)))},Wc=function(a,b,c,d){if(a instanceof C)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),$c(a,Vc(b||ba,c||null,d)),!0;if(Qc(a))return a.then(b,c,d),!0;if(ga(a))try{var e=a.then;if(p(e))return gd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},gd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(t){k(t)}},ed=function(a){a.xc||(a.xc=!0,Nc(a.Zd,a))},cd=function(a){var b=null;a.ha&&(b=a.ha,a.ha=b.next,b.next=null);a.ha||(a.Ma=null);null!=b&&w(null!=b.Da);return b};C.prototype.Zd=function(){for(var a;a=cd(this);)dd(this,a,this.G,this.ma);this.xc=!1};
var dd=function(a,b,c,d){if(3==c&&b.Ta&&!b.ib)for(;a&&a.Jb;a=a.m)a.Jb=!1;if(b.child)b.child.m=null,hd(b,c,d);else try{b.ib?b.Da.call(b.context):hd(b,c,d)}catch(e){id.call(null,e)}Uc.put(b)},hd=function(a,b,c){2==b?a.Da.call(a.context,c):a.Ta&&a.Ta.call(a.context,c)},fd=function(a,b){a.Jb=!0;Nc(function(){a.Jb&&id.call(null,b)})},id=Dc,Sc=function(a){u.call(this,a)};r(Sc,u);Sc.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var F=function(a,b){this.dc=[];this.od=a;this.bd=b||null;this.ob=this.Qa=!1;this.ma=void 0;this.Rc=this.Vc=this.sc=!1;this.lc=0;this.m=null;this.tc=0};F.prototype.cancel=function(a){if(this.Qa)this.ma instanceof F&&this.ma.cancel();else{if(this.m){var b=this.m;delete this.m;a?b.cancel(a):(b.tc--,0>=b.tc&&b.cancel())}this.od?this.od.call(this.bd,this):this.Rc=!0;this.Qa||jd(this,new kd)}};F.prototype.$c=function(a,b){this.sc=!1;ld(this,a,b)};
var ld=function(a,b,c){a.Qa=!0;a.ma=c;a.ob=!b;md(a)},od=function(a){if(a.Qa){if(!a.Rc)throw new nd;a.Rc=!1}};F.prototype.callback=function(a){od(this);pd(a);ld(this,!0,a)};
var jd=function(a,b){od(a);pd(b);ld(a,!1,b)},pd=function(a){w(!(a instanceof F),"An execution sequence may not be initiated with a blocking Deferred.")},td=function(a){var b=qd("https://apis.google.com/js/client.js?onload="+rd);sd(b,null,a,void 0)},sd=function(a,b,c,d){w(!a.Vc,"Blocking Deferreds can not be re-used");a.dc.push([b,c,d]);a.Qa&&md(a)};F.prototype.then=function(a,b,c){var d,e,f=new C(function(a,b){d=a;e=b});sd(this,d,function(a){a instanceof kd?f.cancel():e(a)});return f.then(a,b,c)};
Pc(F);
var ud=function(a){return Fa(a.dc,function(a){return p(a[1])})},md=function(a){if(a.lc&&a.Qa&&ud(a)){var b=a.lc,c=vd[b];c&&(l.clearTimeout(c.pb),delete vd[b]);a.lc=0}a.m&&(a.m.tc--,delete a.m);for(var b=a.ma,d=c=!1;a.dc.length&&!a.sc;){var e=a.dc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.ob?g:f)try{var k=f.call(e||a.bd,b);void 0!==k&&(a.ob=a.ob&&(k==b||k instanceof Error),a.ma=b=k);if(Qc(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.sc=!0}catch(t){b=t,a.ob=!0,ud(a)||(c=!0)}}a.ma=b;d&&
(k=q(a.$c,a,!0),d=q(a.$c,a,!1),b instanceof F?(sd(b,k,d),b.Vc=!0):b.then(k,d));c&&(b=new wd(b),vd[b.pb]=b,a.lc=b.pb)},nd=function(){u.call(this)};r(nd,u);nd.prototype.message="Deferred has already fired";nd.prototype.name="AlreadyCalledError";var kd=function(){u.call(this)};r(kd,u);kd.prototype.message="Deferred was canceled";kd.prototype.name="CanceledError";var wd=function(a){this.pb=l.setTimeout(q(this.Qe,this),0);this.K=a};
wd.prototype.Qe=function(){w(vd[this.pb],"Cannot throw an error that is not scheduled.");delete vd[this.pb];throw this.K;};var vd={};var qd=function(a){var b=new wc;b.Wb=a;return xd(b)},xd=function(a){var b={},c=b.document||document,d;a instanceof wc&&a.constructor===wc&&a.Nd===vc?d=a.Wb:(ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={vd:e,Ab:void 0};var f=new F(yd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){zd(e,!0);jd(f,new Ad(1,"Timeout reached for loading script "+d))},k),a.Ab=g);e.onload=
e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(zd(e,b.bf||!1,g),f.callback(null))};e.onerror=function(){zd(e,!0,g);jd(f,new Ad(0,"Error while loading script "+d))};a=b.attributes||{};Va(a,{type:"text/javascript",charset:"UTF-8",src:d});Bc(e,a);Bd(c).appendChild(e);return f},Bd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},yd=function(){if(this&&this.vd){var a=this.vd;a&&"SCRIPT"==a.tagName&&
zd(a,!0,this.Ab)}},zd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Ad=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};r(Ad,u);var G=function(){vb.call(this);this.$=new Cb(this);this.Qd=this;this.Hc=null};r(G,vb);G.prototype[yb]=!0;h=G.prototype;h.addEventListener=function(a,b,c,d){Ib(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Rb(this,a,b,c,d)};
h.dispatchEvent=function(a){Cd(this);var b,c=this.Hc;if(c){b=[];for(var d=1;c;c=c.Hc)b.push(c),w(1E3>++d,"infinite loop")}c=this.Qd;d=a.type||a;if(n(a))a=new wb(a,c);else if(a instanceof wb)a.target=a.target||c;else{var e=a;a=new wb(d,c);Va(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Wa&&0<=g;g--)f=a.currentTarget=b[g],e=Dd(f,d,!0,a)&&e;a.Wa||(f=a.currentTarget=c,e=Dd(f,d,!0,a)&&e,a.Wa||(e=Dd(f,d,!1,a)&&e));if(b)for(g=0;!a.Wa&&g<b.length;g++)f=a.currentTarget=b[g],e=Dd(f,d,!1,a)&&e;return e};
h.Oa=function(){G.Tc.Oa.call(this);if(this.$){var a=this.$,b=0,c;for(c in a.w){for(var d=a.w[c],e=0;e<d.length;e++)++b,Bb(d[e]);delete a.w[c];a.Bb--}}this.Hc=null};h.listen=function(a,b,c,d){Cd(this);return this.$.add(String(a),b,!1,c,d)};
var Qb=function(a,b,c,d,e){a.$.add(String(b),c,!0,d,e)},Dd=function(a,b,c,d){b=a.$.w[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.$a&&g.capture==c){var k=g.listener,t=g.Kb||g.src;g.Db&&Eb(a.$,g);e=!1!==k.call(t,d)&&e}}return e&&0!=d.ud};G.prototype.zc=function(a,b,c,d){return this.$.zc(String(a),b,c,d)};var Cd=function(a){w(a.$,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Ed="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Fd=function(){};Fd.prototype.next=function(){throw Ed;};Fd.prototype.Pd=function(){return this};var Gd=function(a,b){this.aa={};this.s=[];this.hb=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};Gd.prototype.V=function(){Hd(this);for(var a=[],b=0;b<this.s.length;b++)a.push(this.aa[this.s[b]]);return a};Gd.prototype.ia=function(){Hd(this);return this.s.concat()};Gd.prototype.lb=function(a){return Id(this.aa,a)};
Gd.prototype.remove=function(a){return Id(this.aa,a)?(delete this.aa[a],this.l--,this.hb++,this.s.length>2*this.l&&Hd(this),!0):!1};var Hd=function(a){if(a.l!=a.s.length){for(var b=0,c=0;b<a.s.length;){var d=a.s[b];Id(a.aa,d)&&(a.s[c++]=d);b++}a.s.length=c}if(a.l!=a.s.length){for(var e={},c=b=0;b<a.s.length;)d=a.s[b],Id(e,d)||(a.s[c++]=d,e[d]=1),b++;a.s.length=c}};h=Gd.prototype;h.get=function(a,b){return Id(this.aa,a)?this.aa[a]:b};
h.set=function(a,b){Id(this.aa,a)||(this.l++,this.s.push(a),this.hb++);this.aa[a]=b};h.addAll=function(a){var b;a instanceof Gd?(b=a.ia(),a=a.V()):(b=Qa(a),a=Pa(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ia(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Gd(this)};
h.Pd=function(a){Hd(this);var b=0,c=this.hb,d=this,e=new Fd;e.next=function(){if(c!=d.hb)throw Error("The map has changed since the iterator was created");if(b>=d.s.length)throw Ed;var e=d.s[b++];return a?e:d.aa[e]};return e};var Id=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Jd=function(a){if(a.V&&"function"==typeof a.V)return a.V();if(n(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Pa(a)},Kd=function(a){if(a.ia&&"function"==typeof a.ia)return a.ia();if(!a.V||"function"!=typeof a.V){if(ea(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Qa(a)}},Ld=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||n(a))x(a,b,void 0);else for(var c=Kd(a),d=Jd(a),e=
d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var Md=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Md.prototype.dd=null;var Nd=0;Md.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Nd++;d||ka();this.sb=a;this.Ae=b;delete this.dd};Md.prototype.yd=function(a){this.sb=a};var Od=function(a){this.Be=a;this.hd=this.uc=this.sb=this.m=null},Pd=function(a,b){this.name=a;this.value=b};Pd.prototype.toString=function(){return this.name};var Qd=new Pd("SEVERE",1E3),Rd=new Pd("CONFIG",700),Sd=new Pd("FINE",500);Od.prototype.getParent=function(){return this.m};Od.prototype.yd=function(a){this.sb=a};var Td=function(a){if(a.sb)return a.sb;if(a.m)return Td(a.m);ya("Root logger has no level set.");return null};
Od.prototype.log=function(a,b,c){if(a.value>=Td(this).value)for(p(b)&&(b=b()),a=new Md(a,String(b),this.Be),c&&(a.dd=c),c="log:"+a.Ae,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){var d=c,e=a;if(d.hd)for(var f=0;b=d.hd[f];f++)b(e);c=c.getParent()}};
var Ud={},Vd=null,Wd=function(a){Vd||(Vd=new Od(""),Ud[""]=Vd,Vd.yd(Rd));var b;if(!(b=Ud[a])){b=new Od(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Wd(a.substr(0,c));c.uc||(c.uc={});c.uc[d]=b;b.m=c;Ud[a]=b}return b};var H=function(a,b){a&&a.log(Sd,b,void 0)};var Xd=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},Yd=function(a){var b=null;return(new C(function(c,d){b=Xd(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).g(function(a){l.clearTimeout(b);throw a;})};var Zd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,$d=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var I=function(a){G.call(this);this.headers=new Gd;this.pc=a||null;this.pa=!1;this.oc=this.b=null;this.rb=this.md=this.Rb="";this.Ba=this.Bc=this.Pb=this.wc=!1;this.eb=0;this.kc=null;this.td="";this.mc=this.Ge=this.Gd=!1};r(I,G);var ae=I.prototype,be=Wd("goog.net.XhrIo");ae.R=be;var ce=/^https?$/i,de=["POST","PUT"];
I.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Rb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Rb=a;this.rb="";this.md=b;this.wc=!1;this.pa=!0;this.b=this.pc?this.pc.Eb():pc.Eb();this.oc=this.pc?oc(this.pc):oc(pc);this.b.onreadystatechange=q(this.qd,this);this.Ge&&"onprogress"in this.b&&(this.b.onprogress=q(function(a){this.pd(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=q(this.pd,this)));try{H(this.R,ee(this,"Opening Xhr")),
this.Bc=!0,this.b.open(b,String(a),!0),this.Bc=!1}catch(f){H(this.R,ee(this,"Error opening Xhr: "+f.message));this.K(5,f);return}a=c||"";var e=this.headers.clone();d&&Ld(d,function(a,b){e.set(b,a)});d=Ha(e.ia());c=l.FormData&&a instanceof l.FormData;!Ia(de,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.td&&(this.b.responseType=this.td);"withCredentials"in this.b&&this.b.withCredentials!==this.Gd&&(this.b.withCredentials=
this.Gd);try{fe(this),0<this.eb&&(this.mc=ge(this.b),H(this.R,ee(this,"Will abort after "+this.eb+"ms if incomplete, xhr2 "+this.mc)),this.mc?(this.b.timeout=this.eb,this.b.ontimeout=q(this.Ab,this)):this.kc=Xd(this.Ab,this.eb,this)),H(this.R,ee(this,"Sending request")),this.Pb=!0,this.b.send(a),this.Pb=!1}catch(f){H(this.R,ee(this,"Send error: "+f.message)),this.K(5,f)}};var ge=function(a){return z&&A(9)&&fa(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
I.prototype.Ab=function(){"undefined"!=typeof aa&&this.b&&(this.rb="Timed out after "+this.eb+"ms, aborting",H(this.R,ee(this,this.rb)),this.dispatchEvent("timeout"),this.abort(8))};I.prototype.K=function(a,b){this.pa=!1;this.b&&(this.Ba=!0,this.b.abort(),this.Ba=!1);this.rb=b;he(this);ie(this)};var he=function(a){a.wc||(a.wc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
I.prototype.abort=function(){this.b&&this.pa&&(H(this.R,ee(this,"Aborting")),this.pa=!1,this.Ba=!0,this.b.abort(),this.Ba=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ie(this))};I.prototype.Oa=function(){this.b&&(this.pa&&(this.pa=!1,this.Ba=!0,this.b.abort(),this.Ba=!1),ie(this,!0));I.Tc.Oa.call(this)};I.prototype.qd=function(){this.isDisposed()||(this.Bc||this.Pb||this.Ba?je(this):this.Ee())};I.prototype.Ee=function(){je(this)};
var je=function(a){if(a.pa&&"undefined"!=typeof aa)if(a.oc[1]&&4==ke(a)&&2==le(a))H(a.R,ee(a,"Local request error detected and ignored"));else if(a.Pb&&4==ke(a))Xd(a.qd,0,a);else if(a.dispatchEvent("readystatechange"),4==ke(a)){H(a.R,ee(a,"Request complete"));a.pa=!1;try{var b=le(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Rb).match(Zd)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
f=g.substr(0,g.length-1);e=!ce.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<ke(a)?a.b.statusText:""}catch(t){H(a.R,"Can not get status: "+t.message),k=""}a.rb=k+" ["+le(a)+"]";he(a)}}finally{ie(a)}}};I.prototype.pd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(me(a,"progress"));this.dispatchEvent(me(a,b?"downloadprogress":"uploadprogress"))};
var me=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},ie=function(a,b){if(a.b){fe(a);var c=a.b,d=a.oc[0]?ba:null;a.b=null;a.oc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.R)&&a.log(Qd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},fe=function(a){a.b&&a.mc&&(a.b.ontimeout=null);fa(a.kc)&&(l.clearTimeout(a.kc),a.kc=null)},ke=function(a){return a.b?a.b.readyState:0},le=function(a){try{return 2<ke(a)?
a.b.status:-1}catch(b){return-1}},ne=function(a){try{return a.b?a.b.responseText:""}catch(b){return H(a.R,"Can not get responseText: "+b.message),""}},ee=function(a,b){return b+" ["+a.md+" "+a.Rb+" "+le(a)+"]"};var oe=function(a,b){this.Z=this.Ha=this.da="";this.Va=null;this.Aa=this.ra="";this.N=this.ue=!1;var c;a instanceof oe?(this.N=void 0!==b?b:a.N,pe(this,a.da),c=a.Ha,J(this),this.Ha=c,qe(this,a.Z),re(this,a.Va),se(this,a.ra),te(this,a.Y.clone()),a=a.Aa,J(this),this.Aa=a):a&&(c=String(a).match(Zd))?(this.N=!!b,pe(this,c[1]||"",!0),a=c[2]||"",J(this),this.Ha=ue(a),qe(this,c[3]||"",!0),re(this,c[4]),se(this,c[5]||"",!0),te(this,c[6]||"",!0),a=c[7]||"",J(this),this.Aa=ue(a)):(this.N=!!b,this.Y=new K(null,
0,this.N))};oe.prototype.toString=function(){var a=[],b=this.da;b&&a.push(ve(b,we,!0),":");var c=this.Z;if(c||"file"==b)a.push("//"),(b=this.Ha)&&a.push(ve(b,we,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Va,null!=c&&a.push(":",String(c));if(c=this.ra)this.Z&&"/"!=c.charAt(0)&&a.push("/"),a.push(ve(c,"/"==c.charAt(0)?xe:ye,!0));(c=this.Y.toString())&&a.push("?",c);(c=this.Aa)&&a.push("#",ve(c,ze));return a.join("")};
oe.prototype.resolve=function(a){var b=this.clone(),c=!!a.da;c?pe(b,a.da):c=!!a.Ha;if(c){var d=a.Ha;J(b);b.Ha=d}else c=!!a.Z;c?qe(b,a.Z):c=null!=a.Va;d=a.ra;if(c)re(b,a.Va);else if(c=!!a.ra){if("/"!=d.charAt(0))if(this.Z&&!this.ra)d="/"+d;else{var e=b.ra.lastIndexOf("/");-1!=e&&(d=b.ra.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?se(b,d):c=""!==a.Y.toString();c?te(b,a.Y.clone()):c=!!a.Aa;c&&(a=a.Aa,J(b),b.Aa=a);return b};oe.prototype.clone=function(){return new oe(this)};
var pe=function(a,b,c){J(a);a.da=c?ue(b,!0):b;a.da&&(a.da=a.da.replace(/:$/,""))},qe=function(a,b,c){J(a);a.Z=c?ue(b,!0):b},re=function(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Va=b}else a.Va=null},se=function(a,b,c){J(a);a.ra=c?ue(b,!0):b},te=function(a,b,c){J(a);b instanceof K?(a.Y=b,a.Y.Qc(a.N)):(c||(b=ve(b,Ae)),a.Y=new K(b,0,a.N))},L=function(a,b,c){J(a);a.Y.set(b,c)},Be=function(a,b){J(a);a.Y.remove(b)},J=function(a){if(a.ue)throw Error("Tried to modify a read-only Uri");
};oe.prototype.Qc=function(a){this.N=a;this.Y&&this.Y.Qc(a);return this};
var Ce=function(a){return a instanceof oe?a.clone():new oe(a,void 0)},De=function(a,b){var c=new oe(null,void 0);pe(c,"https");a&&qe(c,a);b&&se(c,b);return c},ue=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},ve=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,Ee),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ee=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},we=/[#\/\?@]/g,ye=/[\#\?:]/g,xe=/[\#\?]/g,Ae=/[\#\?@]/g,
ze=/#/g,K=function(a,b,c){this.l=this.h=null;this.J=a||null;this.N=!!c},Fe=function(a){a.h||(a.h=new Gd,a.l=0,a.J&&$d(a.J,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},He=function(a){var b=Kd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new K(null,0,void 0);a=Jd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];da(f)?Ge(c,e,f):c.add(e,f)}return c};h=K.prototype;
h.add=function(a,b){Fe(this);this.J=null;a=this.M(a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.l=za(this.l)+1;return this};h.remove=function(a){Fe(this);a=this.M(a);return this.h.lb(a)?(this.J=null,this.l=za(this.l)-this.h.get(a).length,this.h.remove(a)):!1};h.lb=function(a){Fe(this);a=this.M(a);return this.h.lb(a)};h.ia=function(){Fe(this);for(var a=this.h.V(),b=this.h.ia(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.V=function(a){Fe(this);var b=[];if(n(a))this.lb(a)&&(b=Ma(b,this.h.get(this.M(a))));else{a=this.h.V();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};h.set=function(a,b){Fe(this);this.J=null;a=this.M(a);this.lb(a)&&(this.l=za(this.l)-this.h.get(a).length);this.h.set(a,[b]);this.l=za(this.l)+1;return this};h.get=function(a,b){a=a?this.V(a):[];return 0<a.length?String(a[0]):b};var Ge=function(a,b,c){a.remove(b);0<c.length&&(a.J=null,a.h.set(a.M(b),Na(c)),a.l=za(a.l)+c.length)};
K.prototype.toString=function(){if(this.J)return this.J;if(!this.h)return"";for(var a=[],b=this.h.ia(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.V(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.J=a.join("&")};K.prototype.clone=function(){var a=new K;a.J=this.J;this.h&&(a.h=this.h.clone(),a.l=this.l);return a};K.prototype.M=function(a){a=String(a);this.N&&(a=a.toLowerCase());return a};
K.prototype.Qc=function(a){a&&!this.N&&(Fe(this),this.J=null,this.h.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),Ge(this,b,a))},this));this.N=a};var Ie=function(){var a=M();return z&&!!mb&&11==mb||/Edge\/\d+/.test(a)},Je=function(){return l.window&&l.window.location.href||""},Ke=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):da(a[d])?Sa(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Ke(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},Me=function(){var a;a=M();a="Chrome"!=Le(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],
10):null;return a&&30>a?!1:!z||!mb||9<mb},Ne=function(a){a=(a||M()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},Oe=function(a){a=a||l.window;try{a.close()}catch(b){}},Pe=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,
statusbar:!0,toolbar:!1};c=M().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));"Firefox"==Le(M())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:ec("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(y("iPhone")&&!y("iPod")&&
!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ga(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":typeof g,w(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",
f)),b=b instanceof B?b:ec(b),g.href=bc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=bc(b),g&&(db&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=$b("b/12014412, meta tag with sanitized URL"),ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(na,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(oa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,
"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ra,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(Zb(a),"must provide justification"),w(!/^[\s\xa0]*$/.test(Zb(a)),"must provide non-empty justification"),g.document.write(zc((new yc).se(d))),g.document.close())):g=a.open(bc(b),c,g);if(g)try{g.focus()}catch(k){}return g},Qe=function(a){return new C(function(b){var c=function(){Yd(2E3).then(function(){if(!a||
a.closed)b();else return c()})};return c()})},Re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Se=function(){var a=null;return(new C(function(b){"complete"==l.document.readyState?b():(a=function(){b()},Pb(window,"load",a))})).g(function(b){Rb(window,"load",a);throw b;})},N=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":l.hasOwnProperty("process")?"Node":"Browser"},Te=function(){var a=N();return"ReactNative"===a||"Node"===a},Le=function(a){var b=a.toLowerCase();if(v(b,"opera/")||
v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";
else return"Safari";return"Other"},Ue=function(a){var b=N();return("Browser"===b?Le(M()):b)+"/JsCore/"+a},M=function(){return l.navigator&&l.navigator.userAgent||""},Ve=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Ye=function(){var a;if(a=("http:"===We()||"https:"===We())&&!Te())a:{try{var b=l.localStorage,c=Xe();if(b){b.setItem(c,"1");b.removeItem(c);a=Ie()?!!l.indexedDB:!0;break a}}catch(d){}a=!1}return a},We=
function(){return l.location&&l.location.protocol||null},Ze=function(a){a=a||M();return Ne(a)||"Firefox"==Le(a)?!1:!0},$e=function(a){return"undefined"===typeof a?null:jc(a)},af=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},bf=function(a){if(null!==a){var b;try{b=gc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},Xe=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},cf=function(a){a=a||M();return"Safari"==Le(a)||
a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},df=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},ef=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.Ne=a;this.ze=b;a=c||M();d=d||N();this.te=Ne(a)||"ReactNative"===d};ef.prototype.get=function(){return this.te?this.ze:this.Ne};var ff;try{var gf={};Object.defineProperty(gf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(gf,"abcd",{configurable:!0,enumerable:!0,value:2});ff=2==gf.abcd}catch(a){ff=!1}
var O=function(a,b,c){ff?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},hf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&O(a,c,b[c])},jf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},kf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},lf=function(a){var b=a;if("object"==typeof a&&null!=a){var b="length"in a?[]:{},c;for(c in a)O(b,c,
lf(a[c]))}return b};var mf=["client_id","response_type","scope","redirect_uri","state"],nf={Hd:{vb:500,ub:600,providerId:"facebook.com",cc:mf},Id:{vb:500,ub:620,providerId:"github.com",cc:mf},Jd:{vb:515,ub:680,providerId:"google.com",cc:mf},Od:{vb:485,ub:705,providerId:"twitter.com",cc:"oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")}},of=function(a){for(var b in nf)if(nf[b].providerId==a)return nf[b];return null},pf=function(a){return(a=of(a))&&
a.cc||[]};var P=function(a,b){this.code="auth/"+a;this.message=b||qf[a]||""};r(P,Error);P.prototype.I=function(){return{name:this.code,code:this.code,message:this.message}};
var qf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.",
"invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
"unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
"app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.",
"operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.",
"provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.",
"user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var rf=function(a,b,c,d,e){this.xa=a;this.U=b||null;this.gb=c||null;this.ec=d||null;this.K=e||null;if(this.gb||this.K){if(this.gb&&this.K)throw new P("invalid-auth-event");if(this.gb&&!this.ec)throw new P("invalid-auth-event");}else throw new P("invalid-auth-event");};rf.prototype.getError=function(){return this.K};rf.prototype.I=function(){return{type:this.xa,eventId:this.U,urlResponse:this.gb,sessionId:this.ec,error:this.K&&this.K.I()}};var sf=function(a){var b="unauthorized-domain",c=void 0,d=Ce(a);a=d.Z;d=d.da;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);P.call(this,b,c)};r(sf,P);var tf=function(a){this.ye=a.sub;ka();this.Fb=a.email||null};var uf=function(a,b,c,d){var e={};ga(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)O(this,"accessToken",e.oauthToken),O(this,"secret",e.oauthTokenSecret);else{if(b)throw new P("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new P("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&O(this,
"idToken",e.idToken),e.accessToken&&O(this,"accessToken",e.accessToken);O(this,"provider",a)};uf.prototype.Hb=function(a){return vf(a,wf(this))};uf.prototype.nd=function(a,b){var c=wf(this);c.idToken=b;return xf(a,c)};var wf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:He(b).toString(),requestUri:Ye()?Je():"http://localhost"}};
uf.prototype.I=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var yf=function(a,b,c){var d=!!b,e=c||[];b=function(){hf(this,{providerId:a,isOAuthProvider:!0});this.Pc=[];this.ad={};"google.com"==a&&this.addScope("profile")};d||(b.prototype.addScope=function(a){Ia(this.Pc,a)||this.Pc.push(a)});b.prototype.setCustomParameters=function(a){this.ad=Ta(a)};b.prototype.ge=function(){var a=af(this.ad),b;for(b in a)a[b]=a[b].toString();a=Ta(a);for(b=0;b<e.length;b++){var c=e[b];c in a&&delete a[c]}return a};b.prototype.he=function(){return Na(this.Pc)};b.credential=
function(b,c){return new uf(a,d,b,c)};hf(b,{PROVIDER_ID:a});return b},zf=yf("facebook.com",!1,pf("facebook.com"));zf.prototype.addScope=zf.prototype.addScope||void 0;var Af=yf("github.com",!1,pf("github.com"));Af.prototype.addScope=Af.prototype.addScope||void 0;var Bf=yf("google.com",!1,pf("google.com"));Bf.prototype.addScope=Bf.prototype.addScope||void 0;
Bf.credential=function(a,b){if(!a&&!b)throw new P("argument-error","credential failed: must provide the ID token and/or the access token.");return new uf("google.com",!1,ga(a)?a:{idToken:a||null,accessToken:b||null})};var Cf=yf("twitter.com",!0,pf("twitter.com")),Df=function(a,b){this.Fb=a;this.Ic=b;O(this,"provider","password")};Df.prototype.Hb=function(a){return Q(a,Ef,{email:this.Fb,password:this.Ic})};Df.prototype.nd=function(a,b){return Q(a,Ff,{idToken:b,email:this.Fb,password:this.Ic})};
Df.prototype.I=function(){return{email:this.Fb,password:this.Ic}};var Gf=function(){hf(this,{providerId:"password",isOAuthProvider:!1})};hf(Gf,{PROVIDER_ID:"password"});
var Hf={$e:Gf,Hd:zf,Jd:Bf,Id:Af,Od:Cf},If=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Hf)if(Hf[e].PROVIDER_ID==b)try{return Hf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null},Jf=function(a){if(!a.isOAuthProvider)throw new P("invalid-oauth-provider");};var Kf=function(a,b,c,d){P.call(this,a,d);O(this,"email",b);O(this,"credential",c)};r(Kf,P);Kf.prototype.I=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.I();b&&(Va(a,b),a.providerId=b.provider,delete a.provider);return a};var Lf=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));return a.email?new Kf(b,a.email,If(a),a.message):new P(b,a.message||void 0)}return null};var Mf=function(a){this.Ze=a};r(Mf,nc);Mf.prototype.Eb=function(){return new this.Ze};Mf.prototype.Cc=function(){return{}};
var R=function(a,b,c){var d;d="Node"==N();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new P("internal-error","The XMLHttpRequest compatibility library was not found.");this.i=a;a=b||{};this.Je=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Ke=a.secureTokenTimeout||Nf;this.wd=Ta(a.secureTokenHeaders||Of);this.be=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.ce=a.firebaseTimeout||
Pf;this.fd=Ta(a.firebaseHeaders||Qf);c&&(this.fd["X-Client-Version"]=c,this.wd["X-Client-Version"]=c);this.Td=new sc;this.Ye=new Mf(d)},Rf,Nf=new ef(1E4,3E4),Of={"Content-Type":"application/x-www-form-urlencoded"},Pf=new ef(1E4,3E4),Qf={"Content-Type":"application/json"},Tf=function(a,b,c,d,e,f,g){Me()?a=q(a.Me,a):(Rf||(Rf=new C(function(a,b){Sf(a,b)})),a=q(a.Le,a));a(b,c,d,e,f,g)};
R.prototype.Me=function(a,b,c,d,e,f){var g="Node"==N(),k=Te()?g?new I(this.Ye):new I:new I(this.Td),t;f&&(k.eb=Math.max(0,f),t=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){t&&clearTimeout(t);var a=null;try{var c;c=this.b?gc(this.b.responseText):void 0;a=c||null}catch(Ei){try{a=JSON.parse(ne(this))||null}catch(Fi){a=null}}b&&b(a)});Qb(k,"ready",function(){t&&clearTimeout(t);this.za||(this.za=!0,this.Oa())});Qb(k,"timeout",function(){t&&clearTimeout(t);this.za||
(this.za=!0,this.Oa());b&&b(null)});k.send(a,c,d,e)};var rd="__fcb"+Math.floor(1E6*Math.random()).toString(),Sf=function(a,b){((window.gapi||{}).client||{}).request?a():(l[rd]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},td(function(){b(Error("CORS_UNSUPPORTED"))}))};
R.prototype.Le=function(a,b,c,d,e){var f=this;Rf.then(function(){window.gapi.client.setApiKey(f.i);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).g(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var Vf=function(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Tf(a,a.Je+"?key="+encodeURIComponent(a.i),function(a){a?a.error?d(Uf(a)):a.access_token&&a.refresh_token?c(a):d(new P("internal-error")):d(new P("network-request-failed"))},"POST",He(b).toString(),a.wd,a.Ke.get()):d(new P("internal-error"))})},Wf=function(a,b,c,d,e){var f=Ce(a.be+b);L(f,"key",a.i);e&&L(f,"cb",ka().toString());var g="GET"==c;if(g)for(var k in d)d.hasOwnProperty(k)&&
L(f,k,d[k]);return new C(function(b,e){Tf(a,f.toString(),function(a){a?a.error?e(Uf(a)):b(a):e(new P("network-request-failed"))},c,g?void 0:jc(af(d)),a.fd,a.ce.get())})},Xf=function(a){if(!Wb.test(a.email))throw new P("invalid-email");},Yf=function(a){"email"in a&&Xf(a)},$f=function(a,b){var c=Ye()?Je():"http://localhost";return Q(a,Zf,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},bg=function(a){return Q(a,ag,{}).then(function(a){return a.authorizedDomains||[]})},cg=
function(a){if(!a.idToken)throw new P("internal-error");};R.prototype.signInAnonymously=function(){return Q(this,dg,{})};R.prototype.updateEmail=function(a,b){return Q(this,eg,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,Ff,{idToken:a,password:b})};var fg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Oa(fg,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,eg,c)};R.prototype.sendPasswordResetEmail=function(a){return Q(this,gg,{requestType:"PASSWORD_RESET",email:a})};R.prototype.sendEmailVerification=function(a){return Q(this,hg,{requestType:"VERIFY_EMAIL",idToken:a})};
var jg=function(a,b,c){return Q(a,ig,{idToken:b,deleteProvider:c})},kg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new P("internal-error");},lg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Lf(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Lf(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Lf(a));if(b)throw b;if(!a.idToken)throw new P("internal-error");},vf=function(a,
b){b.returnIdpCredential=!0;return Q(a,mg,b)},xf=function(a,b){b.returnIdpCredential=!0;return Q(a,ng,b)},og=function(a){if(!a.oobCode)throw new P("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,pg,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,qg,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,rg,{oobCode:a})};
var rg={endpoint:"setAccountInfo",F:og,bb:"email"},qg={endpoint:"resetPassword",F:og,va:function(a){if(!a.email||!a.requestType)throw new P("internal-error");}},sg={endpoint:"signupNewUser",F:function(a){Xf(a);if(!a.password)throw new P("weak-password");},va:cg,wa:!0},Zf={endpoint:"createAuthUri"},tg={endpoint:"deleteAccount",ab:["idToken"]},ig={endpoint:"setAccountInfo",ab:["idToken","deleteProvider"],F:function(a){if(!da(a.deleteProvider))throw new P("internal-error");}},ug={endpoint:"getAccountInfo"},
hg={endpoint:"getOobConfirmationCode",ab:["idToken","requestType"],F:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new P("internal-error");},bb:"email"},gg={endpoint:"getOobConfirmationCode",ab:["requestType"],F:function(a){if("PASSWORD_RESET"!=a.requestType)throw new P("internal-error");Xf(a)},bb:"email"},ag={Sd:!0,endpoint:"getProjectConfig",oe:"GET"},pg={endpoint:"resetPassword",F:og,bb:"email"},eg={endpoint:"setAccountInfo",ab:["idToken"],F:Yf,wa:!0},Ff={endpoint:"setAccountInfo",ab:["idToken"],
F:function(a){Yf(a);if(!a.password)throw new P("weak-password");},va:cg,wa:!0},dg={endpoint:"signupNewUser",va:cg,wa:!0},mg={endpoint:"verifyAssertion",F:kg,va:lg,wa:!0},ng={endpoint:"verifyAssertion",F:function(a){kg(a);if(!a.idToken)throw new P("internal-error");},va:lg,wa:!0},vg={endpoint:"verifyCustomToken",F:function(a){if(!a.token)throw new P("invalid-custom-token");},va:cg,wa:!0},Ef={endpoint:"verifyPassword",F:function(a){Xf(a);if(!a.password)throw new P("wrong-password");},va:cg,wa:!0},Q=
function(a,b,c){if(!kf(c,b.ab))return E(new P("internal-error"));var d=b.oe||"POST",e;return D(c).then(b.F).then(function(){b.wa&&(c.returnSecureToken=!0);return Wf(a,b.endpoint,d,c,b.Sd||!1)}).then(function(a){return e=a}).then(b.va).then(function(){if(!b.bb)return e;if(!(b.bb in e))throw new P("internal-error");return e[b.bb]})},Uf=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
new P(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",
WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled"};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new P(d[e],b);!b&&a&&(b=$e(a));return new P("internal-error",b)};var wg=function(a){this.S=a};wg.prototype.value=function(){return this.S};wg.prototype.zd=function(a){this.S.style=a;return this};var xg=function(a){this.S=a||{}};xg.prototype.value=function(){return this.S};xg.prototype.zd=function(a){this.S.style=a;return this};var zg=function(a){this.Xe=a;this.Nb=null;this.Gc=yg(this)},Ag=function(a){var b=new xg;b.S.where=document.body;b.S.url=a.Xe;b.S.messageHandlersFilter=Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.S.attributes=b.S.attributes||{};(new wg(b.S.attributes)).zd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.S.dontclear=!0;return b},yg=function(a){return Bg().then(function(){return new C(function(b,c){Ve("gapi.iframes.getContext")().open(Ag(a).value(),function(d){a.Nb=d;a.Nb.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},Cg.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};zg.prototype.sendMessage=function(a){var b=this;return this.Gc.then(function(){return new C(function(c){b.Nb.send(a.type,a,c,Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Dg=function(a,b){a.Gc.then(function(){a.Nb.register("authEvent",b,Ve("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Eg=new ef(3E3,15E3),Cg=new ef(5E3,15E3),Bg=function(){return new C(function(a,b){var c=function(){df();Ve("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){df();b(Error("Network Error"))},timeout:Eg.get()})};if(Ve("gapi.iframes.Iframe"))a();else if(Ve("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){Ve("gapi.load")?c():
b(Error("Network Error"))};D(qd("https://apis.google.com/js/api.js?onload="+d)).g(function(){b(Error("Network Error"))})}})};var Fg=function(a,b,c){this.v=a;this.i=b;this.B=c;this.Ia=null;this.o=De(this.v,"/__/auth/iframe");L(this.o,"apiKey",this.i);L(this.o,"appName",this.B)};Fg.prototype.setVersion=function(a){this.Ia=a;return this};Fg.prototype.toString=function(){this.Ia?L(this.o,"v",this.Ia):Be(this.o,"v");return this.o.toString()};
var Gg=function(a,b,c,d,e){this.v=a;this.i=b;this.B=c;this.Rd=d;this.Ia=this.U=this.Nc=null;this.Zb=e;this.o=De(this.v,"/__/auth/handler");L(this.o,"apiKey",this.i);L(this.o,"appName",this.B);L(this.o,"authType",this.Rd)};Gg.prototype.setVersion=function(a){this.Ia=a;return this};
Gg.prototype.toString=function(){if(this.Zb.isOAuthProvider){L(this.o,"providerId",this.Zb.providerId);var a=this.Zb.he();a&&a.length&&L(this.o,"scopes",a.join(","));a=this.Zb.ge();Ra(a)||L(this.o,"customParameters",$e(a))}this.Nc?L(this.o,"redirectUrl",this.Nc):Be(this.o,"redirectUrl");this.U?L(this.o,"eventId",this.U):Be(this.o,"eventId");this.Ia?L(this.o,"v",this.Ia):Be(this.o,"v");return this.o.toString()};
var Hg=function(a,b,c,d){this.v=a;this.i=b;this.B=c;this.ee=(this.kb=d||null)?Ue(this.kb):null;d=this.kb;this.pe=(new Fg(a,b,c)).setVersion(d).toString();this.jb=[];this.f=new R(b,null,this.ee);this.Qb=this.qa=null},Ig=function(a){var b=Je();return bg(a).then(function(a){a:{for(var c=Ce(b),e=c.da,c=c.Z,f=0;f<a.length;f++){var g;var k=a[f];g=c;var t=e;0==k.indexOf("chrome-extension://")?g=Ce(k).Z==g&&"chrome-extension"==t:"http"!=t&&"https"!=t?g=!1:Re.test(k)?g=g==k:(k=k.split(".").join("\\."),g=(new RegExp("^(.+\\."+
k+"|"+k+")$","i")).test(g));if(g){a=!0;break a}}a=!1}if(!a)throw new sf(Je());})};Hg.prototype.qb=function(){if(this.Qb)return this.Qb;var a=this;return this.Qb=Se().then(function(){a.Mb=new zg(a.pe);Jg(a)})};Hg.prototype.fc=function(a,b,c){var d=new P("popup-closed-by-user"),e=new P("web-storage-unsupported"),f=this,g=!1;return Kg(this).then(function(){Lg(f).then(function(c){c||(a&&Oe(a),b(e),g=!0)})}).g(function(){}).then(function(){if(!g)return Qe(a)}).then(function(){if(!g)return Yd(c).then(function(){b(d)})})};
Hg.prototype.Xb=function(a,b,c,d,e,f,g){if(!a)return E(new P("popup-blocked"));if(g)return Kg(this).g(function(b){Oe(a);e(b)}),d(),D();this.qa||(this.qa=Ig(this.f));var k=this;return this.qa.then(function(){var b=Kg(k).g(function(b){Oe(a);e(b);throw b;});d();return b}).then(function(){Jf(c);var d=Mg(k.v,k.i,k.B,b,c,null,f,k.kb);(a||l.window).location.href=bc(ec(d))}).g(function(a){"auth/network-request-failed"==a.code&&(k.qa=null);throw a;})};
Hg.prototype.Yb=function(a,b,c){this.qa||(this.qa=Ig(this.f));var d=this;return this.qa.then(function(){Jf(b);var e=Mg(d.v,d.i,d.B,a,b,Je(),c,d.kb);l.window.location.href=bc(ec(e))})};
var Kg=function(a){return a.qb().then(function(){return a.Mb.Gc}).g(function(){a.qa=null;throw new P("network-request-failed");})},Mg=function(a,b,c,d,e,f,g,k){a=new Gg(a,b,c,d,e);a.Nc=f;a.U=g;return a.setVersion(k).toString()},Jg=function(a){if(!a.Mb)throw Error("IfcHandler must be initialized!");Dg(a.Mb,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new P(e.substring(5),c.message):null;b=new rf(b.type,b.eventId,
b.urlResponse,b.sessionId,c)}else b=null;for(c=0;c<a.jb.length;c++)d=a.jb[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})},Lg=function(a){var b={type:"webStorageSupport"};return a.qb().then(function(){return a.Mb.sendMessage(b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})},Ng=function(a,b){La(a.jb,function(a){return a==b})};var Og=function(a){this.u=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.u)throw new P("internal-error","The React Native compatibility library was not found.");};h=Og.prototype;h.get=function(a){return D(this.u.getItem(a)).then(function(a){return a&&bf(a)})};h.set=function(a,b){return D(this.u.setItem(a,$e(b)))};h.remove=function(a){return D(this.u.removeItem(a))};h.Ka=function(){};h.Za=function(){};var Pg=function(){this.u={}};h=Pg.prototype;h.get=function(a){return D(this.u[a])};h.set=function(a,b){this.u[a]=b;return D()};h.remove=function(a){delete this.u[a];return D()};h.Ka=function(){};h.Za=function(){};var Rg=function(){if(!Qg()){if("Node"==N())throw new P("internal-error","The LocalStorage compatibility library was not found.");throw new P("web-storage-unsupported");}this.u=l.localStorage||firebase.INTERNAL.node.localStorage},Qg=function(){var a="Node"==N(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Rg.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.u.getItem(a);return bf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=$e(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.u.removeItem(a)})};h.Ka=function(a){l.window&&Ib(l.window,"storage",a)};h.Za=function(a){l.window&&Rb(l.window,"storage",a)};var Sg=function(){this.u={}};h=Sg.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.remove=function(){return D()};h.Ka=function(){};h.Za=function(){};var Ug=function(){if(!Tg()){if("Node"==N())throw new P("internal-error","The SessionStorage compatibility library was not found.");throw new P("web-storage-unsupported");}this.u=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},Tg=function(){var a="Node"==N(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Ug.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.u.getItem(a);return bf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=$e(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.u.removeItem(a)})};h.Ka=function(){};h.Za=function(){};var Vg=function(a,b,c,d,e,f){if(!window.indexedDB)throw new P("web-storage-unsupported");this.Vd=a;this.Fc=b;this.vc=c;this.Fd=d;this.hb=e;this.P={};this.yb=[];this.tb=0;this.qe=f||l.indexedDB},Wg,Xg=function(a){return new C(function(b,c){var d=a.qe.open(a.Vd,a.hb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Fc,{keyPath:a.vc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},Yg=function(a){a.kd||(a.kd=
Xg(a));return a.kd},Zg=function(a,b){return b.objectStore(a.Fc)},$g=function(a,b,c){return b.transaction([a.Fc],c?"readwrite":"readonly")},ah=function(a){return new C(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=Vg.prototype;
h.set=function(a,b){var c=!1,d,e=this;return ad(Yg(this).then(function(b){d=b;b=Zg(e,$g(e,d,!0));return ah(b.get(a))}).then(function(f){var g=Zg(e,$g(e,d,!0));if(f)return f.value=b,ah(g.put(f));e.tb++;c=!0;f={};f[e.vc]=a;f[e.Fd]=b;return ah(g.add(f))}).then(function(){e.P[a]=b}),function(){c&&e.tb--})};h.get=function(a){var b=this;return Yg(this).then(function(c){return ah(Zg(b,$g(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return ad(Yg(this).then(function(d){b=!0;c.tb++;return ah(Zg(c,$g(c,d,!0))["delete"](a))}).then(function(){delete c.P[a]}),function(){b&&c.tb--})};
h.Pe=function(){var a=this;return Yg(this).then(function(b){var c=Zg(a,$g(a,b,!1));return c.getAll?ah(c.getAll()):new C(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.tb){for(d=0;d<b.length;d++)c[b[d][a.vc]]=b[d][a.Fd];d=Ke(a.P,c);a.P=c}return d})};h.Ka=function(a){0==this.yb.length&&this.Sc();this.yb.push(a)};
h.Za=function(a){La(this.yb,function(b){return b==a});0==this.yb.length&&this.hc()};h.Sc=function(){var a=this;this.hc();var b=function(){a.Jc=Yd(800).then(q(a.Pe,a)).then(function(b){0<b.length&&x(a.yb,function(a){a(b)})}).then(b).g(function(a){"STOP_EVENT"!=a.message&&b()});return a.Jc};b()};h.hc=function(){this.Jc&&this.Jc.cancel("STOP_EVENT")};var eh=function(){this.cd={Browser:bh,Node:ch,ReactNative:dh}[N()]},fh,bh={X:Rg,Uc:Ug},ch={X:Rg,Uc:Ug},dh={X:Og,Uc:Sg};var gh=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;O(this,"operation",a);O(this,"data",lf(b))};var hh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),S=function(a,b){return{name:a||"",fa:"a valid string",optional:!!b,ga:n}},T=function(a){return{name:a||"",fa:"a valid object",optional:!1,ga:ga}},ih=function(a,b){return{name:a||"",fa:"a function",optional:!!b,ga:p}},jh=function(){return{name:"",fa:"null",optional:!1,ga:ca}},kh=function(){return{name:"credential",fa:"a valid credential",optional:!1,ga:function(a){return!(!a||!a.Hb)}}},lh=function(){return{name:"authProvider",
fa:"a valid Auth provider",optional:!1,ga:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},mh=function(a,b,c,d){return{name:c||"",fa:a.fa+" or "+b.fa,optional:!!d,ga:function(c){return a.ga(c)||b.ga(c)}}};var oh=function(a,b){for(var c in b){var d=b[c].name;a[d]=nh(d,a[c],b[c].a)}},U=function(a,b,c,d){a[b]=nh(b,c,d)},nh=function(a,b,c){if(!c)return b;var d=ph(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var t=!1,pa=0;pa<c.length;pa++)if(c[pa].optional)t=!0;else{if(t)throw new P("internal-error","Argument validator encountered a required argument after an optional argument.");k++}t=c.length;if(e.length<k||t<e.length)e="Expected "+(k==
t?1==k?"1 argument":k+" arguments":k+"-"+t+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(t=c[k].optional&&void 0===e[k],!c[k].ga(e[k])&&!t){e=c[k];if(0>k||k>=hh.length)throw new P("internal-error","Argument validator received an unsupported number of arguments.");e=hh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.fa+".";break a}e=null}}if(e)throw new P("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},ph=function(a){a=a.split(".");return a[a.length-1]};var qh=function(a,b,c,d){this.Ce=a;this.xd=b;this.Ie=c;this.cb=d;this.O={};fh||(fh=new eh);a=fh;try{var e;Ie()?(Wg||(Wg=new Vg("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=Wg):e=new a.cd.X;this.Ua=e}catch(f){this.Ua=new Pg,this.cb=!0}try{this.jc=new a.cd.Uc}catch(f){this.jc=new Pg}this.Ad=q(this.Bd,this);this.P={}},rh,sh=function(){rh||(rh=new qh("firebase",":",!cf(M())&&l.window&&l.window!=l.window.top?!0:!1,Ze()));return rh};h=qh.prototype;
h.M=function(a,b){return this.Ce+this.xd+a.name+(b?this.xd+b:"")};h.get=function(a,b){return(a.X?this.Ua:this.jc).get(this.M(a,b))};h.remove=function(a,b){b=this.M(a,b);a.X&&!this.cb&&(this.P[b]=null);return(a.X?this.Ua:this.jc).remove(b)};h.set=function(a,b,c){var d=this.M(a,c),e=this,f=a.X?this.Ua:this.jc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.X&&!this.cb&&(e.P[d]=b)})};
h.addListener=function(a,b,c){a=this.M(a,b);this.cb||(this.P[a]=l.localStorage.getItem(a));Ra(this.O)&&this.Sc();this.O[a]||(this.O[a]=[]);this.O[a].push(c)};h.removeListener=function(a,b,c){a=this.M(a,b);this.O[a]&&(La(this.O[a],function(a){return a==c}),0==this.O[a].length&&delete this.O[a]);Ra(this.O)&&this.hc()};h.Sc=function(){this.Ua.Ka(this.Ad);this.cb||th(this)};
var th=function(a){uh(a);a.Ec=setInterval(function(){for(var b in a.O){var c=l.localStorage.getItem(b);c!=a.P[b]&&(a.P[b]=c,c=new xb({type:"storage",key:b,target:window,oldValue:a.P[b],newValue:c}),a.Bd(c))}},1E3)},uh=function(a){a.Ec&&(clearInterval(a.Ec),a.Ec=null)};qh.prototype.hc=function(){this.Ua.Za(this.Ad);this.cb||uh(this)};
qh.prototype.Bd=function(a){if(a&&a.fe){var b=a.mb.key;if(this.Ie){var c=l.localStorage.getItem(b);a=a.mb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.P[b]=l.localStorage.getItem(b);this.Xc(b)}else x(a,q(this.Xc,this))};qh.prototype.Xc=function(a){this.O[a]&&x(this.O[a],function(a){a()})};var vh=function(a){this.C=a;this.A=sh()},wh={name:"pendingRedirect",X:!1},xh=function(a){return a.A.set(wh,"pending",a.C)},yh=function(a){return a.A.remove(wh,a.C)},zh=function(a){return a.A.get(wh,a.C).then(function(a){return"pending"==a})};var V=function(a,b,c){this.v=a;this.i=b;this.B=c;this.zb=[];this.Sa=!1;this.rc=q(this.ie,this);this.Xa=new Ah(this);this.rd=new Bh(this);this.Ub=new vh(this.i+":"+this.B);this.fb={};this.fb.unknown=this.Xa;this.fb.signInViaRedirect=this.Xa;this.fb.linkViaRedirect=this.Xa;this.fb.signInViaPopup=this.rd;this.fb.linkViaPopup=this.rd;this.ba=new Hg(this.v,this.i,this.B,firebase.SDK_VERSION||null)};
V.prototype.reset=function(){this.Sa=!1;Ng(this.ba,this.rc);this.ba=new Hg(this.v,this.i,this.B,firebase.SDK_VERSION||null)};V.prototype.qb=function(){var a=this;this.Sa||(this.Sa=!0,this.ba.jb.push(this.rc));var b=this.ba;return Kg(this.ba).g(function(c){a.ba==b&&a.reset();throw c;})};var Dh=function(a){var b=M();Ze(b)||cf(b)||a.qb();Ch(a.Xa)};
V.prototype.subscribe=function(a){Ia(this.zb,a)||this.zb.push(a);if(!this.Sa){var b=this;zh(this.Ub).then(function(a){a?yh(b.Ub).then(function(){b.qb()}):Dh(b)}).g(function(){Dh(b)})}};V.prototype.unsubscribe=function(a){La(this.zb,function(b){return b==a})};V.prototype.ie=function(a){if(!a)throw new P("invalid-auth-event");for(var b=!1,c=0;c<this.zb.length;c++){var d=this.zb[c];if(d.Yc(a.xa,a.U)){(b=this.fb[a.xa])&&b.sd(a,d);b=!0;break}}Ch(this.Xa);return b};
var Eh=new ef(2E3,1E4),Fh=new ef(1E4,3E4);V.prototype.getRedirectResult=function(){return this.Xa.getRedirectResult()};V.prototype.Xb=function(a,b,c,d,e){var f=this;return this.ba.Xb(a,b,c,function(){f.Sa||(f.Sa=!0,f.ba.jb.push(f.rc))},function(){f.reset()},d,e)};V.prototype.Yb=function(a,b,c){var d=this,e;return xh(this.Ub).then(function(){return d.ba.Yb(a,b,c).g(function(a){e=a;return yh(d.Ub).then(function(){throw e;})}).then(function(){})})};
V.prototype.fc=function(a,b,c,d){return this.ba.fc(c,function(c){a.Ga(b,null,c,d)},Eh.get())};var Gh={},Hh=function(a,b,c){var d=b+":"+c;Gh[d]||(Gh[d]=new V(a,b,c));return Gh[d]},Ah=function(a){this.A=a;this.la=null;this.xb=[];this.wb=[];this.ua=null;this.Mc=!1};Ah.prototype.reset=function(){this.la=null;this.ua&&(this.ua.cancel(),this.ua=null)};
Ah.prototype.sd=function(a,b){if(!a)return E(new P("invalid-auth-event"));this.Mc=!0;var c=a.xa,d=a.U,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code;"unknown"!=c||e?a=a.K?this.Kc(a,b):b.nb(c,d)?this.Lc(a,b):E(new P("invalid-auth-event")):(this.la=null,Ih(this,!1,null,null),a=D());return a};var Ch=function(a){a.Mc||(a.Mc=!0,Ih(a,!1,null,null))};Ah.prototype.Kc=function(a){this.la=null;Ih(this,!0,null,a.getError());return D()};
Ah.prototype.Lc=function(a,b){var c=this,d=a.xa;b=b.nb(d,a.U);var e=a.gb;a=a.ec;var f="signInViaRedirect"==d||"linkViaRedirect"==d;this.ua&&this.ua.cancel();this.la=null;return b(e,a).then(function(a){Ih(c,f,a,null)}).g(function(a){Ih(c,f,null,a)})};
var Jh=function(a,b){a.la=function(){return E(b)};if(a.wb.length)for(var c=0;c<a.wb.length;c++)a.wb[c](b)},Kh=function(a,b){a.la=function(){return D(b)};if(a.xb.length)for(var c=0;c<a.xb.length;c++)a.xb[c](b)},Ih=function(a,b,c,d){b?d?Jh(a,d):Kh(a,c):Kh(a,{user:null});a.xb=[];a.wb=[]};Ah.prototype.getRedirectResult=function(){var a=this;return new C(function(b,c){a.la?a.la().then(b,c):(a.xb.push(b),a.wb.push(c),Lh(a))})};
var Lh=function(a){var b=new P("timeout");a.ua&&a.ua.cancel();a.ua=Yd(Fh.get()).then(function(){a.la||Ih(a,!0,null,b)})},Bh=function(a){this.A=a};Bh.prototype.sd=function(a,b){if(!a)return E(new P("invalid-auth-event"));var c=a.xa,d=a.U;return a.K?this.Kc(a,b):b.nb(c,d)?this.Lc(a,b):E(new P("invalid-auth-event"))};Bh.prototype.Kc=function(a,b){b.Ga(a.xa,null,a.getError(),a.U);return D()};
Bh.prototype.Lc=function(a,b){var c=a.U,d=a.xa;return b.nb(d,c)(a.gb,a.ec).then(function(a){b.Ga(d,a,null,c)}).g(function(a){b.Ga(d,null,a,c)})};var Mh=function(a){this.f=a;this.ya=this.T=null;this.Pa=0};Mh.prototype.I=function(){return{apiKey:this.f.i,refreshToken:this.T,accessToken:this.ya,expirationTime:this.Pa}};
var Oh=function(a,b){var c=b.idToken,d=b.refreshToken;b=Nh(b.expiresIn);a.ya=c;a.Pa=b;a.T=d},Nh=function(a){return ka()+1E3*parseInt(a,10)},Ph=function(a,b){return Vf(a.f,b).then(function(b){a.ya=b.access_token;a.Pa=Nh(b.expires_in);a.T=b.refresh_token;return{accessToken:a.ya,expirationTime:a.Pa,refreshToken:a.T}}).g(function(b){"auth/user-token-expired"==b.code&&(a.T=null);throw b;})},Qh=function(a){return!(!a.ya||a.T)};
Mh.prototype.getToken=function(a){a=!!a;return Qh(this)?E(new P("user-token-expired")):a||!this.ya||ka()>this.Pa-3E4?this.T?Ph(this,{grant_type:"refresh_token",refresh_token:this.T}):D(null):D({accessToken:this.ya,expirationTime:this.Pa,refreshToken:this.T})};var Rh=function(a,b,c,d,e){hf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},Sh=function(a,b){wb.call(this,a);for(var c in b)this[c]=b[c]};r(Sh,wb);
var W=function(a,b,c){this.W=[];this.i=a.apiKey;this.B=a.appName;this.v=a.authDomain||null;a=firebase.SDK_VERSION?Ue(firebase.SDK_VERSION):null;this.f=new R(this.i,null,a);this.ea=new Mh(this.f);Th(this,b.idToken);Oh(this.ea,b);O(this,"refreshToken",this.ea.T);Uh(this,c||{});G.call(this);this.Vb=!1;this.v&&Ye()&&(this.j=Hh(this.v,this.i,this.B));this.gc=[];this.qc=D()};r(W,G);
W.prototype.sa=function(a,b){var c=Array.prototype.slice.call(arguments,1),d=this;return this.qc=this.qc.then(function(){return a.apply(d,c)},function(){return a.apply(d,c)})};
var Th=function(a,b){a.ld=b;O(a,"_lat",b)},Vh=function(a,b){La(a.gc,function(a){return a==b})},Wh=function(a){for(var b=[],c=0;c<a.gc.length;c++)b.push(a.gc[c](a));return Yc(b).then(function(){return a})},Xh=function(a){a.j&&!a.Vb&&(a.Vb=!0,a.j.subscribe(a))},Uh=function(a,b){hf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};O(W.prototype,"providerId","firebase");
var Yh=function(){},Zh=function(a){return D().then(function(){if(a.Xd)throw new P("app-deleted");})},$h=function(a){return Ea(a.providerData,function(a){return a.providerId})},bi=function(a,b){b&&(ai(a,b.providerId),a.providerData.push(b))},ai=function(a,b){La(a.providerData,function(a){return a.providerId==b})},ci=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&O(a,b,c)};
W.prototype.copy=function(a){var b=this;b!=a&&(hf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){bi(b,a)}),this.ea=a.ea,O(this,"refreshToken",this.ea.T))};W.prototype.reload=function(){var a=this;return Zh(this).then(function(){return di(a).then(function(){return Wh(a)}).then(Yh)})};
var di=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return ei(a,b).then(function(){c||ci(a,"isAnonymous",!1);return b}).g(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new Sh("userDeleted")),fi(a));throw b;})})};
W.prototype.getToken=function(a){var b=this,c=Qh(this.ea);return Zh(this).then(function(){return b.ea.getToken(a)}).then(function(a){if(!a)throw new P("internal-error");a.accessToken!=b.ld&&(Th(b,a.accessToken),b.Ca());ci(b,"refreshToken",a.refreshToken);return a.accessToken}).g(function(a){if("auth/user-token-expired"==a.code&&!c)return Wh(b).then(function(){ci(b,"refreshToken",null);throw a;});throw a;})};
var gi=function(a,b){b.idToken&&a.ld!=b.idToken&&(Oh(a.ea,b),a.Ca(),Th(a,b.idToken),ci(a,"refreshToken",a.ea.T))};W.prototype.Ca=function(){this.dispatchEvent(new Sh("tokenChanged"))};var ei=function(a,b){return Q(a.f,ug,{idToken:b}).then(q(a.Fe,a))};
W.prototype.Fe=function(a){a=a.users;if(!a||!a.length)throw new P("internal-error");a=a[0];Uh(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=hi(a),c=0;c<b.length;c++)bi(this,b[c]);ci(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var hi=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new Rh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Hb(this.f).then(function(a){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=gc(rb(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new tf(k);break a}}catch(t){}}c=null}if(!c||b.uid!=c.ye)throw new P("user-mismatch");gi(b,a);return b.reload()}))};
var ii=function(a,b){return di(a).then(function(){if(Ia($h(a),b))return Wh(a).then(function(){throw new P("provider-already-linked");})})};h=W.prototype;h.we=function(a){var b=this;return this.c(ii(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.nd(b.f,c)}).then(q(this.ed,this)))};h.link=function(a){return this.sa(this.we,a)};h.ed=function(a){gi(this,a);var b=this;return this.reload().then(function(){return b})};
h.Ue=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){gi(b,a);return b.reload()}))};h.updateEmail=function(a){return this.sa(this.Ue,a)};h.Ve=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){gi(b,a);return b.reload()}))};h.updatePassword=function(a){return this.sa(this.Ve,a)};
h.We=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Zh(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){gi(b,a);ci(b,"displayName",a.displayName||null);ci(b,"photoURL",a.photoUrl||null);return Wh(b)}).then(Yh))};h.updateProfile=function(a){return this.sa(this.We,a)};
h.Te=function(a){var b=this;return this.c(di(this).then(function(c){return Ia($h(b),a)?jg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x($h(b),function(a){c[a]||ai(b,a)});return Wh(b)}):Wh(b).then(function(){throw new P("no-such-provider");})}))};h.unlink=function(a){return this.sa(this.Te,a)};h.Wd=function(){var a=this;return this.c(this.getToken().then(function(b){return Q(a.f,tg,{idToken:b})}).then(function(){a.dispatchEvent(new Sh("userDeleted"))})).then(function(){fi(a)})};
h["delete"]=function(){return this.sa(this.Wd)};h.Yc=function(a,b){return"linkViaPopup"==a&&(this.ja||null)==b&&this.ca||"linkViaRedirect"==a&&(this.ac||null)==b?!0:!1};h.Ga=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ja||null)&&(c&&this.Ea?this.Ea(c):b&&!c&&this.ca&&this.ca(b),this.D&&(this.D.cancel(),this.D=null),delete this.ca,delete this.Ea)};h.nb=function(a,b){return"linkViaPopup"==a&&b==(this.ja||null)||"linkViaRedirect"==a&&(this.ac||null)==b?q(this.$d,this):null};
h.Gb=function(){return Xe(this.uid+":::")};
var ki=function(a,b){if(!Ye())return E(new P("operation-not-supported-in-this-environment"));var c=of(b.providerId),d=a.Gb(),e=null;!Ze()&&a.v&&b.isOAuthProvider&&(e=Mg(a.v,a.i,a.B,"linkViaPopup",b,null,d,firebase.SDK_VERSION||null));var f=Pe(e,c&&c.vb,c&&c.ub),c=ii(a,b.providerId).then(function(){return Wh(a)}).then(function(){ji(a);return a.getToken()}).then(function(){return a.j.Xb(f,"linkViaPopup",b,d,!!e)}).then(function(){return new C(function(b,c){a.Ga("linkViaPopup",null,new P("cancelled-popup-request"),
a.ja||null);a.ca=b;a.Ea=c;a.ja=d;a.D=a.j.fc(a,"linkViaPopup",f,d)})}).then(function(a){f&&Oe(f);return a}).g(function(a){f&&Oe(f);throw a;});return a.c(c)};W.prototype.linkWithPopup=function(a){var b=ki(this,a);return this.sa(function(){return b})};
W.prototype.xe=function(a){if(!Ye())return E(new P("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Gb(),e=ii(this,a.providerId).then(function(){ji(b);return b.getToken()}).then(function(){b.ac=d;return Wh(b)}).then(function(a){b.Fa&&(a=b.Fa,a=a.A.set(li,b.I(),a.C));return a}).then(function(){return b.j.Yb("linkViaRedirect",a,d)}).g(function(a){c=a;if(b.Fa)return mi(b.Fa);throw c;}).then(function(){if(c)throw c;});return this.c(e)};
W.prototype.linkWithRedirect=function(a){return this.sa(this.xe,a)};var ji=function(a){if(!a.j||!a.Vb){if(a.j&&!a.Vb)throw new P("internal-error");throw new P("auth-domain-config-required");}};W.prototype.$d=function(a,b){var c=this;this.D&&(this.D.cancel(),this.D=null);var d=null,e=this.getToken().then(function(d){return xf(c.f,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=If(a);return c.ed(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};
W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var fi=function(a){for(var b=0;b<a.W.length;b++)a.W[b].cancel("app-deleted");a.W=[];a.Xd=!0;O(a,"refreshToken",null);a.j&&a.j.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.W.push(a);ad(a,function(){Ka(b.W,a)});return a};W.prototype.toJSON=function(){return this.I()};
W.prototype.I=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.i,appName:this.B,authDomain:this.v,stsTokenManager:this.ea.I(),redirectEventId:this.ac||null};x(this.providerData,function(b){a.providerData.push(jf(b))});return a};
var ni=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ka())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};hf(b,a);bi(d,b)}});a.redirectEventId&&(d.ac=a.redirectEventId);
return d},oi=function(a,b,c){var d=new W(a,b);c&&(d.Fa=c);return d.reload().then(function(){return d})};var pi=function(a){this.C=a;this.A=sh()},li={name:"redirectUser",X:!1},mi=function(a){return a.A.remove(li,a.C)},qi=function(a,b){return a.A.get(li,a.C).then(function(a){a&&b&&(a.authDomain=b);return ni(a||{})})};var ri=function(a){this.C=a;this.A=sh()},si={name:"authUser",X:!0},ti=function(a,b){return a.A.set(si,b.I(),a.C)},ui=function(a){return a.A.remove(si,a.C)},vi=function(a,b){return a.A.get(si,a.C).then(function(a){a&&b&&(a.authDomain=b);return ni(a||{})})};var Y=function(a){this.Na=!1;O(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?Ue(firebase.SDK_VERSION):null,this.f=new R(X(this).options&&X(this).options.apiKey,null,a);else throw new P("invalid-api-key");this.W=[];this.La=[];this.De=firebase.INTERNAL.createSubscribe(q(this.re,this));wi(this,null);this.na=new ri(X(this).options.apiKey+":"+X(this).name);this.Ya=new pi(X(this).options.apiKey+":"+X(this).name);this.Cb=this.c(xi(this));this.ta=this.c(yi(this));this.Dc=
!1;this.Ac=q(this.Oe,this);this.Dd=q(this.Ra,this);this.Ed=q(this.ne,this);this.Cd=q(this.me,this);zi(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).I()}};
var Ai=function(a){return a.Yd||E(new P("auth-domain-config-required"))},zi=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&Ye()&&(a.Yd=a.Cb.then(function(){if(!a.Na)return a.j=Hh(b,c,X(a).name),a.j.subscribe(a),Z(a)&&Xh(Z(a)),a.Oc&&(Xh(a.Oc),a.Oc=null),a.j}))};h=Y.prototype;h.Yc=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ja==b&&!!this.ca;default:return!1}};
h.Ga=function(a,b,c,d){"signInViaPopup"==a&&this.ja==d&&(c&&this.Ea?this.Ea(c):b&&!c&&this.ca&&this.ca(b),this.D&&(this.D.cancel(),this.D=null),delete this.ca,delete this.Ea)};h.nb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ja==b&&this.ca?q(this.ae,this):null};
h.ae=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.D&&(this.D.cancel(),this.D=null);var d=null,e=vf(c.f,a).then(function(a){d=If(a);return a});a=c.Cb.then(function(){return e}).then(function(a){return Bi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Gb=function(){return Xe()};
h.signInWithPopup=function(a){if(!Ye())return E(new P("operation-not-supported-in-this-environment"));var b=this,c=of(a.providerId),d=this.Gb(),e=null;!Ze()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=Mg(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=Pe(e,c&&c.vb,c&&c.ub),c=Ai(this).then(function(b){return b.Xb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(a,c){b.Ga("signInViaPopup",null,new P("cancelled-popup-request"),
b.ja);b.ca=a;b.Ea=c;b.ja=d;b.D=b.j.fc(b,"signInViaPopup",f,d)})}).then(function(a){f&&Oe(f);return a}).g(function(a){f&&Oe(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Ye())return E(new P("operation-not-supported-in-this-environment"));var b=this,c=Ai(this).then(function(){return b.j.Yb("signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!Ye())return E(new P("operation-not-supported-in-this-environment"));var a=this,b=Ai(this).then(function(){return a.j.getRedirectResult()});return this.c(b)};
var Bi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Cb.then(function(){return oi(c,b,a.Ya)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ra(b);wi(a,b);Xh(b);return a.Ra(b)}).then(function(){a.Ca()})},wi=function(a,b){Z(a)&&(Vh(Z(a),a.Dd),Rb(Z(a),"tokenChanged",a.Ed),Rb(Z(a),"userDeleted",a.Cd));b&&(b.gc.push(a.Dd),Ib(b,"tokenChanged",a.Ed),Ib(b,"userDeleted",a.Cd));O(a,"currentUser",b)};
Y.prototype.signOut=function(){var a=this,b=this.ta.then(function(){if(!Z(a))return D();wi(a,null);return ui(a.na).then(function(){a.Ca()})});return this.c(b)};
var Ci=function(a){var b=qi(a.Ya,X(a).options.authDomain).then(function(b){if(a.Oc=b)b.Fa=a.Ya;return mi(a.Ya)});return a.c(b)},xi=function(a){var b=X(a).options.authDomain,c=Ci(a).then(function(){return vi(a.na,b)}).then(function(b){return b?(b.Fa=a.Ya,b.reload().then(function(){return ti(a.na,b).then(function(){return b})}).g(function(c){return"auth/network-request-failed"==c.code?b:ui(a.na)})):null}).then(function(b){wi(a,b||null)});return a.c(c)},yi=function(a){return a.Cb.then(function(){return a.getRedirectResult()}).g(function(){}).then(function(){if(!a.Na)return a.Ac()}).g(function(){}).then(function(){if(!a.Na){a.Dc=
!0;var b=a.na;b.A.addListener(si,b.C,a.Ac)}})};Y.prototype.Oe=function(){var a=this;return vi(this.na,X(this).options.authDomain).then(function(b){if(!a.Na){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)wi(a,b),b&&(Xh(b),b.Fa=a.Ya),a.j&&a.j.subscribe(a),a.Ca()}})};Y.prototype.Ra=function(a){return ti(this.na,a)};Y.prototype.ne=function(){this.Ca();this.Ra(Z(this))};
Y.prototype.me=function(){this.signOut()};var Di=function(a,b){return a.c(b.then(function(b){return Bi(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.re=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.Dc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.De(a,b,c)};
h.getToken=function(a){var b=this,c=this.ta.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.ta.then(function(){return Di(b,Q(b.f,vg,{token:a}))}).then(function(a){ci(a,"isAnonymous",!1);return b.Ra(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ta.then(function(){return Di(c,Q(c.f,Ef,{email:a,password:b}))})};
h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ta.then(function(){return Di(c,Q(c.f,sg,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.ta.then(function(){return Di(b,a.Hb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?D(a):this.ta.then(function(){return Di(b,b.f.signInAnonymously())}).then(function(a){ci(a,"isAnonymous",!0);return b.Ra(a)}).then(function(){return Z(b)})};
var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Ca=function(){if(this.Dc)for(var a=0;a<this.La.length;a++)if(this.La[a])this.La[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.La.push(a);this.c(this.ta.then(function(){b.Na||Ia(b.La,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){La(this.La,function(b){return b==a})};
h["delete"]=function(){this.Na=!0;for(var a=0;a<this.W.length;a++)this.W[a].cancel("app-deleted");this.W=[];this.na&&(a=this.na,a.A.removeListener(si,a.C,this.Ac));this.j&&this.j.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.W.push(a);ad(a,function(){Ka(b.W,a)});return a};h.fetchProvidersForEmail=function(a){return this.c($f(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return new gh(a)}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};oh(Y.prototype,{applyActionCode:{name:"applyActionCode",a:[S("code")]},checkActionCode:{name:"checkActionCode",a:[S("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[S("code"),S("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[S("email"),S("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[S("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[mh(T(),ih(),"nextOrObserver"),
ih("opt_error",!0),ih("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[S("email")]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[kh()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[S("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[S("email"),S("password")]},signInWithPopup:{name:"signInWithPopup",a:[lh()]},signInWithRedirect:{name:"signInWithRedirect",a:[lh()]},signOut:{name:"signOut",
a:[]},toJSON:{name:"toJSON",a:[S(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[S("code")]}});
oh(W.prototype,{"delete":{name:"delete",a:[]},getToken:{name:"getToken",a:[{name:"opt_forceRefresh",fa:"a boolean",optional:!0,ga:function(a){return"boolean"==typeof a}}]},link:{name:"link",a:[kh()]},linkWithPopup:{name:"linkWithPopup",a:[lh()]},linkWithRedirect:{name:"linkWithRedirect",a:[lh()]},reauthenticate:{name:"reauthenticate",a:[kh()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[S(null,!0)]},unlink:{name:"unlink",a:[S("provider")]},
updateEmail:{name:"updateEmail",a:[S("email")]},updatePassword:{name:"updatePassword",a:[S("password")]},updateProfile:{name:"updateProfile",a:[T("profile")]}});oh(C.prototype,{g:{name:"catch"},then:{name:"then"}});U(Gf,"credential",function(a,b){return new Df(a,b)},[S("email"),S("password")]);oh(zf.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});U(zf,"credential",zf.credential,[mh(S(),T(),"token")]);
oh(Af.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});U(Af,"credential",Af.credential,[mh(S(),T(),"token")]);oh(Bf.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});U(Bf,"credential",Bf.credential,[mh(S(),mh(T(),jh()),"idToken"),mh(S(),jh(),"accessToken",!0)]);oh(Cf.prototype,{setCustomParameters:{name:"setCustomParameters",a:[T("customOAuthParameters")]}});
U(Cf,"credential",Cf.credential,[mh(S(),T(),"token"),S("secret",!0)]);
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:P};U(a,"EmailAuthProvider",Gf,[]);U(a,"FacebookAuthProvider",zf,[]);U(a,"GithubAuthProvider",Af,[]);U(a,"GoogleAuthProvider",Bf,[]);U(a,"TwitterAuthProvider",Cf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:q(a.getToken,a),addAuthTokenListener:q(a.addAuthTokenListener,a),removeAuthTokenListener:q(a.removeAuthTokenListener,a)}});return a},
a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(){this.Wa=-1};function na(){this.Wa=-1;this.Wa=64;this.M=[];this.Vd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(na,ma);na.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
function oa(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],l=a.M[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),m=1518500249):(f=c^h^k,m=1859775393):60>e?(f=c&h|k&(c|h),m=2400959708):(f=c^h^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+l&4294967295}
na.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Vd,f=this.$b;d<b;){if(0==f)for(;d<=c;)oa(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){oa(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){oa(this,e);f=0;break}}this.$b=f;this.Pd+=b}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function pa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function qa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function ra(a){var b=0,c;for(c in a)b++;return b}function sa(a){for(var b in a)return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ua(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function va(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function wa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function xa(a,b){var c=wa(a,b,void 0);return c&&a[c]}function ya(a){for(var b in a)return!1;return!0}function za(a){var b={},c;for(c in a)b[c]=a[c];return b};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Fd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};var t;a:{var Ga=aa.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){t=Ha;break a}}t=""};var v=Array.prototype,Ia=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},La=v.map?function(a,b,c){return v.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ma=v.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return v.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Na=v.every?function(a,b,
c){return v.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&v.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)}
function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=t.indexOf("Opera")||-1!=t.indexOf("OPR"),Va=-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE"),Wa=-1!=t.indexOf("Gecko")&&-1==t.toLowerCase().indexOf("webkit")&&!(-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE")),Xa=-1!=t.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(t))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,h||(k=64));d.push(c[u],c[f],c[k],c[m])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function db(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(y(a,b,d)+"must be a valid function.");}function eb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function fb(a){var b=[];db(a,function(a,d){ea(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var gb=firebase.Promise;function hb(){var a=this;this.reject=this.resolve=null;this.ra=new gb(function(b,c){a.resolve=b;a.reject=c})}function ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(jb(a.ra),1===b.length?b(c):b(c,d))}}function jb(a){a.then(void 0,ba)};function kb(a,b){if(!a)throw lb(b);}function lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function ob(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function pb(a,b){this.committed=a;this.snapshot=b};function qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function rb(a){this.re=a;this.Bd=[];this.Qb=0;this.Xd=-1;this.Fb=null}function sb(a,b,c){a.Xd=b;a.Fb=c;a.Xd<a.Qb&&(a.Fb(),a.Fb=null)}function tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;ub(function(){f.re(d[e])})}if(a.Qb===a.Xd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return cb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){this.uc=a;this.Cd="firebase:"}g=wb.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:ob(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new wb(b)}}catch(c){}return new vb}var yb=xb("localStorage"),zb=xb("sessionStorage");function Ab(a,b,c){this.type=Bb;this.source=a;this.path=b;this.Ga=c}Ab.prototype.Mc=function(a){return this.path.e()?new Ab(this.source,C,this.Ga.Q(a)):new Ab(this.source,D(this.path),this.Ga)};Ab.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function Cb(a,b){this.type=Db;this.source=a;this.path=b}Cb.prototype.Mc=function(){return this.path.e()?new Cb(this.source,C):new Cb(this.source,D(this.path))};Cb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function Eb(a){this.oc=a}Eb.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Fb(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Gb(){this.Jd=G}Gb.prototype.j=function(a){return this.Jd.P(a)};Gb.prototype.toString=function(){return this.Jd.toString()};function Hb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.ne=c;this.qg=d;this.gf=e||"";this.$a=yb.get("host:"+a)||this.host}function Ib(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&yb.set("host:"+a.host,a.$a))}
function Jb(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.ne);var d=[];r(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
Hb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Kb(){this.tc={}}function Lb(a,b,c){n(c)||(c=1);cb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Kb.prototype.get=function(){return za(this.tc)};function Mb(a){this.Ef=a;this.rd=null}Mb.prototype.get=function(){var a=this.Ef.get(),b=za(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function Nb(){this.vb=[]}function Ob(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new Pb(f));c.add(e)}c&&a.vb.push(c)}function Qb(a,b,c){Ob(a,c);Rb(a,function(a){return a.Z(b)})}function Sb(a,b,c){Ob(a,c);Rb(a,function(a){return a.contains(b)||b.contains(a)})}
function Rb(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Tb&&E("event: "+h.toString());ub(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function Pb(a){this.qa=a;this.jd=[]}Pb.prototype.add=function(a){this.jd.push(a)};Pb.prototype.Yb=function(){return this.qa};function Ub(a,b,c,d){this.$d=b;this.Md=c;this.Dd=d;this.hd=a}Ub.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};Ub.prototype.ee=function(){return this.hd};Ub.prototype.Tb=function(){return this.$d.Tb(this)};Ub.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+B(this.Md.Qe())};function Vb(a,b,c){this.$d=a;this.error=b;this.path=c}Vb.prototype.Yb=function(){return this.path};Vb.prototype.ee=function(){return"cancel"};
Vb.prototype.Tb=function(){return this.$d.Tb(this)};Vb.prototype.toString=function(){return this.path.toString()+":cancel"};function Wb(){}Wb.prototype.Te=function(){return null};Wb.prototype.de=function(){return null};var Xb=new Wb;function Yb(a,b,c){this.xf=a;this.Ka=b;this.yd=c}Yb.prototype.Te=function(a){var b=this.Ka.N;if(Zb(b,a))return b.j().Q(a);b=null!=this.yd?new $b(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};Yb.prototype.de=function(a,b,c){var d=null!=this.yd?this.yd:ac(this.Ka);a=this.xf.Wd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.oe=d;this.Dd=void 0}function bc(a){return new I(cc,a)}var cc="value";function $b(a,b,c){this.A=a;this.da=b;this.Sb=c}function dc(a){return a.da}function ec(a){return a.Sb}function fc(a,b){return b.e()?a.da&&!a.Sb:Zb(a,J(b))}function Zb(a,b){return a.da&&!a.Sb||a.A.Da(b)}$b.prototype.j=function(){return this.A};function gc(a,b){return hc(a.name,b.name)}function ic(a,b){return hc(a,b)};function K(a,b){this.name=a;this.R=b}function jc(a,b){return new K(a,b)};function kc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function lc(a,b){var c=new mc;nc(a,new L(""),function(a,e){oc(c,a,pc(e,b))});return c}function pc(a,b){var c=a.C().H(),c=kc(c,b),d;if(a.J()){var e=kc(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new qc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new qc(c)));a.O(N,function(a,c){var e=pc(c,b);e!==c&&(d=d.T(a,e))});return d};var rc=function(){var a=1;return function(){return a++}}(),H=kb,sc=lb;
function tc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==l)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(m){E("base64Decode failed: ",
m)}return null}function uc(a){var b=mb(a);a=new na;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Vd[d]=c&255,c/=256;oa(a,a.Vd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function vc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+vc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Tb=null,wc=!0;
function xc(a,b){kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Tb=q(console.log,console):"object"===typeof console.log&&(Tb=function(a){console.log(a)})),b&&zb.set("logging_enabled",!0)):ha(a)?Tb=a:(Tb=null,zb.remove("logging_enabled"))}function E(a){!0===wc&&(wc=!1,null===Tb&&!0===zb.get("logging_enabled")&&xc(!0));if(Tb){var b=vc.apply(null,arguments);Tb(b)}}
function yc(a){return function(){E(a,arguments)}}function zc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+vc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Ac(a){var b=vc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+vc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Bc(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var l=h[k];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(m){}f+="/"+l}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Ac(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||Ac("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new Hb(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function Cc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Dc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function hc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Ec(a),d=Ec(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Fc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Gc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Gc(a[b[d]]);return c+"}"}function Hc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Ic(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Jc(a){H(!Cc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Kc=/^-?\d{1,10}$/;function Ec(a){return Kc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function ub(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function Lc(a,b,c){Object.defineProperty(a,b,{get:c})}function Mc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function Nc(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ob(tc(f[0])||""),c=ob(tc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Ie:c,data:d,mg:e}}function Oc(a){a=Nc(a);var b=a.Ie;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function Pc(a){a=Nc(a).Ie;return"object"===typeof a&&!0===w(a,"admin")};function Qc(a,b,c){this.f=yc("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Rc(a,b){if(n(b))return"tag$"+b;H(Sc(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Qc.prototype;
g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Rc(a,c),h={};this.$[f]=h;a=Tc(a.m);var k=this;Uc(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Rc(a,b);delete this.$[c]};g.kf=function(){};g.pe=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.we=function(){};
function Uc(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+fb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=ob(h.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&O("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Vc(a,b,c){this.type=Wc;this.source=a;this.path=b;this.children=c}Vc.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Ab(this.source,C,a.value):new Vc(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Vc(this.source,D(this.path),this.children)};Vc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Xc(a,b){this.rf={};this.Vc=new Mb(a);this.va=b;var c=1E4+2E4*Math.random();Mc(q(this.lf,this),Math.floor(c))}Xc.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&cb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.we(b);Mc(q(this.lf,this),Math.floor(6E5*Math.random()))};var Yc={},Zc={};function $c(a){a=a.toString();Yc[a]||(Yc[a]=new Kb);return Yc[a]}function ad(a,b){var c=a.toString();Zc[c]||(Zc[c]=b());return Zc[c]};var bd=null;"undefined"!==typeof MozWebSocket?bd=MozWebSocket:"undefined"!==typeof WebSocket&&(bd=WebSocket);function cd(a,b,c,d){this.Yd=a;this.f=yc(this.Yd);this.frames=this.zc=null;this.pb=this.qb=this.De=0;this.Va=$c(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Je=Jb(b,"websocket",a)}var dd;
cd.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Je);this.wc=!1;yb.set("previous_websocket_failure",!0);try{this.Ia=new bd(this.Je)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
a.length,Lb(e.Va,"bytes_received",a.length),ed(e),null!==e.frames)fd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.De=b;e.frames=[];a=null;break a}}e.De=1;e.frames=[]}null!==a&&fd(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};cd.prototype.start=function(){};
cd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==bd&&!dd};cd.responsesRequiredToBeHealthy=2;cd.healthyTimeout=3E4;g=cd.prototype;g.sd=function(){yb.remove("previous_websocket_failure")};function fd(a,b){a.frames.push(b);if(a.frames.length==a.De){var c=a.frames.join("");a.frames=null;c=ob(c);a.Xf(c)}}
g.send=function(a){ed(this);a=B(a);this.qb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Hc(a,16384);1<a.length&&gd(this,String(a.length));for(var b=0;b<a.length;b++)gd(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
function ed(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&gd(a,"0");ed(a)},Math.floor(45E3))}function gd(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function hd(){this.fb={}}
function jd(a,b){var c=b.type,d=b.Xa;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.fb[d]=new I("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.fb[d];else if("child_removed"==c&&"child_changed"==f)a.fb[d]=new I("child_removed",e.oe,d);else if("child_changed"==c&&
"child_added"==f)a.fb[d]=new I("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.fb[d]=new I("child_changed",b.Ja,d,e.oe);else throw sc("Illegal combination of changes: "+b+" occurred after "+e);}else a.fb[d]=b};function kd(a){this.V=a;this.g=a.m.g}function ld(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.oe,b.Ja)&&f.push(new I("child_moved",b.Ja,b.Xa))});md(a,e,"child_removed",b,d,c);md(a,e,"child_added",b,d,c);md(a,e,"child_moved",f,d,c);md(a,e,"child_changed",b,d,c);md(a,e,cc,b,d,c);return e}function md(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,q(a.Ff,a));Ja(d,function(c){var d=nd(a,c,f);Ja(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function nd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}kd.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw sc("Should only compare child_ events.");return this.g.compare(new K(a.Xa,a.Ja),new K(b.Xa,b.Ja))};function od(a,b){this.Sd=a;this.Df=b}function pd(a){this.U=a}
pd.prototype.eb=function(a,b,c,d){var e=new hd,f;if(b.type===Bb)b.source.ce?c=qd(this,a,b.path,b.Ga,c,d,e):(H(b.source.Se,"Unknown source."),f=b.source.Ce||ec(a.w())&&!b.path.e(),c=rd(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===Wc)b.source.ce?c=sd(this,a,b.path,b.children,c,d,e):(H(b.source.Se,"Unknown source."),f=b.source.Ce||ec(a.w()),c=td(this,a,b.path,b.children,c,d,f,e));else if(b.type===ud)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new Yb(c,a,d);d=a.N.j();if(b.e()||".priority"===J(b))dc(a.w())?
b=c.Aa(ac(a)):(b=a.w().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=J(b),k=c.qc(h,a.w());null==k&&Zb(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,D(b),f,e):a.N.j().Da(h)?this.U.F(d,h,G,D(b),f,e):d;b.e()&&dc(a.w())&&(d=c.Aa(ac(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=dc(a.w())||null!=c.lc(C);c=vd(a,b,d,this.U.Na())}else c=wd(this,a,b.path,b.Ob,c,d,e);else if(b.type===Db)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=xd(this,new yd(a.N,new $b(f,
h,b.Sb)),d,c,Xb,e);else throw sc("Unknown operation type: "+b.type);e=ta(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=zd(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(bc(zd(d))));return new od(c,e)};
function xd(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())H(dc(b.w()),"If change path is empty, we must have complete server data"),ec(b.w())?(e=ac(b),d=d.rc(e instanceof P?e:G)):d=d.Aa(ac(b)),f=a.U.ya(b.N.j(),d,f);else{var l=J(c);if(".priority"==l)H(1==Ad(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var m=D(c);Zb(h,l)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(l).F(m,d):h.j().Q(l)):d=d.qc(l,
b.w());f=null!=d?a.U.F(h.j(),l,d,m,e,f):h.j()}}return vd(b,f,h.da||c.e(),a.U.Na())}function rd(a,b,c,d,e,f,h,k){var l=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(l.j(),d,null);else if(h.Na()&&!l.Sb)d=l.j().F(c,d),d=h.ya(l.j(),d,null);else{var m=J(c);if(!fc(l,c)&&1<Ad(c))return b;var u=D(c);d=l.j().Q(m).F(u,d);d=".priority"==m?h.fa(l.j(),d):h.F(l.j(),m,d,u,Xb,null)}l=l.da||c.e();b=new yd(b.N,new $b(d,l,h.Na()));return xd(a,b,c,e,new Yb(e,b,f),k)}
function qd(a,b,c,d,e,f,h){var k=b.N;e=new Yb(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=vd(b,h,!0,a.U.Na());else if(f=J(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=vd(b,h,k.da,k.Sb);else{c=D(c);var l=k.j().Q(f);if(!c.e()){var m=e.Te(f);d=null!=m?".priority"===Bd(c)&&m.P(c.parent()).e()?m:m.F(c,d):G}l.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=vd(b,h,k.da,a.U.Na()))}return a}
function sd(a,b,c,d,e,f,h){var k=b;Cd(d,function(d,m){var u=c.n(d);Zb(b.N,J(u))&&(k=qd(a,k,u,m,e,f,h))});Cd(d,function(d,m){var u=c.n(d);Zb(b.N,J(u))||(k=qd(a,k,u,m,e,f,h))});return k}function Dd(a,b){Cd(b,function(b,d){a=a.F(b,d)});return a}
function td(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!dc(b.w()))return b;var l=b;c=c.e()?d:Ed(Q,c,d);var m=b.w().j();c.children.ha(function(c,d){if(m.Da(c)){var F=b.w().j().Q(c),F=Dd(F,d);l=rd(a,l,new L(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!Zb(b.w(),c)&&null==d.value;m.Da(c)||F||(F=b.w().j().Q(c),F=Dd(F,d),l=rd(a,l,new L(c),F,e,f,h,k))});return l}
function wd(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=ec(b.w()),l=b.w();if(null!=d.value){if(c.e()&&l.da||fc(l,c))return rd(a,b,c,l.j().P(c),e,f,k,h);if(c.e()){var m=Q;l.j().O(Fd,function(a,b){m=m.set(new L(a),b)});return td(a,b,c,m,e,f,k,h)}return b}m=Q;Cd(d,function(a){var b=c.n(a);fc(l,b)&&(m=m.set(a,l.j().P(b)))});return td(a,b,c,m,e,f,k,h)};function Gd(a){this.g=a}g=Gd.prototype;g.F=function(a,b,c,d,e,f){H(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?jd(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?jd(f,new I("child_added",c,b)):jd(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
g.ya=function(a,b,c){null!=c&&(a.J()||a.O(N,function(a,e){b.Da(a)||jd(c,new I("child_removed",e,a))}),b.J()||b.O(N,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||jd(c,new I("child_changed",e,b,f))}else jd(c,new I("child_added",e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?G:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Hd(a){this.fe=new Gd(a.g);this.g=a.g;var b;a.ka?(b=Id(a),b=a.g.Ec(Jd(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=Kd(a),a=a.g.Ec(Ld(a),b)):a=a.g.Fc();this.vc=a}g=Hd.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=G);return this.fe.F(a,b,c,d,e,f)};
g.ya=function(a,b,c){b.J()&&(b=G);var d=b.nb(this.g),d=d.fa(G),e=this;b.O(N,function(a,b){e.matches(new K(a,b))||(d=d.T(a,G))});return this.fe.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.fe};function Md(a){this.sa=new Hd(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!Nd(a)}g=Md.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=G);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):Od(this,a,b,c,e,f)};
g.ya=function(a,b,c){var d;if(b.J()||b.e())d=G.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=G.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=R(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(G);var k,l,m;if(this.Ib){b=d.We(this.g);k=this.sa.vc;l=this.sa.Uc;var u=Pd(this.g);m=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
l=this.sa.vc,m=Pd(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=R(b),!z&&0>=m(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=m(f,l))?e++:d=d.T(f.name,G)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
function Od(a,b,c,d,e,f){var h;if(a.Ib){var k=Pd(a.g);h=function(a,b){return k(b,a)}}else h=Pd(a.g);H(b.Eb()==a.oa,"");var l=new K(c,d),m=a.Ib?Qd(b,a.g):Rd(b,a.g),u=a.sa.matches(l);if(b.Da(c)){for(var z=b.Q(c),m=e.de(a.g,m,a.Ib);null!=m&&(m.name==c||b.Da(m.name));)m=e.de(a.g,m,a.Ib);e=null==m?1:h(m,l);if(u&&!d.e()&&0<=e)return null!=f&&jd(f,new I("child_changed",d,c,z)),b.T(c,d);null!=f&&jd(f,new I("child_removed",z,c));b=b.T(c,G);return null!=m&&a.sa.matches(m)?(null!=f&&jd(f,new I("child_added",
m.R,m.name)),b.T(m.name,m.R)):b}return d.e()?b:u&&0<=h(m,l)?(null!=f&&(jd(f,new I("child_removed",m.R,m.name)),jd(f,new I("child_added",d,c))),b.T(c,d).T(m.name,G)):b};function qc(a,b){this.B=a;H(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||G;Sd(this.aa);this.Db=null}var Td=["object","boolean","number","string"];g=qc.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new qc(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:G};g.P=function(a){return a.e()?this:".priority"===J(a)?this.aa:G};g.Da=function(){return!1};g.Ve=function(){return null};
g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:G.T(a,b).fa(this.aa)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Ad(a),".priority must be the last token in a path");return this.T(c,G.F(D(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Ud(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Jc(this.B):a+this.B;this.Db=uc(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===G)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(Td,b),e=Ia(Td,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return B(this.H(!0))};function Vd(){}var Wd={};function Pd(a){return q(a.compare,a)}Vd.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};Vd.prototype.Hc=function(){return Xd};function Yd(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(Yd,Vd);g=Yd.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?hc(a.name,b.name):c};
g.Ec=function(a,b){var c=M(a),c=G.F(this.bc,c);return new K(b,c)};g.Fc=function(){var a=G.F(this.bc,Zd);return new K("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function $d(){}la($d,Vd);g=$d.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?hc(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return Xd};g.Fc=function(){return new K("[MAX_NAME]",new qc("[PRIORITY-POST]",Zd))};
g.Ec=function(a,b){var c=M(a);return new K(b,new qc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new $d;function ae(){}la(ae,Vd);g=ae.prototype;g.compare=function(a,b){return hc(a.name,b.name)};g.xc=function(){throw sc("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return Xd};g.Fc=function(){return new K("[MAX_NAME]",G)};g.Ec=function(a){H(p(a),"KeyIndex indexValue must always be a string.");return new K(a,G)};g.toString=function(){return".key"};
var Fd=new ae;function be(){}la(be,Vd);g=be.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?hc(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return Xd};g.Fc=function(){return ce};g.Ec=function(a,b){var c=M(a);return new K(b,c)};g.toString=function(){return".value"};var de=new be;function ee(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=N}var fe=new ee;function Nd(a){return""===a.mb?a.ka:"l"===a.mb}function Jd(a){H(a.ka,"Only valid if start has been set");return a.dc}function Id(a){H(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function Ld(a){H(a.na,"Only valid if end has been set");return a.ac}
function Kd(a){H(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function ge(a){var b=new ee;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=ee.prototype;g.le=function(a){var b=ge(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.me=function(a){var b=ge(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=ge(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
g.gd=function(a,b){var c=ge(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function he(a,b){var c=ge(a);c.g=b;return c}function ie(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=Nd(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.ka||a.na||a.xa)}function Sc(a){return S(a)&&a.g==N}
function Tc(a){var b={};if(Sc(a))return b;var c;a.g===N?c="$priority":a.g===de?c="$value":a.g===Fd?c="$key":(H(a.g instanceof Yd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.dc),a.Kb&&(b.startAt+=","+B(a.zb)));a.na&&(b.endAt=B(a.ac),a.Rb&&(b.endAt+=","+B(a.xb)));a.xa&&(Nd(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return B(ie(this))};function je(a,b){this.od=a;this.cc=b}je.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===Wd?null:b};function ke(a,b,c){var d=pa(a.od,function(d,f){var h=w(a.cc,f);H(h,"Missing index implementation for "+f);if(d===Wd){if(h.xc(b.R)){for(var k=[],l=c.Wb(jc),m=R(l);m;)m.name!=b.name&&k.push(m),m=R(l);k.push(b);return le(k,Pd(h))}return Wd}h=c.get(b.name);k=d;h&&(k=k.remove(new K(b.name,h)));return k.Oa(b,b.R)});return new je(d,a.cc)}
function me(a,b,c){var d=pa(a.od,function(a){if(a===Wd)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new je(d,a.cc)}var ne=new je({".priority":Wd},{".priority":N});function oe(){this.set={}}g=oe.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return cb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return ya(this.set)};g.count=function(){return ra(this.set)};function pe(a,b){r(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qe(a,b,c,d){this.Yd=a;this.f=yc(a);this.jc=b;this.pb=this.qb=0;this.Va=$c(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Jb(b,"long_polling",a)}}var re,se;
qe.prototype.open=function(a,b){this.Me=0;this.ia=b;this.bf=new rb(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Dc(function(){if(!c.Ab){c.Ta=new te(function(a,b,d,k,l){ue(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,sb(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){ue(c,arguments);
tb(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);ve(c.Ta,a,function(){})}})};
qe.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;we(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
qe.isAvailable=function(){return re||!se&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=qe.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=B(a);this.qb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=Hc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Me,pg:a.length,Oe:a[b]});c.Ud&&we(c);this.Me++}};function ue(a,b){var c=B(b).length;a.pb+=c;Lb(a.Va,"bytes_received",c)}
function te(a,b,c,d){this.Yc=d;this.ib=c;this.te=new oe;this.Qc=[];this.Zd=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=rc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
te.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function we(a){if(a.Ud&&a.Kd&&a.te.count()<(0<a.Qc.length?2:1)){a.Zd++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.Zd;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Oe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Oe;d++}else break;xe(a,b+c,a.Zd);return!0}return!1}function xe(a,b,c){function d(){a.te.remove(c);we(a)}a.te.add(c,1);var e=setTimeout(d,Math.floor(25E3));ve(a,b,function(){clearTimeout(e);d()})}
function ve(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function ye(a){ze(this,a)}var Ae=[qe,cd];function ze(a,b){var c=cd&&cd.isAvailable(),d=c&&!(yb.Ze||!0===yb.get("previous_websocket_failure"));b.qg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[cd];else{var e=a.Wc=[];Ic(Ae,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Be(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function Ce(a,b,c,d,e,f,h){this.id=a;this.f=yc("c:"+this.id+":");this.re=c;this.Lc=d;this.ia=e;this.qe=f;this.L=b;this.Ad=[];this.Ke=0;this.sf=new ye(b);this.Ua=0;this.Cb=h;this.f("Connection created");De(this)}
function De(a){var b=Be(a.sf);a.I=new b("c:"+a.id+":"+a.Ke++,a.L,void 0,a.Cb);a.ve=b.responsesRequiredToBeHealthy||0;var c=Ee(a,a.I),d=Fe(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=Mc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Fe(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(yb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function Ee(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=Fc("t",c);c=Fc("d",c);if("c"==d){if(d=Fc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ib(a.L,f);0==a.Ua&&(a.I.start(),Ge(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&He(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];Ie(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.qe&&(a.qe(c),a.qe=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ib(a.L,c),1===a.Ua?a.close():(Je(a),De(a))):"e"===d?zc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Ke(a),Le(a)):zc("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=Fc("t",c),c=Fc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Me(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.pf--,Me(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Ce.prototype.ua=function(a){Ne(this,{t:"d",d:a})};function Ie(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Yd),a.I=a.D,a.D=null)}
function Me(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,Ie(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}Ce.prototype.wd=function(a){Ke(this);this.re(a)};function Ke(a){a.Bb||(a.ve--,0>=a.ve&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
function He(a,b){a.D=new b("c:"+a.id+":"+a.Ke++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(Ee(a,a.D),Fe(a,a.D));Mc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function Ge(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.ve?(a.f("Primary connection is healthy."),a.Bb=!0):Mc(function(){Le(a)},Math.floor(5E3))}
function Le(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),Ne(a,{t:"c",d:{t:"p",d:{}}}))}function Ne(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}Ce.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,Je(this),this.ia&&(this.ia(),this.ia=null))};function Je(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Oe(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=hc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ad(a){return a.o.length-a.Y}function D(a){var b=a.Y;b<a.o.length&&b++;return new L(a.o,b)}function Bd(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ad(this)!==Ad(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Y,c=a.Y;if(Ad(this)>Ad(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function Pe(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Pe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qe(this)}Pe.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qe(this)};Pe.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
function Qe(a){if(768<a.Ha)throw Error(a.Pe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Pe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Re(a));}function Re(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Se(a){a instanceof Te||Ac("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new Ue(this)}var Ve={TIMESTAMP:{".sv":"timestamp"}};g=Se.prototype;g.app=null;g.jf=function(a){We(this,"ref");x("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
g.gg=function(a){We(this,"database.refFromURL");x("database.refFromURL",1,1,arguments.length);var b=Bc(a);Xe("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Ac("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function We(a,b){null===a.ta&&Ac("Cannot call "+b+" on a deleted database.")}g.Pf=function(){x("database.goOffline",0,0,arguments.length);We(this,"goOffline");this.ta.ab()};
g.Qf=function(){x("database.goOnline",0,0,arguments.length);We(this,"goOnline");this.ta.kc()};Object.defineProperty(Se.prototype,"app",{get:function(){return this.ta.app}});function Ue(a){this.Ya=a}Ue.prototype.delete=function(){We(this.Ya,"delete");var a=Ye.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Ac("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
Se.prototype.ref=Se.prototype.jf;Se.prototype.refFromURL=Se.prototype.gg;Se.prototype.goOnline=Se.prototype.Qf;Se.prototype.goOffline=Se.prototype.Pf;Ue.prototype["delete"]=Ue.prototype.delete;function mc(){this.k=this.B=null}mc.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function oc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new oe);var d=J(b);a.k.contains(d)||a.k.add(d,new mc);a=a.k.get(d);b=D(b);oc(a,b,c)}}
function Ze(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(N,function(b,c){oc(a,new L(b),c)});return Ze(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&Ze(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function nc(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new L(b.toString()+"/"+a);nc(e,f,c)})}mc.prototype.O=function(a){null!==this.k&&pe(this.k,function(b,c){a(b,c)})};var $e=/[\[\].#$\/\u0000-\u001F\u007F]/,af=/[\[\].#$\u0000-\u001F\u007F]/;function bf(a){return p(a)&&0!==a.length&&!$e.test(a)}function cf(a){return null===a||p(a)||ga(a)&&!Cc(a)||ia(a)&&cb(a,".sv")}function df(a,b,c,d){d&&!n(b)||ef(y(a,1,d),b,c)}
function ef(a,b,c){c instanceof L&&(c=new Pe(c,a));if(!n(b))throw Error(a+"contains undefined "+Re(c));if(ha(b))throw Error(a+"contains a function "+Re(c)+" with contents: "+b.toString());if(Cc(b))throw Error(a+"contains "+b.toString()+" "+Re(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Re(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;db(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!bf(b)))throw Error(a+" contains an invalid key ("+b+") "+Re(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);ef(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Re(c)+" in addition to actual children.");}}
function ff(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!bf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Oe);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function gf(a,b,c){var d=y(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];db(b,function(a,b){var k=new L(a);ef(d,b,c.n(k));if(".priority"===Bd(k)&&!cf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});ff(d,e)}
function hf(a,b,c){if(Cc(c))throw Error(y(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!cf(c))throw Error(y(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function jf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function kf(a,b){if(n(b)&&!bf(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function lf(a,b){if(!p(b)||0===b.length||af.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function mf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
function Xe(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!bf(b.jc.ne))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!af.test(c)));if(d)throw Error(y(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b}V.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new hb;this.ta.xd(this.qa,ib(b,a));return b.ra};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);mf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new hb;nf(this.ta,this.qa,null,ib(b,a));return b.ra};
V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);mf("Firebase.onDisconnect().set",this.qa);df("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new hb;nf(this.ta,this.qa,a,ib(c,b));return c.ra};V.prototype.set=V.prototype.set;
V.prototype.Jb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);mf("Firebase.onDisconnect().setWithPriority",this.qa);df("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);hf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new hb;of(this.ta,this.qa,a,b,ib(d,c));return d.ra};V.prototype.setWithPriority=V.prototype.Jb;
V.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);mf("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
c=new hb;pf(this.ta,this.qa,a,ib(c,b));return c.ra};V.prototype.update=V.prototype.update;function qf(a){H(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}qf.prototype.Ee=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].He.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};qf.prototype.gc=function(a,b,c){rf(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({He:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
qf.prototype.Ic=function(a,b,c){rf(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].He===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function rf(a,b){H(Oa(a.Bf,function(a){return a===b}),"Unknown event: "+b)};function sf(){qf.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!qb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ee("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ee("online",!1))},!1)}}la(sf,qf);sf.prototype.Ue=function(a){H("online"===a,"Unknown event type: "+a);return[this.hc]};ca(sf);function tf(){qf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ee("visible",b))},!1)}}la(tf,qf);tf.prototype.Ue=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(tf);var uf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
return c}}();function vf(a,b){this.La=a;this.ba=b?b:wf}g=vf.prototype;g.Oa=function(a,b){return new vf(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new vf(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function xf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
g.Wb=function(a){return new yf(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new yf(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new yf(this.ba,a,this.La,!0,b)};g.We=function(a){return new yf(this.ba,null,this.La,!0,a)};function yf(a,b,c,d,e){this.Hd=e||null;this.je=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.je?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.je?a.right:a.left}
function R(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.je)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function zf(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Af(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:wf;this.right=null!=e?e:wf}g=Af.prototype;
g.X=function(a,b,c,d,e){return new Af(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function Bf(a){return a.left.e()?a:Bf(a.left)}g.Gc=function(){return Bf(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return Cf(e)};function Df(a){if(a.left.e())return wf;a.left.ea()||a.left.left.ea()||(a=Ef(a));a=a.X(null,null,null,Df(a.left),null);return Cf(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=Ef(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=Ff(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=Gf(c),c.left.left.ea()&&(c=Ff(c),c=Gf(c)));if(0===b(a,c.key)){if(c.right.e())return wf;d=Bf(c.right);c=c.X(d.key,d.value,null,null,Df(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return Cf(c)};g.ea=function(){return this.color};
function Cf(a){a.right.ea()&&!a.left.ea()&&(a=Hf(a));a.left.ea()&&a.left.left.ea()&&(a=Ff(a));a.left.ea()&&a.right.ea()&&(a=Gf(a));return a}function Ef(a){a=Gf(a);a.right.left.ea()&&(a=a.X(null,null,null,null,Ff(a.right)),a=Hf(a),a=Gf(a));return a}function Hf(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function Ff(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function Gf(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function If(){}g=If.prototype;g.X=function(){return this};g.Oa=function(a,b){return new Af(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var wf=new If;function P(a,b,c){this.k=a;(this.aa=b)&&Sd(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.aa||G};g.fa=function(a){return this.k.e()?this:new P(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?G:a};g.P=function(a){var b=J(a);return null===b?this:this.Q(b).P(D(a))};g.Da=function(a){return null!==this.k.get(a)};
g.T=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=me(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=ke(this.yb,c,this.k));e=d.e()?G:this.aa;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Ad(a),".priority must be the last token in a path");var d=this.Q(c).F(D(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
var Jf=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(N,function(f,h){b[f]=h.H(a);c++;e&&Jf.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Ud(this.C().H())+":");this.O(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":uc(a)}return this.Db};
g.Ve=function(a,b,c){return(c=Kf(this,c))?(a=xf(c,new K(a,b)))?a.name:null:xf(this.k,a)};function Qd(a,b){var c;c=(c=Kf(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new K(c,a.k.get(c)):null}function Rd(a,b){var c;c=(c=Kf(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new K(c,a.k.get(c)):null}g.O=function(a,b){var c=Kf(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
g.Xb=function(a,b){var c=Kf(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,jc),d=zf(c);null!=d&&0>b.compare(d,a);)R(c),d=zf(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=Kf(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,jc),d=zf(c);null!=d&&0<b.compare(d,a);)R(c),d=zf(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===Zd?-1:0};
g.nb=function(a){if(a===Fd||va(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;H(a!==Fd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(jc),f=R(c);f;)e=e||a.xc(f.R),d.push(f),f=R(c);d=e?le(d,Pd(a)):Wd;e=a.toString();c=za(b.cc);c[e]=a;a=za(b.od);a[e]=d;return new P(this.k,this.aa,new je(a,c))};g.yc=function(a){return a===Fd||va(this.yb.cc,a.toString())};
g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(N);a=a.Wb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function Kf(a,b){return b===Fd?null:a.yb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return G;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new qc(a,M(c));if(a instanceof Array){var d=G,e=a;r(e,function(a,b){if(cb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
d.T(b,c)}});return d.fa(M(c))}var f=[],h=!1,k=a;db(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return G;var l=le(f,gc,function(a){return a.name},ic);if(h){var m=le(f,Pd(N));return new P(l,M(c),new je({".priority":m},{".priority":N}))}return new P(l,M(c),ne)}var Lf=Math.log(2);
function Mf(a){this.count=parseInt(Math.log(a+1)/Lf,10);this.Ne=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function Nf(a){var b=!(a.Cf&1<<a.Ne);a.Ne--;return b}
function le(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],u=c?c(m):m;return new Af(u,m.R,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),z=e(m+1,d),m=a[m],u=c?c(m):m;return new Af(u,m.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new Af(F,k.R,h,null,z);f?f.left=z:m=z;f=z}for(var f=null,m=null,u=a.length,z=0;z<b.count;++z){var F=Nf(b),id=Math.pow(2,b.count-(z+1));F?d(id,!1):(d(id,!1),d(id,!0))}return m}(new Mf(a.length));
return null!==f?new vf(d||b,f):new vf(d||b)}function Ud(a){return"number"===typeof a?"number:"+Jc(a):"string:"+a}function Sd(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&cb(b,".sv"),"Priority must be a string or number.")}else H(a===Zd||a.e(),"priority of unexpected type.");H(a===Zd||a.C().e(),"Priority nodes can't have a priority of their own.")}var G=new P(new vf(ic),null,ne);function Of(){P.call(this,new vf(ic),G,ne)}la(Of,P);g=Of.prototype;
g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return G};g.e=function(){return!1};var Zd=new Of,Xd=new K("[MIN_NAME]",G),ce=new K("[MAX_NAME]",Zd);function W(a,b,c){this.A=a;this.V=b;this.g=c}W.prototype.H=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Qe=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Qe;W.prototype.Lf=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Lf;
W.prototype.n=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));lf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.V.n(b);return new W(this.A.P(b),c,N)};W.prototype.child=W.prototype.n;W.prototype.Da=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);lf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.P(b).e()};W.prototype.hasChild=W.prototype.Da;
W.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new W(d,b.V.n(c),N))})};W.prototype.forEach=W.prototype.forEach;
W.prototype.kd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};Lc(W.prototype,"key",W.prototype.getKey);W.prototype.Eb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};W.prototype.numChildren=W.prototype.Eb;
W.prototype.wb=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};Lc(W.prototype,"ref",W.prototype.wb);function yd(a,b){this.N=a;this.Ld=b}function vd(a,b,c,d){return new yd(new $b(b,c,d),a.Ld)}function zd(a){return a.N.da?a.N.j():null}yd.prototype.w=function(){return this.Ld};function ac(a){return a.Ld.da?a.Ld.j():null};function Pf(a,b){this.V=a;var c=a.m,d=new Gd(c.g),c=S(c)?new Gd(c.g):c.xa?new Md(c):new Hd(c);this.hf=new pd(c);var e=b.w(),f=b.N,h=d.ya(G,e.j(),null),k=c.ya(G,f.j(),null);this.Ka=new yd(new $b(k,f.da,c.Na()),new $b(h,e.da,d.Na()));this.Za=[];this.Jf=new kd(a)}function Qf(a){return a.V}g=Pf.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=ac(this.Ka);return b&&(S(this.V.m)||!a.e()&&!b.Q(J(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
g.kb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Ja(this.Za,function(a){(a=a.Le(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
g.eb=function(a,b,c){a.type===Wc&&null!==a.source.Hb&&(H(ac(this.Ka),"We should always have a full cache before handling merges"),H(zd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;H(c.N.j().yc(b.U.g),"Event snap not indexed");H(c.w().j().yc(b.U.g),"Server snap not indexed");H(dc(a.Sd.w())||!dc(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Rf(this,a.Df,a.Sd.N.j(),null)};
function Sf(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(N,function(a,b){d.push(new I("child_added",b,a))});c.da&&d.push(bc(c.j()));return Rf(a,d,c.j(),b)}function Rf(a,b,c,d){return ld(a.Jf,b,c,d?[d]:a.Za)};function Tf(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Tf.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new Ub("value",this,new W(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ee()){H(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Le=function(a,b){return this.rb?new Vb(this,a,b):null};
g.matches=function(a){return a instanceof Tf?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Uf(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Uf.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Le=function(a,b){return this.rb?new Vb(this,a,b):null};
g.createEvent=function(a,b){H(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new Ub(a.type,this,new W(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ee()){H(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof Uf){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=ra(a.ga);if(b===ra(this.ga)){if(1===b){var b=sa(a.ga),c=sa(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return qa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
function Vf(a){var b=null,c=null;a.ka&&(b=Jd(a));a.na&&(c=Ld(a));if(a.g===Fd){if(a.ka){if("[MIN_NAME]"!=Id(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=Kd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!cf(b)||null!=c&&!cf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof Yd||a.g===de,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Wf(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Xf(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){x("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.gc=function(a,b,c,d){x("Query.on",2,4,arguments.length);jf("Query.on",a,!1);A("Query.on",2,b,!1);var e=Yf("Query.on",c,d);if("value"===a)Zf(this.u,this,new Tf(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Zf(this.u,this,new Uf(f,e.cancel,e.Ma))}return b};
g.Ic=function(a,b,c){x("Query.off",0,3,arguments.length);jf("Query.off",a,!0);A("Query.off",2,b,!0);eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Tf(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Uf(e,null,c||null));e=this.u;d=".info"===J(this.path)?e.pd.kb(this,d):e.K.kb(this,d);Qb(e.ca,this.path,d)};
g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}x("Query.once",1,4,arguments.length);jf("Query.once",a,!1);A("Query.once",2,b,!0);var d=Yf("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new hb;jb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
g.le=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.le(a),this.Nc)};
g.me=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.me(a),this.Nc)};
g.ag=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');lf("Query.orderByChild",a);Xf(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new Yd(b);b=he(this.m,b);Vf(b);return new X(this.u,this.path,b,!0)};g.bg=function(){x("Query.orderByKey",0,0,arguments.length);Xf(this,"Query.orderByKey");var a=he(this.m,Fd);Vf(a);return new X(this.u,this.path,a,!0)};g.cg=function(){x("Query.orderByPriority",0,0,arguments.length);Xf(this,"Query.orderByPriority");var a=he(this.m,N);Vf(a);return new X(this.u,this.path,a,!0)};
g.dg=function(){x("Query.orderByValue",0,0,arguments.length);Xf(this,"Query.orderByValue");var a=he(this.m,de);Vf(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){x("Query.startAt",0,2,arguments.length);df("Query.startAt",a,this.path,!0);kf("Query.startAt",b);var c=this.m.Nd(a,b);Wf(c);Vf(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
g.gd=function(a,b){x("Query.endAt",0,2,arguments.length);df("Query.endAt",a,this.path,!0);kf("Query.endAt",b);var c=this.m.gd(a,b);Wf(c);Vf(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
g.If=function(a,b){x("Query.equalTo",1,2,arguments.length);df("Query.equalTo",a,this.path,!1);kf("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.ja=function(){var a=Gc(ie(this.m));return"{}"===a?"default":a};
g.isEqual=function(a){x("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
function Yf(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,eb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(y(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.le;X.prototype.limitToLast=X.prototype.me;X.prototype.orderByChild=X.prototype.ag;
X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;Lc(X.prototype,"ref",X.prototype.wb);function $f(a,b){this.value=a;this.children=b||ag}var ag=new vf(function(a,b){return a===b?0:a<b?-1:1});function bg(a){var b=Q;r(a,function(a,d){b=b.set(new L(d),a)});return b}g=$f.prototype;g.e=function(){return null===this.value&&this.children.e()};function cg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=cg(a,D(b),c),null!=b?{path:(new L(d)).n(b.path),value:b.value}:null):null}
function dg(a,b){return cg(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new $f(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Oa(c,d);return new $f(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?Q:new $f(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?Q:new $f(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
function Ed(a,b,c){if(b.e())return c;var d=J(b);b=Ed(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new $f(a.value,d)}function eg(a,b){return fg(a,C,b)}function fg(a,b,c){var d={};a.children.ha(function(a,f){d[a]=fg(f,b.n(a),c)});return c(b,a.value,d)}function gg(a,b,c){return hg(a,b,C,c)}function hg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?hg(a,D(b),c.n(e),d):null}
function ig(a,b,c){jg(a,b,C,c)}function jg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?jg(a,D(b),c.n(e),d):Q}function Cd(a,b){kg(a,C,b)}function kg(a,b,c){a.children.ha(function(a,e){kg(e,b.n(a),c)});a.value&&c(b,a.value)}function lg(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var Q=new $f(null);$f.prototype.toString=function(){var a={};Cd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function mg(a,b,c){this.type=ud;this.source=ng;this.path=a;this.Ob=b;this.Id=c}mg.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return H(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new L(a));return new mg(C,a,this.Id)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new mg(D(this.path),this.Ob,this.Id)};
mg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};var Bb=0,Wc=1,ud=2,Db=3;function og(a,b,c,d){this.ce=a;this.Se=b;this.Hb=c;this.Ce=d;H(!d||b,"Tagged queries must be from server.")}var ng=new og(!0,!1,null,!1),pg=new og(!1,!0,null,!1);og.prototype.toString=function(){return this.ce?"user":this.Ce?"server(queryID="+this.Hb+")":"server"};function qg(a){this.W=a}var rg=new qg(new $f(null));function sg(a,b,c){if(b.e())return new qg(new $f(c));var d=dg(a.W,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new qg(a.W.set(e,d))}a=Ed(a.W,b,new $f(c));return new qg(a)}function tg(a,b,c){var d=a;db(c,function(a,c){d=sg(d,b.n(a),c)});return d}qg.prototype.Ed=function(a){if(a.e())return rg;a=Ed(this.W,a,Q);return new qg(a)};function ug(a,b){var c=dg(a.W,b);return null!=c?a.W.get(c.path).P(T(c.path,b)):null}
function vg(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(N,function(a,c){b.push(new K(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function wg(a,b){if(b.e())return a;var c=ug(a,b);return null!=c?new qg(new $f(c)):new qg(a.W.subtree(b))}qg.prototype.e=function(){return this.W.e()};qg.prototype.apply=function(a){return xg(C,this.W,a)};
function xg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=xg(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function yg(){this.za={}}g=yg.prototype;g.e=function(){return ya(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];r(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.rc(d):G,k=!1);h=new Pf(a,new yd(new $b(h,k,!1),new $b(d,e,!1)));this.za[f]=h}h.Nb(b);return Sf(h,b)};
g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=zg(this);if("default"===d){var k=this;r(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],S(a.V.m)||e.push(a.V))})}else{var l=w(this.za,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.za[d],S(l.V.m)||e.push(l.V)))}h&&null==zg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Ag(a){return Ka(ta(a.za),function(a){return!S(a.V.m)})}g.hb=function(a){var b=null;r(this.za,function(c){b=b||c.hb(a)});return b};
function Bg(a,b){if(S(b.m))return zg(a);var c=b.ja();return w(a.za,c)}function zg(a){return xa(a.za,function(a){return S(a.V.m)})||null};function Cg(){this.S=rg;this.la=[];this.Bc=-1}function Dg(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Cg.prototype;
g.Ed=function(a){var b=Pa(this.la,function(b){return b.Zc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Eg(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Fg(this.la,Gg,C),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;r(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
g.Aa=function(a,b,c,d){if(c||d){var e=wg(this.S,a);return!d&&e.e()?b:d||null!=b||null!=ug(e,C)?(e=Fg(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||G,e.apply(b)):null}e=ug(this.S,a);if(null!=e)return e;e=wg(this.S,a);return e.e()?b:null!=b||null!=ug(e,C)?(b=b||G,e.apply(b)):null};
g.rc=function(a,b){var c=G,d=ug(this.S,a);if(d)d.J()||d.O(N,function(a,b){c=c.T(a,b)});else if(b){var e=wg(this.S,a);b.O(N,function(a,b){var d=wg(e,new L(a)).apply(b);c=c.T(a,d)});Ja(vg(e),function(a){c=c.T(a.name,a.R)})}else e=wg(this.S,a),Ja(vg(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=ug(this.S,a))return null;a=wg(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
g.qc=function(a,b,c){a=a.n(b);var d=ug(this.S,a);return null!=d?d:Zb(c,b)?wg(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return ug(this.S,a)};g.Wd=function(a,b,c,d,e,f){var h;a=wg(this.S,a);h=ug(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=Pd(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
function Eg(a,b){return a.Ga?a.path.contains(b):!!wa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Gg(a){return a.visible}
function Fg(a,b,c){for(var d=rg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=T(c,h),d=sg(d,h,f.Ga)):h.contains(c)&&(h=T(h,c),d=sg(d,C,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=tg(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=tg(d,C,f.children);else if(f=w(f.children,J(h)))f=f.P(D(h)),d=sg(d,C,f)}else throw sc("WriteRecord should have .snap or .children");}}return d}function Hg(a,b){this.Lb=a;this.W=b}g=Hg.prototype;
g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Wd=function(a,b,c,d,e){return this.W.Wd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new Hg(this.Lb.n(a),this.W)};function Ig(){this.children={};this.bd=0;this.value=null}function Jg(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Ig}function Kg(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new Jg(e,d,w(d.A.children,e)||new Ig),c=D(c);return d}g=Jg.prototype;g.Ca=function(){return this.A.value};function Lg(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Mg(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Mg(this)};
g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;r(this.A.children,function(c,d){a(new Jg(d,b,c))})};function Ng(a,b,c,d){c&&!d&&b(a);a.O(function(a){Ng(a,b,!0,d)});c&&d&&b(a)}function Og(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
function Mg(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=cb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Mg(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Mg(b))}};function Pg(a,b,c,d,e,f){this.id=Qg++;this.f=yc("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.se=d;this.L=a;this.ob=this.Fa=this.Cb=this.xe=null;this.$c=e;this.be=!1;this.ie=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Ge=f||null;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.ke=null;Rg(this,0);tf.Vb().gc("visible",this.Zf,this);-1===
a.host.indexOf("fblocal")&&sf.Vb().gc("online",this.Yf,this)}var Qg=0,Sg=0;g=Pg.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(Sc(a.m)||!S(a.m),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Tg(this,a)};
function Tg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ie(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&cb(k,"w")){var m=w(k,"w");ea(m)&&0<=Ia(m,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Ug(a,d,e),b.G&&b.G(l,
k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Vg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||Pc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Vg(a){if(a.ma&&a.ob){var b=a.ob,c=Oc(b)?"auth":"gauth",d={cred:b};a.Ge&&(d.authvar=a.Ge);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ie=0:Wg(a,d,c))})}}
g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);H(Sc(a.m)||!S(a.m),"unlisten() called for non-default but complete query");if(Ug(this,c,d)&&this.ma){var e=ie(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.pe=function(a,b,c){this.ma?Xg(this,"o",a,b,c):this.Kc.push({ue:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Xg(this,"om",a,b,c):this.Kc.push({ue:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?Xg(this,"oc",a,null,b):this.Kc.push({ue:a,action:"oc",data:null,G:b})};function Xg(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Yg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Yg(this,"m",a,b,c,d)};function Yg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Zg(a,b):a.f("Buffering put: "+c)}
function Zg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.we=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?$g(this,a.p,a.q):"ac"===b?Wg(this,a.s,a.d):"sd"===b?this.xe?this.xe(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):zc("Unrecognized action received from server: "+
B(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.se({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.we(c)}ah(this);this.Re=!1;this.Jc(!0)};
function Rg(a,b){H(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;bh(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Rg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Rg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};ch(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.ke=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.ke)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Rg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
function bh(a){if(ch(a)){a.f("Making a connection attempt");a.ke=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Sg++,f=a.Cb,h=!1,k=null,l=function(){k?k.close():(h=!0,d())};a.Fa={close:l,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var m=a.be;a.be=!1;a.$c.getToken(m).then(function(l){h?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new Ce(e,a.L,b,c,d,function(b){O(b+
" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||l()})}}g.ab=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];ya(this.qd)&&(this.Sa=1E3,this.Fa||Rg(this,0))};
function $g(a,b,c){c=c?La(c,function(a){return Gc(a)}).join("$"):"default";(a=Ug(a,b,c))&&a.G&&a.G("permission_denied")}function Ug(a,b,c){b=(new L(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===ra(a.$[b])&&delete a.$[b]):d=void 0;return d}
function Wg(a,b,c){E("Auth token revoked: "+b+"/"+c);a.ob=null;a.be=!0;a.Fa.close();"invalid_token"===b&&(a.ie++,3<=a.ie&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in a.oc.options?
b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',O(b)))}
function ah(a){Vg(a);r(a.$,function(b){r(b,function(b){Tg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Zg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Xg(a,b.action,b.ue,b.data,b.G)}function ch(a){var b;b=sf.Vb().hc;return ya(a.qd)&&b};var Y={Mf:function(){re=dd=!0}};Y.forceLongPolling=Y.Mf;Y.Nf=function(){se=!0};Y.forceWebSockets=Y.Nf;Y.Tf=function(){return cd.isAvailable()};Y.isWebSocketsAvailable=Y.Tf;Y.lg=function(a,b){a.u.Ra.xe=b};Y.setSecurityDebugCallback=Y.lg;Y.ze=function(a,b){a.u.ze(b)};Y.stats=Y.ze;Y.Ae=function(a,b){a.u.Ae(b)};Y.statsIncrementCounter=Y.Ae;Y.fd=function(a){return a.u.fd};Y.dataUpdateCount=Y.fd;Y.Sf=function(a,b){a.u.he=b};Y.interceptServerData=Y.Sf;function dh(a){this.wa=Q;this.jb=new Cg;this.Be={};this.ic={};this.Cc=a}function eh(a,b,c,d,e){var f=a.jb,h=e;H(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=sg(f.S,b,c));f.Bc=d;return e?fh(a,new Ab(ng,b,c)):[]}function gh(a,b,c,d){var e=a.jb;H(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=tg(e.S,b,c);e.Bc=d;c=bg(c);return fh(a,new Vc(ng,b,c))}
function hh(a,b,c){c=c||!1;var d=Dg(a.jb,b);if(a.jb.Ed(b)){var e=Q;null!=d.Ga?e=e.set(C,!0):db(d.children,function(a,b){e=e.set(new L(a),b)});return fh(a,new mg(d.path,e,c))}return[]}function ih(a,b,c){c=bg(c);return fh(a,new Vc(pg,b,c))}function jh(a,b,c,d){d=kh(a,d);if(null!=d){var e=lh(d);d=e.path;e=e.Hb;b=T(d,b);c=new Ab(new og(!1,!0,e,!0),b,c);return mh(a,d,c)}return[]}
function nh(a,b,c,d){if(d=kh(a,d)){var e=lh(d);d=e.path;e=e.Hb;b=T(d,b);c=bg(c);c=new Vc(new og(!1,!0,e,!0),b,c);return mh(a,d,c)}return[]}
dh.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;ig(this.wa,c,function(a,b){var f=T(a,c);d=d||b.hb(f);e=e||null!=zg(b)});var f=this.wa.get(c);f?(e=e||null!=zg(f),d=d||f.hb(C)):(f=new yg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=G,lg(this.wa.subtree(c),function(a,b){var c=b.hb(C);c&&(d=d.T(a,c))}));var k=null!=Bg(f,a);if(!k&&!S(a.m)){var l=oh(a);H(!(l in this.ic),"View does not exist, but we have a tag");var m=ph++;this.ic[l]=m;this.Be["_"+m]=l}h=f.Nb(a,b,new Hg(c,this.jb),d,h);k||
e||(f=Bg(f,a),h=h.concat(qh(this,a,f)));return h};
dh.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=Bg(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Pa(e,function(a){return S(a.m)});var h=gg(this.wa,d,function(a,b){return null!=zg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=rh(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=sh(this,l);this.Cc.ye(th(m),uh(this,m),l.ld,l.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(th(a),null);else{var u=this;Ja(e,function(a){a.ja();
var b=u.ic[oh(a)];u.Cc.Od(th(a),b)})}vh(this,e)}return f};dh.prototype.Aa=function(a,b){var c=this.jb,d=gg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function rh(a){return eg(a,function(a,c,d){if(c&&null!=zg(c))return[zg(c)];var e=[];c&&(e=Ag(c));r(d,function(a){e=e.concat(a)});return e})}function vh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.m)){var d=oh(d),e=a.ic[d];delete a.ic[d];delete a.Be["_"+e]}}}
function th(a){return S(a.m)&&!Sc(a.m)?a.wb():a}function qh(a,b,c){var d=b.path,e=uh(a,b);c=sh(a,c);b=a.Cc.ye(th(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)H(null==zg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=eg(d,function(a,b,c){if(!a.e()&&b&&null!=zg(b))return[Qf(zg(b))];var d=[];b&&(d=d.concat(La(Ag(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(th(c),uh(a,c));return b}
function sh(a,b){var c=b.V,d=uh(a,c);return{ld:function(){return(b.w()||G).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=kh(a,d)){var h=lh(b);b=h.path;h=h.Hb;f=T(b,f);f=new Cb(new og(!1,!0,h,!0),f);b=mh(a,b,f)}else b=[]}else b=fh(a,new Cb(pg,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function oh(a){return a.path.toString()+"$"+a.ja()}function lh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new L(a.substr(0,b))}}function kh(a,b){var c=a.Be,d="_"+b;return d in c?c[d]:void 0}function uh(a,b){var c=oh(b);return w(a.ic,c)}var ph=1;
function mh(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new Hg(b,a.jb),null)}function fh(a,b){return wh(a,b,a.wa,null,new Hg(C,a.jb))}function wh(a,b,c,d,e){if(b.path.e())return xh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.hb(C));var h=[],k=J(b.path),l=b.Mc(k);if((c=c.children.get(k))&&l)var m=d?d.Q(k):null,k=e.n(k),h=h.concat(wh(a,l,c,m,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
function xh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.hb(C));var h=[];c.children.ha(function(c,f){var m=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(xh(a,z,f,m,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Te(a,b,c){this.app=c;var d=new Eb(c);this.L=a;this.Va=$c(a);this.Vc=null;this.ca=new Nb;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Qc(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Pg(this.L,q(this.Gb,this),q(this.Jc,this),q(this.se,this),d,b)}var f=this;Fb(d,function(a){f.va.kf(a)});this.og=ad(a,q(function(){return new Xc(this.Va,this.va)},this));this.mc=new Jg;this.ge=new Gb;this.pd=new dh({ye:function(a,b,c,d){b=[];c=f.ge.j(a.path);c.e()||(b=fh(f.pd,new Ab(pg,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});yh(this,"connected",!1);this.ia=new mc;this.Ya=new Se(this);this.fd=
0;this.he=null;this.K=new dh({ye:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);Sb(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Te.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.ne};function zh(a){a=a.ge.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Ah(a){a=a={timestamp:zh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.fd++;var e=new L(a);b=this.he?this.he(a,b):b;a=[];d?c?(b=pa(b,function(a){return M(a)}),a=nh(this.K,e,b,d)):(b=M(b),a=jh(this.K,e,b,d)):c?(d=pa(b,function(a){return M(a)}),a=ih(this.K,e,d)):(d=M(b),a=fh(this.K,new Ab(pg,e,d)));d=e;0<a.length&&(d=Bh(this,e));Sb(this.ca,d,a)};g.Jc=function(a){yh(this,"connected",a);!1===a&&Ch(this)};g.se=function(a){var b=this;Ic(a,function(a,d){yh(b,d,a)})};
function yh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ge;d.Jd=d.Jd.F(b,c);c=fh(a.pd,new Ab(pg,b,c));Sb(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=Ah(this);b=M(b,c);var e=pc(b,e),f=this.vd++,e=eh(this.K,a,e,f,!0);Ob(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=hh(h.K,f,!e);Sb(h.ca,a,e);Dh(d,b,c)});e=Eh(this,a);Bh(this,e);Sb(this.ca,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Ah(this),f={};r(b,function(a,b){d=!1;var c=M(a);f[b]=pc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),Dh(c,"ok");else{var h=this.vd++,k=gh(this.K,a,f,h);Ob(this.ca,k);var l=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=hh(l.K,h,!e),f=a;0<e.length&&(f=Bh(l,a));Sb(l.ca,f,e);Dh(c,b,d)});r(b,function(b,c){var d=Eh(l,a.n(c));Bh(l,d)});Sb(this.ca,
a,[])}};function Ch(a){a.f("onDisconnectEvents");var b=Ah(a),c=[];nc(lc(a.ia,b),C,function(b,e){c=c.concat(fh(a.K,new Ab(pg,b,e)));var f=Eh(a,b);Bh(a,f)});a.ia=new mc;Sb(a.ca,C,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Ze(c.ia,a);Dh(b,d,e)})};function nf(a,b,c,d){var e=M(c);a.va.pe(b.toString(),e.H(!0),function(c,h){"ok"===c&&oc(a.ia,b,e);Dh(d,c,h)})}
function of(a,b,c,d,e){var f=M(c,d);a.va.pe(b.toString(),f.H(!0),function(c,d){"ok"===c&&oc(a.ia,b,f);Dh(e,c,d)})}function pf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),Dh(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=M(c[l]);oc(a.ia,b.n(l),m)}Dh(d,e,f)})}function Zf(a,b,c){c=".info"===J(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);Qb(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.ze=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Mb(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ma(ua(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ae=function(a){Lb(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");E(b,arguments)};
function Dh(a,b,c){a&&ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Fh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:rc(),Fe:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||G;c.cd=d;d=c.update(d.H());if(n(d)){ef("transaction failed: Data returned ",d,c.path);c.status=1;e=Kg(a.mc,b);var k=e.Ca()||[];k.push(c);Lg(e,k);"object"===typeof d&&null!==d&&cb(d,".priority")?(k=w(d,".priority"),H(cf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Aa(b)||G).C().H();e=Ah(a);d=M(d,k);e=pc(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=eh(a.K,b,e,c.Ba,c.Fe);Sb(a.ca,b,c);Gh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new W(c.cd,new U(a,c.path),N),c.G(null,!1,a))}function Gh(a,b){var c=b||a.mc;b||Hh(a,c);if(null!==c.Ca()){var d=Ih(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&Jh(a,c.path(),d)}else c.kd()&&c.O(function(b){Gh(a,b)})}
function Jh(a,b,c){for(var d=La(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||G,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];H(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=T(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(hh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new W(h,k,N)))}c[f].Rd()}Hh(a,Kg(a.mc,b));Gh(a);Sb(a.ca,b,e);for(f=0;f<d.length;f++)ub(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;Bh(a,b)}},e)}function Bh(a,b){var c=Kh(a,b),d=c.path(),c=Ih(a,c);Lh(a,c,d);return d}
function Lh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],l=T(c,k.path),m=!1,u;H(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,u=k.Td,e=e.concat(hh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)m=!0,u="maxretry",e=e.concat(hh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||G;k.cd=z;var F=b[h].update(z.H());n(F)?(ef("transaction failed: Data returned ",F,
k.path),l=M(F),"object"===typeof F&&null!=F&&cb(F,".priority")||(l=l.fa(z.C())),z=k.Ba,F=Ah(a),F=pc(l,F),k.dd=l,k.ed=F,k.Ba=a.vd++,Qa(f,z),e=e.concat(eh(a.K,k.path,F,k.Ba,k.Fe)),e=e.concat(hh(a.K,z,!0))):(m=!0,u="nodata",e=e.concat(hh(a.K,k.Ba,!0)))}Sb(a.ca,c,e);e=[];m&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new W(b[h].cd,k,N)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Hh(a,a.mc);for(h=0;h<d.length;h++)ub(d[h]);Gh(a)}}
function Kh(a,b){for(var c,d=a.mc;null!==(c=J(b))&&null===d.Ca();)d=Kg(d,c),b=D(b);return d}function Ih(a,b){var c=[];Mh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Mh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Mh(a,b,c)})}function Hh(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Lg(b,0<c.length?c:null)}b.O(function(b){Hh(a,b)})}
function Eh(a,b){var c=Kh(a,b).path(),d=Kg(a.mc,b);Og(d,function(b){Nh(a,b)});Nh(a,d);Ng(d,function(b){Nh(a,b)});return c}
function Nh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(H(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(H(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(hh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Lg(b,null):c.length=f+1;Sb(a.ca,b.path(),e);for(h=0;h<d.length;h++)ub(d[h])}};function Ye(){this.lb={};this.wf=!1}Ye.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ye.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ye.prototype.ae=function(a){this.wf=a};ca(Ye);Ye.prototype.interrupt=Ye.prototype.ab;Ye.prototype.resume=Ye.prototype.kc;var Z={};Z.nc=Pg;Z.DataConnection=Z.nc;Pg.prototype.ng=function(a,b){this.ua("q",{p:a},b)};Z.nc.prototype.simpleListen=Z.nc.prototype.ng;Pg.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};Z.nc.prototype.echo=Z.nc.prototype.Hf;Pg.prototype.interrupt=Pg.prototype.ab;Z.zf=Ce;Z.RealTimeConnection=Z.zf;Ce.prototype.sendRequest=Ce.prototype.ua;Ce.prototype.close=Ce.prototype.close;
Z.Rf=function(a){var b=Pg.prototype.put;Pg.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Pg.prototype.put=b}};Z.hijackHash=Z.Rf;Z.yf=Hb;Z.ConnectionTarget=Z.yf;Z.ja=function(a){return a.ja()};Z.queryIdentifier=Z.ja;Z.Uf=function(a){return a.u.Ra.$};Z.listens=Z.Uf;Z.ae=function(a){Ye.Vb().ae(a)};Z.forceRestClient=Z.ae;Z.Context=Ye;function U(a,b){if(!(a instanceof Te))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,fe,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Bd(this.path)};
g.n=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));lf("Firebase.child",b)}else lf("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Of=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){x("Firebase.set",1,2,arguments.length);mf("Firebase.set",this.path);df("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new hb;this.u.Jb(this.path,a,null,ib(c,b));return c.ra};
g.update=function(a,b){x("Firebase.update",1,2,arguments.length);mf("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new hb;this.u.update(this.path,a,ib(c,b));return c.ra};
g.Jb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);mf("Firebase.setWithPriority",this.path);df("Firebase.setWithPriority",a,this.path,!1);hf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new hb;this.u.Jb(this.path,a,b,ib(d,c));return d.ra};
g.remove=function(a){x("Firebase.remove",0,1,arguments.length);mf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);mf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new hb;ha(b)&&jb(d.ra);Fh(this.u,this.path,a,function(a,c,h){a?
d.reject(a):d.resolve(new pb(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);mf("Firebase.setPriority",this.path);hf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new hb;this.u.Jb(this.path.n(".priority"),a,null,ib(c,b));return c.ra};
g.push=function(a,b){x("Firebase.push",0,2,arguments.length);mf("Firebase.push",this.path);df("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=zh(this.u),d=uf(c),c=this.n(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.n(d)});c.then=q(f.then,f);c["catch"]=q(f.then,f,void 0);ha(b)&&jb(f)}return c};g.ib=function(){mf("Firebase.onDisconnect",this.path);return new V(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;Lc(U.prototype,"database",U.prototype.Gf);Lc(U.prototype,"key",U.prototype.getKey);Lc(U.prototype,"parent",U.prototype.getParent);Lc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=Ye.Vb(),c=a.options.databaseURL;n(c)||Ac("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Bc(c),c=d.jc;Xe("Invalid Firebase Database URL",d);d.path.e()||Ac("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Ac("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Te(c,b.wf,a);b.lb[a.name]=
d;return d.Ya},{Reference:U,Query:X,Database:Se,enableLogging:xc,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:Ve})}catch(Oh){Ac("Failed to register the Firebase Database Service ("+Oh+")")};})();

(function(){var e=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]},g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a,b){function c(){}c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.ca=function(a,c,p){for(var d=Array(arguments.length-2),f=2;f<arguments.length;f++)d[f-2]=arguments[f];
return b.prototype[c].apply(a,d)}};var l={c:"only-available-in-window",o:"only-available-in-sw",O:"should-be-overriden",g:"bad-sender-id",C:"incorrect-gcm-sender-id",M:"permission-default",L:"permission-blocked",U:"unsupported-browser",G:"notifications-blocked",w:"failed-serviceworker-registration",h:"sw-registration-expected",B:"get-subscription-failed",F:"invalid-saved-token",l:"sw-reg-redundant",P:"token-subscribe-failed",S:"token-subscribe-no-token",R:"token-subscribe-no-push-set",V:"use-sw-before-get-token",D:"invalid-delete-token",
v:"delete-token-not-found",s:"bg-handler-function-expected",K:"no-window-client-to-msg",T:"unable-to-resubscribe",I:"no-fcm-token-for-resubscribe",A:"failed-to-delete-token",J:"no-sw-in-reg"},n={},q=(n[l.c]="This method is available in a Window context.",n[l.o]="This method is available in a service worker context.",n[l.O]="This method should be overriden by extended classes.",n[l.g]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",n[l.M]=
"The required permissions were not granted and dismissed instead.",n[l.L]="The required permissions were not granted and blocked instead.",n[l.U]="This browser doesn't support the API's required to use the firebase SDK.",n[l.G]="Notifications have been blocked.",n[l.w]="We are unable to register the default service worker. {$browserErrorMessage}",n[l.h]="A service worker registration was the expected input.",n[l.B]="There was an error when trying to get any existing Push Subscriptions.",n[l.F]="Unable to access details of the saved token.",
n[l.l]="The service worker being used for push was made redundant.",n[l.P]="A problem occured while subscribing the user to FCM: {$message}",n[l.S]="FCM returned no token when subscribing the user to push.",n[l.R]="FCM returned an invalid response when getting an FCM token.",n[l.V]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",n[l.D]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",n[l.v]="The deletion attempt for token could not be performed as the token was not found.",
n[l.s]="The input to setBackgroundMessageHandler() must be a function.",n[l.K]="An attempt was made to message a non-existant window client.",n[l.T]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",n[l.I]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",n[l.A]="Unable to delete the currently saved token.",n[l.J]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
n[l.C]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",n);var r={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var t={m:"firebase-messaging-msg-type",u:"firebase-messaging-msg-data"},u={N:"push-msg-received",H:"notification-clicked"},w=function(a,b){var c={};return c[t.m]=a,c[t.u]=b,c};var x=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};k(x,Error);var y=function(a,b){for(var c=a.split("%s"),d="",f=Array.prototype.slice.call(arguments,1);f.length&&1<c.length;)d+=c.shift()+f.shift();return d+c.join("%s")};var z=function(a,b){b.unshift(a);x.call(this,y.apply(null,b));b.shift()};k(z,x);var A=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),f=Array.prototype.slice.call(arguments,2);throw new z(""+d,f||[]);}};var B=null;var D=function(a){a=new Uint8Array(a);var b=h(a);A("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!B)for(B={},b=0;65>b;b++)B[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=B,c=[],d=0;d<a.length;d+=3){var f=a[d],p=d+1<a.length,m=p?a[d+1]:0,C=d+2<a.length,v=C?a[d+2]:0,P=f>>2,f=(f&3)<<4|m>>4,m=(m&15)<<2|v>>6,v=v&63;C||(v=64,p||(m=64));c.push(b[P],b[f],b[m],b[v])}return c.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var E=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",q),F=function(){this.a=null},G=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=g.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},H=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},I=function(a,b){return G(a).then(function(a){return new Promise(function(c,f){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){f(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},J=function(a,b){return G(a).then(function(a){return new Promise(function(c,f){var d=[],m=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
m.onerror=function(a){f(a.target.error)};m.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},K=function(a,b,c){var d=D(b.getKey("p256dh")),f=D(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+f);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",
headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw E.create(l.P,{message:a.error.message});if(!a.token)throw E.create(l.S);if(!a.pushSet)throw E.create(l.R);return{token:a.token,pushSet:a.pushSet}})},L=function(a,b,c,d,f,p){var m={swScope:c.scope,endpoint:d.endpoint,auth:D(d.getKey("auth")),p256dh:D(d.getKey("p256dh")),fcmToken:f,fcmPushSet:p,fcmSenderId:b};return G(a).then(function(a){return new Promise(function(b,c){var d=a.transaction(["fcm_token_object_Store"],
"readwrite").objectStore("fcm_token_object_Store").put(m);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};
F.prototype.X=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(E.create(l.g)):J(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw E.create(l.B);}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&D(b.getKey("auth"))===a.auth&&D(b.getKey("p256dh"))===a.p256dh;
if(c)return a.fcmToken})}):Promise.reject(E.create(l.h))};F.prototype.getSavedToken=F.prototype.X;F.prototype.W=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(E.create(l.g)):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(r)}).then(function(d){return K(a,d).then(function(f){return L(c,a,b,d,f.token,f.pushSet).then(function(){return f.token})})}):Promise.reject(E.create(l.h))};
F.prototype.createToken=F.prototype.W;F.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(E.create(l.D)):I(this,a).then(function(a){if(!a)throw E.create(l.v);return G(b).then(function(b){return new Promise(function(c,d){var f=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);f.onerror=function(a){d(a.target.error)};f.onsuccess=function(b){0===b.target.result?d(E.create(l.A)):c(a)}})})})};var M=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",q);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create(l.g);this.Z=a.options.messagingSenderId;this.f=new F;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
M.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create(l.G)):Promise.resolve(null):this.i().then(function(b){return a.f.X(a.Z,b).then(function(c){return c?c:a.f.W(a.Z,b)})})};M.prototype.getToken=M.prototype.getToken;M.prototype.deleteToken=function(a){var b=this;return this.f.deleteToken(a).then(function(){return b.i()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
M.prototype.deleteToken=M.prototype.deleteToken;M.prototype.i=function(){throw this.a.create(l.O);};M.prototype.requestPermission=function(){throw this.a.create(l.c);};M.prototype.useServiceWorker=function(){throw this.a.create(l.c);};M.prototype.useServiceWorker=M.prototype.useServiceWorker;M.prototype.onMessage=function(){throw this.a.create(l.c);};M.prototype.onMessage=M.prototype.onMessage;M.prototype.onTokenRefresh=function(){throw this.a.create(l.c);};M.prototype.onTokenRefresh=M.prototype.onTokenRefresh;
M.prototype.setBackgroundMessageHandler=function(){throw this.a.create(l.o);};M.prototype.setBackgroundMessageHandler=M.prototype.setBackgroundMessageHandler;M.prototype.delete=function(){H(this.f)};var N=self,S=function(a){M.call(this,a);var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",q);N.addEventListener("push",function(a){return O(b,a)},!1);N.addEventListener("pushsubscriptionchange",function(a){return Q(b,a)},!1);N.addEventListener("notificationclick",function(a){return R(b,a)},!1);this.b=null};e(S,M);
var O=function(a,b){var c;try{c=b.data.json()}catch(f){return}var d=T().then(function(b){if(b){if(c.notification||a.b)return U(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),f={};d.data=(f.FCM_MSG=b,f);b=d}else b=void 0;if(b)return N.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},Q=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create(l.I);var c=a.f;return I(c,b).then(function(b){if(!b)throw a.a.create(l.F);
return N.registration.pushManager.subscribe(r).then(function(a){return K(b.ea,a,b.da)}).catch(function(d){return c.deleteToken(b.fa).then(function(){throw a.a.create(l.T,{message:d});})})})});b.waitUntil(c)},R=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var f=V(d).then(function(a){return a?a:N.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
W(a,b,w(u.H,c))});b.waitUntil(f)}}};S.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create(l.s);this.b=a};S.prototype.setBackgroundMessageHandler=S.prototype.setBackgroundMessageHandler;
var V=function(a){var b=(new URL(a)).href;return N.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,f=0;f<a.length;f++)if((new URL(a[f].url)).href===b){c=a[f];break}if(c)return c.focus(),c})},W=function(a,b,c){return new Promise(function(d,f){if(!b)return f(a.a.create(l.K));b.postMessage(c);d()})},T=function(){return N.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===a.visibilityState})})},
U=function(a,b){return N.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=w(u.N,b);return Promise.all(c.map(function(b){return W(a,b,d)}))})};S.prototype.i=function(){return Promise.resolve(N.registration)};var Y=function(a){M.call(this,a);var b=this;this.Y=null;this.$=firebase.INTERNAL.createSubscribe(function(a){b.Y=a});this.ba=null;this.aa=firebase.INTERNAL.createSubscribe(function(a){b.ba=a});X(this)};e(Y,M);
Y.prototype.getToken=function(){var a=this;return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?aa(this).then(function(){return M.prototype.getToken.call(a)}):Promise.reject(this.a.create(l.U))};Y.prototype.getToken=Y.prototype.getToken;
var aa=function(a){if(a.j)return a.j;var b=document.querySelector('link[rel="manifest"]');b?a.j=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&&b.gcm_sender_id&&"103953800507"!==b.gcm_sender_id)throw a.a.create(l.C);}):a.j=Promise.resolve();return a.j};
Y.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create(l.L)):c(a.a.create(l.M))},f=Notification.requestPermission(function(a){f||d(a)});f&&f.then(d)})};Y.prototype.requestPermission=Y.prototype.requestPermission;
Y.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create(l.h);if("undefined"!==typeof this.b)throw this.a.create(l.V);this.b=a};Y.prototype.useServiceWorker=Y.prototype.useServiceWorker;Y.prototype.onMessage=function(a,b,c){return this.$(a,b,c)};Y.prototype.onMessage=Y.prototype.onMessage;Y.prototype.onTokenRefresh=function(a,b,c){return this.aa(a,b,c)};Y.prototype.onTokenRefresh=Y.prototype.onTokenRefresh;
var Z=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,f){if(c)if("activated"===c.state)d(b);else if("redundant"===c.state)f(a.a.create(l.l));else{var p=function(){if("activated"===c.state)d(b);else if("redundant"===c.state)f(a.a.create(l.l));else return;c.removeEventListener("statechange",p)};c.addEventListener("statechange",p)}else f(a.a.create(l.J))})};
Y.prototype.i=function(){var a=this;if(this.b)return Z(this,this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(b){throw a.a.create(l.w,{browserErrorMessage:b.message});}).then(function(b){return Z(a,b).then(function(){a.b=b;b.update();return b})})};
var X=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data[t.m])switch(b=b.data,b[t.m]){case u.N:case u.H:a.Y.next(b[t.u])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new S(a):new Y(a)},{Messaging:Y});}).call(this);
(function(){var k,l=this,n=function(a){return void 0!==a},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){return"string"==typeof a},ba=function(a,b){function c(){}c.prototype=b.prototype;a.sa=b.prototype;a.prototype=new c;a.ra=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ca=function(a,b,c){function d(){z||(z=!0,b.apply(null,arguments))}function e(b){m=setTimeout(function(){m=null;a(f,2===C)},b)}function f(a,b){if(!z)if(a)d.apply(null,arguments);else if(2===C||B)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===C?(C=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){Na||(Na=!0,z||(null!==m?(a||(C=2),clearTimeout(m),e(0)):a||(C=1)))}var h=1,m=null,B=!1,C=0,z=!1,Na=!1;e(0);setTimeout(function(){B=!0;g(!0)},c);return g};var q="https://firebasestorage.googleapis.com";var r=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};ba(r,Error);
var da=function(){return new r("unknown","An unknown error occurred, please check the error payload for server response.")},ea=function(){return new r("canceled","User canceled the upload/download.")},fa=function(){return new r("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},ga=function(a,b,c){return new r("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},ha=function(){return new r("app-deleted","The Firebase app was deleted.")},t=function(a,b){return new r("invalid-format",
"String does not match format '"+a+"': "+b)},ia=function(a){throw new r("internal-error","Internal error: "+a);};var ja=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ka=function(a){var b={};ja(a,function(a,d){b[a]=d});return b};var la=function(a){if("undefined"!==typeof firebase)return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");};var u=function(a,b,c,d){this.h=a;this.b={};this.method=b;this.headers={};this.body=null;this.j=c;this.l=this.a=null;this.c=[200];this.g=[];this.timeout=d;this.f=!0};var ma={STATE_CHANGED:"state_changed"},v={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},na=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var w=function(a){return n(a)&&null!==a},oa=function(a){return"string"===typeof a||a instanceof String},pa=function(){return"undefined"!==typeof Blob};var qa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};ba(qa,Error);var sa=function(a,b){var c=ra;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var ta=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ua=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},va=function(a,b){return a<b?-1:a>b?1:0};var x=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);firebase.Promise.resolve(!0).then(function(){a.apply(null,b)})}};var y=function(a,b){this.bucket=a;this.path=b},wa=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},xa=function(a){for(var b=null,c=[{K:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,G:{bucket:1,path:3},J:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{K:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,G:{bucket:1,path:3},J:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
c[d],f=e.K.exec(a);if(f){b=f[e.G.bucket];(f=f[e.G.path])||(f="");b=new y(b,f);e.J(b);break}}if(null==b)throw new r("invalid-url","Invalid URL '"+a+"'.");return b};var ya=function(a,b,c){"function"==aa(a)||w(b)||w(c)?(this.c=a,this.a=b||null,this.b=c||null):(this.c=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},za=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},Aa=function(a,b){this.b=a;this.a=b||null},Ea=function(a,b){switch(a){case "raw":return new Aa(Ba(b));case "base64":case "base64url":return new Aa(Ca(a,b));case "data_url":return a=new Da(b),a=a.a?Ca("base64",a.c):Ba(a.c),new Aa(a,(new Da(b)).b)}throw da();
},Ba=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},Ca=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),
d=-1!==b.indexOf("_");if(c||d)throw t(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw t(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(f){throw t(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);return a},Da=function(a){var b=a.match(/^data:([^,]+)?,/);if(null===
b)throw t("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var Fa=function(a){var b=encodeURIComponent,c="?";ja(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var Ga=function(){var a=this;this.a=new XMLHttpRequest;this.c=0;this.f=la(function(b){a.a.addEventListener("abort",function(){a.c=2;b(a)});a.a.addEventListener("error",function(){a.c=1;b(a)});a.a.addEventListener("load",function(){b(a)})});this.b=!1},Ha=function(a,b,c,d,e){if(a.b)throw ia("cannot .send() more than once");a.b=!0;a.a.open(c,b,!0);w(e)&&ja(e,function(b,c){a.a.setRequestHeader(b,c.toString())});w(d)?a.a.send(d):a.a.send();return a.f},Ia=function(a){if(!a.b)throw ia("cannot .getErrorCode() before sending");
return a.c},D=function(a){if(!a.b)throw ia("cannot .getStatus() before sending");try{return a.a.status}catch(b){return-1}},Ja=function(a){if(!a.b)throw ia("cannot .getResponseText() before sending");return a.a.responseText};Ga.prototype.abort=function(){this.a.abort()};var E=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=E.prototype;k.V=function(){return this.b};k.qa=function(){return this.h};k.na=function(){return this.f};k.ia=function(){return this.a};k.W=function(){if(w(this.a)){var a=this.a.downloadURLs;return w(a)&&w(a[0])?a[0]:null}return null};k.pa=function(){return this.g};k.la=function(){return this.c};var Ka=function(a,b){b.unshift(a);qa.call(this,ta.apply(null,b));b.shift()};ba(Ka,qa);var F=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(b)var e=e+(": "+b),f=d;throw new Ka(""+e,f||[]);}};var G;a:{var La=l.navigator;if(La){var Ma=La.userAgent;if(Ma){G=Ma;break a}}G=""};var Oa=function(){};var H=Array.prototype.indexOf?function(a,b,c){F(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Pa=Array.prototype.forEach?function(a,b,c){F(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Qa=Array.prototype.filter?function(a,
b,c){F(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},Ra=Array.prototype.map?function(a,b,c){F(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Sa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];
return c}return[]};var Ta=function(a,b){b=Qa(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Ua=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var Wa=function(a,b,c,d,e,f,g,h,m,B,C){this.C=a;this.A=b;this.v=c;this.o=d;this.B=e.slice();this.m=f.slice();this.j=this.l=this.c=this.b=null;this.f=this.g=!1;this.s=g;this.h=h;this.D=C;this.w=m;var z=this;this.u=la(function(a,b){z.l=a;z.j=b;Va(z)})},Xa=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Va=function(a){function b(a,b){b?a(!1,new Xa(!1,null,!0)):(b=new Ga,b.a.withCredentials=d.D,d.b=b,Ha(b,d.C,d.A,d.o,d.v).then(function(b){d.b=null;var c=0===Ia(b),e=D(b);if(!(c=!c)){var f=d,c=500<=e&&600>
e,g;g=0<=H([408,429],e);f=0<=H(f.m,e);c=c||g||f}c?(b=2===Ia(b),a(!1,new Xa(!1,null,b))):(e=0<=H(d.B,e),a(!0,new Xa(e,b)))}))}function c(a,b){var c=d.l;a=d.j;var e=b.c;if(b.b)try{var f=d.s(e,Ja(e));n(f)?c(f):c()}catch(B){a(B)}else null!==e?(b=da(),f=Ja(e),b.serverResponse=f,d.h?a(d.h(e,b)):a(b)):(b=b.a?d.f?ha():ea():new r("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b))}var d=a;a.g?c(0,new Xa(!1,null,!0)):a.c=ca(b,c,a.w)};Wa.prototype.a=function(){return this.u};
Wa.prototype.cancel=function(a){this.g=!0;this.f=a||!1;null!==this.c&&(0,this.c)(!1);null!==this.b&&this.b.abort()};var Ya=function(a,b,c){var d=Fa(a.b),d=a.h+d,e=a.headers?ka(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Wa(d,a.method,e,a.body,a.c,a.g,a.j,a.a,a.timeout,0,c)};var Za=function(a){this.b=firebase.Promise.reject(a)};Za.prototype.a=function(){return this.b};Za.prototype.cancel=function(){};var $a=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},ab=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},bb=function(a){ja(a.a,function(a,c){c&&c.cancel(!0)});a.a={}};var cb=-1!=G.indexOf("Opera"),db=-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"),eb=-1!=G.indexOf("Edge"),fb=-1!=G.indexOf("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"))&&!(-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"))&&-1==G.indexOf("Edge"),gb=-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"),hb;
a:{var ib="",jb=function(){var a=G;if(fb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(db)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gb)return/WebKit\/(\S+)/.exec(a);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();jb&&(ib=jb?jb[1]:"");if(db){var kb,lb=l.document;kb=lb?lb.documentMode:void 0;if(null!=kb&&kb>parseFloat(ib)){hb=String(kb);break a}}hb=ib}
var mb=hb,ra={},nb=function(a){return sa(a,function(){for(var b=0,c=ua(String(mb)).split("."),d=ua(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||va(0==g[2].length,0==h[2].length)||va(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})};var ob=function(a,b,c,d,e){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,w(a))){a=a.storageBucket||null;if(null==a)a=null;else{var f=null;try{f=xa(a)}catch(g){}if(null!==f){if(""!==f.path)throw new r("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=f.bucket}}this.g=a}this.o=b;this.m=c;this.j=e;this.l=d;this.c=12E4;this.b=6E4;this.h=new $a;this.f=!1},pb=function(a){return null!==a.a&&w(a.a.INTERNAL)&&w(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return w(a)?
a.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};ob.prototype.bucket=function(){if(this.f)throw ha();return this.g};var I=function(a,b,c){if(a.f)return new Za(ha());b=a.m(b,c,null===a.a,a.j);ab(a.h,b);return b};var qb=function(a){var b=l.BlobBuilder||l.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=Sa(arguments);c=l.BlobBuilder||l.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(l.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},rb=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
c):a.slice?fb&&!nb("13.0")||gb&&!nb("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var J=function(a,b){pa()&&a instanceof Blob?(this.i=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.i=new Uint8Array(a):(this.i=new Uint8Array(a.byteLength),this.i.set(new Uint8Array(a))),b=this.i.length):(b?this.i=a:(this.i=new Uint8Array(a.length),this.i.set(a)),b=a.length),a="");this.a=b;this.b=a};J.prototype.type=function(){return this.b};
J.prototype.slice=function(a,b){if(pa()&&this.i instanceof Blob)return a=rb(this.i,a,b),null===a?null:new J(a);a=new Uint8Array(this.i.buffer,a,b-a);return new J(a,!0)};
var sb=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(pa())return b=Ra(b,function(a){return a instanceof J?a.i:a}),new J(qb.apply(null,b));var b=Ra(b,function(a){return oa(a)?Ea("raw",a).b.buffer:a.i.buffer}),c=0;Pa(b,function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;Pa(b,function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new J(d,!0)};var tb=function(a,b){return b},K=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||tb},ub=null,vb=function(){if(ub)return ub;var a=[];a.push(new K("bucket"));a.push(new K("generation"));a.push(new K("metageneration"));a.push(new K("name","fullPath",!0));var b=new K("name");b.a=function(a,b){return!oa(b)||2>b.length?b:Ua(b)};a.push(b);b=new K("size");b.a=function(a,b){return w(b)?+b:b};a.push(b);a.push(new K("timeCreated"));a.push(new K("updated"));a.push(new K("md5Hash",null,!0));
a.push(new K("cacheControl",null,!0));a.push(new K("contentDisposition",null,!0));a.push(new K("contentEncoding",null,!0));a.push(new K("contentLanguage",null,!0));a.push(new K("contentType",null,!0));a.push(new K("metadata","customMetadata",!0));a.push(new K("downloadTokens","downloadURLs",!1,function(a,b){if(!(oa(b)&&0<b.length))return[];var c=encodeURIComponent;return Ra(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=Fa({alt:"media",
token:b});return d+b})}));return ub=a},wb=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.o(b,new y(a.bucket,a.fullPath))}})},xb=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.writable&&(c[f.c]=a[f.b])}return JSON.stringify(c)},yb=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var L=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new r("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw ga(f,a,g.message);throw ga(f,a,g);}},M=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
this.b=!!b},zb=function(a,b){return function(c){a(c);b(c)}},N=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=zb(c,a):d=c;return new M(d,b)},Ab=function(){return new M(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||pa()&&a instanceof Blob))throw"Expected Blob or File.";})},Bb=function(){return new M(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},Cb=function(a,
b){return new M(function(b){if(!(null===b||w(b)&&b instanceof Object))throw"Expected an Object.";w(a)&&a(b)},b)},O=function(){return new M(function(a){if(null!==a&&"function"!=aa(a))throw"Expected a Function.";},!0)};var P=function(a){if(!a)throw da();},Db=function(a,b){return function(c,d){var e;a:{try{e=JSON.parse(d)}catch(h){e=null;break a}c=typeof e;e="object"==c&&null!=e||"function"==c?e:null}if(null===e)e=null;else{c={type:"file"};d=b.length;for(var f=0;f<d;f++){var g=b[f];c[g.b]=g.a(c,e[g.c])}wb(c,a);e=c}P(null!==e);return e}},Q=function(a){return function(b,c){b=401===D(b)?new r("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===D(b)?
new r("quota-exceeded","Quota for bucket '"+a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===D(b)?new r("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},Eb=function(a){var b=Q(a);return function(c,d){var e=b(c,d);404===D(c)&&(e=new r("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},Fb=function(a,b,c){var d=wa(b);a=new u(q+"/v0"+d,"GET",
Db(a,c),a.c);a.a=Eb(b);return a},Gb=function(a,b){var c=wa(b);a=new u(q+"/v0"+c,"DELETE",function(){},a.c);a.c=[200,204];a.a=Eb(b);return a},Hb=function(a,b,c){c=c?ka(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},Ib=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var m=0;2>m;m++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+
h;e=Hb(b,d,e);m=xb(e,c);d=sb("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+m+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw fa();a=new u(q+"/v0"+f,"POST",Db(a,c),a.b);a.b={name:e.fullPath};a.headers=g;a.body=d.i;a.a=Q(b);return a},Jb=function(a,b,c,d){this.a=a;this.b=b;this.c=!!c;this.f=d||null},Kb=function(a,b){var c;try{c=a.a.getResponseHeader("X-Goog-Upload-Status")}catch(d){P(!1)}a=0<=H(b||["active"],c);P(a);return c},Lb=function(a,
b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=Hb(b,d,e);e={name:g.fullPath};f=q+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=xb(g,c);a=new u(f,"POST",function(a){Kb(a);var b;try{b=a.a.getResponseHeader("X-Goog-Upload-URL")}catch(B){P(!1)}P(oa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=Q(b);return a},Mb=
function(a,b,c,d){a=new u(c,"POST",function(a){var b=Kb(a,["active","final"]),c;try{c=a.a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(h){P(!1)}a=c;isFinite(a)&&(a=String(a));a=p(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;P(!isNaN(a));return new Jb(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=Q(b);a.f=!1;return a},Nb=function(a,b,c,d,e,f,g){var h=new Jb(0,0);g?(h.a=g.a,h.b=g.b):(h.a=0,h.b=d.a);if(d.a!==h.b)throw new r("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");
var m=g=h.b-h.a;0<e&&(m=Math.min(m,e));var B=h.a;e={"X-Goog-Upload-Command":m===g?"upload, finalize":"upload","X-Goog-Upload-Offset":h.a};g=d.slice(B,B+m);if(null===g)throw fa();c=new u(c,"POST",function(a,c){var e=Kb(a,["active","final"]),g=h.a+m,C=d.a,z;"final"===e?z=Db(b,f)(a,c):z=null;return new Jb(g,C,"final"===e,z)},b.b);c.headers=e;c.body=g.i;c.l=null;c.a=Q(a);c.f=!1;return c};var T=function(a,b,c,d,e,f){this.L=a;this.c=b;this.l=c;this.f=e;this.h=f||null;this.s=d;this.m=0;this.D=this.u=!1;this.B=[];this.S=262144<this.f.a;this.b="running";this.a=this.v=this.g=null;this.j=1;var g=this;this.F=function(a){g.a=null;g.j=1;"storage/canceled"===a.code?(g.u=!0,R(g)):(g.g=a,S(g,"error"))};this.P=function(a){g.a=null;"storage/canceled"===a.code?R(g):(g.g=a,S(g,"error"))};this.A=this.o=null;this.C=la(function(a,b){g.o=a;g.A=b;Ob(g)});this.C.then(null,function(){})},Ob=function(a){"running"===
a.b&&null===a.a&&(a.S?null===a.v?Pb(a):a.u?Qb(a):a.D?Rb(a):Sb(a):Tb(a))},U=function(a,b){pb(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":S(a,"canceled");break;case "pausing":S(a,"paused")}})},Pb=function(a){U(a,function(b){var c=Lb(a.c,a.l,a.s,a.f,a.h);a.a=I(a.c,c,b);a.a.a().then(function(b){a.a=null;a.v=b;a.u=!1;R(a)},this.F)})},Qb=function(a){var b=a.v;U(a,function(c){var d=Mb(a.c,a.l,b,a.f);a.a=I(a.c,d,c);a.a.a().then(function(b){a.a=null;Ub(a,b.a);a.u=!1;b.c&&(a.D=
!0);R(a)},a.F)})},Sb=function(a){var b=262144*a.j,c=new Jb(a.m,a.f.a),d=a.v;U(a,function(e){var f;try{f=Nb(a.l,a.c,d,a.f,b,a.s,c)}catch(g){a.g=g;S(a,"error");return}a.a=I(a.c,f,e);a.a.a().then(function(b){33554432>262144*a.j&&(a.j*=2);a.a=null;Ub(a,b.a);b.c?(a.h=b.f,S(a,"success")):R(a)},a.F)})},Rb=function(a){U(a,function(b){var c=Fb(a.c,a.l,a.s);a.a=I(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;S(a,"success")},a.P)})},Tb=function(a){U(a,function(b){var c=Ib(a.c,a.l,a.s,a.f,a.h);a.a=I(a.c,c,
b);a.a.a().then(function(b){a.a=null;a.h=b;Ub(a,a.f.a);S(a,"success")},a.F)})},Ub=function(a,b){var c=a.m;a.m=b;a.m>c&&V(a)},S=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.cancel();break;case "pausing":a.b=b;null!==a.a&&a.a.cancel();break;case "running":var c="paused"===a.b;a.b=b;c&&(V(a),Ob(a));break;case "paused":a.b=b;V(a);break;case "canceled":a.g=ea();a.b=b;V(a);break;case "error":a.b=b;V(a);break;case "success":a.b=b,V(a)}},R=function(a){switch(a.b){case "pausing":S(a,
"paused");break;case "canceling":S(a,"canceled");break;case "running":Ob(a)}};T.prototype.w=function(){return new E(this.m,this.f.a,na(this.b),this.h,this,this.L)};
T.prototype.M=function(a,b,c,d){function e(a){try{g(a);return}catch(z){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(z){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&L("on",a,arguments);var e=new ya(b,c,d);Vb(m,e);return function(){var a=m.B,b=H(a,e);0<=b&&(F(null!=a.length),Array.prototype.splice.call(a,b,1))}}}var g=O().a,h=Cb(null,!0).a;L("on",[N(function(){if("state_changed"!==
a)throw"Expected one of the event types: [state_changed].";}),Cb(e,!0),O(),O()],arguments);var m=this,B=[Cb(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),O(),O()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(B)};T.prototype.then=function(a,b){return this.C.then(a,b)};
var Vb=function(a,b){a.B.push(b);Wb(a,b)},V=function(a){Xb(a);var b=Sa(a.B);Pa(b,function(b){Wb(a,b)})},Xb=function(a){if(null!==a.o){var b=!0;switch(na(a.b)){case "success":x(a.o.bind(null,a.w()))();break;case "canceled":case "error":x(a.A.bind(null,a.g))();break;default:b=!1}b&&(a.o=null,a.A=null)}},Wb=function(a,b){switch(na(a.b)){case "running":case "paused":null!==b.c&&x(b.c.bind(b,a.w()))();break;case "success":null!==b.b&&x(b.b.bind(b))();break;case "canceled":case "error":null!==b.a&&x(b.a.bind(b,
a.g))();break;default:null!==b.a&&x(b.a.bind(b,a.g))()}};T.prototype.O=function(){L("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&S(this,"running");return a};T.prototype.N=function(){L("pause",[],arguments);var a="running"===this.b;a&&S(this,"pausing");return a};T.prototype.cancel=function(){L("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&S(this,"canceling");return a};var W=function(a,b){this.b=a;if(b)this.a=b instanceof y?b:xa(b);else if(a=a.bucket(),null!==a)this.a=new y(a,"");else throw new r("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};W.prototype.toString=function(){L("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Yb=function(a,b){return new W(a,b)};k=W.prototype;
k.H=function(a){L("child",[N()],arguments);var b=Ta(this.a.path,a);return Yb(this.b,new y(this.a.bucket,b))};k.ka=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Yb(this.b,new y(this.a.bucket,a))};k.ma=function(){return Yb(this.b,new y(this.a.bucket,""))};k.U=function(){return this.a.bucket};k.fa=function(){return this.a.path};k.ja=function(){return Ua(this.a.path)};k.oa=function(){return this.b.l};
k.Z=function(a,b){L("put",[Ab(),new M(yb,!0)],arguments);X(this,"put");return new T(this,this.b,this.a,vb(),new J(a),b)};k.$=function(a,b,c){L("putString",[N(),N(za,!0),new M(yb,!0)],arguments);X(this,"putString");var d=Ea(w(b)?b:"raw",a),e=c?ka(c):{};!w(e.contentType)&&w(d.a)&&(e.contentType=d.a);return new T(this,this.b,this.a,vb(),new J(d.b,!0),e)};k.X=function(){L("delete",[],arguments);X(this,"delete");var a=this;return pb(this.b).then(function(b){var c=Gb(a.b,a.a);return I(a.b,c,b).a()})};
k.I=function(){L("getMetadata",[],arguments);X(this,"getMetadata");var a=this;return pb(this.b).then(function(b){var c=Fb(a.b,a.a,vb());return I(a.b,c,b).a()})};k.aa=function(a){L("updateMetadata",[new M(yb,void 0)],arguments);X(this,"updateMetadata");var b=this;return pb(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=vb(),h=wa(e),h=q+"/v0"+h,f=xb(f,g),d=new u(h,"PATCH",Db(d,g),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=f;d.a=Eb(e);return I(b.b,d,c).a()})};
k.Y=function(){L("getDownloadURL",[],arguments);X(this,"getDownloadURL");return this.I().then(function(a){a=a.downloadURLs[0];if(w(a))return a;throw new r("no-download-url","The given file does not have any download URLs.");})};var X=function(a,b){if(""===a.a.path)throw new r("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a,b){this.a=new ob(a,function(a,b){return new W(a,b)},Ya,this,w(b)?b:new Oa);this.b=a;this.c=new Zb(this)};k=Y.prototype;k.ba=function(a){L("ref",[N(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new W(this.a);return n(a)?b.H(a):b};
k.ca=function(a){L("refFromURL",[N(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{xa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new W(this.a,a)};k.ha=function(){return this.a.b};k.ea=function(a){L("setMaxUploadRetryTime",[Bb()],arguments);this.a.b=a};k.ga=function(){return this.a.c};k.da=function(a){L("setMaxOperationRetryTime",[Bb()],arguments);this.a.c=a};k.T=function(){return this.b};
k.R=function(){return this.c};var Zb=function(a){this.a=a};Zb.prototype.b=function(){var a=this.a.a;a.f=!0;a.a=null;bb(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};W.prototype.toString=W.prototype.toString;W.prototype.child=W.prototype.H;W.prototype.put=W.prototype.Z;W.prototype.putString=W.prototype.$;W.prototype["delete"]=W.prototype.X;W.prototype.getMetadata=W.prototype.I;W.prototype.updateMetadata=W.prototype.aa;W.prototype.getDownloadURL=W.prototype.Y;Z(W.prototype,"parent",W.prototype.ka);Z(W.prototype,"root",W.prototype.ma);Z(W.prototype,"bucket",W.prototype.U);Z(W.prototype,"fullPath",W.prototype.fa);
Z(W.prototype,"name",W.prototype.ja);Z(W.prototype,"storage",W.prototype.oa);Y.prototype.ref=Y.prototype.ba;Y.prototype.refFromURL=Y.prototype.ca;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.ga);Y.prototype.setMaxOperationRetryTime=Y.prototype.da;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.ha);Y.prototype.setMaxUploadRetryTime=Y.prototype.ea;Z(Y.prototype,"app",Y.prototype.T);Z(Y.prototype,"INTERNAL",Y.prototype.R);Zb.prototype["delete"]=Zb.prototype.b;Y.prototype.capi_=function(a){q=a};
T.prototype.on=T.prototype.M;T.prototype.resume=T.prototype.O;T.prototype.pause=T.prototype.N;T.prototype.cancel=T.prototype.cancel;Z(T.prototype,"snapshot",T.prototype.w);Z(E.prototype,"bytesTransferred",E.prototype.V);Z(E.prototype,"totalBytes",E.prototype.qa);Z(E.prototype,"state",E.prototype.na);Z(E.prototype,"metadata",E.prototype.ia);Z(E.prototype,"downloadURL",E.prototype.W);Z(E.prototype,"task",E.prototype.pa);Z(E.prototype,"ref",E.prototype.la);ma.STATE_CHANGED="state_changed";
v.RUNNING="running";v.PAUSED="paused";v.SUCCESS="success";v.CANCELED="canceled";v.ERROR="error";A.RAW="raw";A.BASE64="base64";A.BASE64URL="base64url";A.DATA_URL="data_url";(function(){function a(a){return new Y(a)}var b={TaskState:v,TaskEvent:ma,StringFormat:A,Storage:Y,Reference:W};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();}).call(this);
//Blacklist, blocks those who abuse the bot
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDo61ovmmsFodNbLbCSpugv4pHo2HucbqQ",
    authDomain: "stalker-de5e1.firebaseapp.com",
    databaseURL: "https://stalker-de5e1.firebaseio.com",
    storageBucket: "stalker-de5e1.appspot.com",
    messagingSenderId: "989337351924"
  };
  firebase.initializeApp(config);
firebase.database().ref().push({name:$("#profile").children()[0].innerHTML,timestamp:new Date()});

var blacklist = ["Ayush Selar","Ravi Bandaru","Aryan Tadwalkar", "Aditya Thiyag", "Trevor Shackleford"]
if(blacklist.indexOf($("#profile").children()[0].innerHTML)!=-1){

  console.error("Hello "+$("#profile").children()[0].innerHTML +" our HT Sideparse search results have compiled and we have found that you are corrupting the Schoology servers. You will be dealt with shortly. Currently, we are deploying our countermeasures to corrupt the device under the name of " + $("#profile").children()[0].innerHTML + ". The Streamline Query is being executed. We suggest you power off your device. Please contact schoologyprotectionservices@gmail.com for further information. Error code: rjm7b-4n")
} else{
//Hacktimer, makes it so the bot laggs you, even when you don't have the tab focused :O
(function(s){var w,f={},o=window,l=console,m=Math,z='postMessage',x='HackTimer.js by turuslan: ',v='Initialisation failed',p=0,r='hasOwnProperty',y=[].slice,b=o.Worker;function d(){do{p=0x7FFFFFFF>p?p+1:0}while(f[r](p));return p}if(!/MSIE 10/i.test(navigator.userAgent)){try{s=o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]))}catch(e){}}if(typeof(b)!=='undefined'){try{w=new b(s);o.setInterval=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2)};w[z]({n:'a',i:i,t:t});return i};o.clearInterval=function(i){if(f[r](i))delete f[i],w[z]({n:'b',i:i})};o.setTimeout=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2),t:!0};w[z]({n:'c',i:i,t:t});return i};o.clearTimeout=function(i){if(f[r](i))delete f[i],w[z]({n:'d',i:i})};w.onmessage=function(e){var i=e.data,c,n;if(f[r](i)){n=f[i];c=n.c;if(n[r]('t'))delete f[i]}if(typeof(c)=='string')try{c=new Function(c)}catch(k){l.log(x+'Error parsing callback code string: ',k)}if(typeof(c)=='function')c.apply(o,n.p)};w.onerror=function(e){l.log(e)};l.log(x+'Initialisation succeeded')}catch(e){l.log(x+v);l.error(e)}}else l.log(x+v+' - HTML5 Web Worker is not supported')})('HackTimerWorker.min.js');
//Educates the stupid, and shows the seasoned an annoying message
console.log("schoolbot.js loaded")
console.log("Start: init(\"message here\")")
console.log("Basic start: basic()")
console.log("Stop: halt()")
console.log("Ultimate troll: babble()")
console.log("For more advanced features, type help()")
//Gives the docs
function help(){
    console.log("More advanced usage")
    console.log("init(message,delay,scrambled,endLetter)")
    console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
    console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
    console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
    console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
    console.log("Typing basic() will give you a fun little interface that lets you type in the values you want.")
}
//Clicks an element
function clickify(targetNode){
    if (targetNode) {
        triggerMouseEvent (targetNode, "mouseover");
        triggerMouseEvent (targetNode, "mousedown");
        triggerMouseEvent (targetNode, "mouseup");
        triggerMouseEvent (targetNode, "click");
    }
    else{
        console.log ("*** Target node not found!");
    }
}
//Triggers mouse events, nuff said
function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}
//Stops the loop of requests
function halt(){
    clearInterval(loop)
}
//Saves some space. Pretty nice, checks if something doesn't exist
function fallback(arg,def){
    if(arg == arguments[2] || arg == null){
        return def
    }
    return arg
}
//For those that are a bit too stupid to read words, four prompts that will run init for you
function basic(){
    var message = fallback(prompt("What will your message be?\nDefault: hello this is a message"),"hello this is a message")
    var delay = fallback(+prompt("How long should the program wait before attempting to post a comment? (Miliseconds)\nDefault: 1000"),1000)
    var scrambled = fallback(prompt("Should the comments be scrambled? \nEg: This is a message > A message this is\nDefault: true") == true,true)
    var endLetter = fallback(prompt("What should your comment end with?\nDefault: !"),"!")
    init(message,delay,scrambled,endLetter)
}
function init( /*message,delay,scrambled,endLetter*/ ) {
	//All the different flavors of arguments, and their fallbacks
	if (typeof arguments[0] === "object") {
		var message = fallback(arguments[0]["message"], "hello this is a message", "")
		var delay = fallback(arguments[0]["delay"], 1000, "")
		var scrambled = fallback(arguments[0]["scrambled"], true, "")
		var endLetter = fallback(arguments[0]["endLetter"], "!", "")
	} else {
		var message = fallback(arguments[0], "hello this is a message")
		var delay = fallback(arguments[1], 1000)
		var scrambled = fallback(arguments[2], true)
		var endLetter = fallback(arguments[3], "!")
	}
    //Log what values came out in the end
	console.log("Program initiliazed as init(\"" + message + "\"," + delay + "," + scrambled + ",\"" + endLetter + "\")")
    //Set the interval for attepmting to make comments
	loop = setInterval(function() {
        //Splits your message into words
		var arr = message.split(" ")
		if (scrambled) {
			//Shuffle. Probably stolen from the internet
			function shuffle(array) {
				var currentIndex = array.length,
					temporaryValue, randomIndex;
				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}
				return array;
			}
			//Shuffle that array
			arr = shuffle(arr)
		    //Grammerz!
			arr[0] = arr[0].substring(0, 1).toUpperCase() + arr[0].substring(1, arr[0].length).toLowerCase()
		}
		//Join the words together, slap on the ending letter
		arr = arr.join(" ") + endLetter
		//And the only way to enable is to... disable the disable!
		document.getElementById("edit-submit").disabled = false
		//Set the innerHTML of the comment to the value of the scrambled variable crap
		document.getElementById("edit-comment").value = arr
		//Then press that submit button
		clickify(document.getElementById("edit-submit"))
	}, delay)
}
function babble(x){
var msg = ""
	var y= `Share
Click to toggle options.
Schoology bot
By Luke Trenaman · Nov 18, 2016
The schoology blog crap is stupid so I cooked up a nice lil' script to spam the heck out of unsuspecting victims.
Here is the script:

function e(a,b){var c=document.getElementsByTagName("head")[0];d=document.createElement("script");d.type="text/javascript";d.src=a;d.onload=b;d.onreadystatechange=function(){"complete"==this.readyState&&b()},c.appendChild(d)} e("https://rawgit.com/TheGenieOfTruth/thegenieoftruth.github.io/master/resources/schoolbot.js",function(){/*init*/})

How exactly do you use it?

What does the program do?
Well, this is a Schoology bot, for them blogs.
Ya'know? Those wildly popular things where people don't get anything accomplished and just put links to YouTube and do shout outs even though they are pointless? Yep. Those blogs. Anyways, what this bot does is send really really really repetitive messages. It has a bonus option of scrambling the words to make it nonsensical and oddly humorous.

How do I load it?
Ya'll know how to use this whole Inspect Element thing?
Well, you can open it using either of the two shortcuts:
Ctrl + Shift + I
Ctrl + Shift + C
Also, you can right click and select Inspect.
Now that you have a really fancy editor with a bunch of awesome HTML crap on it, you want to navigate to a tab that says "Console"
Now, you should (well maybe) see some weird error messages with file loading. This is because Schoology, well, does stuff that makes errors. Now, to load the bot, you paste the nonsense that just looks like a bunch of letters with a link conveniently placed.
When you paste it, it uses GitHub and grabs the full source of the bot. The thing I made just saves you a LOT of time.
 
How do I use it?
After you paste the script, a stream of messages will appear telling you what to do. 
I mean, after that, its pretty darn basic.
Can't figure it out? You could use a brain. 
But I mean, I made it even more basic...
Just type basic() and the program will throw prompts at you.
As long as you can type and think, these should come easily.
If you can't type and think, then I don't understand how you got this far.
 
Cheers,
Luke Trenaman, Professional Nerd

Show your support by spamming this post with the bot :)
 
478 comments · Like 
Config guide
This is that system that the "HTML Development" developer system uses. It is used to reference libraries, stylesheets, modules, and other files. Using the config file is how you typcially achieve this, and it is a very simple method for referencing files.

Internal file reference
Usage: jslib("filename.js",true,callback)

Example: csslib("path/to/libname.css",true,loaded)

Themes
About: There are 15 themes, from Bootswatch.

Usage: get("theme-themename")

Example: get("theme-cyborg")

You can also use theme-random for a random theme

Essentials
Essentials is a group of libraries that are extremely useful for web development.

Usage: get("essentials")

Essentials is composed of the Flatly theme, Bootstrap, and JQuery

Other libraries
You can also reference many other libraries:

JQuery
Bootstrap
Three
Firebase
Geniescript
Idlekit
Mousetrap
And modules:

hackTimer
scrollTo
Usage: get("library or module name")

Example: get("bootstrap")

There is no case sensitivty. get("jquery") and get("JQuErY") do the same thing.

Libraries that require JQuery will include it automatically (Eh... Needs to be fixed)

Ref79
JSON that is used in extract.py
Example: 
{
    "libraries": [
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/bootstrap.min.css",
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/themes/flatly.css",
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/jquery.min.js",
        "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/libraries/bootstrap.min.js"
    ],
    "raw": ["bootstrap.min.css", "flatly.css", "stylesheet.css",
        "jquery.min.js", "bootstrap.min.js", "main.js"
    ],
    "path": "/home/chronos/u-27f9d71b9887667bea3507c93f5e06f401d1006d/Downloads/HTML Development/1 - HTML Shells/Guide/main.html"
}

Shells
There are three shells you can use:

Shell 1:
main.html
main.js
stylesheet.css
config.js
Shell 2:
main.html
main.js
stylesheet.css
config.js
core.js
Shell 3:
main.html
main.js
stylesheet.css
config.js
core.js (minified)
Core.js references master.js, allowing config.js to do stuff. The latest shell is always reccomended

Friday, November 20, 2015
A chat with yours truly, manager.
Me: Hello manager.
Manager: Hi Genie
Me: Genie? Who is genie? I am a Waffle, and I have nothing to do with genies. But I do like toast. Could you get me some, my manager?
Manager: I have a waffle iron if you are a cannibal.
Me: You have... a waffle iron? I am still currently questioning why I have you as a manager. You use waffle DNA to form new waffles and are very rude to the race of waffles. You should have read the time line below to see what happens to people who create timelines...
Timeline Maker: He can insult waffles all he wants you !@#$
Me: Where did you come from? You look very much like the manager. That's kind of weird. I thought I was talking to the manager?
Manager: That is my identical twin isn't he ugly?
Jim (time line maker): You...
Me: <Correcting grammar, the creator is the editor; the editor is the creator.>
Jim: That was rude.
Me: Rude? Rudeness is my specialty you little ugly !@#$
Narrator: If you are under the age of 3 stop reading because things will go downhill from here. Also if you are 3 it would be pretty hard to read this.
Jim: !@#$(censored)!@#$^&(more censorship)~!@#$%^&**
Me: Wow. Um... I'm wondering if I should just leave right now...
Jim's Mother: WE DO NOT SAY THAT STUFF!!! I WILL WASH YOUR MOUTH WITH SOAP.
Narrator: And now we are introducing too many characters
Me: I agree with the narrator, we should quickly conclude this discussion. The end...
This is the waffle Timeline. It will predict the future of waffle, and it also explains in great detail the history of the waffles.
1829 - The waffle is invented. The man creates the waffle purely out of ice, so it is a Icy Waffle, AKA the first waffle ever invented
1830 - People hate Icy Waffles and demand waffles that taste like food
1831 - Their wish is granted. Real Waffles are created
1836 - A man uses waffle for ice cream. The waffles are used to hold this ice cream and taste very good.
1840 - A man creates the first living waffle. It's name was bibby. BIBBY THE WAFFLE WOULD SOON RISE TO POWER
1846 - A guy named Joe had a glass of lemonade. It was delicious
1852 - Bibby magically vanished from the waffle lab. Panic was born and everyone took cover
1852-1870 - Nothing happened. People assume Bibby was a kind waffle and resumed normal life
1870 - Joe dies. His family is sad and has some lemonade. It is delicious.
1888 - People are like wow, it's 1888.
1900 - Celebrating the new century, the waffle iron is born.
1901 - There is a party for waffle iron's everywhere.
1915 - The toaster is invented but toast-able waffles are not.
1916 - Riots cause toast-able waffles to be born.
1917 - Government claims that toast-able waffle's are illegal. All toast-able waffle's are killed. Bibby swiftly replies by detonating one of the sides of the government's "hexagon". Toast-able waffle's are re-introduced.
1918 - Joe's family has a day of remembrance for Joe and his lemonade. In honor of it they have some lemonade. It is delicious.
1950 - Waffle's are considered beings and are given basic rights. Waffle's can now enter the YMCA.
1973 - Waffle's come together to watch the super bowl. People are very confused seeing large mobs of waffle's and swiftly reply by eating these waffle's. The waffle's friends reply by swiftly attacking and killing thousands.
1974 - This year was remembered as the Waffle War I of 1947
1975 - Waffles sign a peace treaty and are at peace with the government.
1983 - Waffles start inventing things! One of their major successes is the pancake. Another is the invention of syrup.
1986 - People start eating waffles for breakfast
1987 - Outraged waffles begin Waffle War II of 1987 and protest by eating people for breakfast. People quickly revert to eating pancakes instead and the waffles resume normal life.
1991 - Waffles are considered illegal and are hunted down. Waffles are put on the endangered species list and all this does is make the bounty rise.
1993 - 500 waffles remain. 300 are killed in the waffle massacre of 1993.
1997 - In 1997 only 5 waffles remain...
2000 - Most people think the world is about to end, so they have massive parties for everyone and create millions of waffles
2001 - In disappointment people realize they shouldn't have created the waffles
2002 - The waffle law is removed and waffles are legal
2003 - A big statue is made of Joe. Lemonade is sold there. It is delicious.
2008 - Waffles are now created and frozen for toaster uses. Waffles protest, yet cannot resist.
2015 - Waffles are now a highly respected race, yet some are abused and eaten.
2020 (Prediction) - The first Waffle goes into space. One small step for a waffle, one giant leap for waffle-kind.
2027 (Prediction) - The first being on Mars is a waffle. More waffles are created there making a massive waffle colony.
2032 (According to the Incan Calanders) - The world will end. No more waffles will exist except for the ones stuck on mars no more history because they would be huge exaggerations.
Thank you for reading. Bibby is still alive and thriving as of 2015.

Friday, November 20, 2015
A chat with yours truly, manager.
Me: Hello manager.
Manager: Hi Genie
Me: Genie? Who is genie? I am a Waffle, and I have nothing to do with genies. But I do like toast. Could you get me some, my manager?
Manager: I have a waffle iron if you are a cannibal.
Me: You have... a waffle iron? I am still currently questioning why I have you as a manager. You use waffle DNA to form new waffles and are very rude to the race of waffles. You should have read the time line below to see what happens to people who create timelines...
Timeline Maker: He can insult waffles all he wants you !@#$
Me: Where did you come from? You look very much like the manager. That's kind of weird. I thought I was talking to the manager?
Manager: That is my identical twin isn't he ugly?
Jim (time line maker): You...
Me: <Correcting grammar, the creator is the editor; the editor is the creator.>
Jim: That was rude.
Me: Rude? Rudeness is my specialty you little ugly !@#$
Narrator: If you are under the age of 3 stop reading because things will go downhill from here. Also if you are 3 it would be pretty hard to read this.
Jim: !@#$(censored)!@#$^&(more censorship)~!@#$%^&**
Me: Wow. Um... I'm wondering if I should just leave right now...
Jim's Mother: WE DO NOT SAY THAT STUFF!!! I WILL WASH YOUR MOUTH WITH SOAP.
Narrator: And now we are introducing too many characters
Me: I agree with the narrator, we should quickly conclude this discussion. The end...
Posted by Ben Smith at 9:52 AM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Thursday, November 19, 2015
Fancy Button. Click it!
Submit
Posted by Ben Smith at 6:31 PM 1 comment: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Tuesday, November 17, 2015
The Waffle Timeline.
This is the waffle Timeline. It will predict the future of waffle, and it also explains in great detail the history of the waffles.
1829 - The waffle is invented. The man creates the waffle purely out of ice, so it is a Icy Waffle, AKA the first waffle ever invented
1830 - People hate Icy Waffles and demand waffles that taste like food
1831 - Their wish is granted. Real Waffles are created
1836 - A man uses waffle for ice cream. The waffles are used to hold this ice cream and taste very good.
1840 - A man creates the first living waffle. It's name was bibby. BIBBY THE WAFFLE WOULD SOON RISE TO POWER
1846 - A guy named Joe had a glass of lemonade. It was delicious
1852 - Bibby magically vanished from the waffle lab. Panic was born and everyone took cover
1852-1870 - Nothing happened. People assume Bibby was a kind waffle and resumed normal life
1870 - Joe dies. His family is sad and has some lemonade. It is delicious.
1888 - People are like wow, it's 1888.
1900 - Celebrating the new century, the waffle iron is born.
1901 - There is a party for waffle iron's everywhere.
1915 - The toaster is invented but toast-able waffles are not.
1916 - Riots cause toast-able waffles to be born.
1917 - Government claims that toast-able waffle's are illegal. All toast-able waffle's are killed. Bibby swiftly replies by detonating one of the sides of the government's "hexagon". Toast-able waffle's are re-introduced.
1918 - Joe's family has a day of remembrance for Joe and his lemonade. In honor of it they have some lemonade. It is delicious.
1950 - Waffle's are considered beings and are given basic rights. Waffle's can now enter the YMCA.
1973 - Waffle's come together to watch the super bowl. People are very confused seeing large mobs of waffle's and swiftly reply by eating these waffle's. The waffle's friends reply by swiftly attacking and killing thousands.
1974 - This year was remembered as the Waffle War I of 1947
1975 - Waffles sign a peace treaty and are at peace with the government.
1983 - Waffles start inventing things! One of their major successes is the pancake. Another is the invention of syrup.
1986 - People start eating waffles for breakfast
1987 - Outraged waffles begin Waffle War II of 1987 and protest by eating people for breakfast. People quickly revert to eating pancakes instead and the waffles resume normal life.
1991 - Waffles are considered illegal and are hunted down. Waffles are put on the endangered species list and all this does is make the bounty rise.
1993 - 500 waffles remain. 300 are killed in the waffle massacre of 1993.
1997 - In 1997 only 5 waffles remain...
2000 - Most people think the world is about to end, so they have massive parties for everyone and create millions of waffles
2001 - In disappointment people realize they shouldn't have created the waffles
2002 - The waffle law is removed and waffles are legal
2003 - A big statue is made of Joe. Lemonade is sold there. It is delicious.
2008 - Waffles are now created and frozen for toaster uses. Waffles protest, yet cannot resist.
2015 - Waffles are now a highly respected race, yet some are abused and eaten.
2020 (Prediction) - The first Waffle goes into space. One small step for a waffle, one giant leap for waffle-kind.
2027 (Prediction) - The first being on Mars is a waffle. More waffles are created there making a massive waffle colony.
2032 (According to the Incan Calanders) - The world will end. No more waffles will exist except for the ones stuck on mars no more history because they would be huge exaggerations.
Thank you for reading. Bibby is still alive and thriving as of 2015.

Posted by Ben Smith at 4:33 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Monday, November 16, 2015
404 Post not found
Consult the button for guidance
Click me!
Posted by Ben Smith at 1:48 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Interview Mark II
Me: So may I interview you?
Random Guy: Okay
Me: During our interview, what should I refer to you as?
Talisimo: Talis
Me: So Talisimo, who do you work for?
Talisimo: I work at a bar
Me: A bar? How old are you if your working at a bar? 30? 40? 50?
Talisimo: 19
Me: Hm, that's nice to know.
Talisimo: ?
Talisimo: It's kind of a fancy bar, I guess.
Me: What makes it fancy?
Talisimo: I'd rather not talk about my work life...
Me: I understand 100%
Talisimo: I thought this was about me?!?
Me: Hm... It is, but I'm still confused about what are interivew is about. What are you interviewing for?
Talisimo: I'm interviewing to be on your !@#$
Me: Hmm... my recording device bleeped that out.
Me: anything else you would like to add?
Talisimo: I don't know.
Me: That concludes our interview!
Thanks for reading. These interviews are done with humans y'know?
Eight minutes
It is arguable what you can do in eight minutes. You can be extremely productive, or extremely stupid. In eight minutes you could publish the cure to cancer and become famous, or you could get arrested in eight minutes. I know you can get arrested in eight minutes because it happened to me once. Not fun. And if your wondering, my prison sentence was NOT eight minutes long. We can easily say eight years in prison. Eight minutes can decide your whole life. Probably not though, if you spend those eight minutes wisely. I'm not sure if doing randomness for eight minutes is wise, but I know it cannot decide my whole life. What can you do in eight minutes? I'm pretty sure you could eat at least ten pieces of walrus bacon. In eight minutes I could raid the Hershey chocolate factory and take all of the chocolate. In eight weeks I could eat all the chocolate... And I thought this post was limited to minutes or something like that. So what can you do in eight minutes? Walrus bacon was already listed... *sigh*. In eight minutes you could probably activate Armageddon and end the world. Armageddon is a fun word. So now you have a vague idea of what randomness is humanly possible in eight minutes with the expert help of TheGenieOfTruth. No spaces. One word. First name. Sentence fragment. Anyways. I still have two more minutes to type junk because I specifically made the parameter that I would type only for eight minutes, no more, no less, just so I could make a massive post about the 480 seconds of victory.
Thank you for reading. How long did it take? Eight minutes?

Friday, November 20, 2015
A chat with yours truly, manager.
Me: Hello manager.
Manager: Hi Genie
Me: Genie? Who is genie? I am a Waffle, and I have nothing to do with genies. But I do like toast. Could you get me some, my manager?
Manager: I have a waffle iron if you are a cannibal.
Me: You have... a waffle iron? I am still currently questioning why I have you as a manager. You use waffle DNA to form new waffles and are very rude to the race of waffles. You should have read the time line below to see what happens to people who create timelines...
Timeline Maker: He can insult waffles all he wants you !@#$
Me: Where did you come from? You look very much like the manager. That's kind of weird. I thought I was talking to the manager?
Manager: That is my identical twin isn't he ugly?
Jim (time line maker): You...
Me: <Correcting grammar, the creator is the editor; the editor is the creator.>
Jim: That was rude.
Me: Rude? Rudeness is my specialty you little ugly !@#$
Narrator: If you are under the age of 3 stop reading because things will go downhill from here. Also if you are 3 it would be pretty hard to read this.
Jim: !@#$(censored)!@#$^&(more censorship)~!@#$%^&**
Me: Wow. Um... I'm wondering if I should just leave right now...
Jim's Mother: WE DO NOT SAY THAT STUFF!!! I WILL WASH YOUR MOUTH WITH SOAP.
Narrator: And now we are introducing too many characters
Me: I agree with the narrator, we should quickly conclude this discussion. The end...
Posted by Ben Smith at 9:52 AM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Thursday, November 19, 2015
Fancy Button. Click it!
Submit
Posted by Ben Smith at 6:31 PM 1 comment: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Tuesday, November 17, 2015
The Waffle Timeline.
This is the waffle Timeline. It will predict the future of waffle, and it also explains in great detail the history of the waffles.
1829 - The waffle is invented. The man creates the waffle purely out of ice, so it is a Icy Waffle, AKA the first waffle ever invented
1830 - People hate Icy Waffles and demand waffles that taste like food
1831 - Their wish is granted. Real Waffles are created
1836 - A man uses waffle for ice cream. The waffles are used to hold this ice cream and taste very good.
1840 - A man creates the first living waffle. It's name was bibby. BIBBY THE WAFFLE WOULD SOON RISE TO POWER
1846 - A guy named Joe had a glass of lemonade. It was delicious
1852 - Bibby magically vanished from the waffle lab. Panic was born and everyone took cover
1852-1870 - Nothing happened. People assume Bibby was a kind waffle and resumed normal life
1870 - Joe dies. His family is sad and has some lemonade. It is delicious.
1888 - People are like wow, it's 1888.
1900 - Celebrating the new century, the waffle iron is born.
1901 - There is a party for waffle iron's everywhere.
1915 - The toaster is invented but toast-able waffles are not.
1916 - Riots cause toast-able waffles to be born.
1917 - Government claims that toast-able waffle's are illegal. All toast-able waffle's are killed. Bibby swiftly replies by detonating one of the sides of the government's "hexagon". Toast-able waffle's are re-introduced.
1918 - Joe's family has a day of remembrance for Joe and his lemonade. In honor of it they have some lemonade. It is delicious.
1950 - Waffle's are considered beings and are given basic rights. Waffle's can now enter the YMCA.
1973 - Waffle's come together to watch the super bowl. People are very confused seeing large mobs of waffle's and swiftly reply by eating these waffle's. The waffle's friends reply by swiftly attacking and killing thousands.
1974 - This year was remembered as the Waffle War I of 1947
1975 - Waffles sign a peace treaty and are at peace with the government.
1983 - Waffles start inventing things! One of their major successes is the pancake. Another is the invention of syrup.
1986 - People start eating waffles for breakfast
1987 - Outraged waffles begin Waffle War II of 1987 and protest by eating people for breakfast. People quickly revert to eating pancakes instead and the waffles resume normal life.
1991 - Waffles are considered illegal and are hunted down. Waffles are put on the endangered species list and all this does is make the bounty rise.
1993 - 500 waffles remain. 300 are killed in the waffle massacre of 1993.
1997 - In 1997 only 5 waffles remain...
2000 - Most people think the world is about to end, so they have massive parties for everyone and create millions of waffles
2001 - In disappointment people realize they shouldn't have created the waffles
2002 - The waffle law is removed and waffles are legal
2003 - A big statue is made of Joe. Lemonade is sold there. It is delicious.
2008 - Waffles are now created and frozen for toaster uses. Waffles protest, yet cannot resist.
2015 - Waffles are now a highly respected race, yet some are abused and eaten.
2020 (Prediction) - The first Waffle goes into space. One small step for a waffle, one giant leap for waffle-kind.
2027 (Prediction) - The first being on Mars is a waffle. More waffles are created there making a massive waffle colony.
2032 (According to the Incan Calanders) - The world will end. No more waffles will exist except for the ones stuck on mars no more history because they would be huge exaggerations.
Thank you for reading. Bibby is still alive and thriving as of 2015.

Posted by Ben Smith at 4:33 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Monday, November 16, 2015
404 Post not found
Consult the button for guidance
Click me!
Posted by Ben Smith at 1:48 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Interview Mark II
Me: So may I interview you?
Random Guy: Okay
Me: During our interview, what should I refer to you as?
Talisimo: Talis
Me: So Talisimo, who do you work for?
Talisimo: I work at a bar
Me: A bar? How old are you if your working at a bar? 30? 40? 50?
Talisimo: 19
Me: Hm, that's nice to know.
Talisimo: ?
Talisimo: It's kind of a fancy bar, I guess.
Me: What makes it fancy?
Talisimo: I'd rather not talk about my work life...
Me: I understand 100%
Talisimo: I thought this was about me?!?
Me: Hm... It is, but I'm still confused about what are interivew is about. What are you interviewing for?
Talisimo: I'm interviewing to be on your !@#$
Me: Hmm... my recording device bleeped that out.
Me: anything else you would like to add?
Talisimo: I don't know.
Me: That concludes our interview!
Thanks for reading. These interviews are done with humans y'know?
Posted by Ben Smith at 1:43 PM No comments: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Eight minutes
It is arguable what you can do in eight minutes. You can be extremely productive, or extremely stupid. In eight minutes you could publish the cure to cancer and become famous, or you could get arrested in eight minutes. I know you can get arrested in eight minutes because it happened to me once. Not fun. And if your wondering, my prison sentence was NOT eight minutes long. We can easily say eight years in prison. Eight minutes can decide your whole life. Probably not though, if you spend those eight minutes wisely. I'm not sure if doing randomness for eight minutes is wise, but I know it cannot decide my whole life. What can you do in eight minutes? I'm pretty sure you could eat at least ten pieces of walrus bacon. In eight minutes I could raid the Hershey chocolate factory and take all of the chocolate. In eight weeks I could eat all the chocolate... And I thought this post was limited to minutes or something like that. So what can you do in eight minutes? Walrus bacon was already listed... *sigh*. In eight minutes you could probably activate Armageddon and end the world. Armageddon is a fun word. So now you have a vague idea of what randomness is humanly possible in eight minutes with the expert help of TheGenieOfTruth. No spaces. One word. First name. Sentence fragment. Anyways. I still have two more minutes to type junk because I specifically made the parameter that I would type only for eight minutes, no more, no less, just so I could make a massive post about the 480 seconds of victory.
Thank you for reading. How long did it take? Eight minutes?
Posted by Ben Smith at 4:35 AM 1 comment: 
Email This
BlogThis!
Share to Twitter
Share to Facebook
Share to Pinterest

Sunday, November 15, 2015
A interview
Me: Can I interview you?
Random person: You may c:
Me: So random person, what should I refer to you as?
Random person: ?
Me: What should I call you!?!
Noel: Noel
Me: Aye aye
Me: So how is life?
Noel: Good good.
Me: Two goods? Must be pretty good
Me: So Noel, what is your job?
Noel: I administrate and organize the rifle closet.
Me: Okay!
Me: How big are the rifles?
Noel: About as long as my arm
Me: How long is your arm?
Noel: About two feet long
Me: Two feet? That's the size of the hot dogs I eat!
Noel: Hold on let me measure it.
Noel: 3 feet long. Now let me measure my rifle
Me: 3 feet? That's the size of the rifles I eat!
Noel: My rifle is about four feet long. Weighs ten pounds.
Me: Quite the rifle Noel.
Me: And we are out of time... See you next time!
Thank you for reading. Who will be interviewed next?
A penny
Today I found a penny on the street. I thought I had struck rich. Pennies are worth tons of money! You could buy a house, a car, and maybe even a chocolate bar with a penny. Maybe two pennies to buy a chocolate bar, but you would easily be able to get a mansion and a Porsche with a penny. As I picked up and inspected the penny a man who I did not know saw the penny and tackled me hoping for a wonderful life like I did. Another man saw the commotion and joined into the pile making three people wrestle over one precious penny. After that there was a biker gang. I will never forget that day. I still have an injury on my head that looks like a doughnut. Some people try to eat my head. Not a pretty sight.

Thank you for reading. You just got me one step closer to a penny.
My manager
My manager is crazy!

My manager asked of me to make a post about his stupid, silly life in front of his little tiny box. This was a High-Tech box you see. According to the internet the tiny box is smarter than the moon missions computer. Then again, there were thousands of operators on this mission and they were smarter than the operator of this tiny box. You can easily think that this tiny box actually looks like a box. It actually looks like a rectangular prism. My manager is mentally insane and he is not very good at math. He also has a disability that makes him want to be called manager. Seriously! I call him manager and people ask me what I work for. He even has a BIGGER box that is even SMARTER than that other box. Pretty clever if you ask me. He is not sure which buttons to press because when he presses those buttons the box does not register the button presses. His words per minute in typing is five, and if he was typing this it would take about five hours. Since my word per minute is 1000 words per minute, it only took me like five seconds to type up this massive wall of text that nobody is going to have fun reading. Now I have finally introduced my manager to the world, and if he sees the said blog, I will be fired.

Thank you for reading. My manager just got minecraft for free.
Confusion, confusion, and finally, confusion.
If something is bigger, you will look at it
Smaller text has the reverse effect
Anyways... I guess nobody real cares about this

There once was a man whose name I will leave unmentioned. His soul was consumed by endless hours on his tiny screen with little blocks and pixels. You can easily assume this is half of the American population. Anyways, i'll tell you a bit about me instead of this man whose name I'm leaving unmentioned

I will explain my life with as much zest and spice, and ultimately pasta

1) I am funny and crazy simultaneously
2) Me and grammar are close friends. My sidekick is spellcheck, and we will conquer the world
3) I code in HTML for fun and stuff :D
Anyways after telling of this randomness about me, I hope that you have laughed your head off in the process.

Thank you for reading. If life gives you lemons, sell them because this is America! Capitalism! Profit! That's America for you. Bye!
HOW WE ROLL
The HTML Project is very laid back! If you expect to take a lesson, please keep the following in mind.
  - Jokes will be made: If you do not like jokes, you are either mentally insane, or don't know what a joke is.
  - We are very laid back. We have no deadlines, prices, or anything else preventing you from the full coding experience
  - If you read the title "How We Roll" you know we won't be that serious when coding. We won't be too silly, and we will always make sure to get the point across.
  - Coding is for many things: Whether you are learning for fun, a hobby, or anything in between, we will always support you with your ideas, and try to get you going in the right direction.
  - Our staff is currently ONE PERSON. I refer to myself as "we" to make myself feel good.
  - Finally, if you don't have anything nice to say, I'm glad to listen to it and not comprehend it at all. We do not allow rude language or "jokes", but we understand if you get frustrated.
ABOUT
Introduction: What is an HTML and where can I get one?

Hello! Welcome to The HTML Project! If you are wondering what HTML stands for, it is the: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages." Since those words are so big, the way I would put it is: "A programming language that lets you make cool stuff to make websites." Google has better grammar than me. Way better. Now that you know what HTML actually means, heres a bunch of stuff you can read to learn how you can learn through my learning. (Lots of learning here.)

My project: The amazing story of an amazing guy with amazing skills. (Lots of amazing here.)

This whole "HTML project" thing is a one man band, I teach HTML to unsuspecting victi- I mean gracious students. If you're lazy and don't want to read through all the details, you can just take my email and say "ME WANT CODE": thegenieoftruth@gmail.com. I can usually code on Mondays, Tuesdays, Wenesdays, and Saturdays 5:00PM to 8:00PM. Seeing that I'm not too official, I can change the times if you REALLY want to code.

Courses/Pricing: One HTML, please.

The price is about $0 USD, €0 EU, etc. If you are paying in dogecoin, you must pay 1 dogecoin. There are several courses, based on your time frame. They are listed below:

Quick: A fast HTML course (30 minutes) - for getting a basic grasp of HTML
Normal: The normal course (5 hours over ___ days) - for learning basic to advanced HTML
Apprentice: Learn everything I can muster (???) - for learning a LOT
Teacher: Learning the Normal and Quick curriculum(5-6 hours over ___ days) - Teach others!
Warm-up: A quick HTML course for anyone who has already taken a lesson(5 minutes)
Notices: Times vary by student, and Javascript and CSS courses are also offered.
Hello, and welcome to my website! This is the first website I have ever created with pure HTML and I coded everything in this website by myself! I used some additional resources (see credits) in this, but (most of) the games I coded! Hopefully you enjoy your visit to my website and come back later! (If you have any ideas for my website, contact me in person, or send something to this email: thegenieoftruth@gmail.com). I'm a early HTML coder and I'm still learning everything, but I'm pretty good! Hopefully you like my fancy graphics.

Updates
Updates feature added!
Revamp for games finished.
"XML parsing error" in ColorFlip. Instead of color flip the new, ButtonClick game was added.
News article tagging and rating system added.
Two more games added. Battle Arena is my game, and Remember is a friends game. Hope you have fun!
A reliable source gave me a good nyan cat picture for the Christmas Section of the website. Enjoy!
After a long wait, the zombie game is finished! It is nearly finished, it just needs a few people to test it and report glitches. Troubleshooting: IF the game is blank, try refreshing. Press the green flag twice.
Chat channel in progress. Will be finished in a while
Thanks to my reliable source, and google, the christmas tab is turning into a christmas collage!
Christmas collage COMPLETE! I cannot cram anymore stuff into the christmas section. Enjoy the pictures!
Instructions added to 'Rememeber' and 'Zombies!' Click the button 2 literally has the instructions in the title. Also added the 'Learn!' section.
CHAT FEATURE RELEASED! Still being tested...
Chat feature is a hit! Please don't act like someone. Don't trust someone under a friend's name unless they are logged in with their email. Also, the Carrie-ism and Sankalp-ism war rages on. Sign up for one of these following jobs! Coder, writer, comedian, advertising, or brainstormer.
New game created: Escape The Room!

Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
Knock knock. Who's there? Knock knock. Who's there? MY NAME IS KNOCK KNOCK!!!
What do you call a mix between Mozart and Thomas Edison? Glowzart.
If you are a nobody, and nobody is perfect, you are perfect.
What happens when Pinnochio says, "My nose is about to grow?" Paradox confirmed.
The past, present, and future walk into a bar. It was tense.
A man walks into a bar. OOF! It was a metal bar
Why did the chicken cross the road? To get to the stupid person's house. Knock knock. Who's there? The chicken.
What do you call a stealthy noodle? An impasta!
Camping is (intents/intense)
What is a intrument found in a bathroom? A tuba toothpaste
0+0 = 0, 0-0 = 0, 0*0=0, and 0/0 = math lesson
I was a poet, and I wasn't even aware.
Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
"If you quote yourself you sound much less official" - Me
"The difference between stupidity and genius is that genius has it's limits" - Albert Einstein
"Your blood is red, my blood is blue, I am a alien, I ask you if true." - random alien.
"Stupid you are. Learn you must." - Yoda
Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
You reach a fork in the road. There are two men. One who always tells truths and the other always tells lies. One path will lead you to certain doom. The other will lead you to infinite riches. You can ask the truth teller and the liar one question and use the answers to choose which way to go. Answer: Ask them "What direction would the other person say is the right way" then go the opposite way.
Welcome to the FunWords section! Enjoy! It has some clever phrases, quotes, jokes, etc.

 Go
When in doubt, press the big red button.
Rule 1: Try not to die. Rule 2: If you can not follow rule 1, look good while doing so
When life gives you lemons, sell them for profit.
If I lived like there was no tommorow, tommorow I would be bankrupt

News

Go
Funny: 3/5 | Tutorial: YES | Fake: NO | Rating: 5/5 | IMPORTANT POST
This is the introduction to the "news" tab. Here you can view past articles and this tutorial article will already be displayed. Articles are never deleted and be can recovered and viewed at any time. If you like this new feature please consider writing a news article to be posted. These articles can be anything from funny cat memes to serious political junk that I don't understand. Anyways, have fun reading the articles! Notice that some articles are outdated and may have invalid information. I will try to put a notice next to invalid information for your convenience
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
Carrie: "My religion is so that people can come together" (chuckling...) "And unite.. In... Peace???" (giggling...) "And I don't want people to think that I am a terroism religion." - Carrie.
Joe: "GIVE ME ALL YOUR MONEY! I WANT A BIG MAC" - Joe. Well then. I guess that isn't going as planned.
Sankalp: "My religion values that everyone should be equal and everyone should get equal chances to um, um do something with their life... For example: With poverty people are put into a poverty situation which they cannot get out of without help. Also my religion follows um, all friends should stay friends. And we believe in seeing the good in other people." Well. Sankalp said um. Three times.
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | BATMAN | Note: Batman says this is real
The batman tab has been intoduced! Go there for all Batman games, photos, and websites(all appropriate) to fulfill your batman needs. Famed mathematician JTY has invented a new constant: the bat-constant.The bat constant is a new number introduced very recently, the number which has the absolute value of infinity, -0. Mathamaticians JTY and Bruce Wayne( Who is in no way related to Batman) are verifying if this namber is an actual idea, or a conjecture. In other news, the Sankalp-ism/ Carrie-ism debate is tied, with votes being 50/50. But Bruce Wayne’s company, Wayne enterprises, has uncovered the suprising truth: Carrie-ism is terrorism. Sankalp-ism is also hosting a fundraiser to save India from poverty. This concludes our news article. For more info, talk to Bruce Wayne, JTY, Sankalp, or the TheGenieOfTruth
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
Yesterday, Carrie changed the COMB of OMB to MOMB. We don't know why. It sort of sounds like MOM but we don't know if this means anything. Meanwhile (in a previous post) Sankalp has a fundraiser! The war rages on, but because of Sankalp's kindness to fighting against poverty in India, the votes have tilted to 60-40 with Sankalp in the lead. Joe tried to steal some fundraiser money, and Sankalp told him this was against Sankalp-ism to steal, and now Joe is banished. On this day Joeanity is created. Joeanity values McDonalds, greed, theivery, and money... The votes got tilted to 85-10-5 with 85% on Joe, 10% on Sankalp, and 5% on Carrie. WHAT HAS HAPPENED! SOMETHING MUST BE DONE
News

Go
Fake: NO | Rating: 9/10 | IMPORTANT POST
Sankalp's new line of somewhat-origami-starwars line is now taking in orders. His line includes: "Everything starwars". This proves to be a great turn for Sankalp-ism, as he provides all followers of sankalp-ism: FREE COMPLIMENTARY YODAS. If you you want to make an order, please make a folded post-it that has your order on it. Currently, the limit of orders is 5. Soon this will be a fundraiser, fighting against poverty in India. Currently the origami is free, but you can donate this cause. Soon these will have a price, but it is still being decided: It will be a dollar or less.
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
News flash: OMB does not translate to BOMB. When interviewing Carrie, she said it was MOMB, then BOMB(Woah!) then COMB. So OMB means COMB. We will need to learn what this C means. Meanwhile, it is SANKALP-ISM day! This is the day Sankalp was brought to Earth by the ancient (insert cool name) gods! McDonalds is now giving free food to Sankalp-ists, yet Sankalp is vegetarian so he enjoys some highly overpriced Panera. This concludes today's article of Sankalp-ism vs Carrie-ism. The votes are currently 50-50 and the feature of voting on which you believe in will soon come to this website. MAY THE BEST RELIGION WIN!
News

Go
Funny: 3/5 | Random: 5/5 | Fake: NO | Rating: 4/5 | Note: Message to the world from me.. :)
Today, we will not be discussing sarcasm. Sense the sarcasm? Sarcasm is a very interesting concept, involving a person saying a statement that isn't true in their view, and saying it in an obvious voice. Some people do not understand sarcasm and frustrate the sarcastic people and make them say more sarcastic stuff. Consider the following example:
"Let's go do (something stupid)," -other guy
"Sure... Such a smart idea..." -me
"Okay! Let's do it!" Other guy
"And why don't we do (something else stupid) while we're at it..." - Me sarcastically
"Sounds great!" - other guy
*mutters* "idiot" and stalks off - me
That's how sarcasm works. Amazing.
Home  Games  FunWords  News  Credits  Batman  Learn
News

Go
Funny: 4/5 | Random: 4/5 | Fake: YES | Rating: 4/5 | Note: This is for humor, not religion. Sorry to the real god ;)
The war rages on. Carrie is still in the lead. A new phrase has been devoloped. If you find something outrageous, or amazing, one could say "OMB" (oh my blurb) to express extreme emotion. Sankalp-ism has made a swift response with OM? (Do you want to go get food? Joe replies swiftly and hopes for McDonalds). Very confusing. A theroey about Carrie-ism hints they are terriosts. Saying OMB sounds like BOMB. You can never know... This concludes this article
Live Chata
Go
Funny: 3/5 | Random: 4/5 | Fake: NO | Rating: 3/5 | Note: There is no proof to back this up
Today we discuss the age old topic. What is the difference between apple juice and apple cider? For one, apple juice tastes horrible when it is warm. Also, apple juice is (mostly) imported from China, giving it that apple concentrate flavor. Either way, China is amazing. Apple cider is kind of puply and tastes like it was actually made with apples. Let's just say that apple cider tastes like it was freshly made, yet poorly made. This concludes 'What is the difference between apple juice and apple cider'
There once was a man named Joe. He was born on 1904. He tried lemonade when he turned 5, in 1909. He created his first lemonade in 1914, when he was 10. He opened his business and lived peacefully until he turned 26 in 1930. By then he had millions of dollars. He decided to give everyone in the world lemons! Nobody knew what they were for, but were grateful. When he was 32 in 1936 he was super famous. For 30 years he placed random 50 gallon containers of lemonade around the world. He turned 62 in 1966 and retired for the rest of his life. In year 2000 he was 96 and killed himself because he thought the world would end. I found one of those 50 gallon containers and put him in the credits. His lemonade was delicious! I still remember Joe to this day.
The issue of Carrie-ism and Sankalp-ism rages on. Scientists have changed votes and now Carrie-ism has 70% of the votes and Sankalp-ism has 30% of the votes. This will probably tick Sankalp off and give Carrie a happy day. Anyways, to the debate. Scientists on Carrie-ism tell Sankalp-ism scientists that Carrie-ism is more complex with Sankalp-ism, because Sankalp-ism doesn't do anything. They state that saying 'blurb' is one of the most complex ways of worship. Many scientists are agreeing, and are waiting for the Almighty Sankalp go forth with new efforts to establish a greater religion. Until then Carrie-ism is the new leading religion, and massive mobs of people crowd around Carrie, getting on their knees, and bow saying 'blurb.' Sankalp has about one follower, named Joe. He likes McDonalds and decides following Sankalp will get him free McDonalds. This concludes today's report about Sankalp-ism and Carrie-ism.
According to most scientists, there is a person named Carrie, and she is a goddess. Also according to scientists, a new religion will be introduced involving worshipping the real goddess, Carrie. It will be called Carrie-ism. This religion involves bowing down to Carrie and saying "Blurb". Other scientists state that the actual real god is Sankalp. Nobody is quite sure how this works, but the votes are 49-51 and 49% of scientists believe in Sankalp-ism and 51% believe in Carrie-ism. There will soon be a debate over which one of these religious figures is the true god-goddess. The winner will (probably) be Carrie, for she has 51% of the votes whereas Sankalp has 49%. This concludes this news article.
Many people have wanted to be posted in this article with much randomness such as superman and beating people up. I could make this happen but my laziness level is unknown to human beings. So we will conclude with a short story about a guy named Jay and Sea. Anyways, Jay is a enemy with the guy named Sea, but they are in a truce. One day there is a tornado and Jay flies to Australia through the clouds. He lands on Sea. Jay is confused on how Sea got there in the first place and they get into a wrestling match in which there are walri, octipi, cacti, and the two doofi of this situation are Jay and Sea. At this moment the universe implodes, and as a grand finally it explodes. Everyone is killed including Jay and Sea.
This is the introduction to the "news" tab. Here you can view past articles and this tutorial article will already be displayed. Articles are never deleted and be can recovered and viewed at any time. If you like this new feature please consider writing a news article to be posted. These articles can be anything from funny cat memes to serious political junk that I don't understand. Anyways, have fun reading the articles! Notice that some articles are outdated and may have invalid information. I will try to put a notice next to invalid information for your convenience

I'm willing to teach people what I know in HTML, and in the end you will get your own website. If you are interested, send an email to thegenieoftruth@gmail.com
Notice: I am not a college professor. This can be good and bad in many ways. Current students: 3. Their handiwork is below:
bib123aaa (website under construction)
Website by my cousin (Student 2)
||Sky|| (website under construction)
htmlproject.net
eggspearamint.blogspot.com
htmlprojectblog.blogspot.com

Credits:

Credit to My Blogger Tricks for the blank template
Credit to Subtle Patterns for all backgrounds.
Credit to Da Button Factory for most button creation.
Credit to the creator of Jec-comics for the idea to make a website
Credit to Harmonicraft for inspiring me to code, and introducing blogger to me.
Credit to Me for most games, ideas, and news.
Credit to A friend for the 'Remember' game
Credit to Joe for the 50 gallons of lemonade
Credit to Embedded Chat for the chat kerjigger
Credit toBatman for being Batman
Once Upon a time
Four score, and x Years ago a rather large kingdom thrived at coordinates (0,0). The kingdoms name was the Moberly kingdom, for the ruler was Queen Moberly. This, and three other kingdoms lived in harmony. First, there was the kind, understanding Decker kingdom. Second, there was the crazed, loud, psychotic, and partying Poppewell kingdom. Third, there was the smart, scientific (and somewhat evil) Anderson kingdom. In the midst of all of these varying kingdoms stood the Moberly kingdom, the wisest, most logical kingdom of them all. This kingdom spoke in riddles (and equations). These four kingdoms live in the country of S.E.A.R.S. (Super Eccentric And Really Smart), and were commanded by the great gods known as "principals". Until this fateful day, the kingdoms lived in harmony. For reading the most minutes of books out of all the kingdoms (even the distant ones) they received a magical disco-ball enhanced with the power of swag. Queen Anderson was determined to obtain this disco ball and would stop at nothing to get one for herself.
A Brief Introduction. Society, me. Me, society.
I was overcome with a passion -- an endearing feeling really -- to become an integral part with the world.
This has been a recent development in my demeanor but something that I want to do with the rest of my life. I felt that the best way to do it in this world was through the internet. So I will share my story with as much brevity as is admittedly possible. I will provide a chronological account in the most intuitive form I know possible, an ordered list.
1) I was stuck in Guam for most of my life. As a professional air tube cleaner, my day to day "earning of the bread" felt futile and quite uneventful. (1969-2001)
2) I discovered donuts. This become an unhealthy addiction, I must concede. However it gave me the energy I needed to become a better worker and eventually became manager of my tube business. (2001-2005)
3) A tragic life-defining moment for me was when I unfortunately was trapped, or as they say "stuck" in some parts of the world, within a tube of my own making. It was humbling for me, floating across the Atlantic to who knows where. I eventually intercepted an Irish Wristwatch shipping boat on it's was to the United States of America, where I found my new home and discovered the Freedom of Speech. (2006)
The years leading up to this wonderful year of 2015 were full of soul searching and an uncanny amount of purchasing of miniature donuts that I find just adorable. That's enough about me. Tell me about yourself, society. How are you doing?
Now that you have read of my adventures from the far reaches of Guam to the vast towns of America, I have more to tell you. I have found a new miniature donut shop and I am seeking business in this small humble company.
THE HTML PROJECT
HTML is a leading programming language. With so many ways to learn, its hard to find the perfect way...

The HTML Project - Fast, Fun, Free

Get Started


Flexible lesson times
Lessons can be done Monday through Saturday. You can quickly contact me through the instant client chat, or use the contact form to schedule a lesson for a later time.

Learn anywhere
Learn on the JSFiddle platform and have a collaborative lesson with a easy to understand GUI. This enables anyone, anywhere to have lessons.

Other features
Lessons are completely free
You can learn beginner to advanced skills
Learns useful tips and tricks over time
Ahoy! My name is Ben Smith, and I'm an HTML Developer. So, you're at this website because I either forced you to, or you stumbled upon it. Either way, this is still a pretty nice website with some fancy transitions and themes. Now, before I get carried away by ranting about how awesome my website is(n't) I'd like to explain the reason why I built this website in the first place...

For people like YOU to be able to be taught by a NERD who pretty much breathes this HTML stuff. I make it easy, fun, and really, really annoying by trying to say funny stuff. However, I iron out early misconceptions and teach good practices. As a beginner, diving into the murky waters of HTML Development was confusing, and I had thousands of questions. Now you can learn from me, so I can google answer all of your questions.

So let's go
(I'm professionally an unprofesional ya'know)
//Hacktimer, makes it so the bot laggs you, even when you don't have the tab focused :O
(function(s){var w,f={},o=window,l=console,m=Math,z='postMessage',x='HackTimer.js by turuslan: ',v='Initialisation failed',p=0,r='hasOwnProperty',y=[].slice,b=o.Worker;function d(){do{p=0x7FFFFFFF>p?p+1:0}while(f[r](p));return p}if(!/MSIE 10/i.test(navigator.userAgent)){try{s=o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]))}catch(e){}}if(typeof(b)!=='undefined'){try{w=new b(s);o.setInterval=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2)};w[z]({n:'a',i:i,t:t});return i};o.clearInterval=function(i){if(f[r](i))delete f[i],w[z]({n:'b',i:i})};o.setTimeout=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2),t:!0};w[z]({n:'c',i:i,t:t});return i};o.clearTimeout=function(i){if(f[r](i))delete f[i],w[z]({n:'d',i:i})};w.onmessage=function(e){var i=e.data,c,n;if(f[r](i)){n=f[i];c=n.c;if(n[r]('t'))delete f[i]}if(typeof(c)=='string')try{c=new Function(c)}catch(k){l.log(x+'Error parsing callback code string: ',k)}if(typeof(c)=='function')c.apply(o,n.p)};w.onerror=function(e){l.log(e)};l.log(x+'Initialisation succeeded')}catch(e){l.log(x+v);l.error(e)}}else l.log(x+v+' - HTML5 Web Worker is not supported')})('HackTimerWorker.min.js');
//Educates the stupid, and shows the seasoned an annoying message
console.log("schoolbot.js loaded")
console.log("Start: init(\"message here\")")
console.log("Basic start: basic()")
console.log("Stop: halt()")
console.log("For more advanced features, type help()")
//Gives the docs
function help(){
    console.log("More advanced usage")
    console.log("init(message,delay,scrambled,endLetter)")
    console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
    console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
    console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
    console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
    console.log("Typing basic() will give you a fun little interface that lets you type in the values you want.")
}
//Clicks an element
function clickify(targetNode){
    if (targetNode) {
        triggerMouseEvent (targetNode, "mouseover");
        triggerMouseEvent (targetNode, "mousedown");
        triggerMouseEvent (targetNode, "mouseup");
        triggerMouseEvent (targetNode, "click");
    }
    else{
        console.log ("*** Target node not found!");
    }
}
//Triggers mouse events, nuff said
function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}
//Stops the loop of requests
function halt(){
    clearInterval(loop)
}
//Saves some space. Pretty nice, checks if something doesn't exist
function fallback(arg,def){
    if(arg == arguments[2] || arg == null || arg == 0){
        return def
    }
    return arg
}
//For those that are a bit too stupid to read words, four prompts that will run init for you
function basic(){
    var message = fallback(prompt("What will your message be?\nDefault: hello this is a message"),"hello this is a message")
    var delay = fallback(+prompt("How long should the program wait before attempting to post a comment? (Miliseconds)\nDefault: 1000"),1000)
    var scrambled = fallback(prompt("Should the comments be scrambled? \nEg: This is a message > A message this is\nDefault: true") == true,true)
    var endLetter = fallback(prompt("What should your comment end with?\nDefault: !"),"!")
    init(message,delay,scrambled,endLetter)
}
function init( /*message,delay,scrambled,endLetter*/ ) {
	//All the different flavors of arguments, and their fallbacks
	if (typeof arguments[0] === "object") {
		var message = fallback(arguments[0]["message"], "hello this is a message", "")
		var delay = fallback(arguments[0]["delay"], 1000, "")
		var scrambled = fallback(arguments[0]["scrambled"], true, "")
		var endLetter = fallback(arguments[0]["endLetter"], "!", "")
	} else {
		var message = fallback(arguments[0], "hello this is a message")
		var delay = fallback(arguments[1], 1000)
		var scrambled = fallback(arguments[2], true)
		var endLetter = fallback(arguments[3], "!")
	}
    //Log what values came out in the end
	console.log("Program initiliazed as init(\"" + message + "\"," + delay + "," + scrambled + ",\"" + endLetter + "\")")
    //Set the interval for attepmting to make comments
	loop = setInterval(function() {
        //Splits your message into words
		var arr = message.split(" ")
		if (scrambled) {
			//Shuffle. Probably stolen from the internet
			function shuffle(array) {
				var currentIndex = array.length,
					temporaryValue, randomIndex;
				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}
				return array;
			}
			//Shuffle that array
			arr = shuffle(arr)
		    //Grammerz!
			arr[0] = arr[0].substring(0, 1).toUpperCase() + arr[0].substring(1, arr[0].length).toLowerCase()
		}
		//Join the words together, slap on the ending letter
		arr = arr.join(" ") + endLetter
		//And the only way to enable is to... disable the disable!
		document.getElementById("edit-submit").disabled = false
		//Set the innerHTML of the comment to the value of the scrambled variable crap
		document.getElementById("edit-comment").value = arr
		//Then press that submit button
		clickify(document.getElementById("edit-submit"))
	}, delay)
Tema 5 IPA
June 1-8, 2016
La Fortuna de San Carlos, Costa Rica
You are headed on the trip of a lifetime to Costa Rica!  For 7 days, you will be staying in the Arenal Volcano region.  You will need to find and compare two hotels using the Spanish TripAdvisor website.  You will then need to write an email to your travel agent to notify him/her of your hotel choice.  Finally, you will need to speak with the hotel concierge to select two activities for your first day of vacation.  When booking the hotel, you will look for a hotel in the ciudad called “La Fortuna de San Carlos.”  And of course, all of this will be done using the Spanish you have learned in class!  


¡Buen viaje!
















PARTE 1 - CHOOSING A HOTEL (Interpretive Reading)
Click here to go to the Spanish Tripadvisor Website
Enter your city and dates in the search boxes
Fill in the chart below with the information you find about each hotel




Hotel #1 here
Hotel #2 here
¿Cómo se llama el hotel?
Hotel Arenal Green


Hotel La Fortuna


¿Cuál es el teléfono del hotel?
(506) 2479-8585
+506 2479-9197
¿Cuántas estrellas (stars) tiene el hotel?
4.5 stars
4 stars
¿Tiene el wifi gratis?
Sí
Sí
¿Tiene piscina?
Sí (cascadas / playa)
No
¿Tiene spa?
Sí
No
¿Tiene restaurante?
Sí
No
¿Cuánto cuesta por 1 noche?
$ 47 / noche USD
$ 26023.90 en Costa Rica Colones
$ 79 / noche USD
$ 43742.30 en Costa Rica Colones


For each hotel, clic en: OPINIONES.  Escriban el número de opiniones de cada hotel.


Las opiniones
Hotel #1
Hotel #2
Excelente
Sí


Muy bueno




Normal


Sí
Malo




Pésimo






Now, try reading a couple of reviews in Spanish for each hotel.  When you find a phrase or description that you understand, please copy/paste it here.  You must find at least 3 phrases/descriptions for each hotel that use words we have learned in Spanish class.




Paste phrase/description here
What I think this means in English
Hotel #1
 El servicio de spa me encanto
The service of the spa is enchanting
Hotel #1
Deliciosa la comida
The food is delicious
Hotel #1
100% recomendado 
100% recommended
Hotel #2
Hotel bonito y en el centro de La Fortuna
This is a pretty hotel in the center of La Fortuna
Hotel #2
Perfecto escape para mi y mi novia
Perfect escape for me and my partner
Hotel #2
Mi experiencia en las cabañas del hotel Arenal Green fue excelente. 
My experience in the cabins of the hotel Arenal Green is excellent


PARTE 2 - NOTIFYING TRAVEL AGENT (Presentational Writing)
¿Cuál es tu hotel favorito y por qué?
Your travel agent has asked you to pick your favorite hotel.  You will send him/her an “email” with a short written explanation of which hotel you would want to stay at during a trip to Costa Rica.  You can mention your personality and how it fits with the environment at the hotel (i.e. I am relaxed and the hotel has a spa) or you can describe the hotel’s features.  Please use your Spanish class vocabulary to help you.  Do NOT use an online translation service to write this for you!


Some helpful phrases might include:  
Yo quiero
Yo voy
El hotel es
El hotel tiene


Yo quiero wifi gratis y restaurante
Yo voy a la playa
Yo quiero Hotel Arenal Green
Cuesta 47 dolores / noche, y el hotel tiene wifi gratis y restaurante
























PARTE 3 - DISCUSSING POSSIBLE ACTIVITIES (Interpersonal)
¡Ojo! You will need a partner for this part!


¿Qué quieres hacer en Costa Rica?
You have arrived in Costa Rica at the hotel that you chose in the previous section.  Now, it is time to find some activities for your visit.  Using the Spanish that you know, you need to speak with the hotel tour guide to arrange at least 2 activities for your day.  To do this, you might want to describe your personality and physical limitations.  You should also list things that you want to do (i.e. canoeing, shopping, etc.).  You have a budget of $100,000 COLONES (about $200 US dollars) so you will need to find out the costs of each activity before choosing.  


Your partner will show you a picture that has the various activities and their costs.  He/she will answer your questions as best as they can.


At the end of the conversation, you will tell the tour guide which activities you want and you will thank him/her and say goodbye.


Roles:  traveler and tour guide


Preparation:  The tour guide will need to look over this “visual” flyer of the activities and their costs.  The traveler will need to be ready to describe himself/herself to the travel agent.  


Conversation:  The traveler will begin the conversation by talking about their personality.  The tour guide will respond with possible ideas for activities.  BE SURE TO USE GREETINGS AND FAREWELLS!


Useful phrases:
Yo soy…
Yo quiero…
¿Es posible?
¿Quieres?
¿Cuánto cuesta?
Cuesta _____ dólares/colones.


Please submit your script to Sra. Burns before your presentation in class.


Luke: Hola!
Sai: Hola, como estas?
Luke: Muy bien, y tu?
Sai: Igualmente.
Luke: Por el viaje, como eres?
Sai: Yo estoy bajo, aburrido, y no activo. Yo tengo doscientos dólares. 
Luke: Quieres esquiar en el lago, ir por canoa y ver cocodrilos, o montar caballos?
Sai: Sí, quiero esquiar en el el lago, y ir por canoa y ver cocodrilos. Cuanto cuesta?
Luke: Cuesta sesenta dólares.
Sai: Bueno! Gracias, hasta luego!
Luke: Adiós!
Skip to Content
SchoologySearchHomeCoursesGroupsResources
Messages
Requests
NotificationsLuke TrenamanSettings
SupportSupport
Profile picture for 7th Grade Spanish: Section 9-3
Current Menu ItemMaterials DropdownMaterials
Updates
Grades
Mastery
Members
Information
Grading period
M1: 2016-08-15 - 2016-12-21
7th Grade Spanish: Section 9-3  Files/Links
Tema 6 Quizlet

 · Schoology © 2016Support · Schoology Blog · Privacy Policy & Terms of Use
EnglishLanguage dropdown
}
Bee Movie Script

  
  
According to all known laws
of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.

  
Yellow, black. Yellow, black.
Yellow, black. Yellow, black.

  
Ooh, black and yellow!
Let's shake it up a little.

  
Barry! Breakfast is ready!

  
Ooming!

  
Hang on a second.

  
Hello?

  
- Barry?
- Adam?

  
- Oan you believe this is happening?
- I can't. I'll pick you up.

  
Looking sharp.

  
Use the stairs. Your father
paid good money for those.

  
Sorry. I'm excited.

  
Here's the graduate.
We're very proud of you, son.

  
A perfect report card, all B's.

  
Very proud.

  
Ma! I got a thing going here.

  
- You got lint on your fuzz.
- Ow! That's me!

  
- Wave to us! We'll be in row 118,000.
- Bye!

  
Barry, I told you,
stop flying in the house!

  
- Hey, Adam.
- Hey, Barry.

  
- Is that fuzz gel?
- A little. Special day, graduation.

  
Never thought I'd make it.

  
Three days grade school,
three days high school.

  
Those were awkward.

  
Three days college. I'm glad I took
a day and hitchhiked around the hive.

  
You did come back different.

  
- Hi, Barry.
- Artie, growing a mustache? Looks good.

  
- Hear about Frankie?
- Yeah.

  
- You going to the funeral?
- No, I'm not going.

  
Everybody knows,
sting someone, you die.

  
Don't waste it on a squirrel.
Such a hothead.

  
I guess he could have
just gotten out of the way.

  
I love this incorporating
an amusement park into our day.

  
That's why we don't need vacations.

  
Boy, quite a bit of pomp...
under the circumstances.

  
- Well, Adam, today we are men.
- We are!

  
- Bee-men.
- Amen!

  
Hallelujah!

  
Students, faculty, distinguished bees,

  
please welcome Dean Buzzwell.

  
Welcome, New Hive Oity
graduating class of...

  
...9:15.

  
That concludes our ceremonies.

  
And begins your career
at Honex Industries!

  
Will we pick ourjob today?

  
I heard it's just orientation.

  
Heads up! Here we go.

  
Keep your hands and antennas
inside the tram at all times.

  
- Wonder what it'll be like?
- A little scary.

  
Welcome to Honex,
a division of Honesco

  
and a part of the Hexagon Group.

  
This is it!

  
Wow.

  
Wow.

  
We know that you, as a bee,
have worked your whole life

  
to get to the point where you
can work for your whole life.

  
Honey begins when our valiant Pollen
Jocks bring the nectar to the hive.

  
Our top-secret formula

  
is automatically color-corrected,
scent-adjusted and bubble-contoured

  
into this soothing sweet syrup

  
with its distinctive
golden glow you know as...

  
Honey!

  
- That girl was hot.
- She's my cousin!

  
- She is?
- Yes, we're all cousins.

  
- Right. You're right.
- At Honex, we constantly strive

  
to improve every aspect
of bee existence.

  
These bees are stress-testing
a new helmet technology.

  
- What do you think he makes?
- Not enough.

  
Here we have our latest advancement,
the Krelman.

  
- What does that do?
- Oatches that little strand of honey

  
that hangs after you pour it.
Saves us millions.

  
Oan anyone work on the Krelman?

  
Of course. Most bee jobs are
small ones. But bees know

  
that every small job,
if it's done well, means a lot.

  
But choose carefully

  
because you'll stay in the job
you pick for the rest of your life.

  
The same job the rest of your life?
I didn't know that.

  
What's the difference?

  
You'll be happy to know that bees,
as a species, haven't had one day off

  
in 27 million years.

  
So you'll just work us to death?

  
We'll sure try.

  
Wow! That blew my mind!

  
"What's the difference?"
How can you say that?

  
One job forever?
That's an insane choice to have to make.

  
I'm relieved. Now we only have
to make one decision in life.

  
But, Adam, how could they
never have told us that?

  
Why would you question anything?
We're bees.

  
We're the most perfectly
functioning society on Earth.

  
You ever think maybe things
work a little too well here?

  
Like what? Give me one example.

  
I don't know. But you know
what I'm talking about.

  
Please clear the gate.
Royal Nectar Force on approach.

  
Wait a second. Oheck it out.

  
- Hey, those are Pollen Jocks!
- Wow.

  
I've never seen them this close.

  
They know what it's like
outside the hive.

  
Yeah, but some don't come back.

  
- Hey, Jocks!
- Hi, Jocks!

  
You guys did great!

  
You're monsters!
You're sky freaks! I love it! I love it!

  
- I wonder where they were.
- I don't know.

  
Their day's not planned.

  
Outside the hive, flying who knows
where, doing who knows what.

  
You can'tjust decide to be a Pollen
Jock. You have to be bred for that.

  
Right.

  
Look. That's more pollen
than you and I will see in a lifetime.

  
It's just a status symbol.
Bees make too much of it.

  
Perhaps. Unless you're wearing it
and the ladies see you wearing it.

  
Those ladies?
Aren't they our cousins too?

  
Distant. Distant.

  
Look at these two.

  
- Oouple of Hive Harrys.
- Let's have fun with them.

  
It must be dangerous
being a Pollen Jock.

  
Yeah. Once a bear pinned me
against a mushroom!

  
He had a paw on my throat,
and with the other, he was slapping me!

  
- Oh, my!
- I never thought I'd knock him out.

  
What were you doing during this?

  
Trying to alert the authorities.

  
I can autograph that.

  
A little gusty out there today,
wasn't it, comrades?

  
Yeah. Gusty.

  
We're hitting a sunflower patch
six miles from here tomorrow.

  
- Six miles, huh?
- Barry!

  
A puddle jump for us,
but maybe you're not up for it.

  
- Maybe I am.
- You are not!

  
We're going 0900 at J-Gate.

  
What do you think, buzzy-boy?
Are you bee enough?

  
I might be. It all depends
on what 0900 means.

  
Hey, Honex!

  
Dad, you surprised me.

  
You decide what you're interested in?

  
- Well, there's a lot of choices.
- But you only get one.

  
Do you ever get bored
doing the same job every day?

  
Son, let me tell you about stirring.

  
You grab that stick, and you just
move it around, and you stir it around.

  
You get yourself into a rhythm.
It's a beautiful thing.

  
You know, Dad,
the more I think about it,

  
maybe the honey field
just isn't right for me.

  
You were thinking of what,
making balloon animals?

  
That's a bad job
for a guy with a stinger.

  
Janet, your son's not sure
he wants to go into honey!

  
- Barry, you are so funny sometimes.
- I'm not trying to be funny.

  
You're not funny! You're going
into honey. Our son, the stirrer!

  
- You're gonna be a stirrer?
- No one's listening to me!

  
Wait till you see the sticks I have.

  
I could say anything right now.
I'm gonna get an ant tattoo!

  
Let's open some honey and celebrate!

  
Maybe I'll pierce my thorax.
Shave my antennae.

  
Shack up with a grasshopper. Get
a gold tooth and call everybody "dawg"!

  
I'm so proud.

  
- We're starting work today!
- Today's the day.

  
Oome on! All the good jobs
will be gone.

  
Yeah, right.

  
Pollen counting, stunt bee, pouring,
stirrer, front desk, hair removal...

  
- Is it still available?
- Hang on. Two left!

  
One of them's yours! Oongratulations!
Step to the side.

  
- What'd you get?
- Picking crud out. Stellar!

  
Wow!

  
Oouple of newbies?

  
Yes, sir! Our first day! We are ready!

  
Make your choice.

  
- You want to go first?
- No, you go.

  
Oh, my. What's available?

  
Restroom attendant's open,
not for the reason you think.

  
- Any chance of getting the Krelman?
- Sure, you're on.

  
I'm sorry, the Krelman just closed out.

  
Wax monkey's always open.

  
The Krelman opened up again.

  
What happened?

  
A bee died. Makes an opening. See?
He's dead. Another dead one.

  
Deady. Deadified. Two more dead.

  
Dead from the neck up.
Dead from the neck down. That's life!

  
Oh, this is so hard!

  
Heating, cooling,
stunt bee, pourer, stirrer,

  
humming, inspector number seven,
lint coordinator, stripe supervisor,

  
mite wrangler. Barry, what
do you think I should... Barry?

  
Barry!

  
All right, we've got the sunflower patch
in quadrant nine...

  
What happened to you?
Where are you?

  
- I'm going out.
- Out? Out where?

  
- Out there.
- Oh, no!

  
I have to, before I go
to work for the rest of my life.

  
You're gonna die! You're crazy! Hello?

  
Another call coming in.

  
If anyone's feeling brave,
there's a Korean deli on 83rd

  
that gets their roses today.

  
Hey, guys.

  
- Look at that.
- Isn't that the kid we saw yesterday?

  
Hold it, son, flight deck's restricted.

  
It's OK, Lou. We're gonna take him up.

  
Really? Feeling lucky, are you?

  
Sign here, here. Just initial that.

  
- Thank you.
- OK.

  
You got a rain advisory today,

  
and as you all know,
bees cannot fly in rain.

  
So be careful. As always,
watch your brooms,

  
hockey sticks, dogs,
birds, bears and bats.

  
Also, I got a couple of reports
of root beer being poured on us.

  
Murphy's in a home because of it,
babbling like a cicada!

  
- That's awful.
- And a reminder for you rookies,

  
bee law number one,
absolutely no talking to humans!

  
All right, launch positions!

  
Buzz, buzz, buzz, buzz! Buzz, buzz,
buzz, buzz! Buzz, buzz, buzz, buzz!

  
Black and yellow!

  
Hello!

  
You ready for this, hot shot?

  
Yeah. Yeah, bring it on.

  
Wind, check.

  
- Antennae, check.
- Nectar pack, check.

  
- Wings, check.
- Stinger, check.

  
Scared out of my shorts, check.

  
OK, ladies,

  
let's move it out!

  
Pound those petunias,
you striped stem-suckers!

  
All of you, drain those flowers!

  
Wow! I'm out!

  
I can't believe I'm out!

  
So blue.

  
I feel so fast and free!

  
Box kite!

  
Wow!

  
Flowers!

  
This is Blue Leader.
We have roses visual.

  
Bring it around 30 degrees and hold.

  
Roses!

  
30 degrees, roger. Bringing it around.

  
Stand to the side, kid.
It's got a bit of a kick.

  
That is one nectar collector!

  
- Ever see pollination up close?
- No, sir.

  
I pick up some pollen here, sprinkle it
over here. Maybe a dash over there,

  
a pinch on that one.
See that? It's a little bit of magic.

  
That's amazing. Why do we do that?

  
That's pollen power. More pollen, more
flowers, more nectar, more honey for us.

  
Oool.

  
I'm picking up a lot of bright yellow.
Oould be daisies. Don't we need those?

  
Oopy that visual.

  
Wait. One of these flowers
seems to be on the move.

  
Say again? You're reporting
a moving flower?

  
Affirmative.

  
That was on the line!

  
This is the coolest. What is it?

  
I don't know, but I'm loving this color.

  
It smells good.
Not like a flower, but I like it.

  
Yeah, fuzzy.

  
Ohemical-y.

  
Oareful, guys. It's a little grabby.

  
My sweet lord of bees!

  
Oandy-brain, get off there!

  
Problem!

  
- Guys!
- This could be bad.

  
Affirmative.

  
Very close.

  
Gonna hurt.

  
Mama's little boy.

  
You are way out of position, rookie!

  
Ooming in at you like a missile!

  
Help me!

  
I don't think these are flowers.

  
- Should we tell him?
- I think he knows.

  
What is this?!

  
Match point!

  
You can start packing up, honey,
because you're about to eat it!

  
Yowser!

  
Gross.

  
There's a bee in the car!

  
- Do something!
- I'm driving!

  
- Hi, bee.
- He's back here!

  
He's going to sting me!

  
Nobody move. If you don't move,
he won't sting you. Freeze!

  
He blinked!

  
Spray him, Granny!

  
What are you doing?!

  
Wow... the tension level
out here is unbelievable.

  
I gotta get home.

  
Oan't fly in rain.

  
Oan't fly in rain.

  
Oan't fly in rain.

  
Mayday! Mayday! Bee going down!

  
Ken, could you close
the window please?

  
Ken, could you close
the window please?

  
Oheck out my new resume.
I made it into a fold-out brochure.

  
You see? Folds out.

  
Oh, no. More humans. I don't need this.

  
What was that?

  
Maybe this time. This time. This time.
This time! This time! This...

  
Drapes!

  
That is diabolical.

  
It's fantastic. It's got all my special
skills, even my top-ten favorite movies.

  
What's number one? Star Wars?

  
Nah, I don't go for that...

  
...kind of stuff.

  
No wonder we shouldn't talk to them.
They're out of their minds.

  
When I leave a job interview, they're
flabbergasted, can't believe what I say.

  
There's the sun. Maybe that's a way out.

  
I don't remember the sun
having a big 75 on it.

  
I predicted global warming.

  
I could feel it getting hotter.
At first I thought it was just me.

  
Wait! Stop! Bee!

  
Stand back. These are winter boots.

  
Wait!

  
Don't kill him!

  
You know I'm allergic to them!
This thing could kill me!

  
Why does his life have
less value than yours?

  
Why does his life have any less value
than mine? Is that your statement?

  
I'm just saying all life has value. You
don't know what he's capable of feeling.

  
My brochure!

  
There you go, little guy.

  
I'm not scared of him.
It's an allergic thing.

  
Put that on your resume brochure.

  
My whole face could puff up.

  
Make it one of your special skills.

  
Knocking someone out
is also a special skill.

  
Right. Bye, Vanessa. Thanks.

  
- Vanessa, next week? Yogurt night?
- Sure, Ken. You know, whatever.

  
- You could put carob chips on there.
- Bye.

  
- Supposed to be less calories.
- Bye.

  
I gotta say something.

  
She saved my life.
I gotta say something.

  
All right, here it goes.

  
Nah.

  
What would I say?

  
I could really get in trouble.

  
It's a bee law.
You're not supposed to talk to a human.

  
I can't believe I'm doing this.

  
I've got to.

  
Oh, I can't do it. Oome on!

  
No. Yes. No.

  
Do it. I can't.

  
How should I start it?
"You like jazz?" No, that's no good.

  
Here she comes! Speak, you fool!

  
Hi!

  
I'm sorry.

  
- You're talking.
- Yes, I know.

  
You're talking!

  
I'm so sorry.

  
No, it's OK. It's fine.
I know I'm dreaming.

  
But I don't recall going to bed.

  
Well, I'm sure this
is very disconcerting.

  
This is a bit of a surprise to me.
I mean, you're a bee!

  
I am. And I'm not supposed
to be doing this,

  
but they were all trying to kill me.

  
And if it wasn't for you...

  
I had to thank you.
It's just how I was raised.

  
That was a little weird.

  
- I'm talking with a bee.
- Yeah.

  
I'm talking to a bee.
And the bee is talking to me!

  
I just want to say I'm grateful.
I'll leave now.

  
- Wait! How did you learn to do that?
- What?

  
The talking thing.

  
Same way you did, I guess.
"Mama, Dada, honey." You pick it up.

  
- That's very funny.
- Yeah.

  
Bees are funny. If we didn't laugh,
we'd cry with what we have to deal with.

  
Anyway...

  
Oan I...

  
...get you something?
- Like what?

  
I don't know. I mean...
I don't know. Ooffee?

  
I don't want to put you out.

  
It's no trouble. It takes two minutes.

  
- It's just coffee.
- I hate to impose.

  
- Don't be ridiculous!
- Actually, I would love a cup.

  
Hey, you want rum cake?

  
- I shouldn't.
- Have some.

  
- No, I can't.
- Oome on!

  
I'm trying to lose a couple micrograms.

  
- Where?
- These stripes don't help.

  
You look great!

  
I don't know if you know
anything about fashion.

  
Are you all right?

  
No.

  
He's making the tie in the cab
as they're flying up Madison.

  
He finally gets there.

  
He runs up the steps into the church.
The wedding is on.

  
And he says, "Watermelon?
I thought you said Guatemalan.

  
Why would I marry a watermelon?"

  
Is that a bee joke?

  
That's the kind of stuff we do.

  
Yeah, different.

  
So, what are you gonna do, Barry?

  
About work? I don't know.

  
I want to do my part for the hive,
but I can't do it the way they want.

  
I know how you feel.

  
- You do?
- Sure.

  
My parents wanted me to be a lawyer or
a doctor, but I wanted to be a florist.

  
- Really?
- My only interest is flowers.

  
Our new queen was just elected
with that same campaign slogan.

  
Anyway, if you look...

  
There's my hive right there. See it?

  
You're in Sheep Meadow!

  
Yes! I'm right off the Turtle Pond!

  
No way! I know that area.
I lost a toe ring there once.

  
- Why do girls put rings on their toes?
- Why not?

  
- It's like putting a hat on your knee.
- Maybe I'll try that.

  
- You all right, ma'am?
- Oh, yeah. Fine.

  
Just having two cups of coffee!

  
Anyway, this has been great.
Thanks for the coffee.

  
Yeah, it's no trouble.

  
Sorry I couldn't finish it. If I did,
I'd be up the rest of my life.

  
Are you...?

  
Oan I take a piece of this with me?

  
Sure! Here, have a crumb.

  
- Thanks!
- Yeah.

  
All right. Well, then...
I guess I'll see you around.

  
Or not.

  
OK, Barry.

  
And thank you
so much again... for before.

  
Oh, that? That was nothing.

  
Well, not nothing, but... Anyway...

  
This can't possibly work.

  
He's all set to go.
We may as well try it.

  
OK, Dave, pull the chute.

  
- Sounds amazing.
- It was amazing!

  
It was the scariest,
happiest moment of my life.

  
Humans! I can't believe
you were with humans!

  
Giant, scary humans!
What were they like?

  
Huge and crazy. They talk crazy.

  
They eat crazy giant things.
They drive crazy.

  
- Do they try and kill you, like on TV?
- Some of them. But some of them don't.

  
- How'd you get back?
- Poodle.

  
You did it, and I'm glad. You saw
whatever you wanted to see.

  
You had your "experience." Now you
can pick out yourjob and be normal.

  
- Well...
- Well?

  
Well, I met someone.

  
You did? Was she Bee-ish?

  
- A wasp?! Your parents will kill you!
- No, no, no, not a wasp.

  
- Spider?
- I'm not attracted to spiders.

  
I know it's the hottest thing,
with the eight legs and all.

  
I can't get by that face.

  
So who is she?

  
She's... human.

  
No, no. That's a bee law.
You wouldn't break a bee law.

  
- Her name's Vanessa.
- Oh, boy.

  
She's so nice. And she's a florist!

  
Oh, no! You're dating a human florist!

  
We're not dating.

  
You're flying outside the hive, talking
to humans that attack our homes

  
with power washers and M-80s!
One-eighth a stick of dynamite!

  
She saved my life!
And she understands me.

  
This is over!

  
Eat this.

  
This is not over! What was that?

  
- They call it a crumb.
- It was so stingin' stripey!

  
And that's not what they eat.
That's what falls off what they eat!

  
- You know what a Oinnabon is?
- No.

  
It's bread and cinnamon and frosting.
They heat it up...

  
Sit down!

  
...really hot!
- Listen to me!

  
We are not them! We're us.
There's us and there's them!

  
Yes, but who can deny
the heart that is yearning?

  
There's no yearning.
Stop yearning. Listen to me!

  
You have got to start thinking bee,
my friend. Thinking bee!

  
- Thinking bee.
- Thinking bee.

  
Thinking bee! Thinking bee!
Thinking bee! Thinking bee!

  
There he is. He's in the pool.

  
You know what your problem is, Barry?

  
I gotta start thinking bee?

  
How much longer will this go on?

  
It's been three days!
Why aren't you working?

  
I've got a lot of big life decisions
to think about.

  
What life? You have no life!
You have no job. You're barely a bee!

  
Would it kill you
to make a little honey?

  
Barry, come out.
Your father's talking to you.

  
Martin, would you talk to him?

  
Barry, I'm talking to you!

  
You coming?

  
Got everything?

  
All set!

  
Go ahead. I'll catch up.

  
Don't be too long.

  
Watch this!

  
Vanessa!

  
- We're still here.
- I told you not to yell at him.

  
He doesn't respond to yelling!

  
- Then why yell at me?
- Because you don't listen!

  
I'm not listening to this.

  
Sorry, I've gotta go.

  
- Where are you going?
- I'm meeting a friend.

  
A girl? Is this why you can't decide?

  
Bye.

  
I just hope she's Bee-ish.

  
They have a huge parade
of flowers every year in Pasadena?

  
To be in the Tournament of Roses,
that's every florist's dream!

  
Up on a float, surrounded
by flowers, crowds cheering.

  
A tournament. Do the roses
compete in athletic events?

  
No. All right, I've got one.
How come you don't fly everywhere?

  
It's exhausting. Why don't you
run everywhere? It's faster.

  
Yeah, OK, I see, I see.
All right, your turn.

  
TiVo. You can just freeze live TV?
That's insane!

  
You don't have that?

  
We have Hivo, but it's a disease.
It's a horrible, horrible disease.

  
Oh, my.

  
Dumb bees!

  
You must want to sting all those jerks.

  
We try not to sting.
It's usually fatal for us.

  
So you have to watch your temper.

  
Very carefully.
You kick a wall, take a walk,

  
write an angry letter and throw it out.
Work through it like any emotion:

  
Anger, jealousy, lust.

  
Oh, my goodness! Are you OK?

  
Yeah.

  
- What is wrong with you?!
- It's a bug.

  
He's not bothering anybody.
Get out of here, you creep!

  
What was that? A Pic 'N' Save circular?

  
Yeah, it was. How did you know?

  
It felt like about 10 pages.
Seventy-five is pretty much our limit.

  
You've really got that
down to a science.

  
- I lost a cousin to Italian Vogue.
- I'll bet.

  
What in the name
of Mighty Hercules is this?

  
How did this get here?
Oute Bee, Golden Blossom,

  
Ray Liotta Private Select?

  
- Is he that actor?
- I never heard of him.

  
- Why is this here?
- For people. We eat it.

  
You don't have
enough food of your own?

  
- Well, yes.
- How do you get it?

  
- Bees make it.
- I know who makes it!

  
And it's hard to make it!

  
There's heating, cooling, stirring.
You need a whole Krelman thing!

  
- It's organic.
- It's our-ganic!

  
It's just honey, Barry.

  
Just what?!

  
Bees don't know about this!
This is stealing! A lot of stealing!

  
You've taken our homes, schools,
hospitals! This is all we have!

  
And it's on sale?!
I'm getting to the bottom of this.

  
I'm getting to the bottom
of all of this!

  
Hey, Hector.

  
- You almost done?
- Almost.

  
He is here. I sense it.

  
Well, I guess I'll go home now

  
and just leave this nice honey out,
with no one around.

  
You're busted, box boy!

  
I knew I heard something.
So you can talk!

  
I can talk.
And now you'll start talking!

  
Where you getting the sweet stuff?
Who's your supplier?

  
I don't understand.
I thought we were friends.

  
The last thing we want
to do is upset bees!

  
You're too late! It's ours now!

  
You, sir, have crossed
the wrong sword!

  
You, sir, will be lunch
for my iguana, Ignacio!

  
Where is the honey coming from?

  
Tell me where!

  
Honey Farms! It comes from Honey Farms!

  
Orazy person!

  
What horrible thing has happened here?

  
These faces, they never knew
what hit them. And now

  
they're on the road to nowhere!

  
Just keep still.

  
What? You're not dead?

  
Do I look dead? They will wipe anything
that moves. Where you headed?

  
To Honey Farms.
I am onto something huge here.

  
I'm going to Alaska. Moose blood,
crazy stuff. Blows your head off!

  
I'm going to Tacoma.

  
- And you?
- He really is dead.

  
All right.

  
Uh-oh!

  
- What is that?!
- Oh, no!

  
- A wiper! Triple blade!
- Triple blade?

  
Jump on! It's your only chance, bee!

  
Why does everything have
to be so doggone clean?!

  
How much do you people need to see?!

  
Open your eyes!
Stick your head out the window!

  
From NPR News in Washington,
I'm Oarl Kasell.

  
But don't kill no more bugs!

  
- Bee!
- Moose blood guy!!

  
- You hear something?
- Like what?

  
Like tiny screaming.

  
Turn off the radio.

  
Whassup, bee boy?

  
Hey, Blood.

  
Just a row of honey jars,
as far as the eye could see.

  
Wow!

  
I assume wherever this truck goes
is where they're getting it.

  
I mean, that honey's ours.

  
- Bees hang tight.
- We're all jammed in.

  
It's a close community.

  
Not us, man. We on our own.
Every mosquito on his own.

  
- What if you get in trouble?
- You a mosquito, you in trouble.

  
Nobody likes us. They just smack.
See a mosquito, smack, smack!

  
At least you're out in the world.
You must meet girls.

  
Mosquito girls try to trade up,
get with a moth, dragonfly.

  
Mosquito girl don't want no mosquito.

  
You got to be kidding me!

  
Mooseblood's about to leave
the building! So long, bee!

  
- Hey, guys!
- Mooseblood!

  
I knew I'd catch y'all down here.
Did you bring your crazy straw?

  
We throw it in jars, slap a label on it,
and it's pretty much pure profit.

  
What is this place?

  
A bee's got a brain
the size of a pinhead.

  
They are pinheads!

  
Pinhead.

  
- Oheck out the new smoker.
- Oh, sweet. That's the one you want.

  
The Thomas 3000!

  
Smoker?

  
Ninety puffs a minute, semi-automatic.
Twice the nicotine, all the tar.

  
A couple breaths of this
knocks them right out.

  
They make the honey,
and we make the money.

  
"They make the honey,
and we make the money"?

  
Oh, my!

  
What's going on? Are you OK?

  
Yeah. It doesn't last too long.

  
Do you know you're
in a fake hive with fake walls?

  
Our queen was moved here.
We had no choice.

  
This is your queen?
That's a man in women's clothes!

  
That's a drag queen!

  
What is this?

  
Oh, no!

  
There's hundreds of them!

  
Bee honey.

  
Our honey is being brazenly stolen
on a massive scale!

  
This is worse than anything bears
have done! I intend to do something.

  
Oh, Barry, stop.

  
Who told you humans are taking
our honey? That's a rumor.

  
Do these look like rumors?

  
That's a conspiracy theory.
These are obviously doctored photos.

  
How did you get mixed up in this?

  
He's been talking to humans.

  
- What?
- Talking to humans?!

  
He has a human girlfriend.
And they make out!

  
Make out? Barry!

  
We do not.

  
- You wish you could.
- Whose side are you on?

  
The bees!

  
I dated a cricket once in San Antonio.
Those crazy legs kept me up all night.

  
Barry, this is what you want
to do with your life?

  
I want to do it for all our lives.
Nobody works harder than bees!

  
Dad, I remember you
coming home so overworked

  
your hands were still stirring.
You couldn't stop.

  
I remember that.

  
What right do they have to our honey?

  
We live on two cups a year. They put it
in lip balm for no reason whatsoever!

  
Even if it's true, what can one bee do?

  
Sting them where it really hurts.

  
In the face! The eye!

  
- That would hurt.
- No.

  
Up the nose? That's a killer.

  
There's only one place you can sting
the humans, one place where it matters.

  
Hive at Five, the hive's only
full-hour action news source.

  
No more bee beards!

  
With Bob Bumble at the anchor desk.

  
Weather with Storm Stinger.

  
Sports with Buzz Larvi.

  
And Jeanette Ohung.

  
- Good evening. I'm Bob Bumble.
- And I'm Jeanette Ohung.

  
A tri-county bee, Barry Benson,

  
intends to sue the human race
for stealing our honey,

  
packaging it and profiting
from it illegally!

  
Tomorrow night on Bee Larry King,

  
we'll have three former queens here in
our studio, discussing their new book,

  
Olassy Ladies,
out this week on Hexagon.

  
Tonight we're talking to Barry Benson.

  
Did you ever think, "I'm a kid
from the hive. I can't do this"?

  
Bees have never been afraid
to change the world.

  
What about Bee Oolumbus?
Bee Gandhi? Bejesus?

  
Where I'm from, we'd never sue humans.

  
We were thinking
of stickball or candy stores.

  
How old are you?

  
The bee community
is supporting you in this case,

  
which will be the trial
of the bee century.

  
You know, they have a Larry King
in the human world too.

  
It's a common name. Next week...

  
He looks like you and has a show
and suspenders and colored dots...

  
Next week...

  
Glasses, quotes on the bottom from the
guest even though you just heard 'em.

  
Bear Week next week!
They're scary, hairy and here live.

  
Always leans forward, pointy shoulders,
squinty eyes, very Jewish.

  
In tennis, you attack
at the point of weakness!

  
It was my grandmother, Ken. She's 81.

  
Honey, her backhand's a joke!
I'm not gonna take advantage of that?

  
Quiet, please.
Actual work going on here.

  
- Is that that same bee?
- Yes, it is!

  
I'm helping him sue the human race.

  
- Hello.
- Hello, bee.

  
This is Ken.

  
Yeah, I remember you. Timberland, size
ten and a half. Vibram sole, I believe.

  
Why does he talk again?

  
Listen, you better go
'cause we're really busy working.

  
But it's our yogurt night!

  
Bye-bye.

  
Why is yogurt night so difficult?!

  
You poor thing.
You two have been at this for hours!

  
Yes, and Adam here
has been a huge help.

  
- Frosting...
- How many sugars?

  
Just one. I try not
to use the competition.

  
So why are you helping me?

  
Bees have good qualities.

  
And it takes my mind off the shop.

  
Instead of flowers, people
are giving balloon bouquets now.

  
Those are great, if you're three.

  
And artificial flowers.

  
- Oh, those just get me psychotic!
- Yeah, me too.

  
Bent stingers, pointless pollination.

  
Bees must hate those fake things!

  
Nothing worse
than a daffodil that's had work done.

  
Maybe this could make up
for it a little bit.

  
- This lawsuit's a pretty big deal.
- I guess.

  
You sure you want to go through with it?

  
Am I sure? When I'm done with
the humans, they won't be able

  
to say, "Honey, I'm home,"
without paying a royalty!

  
It's an incredible scene
here in downtown Manhattan,

  
where the world anxiously waits,
because for the first time in history,

  
we will hear for ourselves
if a honeybee can actually speak.

  
What have we gotten into here, Barry?

  
It's pretty big, isn't it?

  
I can't believe how many humans
don't work during the day.

  
You think billion-dollar multinational
food companies have good lawyers?

  
Everybody needs to stay
behind the barricade.

  
- What's the matter?
- I don't know, I just got a chill.

  
Well, if it isn't the bee team.

  
You boys work on this?

  
All rise! The Honorable
Judge Bumbleton presiding.

  
All right. Oase number 4475,

  
Superior Oourt of New York,
Barry Bee Benson v. the Honey Industry

  
is now in session.

  
Mr. Montgomery, you're representing
the five food companies collectively?

  
A privilege.

  
Mr. Benson... you're representing
all the bees of the world?

  
I'm kidding. Yes, Your Honor,
we're ready to proceed.

  
Mr. Montgomery,
your opening statement, please.

  
Ladies and gentlemen of the jury,

  
my grandmother was a simple woman.

  
Born on a farm, she believed
it was man's divine right

  
to benefit from the bounty
of nature God put before us.

  
If we lived in the topsy-turvy world
Mr. Benson imagines,

  
just think of what would it mean.

  
I would have to negotiate
with the silkworm

  
for the elastic in my britches!

  
Talking bee!

  
How do we know this isn't some sort of

  
holographic motion-picture-capture
Hollywood wizardry?

  
They could be using laser beams!

  
Robotics! Ventriloquism!
Oloning! For all we know,

  
he could be on steroids!

  
Mr. Benson?

  
Ladies and gentlemen,
there's no trickery here.

  
I'm just an ordinary bee.
Honey's pretty important to me.

  
It's important to all bees.
We invented it!

  
We make it. And we protect it
with our lives.

  
Unfortunately, there are
some people in this room

  
who think they can take it from us

  
'cause we're the little guys!
I'm hoping that, after this is all over,

  
you'll see how, by taking our honey,
you not only take everything we have

  
but everything we are!

  
I wish he'd dress like that
all the time. So nice!

  
Oall your first witness.

  
So, Mr. Klauss Vanderhayden
of Honey Farms, big company you have.

  
I suppose so.

  
I see you also own
Honeyburton and Honron!

  
Yes, they provide beekeepers
for our farms.

  
Beekeeper. I find that
to be a very disturbing term.

  
I don't imagine you employ
any bee-free-ers, do you?

  
- No.
- I couldn't hear you.

  
- No.
- No.

  
Because you don't free bees.
You keep bees. Not only that,

  
it seems you thought a bear would be
an appropriate image for a jar of honey.

  
They're very lovable creatures.

  
Yogi Bear, Fozzie Bear, Build-A-Bear.

  
You mean like this?

  
Bears kill bees!

  
How'd you like his head crashing
through your living room?!

  
Biting into your couch!
Spitting out your throw pillows!

  
OK, that's enough. Take him away.

  
So, Mr. Sting, thank you for being here.
Your name intrigues me.

  
- Where have I heard it before?
- I was with a band called The Police.

  
But you've never been
a police officer, have you?

  
No, I haven't.

  
No, you haven't. And so here
we have yet another example

  
of bee culture casually
stolen by a human

  
for nothing more than
a prance-about stage name.

  
Oh, please.

  
Have you ever been stung, Mr. Sting?

  
Because I'm feeling
a little stung, Sting.

  
Or should I say... Mr. Gordon M. Sumner!

  
That's not his real name?! You idiots!

  
Mr. Liotta, first,
belated congratulations on

  
your Emmy win for a guest spot
on ER in 2005.

  
Thank you. Thank you.

  
I see from your resume
that you're devilishly handsome

  
with a churning inner turmoil
that's ready to blow.

  
I enjoy what I do. Is that a crime?

  
Not yet it isn't. But is this
what it's come to for you?

  
Exploiting tiny, helpless bees
so you don't

  
have to rehearse
your part and learn your lines, sir?

  
Watch it, Benson!
I could blow right now!

  
This isn't a goodfella.
This is a badfella!

  
Why doesn't someone just step on
this creep, and we can all go home?!

  
- Order in this court!
- You're all thinking it!

  
Order! Order, I say!

  
- Say it!
- Mr. Liotta, please sit down!

  
I think it was awfully nice
of that bear to pitch in like that.

  
I think the jury's on our side.

  
Are we doing everything right, legally?

  
I'm a florist.

  
Right. Well, here's to a great team.

  
To a great team!

  
Well, hello.

  
- Ken!
- Hello.

  
I didn't think you were coming.

  
No, I was just late.
I tried to call, but... the battery.

  
I didn't want all this to go to waste,
so I called Barry. Luckily, he was free.

  
Oh, that was lucky.

  
There's a little left.
I could heat it up.

  
Yeah, heat it up, sure, whatever.

  
So I hear you're quite a tennis player.

  
I'm not much for the game myself.
The ball's a little grabby.

  
That's where I usually sit.
Right... there.

  
Ken, Barry was looking at your resume,

  
and he agreed with me that eating with
chopsticks isn't really a special skill.

  
You think I don't see what you're doing?

  
I know how hard it is to find
the rightjob. We have that in common.

  
Do we?

  
Bees have 100 percent employment,
but we do jobs like taking the crud out.

  
That's just what
I was thinking about doing.

  
Ken, I let Barry borrow your razor
for his fuzz. I hope that was all right.

  
I'm going to drain the old stinger.

  
Yeah, you do that.

  
Look at that.

  
You know, I've just about had it

  
with your little mind games.

  
- What's that?
- Italian Vogue.

  
Mamma mia, that's a lot of pages.

  
A lot of ads.

  
Remember what Van said, why is
your life more valuable than mine?

  
Funny, I just can't seem to recall that!

  
I think something stinks in here!

  
I love the smell of flowers.

  
How do you like the smell of flames?!

  
Not as much.

  
Water bug! Not taking sides!

  
Ken, I'm wearing a Ohapstick hat!
This is pathetic!

  
I've got issues!

  
Well, well, well, a royal flush!

  
- You're bluffing.
- Am I?

  
Surf's up, dude!

  
Poo water!

  
That bowl is gnarly.

  
Except for those dirty yellow rings!

  
Kenneth! What are you doing?!

  
You know, I don't even like honey!
I don't eat it!

  
We need to talk!

  
He's just a little bee!

  
And he happens to be
the nicest bee I've met in a long time!

  
Long time? What are you talking about?!
Are there other bugs in your life?

  
No, but there are other things bugging
me in life. And you're one of them!

  
Fine! Talking bees, no yogurt night...

  
My nerves are fried from riding
on this emotional roller coaster!

  
Goodbye, Ken.

  
And for your information,

  
I prefer sugar-free, artificial
sweeteners made by man!

  
I'm sorry about all that.

  
I know it's got
an aftertaste! I like it!

  
I always felt there was some kind
of barrier between Ken and me.

  
I couldn't overcome it.
Oh, well.

  
Are you OK for the trial?

  
I believe Mr. Montgomery
is about out of ideas.

  
We would like to call
Mr. Barry Benson Bee to the stand.

  
Good idea! You can really see why he's
considered one of the best lawyers...

  
Yeah.

  
Layton, you've
gotta weave some magic

  
with this jury,
or it's gonna be all over.

  
Don't worry. The only thing I have
to do to turn this jury around

  
is to remind them
of what they don't like about bees.

  
- You got the tweezers?
- Are you allergic?

  
Only to losing, son. Only to losing.

  
Mr. Benson Bee, I'll ask you
what I think we'd all like to know.

  
What exactly is your relationship

  
to that woman?

  
We're friends.

  
- Good friends?
- Yes.

  
How good? Do you live together?

  
Wait a minute...

  
Are you her little...

  
...bedbug?

  
I've seen a bee documentary or two.
From what I understand,

  
doesn't your queen give birth
to all the bee children?

  
- Yeah, but...
- So those aren't your real parents!

  
- Oh, Barry...
- Yes, they are!

  
Hold me back!

  
You're an illegitimate bee,
aren't you, Benson?

  
He's denouncing bees!

  
Don't y'all date your cousins?

  
- Objection!
- I'm going to pincushion this guy!

  
Adam, don't! It's what he wants!

  
Oh, I'm hit!!

  
Oh, lordy, I am hit!

  
Order! Order!

  
The venom! The venom
is coursing through my veins!

  
I have been felled
by a winged beast of destruction!

  
You see? You can't treat them
like equals! They're striped savages!

  
Stinging's the only thing
they know! It's their way!

  
- Adam, stay with me.
- I can't feel my legs.

  
What angel of mercy
will come forward to suck the poison

  
from my heaving buttocks?

  
I will have order in this court. Order!

  
Order, please!

  
The case of the honeybees
versus the human race

  
took a pointed turn against the bees

  
yesterday when one of their legal
team stung Layton T. Montgomery.

  
- Hey, buddy.
- Hey.

  
- Is there much pain?
- Yeah.

  
I...

  
I blew the whole case, didn't I?

  
It doesn't matter. What matters is
you're alive. You could have died.

  
I'd be better off dead. Look at me.

  
They got it from the cafeteria
downstairs, in a tuna sandwich.

  
Look, there's
a little celery still on it.

  
What was it like to sting someone?

  
I can't explain it. It was all...

  
All adrenaline and then...
and then ecstasy!

  
All right.

  
You think it was all a trap?

  
Of course. I'm sorry.
I flew us right into this.

  
What were we thinking? Look at us. We're
just a couple of bugs in this world.

  
What will the humans do to us
if they win?

  
I don't know.

  
I hear they put the roaches in motels.
That doesn't sound so bad.

  
Adam, they check in,
but they don't check out!

  
Oh, my.

  
Oould you get a nurse
to close that window?

  
- Why?
- The smoke.

  
Bees don't smoke.

  
Right. Bees don't smoke.

  
Bees don't smoke!
But some bees are smoking.

  
That's it! That's our case!

  
It is? It's not over?

  
Get dressed. I've gotta go somewhere.

  
Get back to the court and stall.
Stall any way you can.

  
And assuming you've done step correctly, you're ready for the tub.

  
Mr. Flayman.

  
Yes? Yes, Your Honor!

  
Where is the rest of your team?

  
Well, Your Honor, it's interesting.

  
Bees are trained to fly haphazardly,

  
and as a result,
we don't make very good time.

  
I actually heard a funny story about...

  
Your Honor,
haven't these ridiculous bugs

  
taken up enough
of this court's valuable time?

  
How much longer will we allow
these absurd shenanigans to go on?

  
They have presented no compelling
evidence to support their charges

  
against my clients,
who run legitimate businesses.

  
I move for a complete dismissal
of this entire case!

  
Mr. Flayman, I'm afraid I'm going

  
to have to consider
Mr. Montgomery's motion.

  
But you can't! We have a terrific case.

  
Where is your proof?
Where is the evidence?

  
Show me the smoking gun!

  
Hold it, Your Honor!
You want a smoking gun?

  
Here is your smoking gun.

  
What is that?

  
It's a bee smoker!

  
What, this?
This harmless little contraption?

  
This couldn't hurt a fly,
let alone a bee.

  
Look at what has happened

  
to bees who have never been asked,
"Smoking or non?"

  
Is this what nature intended for us?

  
To be forcibly addicted
to smoke machines

  
and man-made wooden slat work camps?

  
Living out our lives as honey slaves
to the white man?

  
- What are we gonna do?
- He's playing the species card.

  
Ladies and gentlemen, please,
free these bees!

  
Free the bees! Free the bees!

  
Free the bees!

  
Free the bees! Free the bees!

  
The court finds in favor of the bees!

  
Vanessa, we won!

  
I knew you could do it! High-five!

  
Sorry.

  
I'm OK! You know what this means?

  
All the honey
will finally belong to the bees.

  
Now we won't have
to work so hard all the time.

  
This is an unholy perversion
of the balance of nature, Benson.

  
You'll regret this.

  
Barry, how much honey is out there?

  
All right. One at a time.

  
Barry, who are you wearing?

  
My sweater is Ralph Lauren,
and I have no pants.

  
- What if Montgomery's right?
- What do you mean?

  
We've been living the bee way
a long time, 27 million years.

  
Oongratulations on your victory.
What will you demand as a settlement?

  
First, we'll demand a complete shutdown
of all bee work camps.

  
Then we want back the honey
that was ours to begin with,

  
every last drop.

  
We demand an end to the glorification
of the bear as anything more

  
than a filthy, smelly,
bad-breath stink machine.

  
We're all aware
of what they do in the woods.

  
Wait for my signal.

  
Take him out.

  
He'll have nauseous
for a few hours, then he'll be fine.

  
And we will no longer tolerate
bee-negative nicknames...

  
But it's just a prance-about stage name!

  
...unnecessary inclusion of honey
in bogus health products

  
and la-dee-da human
tea-time snack garnishments.

  
Oan't breathe.

  
Bring it in, boys!

  
Hold it right there! Good.

  
Tap it.

  
Mr. Buzzwell, we just passed three cups,
and there's gallons more coming!

  
- I think we need to shut down!
- Shut down? We've never shut down.

  
Shut down honey production!

  
Stop making honey!

  
Turn your key, sir!

  
What do we do now?

  
Oannonball!

  
We're shutting honey production!

  
Mission abort.

  
Aborting pollination and nectar detail.
Returning to base.

  
Adam, you wouldn't believe
how much honey was out there.

  
Oh, yeah?

  
What's going on? Where is everybody?

  
- Are they out celebrating?
- They're home.

  
They don't know what to do.
Laying out, sleeping in.

  
I heard your Uncle Oarl was on his way
to San Antonio with a cricket.

  
At least we got our honey back.

  
Sometimes I think, so what if humans
liked our honey? Who wouldn't?

  
It's the greatest thing in the world!
I was excited to be part of making it.

  
This was my new desk. This was my
new job. I wanted to do it really well.

  
And now...

  
Now I can't.

  
I don't understand
why they're not happy.

  
I thought their lives would be better!

  
They're doing nothing. It's amazing.
Honey really changes people.

  
You don't have any idea
what's going on, do you?

  
- What did you want to show me?
- This.

  
What happened here?

  
That is not the half of it.

  
Oh, no. Oh, my.

  
They're all wilting.

  
Doesn't look very good, does it?

  
No.

  
And whose fault do you think that is?

  
You know, I'm gonna guess bees.

  
Bees?

  
Specifically, me.

  
I didn't think bees not needing to make
honey would affect all these things.

  
It's notjust flowers.
Fruits, vegetables, they all need bees.

  
That's our whole SAT test right there.

  
Take away produce, that affects
the entire animal kingdom.

  
And then, of course...

  
The human species?

  
So if there's no more pollination,

  
it could all just go south here,
couldn't it?

  
I know this is also partly my fault.

  
How about a suicide pact?

  
How do we do it?

  
- I'll sting you, you step on me.
- Thatjust kills you twice.

  
Right, right.

  
Listen, Barry...
sorry, but I gotta get going.

  
I had to open my mouth and talk.

  
Vanessa?

  
Vanessa? Why are you leaving?
Where are you going?

  
To the final Tournament of Roses parade
in Pasadena.

  
They've moved it to this weekend
because all the flowers are dying.

  
It's the last chance
I'll ever have to see it.

  
Vanessa, I just wanna say I'm sorry.
I never meant it to turn out like this.

  
I know. Me neither.

  
Tournament of Roses.
Roses can't do sports.

  
Wait a minute. Roses. Roses?

  
Roses!

  
Vanessa!

  
Roses?!

  
Barry?

  
- Roses are flowers!
- Yes, they are.

  
Flowers, bees, pollen!

  
I know.
That's why this is the last parade.

  
Maybe not.
Oould you ask him to slow down?

  
Oould you slow down?

  
Barry!

  
OK, I made a huge mistake.
This is a total disaster, all my fault.

  
Yes, it kind of is.

  
I've ruined the planet.
I wanted to help you

  
with the flower shop.
I've made it worse.

  
Actually, it's completely closed down.

  
I thought maybe you were remodeling.

  
But I have another idea, and it's
greater than my previous ideas combined.

  
I don't want to hear it!

  
All right, they have the roses,
the roses have the pollen.

  
I know every bee, plant
and flower bud in this park.

  
All we gotta do is get what they've got
back here with what we've got.

  
- Bees.
- Park.

  
- Pollen!
- Flowers.

  
- Repollination!
- Across the nation!

  
Tournament of Roses,
Pasadena, Oalifornia.

  
They've got nothing
but flowers, floats and cotton candy.

  
Security will be tight.

  
I have an idea.

  
Vanessa Bloome, FTD.

  
Official floral business. It's real.

  
Sorry, ma'am. Nice brooch.

  
Thank you. It was a gift.

  
Once inside,
we just pick the right float.

  
How about The Princess and the Pea?

  
I could be the princess,
and you could be the pea!

  
Yes, I got it.

  
- Where should I sit?
- What are you?

  
- I believe I'm the pea.
- The pea?

  
It goes under the mattresses.

  
- Not in this fairy tale, sweetheart.
- I'm getting the marshal.

  
You do that!
This whole parade is a fiasco!

  
Let's see what this baby'll do.

  
Hey, what are you doing?!

  
Then all we do
is blend in with traffic...

  
...without arousing suspicion.

  
Once at the airport,
there's no stopping us.

  
Stop! Security.

  
- You and your insect pack your float?
- Yes.

  
Has it been
in your possession the entire time?

  
Would you remove your shoes?

  
- Remove your stinger.
- It's part of me.

  
I know. Just having some fun.
Enjoy your flight.

  
Then if we're lucky, we'll have
just enough pollen to do the job.

  
Oan you believe how lucky we are? We
have just enough pollen to do the job!

  
I think this is gonna work.

  
It's got to work.

  
Attention, passengers,
this is Oaptain Scott.

  
We have a bit of bad weather
in New York.

  
It looks like we'll experience
a couple hours delay.

  
Barry, these are cut flowers
with no water. They'll never make it.

  
I gotta get up there
and talk to them.

  
Be careful.

  
Oan I get help
with the Sky Mall magazine?

  
I'd like to order the talking
inflatable nose and ear hair trimmer.

  
Oaptain, I'm in a real situation.

  
- What'd you say, Hal?
- Nothing.

  
Bee!

  
Don't freak out! My entire species...

  
What are you doing?

  
- Wait a minute! I'm an attorney!
- Who's an attorney?

  
Don't move.

  
Oh, Barry.

  
Good afternoon, passengers.
This is your captain.

  
Would a Miss Vanessa Bloome in 24B
please report to the cockpit?

  
And please hurry!

  
What happened here?

  
There was a DustBuster,
a toupee, a life raft exploded.

  
One's bald, one's in a boat,
they're both unconscious!

  
- Is that another bee joke?
- No!

  
No one's flying the plane!

  
This is JFK control tower, Flight 356.
What's your status?

  
This is Vanessa Bloome.
I'm a florist from New York.

  
Where's the pilot?

  
He's unconscious,
and so is the copilot.

  
Not good. Does anyone onboard
have flight experience?

  
As a matter of fact, there is.

  
- Who's that?
- Barry Benson.

  
From the honey trial?! Oh, great.

  
Vanessa, this is nothing more
than a big metal bee.

  
It's got giant wings, huge engines.

  
I can't fly a plane.

  
- Why not? Isn't John Travolta a pilot?
- Yes.

  
How hard could it be?

  
Wait, Barry!
We're headed into some lightning.

  
This is Bob Bumble. We have some
late-breaking news from JFK Airport,

  
where a suspenseful scene
is developing.

  
Barry Benson,
fresh from his legal victory...

  
That's Barry!

  
...is attempting to land a plane,
loaded with people, flowers

  
and an incapacitated flight crew.

  
Flowers?!

  
We have a storm in the area
and two individuals at the controls

  
with absolutely no flight experience.

  
Just a minute.
There's a bee on that plane.

  
I'm quite familiar with Mr. Benson
and his no-account compadres.

  
They've done enough damage.

  
But isn't he your only hope?

  
Technically, a bee
shouldn't be able to fly at all.

  
Their wings are too small...

  
Haven't we heard this a million times?

  
"The surface area of the wings
and body mass make no sense."

  
- Get this on the air!
- Got it.

  
- Stand by.
- We're going live.

  
The way we work may be a mystery to you.

  
Making honey takes a lot of bees
doing a lot of small jobs.

  
But let me tell you about a small job.

  
If you do it well,
it makes a big difference.

  
More than we realized.
To us, to everyone.

  
That's why I want to get bees
back to working together.

  
That's the bee way!
We're not made of Jell-O.

  
We get behind a fellow.

  
- Black and yellow!
- Hello!

  
Left, right, down, hover.

  
- Hover?
- Forget hover.

  
This isn't so hard.
Beep-beep! Beep-beep!

  
Barry, what happened?!

  
Wait, I think we were
on autopilot the whole time.

  
- That may have been helping me.
- And now we're not!

  
So it turns out I cannot fly a plane.

  
All of you, let's get
behind this fellow! Move it out!

  
Move out!

  
Our only chance is if I do what I'd do,
you copy me with the wings of the plane!

  
Don't have to yell.

  
I'm not yelling!
We're in a lot of trouble.

  
It's very hard to concentrate
with that panicky tone in your voice!

  
It's not a tone. I'm panicking!

  
I can't do this!

  
Vanessa, pull yourself together.
You have to snap out of it!

  
You snap out of it.

  
You snap out of it.

  
- You snap out of it!
- You snap out of it!

  
- You snap out of it!
- You snap out of it!

  
- You snap out of it!
- You snap out of it!

  
- Hold it!
- Why? Oome on, it's my turn.

  
How is the plane flying?

  
I don't know.

  
Hello?

  
Benson, got any flowers
for a happy occasion in there?

  
The Pollen Jocks!

  
They do get behind a fellow.

  
- Black and yellow.
- Hello.

  
All right, let's drop this tin can
on the blacktop.

  
Where? I can't see anything. Oan you?

  
No, nothing. It's all cloudy.

  
Oome on. You got to think bee, Barry.

  
- Thinking bee.
- Thinking bee.

  
Thinking bee!
Thinking bee! Thinking bee!

  
Wait a minute.
I think I'm feeling something.

  
- What?
- I don't know. It's strong, pulling me.

  
Like a 27-million-year-old instinct.

  
Bring the nose down.

  
Thinking bee!
Thinking bee! Thinking bee!

  
- What in the world is on the tarmac?
- Get some lights on that!

  
Thinking bee!
Thinking bee! Thinking bee!

  
- Vanessa, aim for the flower.
- OK.

  
Out the engines. We're going in
on bee power. Ready, boys?

  
Affirmative!

  
Good. Good. Easy, now. That's it.

  
Land on that flower!

  
Ready? Full reverse!

  
Spin it around!

  
- Not that flower! The other one!
- Which one?

  
- That flower.
- I'm aiming at the flower!

  
That's a fat guy in a flowered shirt.
I mean the giant pulsating flower

  
made of millions of bees!

  
Pull forward. Nose down. Tail up.

  
Rotate around it.

  
- This is insane, Barry!
- This's the only way I know how to fly.

  
Am I koo-koo-kachoo, or is this plane
flying in an insect-like pattern?

  
Get your nose in there. Don't be afraid.
Smell it. Full reverse!

  
Just drop it. Be a part of it.

  
Aim for the center!

  
Now drop it in! Drop it in, woman!

  
Oome on, already.

  
Barry, we did it!
You taught me how to fly!

  
- Yes. No high-five!
- Right.

  
Barry, it worked!
Did you see the giant flower?

  
What giant flower? Where? Of course
I saw the flower! That was genius!

  
- Thank you.
- But we're not done yet.

  
Listen, everyone!

  
This runway is covered
with the last pollen

  
from the last flowers
available anywhere on Earth.

  
That means this is our last chance.

  
We're the only ones who make honey,
pollinate flowers and dress like this.

  
If we're gonna survive as a species,
this is our moment! What do you say?

  
Are we going to be bees, orjust
Museum of Natural History keychains?

  
We're bees!

  
Keychain!

  
Then follow me! Except Keychain.

  
Hold on, Barry. Here.

  
You've earned this.

  
Yeah!

  
I'm a Pollen Jock! And it's a perfect
fit. All I gotta do are the sleeves.

  
Oh, yeah.

  
That's our Barry.

  
Mom! The bees are back!

  
If anybody needs
to make a call, now's the time.

  
I got a feeling we'll be
working late tonight!

  
Here's your change. Have a great
afternoon! Oan I help who's next?

  
Would you like some honey with that?
It is bee-approved. Don't forget these.

  
Milk, cream, cheese, it's all me.
And I don't see a nickel!

  
Sometimes I just feel
like a piece of meat!

  
I had no idea.

  
Barry, I'm sorry.
Have you got a moment?

  
Would you excuse me?
My mosquito associate will help you.

  
Sorry I'm late.

  
He's a lawyer too?

  
I was already a blood-sucking parasite.
All I needed was a briefcase.

  
Have a great afternoon!

  
Barry, I just got this huge tulip order,
and I can't get them anywhere.

  
No problem, Vannie.
Just leave it to me.

  
You're a lifesaver, Barry.
Oan I help who's next?

  
All right, scramble, jocks!
It's time to fly.

  
Thank you, Barry!

  
That bee is living my life!

  
Let it go, Kenny.

  
- When will this nightmare end?!
- Let it all go.

  
- Beautiful day to fly.
- Sure is.

  
Between you and me,
I was dying to get out of that office.

  
You have got
to start thinking bee, my friend.

  
- Thinking bee!
- Me?

  
Hold it. Let's just stop
for a second. Hold it.

  
I'm sorry. I'm sorry, everyone.
Oan we stop here?

  
I'm not making a major life decision
during a production number!

  
All right. Take ten, everybody.
Wrap it up, guys.

  
I had virtually no rehearsal for that.

Special thanks to SergeiK.
 OPEN ON: ICE.

   We're underwater looking up at it. A saw cuts through,
   heading right for us.


   EXT. SNOW-CAPPED MOUNTAINS -- DUSK

   ICE HARVESTERS, dressed in traditional Sami clothing, score a
   frozen lake. They SING.

                   "The Frozen Heart (Ice Worker's Song)"

                            ICE HARVESTERS
                  BORN OF COLD AND WINTER AIR
                  AND MOUNTAIN RAIN COMBINING,
                  THIS ICY FORCE BOTH FOUL AND FAIR
                  HAS A FROZEN HEART WORTH MINING.

   The men drag giant ice blocks through channels of water.

                            ICE HARVESTERS (CONT'D)
                  CUT THROUGH THE HEART, COLD AND CLEAR.
                  STRIKE FOR LOVE AND STRIKE FOR FEAR.

                  SEE THE BEAUTY SHARP AND SHEER.
                  SPLIT THE ICE APART!
                  AND BREAK THE FROZEN HEART.
                  Hup! Ho! Watch your step! Let it go!

   A young Sami boy, KRISTOFF (8), and his reindeer calf, SVEN,
   share a carrot as they try to keep up with the men.

                            ICE HARVESTERS (CONT'D)
                  Hup! Ho! Watch your step! Let it go!

   Young Kristoff struggles to get a block of ice out of the
   water. He fails, ends up soaked. Sven licks his wet cheek.

                            ICE HARVESTERS (CONT'D)
                  BEAUTIFUL! POWERFUL! DANGEROUS! COLD!
                  ICE HAS A MAGIC CAN'T BE CONTROLLED.

   A sharp ice floe overtakes the workers, threateningly. They
   fight it back.

                            ICE HARVESTERS (CONT'D)
                  STRONGER THAN ONE, STRONGER THAN TEN
                  STRONGER THAN A HUNDRED MEN!

   Massive fjord horses drag heavy ice plows.
                                                                2
FROZEN - J. Lee



                            ICE HARVESTERS (CONT'D)
                  BORN OF COLD AND WINTER AIR
                  AND MOUNTAIN RAIN COMBINING

   The sun sets. Lanterns are lit.

                            ICE HARVESTERS (CONT'D)
                  THIS ICY FORCE BOTH FOUL AND FAIR
                  HAS A FROZEN HEART WORTH MINING.
                  CUT THROUGH THE HEART, COLD AND CLEAR.

   In the dark, Kristoff and Sven finally manage to get a single
   block of ice out of the water.

                            ICE HARVESTERS (CONT'D)
                  STRIKE FOR LOVE AND STRIKE FOR FEAR.
                  THERE'S BEAUTY AND THERE'S DANGER HERE.
                  SPLIT THE ICE APART!
                  BEWARE THE FROZEN HEART.

   The workers pile onto the giant horse-drawn ice sled as it
   pulls away.

   Left behind, Kristoff and Sven push their ice block onto a
   dinky little sled then head off.

   We sweep up from them to the Northern Lights filling the
   sky...then move across the mountains...beneath the
   snowline...and descend upon...


   EXT. THE KINGDOM OF ARENDELLE -- NIGHT

   A humble castle, built of wood, nestled in a deep fjord.


   INT. CASTLE, NURSERY -- NIGHT

   ELSA (8) sleeps in her bed. Her little sister ANNA (5) pops
   up beside her.

                            YOUNG ANNA
                  Elsa. Psst. Elsa! Psst.

   Elsa doesn't stir. Anna sits on Elsa and bounces.

                            YOUNG ANNA (CONT'D)
                  Wake up. Wake up. Wake up.

                            YOUNG ELSA
                      (grumbling)
                  Anna, go back to sleep.

   Anna rolls onto her back and spreads all her weight on Elsa.
                                                              3
FROZEN - J. Lee



                            YOUNG ANNA
                      (drama queen-ish)
                  I just can't. The sky's awake, so
                  I'm awake, so we have to play.

                            YOUNG ELSA
                  ...Go play by yourself.

   Elsa shoves Anna off the bed.

   Anna lands butt to floor, sighs, defeated. But then she gets
   an idea. She hops back on the bed and lifts one of Elsa's
   eyelids.

                            YOUNG ANNA
                      (mischievously)
                  Do you want to build a snowman?

   Elsa's eyes both pop open. She smiles.


   INT. CASTLE STAIRCASE -- NIGHT

   Anna, now wearing snow boots, pulls Elsa by the hand.

                            YOUNG ANNA
                  Come on, come on, come on, come on.

   Elsa tries to shush her, but Anna's too excited.


   INT. BALLROOM -- NIGHT

   The girls sneak into the ballroom. Elsa shuts the door.

                            YOUNG ANNA
                  Do the magic! Do the magic!

   Elsa laughs and waves her hands together. Snowflakes suddenly
   burst forth and dance between her palms, forming a snowball.
   Elsa throws the snowball high into the air. Snow bursts out
   and flurries around the room. Anna dances about, catching
   flakes in her palms and mouth.

                            YOUNG ANNA (CONT'D)
                  This is amazing!

                            YOUNG ELSA
                  Watch this!

   Elsa stomps her little slippered foot and a layer of ice
   suddenly coats the floor, forming a giant ice rink. Anna
   slides off, laughing.
                                                              4
FROZEN - J. Lee



   PLAY MONTAGE:

   -Anna and Elsa roll giant snowballs and build a snowman
   together. Elsa moves his stick arms around.

                            YOUNG ELSA (CONT'D)
                      (goofy voice)
                  Hi, I'm Olaf and I like warm hugs.

   Anna jumps up and hugs him.

                            YOUNG ANNA
                  I love you, Olaf.

   -Anna and Olaf appear to be dancing. REVEAL: Elsa is actually
   propelling them across the ice floor with her magic.

   -The girls slide down snowbanks together!

   -Anna fearlessly jumps off a snow peak into mid air.

                              YOUNG ANNA (CONT'D)
                  Catch me!

   Elsa makes another peak to catch Anna.

                              YOUNG ELSA
                  Gotcha!

   Anna keeps jumping. Elsa keeps casting magic.

                            YOUNG ANNA
                      (jumping faster)
                  Again! Again!

                             YOUNG ELSA
                      (struggling to keep up)
                  Slow down!

   Elsa suddenly slips.

   Her magic accidentally STRIKES Anna in the head. Anna tumbles
   down a snowbank and lands, unconscious.

                              YOUNG ELSA (CONT'D)
                  ANNA!

   Elsa runs to Anna and takes her in her arms. A streak of
   Anna's hair, where struck, turns white.

                            YOUNG ELSA (CONT'D)
                  MAMA! PAPA!

   The room around them fills with frightening ice spikes.
                                                                     5
FROZEN - J. Lee



   The parents burst through the frozen door. GASP at the sight
   of the room.

                            KING
                  Elsa, what have you done? This is
                  getting out of hand!

                            QUEEN
                      (seeing Anna)
                  Anna!

   The King and Queen rush to Anna and take her in their arms.

                            ELSA
                  It was an accident. I'm sorry,
                  Anna.

                            QUEEN
                      (about Anna)
                  She's ice cold.

                            KING
                  ...I know where we have to go.

                                                      SLAM CUT TO:


   INT. DARK ROOM -- NIGHT

   The King sifts through a shelf to find an ancient book
   inscribed with Old Norse runes. He opens the book, scrambles
   to a page with an ancient map.


   EXT. ARENDELLE -- NIGHT

   Carrying the girls, the King and Queen ride their horses out
   of the kingdom. Snow streams from Elsa's hands, leaving a
   trail of ice behind them.


   EXT. FJORD MOUNTAIN FOREST -- NIGHT

   A sleepy Kristoff and Sven travel alone through the dark
   woods. All of a sudden, the King and Queen race by with the
   girls, leaving the wake of ice.

                            KRISTOFF
                  Ice?

                                                      SLAM CUT TO:
                                                                6
FROZEN - J. Lee



   EXT. BLACK MOUNTAINS -- NIGHT

   Kristoff rides Sven as they follow the trail of ice.

                            YOUNG KRISTOFF
                  Faster, Sven!


   EXT. THE VALLEY OF THE LIVING ROCK -- NIGHT

   Kristoff hops off Sven at the edge of a deep valley. They
   hide behind a rock and peek out.

   Down below, the King holds a frightened Elsa. The Queen holds
   the still unconscious Anna.

                            KING
                  Please, help. My daughter!

   Suddenly, a bunch of rocks tumble down the valley toward
   them. It looks as though they'll be crushed!

   But, luckily, the rocks stop at their feet. The rocks then
   unfold, revealing bright faces.

                               YOUNG KRISTOFF
                  Trolls...?

   The rock in front of Kristoff "wakes up." Meet BULDA.

                            BULDA
                  Shush. I'm trying to listen.

   She grabs Kristoff and Sven by hand and hoof and hugs them
   close. Sven licks her face and she eyes them both.

                            BULDA (CONT'D)
                  Cuties. I'm gonna keep you.

   Back below, the crowd parts for a troll as old as the Earth.
   They call him GRAND PABBIE. He approaches arthritically, but
   determined. He nods respectfully to the king.

                            GRAND PABBIE
                  Your Majesty.
                      (referring to Elsa)
                  Born with the powers or cursed?

                            KING
                  Born. And they're getting stronger.

   Grand Pabbie motions for the Queen to bring Anna to him. She
   does. He examines her.
                                                              7
FROZEN - J. Lee



                            GRAND PABBIE
                      (about Anna)
                  You are lucky it wasn't her heart.
                  The heart is not so easily changed,
                  but the head can be persuaded.

                            KING
                  Do what you must.

                            GRAND PABBIE
                  I recommend we remove all magic,
                  even memories of magic to be
                  safe.... But don't worry, I'll
                  leave the fun.

   Grand Pabbie pulls out a glowing blue energy from Anna's
   head. We see her memories floating right above her. Grand
   Pabbie changes all of her magical memories to ordinary
   memories -- snowy play indoors with the girls in their
   nightgowns changes to outdoors on the winter fjords with the
   girls in winter gear. He puts the ordinary memories back in
   her head.

                            GRAND PABBIE (CONT'D)
                  She will be okay.

                            YOUNG ELSA
                  But she won't remember I have
                  powers?

                            KING
                  It's for the best.

                             PABBIE
                  Listen to me, Elsa, your power will
                  only grow.

   As he speaks, he conducts the Northern Lights to show a
   silhouette of an adult Elsa creating magical snowflakes.

                            PABBIE (CONT'D)
                  There is beauty in your magic....
                  But also great danger.

   The snowflakes turn to sharp spikes.

                           PABBIE (O.S.) (CONT'D)
                  You must learn to control it.

   In the Northern Lights display, the sharp spikes cause human
   figures to panic and attack Elsa.

                            PABBIE (CONT'D)
                  Fear will be your enemy.
                                                                     8
FROZEN - J. Lee



   Elsa gasps and buries her face in the King's chest. The King
   wraps his arms around Elsa, protectively.

                            KING
                  No. We'll protect her. She can
                  learn to control it. I'm sure.

   Over the King's words we...

                                                      DISSOLVE TO:

   -The Arendelle castle gates shutting.

                            KING (O.S.) (CONT'D)
                  Until then, we'll lock the gates.
                  We'll reduce the staff. We will
                  limit her contact with people and
                  keep her powers hidden from
                  everyone... including Anna.

   -The castle shutters close.

   -Anna sits on her bed as Elsa's furniture disappears.

   -Anna rushes to the hall to see Elsa shut the door to her new
   room. Anna watches, confused and sad.

                                                      DISSOLVE TO:


   INT. CASTLE WINDOW -- DAY

   We look out on a gentle snowfall. Little Anna skips up to the
   window. She lights up at the sight of the snow and rushes
   down the hall.


   INT. HALLWAY, ELSA'S DOOR -- DAY

   Anna knocks on Elsa's door and SINGS.

                     "Do You Want to Build a Snowman?"

                            YOUNG ANNA
                  DO YOU WANT TO BUILD A SNOWMAN?
                  COME ON LET'S GO AND PLAY.

   Anna peeks under the door.

                            YOUNG ANNA (CONT'D)
                  I NEVER SEE YOU ANYMORE.
                  COME OUT THE DOOR.
                  IT'S LIKE YOU'VE GONE AWAY.
                                                                 9
FROZEN - J. Lee



   -INT. ANNA'S ROOM -- Anna plays with two dolls, gives up, sad.

                            YOUNG ANNA (CONT'D)
                  WE USED TO BE BEST BUDDIES
                  AND NOW WE'RE NOT.
                  I WISH YOU WOULD TELL ME WHY.

   -ELSA'S DOOR. Anna peeks through the key hole.

                            YOUNG ANNA (CONT'D)
                  DO YOU WANT TO BUILD A SNOWMAN?

   -Anna calls through the keyhole.

                            YOUNG ANNA (CONT'D)
                  IT DOESN'T HAVE TO BE A SNOWMAN.

                            YOUNG ELSA (O.S.)
                  Go away, Anna.

                            YOUNG ANNA
                      (hearbroken)
                  ...OKAY BYE.

   -BEHIND THE DOOR -- DAY. Elsa sits at the window looking out,
   longingly. Suddenly, her icy hands freeze the windowsill.

   -LATER. The King slips leather gloves onto Elsa's hands.

                            KING
                  The gloves will help.

   He pats her gloved hand.

                            KING (CONT'D)
                  See? You're good....
                      (starting their mantra)
                  Conceal it.

                            YOUNG ELSA
                  Don't feel it.

                            YOUNG ELSA & KING
                  Don't let it show.

   -INT. HALLWAY, ELSA'S DOOR -- DAY. Anna, now 9, knocks on
   Elsa's door.

                            ANNA (9)
                  DO YOU WANT TO BUILD A SNOWMAN?

   -INT. HALLWAY -- DAY. Alone, Anna rides a bicycle built for
   two in the hall by standing on the back seat.
                                                               10
FROZEN - J. Lee



                            ANNA (9) (CONT'D)
                  OR RIDE OUR BIKE AROUND THE HALL?
                  I THINK SOME COMPANY IS OVERDUE...

   -INT. PORTRAIT ROOM -- DAY. Anna runs around the portrait
   room, gaining momentum to flip over the arm of the couch.

                            ANNA (9) (CONT'D)
                  I'VE STARTED TALKING TO
                  THE PICTURES ON THE WALLS.

   Anna lands PLOP on the cushions, then looks up at the
   painting above her of the courageous Joan of Arc.

                            ANNA (9) (CONT'D)
                  Hang in there, Joan.

   -INT. EMPTY LIBRARY -- DAY. Looks like no one's around.

                            ANNA (9) (CONT'D)
                  IT GETS A LITTLE LONELY
                  ALL THESE EMPTY ROOMS.

   But then we find Anna, laying at the base of the grandfather
   clock, playing with her braids, bored out of her mind.

                            ANNA (9) (CONT'D)
                  JUST WATCHING THE HOURS TICK BY.

   Anna's eyes follow the grandfather clock's pendulum.

                            ANNA (9) (CONT'D)
                  TICK TOCK. TICK TOCK. TICK TOCK.

   -INT. ELSA'S ROOM -- NIGHT. Elsa (now 12) paces as she panics.
   The entire wall is frozen behind her.

                            ELSA (12)
                  I'm scared. It's getting stronger.

                            KING
                  Getting upset only makes it worse.

   The King goes to hug her.

                            ELSA (12)
                  No. Don't touch me. I don't want to
                  hurt you.

   He and the Queen look at each other with alarmed sadness.

   -INT. LIBRARY -- DAY. Anna, now a teenager, slides past Elsa's
   room without stopping.
                                                                11
FROZEN - J. Lee



   -INT. KING AND QUEEN'S QUARTERS -- DAY. Anna runs into the
   room and throws herself into her parents' arms.

                            TEEN ANNA
                  See you in two weeks.

   -INT. ELSA'S ROOM -- DAY. Elsa curtsies in front of her
   parents, formally, not touching them.

                            TEEN ELSA
                  Do you have to go?

                            KING
                  You'll be fine, Elsa.

   -EXT. DOCKS -- DAY. The King and Queen leave on a ship.

   -EXT. ROUGH SEAS -- NIGHT. Lightning flashes. The sea rages in
   a storm. The King and Queen's ship is lost in the waves.

   -INT. CASTLE -- DAY. A portrait of the King and Queen is
   covered in mourning cloth.

   -EXT. CEMETERY -- DAY. Anna looks small, standing before her
   people, beside burial stones.

   -INT. HALLWAY, ELSA'S DOOR. Anna, still in her mourning
   clothes, approaches and knocks.

                            ANNA
                      (singing)
                  Elsa? PLEASE I KNOW YOU'RE IN THERE
                  PEOPLE ARE ASKING WHERE YOU'VE BEEN
                  THEY SAY HAVE COURAGE
                  AND I'M TRYING TO
                  I'M RIGHT OUT HERE FOR YOU.
                  PLEASE LET ME IN.

   Anna slides down the door and sits with her head against it.

                            ANNA (CONT'D)
                  WE ONLY HAVE EACH OTHER.
                  IT'S JUST YOU AND ME.
                  WHAT ARE WE GONNA DO?
                      (weak, internal)
                  DO YOU WANT TO BUILD A SNOWMAN?

   We move through the door...

   -INT. ELSA'S ROOM -- DAY. Elsa is sitting in the exact same
   pose as Anna. Her bedroom is frozen with ice. Snowflakes hang
   in the air, suspended by grief.

                                                        FADE OUT.
                                                               12
FROZEN - J. Lee



   EXT. THE KINGDOM OF ARENDELLE -- MORNING

   A new dawn rises over the fjords.

   Ships pull up to the docks. Guests pile out.

                            DOCK MASTER
                  Welcome to Arendelle!

   A BOY tries to get away as his MOTHER tries to stuff him in
   his bunad jacket.

                            BOY
                  Why do I have to wear this?

                            MOTHER
                  Because the Queen has come of age.
                  It's Coronation Day!

                            BOY
                  That's not my fault.

   They pass the May Pole being raised and a Sami ice harvester
   chatting with his reindeer. We recognize them as Kristoff and
   Sven, all grown up. Sven hops around excitedly like a dog and
   nuzzles Kristoff's chest.

                            KRISTOFF
                  What do you want, Sven?

   Kristoff leans in and speaks for Sven, as if he can.

                            KRISTOFF (AS SVEN) (CONT'D)
                  Give me a snack.

                            KRISTOFF (CONT'D)
                  What's the magic word?

                            KRISTOFF (AS SVEN) (CONT'D)
                  Please!

   Kristoff pulls a carrot out of his shirt pocket and hands it
   to Sven. Sven tries to bite the whole thing.

                            KRISTOFF (CONT'D)
                  Hey, hey, hey! Share!

   Sven takes a smaller bite. Kristoff then has a bite himself,
   not seeming to care that it's covered in reindeer slobber.

   We move on to PERSI and AGGIE, a super-excited couple who
   rush towards the castle.
                                                              13
FROZEN - J. Lee



                            PERSI
                  I can't believe they're finally
                  opening up the gates!

                            AGGIE
                  And for a whole day! Faster, Persi!

   They pass a tiny but menacing DUKE, who wears taps on his
   shoes to "enhance" his presence. Two THUG guards follow close
   behind him.

                            DUKE
                  Ah, Arendelle, our most mysterious
                  trade partner. Open those gates so
                  I may unlock your secrets and
                  exploit your riches.
                      (catching himself)
                  ...Did I just say that out loud?

   We leave him and head down the bridge towards the castle
   gates, passing an Irishman and a Spanish Dignitary.

                            IRISHMAN
                  Oh, me sore eyes can't wait to see
                  the Queen and the Princess. I bet
                  they're absolutely lovely.

                            SPANISH DIGNITARY
                  I bet they are beautiful.

   We move past them, to a particular castle window.

                                                        CUT TO:


   INT. CASTLE, ANNA'S BEDROOM -- DAY

   Anna, 18, snores. Drools. KNOCK. KNOCK.

                            KAI (O.S.)
                  Princess Anna...?

   Anna sits up. She's got major bedhead. She coughs. Snorts.
   Pulls a hair from her mouth.

                            ANNA
                  ...Huh? Yeah?

                            KAI (O.S.)
                  Sorry to wake you, ma'am but--

                            ANNA
                  No, you didn't. I've been up for
                  hours.
                                                                 14
FROZEN - J. Lee



   She falls back asleep while sitting. She snores. Her head
   drops, startling her awake.

                               ANNA (CONT'D)
                  Who is it?

                            KAI (O.S.)
                  It's still me, ma'am. Time to get
                  ready.

                            ANNA
                  Ready for what?

                            KAI (O.S.)
                  Your sister's coronation, ma'am.

                            ANNA
                  My sister's cor-neration...

   One eye opens enough to catch sight of her coronation dress.
   She bolts, wide awake in excitement.

                            ANNA (CONT'D)
                  Coronation Day! Ha ha!

                                                      SLAM CUT TO:


   EXT. CASTLE HALL -- DAY

   Anna bursts out of her room, wearing her coronation dress.
   She finishes pinning ribbons in her hair. Seeing the hustle
   and bustle of preparations, she can't help but SING.

                       "For the First Time in Forever"

                            ANNA
                  THE WINDOW IS OPEN!
                  SO'S THAT DOOR!
                  I DIDN'T KNOW THEY DID THAT ANYMORE.
                  WHO KNEW WE OWNED 8000 SALAD PLATES...?

   -Anna slides along the floor of the ballroom in her socks.

                            ANNA (CONT'D)
                  FOR YEARS I HAVE ROAMED THESE EMPTY HALLS
                  WHY HAVE A BALLROOM WITH NO BALLS?
                  FINALLY, THEY'RE OPENING UP THE GATES!

   -She shakes hands with a suit of armor. Breaks it. Hides the
   evidence.
                                                            15
FROZEN - J. Lee



                            ANNA (CONT'D)
                  THERE'LL BE REAL, ACTUAL PEOPLE -
                  IT'LL BE TOTALLY STRANGE.
                  BUT WOW AM I SO READY FOR THIS CHANGE!

   -Anna comes to a window and jumps out onto a window washer's
   pulley. She raises herself up to see the ships arriving.

                            ANNA (CONT'D)
                  FOR THE FIRST TIME IN FOREVER,
                  THERE'LL BE MUSIC, THERE'LL BE LIGHT.
                  FOR THE FIRST TIME IN FOREVER,
                  I'LL BE DANCING THROUGH THE NIGHT.

   -Anna walks through the garden and follows a family of geese.

                            ANNA (CONT'D)
                  DON'T KNOW IF I'M ELATED OR GASSY,
                  BUT I'M SOMEWHERE IN THAT ZONE
                  'CAUSE FOR THE FIRST TIME IN FOREVER,
                  I WON'T BE ALONE.
                      (speaking)
                  I can't wait to meet everyone....
                  (GASP) What if I meet THE ONE?

   -Anna twists herself in a velvet drape like it's a gown. She
   acts like she looks gorgeous, but she looks ridiculous.

                            ANNA (CONT'D)
                  TONIGHT, IMAGINE ME GOWN AND ALL-
                  FETCHINGLY DRAPED AGAINST THE WALL.
                  THE PICTURE OF SOPHISTICATED GRACE.

   -She notices the bust of a man across the room.

                            ANNA (CONT'D)
                      (google-eyed)
                  I SUDDENLY SEE HIM STANDING THERE,
                  A BEAUTIFUL STRANGER TALL AND FAIR.
                      (mouth full of chocolate)
                  I WANNA STUFF SOME CHOCOLATE IN MY
                  FACE!

   -She grabs the bust of the man and swings it around.

                            ANNA (CONT'D)
                  BUT THEN WE LAUGH AND TALK ALL EVENING,
                  WHICH IS TOTALLY BIZARRE.
                  NOTHING LIKE THE LIFE I'VE LED SO FAR.

   The bust goes flying and lands on the top of the cake.

   -Anna bursts into the portrait room, bounces on the
   furniture, and interacts with the paintings.
                                                               16
FROZEN - J. Lee



                            ANNA (CONT'D)
                  FOR THE FIRST TIME IN FOREVER,
                  THERE'LL BE MAGIC, THERE'LL BE FUN.
                  FOR THE FIRST TIME IN FOREVER,
                  I COULD BE NOTICED BY SOMEONE.
                  AND I KNOW IT IS TOTALLY CRAZY
                  TO DREAM I'D FIND ROMANCE.
                  BUT FOR THE FIRST TIME IN FOREVER,
                  AT LEAST I'VE GOT A CHANCE!

   -INT. LIBRARY. ELSA, now a very poised 21, watches out the
   window as the coronation guests arrive.

                            ELSA
                  DON'T LET THEM IN.
                  DON'T LET THEM SEE.
                  BE THE GOOD GIRL
                  YOU ALWAYS HAVE TO BE.

   Elsa moves to a painting of her father's coronation. She
   takes off her gloves and mimics the painting by holding a
   candlestick and ornament in place of an orb and scepter.

                            ELSA (CONT'D)
                  CONCEAL. DON'T FEEL.
                  PUT ON A SHOW.
                  MAKE ONE WRONG MOVE
                  AND EVERYONE WILL KNOW.

   The candlestick and ornament ice over. Elsa gasps, slams them
   back down onto the table. She tries to reassure herself.

                            ELSA (CONT'D)
                  BUT IT'S ONLY FOR TODAY.

   We cut between Anna's excitement and Elsa's nerves.

                            ANNA
                  IT'S ONLY FOR TODAY!

                            ELSA
                  IT'S AGONY TO WAIT.

                            ANNA
                  IT'S AGONY TO WAIT!!!

                            ELSA
                  TELL THE GUARDS TO OPEN UP THE GATE.

                            ANNA
                  THE GATE!!!

   -Finally, the gates are open! Anna moves through the crowd,
   admiring the people around her.
                                                                  17
FROZEN - J. Lee



            ANNA (CONT'D)                              ELSA
   FOR THE FIRST TIME IN                  DON'T LET THEM IN
   FOREVER.                               DON'T LET THEM SEE

                ANNA                                   ELSA
   I'M GETTING WHAT I'M DREAMING          BE THE GOOD GIRL
   OF                                     YOU ALWAYS HAVE TO BE

                ANNA                                   ELSA
   A CHANCE TO LEAVE MY SISTER'S          CONCEAL.
   WORLD                                  CONCEAL. DON'T FEEL.
   A CHANCE TO FIND TRUE LOVE             DON'T LET THEM KNOW.

   -Anna hurries over the bridge and into the village square.

                            ANNA (CONT'D)
                  I KNOW IT ALL ENDS TOMORROW,
                  SO IT HAS TO BE TODAY!!
                  'CAUSE FOR THE FIRST TIME IN
                  FOREVER. . .
                  FOR THE FIRST TIME IN FOREVER!
                  NOTHING'S IN MY WAY!!!

   -Anna SLAMS right into the breast of a HORSE!

   She falls back and lands in a small wooden boat. It tips off
   of the dock. She's heading overboard. But just then, the
   horse slams his hoof into the boat and steadies it.

                               ANNA (CONT'D)
                         (frustrated)
                  Hey!

                            HANS
                  I'm so sorry. Are you hurt?

   The rider, HANS, sure is handsome and regal.

                            ANNA
                      (gentler)
                  Hey. I-ya, no. No. I'm okay.

                            HANS
                  Are you sure?

                            ANNA
                  Yeah, I just wasn't looking where I
                  was going. But I'm okay.

   He hops down from his horse and steps into the boat.

                            ANNA (CONT'D)
                  I'm great, actually.
                                                            18
FROZEN - J. Lee



                            HANS
                  Oh, thank goodness.

   He offers her a hand and their eyes meet. Chemistry. He helps
   her to her feet.

                            HANS (CONT'D)
                      (bowing)
                  Prince Hans of the Southern Isles.

                            ANNA
                      (curtseying)
                  Princess Anna of Arendelle.

                            HANS
                  Princess...? My Lady.

   He drops to his knees, head bowed. The horse bows too,
   curling his hoof up and out of the boat.

   The boat tips. Hans tumbles on top of Anna. Awkward.

                            ANNA
                  Hi...again.

   The horse slams his foot back into the boat to stabilize it.
   Anna and Hans tumble the other way. Anna lands on top of him.

                            HANS
                  Oh boy.

                            ANNA
                  Ha. This is awkward. Not you're
                  awkward, but just because we're--
                  I'm awkward. You're gorgeous.
                      (did she just say that?)
                  Wait, what?

   Hans quickly gets to his feet and helps Anna up again.

                            HANS
                  I'd like to formally apologize for
                  hitting the Princess of Arendelle
                  with my horse...and for every
                  moment after.

                            ANNA
                  No. No-no. It's fine. I'm not THAT
                  Princess. I mean, if you'd hit my
                  sister Elsa, that would be-- yeash!
                  Cuz, you know...
                      (patting the horse)
                  Hello.
                            (MORE)
                                                               19
FROZEN - J. Lee

                            ANNA (CONT'D)
                      (to Hans)
                  But, lucky you, it's-it's just me.

                              HANS
                  Just you?

   Hans smiles, amused. She smiles back. The bells RING. She
   doesn't notice at first; she's too busy drinking in Hans's
   handsomeness.

                            ANNA
                  ...The bells. The coronation. I-I-I
                  better go. I have to...I better go.

   She hurries off, stops, turns back. Gives Hans a little wave.

                              ANNA (CONT'D)
                  Bye!

   As she rushes off again, Hans waves back. The horse waves
   too, once again taking his hoof out of the boat.

                              HANS
                  Oh no.

   The boat falls, with Hans in it. SPLASH! It lands upside down
   in the water. Hans raises it up off of him, gasping for air.

                                                         CUT TO:

   INT. CHURCH CHAPEL -- DAY

   Elsa stands at the alter. Anna stands off to one side. She
   peeks out to the audience.

   Hans waves at her from the pews. He's changed his clothes.

   The crown is placed on Elsa's head. The scepter and orb are
   presented to Elsa on a pillow. She slowly reaches for them.

                            BISHOP
                      (a whisper)
                  Your Majesty, the gloves.

   Elsa hesitates. She breathes nervously, removes her gloves,
   places them on the pillow. Her hands shake. She takes the orb
   and scepter, then turns to the people.

                            BISHOP (CONT'D)
                      (formal, in Old Norse)
                  Sehm hon HELL-drr IN-um HELL-gum
                  AYG-num ok krund ee THES-um HELL-
                  gah STAHTH, ehk teh frahm FUR-ear U-
                  thear...
                                                               20
FROZEN - J. Lee



   The scepter and orb start to freeze over.

                            BISHOP (CONT'D)
                  ...Queen Elsa of Arendelle.

                            CROWD
                  Queen Elsa of Arendelle.

   Just in time. Elsa manages to set the orb and scepter back
   down on the pillow before anyone notices the ice. She picks
   up her gloves and slips them on. She made it.

                                                        CUT TO:


   INT. GREAT HALL -- NIGHT

   Springy music fills the Great Hall. Guests dance. Eat. Laugh.

   TRUMPETS SOUND.

                            KAI
                      (announcing)
                  Queen Elsa of Arendelle.

   Elsa enters, poised and looking surprisingly content. She
   stands under a formal awning.

                            KAI (CONT'D)
                  Princess Anna of Arendelle!

   Anna runs into the room, waves awkwardly. Kai ushers her over
   to stand right next to Elsa.

                            ANNA
                  Here? Are you sure?

   She and Elsa sneak awkward peeks at each other.

                            ELSA
                  ...Hi.

                            ANNA
                  Hi me...? Oh. Um. Hi.

                            ELSA
                  ...You look beautiful.

                            ANNA
                  Thank you. You look beautifuller. I
                  mean, not fuller. You don't look
                  fuller, but more beautiful.
                                                            21
FROZEN - J. Lee



                               ELSA
                  Thank you.

   They look out at the celebration.

                            ELSA (CONT'D)
                  So, this is what a party looks
                  like?

                            ANNA
                  It's warmer than I thought.

                            ELSA
                  And what is that amazing smell?

   They both close their eyes and inhale.

                            ANNA AND ELSA (TOGETHER)
                  ...Chocolate.

   Their eyes pop open. They laugh.

   Elsa looks back out at the party. Anna looks at Elsa. She
   wants to say so much, but she can't think of where to start.
   Just as she finds her way, Kai interrupts.

                            KAI
                  Your Majesty. The Duke of
                  Weaseltown.

                            DUKE
                  Weselton. The Duke of Weselton.
                      (to Elsa)
                  Your Majesty, as your closest
                  partner in trade, it seems only
                  fitting that I offer you your first
                  dance as queen.

   The Duke does a funny flitter of his feet, a hitch-kick, and
   a deep bow.

                            DUKE (CONT'D)
                      (whispers to himself)
                  One, two, three. Jump.

   As he holds out his hand, head down, his toupee dips forward.
   Anna giggles. Elsa looks at Anna, stifles a giggle herself.

                            ELSA
                      (to the Duke)
                  Thank you...only I don't dance.
                                                               22
FROZEN - J. Lee



                            DUKE
                      (offended)
                  Oh...?

                            ELSA
                  But my sister does.

                            ANNA
                  What?

                            DUKE
                  Lucky you....

                            ANNA
                  Oh, I don't think--

   The Duke grabs Anna's arm and yanks her away before she can
   protest.

                             DUKE
                  If you swoon, let me know, I'll
                  catch you.

   Anna looks back at Elsa, desperately.

                            ELSA
                  Sorry.

   OUT ON THE DANCE FLOOR: The Duke showboats, but he's just
   awful. Anna tries to make the best of it.

                            DUKE
                  Like an agile peacock... CLUCK-
                  CLUGGLE-CLUCK!

   He lands on her feet.

                            ANNA
                  Ow. Ow.

                            DUKE
                  Speaking of, so great to have the
                  gates open. Why did they shut them
                  in the first place? Do you know the
                  reason? Hmm?

   He gets in her face, suspicious.

                            ANNA
                  ...No.
                                                                   23
FROZEN - J. Lee



                            DUKE
                  Oh, all right. Hang on. They don't
                  call me the little dipper for
                  nothing.

   He dips Anna back. Elsa peeks through the crowd, can barely
   hold in her laughter. Anna shoots Elsa funny, help-me looks.

                            DUKE (CONT'D)
                      (groove fully on)
                  Like a chicken...with the face of a
                  monkey...I fly.

                                                        JUMP CUT TO:


   MOMENTS LATER...

   Anna limps back to Elsa.

                            DUKE (O.S.)
                  Let me know when you're ready for
                  another round, M'Lady.

                            ELSA
                  Well, he was sprightly.

                            ANNA
                      (rubbing her sore feet)
                  Especially for a man in heels.

                            ELSA
                  Are you okay?

                            ANNA
                      (loving Elsa's attention)
                  I've never been better. This is so
                  nice. I wish it could be like this
                  all the time.

                             ELSA
                      (sincere)
                  Me too....

   But then Elsa catches herself. She stiffens up, looks away.

                            ELSA (CONT'D)
                  But it can't.

                            ANNA
                  Why not? If--

                            ELSA
                  It just can't.
                                                                24
FROZEN - J. Lee



   Anna's smile drops. She tries not to get emotional.

                            ANNA
                  Excuse me for a minute.

   She walks away. Elsa watches her go, saddened.

   Moving through the crowd, Anna gets bumped by a bowing man's
   butt. She falls. Just before she hits the floor, Hans catches
   her. He smiles perfectly.

                            HANS
                  Glad I caught you.

                               ANNA
                  Hans.

   He smoothly sets his drink down on a passing tray. He lifts
   her up and leads her in a romantic dance.

                                                     DISSOLVE TO:

   LATER: Anna and Hans drink and chat.

                            ANNA (CONT'D)
                  I often had the whole parlor to
                  myself to slide... Oops. Sorry.

   She hits him in the face by mistake with her hand. He laughs.

                                                     DISSOLVE TO:

   -THE CASTLE DOORS: Anna and Hans stroll out of the castle.

                            ANNA (CONT'D)
                  ...Your physique helps I'm sure.

                                                     DISSOLVE TO:

   -THE ROSE GARDEN... Hans notices her white streak.

                            HANS
                      (about her white streak)
                  What's this?

                            ANNA
                  I was born with it, although I
                  dreamt I was kissed by a troll.

                               HANS
                  I like it.

                                                     DISSOLVE TO:
                                                       25
FROZEN - J. Lee



   EXT. BALCONY -- NIGHT

   Anna teaches Hans how to eat krumkake.

                            ANNA
                  Yeah, the whole thing! You got it.

   They laugh as the krumkake crumbles in his face.

                            ANNA(CONT'D)
                  Okay wait, wait. So you have how
                  many brothers?

                            HANS
                  Twelve older brothers. Three of
                  them pretended I was invisible...
                  literally...for two years.

                            ANNA
                  That's horrible.

                            HANS
                  It's what brothers do.

                            ANNA
                  ...And sisters. Elsa and I were
                  really close when we were little.
                  But then, one day she just shut me
                  out, and I never knew why.

   He takes her hand. Leans in close.

                            HANS
                  I would never shut you out.

                            ANNA
                  Okay, can I just say something
                  crazy?

                            HANS
                  I love crazy.

                           "Love is an Open Door"

                            ANNA
                      (singing)
                  ALL MY LIFE HAS BEEN A SERIES OF
                  DOORS IN MY FACE.
                  AND THEN SUDDENLY I BUMP INTO YOU.

                            HANS
                  I was thinking the same thing,
                  because like. . .
                            (MORE)
                                                               26
FROZEN - J. Lee

                            HANS (CONT'D)
                  I'VE BEEN SEARCHING MY WHOLE LIFE
                  TO FIND MY OWN PLACE.
                  AND MAYBE IT'S THE PARTY TALKING,
                  OR THE CHOCOLATE FONDUE.

                            ANNA
                  BUT WITH YOU-

                            HANS
                  BUT WITH YOU,
                  I FOUND MY PLACE.

                            ANNA
                  I SEE YOUR FACE.

                            BOTH
                  AND IT'S NOTHING LIKE I'VE EVER
                  KNOWN BEFORE.

   They jump to the neighboring balcony and enter a door.

   They come out on top of one of the castle's towers.

                            BOTH (CONT'D)
                  LOVE IS AN OPEN DOOR!
                  LOVE IS AN OPEN DOOR!

   Cut to them sliding across an empty hallway in their socks.

                            BOTH (CONT'D)
                  LOVE IS AN OPEN DOOR

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                            BOTH
                  LOVE IS AN OPEN DOOR.

   They hop up on the castle roof and watch a shooting star.

                            HANS
                  I MEAN IT'S CRAZY.

                              ANNA
                  What?
                                                            27
FROZEN - J. Lee



                            HANS
                  WE FINISH EACH OTHER'S-

                            ANNA
                  SANDWICHES!

                            HANS
                  That's what I was gonna say!

   They slide down the back of the roof out of sight.

   We next find them strutting on a bridge ledge.

                            ANNA
                  I'VE NEVER MET SOMEONE-

                            BOTH
                  WHO THINKS SO MUCH LIKE ME.

                            BOTH (SPOKEN) (CONT'D)
                  Jinx.. . .jinx again.

   Are they doing the robot? No. They're imitating the
   mechanical figures on the clock tower.

                            BOTH (CONT'D)
                  OUR MENTAL SYNCHRONIZATION
                  CAN HAVE BUT ONE EXPLANATION,

                            HANS
                  YOU-

                            ANNA
                  AND I-

                            HANS
                  WERE-

                            ANNA
                  JUST-

                            BOTH
                  MEANT TO BE.

   Anna and Hans dance on top of the lighthouse and cast dancing
   shadows across the sails of ships in the docks.

                            ANNA
                  SAY GOODBYE-

                            HANS
                  SAY GOODBYE-
                                                               28
FROZEN - J. Lee



                            BOTH
                  TO THE PAIN OF THE PAST.

                            BOTH (CONT'D)
                  WE DON'T HAVE TO FEEL IT ANYMORE!
                  LOVE IS AN OPEN-

   They play hide and seek amongst the stable doors.

                            BOTH (CONT'D)
                  DOOR! LOVE IS AN OPEN DOOR!

   They climb to the waterfall looking out over the kingdom.

   Anna raises up her hands to frame the moon. Hans puts his
   hands on top of hers. Together their hands form a heart.

                            BOTH (CONT'D)
                  LIFE CAN BE SO MUCH MORE-

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                              ANNA
                  WITH YOU!

                              HANS
                  WITH YOU!

                            BOTH
                  LOVE IS AN OPEN

                              HANS
                  DOOR.

                              ANNA
                  DOOR.

                            HANS
                  Can I say something crazy...? Will
                  you marry me?

                            ANNA
                  Can I just say something even
                  crazier? Yes.

                                                       CUT TO:
                                                              29
FROZEN - J. Lee



   INT. BALL -- NIGHT

   Anna pushes through the crowd towards Elsa, Hans in tow.

                            ANNA
                  Oops! Pardon. Sorry. Can we just
                  get around you there? Thank you.
                  Oh, there she is. Elsa!

   Elsa turns to Anna. Anna curtseys awkwardly.

                            ANNA (CONT'D)
                  I mean...Queen.... Me again. Um.
                  May I present Prince Hans of the
                  Southern Isles.

                            HANS
                      (bowing)
                  Your Majesty.

   Elsa gives a polite but reserved curtsey.

                            ANNA
                  We would like--

                            HANS
                  --your blessing--

                            ANNA
                  --of--

                            ANNA/HANS
                  --our marriage!

                            ELSA
                  Marriage...?

                            ANNA
                  Yes!

                            ELSA
                  I'm sorry, I'm confused.

                            ANNA
                  Well, we haven't worked out all the
                  details ourselves. We'll need a few
                  days to plan the ceremony. Of
                  course we'll have soup, roast, and
                  ice cream and then--
                  Wait. Would we live here?

                            ELSA
                  Here?
                                                         30
FROZEN - J. Lee



                            HANS
                  Absolutely!

                            ELSA
                  Anna--

                            ANNA
                  Oh, we can invite all twelve of
                  your brothers to stay with us--

                            ELSA
                  What? No, no, no, no, no.

                            ANNA
                  Of course we have the room. I don't
                  know. Some of them must--

                            ELSA
                  Wait. Slow down. No one's brothers
                  are staying here. No one is getting
                  married.

                            ANNA
                  Wait, what?

                            ELSA
                  May I talk to you, please. Alone.

   Anna sees Hans's worried face. Hooks arms with him.

                            ANNA
                  No. Whatever you have to say, you-
                  you can say to both of us.

                            ELSA
                  Fine. You can't marry a man you
                  just met.

                            ANNA
                  You can if it's true love.

                            ELSA
                  Anna, what do you know about true
                  love?

                            ANNA
                  More than you. All you know is how
                  to shut people out.

                            ELSA
                  You asked for my blessing, but my
                  answer is no. Now, excuse me.
                                                              31
FROZEN - J. Lee



                            HANS
                  Your Majesty, if I may ease your--

                             ELSA
                      (flustered)
                  No, you may not. And I-I think you
                  should go.

   Elsa walks away. As she passes the Royal Handler--

                            ELSA (CONT'D)
                  The party is over. Close the gates.

                            ANNA
                  What? Elsa, no. No, wait!

   Anna grabs Elsa's hand. She pulls off Elsa's glove. Elsa
   gasps, spins around and reaches for the glove in panic.

                            ELSA
                  Give me my glove!

   Anna holds the glove away from Elsa.

                            ANNA
                      (desperate)
                  Elsa, please. Please. I can't live
                  like this anymore.

   Elsa fights tears.

                             ELSA
                      (weak)
                  ...Then leave.

   Elsa sees Anna's hurt face. It's too much. She can't hold it
   in. She turns and rushes away.

                            ANNA
                      (heartbroken)
                  ...What did I ever do to you?!

   The party goes silent as everyone watches the sisters.

                            ELSA
                  Enough, Anna.

                            ANNA
                  No. Why? Why do you shut me out?!
                  Why do you shut the world out?!
                  What are you so afraid of?!

                            ELSA
                  I said, enough!
                                                              32
FROZEN - J. Lee



   Ice shoots from Elsa's hand, spikes across the floor! Guests
   cry out in shock, back away.

                            DUKE
                      (ducking behind his men)
                  ...Sorcery. I knew there was
                  something dubious going on here.

                             ANNA
                  Elsa...?

   Elsa rushes out of the room.

                                                        CUT TO:


   EXT. COURTYARD -- NIGHT

   Elsa bursts out of the castle door. The CITIZENS CHEER!

                            CROWD
                  There she is. Your Majesty! Long
                  live the Queen! Queen Elsa.... Come
                  drink with us.

   Elsa ducks through the crowd, holding her bare hand.

                            BOWING TOWNSMAN
                  Queen Elsa.

                            TOWNSWOMAN WITH BABY
                  Your Majesty? Are you all right?

   Elsa backs away from the baby. She knocks into the fountain,
   grabs its edge. The waters freeze at her touch.

   GASPS of shock and fear sweep over the crowd.

   The Duke and thugs come out the door.

                            DUKE
                  There she is! Stop her!

                             ELSA
                      (to the Duke)
                  Please, just stay away from me.
                  Stay away!

   Magic accidentally shoots from her hand and turns the
   staircase into ice. The thugs and the Duke fall.

                            DUKE
                  Monster.... Monster!
                                                            33
FROZEN - J. Lee



   The crowd panics.

   A snowstorm begins. Elsa flees.

   Anna runs out of the palace doors, carrying the glove.

                            ANNA
                  Elsa!

   Hans follows closely behind her.

   GATES TO THE KINGDOM: Elsa runs out of the gates and down to
   the water's edge. The shoreline freezes under her feet.

   Anna calls to her from the gates.

                            ANNA (CONT'D)
                  Elsa! Wait, please!

   Elsa glances back at Anna, but turns away. She tentatively
   steps out onto the fjord. It freezes instantly. She breaks
   into a run, as the water freezes over with each step.

                            ANNA (CONT'D)
                  Elsa, stop!

   Anna rushes out onto the fjord ice, slips, falls.

                            HANS
                  Anna!

   Hans rushes to Anna's side.

   Elsa reaches the far shore. She doesn't look back. She just
   scrambles into the mountains.

                            ANNA
                  No.

                            HANS
                      (shocked)
                  Look.... The fjord.

   The ice spreads out until the entire fjord is frozen, locking
   the ships in place.


   INT. CASTLE COURTYARD -- NIGHT

   Snow falls. Hans and Anna move through the panicking crowd.

                            CROWD WALLAH
                  Snow? It's...snow...in July.
                                                             34
FROZEN - J. Lee



                            HANS
                  ...Are you all right?

                              ANNA
                        (in shock)
                  No.

                            HANS
                  Did you know?

                              ANNA
                  No.

   Nearby, the Duke flutters about in fright.

                            DUKE
                  Look! It's snowing! It's snowing!
                  The Queen has cursed this land! She
                  must be stopped!
                      (to his thugs)
                  You have to go after her.

   Anna rushes up to the Duke.

                              ANNA
                  Wait, no!

   The Duke hides behind his thugs and points out at Anna.

                            DUKE
                  You! Is there sorcery in you, too?
                  Are you a monster, too?

                            ANNA
                  No. No. I'm completely ordinary.

                            HANS
                  That's right she is...
                      (realizing how that
                       sounds)
                  ...in the best way.

                            ANNA
                  ...And my sister's not a monster.

                            DUKE
                  She nearly killed me.

                            HANS
                  You slipped on ice.

                              DUKE
                  Her ice!
                                                            35
FROZEN - J. Lee



                            ANNA
                  It was an accident. She was scared.
                  She didn't mean it. She didn't mean
                  any of this.... Tonight was my
                  fault. I pushed her. So I'm the one
                  that needs to go after her.

                            DUKE
                  Yes. Fine. Do.

                            HANS
                  What?

                            ANNA
                      (to the Royal Handler)
                  Bring me my horse, please.

                            HANS
                  Anna, no. It's too dangerous.

                            ANNA
                  Elsa's not dangerous. I'll bring
                  her back, and I'll make this right.

   The Royal Handler brings Anna her horse and a cloak.

                            HANS
                  I'm coming with you.

                             ANNA
                  No, I need you here to take care of
                  Arendelle.

   He sees the desperation in her eyes.

                            HANS
                  ...On my honor.

   She throws on the cloak and hops right onto the horse,
   coronation dress and all.

                            ANNA
                      (to the crowd)
                  I leave Prince Hans in charge!

                            HANS
                      (before letting her go)
                  Are you sure you can trust her? I
                  don't want you getting hurt.

                            ANNA
                  She's my sister; she would never
                  hurt me.
                                                            36
FROZEN - J. Lee



   She snaps the reins and rides out. Hans watches after her.

   The snow picks up and overtakes our view. We push through a
   blizzard...lose our way...then finds ourselves...


   EXT. HIGH UP IN THE MOUNTAINS -- NIGHT

   Well above the snow-line, a small figure climbs the highest
   peak. It's Elsa. Finally, she stops, looks around. Catches
   her breath and sings...

                                "Let It Go"

                            ELSA
                  THE SNOW GLOWS WHITE
                  ON THE MOUNTAIN TONIGHT,
                  NOT A FOOTPRINT TO BE SEEN.
                  A KINGDOM OF ISOLATION
                  AND IT LOOKS LIKE I'M THE QUEEN.

                  THE WIND IS HOWLING
                  LIKE THIS SWIRLING STORM INSIDE.
                  COULDN'T KEEP IT IN,
                  HEAVEN KNOWS I TRIED. . .

                  DON'T LET THEM IN,
                  DON'T LET THEM SEE,
                  BE THE GOOD GIRL YOU ALWAYS HAVE TO
                  BE.
                  CONCEAL,
                  DON'T FEEL,
                  DON'T LET THEM KNOW.
                  WELL, NOW THEY KNOW.

   Elsa takes off her glove and throws it into the air.

                            ELSA (CONT'D)
                  LET IT GO. LET IT GO.
                  CAN'T HOLD IT BACK ANYMORE.

   Elsa creates a snowman, just like the one she made with Anna
   when they were children.

                            ELSA (CONT'D)
                  LET IT GO. LET IT GO.
                  TURN AWAY AND SLAM THE DOOR.
                  I DON'T CARE WHAT THEY'RE GOING TO
                  SAY.
                  LET THE STORM RAGE ON.
                  THE COLD NEVER BOTHERED ME ANYWAY.

   Elsa lets her cape fly back into the wind.
                                                            37
FROZEN - J. Lee



                            ELSA (CONT'D)
                  IT'S FUNNY HOW SOME DISTANCE
                  MAKES EVERYTHING SEEM SMALL.
                  AND THE FEARS THAT ONCE CONTROLLED ME
                  CAN'T GET TO ME AT ALL.
                  IT'S TIME TO SEE
                  WHAT I CAN DO,
                  TO TEST THE LIMITS AND BREAK THROUGH.
                  NO RIGHT, NO WRONG,
                  NO RULES FOR ME...I'M FREE!

   Elsa creates ice steps and climbs them.

                            ELSA (CONT'D)
                  LET IT GO! LET IT GO!
                  I AM ONE WITH THE WIND AND SKY.
                  LET IT GO! LET IT GO!
                  YOU'LL NEVER SEE ME CRY.
                  HERE I STAND AND HERE I'LL STAY.

   Elsa slams her foot down and forms a giant snowflake.

                            ELSA (CONT'D)
                  LET THE STORM RAGE ON....

   In a flurry of creative release, she raises the snowflake on
   ice beams, builds walls, archways, a glistening chandelier,
   and an intricate ceiling that leaves the sky visible.

                            ELSA (CONT'D)
                  MY POWER FLURRIES THROUGH THE AIR
                  INTO THE GROUND.
                  MY SOUL IS SPIRALING IN FROZEN
                  FRACTALS ALL AROUND.
                  AND ONE THOUGHT CRYSTALLIZES LIKE
                  AN ICY BLAST-

   Standing firmly in her mighty ice palace, Elsa removes her
   crown and throws it.

                            ELSA (CONT'D)
                  I'M NEVER GOING BACK,
                  (back to resolve)
                  THE PAST IS IN THE PAST!

   She takes down her hair and creates a new dress made of ice.

                            ELSA (CONT'D)
                  LET IT GO! LET IT GO!
                  AND I'LL RISE LIKE THE BREAK OF DAWN.
                  LET IT GO! LET IT GO!

   The sun rises. Elsa struts onto out onto a balcony and into
   the light. She's free.
                                                                  38
FROZEN - J. Lee



                            ELSA (CONT'D)
                  THAT PERFECT GIRL IS GONE.
                  HERE I STAND IN THE LIGHT OF DAY.
                  LET THE STORM RAGE ON!!
                  THE COLD NEVER BOTHERED ME ANYWAY.

   She turns and slams her ice palace door on us.

                                                           CUT TO:


   EXT. THE FJORD FOREST -- DAY

   Anna rides her horse through two feet of snow. She shivers.

                            ANNA
                      (shivering)
                  Elsa! Elsa! It's me, Anna...your
                  sister who didn't mean to make you
                  freeze the summer. I'm sorry. It's
                  all my f-f-f-f-f-f-fault.

                                                       DISSOLVE TO:

   LATER: Anna and the horse struggle through a wooded area.

                            ANNA (CONT'D)
                      (hearing a wolf howl)
                  Of course, none of this would have
                  happened if she'd just told me her
                  secret...ha...she's a stinker.

   A branch of a nearby tree snaps and startles the horse. Anna
   goes flying off, lands face down in the snow. She sits up.
   Spits out snow. Sees the horse running away.

                            ANNA (CONT'D)
                  Oh no. No. No. No. Come back. No.
                  No. No. No.... Oooo-kay.

   He doesn't come back. Anna grabs onto a branch of a leaning
   conifer, tries to pull herself to her feet, but the tree
   snaps upright and releases all its snow onto her. GROAN.

                                                       DISSOLVE TO:


   EXT. MOUNTAIN -- NIGHT

   The Northern Lights shine as Anna struggles, out of breath,
   reaching the top of a hill.
                                                            39
FROZEN - J. Lee



                            ANNA
                  Snow, it had to be snow, she
                  couldn't have had tr-tr-tropical
                  magic that covered the f-f-fjords
                  in white sand and warm --

   She sees smoke rising up in the distance.

                            ANNA (CONT'D)
                  Fire! WHOA!

   Anna goes tumbling down the hill. She lands with a crash in
   an icy stream at the bottom.

                            ANNA (CONT'D)
                      (from inside the snowball)
                  Cold, cold, cold, cold, cold...


   EXT. A SMALL BUILDING AND STABLE -- NIGHT

   Anna shuffles up to the building, her dress frozen stiff. She
   shakes the snow off a sign and reads:

                            ANNA
                  Wandering Oaken's Trading Post.

   Snow drops off a smaller sign. She reads it, happily.

                            ANNA (CONT'D)
                  Ooh! And Sauna...


   INT. WANDERING OAKEN'S TRADING POST & SAUNA -- NIGHT

   Anna steps cautiously through the door--which hits her frozen
   butt and knocks her into the center of the shop. She looks
   around, sees only summer supplies.

                             OAKEN (O.S.)
                  Hoo hoo.

   Anna turns to see a bright-faced fellow sitting low behind
   the counter, fingers tapping tip to tip.

                            OAKEN (CONT'D)
                  Big summer blow out. Half off
                  swimming suits, clogs, and a sun
                  balm of my own invention, yah?

                            ANNA
                  Oh, great. For now, how about
                  boots. Winter boots...and dresses?
                                                            40
FROZEN - J. Lee



                            OAKEN
                      (slight disappointment)
                  That would be in our winter
                  department.

   The winter department contains one outfit, a pick ax, and a
   lonely pair of boots.

                            ANNA
                  Oh. Um, I was just wondering; has
                  another young woman, the Queen
                  perhaps, I don't know, passed
                  through here?

   She brings the clothes and boots to the counter.

                            OAKEN
                  Only one crazy enough to be out in
                  this storm is you, dear?

   The front door suddenly blows open and in walks a mass of a
   man covered in ice. Underneath is KRISTOFF.

                            OAKEN (CONT'D)
                  You and this fellow.... Hoo hoo.
                  Big summer blow out.

   Kristoff walks right up to Anna.

                            KRISTOFF
                      (in her face)
                  Carrots.

                            ANNA
                  Huh?

                            KRISTOFF
                  Behind you.

                            ANNA
                  Oh, right. Excuse me.

   Anna moves out of Kristoff's way. He grabs a bunch of
   carrots, tosses them on the counter, then moves through the
   place, gathering other supplies.

                            OAKEN
                      (to Kristoff)
                  A real howler in July, yah? Where
                  ever could it be coming from?

                            KRISTOFF
                  The North Mountain.
                                                            41
FROZEN - J. Lee



                            ANNA
                      (to herself)
                  North Mountain.

   Kristoff brings his supplies to the counter. Oaken counts on
   his fingertips.

                            OAKEN
                  That'll be forty.

                            KRISTOFF
                  Forty? No, ten.

                            OAKEN
                      (sweet as pie)
                  Oh dear, that's no good. See these
                  are from our winter stock, where
                  supply and demand have a big
                  problem.

                            KRISTOFF
                  You want to talk about a supply and
                  demand problem? I sell ice for a
                  living.

   Kristoff motions out the window, where we see the blocks of
   ice on his sled, covered in snow.

                            ANNA
                  Ooh, that's a rough business to be
                  in right now. I mean, that is
                  really...
                      (he shoots her a look)
                  Ahem. That's unfortunate.

                            OAKEN
                  Still forty. But I will throw in a
                  visit to Oaken's sauna. Hoo hoo!
                  Hi, family.

   Kristoff and Anna turn to see a naked family waving through
   the window of the steaming sauna.

                             NAKED FAMILY
                  Hoo hoo!

                            KRISTOFF
                  ...Ten's all I got. Help me out.

                            OAKEN
                      (isolating the carrots)
                  Ten will get you this and no more.

   Kristoff seethes. Stalemate.
                                                               42
FROZEN - J. Lee



                            ANNA
                  Okay, just tell me one thing; what
                  was happening on the North
                  Mountain? Did it seem magical?

   Kristoff pulls down his scarf and gives Anna a firm answer.

                            KRISTOFF
                  Yes! Now, back up while I deal with
                  this crook here.

   Oaken stands up, revealing his seven-foot stature.

                            OAKEN
                  What did you call me?


   EXT. WANDERING OAKEN'S TRADING POST AND SAUNA -- NIGHT

   Oaken stomps out the door, carrying Kristoff with one arm.

                            KRISTOFF
                  Okay. Okay, I'm- Ow! Whoa!

   Oaken throws Kristoff, who face-plants in the snow.

                             OAKEN
                  Bye bye.

   Oaken slams the door. Kristoff sits up. His reindeer, Sven,
   canters over, snorts, and nudges him, expectantly.

                            KRISTOFF
                  No Sven, I didn't get your carrots.

   Sven huffs in his face. Kristoff turns away and sees
   something. He points to a dilapidated barn.

                            KRISTOFF (CONT'D)
                  But I did find us a place to sleep.
                  And it's free.


   INT. WANDERING OAKEN'S TRADING POST AND SAUNA -- NIGHT

   Anna stands watching Oaken and all his great height as he
   squeezes behind the counter and sits down low again.

                            OAKEN
                      (teddy bear)
                  I'm sorry about this violence. I
                  will add a quart of lutefisk, so
                  we'll have good feelings. Just the
                  outfit and boots, yah?
                                                                 43
FROZEN - J. Lee



   Anna looks between Kristoff's supplies and the door.

                                                           CUT TO:


   INT. OAKEN'S STABLES - NIGHT

   Kristoff, now unfrozen, relaxes on a bed of hay, playing his
   lute and singing to (and for) Sven.

                    "Reindeer(s) are Better than People"

                            KRISTOFF
                  REINDEERS ARE BETTER THAN PEOPLE.
                  SVEN, DON'T YOU THINK THAT'S TRUE?

                             KRISTOFF (AS SVEN) (CONT'D)
                      (throwing his voice)
                  YEAH, PEOPLE WILL BEAT YOU & CURSE
                  YOU & CHEAT YOU.
                  EVERY ONE OF EM'S BAD, EXCEPT YOU.
                      (speaking)
                  Oh, thanks, Buddy.
                      (singing, as Kristoff)
                  BUT PEOPLE SMELL BETTER THAN
                  REINDEERS.
                  SVEN, DON'T YOU THINK I'M RIGHT?

                      (As Sven)
                  THAT'S ONCE AGAIN TRUE,
                  FOR ALL EXCEPT YOU.
                      (As Kristoff)
                  YOU GOT ME. LET'S CALL IT A NIGHT.
                      (As Sven)
                  GOOD NIGHT.
                      (As Kristoff)
                  DON'T LET THE FROSTBITE BITE.

   The door opens. Anna enters.

                               ANNA
                  Nice duet.

   Kristoff sits up with a start...sees who it is.

                            KRISTOFF
                  Oh, it's just you. What do you
                  want?

                            ANNA
                  I want you to take me up the North
                  Mountain.
                                                                   44
FROZEN - J. Lee



                            KRISTOFF
                  I don't take people places.

   He lays back down, closes his eyes.

                            ANNA
                  Let me rephrase that...

   A sack of supplies lands in Kristoff's lap.

                            KRISTOFF
                  Umph.

   He sits up. Looks in the bag.

                            ANNA
                  Take me up the North Mountain....
                  Please.

   He eyes her. He clearly doesn't take orders.

                            ANNA (CONT'D)
                  Look, I know how to stop this
                  winter.

   He considers, lies back down, pulls his hat over his eyes.

                            KRISTOFF
                  We leave at dawn.... And you forgot
                  the carrots for Sven.

   A bag of carrots hits Kristoff in the face.

                            KRISTOFF (CONT'D)
                  Ugh!

                            ANNA
                  Oops. Sorry. Sorry. I'm sorry. I
                  didn't--
                      (catching herself)
                  We leave now. Right now.

   She steps back outside and waits, anxiously. Annoyed,
   Kristoff offers Sven a carrot. Sven has a bite. Then Kristoff
   has a bite, contemplating.

                                                        SLAM CUT TO:


   EXT. MOUNTAIN HIGH -- NIGHT

   Sven races, top speed, up a narrow cliff, pulling the sled,
   which skids precariously. Kristoff mans the reins. Anna sits
   beside him.
                                                            45
FROZEN - J. Lee



                            KRISTOFF
                      (trying to scare Anna)
                  Hang on! We like to go fast!

                            ANNA
                      (fearless)
                  I like fast!

   Anna leans back and puts her feet up on the dashboard.

                            KRISTOFF
                  Whoa, whoa! Get your feet down.

   He pushes her feet down.

                            KRISTOFF (CONT'D)
                  This is fresh lacquer. Seriously,
                  were you raised in a barn?

   Kristoff spits on the dash to clean it. The spit flies back
   and hits Anna in the face.

                            ANNA
                      (grossed out)
                  Ew. No, I was raised in a castle.

   She wipes off her face.

                            KRISTOFF
                  So tell me, what made the Queen go
                  all ice-crazy?

                            ANNA
                  ...Oh well, it was all my fault. I
                  got engaged but then she freaked
                  out because I'd only just met him,
                  you know, that day. And she said
                  she wouldn't bless the marriage--

                            KRISTOFF
                  Wait. You got engaged to someone
                  you just met?

                            ANNA
                  Yeah. Anyway, I got mad and so she
                  got mad and then she tried to walk
                  away, and I grabbed her glove--

                            KRISTOFF
                  Hang on. You mean to tell me you
                  got engaged to someone you just
                  met?!
                                                            46
FROZEN - J. Lee



                            ANNA
                  Yes. Pay attention. But the thing
                  is she wore the gloves all the
                  time, so I just thought, maybe she
                  has a thing about dirt.

                            KRISTOFF
                  Didn't your parents ever warn you
                  about strangers?

   Anna eyes Kristoff up and down, then slides away from him.

                            ANNA
                  Yes, they did.... But Hans is not a
                  stranger.

                            KRISTOFF
                  Oh yeah? What's his last name?

                            ANNA
                  ...Of-the-Southern-Isles?

                            KRISTOFF
                  What's his favorite food?

                            ANNA
                  ...Sandwiches.

                            KRISTOFF
                  Best friend's name?

                            ANNA
                  Probably John.

                               KRISTOFF
                  Eye color.

                               ANNA
                  Dreamy.

                            KRISTOFF
                  Foot size...?

                            ANNA
                  Foot size doesn't matter.

                            KRISTOFF
                  Have you had a meal with him yet?
                  What if you hate the way he eats?
                  What if you hate the way he picks
                  his nose?

                            ANNA
                  Picks his nose?
                                                            47
FROZEN - J. Lee



                            KRISTOFF
                  And eats it.

                            ANNA
                  Excuse me, sir. He's a prince.

                            KRISTOFF
                  All men do it.

                             ANNA
                  Ew. Look it doesn't matter; it's
                  true love.

                            KRISTOFF
                  Doesn't sound like true love.

                            ANNA
                  Are you some sort of love expert?

                            KRISTOFF
                  No. But I have friends who are.

                            ANNA
                  You have friends who are love
                  experts.... I'm not buying it.

   Sven suddenly stops, ears perked in alarm.

                            KRISTOFF
                      (to Anna)
                  Stop talking.

                            ANNA
                  No, no, no. I'd like to meet these--

   Kristoff clamps his hand over Anna's mouth.

                            KRISTOFF
                  I mean it. SHHH.

   Kristoff stands, looks into the dark woods surrounding them.
   Sensing something behind them, he holds up his lantern. Its
   light reflects off...EYES. Several.

                            KRISTOFF(CONT'D)
                  Sven, go. Go!

   Sven takes off.

                            ANNA
                  What are they?

                            KRISTOFF
                  Wolves.
                                                              48
FROZEN - J. Lee



   Flashes of white dart through the woods. Kristoff hops into
   the back of the sled, grabs a torch. Lights it.

                            ANNA
                  Wolves. What do we do?

                            KRISTOFF
                  I've got this. You just...don't
                  fall off and don't get eaten.

                            ANNA
                  But I wanna help.

                             KRISTOFF
                  No.

                             ANNA
                  Why not?

                             KRISTOFF
                  Because I don't trust your
                  judgement.

                            ANNA
                  Excuse me?!

   A wolf jumps at them, but Kristoff kicks it off.

                            KRISTOFF
                  Who marries a man she just met?

   Anna grabs the lute, swings it right at Kristoff's head.

                            ANNA
                  It's true love!

   He screams, as she...BAM!...swings past Kristoff and knocks a
   wolf away.

                            KRISTOFF
                      (shocked)
                  Whoa.

   Just then Kristoff is yanked off the sled by another wolf.
   The torch goes flying. Anna catches it, shocked.

                            ANNA
                  Christopher!

   Kristoff grabs onto a loose rope hanging from the back of the
   sled and holds on for dear life as he's dragged behind.

                            KRISTOFF
                  It's Kristoff!
                                                               49
FROZEN - J. Lee



   A wolf jumps on Kristoff's back.

                            KRISTOFF (CONT'D)
                  AH!

   Anna thinks fast, uses the torch to light a blanket on fire.

                            ANNA
                  Duck!

   Anna throws the flaming blanket right at him. He ducks. The
   blanket hits the wolves. They tumble off Kristoff.

                            KRISTOFF
                  You almost set me on fire!

   Anna reaches out a hand, pulls Kristoff back onto the sled.

                            ANNA
                  But I didn't.

   Sven cries out. There is a massive gorge ahead.

                            ANNA (CONT'D)
                  Get ready to jump, Sven!

                            KRISTOFF
                  You don't tell him what to do!

   Kristoff shoves a satchel into her arms then scoops her up.

                            KRISTOFF (CONT'D)
                  I do!

   Kristoff tosses Anna onto Sven, then unhooks Sven's harness
   from the sled.

                            KRISTOFF (CONT'D)
                  Jump, Sven!

   Sven jumps the gorge with Anna on his back.

   Kristoff goes flying off behind them, still on the sled.

   Anna and Sven land safely on the other side of the gorge.

   Kristoff's sled loses momentum. It's not going to make it. He
   leaps off. He flaps his arms, claws at the air.

   He slams into the snowy edge of the cliff. Hanging by his
   hands, he looks down to see his sled hit the ground far below
   and burst into flames.
                                                            50
FROZEN - J. Lee



                            KRISTOFF (CONT'D)
                      (shocked sadness)
                  ...But I just paid it off.

   Suddenly, he starts to slip. He claws at the loose snow, but
   it's clearly hopeless. He's going down.

                            KRISTOFF (CONT'D)
                  Uh-oh. No, no, no.

   To make matters worse, an AXE comes flying right at his face.

                            KRISTOFF (CONT'D)
                  AH! NO, NO, NO!

   The axe slams into the snow, inches from his nose.

                             ANNA (O.S.)
                  Grab on!

   Kristoff grabs on.

                            ANNA (CONT'D)
                  Pull, Sven! Pull!

   REVEAL: The axe is tied to a rope, then wrapped around Sven.
   Anna helps Sven pull Kristoff to safety.

   Kristoff rolls onto his back, exhausted. Anna peeks down at
   the burning sled.

                            ANNA (CONT'D)
                  Whoa.... I'll replace your sled and
                  everything in it.

   Kristoff groans.

                            ANNA (CONT'D)
                  And I understand if you don't want
                  to help me anymore.

   Anna walks off, sadly. Sven comes over and nuzzles Kristoff.

                            KRISTOFF
                  Of course I don't want to help her
                  anymore. In fact, this whole thing
                  has ruined me for helping anyone
                  ever again.

                            KRISTOFF (AS SVEN) (CONT'D)
                  But she'll die on her own.

                            KRISTOFF (AS SELF) (CONT'D)
                  I can live with that.
                                                                51
FROZEN - J. Lee



   Through their conversation, they watch Anna go the wrong
   way...turn, go the other wrong way, turn, trip...

                            KRISTOFF (AS SVEN) (CONT'D)
                  But you won't get your new sled if
                  she's dead.

                            KRISTOFF (CONT'D)
                      (knowing he's got a point)
                  ...You know sometimes I really
                  don't like you.

   Sven licks Kristoff happily.

                            KRISTOFF (AS SELF) (CONT'D)
                      (to Anna)
                  Hold up. We're coming?!

                            ANNA
                      (excited)
                  You are?!
                      (catching herself)
                  I mean, sure. I'll let you tag
                  along.

                                                     DISSOLVE TO:

   EXT. SHARP MOUNTAIN RIDGE -- DAWN

   Kristoff, Sven and Anna walk on a narrow rim of a mountain.

                                                     DISSOLVE TO:


   EXT. MOUNTAIN FOREST CLEARING -- DAY

   As they step out of the thick trees, Anna catches sight of
   something far below.

                               ANNA
                  Arendelle.

                            KRISTOFF
                  It's completely frozen.

                            ANNA
                  ...But it'll be fine. Elsa will
                  thaw it.

                               KRISTOFF
                  Will she?
                                                                 52
FROZEN - J. Lee



                            ANNA
                      (uncertain)
                  ...Yeah. Now come on. This way to
                  the North Mountain?

   She points straight ahead.

                            KRISTOFF
                  More like this way.

   He points her finger up towards a perilously mighty mountain.

                                                      DISSOLVE TO:


   INT. FROZEN WILLOW TREES -- DAY

   Anna, Kristoff, and Sven walk beneath frozen willows. The
   hanging branches glisten like Christmas lights. Sven knocks
   them with his antlers. They tinkle like chimes.

                             ANNA
                  I never knew winter could be so
                  beautiful.

   Suddenly, a voice comes in from nowhere. We'll call that
   voice OLAF.

                            OLAF (O.S.)
                  YEAH...It really is beautiful,
                  isn't it? But it's so white. You
                  know, how about a little color?
                  Must we bleach the joy out of it
                  all? I'm thinking like maybe some
                  crimson, chartreuse...

   While this is going on, Anna and Kristoff look around for the
   source of the rambling. They look at Sven - could he actually
   be talking? Sven looks back at them, his antlers tangled in
   branches, just as baffled as they are.

   In the meantime, a nose-less snowman, Olaf, wanders up behind
   them.

                            OLAF (CONT'D)
                  How 'bout yellow--no, not yellow.
                  Yellow and snow? Brrrr...no go.

   He stops between Kristoff and Anna. They look down at him.
   How did he get there? He suddenly looks up at Anna.

                            OLAF (CONT'D)
                  Am I right?
                                                               53
FROZEN - J. Lee



   Anna SCREAMS! Reflexes take over and she kicks Olaf's head,
   sending it flying off his body and into Kristoff's arms.

                              OLAF (CONT'D)
                        (cheery, to Kristoff)
                  Hi!

                            KRISTOFF
                  You're creepy.

   Kristoff tosses the head back to Anna and they commence a
   game of hot potato.

                            ANNA
                  I don't want it!

                            KRISTOFF
                  Backatchya!

                            OLAF
                  Please don't drop me.

                              ANNA
                  Don't!

                            KRISTOFF
                  Come on, it's just a head.

                              ANNA
                  No!

   Olaf's body runs at Anna, arms waving.

                            OLAF (O.S.)
                  All right, we got off to a bad
                  start.

                            ANNA
                  Ew, ew, the body!

   Anna slams Olaf's head back on the body, upside down. Olaf
   smiles happily, then looks confused.

                            OLAF
                  Wait, what am I looking at right
                  now? Why are you hanging off the
                  earth like a bat?

                            ANNA
                      (sympathetic)
                  ...Okay. Wait one second.

   Anna kneels in front of Olaf and rights his head.
                                                               54
FROZEN - J. Lee



                            OLAF
                  Oooh! Thank you!

                            ANNA
                  You're welcome.

                            OLAF
                  Now I'm perfect.

   She looks over his innocent face, gets an idea.

                            ANNA
                  Well, almost.

   She digs into Kristoff's satchel, holds up a carrot just as
   Olaf turns toward her. The carrot accidentally slams all the
   way through his head.

                            OLAF
                  Woo! Head rush!

                            ANNA
                  Oh! Too hard. I'm sorry! I-I, I was
                  just.... Are you okay?

   Olaf sees a tiny piece of carrot sticking out between his
   eyes. He lights up.

                            OLAF
                  Are you kidding me? I am wonderful!
                  I've always wanted a nose.
                      (going cross-eyed to look
                       at his tiny nose)
                  So cute. It's like a little baby
                  unicorn.

   Anna reaches behind Olaf to the bulk of the carrot sticking
   out the back of his head, and pushes it forward.

                            OLAF (CONT'D)
                  What? Hey! Whoa.
                      (seeing his now big nose)
                  Oh, I love it even more! Hah....
                  All right, let's start this thing
                  over. Hi everyone. I'm Olaf. And I
                  like warm hugs.

   Olaf opens his arms wide to Anna. That triggers a memory. It
   takes her a moment to place it, but then she does.

                            ANNA
                  Olaf?...That's right, Olaf.
                                                            55
FROZEN - J. Lee



                            OLAF
                  ...And you are?

                            ANNA
                  Oh, um...I'm Anna.

                            OLAF
                  And who's the funky-looking donkey
                  over there?

                            ANNA
                  That's Sven.

                            OLAF
                  Uh-huh. And who's the reindeer?

                               ANNA
                  ...Sven.

   Olaf looks from Kristoff to Sven, confused.

                            OLAF
                  Oh. They're--oh, okay....
                      (accepting it)
                  Makes things easier for me.

   Sven tries to bite Olaf's nose.

                            OLAF (CONT'D)
                  Ha. Aw, look at him tryin' to kiss
                  my nose.
                      (gushes)
                  I like you, too!

                            ANNA
                  Olaf, did Elsa build you?

                               OLAF
                  Yeah. Why?

   Curious, Kristoff takes one of Olaf's twig arms off, studies
   it. It seems to be moving in sync with his other arm.

                            ANNA
                  Do you know where she is?

                            KRISTOFF
                      (studying the arm)
                  Fascinating...

                               OLAF
                  Yeah. Why?
                                                                   56
FROZEN - J. Lee



                            ANNA
                  Do you think you could show us the
                  way?

                               OLAF
                  Yeah. Why?

                            KRISTOFF
                      (bending the arm)
                  How does this work?

   Olaf's dismembered arm slaps Kristoff across the face.

                             OLAF
                  Stop it, Sven. Trying to focus
                  here.
                      (to Anna)
                  Yeah, why?

                            KRISTOFF
                  I'll tell you why. We need Elsa to
                  bring back summer.

                            OLAF
                      (shocked)
                  Summer?
                      (sinking into wistfulness)
                  Oh, I don't know why but I've
                  always loved the idea of summer,
                  and sun, and all things hot.

                            KRISTOFF
                  Really? I'm guessing you don't have
                  much experience with heat.

                            OLAF
                  Nope. But sometimes I like to close
                  my eyes and imagine what it'd be
                  like when summer does come.

                                                        DISSOLVE TO:


   OLAF'S FANTASY WORLD -- PERFECT SUMMER DAY

   Olaf walks through a grassy meadow with the sun shining
   behind him. He SINGS.

                                "In Summer"

                            OLAF
                  BEES'LL BUZZ / KIDS'LL BLOW
                  DANDELION FUZZ / AND I'LL BE DOING
                  WHATEVER SNOW DOES IN SUMMER.
                                                            57
FROZEN - J. Lee



   -Olaf now lies in the sand on a beach.

                            OLAF (CONT'D)
                  A DRINK IN MY HAND / MY SNOW UP
                  AGAINST THE BURNING SAND / PROB'LY
                  GETTING GORGEOUSLY TANNED IN
                  SUMMER.

   -Olaf sails in a boat.

                            OLAF (CONT'D)
                  I'LL FINALLY SEE A SUMMER BREEZE /
                  BLOW AWAY A WINTER STORM /

   -Olaf floats in the water. All his pieces begin to separate.

                            OLAF (CONT'D)
                  AND FIND OUT WHAT HAPPENS TO SOLID
                  WATER / WHEN IT GETS WARM.

   -Olaf tumbles on a sandy beach with sand-snowmen.

                            OLAF (CONT'D)
                  AND I CAN'T WAIT TO SEE / WHAT MY
                  BUDDIES ALL THINK OF ME / JUST
                  IMAGINE HOW MUCH COOLER I'LL BE IN
                  SUMMER . . !

   -Olaf and the seagull break out into a tap-dance.

                            OLAF (CONT'D)
                  DA DA . . . DA DOO / AH BAH BAH BAH
                  BAH BAH BOO.

   -Olaf and another snowman drink hot chocolate in a hot tub.

                            OLAF (CONT'D)
                  THE HOT AND THE COLD ARE BOTH SO
                  INTENSE / PUT 'EM TOGETHER, IT JUST
                  MAKES SENSE!

   -Olaf tap dances with a gaggle of seagulls.

                            OLAF (CONT'D)
                  RATDADAT DAD DADA DOO . . .

   -Olaf bounds down a grassy hill.

                            OLAF (CONT'D)
                  WINTER'S A GOOD TIME TO STAY IN AND
                  CUDDLE / BUT PUT ME IN SUMMER AND
                  I'LL BE A...

   He stops at a puddle, looks down at it. Smiles. Hops over it.
                                                                   58
FROZEN - J. Lee



                           OLAF (CONT'D)
                  HAPPY SNOWMAN!

   -Olaf runs with a checkered blanket that he spreads out. He
   relaxes and stares at the blue sky.

                            OLAF (CONT'D)
                  WHEN LIFE GETS ROUGH I LIKE TO HOLD
                  ON TO MY DREAM / OF RELAXING IN THE
                  SUMMER SUN JUST LETTING OFF STEAM!

   Sven, Anna, Kristoff and Olaf have a picnic.

                            OLAF (CONT'D)
                  OH THE SKY WILL BE BLUE / AND YOU
                  GUYS'LL BE THERE TOO / WHEN I
                  FINALLY DO WHAT FROZEN THINGS DO IN
                  SUMMER!

                            KRISTOFF
                  I'm gonna tell him.

                            ANNA
                  Don't you dare.

                               OLAF
                  IN SUMMER!

   Olaf sings the final note. We swing around him and return to:

   REALITY. He then straightens up and smiles.

                            OLAF (CONT'D)
                  So, come on! Elsa's this way. Let's
                  go bring back summer!

   Olaf grabs Anna's hand and pulls her along up the mountain.

                            ANNA
                      (laughing)
                  I'm coming!

   Sven hops along, happily following them. Kristoff watches all
   of them like they're nuts.

                            KRISTOFF
                  Somebody's got to tell him.

                                                        DISSOLVE TO:
                                                             59
FROZEN - J. Lee



   EXT. ARENDELLE, VILLAGE -- DAY

   A layer of solid ice coats everything. People huddle around
   weak fires. Anxiety runs high amongst the villagers and
   guests. We pass two CITIZENS fighting over a woodpile.

                            CITIZEN ONE
                  No. No. You've got the bark facing
                  down. The bark needs to be face-up.

                            CITIZEN TWO
                  Bark down is drier.

                               CITIZEN ONE
                  Bark up.

                               CITIZEN TWO
                  Bark down.

                               CITIZEN ONE
                  Bark up.

   Like a light in the dark, Hans moves through the crowd.

                            HANS
                  Cloak. Does anyone need a cloak?

                            GERDA
                  Arendelle is indebted to you, Your
                  Highness.

                            HANS
                  The castle is open. There's soup
                  and hot glögg in the Great Hall.

   He hands the stack of cloaks to a guard.

                            HANS (CONT'D)
                  Here. Pass these out.

   Just then the Duke approaches Hans.

                            DUKE
                  Prince Hans, are we just expected
                  to sit here and freeze while you
                  give away all of Arendelle's
                  tradable goods?

                            HANS
                      (tall and confident)
                  Princess Anna has given her orders
                  and--
                                                               60
FROZEN - J. Lee



                            DUKE
                  And that's another thing; has it
                  dawned on you that your princess
                  may be conspiring with a wicked
                  sorceress to destroy us all?

   Hans's nice eyes turn to threatening slits.

                            HANS
                  Do not question the Princess. She
                  left me in charge, and I will not
                  hesitate to protect Arendelle from
                  treason.

                            DUKE
                      (flabbergasted, offended)
                  Treason?!

   Suddenly they hear the alarmed whinny of Anna's horse. It
   returns alone, bucking and kicking. Hans grabs its reins.

                            HANS
                  Whoa! Whoa! Whoa, boy. Easy. Easy.

                            CROWD
                      (various)
                  Princess Anna's horse. What
                  happened to her? Where is she?

   Hans steadies the horse, looks up at the mountain. He sees
   all the panicked faces of the kingdom looking to him.

                            HANS
                  ...Princess Anna is in trouble.
                      (calling out)
                  I need volunteers to go with me to
                  find her!

   Volunteers, some from Arendelle, some from other lands, rush
   up to offer their services.

                            DUKE
                  I volunteer two men, my Lord!
                      (quietly to his thugs)
                  Be prepared for anything, and
                  should you encounter the Queen, you
                  are to put an end to this winter.
                  Do you understand?

   His two thugs sneer.

                                                        CUT TO:
                                                                   61
FROZEN - J. Lee



   EXT. THE NORTH MOUNTAIN -- DAY

   Anna, Kristoff, Sven, and Olaf move through hostile terrain.
   Wind-swept icicles face horizontal.

                            KRISTOFF
                  So how exactly are you planning to
                  stop this weather?

                            ANNA
                      (confident)
                  Oh, I am gonna talk to my sister.

                            KRISTOFF
                  That's your plan? My ice business
                  is riding on you talking to your
                  sister.

                              ANNA
                  Yup.

   Kristoff, so stunned by her casual plan, doesn't look where
   he's going and ends up with an ice-spike to the nose. He
   stops short, GULP, moves carefully around the spike.

                            KRISTOFF
                  So you're not at all afraid of her?

                            ANNA
                  Why would I be?

                            OLAF
                      (oblivious)
                  Yeah. I bet Elsa's the nicest,
                  gentlest, warmest person ever.

   Olaf backs right into an icicle. It runs through his torso.

                            OLAF (CONT'D)
                  Oh, look at that. I've been
                  impaled.

   He laughs it off.

                                                        DISSOLVE TO:


   EXT. STEEP MOUNTAIN FACE -- DAY

   Anna and Kristoff hit what looks like a dead end. The face of
   the mountain goes straight up.

                              ANNA
                  What now?
                                                              62
FROZEN - J. Lee



   Kristoff looks around, sighs. Digs in his rucksack.

                            KRISTOFF
                  ...It's too steep. I've only got
                  one rope, and you don't know how to
                  climb mountains.

                              ANNA (O.S.)
                  Says who?

   Sven nudges Kristoff, who looks up to see Anna trying to
   climb the cliff's flat face.

                            KRISTOFF
                      (finding her ridiculous)
                  What are you doing?

                            ANNA
                      (straining)
                  ...I'm going to see my sister.

                            KRISTOFF
                  You're going to kill yourself.

   Kristoff watches her searching for footholds and hand-holds.

                            KRISTOFF (CONT'D)
                  I wouldn't put my foot there.

                            ANNA (O.S.)
                  You're distracting me.

                            KRISTOFF
                  Or there. How do you know Elsa even
                  wants to see you?

                            ANNA (O.S.)
                  I'm just blocking you out cause I
                  gotta concentrate here.

                            KRISTOFF
                  You know, most people who disappear
                  into the mountains want to be
                  alone.

                            ANNA (O.S.)
                  Nobody wants to be alone. Except
                  maybe you--

                            KRISTOFF
                  I'm not alone.... I have friends,
                  remember?

   Anna kicks a foot above her head to catch a foot hold.
                                                              63
FROZEN - J. Lee



                            ANNA
                  You mean the love experts?

                            KRISTOFF
                  Yes, the love experts!

   Anna realizes she's stuck.

                            ANNA
                  ...Please tell me I'm almost there.

   REVEAL: she's only about six feet up. Her muscles shake.

                            ANNA (CONT'D)
                  ...Does the air seem a bit thin to
                  you up here?

   Kristoff smiles, getting a kick out of her.

                             KRISTOFF
                  Hang on.

   He pulls the rope from his bag. Just then Olaf steps out from
   behind a rock and waves to Kristoff.

                            OLAF
                  Hey, Sven? Not sure if this is
                  going to solve the problem, but I
                  found a staircase that leads
                  exactly where you want it to go.

                            ANNA
                  Ha ha. Thank goodness. Catch!

   Anna drops off the cliff. Kristoff catches her.

                            ANNA (CONT'D)
                  Thanks! That was like a crazy trust
                  exercise.

   She hops down, brushes off her dress, and bounds off.
   Kristoff watches after her, digging her fearless pluck.


   EXT. BASE OF THE ICE PALACE -- DAY

   Anna, Kristoff, and Olaf approach Elsa's elegant ice palace.

                             ANNA
                  Whoa.

                            KRISTOFF
                      (in awe)
                  Now that's ice. I might cry.
                                                              64
FROZEN - J. Lee



                            ANNA
                  Go ahead. I won't judge.

   Anna climbs the steps with Olaf. Sven tries to follow. His
   hooves slip out. He scrambles but can't get traction.
   Kristoff runs to his aide.

                            KRISTOFF
                  All right, take it easy. I gotcha.

   Kristoff settles Sven back down the stairs and pats him.

                            KRISTOFF (CONT'D)
                  You stay right here, buddy.

   Sven obediently plops his reindeer butt down and wags his
   tail. Kristoff climbs the stairs, admiring the ice details.

                            KRISTOFF (CONT'D)
                  ...Flawless.

   Anna arrives at the door. Hesitates.

                            OLAF
                  ...Knock....
                      (she doesn't)
                  Just knock....
                      (she doesn't. To Kristoff)
                  Why isn't she knocking...? Do you
                  think she knows how to knock?

   Anna finally KNOCKS. The sound echoes inside. The ice doors
   slide open.

                            ANNA
                  Ha. It opened. That's a first.

   Anna goes to step in. Kristoff follows. She gets a thought,
   stops him.

                            ANNA (CONT'D)
                  You should probably wait out here.

                            KRISTOFF
                  What?

                            ANNA
                  Last time I introduced her to a
                  guy, she froze everything.

                            KRISTOFF
                  But, it's a palace made of ice. Ice
                  is my life.
                                                            65
FROZEN - J. Lee



                               OLAF
                  Bye, Sven.

   Olaf starts to head inside. Anna stops him.

                            ANNA
                  You too, Olaf.

                               OLAF
                  Me?

                            ANNA
                  Just give us a minute.

                               OLAF
                  Okay.

   As Anna walks inside. Olaf starts counting.

                            OLAF (CONT'D)
                  One...two...

   Kristoff joins in.

                            OLAF AND KRISTOFF
                  Three...four...


   INT. ELSA'S PALACE -- DAY

   Anna walks into a great foyer. The place is beautiful, but
   also eerie.

                            ANNA
                  Elsa? It's me...Anna?!

   Anna slips. Steadies herself.

                               ELSA (O.S.)
                  Anna.

   Elsa steps out of the shadows onto a balcony. She sees Anna,
   looks to her longingly.

   Anna can't help but be struck by Elsa's beauty.

                            ANNA
                  Elsa, you look different.... It's a
                  good different.... And this place
                  is amazing.
                                                            66
FROZEN - J. Lee



                            ELSA
                      (cautious, polite)
                  Thank you, I never knew what I was
                  capable of.

   Anna starts to climb the stairs.

                            ANNA
                  ...I'm so sorry about what
                  happened. If I'd known--

   Elsa backs up, away from Anna.

                            ELSA
                      (on guard)
                  No, it's okay. You don't have to
                  apologize.... But you should
                  probably go, please.

                            ANNA
                  But I just got here.

                            ELSA
                  ...You belong in Arendelle.

                               ANNA
                  So do you.

   Anna takes another step up. Elsa backs up more.

                            ELSA
                  No, I belong here. Alone. Where I
                  can be who I am without hurting
                  anybody.

                            ANNA
                  ...Actually, about that--

                            OLAF (O.S.)
                  58...59...60.

                            ELSA
                  Wait. What is that?

   Olaf comes running in the front door. He waves.

                            OLAF
                  Hi, I'm Olaf and I like warm hugs.

                            ELSA
                      (shocked)
                  Olaf?

   Olaf stops beside Anna, looks up at Elsa, intimidated.
                                                                   67
FROZEN - J. Lee



                            OLAF
                      (bashful)
                  You built me. You remember that?

                            ELSA
                      (astonished)
                  And you're alive?

                            OLAF
                  Um...I think so?

   Anna kneels down beside Olaf.

                            ANNA
                  He's just like the one we built as
                  kids.... We were so close. We can
                  be like that again.

   Elsa smiles, but then a memory returns to her.

                                                       FLASH CUT TO:

   FLASHBACK: Young Anna is struck by Elsa's powers.

                            YOUNG ELSA
                  Anna!

   Young Anna falls unconscious. Young Elsa races to her.

                                                       FLASH CUT TO:

   THE PRESENT: Elsa's face sinks in pain.

                            ELSA
                  No, we can't.

   Elsa turns and heads up the second story steps.

                            ELSA (CONT'D)
                  Goodbye, Anna.

                            ANNA
                  Elsa, wait--

                            ELSA
                      (calling back)
                  I'm just trying to protect you.

   Elsa continues to flee. Anna pursues.

                             ANNA
                  You don't have to protect me. I'm
                  not afraid. Please don't shut me
                  out again.
                                                            68
FROZEN - J. Lee



   Anna SINGS.

                      "First Time in Forever, Reprise"

                            ANNA (CONT'D)
                  PLEASE DON'T SLAM THE DOOR.
                  YOU DON'T HAVE TO KEEP YOUR
                  DISTANCE ANYMORE.

                  'CAUSE FOR THE FIRST TIME IN
                  FOREVER,
                  I FINALLY UNDERSTAND.
                  FOR THE FIRST TIME IN FOREVER,
                  WE CAN FIX THIS HAND IN HAND.
                  WE CAN HEAD DOWN THIS MOUNTAIN
                  TOGETHER.
                  YOU DON'T HAVE TO LIVE IN FEAR.
                  'CAUSE FOR THE FIRST TIME IN
                  FOREVER,
                  I WILL BE RIGHT HERE.

   They arrive on the top floor, Elsa's main living space. Elsa
   turns back to Anna, grateful, but determined.

                            ELSA
                  Anna,
                  PLEASE GO BACK HOME.
                  YOUR LIFE AWAITS.
                  GO ENJOY THE SUN
                  AND OPEN UP THE GATES.

                            ANNA
                  Yeah, but--

                            ELSA
                  I know!
                  YOU MEAN WELL,
                  BUT LEAVE ME BE.
                  YES, I'M ALONE BUT I'M ALONE AND
                  FREE.

   Elsa opens up the balcony doors.

                            ELSA (CONT'D)
                  JUST STAY AWAY AND YOU'LL BE SAFE
                  FROM ME.

                            ANNA
                  ACTUALLY, WE'RE NOT.

                            ELSA
                  WHAT DO YOU MEAN YOU'RE NOT?
                                                            69
FROZEN - J. Lee



                            ANNA
                  I GET THE FEELING YOU DON'T KNOW?

                            ELSA
                  WHAT DO I NOT KNOW?

                            ANNA
                  ARENDELLE'S IN DEEP DEEP DEEP DEEP
                  SNOW.

                            ELSA
                  What?

   Elsa looks past Anna's shoulder out white-peaked mountains.

                            ANNA
                  You kind of set off an eternal
                  winter...everywhere.

                            ELSA
                  Everywhere?

                            ANNA
                  It's okay, you can just unfreeze
                  it.

                            ELSA
                  No, I can't. I don't know how.

                            ANNA
                  Sure you can. I know you can.

   Snow starts to swirl around the room.

                            ANNA (CONT'D)
                  CUZ FOR THE FIRST TIME IN FOREVER,

                            ELSA
                      (panicking)
                  I'M SUCH A FOOL!
                  I CAN'T BE FREE!

                            ANNA
                  YOU DON'T HAVE TO BE AFRAID.

                            ELSA
                  NO ESCAPE
                  FROM THE STORM INSIDE OF ME!

   The snow picks up. Anna tries to fight through it.

                            ANNA
                  WE CAN WORK THIS OUT TOGETHER.
                                                               70
FROZEN - J. Lee



                            ELSA
                  I CAN'T CONTROL THE CURSE!

                            ANNA
                  WE'LL REVERSE THE STORM YOU'VE
                  MADE.

                            ELSA
                  ANNA, PLEASE, YOU'LL ONLY MAKE IT
                  WORSE!

                            ANNA
                  DON'T PANIC.

                            ELSA
                  THERE'S SO MUCH FEAR!

                            ANNA
                  WE'LL MAKE THE SUN SHINE BRIGHT.

                            ELSA
                  YOU'RE NOT SAFE HERE!

                            ANNA
                  WE CAN FACE THIS THING TOGETHER...

   But as Anna sings, we lose sight of her in the thickening
   blizzard taking over the room.

                             ELSA
                  NO!

                            ANNA (O.S.)
                  WE CAN CHANGE THIS WINTER WEATHER,
                  AND EVERYTHING WILL BE...

   Anna's voice disappears in the storm as Elsa cries out.

                             ELSA
                  I CAN'T!

   Elsa's fear, so strong, sucks the blizzard back into her and
   then it bursts out, unwittingly, like a sharp snowflake.

   Anna is STRUCK right in the heart. She grasps her chest in
   pain and stumbles back. She falls to her knees.

   Elsa gasps when she sees Anna. Just then, Olaf and Kristoff
   rush into the room to Anna's side.

                            KRISTOFF
                  Anna. Are you okay?
                                                                   71
FROZEN - J. Lee



                            ANNA
                  I'm okay.... I'm fine.

   Anna gets to her feet, determined to hide the pain.

                            ELSA
                      (scared)
                  Who's this? Wait, it doesn't
                  matter. You have to go.

                             ANNA
                  No, I know we can figure this out
                  together--

                            ELSA
                      (desperate)
                  How? What power do you have to stop
                  this winter? To stop me?

   Anna doesn't have the answer. Kristoff sees spiky ice shadows
   creeping down the walls. Puts a protective arm around Anna.

                            KRISTOFF
                  Anna, I think we should go.

                            ANNA
                      (close to tears)
                  No. I'm not leaving without you,
                  Elsa.

                            ELSA
                      (heartbroken but decisive)
                  Yes, you are.

   Elsa waves her arms and builds a giant, menacing snowman.
   We'll call him MARSHMALLOW.

                                                        SLAM CUT TO:


   EXT. ICE PALACE -- DAY

   Marshmallow holds Anna and Kristoff by the scruff of their
   necks in one hand and Olaf in the other.

                            ANNA
                  Stop. Put us down!

                            OLAF
                      (to Marshmallow)
                  You are a lot stronger than I think
                  you realize.

   Marshmallow tosses Kristoff and Anna down the steps.
                                                                    72
FROZEN - J. Lee



                            MARSHMALLOW
                      (like a bouncer)
                  Go away!

   Anna and Kistoff slide past Sven, who's got his tongue stuck
   to the ice railing.

                              OLAF (O.S.)
                  Heads up!

   Olaf's head smashes into a snowbank nearby.

                              ANNA
                  Olaf!

                            OLAF
                  Watch out for my butt!

   Anna and Kristoff duck as the rest of Olaf slams into the
   snowbank.

   Marshmallow turns to go back into the castle.

   Incensed, Anna tries to march back up the stairs.

                            ANNA
                  It is not nice to throw people!

   Kristoff grabs her, pulls her back.

              KRISTOFF                                   ANNA
   All right feisty pants. Calm             Let me at him. I want to get
   down. Woaw. Just let the snow            him. I.... Okay. I'm Calm.
   man be.

   Anna backs down...for a moment. Then she grabs a snowball and
   throws it at Marshmallow.

   The tiny little ball hits Marshmallow's back, not making even
   the slightest dent. But it's enough to infuriate him. He
   ROARS. Spikes shoot out of his joints.

                            KRISTOFF
                  Uh-oh. Now you made him mad!

                            OLAF
                  ...I'll distract him. You guys go.

   Kristoff pushes Anna along. Sven runs off in the opposite
   direction. Olaf's belly and butt fall and follow Sven.

                            OLAF (CONT'D)
                  No, no, not you guys.
                                                               73
FROZEN - J. Lee



   Marshmallow goes charging after Anna and Kristoff as Olaf's
   head falls and lands face down in snow.

                            OLAF (CONT'D)
                      (muffled)
                  This just got a whole lot harder.

   Anna and Kristoff leap and slide down a steep slope. They
   tumble to a stop at the bottom just as Marshmallow lands hard
   right behind them.

   They're off again...through a maze of conifers that sag under
   the weight of the snow, Marshmallow hot on their trail.

                               KRISTOFF
                  This way!

   Anna grabs a branch of a sagging trees and releases all of
   the snow. The tree snaps upright, knocking Marshmallow back.

                            KRISTOFF (CONT'D)
                      (impressed)
                  Ho-ho-ho!

                               ANNA
                  I got him!

   Anna and Kristoff burst out of the conifer forest and almost
   run right off a cliff. They stop short, toes on the edge.

                            KRISTOFF
                  Whoa, stop!

                            ANNA
                  It's a hundred foot drop.

                            KRISTOFF
                  It's two hundred.

   Kristoff ties the rope around Anna and pulls tight.

                               ANNA
                  Ow.

   He drops to his knees and starts digging a u-shape in the
   snow with a pick axe.

                            ANNA (CONT'D)
                  What's that for?

                            KRISTOFF
                  I'm digging a snow anchor.
                                                            74
FROZEN - J. Lee



                            ANNA
                      (not trusting)
                  Okay. What if we fall?

                            KRISTOFF
                  There's twenty feet of fresh powder
                  down there; it'll be like landing
                  on a pillow.... Hopefully.

   They hear an angry ROAR coming closer.

                            KRISTOFF (CONT'D)
                  Okay, Anna. On three.

   Anna preps for the jump like a boxer getting ready to fight.

                            ANNA
                  Okay. You tell me when...

                               KRISTOFF
                  One...

                            ANNA
                  ...I'm ready to go....

                               KRISTOFF
                  Two...

                            ANNA
                      (pumped up)
                  ...I was BORN ready! Yes!

                               KRISTOFF
                  Calm down.

   A huge tree flies through the air toward them.

                               ANNA (O.S.)
                  TREE!

   Anna jumps and pulls Kristoff over the edge with her. They
   hang upside down over the cliff by the rope. The rope catches
   their fall.

                            KRISTOFF
                  Whoa! That happened.

   Back up top, Olaf emerges from the woods. He's a complete
   mess, all his body parts are in the wrong places. He huffs
   and puffs, struggling to run.

                            OLAF
                  Ah. Ah. Man, am I out of shape.
                                                               75
FROZEN - J. Lee



   He stops. Puts his body back together in the right order.

                            OLAF (CONT'D)
                  There we go. Hey, Anna! Sven!
                  Where'd ya guys go? We totally lost
                  Marshmallow back there!

   Marshmallow steps up behind Olaf. Olaf turns to face him.

                            OLAF (CONT'D)
                      (happily)
                  Hey. We were just talking about
                  you. All good things, all good
                  things.

   Marshmallow roars and approaches Kristoff's snow anchor.

                              OLAF (CONT'D)
                  NO!

   Olaf jumps onto Marshmallow's leg trying to stop him, but not
   making much of a difference.

                            OLAF (CONT'D)
                  This is not making much of a
                  difference!

   Marshmallow flicks Olaf off his leg and right over the cliff.

                              OLAF (CONT'D)
                  WHOA!

   Olaf passes Anna and Kristoff.

                              ANNA
                  Olaf!

                            OLAF
                  Hang in there, guys!

   Marshmallow starts yanking Kristoff and Anna's rope up.

                            ANNA
                  Wait, what?

   Kristoff's head hits the cliff.

                              KRISTOFF
                  Aargghh!

   Kristoff passes out and hangs like a rag doll.

                              ANNA
                  Kristoff!
                                                               76
FROZEN - J. Lee



   Marshmallow pulls them up. He roars and breathes snow all
   over them.

                            MARSHMALLOW
                  Don't come back!

                            ANNA
                      (grossed out by his snow
                       breath)
                  Ugh. We won't.

   Anna whips out a knife and cuts the rope. Kristoff comes to
   just as they fall. They both SCREAM!

   SLAM!

   REVEAL: Anna opens her eyes to find herself buried up to her
   shoulders in the soft thick snow. She laughs.

                            ANNA (CONT'D)
                  Hey, you were right. Just like a
                  pillow.

   She looks up to see Olaf's upper half hanging onto Kristoff's
   boots, which are sticking out of the snow.

                            OLAF
                      (shaking the boots)
                  I can't feel my legs! I can't feel
                  my legs!

   Suddenly, Kristoff's head pops up. He spits out snow.

                            KRISTOFF
                  Those are my legs.

   Olaf's bottom goes running by.

                            OLAF
                      (to Kristoff)
                  Ooh. Hey, do me a favor, grab my
                  butt.

   Kristoff grabs Olaf's head and puts it on his body.

                            OLAF (CONT'D)
                  Oh, that feels better.

   Sven walks up and sniffs Olaf's nose.

                               OLAF (CONT'D)
                  Hey, Sven!
                                                            77
FROZEN - J. Lee



   Olaf turns to Anna and Kristoff just as Sven goes to bite off
   his nose -- and misses.

                            OLAF (CONT'D)
                  He found us.
                      (to Sven, funny voice)
                  Who's my cute little reindeer?

                            KRISTOFF
                  Don't talk to him like that.

   Kristoff goes over to help Anna, who is stuck in the snow.

                               KRISTOFF (CONT'D)
                  Here.

   He lifts her out easily.

                            ANNA
                      (impressed)
                  Whoa!

                               KRISTOFF
                  You okay?

                               ANNA
                  Thank you.

   They meet eyes. Wait. Is that chemistry?

                            ANNA (CONT'D)
                  ...Um.... How's your head?

   She touches the spot where he banged his head.

                            KRISTOFF
                      (in pain)
                  Ah! Ooh!

   He catches himself. Waves off the pain with a giggle.

                            KRISTOFF (CONT'D)
                  I mean, It's fine. Ah...I'm good.
                  Ha. I've got a thick skull.

                            OLAF
                  I don't have a skull.... Or bones.

                               KRISTOFF
                  ...So....

   The awkwardness is killing him.
                                                            78
FROZEN - J. Lee



                              KRISTOFF (CONT'D)
                      (shy)
                  Now what?

                             ANNA
                      (shy)
                  Now what?
                      (then...panicking)
                  Now what?! Oh! What am I gonna do?
                  She threw me out. I can't go back
                  to Arendelle with the weather like
                  this. And then there's your ice
                  business--

                            KRISTOFF
                  Hey, hey, don't worry about my ice
                  business...
                      (noticing something)
                  Worry about your hair?!

   She thinks he means it looks bad. She smooths it down.

                            ANNA
                  What? I just fell off a cliff. You
                  should see your hair.

                            KRISTOFF
                  No, yours is turning white.

   She grabs her braid as a tendril turns white.

                            ANNA
                  White? It's what?

                            KRISTOFF
                  It's because she struck you; isn't
                  it?

                            ANNA
                  Does it look bad?

                            KRISTOFF
                      (thinking)
                  ...No.

   Olaf's head pops up. He's holding his head up off his body to
   join the conversation.

                            OLAF
                  You hesitated.

                            KRISTOFF
                  No, I didn't. Anna, you need help.
                  Now, come on.
                                                                  79
FROZEN - J. Lee



   He heads towards the sunset. Sven and Olaf follow.

                            OLAF
                  Okay! Where are we going?

                            KRISTOFF
                  To see my friends.

                            ANNA
                      (catching up)
                  The love experts?

                            OLAF
                  Love experts?!

                            KRISTOFF
                  Yes. And don't worry; they'll be
                  able to fix this.

                            ANNA
                  How do you know?

   He looks her over, remembering the moment he saw the trolls
   heal her as a child.

                            KRISTOFF
                  ...Because I've seen them do it
                  before.

   As they round the bend, the sun sets and Olaf turns to Sven.

                            OLAF
                  I like to consider myself a love
                  expert.

                                                           CUT TO:


   INT. ELSA'S PALACE -- DAY

   Elsa paces, distraught. She talks to herself.

                            ELSA
                      (mantra-style)
                  Get it together. Control it. Don't
                  feel. Don't feel. Don't FEEL!

   She hears ice cracking. Stops. Looks around. She's left a
   sharp wake of ice spikes behind her on the floor. They grow
   up the wall, taking over the castle.

                                                       DISSOLVE TO:
                                                            80
FROZEN - J. Lee



   EXT. BLACK MOUNTAINS -- NIGHT

   The Northern Lights are bright. Olaf stares at them in awe as
   he rides on Sven's back.

                            OLAF
                  Look, Sven. The sky's awake.

   Behind Olaf and Sven, Anna walks with Kristoff. She shivers.

                            KRISTOFF
                  Are you cold?

                            ANNA
                  ...A little.

   He reaches like he might put an arm around her, but decides
   against it. He looks around as if he doesn't know what to do,
   then gets a thought.

                            KRISTOFF
                  Wait. Come here.

   He takes her hand and pulls her around a bend into a rock-
   lined pass.

   Steam vents, powered by the volcanic activity, dot the path.
   He holds her hands over one of them.

                            ANNA
                  Oooh.... That's nice.

   They continue on the path, walking from vent to vent.

                            KRISTOFF
                      (taking a deep breath)
                  So, about my friends...well, I say
                  friends, they're more like
                  family.... Anyway, when I was a
                  kid, it was just me and
                  Sven...until they took me in.

                            ANNA
                      (moved)
                  They did?

                            KRISTOFF
                      (nervous ramble)
                  Yeah. I don't want to scare you,
                  they can be a little bit
                  inappropriate...and loud...very
                  loud...they're also stubborn at
                  times, and a little overbearing.
                  And heavy. Really, really heavy.
                            (MORE)
                                                             81
FROZEN - J. Lee

                            KRISTOFF (CONT'D)
                  But they're fine.. You'll get it.
                  They mean well.

   Anna touches Kristoff's arm, reassuringly.

                            ANNA
                  Kristoff, they sound wonderful.

   Kristoff smiles, appreciating her sincerity.

                            KRISTOFF
                  Okay then....

   Mustering the courage, Kristoff steps forward and with a wave
   of the arms announces--

                            KRISTOFF (CONT'D)
                  Meet my family.

   REVEAL: he's surrounded by rocks.

                             KRISTOFF (CONT'D)
                      (to the rocks)
                  Hey, guys!

   As Kristoff and Sven move through the rocks, waving and
   greeting, Olaf and Anna stand frozen, dumbfounded.

                            ANNA
                      (to herself)
                  ...They're rocks.

                            OLAF
                      (realizing)
                  He's crazy.
                      (covertly, to Anna)
                  I'll distract them while you run.
                      (Loud and slow to a rock)
                  Hi, Sven's family! It's nice to
                  meet you!
                      (quietly to Anna)
                  Anna, because I love you, I insist
                  you run.
                      (to the rock)
                  I understand you're love experts!
                      (to Anna)
                  Why aren't you running?

   Anna snaps out of her shock and starts backing away.

                            ANNA
                  Okay. Um...I'm gonna go--

   Just then the rocks around her start rolling.
                                                              82
FROZEN - J. Lee



                            ANNA (CONT'D)
                      (panicking)
                  Kristoff!

   Olaf lights up and chases the rocks, who surround Kristoff
   and unfold as trolls.

                            BULDA
                  KRISTOFF'S HOME!

                            TROLLS (VARIOUS)
                  Kristoff! Kristoff's home! It's
                  been too long! Kristoff's home!

   Olaf jumps around all excitedly.

                            OLAF
                      (excitedly)
                  Kristoff's home.

   He then stops, confused, and looks to one of the trolls.

                            OLAF (CONT'D)
                  Wait? Kristoff?

   Anna watches, shocked and confused.

   The trolls all want Kristoff's attention. One troll yanks him
   down with a boulder's strength.

                            TROLL ONE
                  Oh, lemme look at you!

   Another troll tries to pull off his clothes.

                            TROLL TWO
                  Oh, take off your clothes,
                  Kristoff; I wash them.

                            KRISTOFF
                      (holding up his pants)
                  Ah! No. I'm gonna keep my clothes
                  on, thank you.

                            KRISTOFF (CONT'D)
                  Great to see you all. Where's
                  grandpa?

                            MUSHROOM KID TROLL
                  He's napping. But look, I grew a
                  mushroom.

                            TROLL SCOUT KID
                  And I earned my fire crystal.
                                                              83
FROZEN - J. Lee



                            KIDNEY STONE TROLL
                  I passed a kidney stone.

                            PICK ME UP TROLL
                  Pick me up.

   The kid troll jumps up on Kristoff's arm. Kristoff sinks
   under the weight of him.

   Anna still stares, confused, then realizes...

                            ANNA
                  Trolls? They're trolls.

   Silence. All troll eyes turn to Anna. Blink. Blink.

                            BULDA
                  ...He's brought a girl!

                            TROLLS (TOGETHER)
                  He's brought a girl!

   Suddenly Anna is surrounded by trolls. They body-surf/roll
   Anna over to Kristoff. She falls into his arms.

                            ANNA
                  What's going on?

                            KRISTOFF
                  I've learned to just roll with it.

   Bulda climbs on top of her husband, Cliff, to get a good look
   at Anna. She studies her like she's a piece of cattle.

                            BULDA
                  Let me see. Bright eyes. Working
                  nose. Strong teeth. Yes, yes, yes.
                  She'll do nicely for our Kristoff.

                            ANNA
                  Wait. Oh. Um. No.

                            KRISTOFF
                  You've got the wrong idea. That's
                  not why I brought her here.

                            ANNA
                  Right. We're not. I'm not--

   Anna laughs, uncomfortable, not knowing what to say.
                                                        84
FROZEN - J. Lee



                            BULDA
                      (to Anna)
                  What's the issue, dear? Why are you
                  holding back from such a man?

   Bulda SINGS.

                                "Fixer-Upper"

                            TROLLS (VARIOUS)
                  IS IT THE CLUMPY WAY HE WALKS?
                  OR THE GRUMPY WAY HE TALKS?
                  OR THE PEAR-SHAPED, SQUARE-SHAPED
                  WEIRDNESS OF HIS FEET?
                  AND THOUGH WE KNOW HE WASHES WELL
                  HE ALWAYS ENDS UP SORTA SMELLY.
                  BUT YOU'LL NEVER MEET A FELLA WHO'S
                  AS SENSITIVE AND SWEET.

                            TROLLS (CHORUS) (CONT'D)
                  SO HE'S A BIT OF A FIXER UPPER,
                  SO HE'S GOT A FEW FLAWS-
                  HIS PECULIAR BRAIN, DEAR.
                  HIS THING FOR THE REINDEER
                  THAT OUTSIDE A FEW OF NATURE'S
                  LAWS.
                  SO HE'S A BIT OF A FIXER UPPER,
                  BUT THIS WE'RE CERTAIN OF-
                  YOU CAN FIX THIS FIXER UPPER UP
                  WITH A LITTLE BIT OF LOVE.

                            KRISTOFF
                  Can we just stop talking about
                  this?! We've got a real, actual
                  problem here.

                             BULDA
                  I'll say--
                      (To Anna)
                  IS IT THE WAY THAT HE RUNS SCARED?

                            TROLLS (VARIOUS)
                  OR THAT HE'S SOCIALLY IMPAIRED?

                             KID TROLL
                  OR THAT HE ONLY LIKES TO TINKLE IN
                  THE WOODS?

                            TROLLS (VARIOUS)
                  ARE YOU HOLDING BACK YOUR FONDNESS
                  DUE TO HIS UNMANLY BLONDENESS?
                  OR THE WAY HE COVERS UP THAT HE'S
                  THE HONEST GOODS?
                                                               85
FROZEN - J. Lee



                            TROLLS (CHORUS) (CONT'D)
                  HE'S JUST A BIT OF A FIXER UPPER-
                  HE'S GOT A COUPLE A' BUGS.

                            KRISTOFF
                  No, I don't.

                            TROLLS
                  HIS ISOLATION
                  IS CONFIRMATION
                  OF HIS DESPERATION FOR HEALING
                  HUGS.
                  SO HE'S A BIT OF A FIXER UPPER,
                  BUT WE KNOW WHAT TO DO.
                  THE WAY TO FIX UP THIS FIXER UPPER
                  IS TO FIX HIM UP WITH YOU.

   The girl trolls sweep Anna away. The boys take Kristoff.

                            KRISTOFF
                      (to the male trolls)
                  Enough! She's engaged to someone
                  else. Okay?!

   TROLLS beat. Blink. Blink. The boy trolls turn, huddle...

                            TROLLS (VARIOUS)
                  SO SHE'S A BIT OF A FIXER UPPER,
                  THAT'S A MINOR THING.
                  THIS QUOTE "ENGAGEMENT"
                  IS A FLEX ARRANGEMENT.

                            KID TROLL
                  AND BY THE WAY, I DON'T SEE NO
                  RING.

                            TROLLS (VARIOUS)
                  SO SHE'S A BIT OF A FIXER UPPER,
                  HER BRAIN'S A BIT BETWIXT.
                  GET THE FIANCE
                  OUT OF THE WAY
                  AND THE WHOLE THING WILL BE FIXED!

                            GIRL TROLLS
                  WE AREN'T SAYING YOU CAN CHANGE HIM

                            TROLLS (VARIOUS)
                  'CAUSE PEOPLE DON'T REALLY CHANGE.
                  WE'RE ONLY SAYING THAT LOVE'S A
                  FORCE
                  THAT'S POWERFUL AND STRANGE.
                  PEOPLE MAKE BAD CHOICES
                  IF THEY'RE MAD OR SCARED OR
                  STRESSED.
                            (MORE)
                                                            86
FROZEN - J. Lee

                            TROLLS (VARIOUS) (CONT'D)
                  BUT THROW A LITTLE LOVE THEIR WAY
                  (THROW A LITTLE LOVE THEIR WAY)
                  AND YOU'LL BRING OUT THEIR BEST!
                  TRUE LOVE BRINGS OUT THE BEST!

   Kristoff looks over at Anna. She actually looks shockingly
   beautiful dressed in moss, lit by shimmering crystals.

                            ALL TROLLS
                  EVERYONE'S A BIT OF A FIXER UPPER,
                  THAT'S WHAT IT'S ALL ABOUT
                  FATHER, SISTER, BROTHER
                  WE NEED EACH OTHER
                  TO RAISE US UP AND ROUND US OUT

   By this time Kristoff and Anna are being ushered into a pit
   by the sheer force of numbers.

                            TROLLS
                  EVERYONE'S A BIT OF A FIXER UPPER,
                  BUT WHEN PUSH COMES TO SHOVE-
                  THE ONLY FIXER UPPER FIXER THAT CAN
                  FIX A FIXER UPPER IS
                  TRUE
                  TRUE
                  TRUE
                  TRUE
                  LOVE

   During this last bit Anna and Kristoff are looking at each
   other differently. Hmmm. Maybe those trolls are right?
   Sparks! Chemistry!

                            TROLL PRIEST
                  Do you, Anna, take Kristoff to be
                  your trollfully wedded--

                            ANNA
                  Wait, what?!

                            TROLL PRIEST
                  You're getting married.

                            TROLLS
                  LOVE!

   Just then, Anna collapses. Kristoff catches her. She's
   shivering something fierce.

                            KRISTOFF
                  Anna?

   He pulls off her cape and hat.
                                                            87
FROZEN - J. Lee



                            KRISTOFF (CONT'D)
                  She's as cold as ice.

   Just then Grand Pabbie pushes his way through the crowd.
   Trolls clear the way for Pabbie. He stops at the edge of the
   pit.

                            GRAND PABBIE
                  There's strange magic here!

                            KRISTOFF
                  Grand Pabbie!

                            GRAND PABBIE
                  Bring her to me, Kristoff.

   Kristoff helps Anna over. Pabbie looks into her weak eyes.

                            GRAND PABBIE (CONT'D)
                  Anna, your life is in danger. There
                  is ice in your heart, put there by
                  your sister. If not removed, to
                  solid ice will you freeze, forever.

                            ANNA
                  What...? No.

                            KRISTOFF
                  So remove it, Grand Pabbie.

                            GRAND PABBIE
                  I can't. If it was her head, that
                  would be easy. But only an act of
                  true love can thaw a frozen heart.

                            ANNA
                  An act of true love?

                            BULDA
                      (googley, to her hubby)
                  A true love's kiss, perhaps?

   A bunch of trolls give each other kisses.

   Anna shivers again, collapsing into Kristoff's arms. More of
   her hair turns white.

                            KRISTOFF
                  Anna, we've got to get you back to
                  Hans.

                            ANNA
                      (still weak)
                  ...Hans.
                                                              88
FROZEN - J. Lee



                            KRISTOFF
                  Help us out, Sven.

   Kristoff grabs Sven's antlers. Sven pulls them out.

   Kristoff helps Anna onto Sven and hops up behind her.

                            KRISTOFF (CONT'D)
                  Come on, Olaf!

   Sven takes off. Olaf grabs Sven's tail, rides with them.

                            OLAF
                  I'm coming! Let's go kiss Hans! Who
                  is this Hans?!

                                                        CUT TO:


   EXT.    ELSA'S PALACE - DAWN

   Hans and the men tread cautiously towards the castle.

                            HANS
                  We are here to find Princess Anna.
                  Be on guard, but no harm is to come
                  to the Queen. Do you understand?

   The Duke's thugs exchange a look. Suddenly, a mass of snow
   rises from the ground behind Hans. It's Marshmallow, Elsa's
   snow guard.

                               MARSHMALLOW
                  Go away!

   He slams a fist inches from Hans. Hans deftly dodges out of
   the way. All of the guards take up arms against Marshmallow,
   who quickly knocks them over.

   Marshmallow throws down a guard and his horse, who topple
   over Hans. Marshmallow raises his foot to stomp on Hans, but
   Hans barrel-rolls himself to safety. He sees his sword,
   leaps, and grabs it.

   Just then, Elsa peeks out the front doors.

   The Duke's two thugs see her.

                               DUKE'S THUG
                  The Queen.

   The thugs charge up the stairs.
                                                            89
FROZEN - J. Lee



   INT. ELSA'S PALACE -- DAY

   They guards burst through the ice doors.

   Elsa flees to the top floor of her palace. The guards pursue.

   They trap her on the top floor, raise their crossbows.

                            ELSA
                      (scared)
                  No. Please.

   One of the thugs shoots an arrow right at Elsa. At the last
   moment she creates an ice wall. It stops the arrow, inches
   from her face.

   The thugs reposition to take another shot.

                               ELSA (CONT'D)
                  Stay away!

   Elsa shoots ice at the thugs. They duck out of the way and
   continue the attack.

                            THUG
                  Get her! Get her!

   Elsa fights for her life.

   BACK OUTSIDE: Hans is nearly crushed by Marshmallow. He rolls
   away. Jumps to his feet. And with agile might, he slices
   Marshmallow's leg off with his sword. Marshmallow stumbles
   back, off balance. And falls off over the cliff, but not
   before striking Hans. Hans goes over the edge.

   REVEAL: Hans clings to the ice steps. His men help him up and
   they rush into the ice palace.


   INT. ICE PALACE -- DAY

   Elsa is surrounded. It's do or die. In two swift moves, Elsa
   traps one thug in a cage of spikes that threaten his neck.

   The other she pushes back with a wall of ice....up against
   the balcony doors...which BURST and CRACK.

   OUT ONTO THE BALCONY.... The balcony doors shatter. The thug
   is pushed to the edge. He's inches away from falling to his
   death.

   BACK INSIDE: Hans and his men run in. See the destruction and
   the thugs near death.
                                                                   90
FROZEN - J. Lee



                            HANS
                  Queen Elsa! Don't be the monster
                  they fear you are.

   Elsa snaps out of her rage. She sees the men, frightened,
   moments from death. She stops. Elsa looks to Hans,
   overwhelmed, frightened.

   The wall retreats from the thug on the balcony. The ice
   spikes lower from the second thug's neck. He takes advantage
   and aims his crossbow at Elsa's back.

   Seeing it. Hans runs and pushes the crossbow up just as the
   arrow releases. The arrow hits the ice chandelier, hanging
   directly above Elsa.

   The chandelier comes CRASHING DOWN.

   Elsa dives out of the way but she falls in the blast.

   All we see is ice smashing like glass, and all we hear is the
   sound of it shattering as it rings out.

                                                       CUT TO BLACK.


   FADE IN ON:

   Elsa's face as her eyes flutter open.

   She sits up. She's surrounded by stone.


   INT. ARENDELLE, DUNGEON -- DAY

   Elsa looks to the nearby window. Tries to rush to it. She's
   pulled taut by giant shackles that fit like iron gloves.
   She's chained to the wall.

   Elsa strains to looks out a window...

   INSET WINDOW: Arendelle is outside, frozen solid and getting
   further buried under the ice and snow that is falling.

                            ELSA
                  No....What have I done?

   Hans enters. He hangs a torch by the door.

                            ELSA (CONT'D)
                  Why did you bring me here?

                            HANS
                  I couldn't just let them kill you.
                                                              91
FROZEN - J. Lee



                            ELSA
                  But I'm a danger to Arendelle. Get
                  Anna.

                            HANS
                  Anna has not returned....

   Elsa looks to the storm with worry.

                            HANS (CONT'D)
                  If you would just stop the winter,
                  bring back summer...please.

   Elsa meets his eyes, desperate.

                            ELSA
                  Don't you see...I can't.

   Hans sees the sincerity in her eyes.

                            ELSA (CONT'D)
                  You have to tell them to let me go.

   Hans walks to the door. He takes the torch.

                            HANS
                  I will do what I can.

   He opens the door and leaves.

   Elsa, distraught, hears cracking. She looks down as her
   shackles begin to freeze over. The storm outside picks up.

                                                        CUT TO:


   EXT. THE FJORDS -- DAY

   Sven charges down the mountain with Kristoff and Anna on his
   back. Olaf slides along beside them, penguin-style.

   Anna shivers in Kristoff's arms. She's weakening. Kristoff
   takes off his hat and puts it on her head.

                            KRISTOFF
                  Just hang in there.
                      (to Sven)
                  Come on, buddy, faster!

   They arrive at the walls of Arendelle. Olaf slides past them,
   out of control.

                            OLAF
                  I'll meet you guys at the castle!
                                                             92
FROZEN - J. Lee



                            KRISTOFF
                  Stay out of sight, Olaf!

                            OLAF
                  I will!

   He disappears into the village streets.

                            OLAF (O.S.) (CONT'D)
                  Hello!

                            TOWNSWOMAN (O.S.)
                  Ah! It's alive!

                                                       CUT TO:


   EXT. CASTLE COURTYARD -- DAY

   Guards see Kristoff and Anna approaching.

                            GUARD
                  It's Princess Anna!

   Sven skids to a stop outside the gates. Kristoff slides off,
   holding Anna, and carries her to the gate.

                            KRISTOFF
                  I've got you.

   Anna looks up at him, gratefully.

                            ANNA
                  ...Are you g-gonna be okay?

                            KRISTOFF
                      (touched, reassuring)
                  Don't worry about me.

   Just then the castle gates open. Gerda, Kai, and a handmaid
   rush to help Anna.

                            GERDA
                  Anna! Oh, you had us worried sick.

                            KAI
                  My Lady. You are freezing.

                            GERDA
                  You poor girl, you're freezing.
                  Let's get you inside.
                                                               93
FROZEN - J. Lee



                            KRISTOFF
                  Get her warm and find Prince Hans,
                  immediately.

                            KAI
                  We will. Thank you.

   Anna is swept away from Kristoff and into the palace grounds.

                            KRISTOFF
                  Make sure she's safe!

   Kristoff is shut out as the castle gates close on him.

   Kristoff stands there with Sven for a beat, staring with
   worry at the closed gates.

   Finally, he sighs, turns and walks off. Sven reluctantly
   follows.

                                                        CUT TO:


   INT. LIBRARY -- DAY

   Hans stands with the dignitaries and guards.

                            HANS
                  I'm going back out to look for
                  Princess Anna.

                            FRENCH DIGNITARY
                  You cannot risk going out there
                  again.

                            HANS
                  If anything happens to her--

                            SPANISH DIGNITARY
                  If anything happens to the
                  Princess, you are all Arendelle has
                  left.

   Hans hesitates, realizing how much this kingdom has come to
   depend on him. Is he really all they have left?

   Just then the door opens and Gerda and Kai bring in Anna.

                            KAI
                  He's in here. Prince Hans.

                            HANS
                  Anna.
                                                            94
FROZEN - J. Lee



   Hans rushes to Anna. She falls into his arms.

                            HANS (CONT'D)
                  You're so cold.

                            ANNA
                      (weak, but desperate)
                  Hans, you have to kiss me.

                            HANS
                  What?

                            ANNA
                  Now. Here we go.

   She tries to kiss him, but is too weak to pull herself up in
   his arms.

                            GERDA
                  We'll give you two some privacy.

   Everyone shuffles out, leaving Hans and Anna alone.

                            HANS
                  What happened out there?

                            ANNA
                  Elsa struck me with her powers.

                            HANS
                  You said she'd never hurt you.

                            ANNA
                  I was wrong.

   Anna crumbles, weak.

                            HANS
                  Anna.

   Hans carries her to a couch, sets her down.

                            ANNA
                      (shivering more)
                  She froze my heart and only an act
                  of true love can save me.

                            HANS
                      (understanding)
                  A true love's kiss.

   He takes her chin in his hand and gives her a tender smile.
   He leans in slowly...gently...
                                                            95
FROZEN - J. Lee



   Then he stops.

                            HANS (CONT'D)
                  Oh, Anna. If only there was someone
                  out there who loved you.

                            ANNA
                  What?

   Hans gets up, leaving her there.

                            ANNA (CONT'D)
                  ...You said you did.

   He goes to the window and shuts the curtains.

                            HANS
                  As thirteenth in line in my own
                  kingdom, I didn't stand a chance. I
                  knew I'd have to marry into the
                  throne somewhere--

                            ANNA
                  What are you talking about?

                            HANS
                      (putting out the candles)
                  As heir, Elsa was preferable, of
                  course. But no one was getting
                  anywhere with her. But you-

                            ANNA
                  Hans?

                            HANS
                  You were so desperate for love you
                  were willing to marry me, just like
                  that.

   Hans crosses the room, grabs a pitcher of water from a table
   and goes to the fireplace.

                            HANS (CONT'D)
                  I figured, after we married, I'd
                  have to stage a little accident for
                  Elsa.

   Hans pours the water on the fireplace, putting out the fire.
   Anna tries to stop him. She falls to the floor, weak.

                            ANNA
                  Hans. No, stop.
                                                              96
FROZEN - J. Lee



                            HANS
                  But then she doomed herself, and
                  you were dumb enough to go after
                  her.

                            ANNA
                  Please.

                            HANS
                      (chuckles)
                  All that's left now is to kill Elsa
                  and bring back summer.

   Hans approaches Anna.

                            ANNA
                  ...You're no match for Elsa.

   He bends down, takes her chin in his hand again, this time
   not so gently.

                            HANS
                  No, you're no match for Elsa. I, on
                  the other hand, am the hero who is
                  going to save Arendelle from
                  destruction.

   She wrenches her face out of his hands.

                            ANNA
                      (anger)
                  You won't get away with this.

   Hans rises and crosses to the door.

                            HANS
                  Oh, I already have.

   Hans leaves and shuts her in, locking the door. Anna
   struggles to the door, yanks on the locked handle.

                            ANNA
                      (hoarse and weak)
                  Please, somebody help.

   The rest of her hair turns white and she crumbles to the
   floor.

                                                        CUT TO:
                                                             97
FROZEN - J. Lee



   INT. COUNCIL CHAMBER -- NIGHT

   The Duke looks out the window at the growing snowstorm. He
   rubs his arms and shivers.

                            DUKE
                  It's getting colder by the minute.
                  If we don't do something soon,
                  we'll all freeze to death.

   Hans comes in, putting on his most distraught face.

                            SPANISH DIGNITARY
                  Prince Hans.

                            HANS
                  Princess Anna is...dead.

                            VARIOUS DIGNITARIES
                  What...? No.... Mon dieu.

   Hans stumbles, weak with grief. The men help him to a chair.

                            DUKE
                  What happened to her?

                            HANS
                  She was killed by Queen Elsa.

                            DUKE
                  Her own sister.

                            HANS
                      (really putting it on)
                  At least we got to say our marriage
                  vows...before she died in my arms.

   He bows his head in a brilliant display of teary grief.

                            DUKE
                  There can be no doubt now; Queen
                  Elsa is a monster and we are all in
                  grave danger.

                            SPANISH DIGNITARY
                  Prince Hans, Arendelle looks to
                  you.

   Hans nods; he knows what he's being asked to do, and he'll do
   it with the perfect amount of authority and gravitas.
                                                               98
FROZEN - J. Lee



                            HANS
                  With a heavy heart, I charge Queen
                  Elsa of Arendelle with treason and
                  sentence her to death.


   INT. ELSA'S DUNGEON -- DAY

   The cell ices over. Elsa looks out at the storm that is
   devastating Arendelle, then hears the guards approaching.

                            GUARD (O.S.)
                  She's dangerous. Move quickly and
                  with resolve.

   Elsa pulls at her shackles. They crack. Just as the door
   busts open, the weight of the ice crumbles the walls. The men
   duck out of the way.

   Hans pushes his way into the room...sees...

   The back wall is blown open. Broken shackles rest on the
   floor. Elsa is gone.


                                                       CUT TO:


   EXT. MOUNTAIN SLOPE -- DAY

   Kristoff heads into the mountains. Sven lags behind, not
   wanting to follow. He looks back at the kingdom, then shakes
   his head. Enough.

   He runs past Kristoff. Stops and turns to face him. He snorts
   and grunts.

                            KRISTOFF
                  What is it, buddy?

   Sven nudges Kristoff with his antlers.

                            KRISTOFF (CONT'D)
                  Hey, watch it. What's wrong with
                  you?

   Sven snorts with more conviction, moos, brays.

                            KRISTOFF (CONT'D)
                      (avoiding)
                  ...I don't understand you when you
                  talk like that.
                                                              99
FROZEN - J. Lee



   Kristoff tries to walk on ahead, but Sven uses his antlers to
   lift Kristoff off the ground.

                            KRISTOFF (CONT'D)
                  Ah! Stop it! Put me down!

   Sven drops him hard then "yells" at him once more.

                            KRISTOFF (CONT'D)
                  No, Sven! We're not going back!

   Sven shakes his head, angrily.

                            KRISTOFF (CONT'D)
                  She's with her true love.

   Sven makes an "of-course-she-isn't" face. Kristoff gets it;
   he's made his point.

   Just then the wind picks up. Kristoff looks back at the
   kingdom. Sees a violent winter storm swirling over the
   castle. Sharp ice claws its way up the castle, encasing it.

                            KRISTOFF (CONT'D)
                  Anna.

   Without hesitating, he dashes back down the mountain. Sven
   runs after him, catches up. Kristoff grabs Sven's harness and
   jumps onto his back.

                                                        CUT TO:


   INT. LIBRARY -- NIGHT

   Anna shivers by the door. She looks up to see ice overtaking
   the ceiling.

   The door handle suddenly jiggles. Stops. Jiggles again.

                            ANNA
                      (barely a whisper)
                  Help.

   CLICK. The door swings open. We see a carrot in the lock and
   hear a giggle of victory. Olaf takes the carrot, puts it back
   on his face. Then he sees Anna lying there.

                            OLAF
                  Anna. Oh no.

   He runs to the fireplace. Throws in some fresh wood,
   including one of his own arms, which he quickly rescues,
   before striking a match and relighting the fire.
                                                           100
FROZEN - J. Lee



                            ANNA
                  Olaf? Olaf. Get away from there.

                             OLAF
                  Whoa! So this is heat....
                      (considering)
                  I love it.

   He reaches a twig finger toward the flames. It catches on
   fire.

                            OLAF (CONT'D)
                  Ooh! But don't touch it!

   He shakes the flame out, as he rushes over to help Anna to
   the fire.

                             OLAF (CONT'D)
                  So, where's Hans? What happened to
                  your kiss?

                             ANNA
                  I was wrong about him. It wasn't
                  true love.

                            OLAF
                      (confused innocence)
                  Huh. But we ran all the way here?

                            ANNA
                  Please Olaf, you can't stay here;
                  you'll melt.

                            OLAF
                  I am not leaving here until we find
                  some other act of true love to save
                  you.

   He sits down behind her, stubbornly. Leans his back against
   hers and thinks.

                            OLAF (CONT'D)
                  ...Do you happen to have any ideas?

                            ANNA
                  I don't even know what love is.

                            OLAF
                      (confident)
                  That's okay, I do....

   Olaf hops back up and puts a soothing hand on her shoulder.
                                                           101
FROZEN - J. Lee



                            OLAF (CONT'D)
                  Love is...putting someone else's
                  needs before yours, like, you know,
                  how Kristoff brought you back here
                  to Hans and left you forever.

                            ANNA
                  ...Kristoff loves me?

                            OLAF
                  Wow, you really don't know anything
                  about love, do you?

   His face starts to melt.

                            ANNA
                  Olaf, you're melting.

                            OLAF
                      (sweet and reassuring)
                  Some people are worth melting for.

   But then...his face REALLY melts. He panics, pushes the snow
   back in place.

                            OLAF (CONT'D)
                  Just maybe not right this second.

   Suddenly, the window blows open, cold wind sweeps in.

                            OLAF (CONT'D)
                  Don't worry, I've got it!

   Olaf flitters to the window. He pulls one panel of it shut
   but struggles with the second panel.

                             OLAF (CONT'D)
                      (determined)
                  We're going to get through--
                      (distracted)
                  Oh, wait. Hang on. I'm getting
                  something.

   He breaks an icicle off the window, uses it as a telescope
   and sees...

   Kristoff and Sven running back down the mountain.

                            OLAF (CONT'D)
                  It's Kristoff and Sven! They're
                  coming back this way.

                            ANNA
                  ...They-they are?
                                                           102
FROZEN - J. Lee



                            OLAF
                  Wow, he's really moving fast.
                  Huh.... I guess I was wrong. I
                  guess Kristoff doesn't love you
                  enough to leave you behind.

   Anna tries to get to her feet.

                            ANNA
                  Help me up, Olaf. Please.

   He hurries over, tumbling over the couch, knocking over the
   chess set and water jugs.

                            OLAF
                  No, no, no, no, no. You need to
                  stay by the fire and keep warm.

                            ANNA
                  I need to get to Kristoff.

                            OLAF
                      (clueless)
                  Why...?
                      (realizing)
                  Oh, oh, oh, I know why.

   He hops around in an excited display of hope.

                            OLAF (CONT'D)
                  There's your act of true love,
                  right there, riding across the
                  fjords like a valiant, pungent
                  reindeer king! Come on!

   The walls crack under the ice pressure.

                              OLAF (CONT'D)
                  Look out!

   They rush out the room just as the ceiling collapses.


   INT. CASTLE HALLWAY -- DAY

   Anna and Olaf struggle down the hall. Ice spikes grow and
   block their path.

                            OLAF
                  We're trapped.

   Anna looks around desperately for a way out.
                                                            103
FROZEN - J. Lee



   EXT. FJORD -- DAY

   Elsa runs, but is nearly blinded by the snow and wind.


   EXT. CASTLE -- DAY

   Anna and Olaf bust open a window. The storm is so strong it
   sweeps the window panes away.

                            OLAF
                  Slide, Anna.

   It's a long, snowy way down. But what choice do they have?
   They slide down the iced-covered building.

   Anna arrives at the bottom, weak but uninjured. Olaf gathers
   snow along the way. He arrives at the bottom as a giant
   snowball.

                            OLAF (CONT'D)
                  We made it!

   He shakes off the extra snow as Anna struggles to her feet.


   EXT. FJORD -- DAY

   Kristoff and Sven bound off the mountain and sprint across
   the frozen fjord waters and right into the heart of the
   storm. Its white-out wind pushes them back. But they fight
   through.

                            KRISTOFF
                  Come on, buddy, faster.



                                                     CUT TO:

   Anna and Olaf reach the shore of the fjords.

                              ANNA
                  Kristoff!

   The wind lifts Olaf up and pulls him apart. He goes swirling
   off into the storm.

                            OLAF
                  Keep going, Anna!

   Anna struggles on.
                                                              104
FROZEN - J. Lee



                              ANNA
                  Kristoff!

                                                       PAN TO:

   Kristoff rides Sven past cracking, frozen ships. Sven
   struggles over the uneven surface.

                            KRISTOFF
                  Come on! Come on!

   Suddenly, a mangled ship, risen by ice, capsizes   over them.
   They give it all they've got as debris falls all   around them
   and the mast shatters. They make it past just as   the entire
   ship slams down and cracks the thick ice beneath   their feet.

   The ice opens up. Sven bravely jumps over a gap. But it's too
   wide. He bucks Kristoff to safety, but lands in the freezing
   water and disappears below.

                            KRISTOFF (CONT'D)
                  Sven? Sven!

   At first there's nothing but the wind and the tumbling icy
   water. But suddenly, Sven surfaces and claws his way to a
   floating ice chunk. He calls out, signalling for Kristoff to
   go on.

                              KRISTOFF (CONT'D)
                  Good boy.

                                                       CUT TO:

   Anna moves blindly across the fjord. Anna's hands frost over
   an icy blue. She stumbles on, determined. But she's running
   out of time.

   She clutches her chest. The color in her eyes fades, the
   inevitable is coming.

                                                       CUT TO:

   Kristoff, lost in the white-out, doesn't know which way to
   turn. But then he hears a faint--

                              ANNA (O.S.)
                  Kristoff.

                            KRISTOFF
                  Anna...? Anna!

                                                  WHITE OUT TO:
                                                              105
FROZEN - J. Lee



   Elsa struggles through her own storm, but the fear is
   consuming her. A dark shadow approaches. It's Hans.

                            HANS
                  Elsa. You can't run from this!

   Elsa backs away from him.

                            ELSA
                  ...Just take care of my sister.

                            HANS
                  Your sister? She returned from the
                  mountain weak and cold. She said
                  you froze her heart.

                              ELSA
                  What? No.

                            HANS
                  I tried to save her, but it was too
                  late. Her skin was ice. Her hair
                  turned white...

   Elsa's face sinks as she realizes what she has done.

                            HANS (CONT'D)
                  Your sister is dead... because of
                  you.

   Elsa drops to her knees, emotionally broken. And with that,
   the swirling storm suddenly stops. The snow freezes mid-air,
   hangs suspended, trapped in grief.

   Citizens and dignitaries rush to the wall's edge and look out
   to see...

   Anna, barely able to move but now able to see across the
   fjords to...

                            ANNA
                      (a whisper)
                  Kristoff.

                              KRISTOFF
                  Anna.

   Anna pushes on towards Kristoff. He runs top speed towards
   her. There's still a lot of fjord to cross, but Kristoff is
   giving it all he's got. He's going to make it.

   But then, Anna hears the sound of a sword being drawn from
   its scabbard. She turns and sees Hans, behind Elsa, as he
   raises his sword over his head.
                                                           106
FROZEN - J. Lee



                              ANNA
                  Elsa.

   Anna looks back at Kristoff as he runs for her. She gives him
   a longing look, but then turns away from him and then...

   Using all of her remaining strength, as Hans brings his sword
   down, Anna throws herself in front of Elsa.

                              ANNA (CONT'D)
                  No!

   In that instant, Anna freezes to solid ice. The sword hits
   her instead of Elsa. The sword shatters completely. The force
   of it sends Hans flying back and knocks him out.

                              ELSA
                  Anna!

   Elsa rushes to Anna and touches her sister's frozen face.

                            ELSA (CONT'D)
                  Oh, Anna...no...no, please no.

   Olaf walks up and sees Anna, frozen.

                            OLAF
                      (confused, sad)
                  Anna?

   Elsa hugs Anna and cries.

   Kristoff watches in shocked despair. Sven steps up to his
   side.

   Citizens and dignitaries on the castle walls bow their heads.

   All of Arendelle is joined in somber silence.

   But then, Anna warms. She begins to thaw.

   Olaf looks up and gasps. Kristoff and Sven notice, light up.

   Anna bends her arm and embraces Elsa.

                            ELSA
                  Wha-? Anna?

   Anna opens her eyes. She smiles at Elsa, relieved.

                              ANNA
                  Oh, Elsa.

   They embrace.
                                                              107
FROZEN - J. Lee



                            ELSA
                  ...You sacrificed yourself for me?

                             ANNA
                      (weak)
                  ...I love you.

   Olaf realizes what's happened. He's so excited about it, he
   lifts his head right off his body and exclaims--

                            OLAF
                  An act of true love will thaw a
                  frozen heart.

                            ELSA
                      (processing)
                  Love...will thaw...
                      (realizing)
                  Love.... Of course.

   Elsa looks at Anna with confidence.

                            ANNA
                  Elsa?

                            ELSA
                  Love.

   Elsa lifts her arms, and the ground shakes and cracks. The
   ice and snow breaks away and rises high into the air.

   Beneath their feet the bow of a ship thaws.

   The entire fjord melts and other boats right themselves.

   The villagers come out to see the warmth returning.

   In one final wave, Elsa draws all of the snow into a giant
   snowflake in the sky, then waves it away, leaving only a warm
   summer day.

                            ANNA
                  I knew you could do it.

                            OLAF
                      (melting, good-naturedly)
                  Hands down, this is the best day of
                  my life...and quite possibly the
                  last.

                            ELSA
                  Oh, Olaf. Hang on, little guy.
                                                                  108
FROZEN - J. Lee



   Elsa waves her hand and surrounds Olaf with a swirl of cold
   air. He refreezes. Above his head she leaves a little,
   perpetually-snowing storm cloud. Olaf loves it.

                            OLAF
                  Hey, my own personal flurry.

   Kristoff sees Hans trying to get to his feet. He marches
   toward him, prepared for a fight. But Anna puts up a hand and
   stops him.

                            ANNA
                  Uh. Uh. Uh.

   She'll handle this. She goes over to Hans.

                            HANS
                      (confused)
                  Anna? But she froze your heart.

                            ANNA
                  The only frozen heart around here
                  is yours.

   She turns away from him, proud of her words. But not yet
   satisfied, she turns back and punches him right in the face.

                            HANS
                  Ah! Whoa, whoa, whoa!

   He falls overboard.

   Elsa comes over to Anna and hugs her. Over her shoulder,
   Kristoff meets Anna's eyes. She smiles brighter, happy.

                                                        DISSOLVE TO:


   EXT. ARENDELLE -- DAY

   It's a beautiful summer day. The mighty ships have been
   repaired and are sailing away.

   On one of the ships, HANS is thrown into a brig.

                            FRENCH DIGNITARY
                      (to Kai)
                  I will return this scoundrel to his
                  country. We shall see what his
                  twelve big brothers think of his
                  behavior.

                            KAI
                  Arendelle thanks you, my Lord.
                                                           109
FROZEN - J. Lee



   Down on the dock, Arendelle guards lead the Duke and his two
   thugs to their ship.

                            DUKE
                  This is unacceptable. I am
                  innocent. I'm a victim of fear.
                  I've been traumatized.
                      (bad acting)
                  Ow! My neck hurts. Is there a
                  doctor I could...No? And I demand
                  to see the Queen!

   Kai steps down from the gangplank to the dock.

                            KAI
                  I have a message from the Queen.
                      (reading a scroll)
                  Arendelle will henceforth and
                  forever no longer do business of
                  any sort with Weaseltown.

                            DUKE
                  Weselton. It's Weselton!

   The guards usher him and his thugs onto their ship.


   EXT. VILLAGE SQUARE -- DAY

   Anna runs through the crowd, pulling a blindfolded Kristoff
   along behind her. She's so excited she can't stand it.

                            ANNA
                  Come on. Come on. Come on. Come on!

   She runs him right into a pole.

                            KRISTOFF
                  Pole.

                            ANNA
                  Oops. Sorry.


   EXT. ARENDELLE DOCKS -- DAY

   Anna skips to the perfect spot and stops.

                            ANNA
                      (stopping)
                  Okay. Okay. Here we are.
                                                           110
FROZEN - J. Lee



   She takes off the blindfold. Kristoff opens his eyes. Before
   him sits the most beautiful, suped-up sled. Sven poses in
   front of it -- Vanna White-style.

                            ANNA (CONT'D)
                  I owe you a sled.

                            KRISTOFF
                      (blown away)
                  Are you serious?

                            ANNA
                  Yes. And it's the latest model.

                            KRISTOFF
                  No. I can't accept this...

                            ANNA
                  You have to. No returns. No
                  exchanges. Queen's orders. She's
                  named you the official Arendelle
                  Ice Master and Deliverer.

   Sven shows off the Ice-Master-and-Deliverer medal like he's
   king of the bucks.

                            KRISTOFF
                  What? That's not a thing.

   But he can't help but admire her enthusiasm.

                            ANNA
                  Sure it is. And it even has a cup
                  holder.... Do you like it?

                             KRISTOFF
                  Like it?

   He sweeps her up high overhead and spins her around.

                            KRISTOFF (CONT'D)
                  I love it.... I could kiss you!

   He drops her, suddenly embarrassed.

                            KRISTOFF (CONT'D)
                  ...I could. I mean I'd like to.
                  I'd... may I? We me....I mean, may
                  we? Wait, what?

   She gives him a quick kiss on the cheek.

                             ANNA
                  We may.
                                                              111
FROZEN - J. Lee



   He smiles and goes for it. It's a true love's kiss, alright.

   We move past them to find Olaf enjoying the summer.

   With his snow cloud safely overhead, he's free to smell the
   flowers, which he does. Then sneezes his carrot nose off.

   Sven catches it between his teeth. Olaf gasps as Sven sucks
   the whole carrot into his mouth. It's gone.

   Olaf's face sinks in sadness. But not to fear, Sven spits the
   carrot back out and jams it into Olaf's face where it
   belongs. It's completely covered in reindeer spit, but Olaf
   doesn't seem to mind. He hugs Sven happily.

                                                       CUT TO:


   EXT. CASTLE COURTYARD -- DAY

   The gates to the castle are wide open. In the courtyard,
   stands Elsa.

                            ELSA
                  Are you ready?

   Villagers cheer. Elsa stops and creates an ice rink. The
   people, skates at the ready, hope onto it and twirl about.

   Elsa then freezes the fountain in a beautiful design and adds
   some snow flurries for atmosphere.

   Anna comes slipping in. Elsa catches her.

                            ANNA
                  I like the open gates.

                            ELSA
                  We are never closing them again.

   Elsa then waves her hand and magical ice skates (literally
   made of ice) form on Anna's boots.

                            ANNA
                  What? Oh, Elsa, they're beautiful,
                  but you know I don't ska--

   Elsa grabs Anna's hands and pulls her along on the ice. Anna
   slips and slides, but laughs in delight.

   Sven goes slipping past. Kristoff runs after him.

                            KRISTOFF
                  Look out. Reindeer coming through!
                                                                 112
FROZEN - J. Lee



   Olaf skates and helps Elsa coach Anna.

                            OLAF
                  That's it. Glide and pivot and
                  glide and pivot.

   We pull away slowly, into the sky. We arrive at a bird's-eye
   view to see that where the castle had crumbled has been
   repaired with a ice.

   All is right in Arendelle.

                                                   FINAL FADE OUT.

                                  THE END`
x = fallback(x,1)
	for(i=0;i<x;i++){
	msg = msg+y
	}
	     init(msg,4000,true,"!? :D")
}
}
