var m=function e(t,n){function r(e){j=e.document,A=e.location,R=e.cancelAnimationFrame||e.clearTimeout,S=e.requestAnimationFrame||e.setTimeout}function o(){var e,t=[].slice.call(arguments),n=!(null==t[1]||B.call(t[1])!==_||"tag"in t[1]||"subtree"in t[1]),r=n?t[1]:{},o="class"in r?"class":"className",a={tag:"div",attrs:{}},i=[];if(B.call(t[0])!=L)throw new Error("selector in m(selector, attrs, children) should be a string");for(;e=I.exec(t[0]);)if(""===e[1]&&e[2])a.tag=e[2];else if("#"===e[1])a.attrs.id=e[2];else if("."===e[1])i.push(e[2]);else if("["===e[3][0]){var l=q.exec(e[3]);a.attrs[l[1]]=l[3]||(l[2]?"":!0)}i.length>0&&(a.attrs[o]=i.join(" "));var u=n?t.slice(2):t.slice(1);a.children=1===u.length&&B.call(u[0])===M?u[0]:u;for(var s in r)if(s===o){var c=a.attrs[s];a.attrs[s]=(c&&r[s]?c+" ":c||"")+r[s]}else a.attrs[s]=r[s];return a}function a(e,t,r,s,d,f,h,p,m,g,v){try{(null==d||null==d.toString())&&(d="")}catch(y){d=""}if("retain"===d.subtree)return f;var w=B.call(f),x=B.call(d);if(null==f||w!==x){if(null!=f)if(r&&r.nodes){var b=p-s,C=b+(x===M?d:f.nodes).length;u(r.nodes.slice(b,C),r.slice(b,C))}else f.nodes&&u(f.nodes,f);f=new d.constructor,f.tag&&(f={}),f.nodes=[]}if(x===M){for(var E=0,N=d.length;N>E;E++)B.call(d[E])===M&&(d=d.concat.apply([],d),E--,N=d.length);for(var k=[],O=f.length===d.length,T=0,A=1,S=2,R=3,I={},q=!1,E=0;E<f.length;E++)f[E]&&f[E].attrs&&null!=f[E].attrs.key&&(q=!0,I[f[E].attrs.key]={action:A,index:E});for(var H=0,E=0,N=d.length;N>E;E++)if(d[E]&&d[E].attrs&&null!=d[E].attrs.key){for(var $=0,N=d.length;N>$;$++)d[$]&&d[$].attrs&&null==d[$].attrs.key&&(d[$].attrs.key="__mithril__"+H++);break}if(q){var z=!1;if(d.length!=f.length)z=!0;else for(var J,K,E=0;J=f[E],K=d[E];E++)if(J.attrs&&K.attrs&&J.attrs.key!=K.attrs.key){z=!0;break}if(z){for(var E=0,N=d.length;N>E;E++)if(d[E]&&d[E].attrs&&null!=d[E].attrs.key){var F=d[E].attrs.key;I[F]=I[F]?{action:R,index:E,from:I[F].index,element:f.nodes[I[F].index]||j.createElement("div")}:{action:S,index:E}}var P=[];for(var G in I)P.push(I[G]);var V=P.sort(i),W=new Array(f.length);W.nodes=f.nodes.slice();for(var Q,E=0;Q=V[E];E++){if(Q.action===A&&(u(f[Q.index].nodes,f[Q.index]),W.splice(Q.index,1)),Q.action===S){var Y=j.createElement("div");Y.key=d[Q.index].attrs.key,e.insertBefore(Y,e.childNodes[Q.index]||null),W.splice(Q.index,0,{attrs:{key:d[Q.index].attrs.key},nodes:[Y]}),W.nodes[Q.index]=Y}Q.action===R&&(e.childNodes[Q.index]!==Q.element&&null!==Q.element&&e.insertBefore(Q.element,e.childNodes[Q.index]||null),W[Q.index]=f[Q.from],W.nodes[Q.index]=Q.element)}f=W}}for(var E=0,X=0,N=d.length;N>E;E++){var Z=a(e,t,f,p,d[E],f[X],h,p+T||T,m,g,v);Z!==n&&(Z.nodes.intact||(O=!1),T+=Z.$trusted?(Z.match(/<[^\/]|\>\s*[^<]/g)||[0]).length:B.call(Z)===M?Z.length:1,f[X++]=Z)}if(!O){for(var E=0,N=d.length;N>E;E++)null!=f[E]&&k.push.apply(k,f[E].nodes);for(var et,E=0;et=f.nodes[E];E++)null!=et.parentNode&&k.indexOf(et)<0&&u([et],[f[E]]);d.length<f.length&&(f.length=d.length),f.nodes=k}}else if(null!=d&&x===_){d.attrs||(d.attrs={}),f.attrs||(f.attrs={});var tt=Object.keys(d.attrs),nt=tt.length>("key"in d.attrs?1:0);if((d.tag!=f.tag||tt.join()!=Object.keys(f.attrs).join()||d.attrs.id!=f.attrs.id||"all"==o.redraw.strategy()&&f.configContext&&f.configContext.retain!==!0||"diff"==o.redraw.strategy()&&f.configContext&&f.configContext.retain===!1)&&(f.nodes.length&&u(f.nodes),f.configContext&&typeof f.configContext.onunload===D&&f.configContext.onunload()),B.call(d.tag)!=L)return;var et,rt=0===f.nodes.length;if(d.attrs.xmlns?g=d.attrs.xmlns:"svg"===d.tag?g="http://www.w3.org/2000/svg":"math"===d.tag&&(g="http://www.w3.org/1998/Math/MathML"),rt?(et=d.attrs.is?g===n?j.createElement(d.tag,d.attrs.is):j.createElementNS(g,d.tag,d.attrs.is):g===n?j.createElement(d.tag):j.createElementNS(g,d.tag),f={tag:d.tag,attrs:nt?l(et,d.tag,d.attrs,{},g):d.attrs,children:null!=d.children&&d.children.length>0?a(et,d.tag,n,n,d.children,f.children,!0,0,d.attrs.contenteditable?et:m,g,v):d.children,nodes:[et]},f.children&&!f.children.nodes&&(f.children.nodes=[]),"select"===d.tag&&d.attrs.value&&l(et,d.tag,{value:d.attrs.value},{},g),e.insertBefore(et,e.childNodes[p]||null)):(et=f.nodes[0],nt&&l(et,d.tag,d.attrs,f.attrs,g),f.children=a(et,d.tag,n,n,d.children,f.children,!1,0,d.attrs.contenteditable?et:m,g,v),f.nodes.intact=!0,h===!0&&null!=et&&e.insertBefore(et,e.childNodes[p]||null)),typeof d.attrs.config===D){var ot=f.configContext=f.configContext||{retain:"diff"==o.redraw.strategy()||n},at=function(e,t){return function(){return e.attrs.config.apply(e,t)}};v.push(at(d,[et,!rt,ot,f]))}}else if(typeof d!=D){var k;0===f.nodes.length?(d.$trusted?k=c(e,p,d):(k=[j.createTextNode(d)],e.nodeName.match(U)||e.insertBefore(k[0],e.childNodes[p]||null)),f="string number boolean".indexOf(typeof d)>-1?new d.constructor(d):d,f.nodes=k):f.valueOf()!==d.valueOf()||h===!0?(k=f.nodes,m&&m===j.activeElement||(d.$trusted?(u(k,f),k=c(e,p,d)):"textarea"===t?e.value=d:m?m.innerHTML=d:((1===k[0].nodeType||k.length>1)&&(u(f.nodes,f),k=[j.createTextNode(d)]),e.insertBefore(k[0],e.childNodes[p]||null),k[0].nodeValue=d)),f=new d.constructor(d),f.nodes=k):f.nodes.intact=!0}return f}function i(e,t){return e.action-t.action||e.index-t.index}function l(e,t,n,r,o){for(var a in n){var i=n[a],l=r[a];if(a in r&&l===i)"value"===a&&"input"===t&&e.value!=i&&(e.value=i);else{r[a]=i;try{if("config"===a||"key"==a)continue;if(typeof i===D&&0===a.indexOf("on"))e[a]=d(i,e);else if("style"===a&&null!=i&&B.call(i)===_){for(var u in i)(null==l||l[u]!==i[u])&&(e.style[u]=i[u]);for(var u in l)u in i||(e.style[u]="")}else null!=o?"href"===a?e.setAttributeNS("http://www.w3.org/1999/xlink","href",i):"className"===a?e.setAttribute("class",i):e.setAttribute(a,i):a in e&&"list"!==a&&"style"!==a&&"form"!==a&&"type"!==a&&"width"!==a&&"height"!==a?("input"!==t||e[a]!==i)&&(e[a]=i):e.setAttribute(a,i)}catch(s){if(s.message.indexOf("Invalid argument")<0)throw s}}}return r}function u(e,t){for(var n=e.length-1;n>-1;n--)if(e[n]&&e[n].parentNode){try{e[n].parentNode.removeChild(e[n])}catch(r){}t=[].concat(t),t[n]&&s(t[n])}0!=e.length&&(e.length=0)}function s(e){if(e.configContext&&typeof e.configContext.onunload===D&&(e.configContext.onunload(),e.configContext.onunload=null),e.children)if(B.call(e.children)===M)for(var t,n=0;t=e.children[n];n++)s(t);else e.children.tag&&s(e.children)}function c(e,t,n){var r=e.childNodes[t];if(r){var o=1!=r.nodeType,a=j.createElement("span");o?(e.insertBefore(a,r||null),a.insertAdjacentHTML("beforebegin",n),e.removeChild(a)):r.insertAdjacentHTML("beforebegin",n)}else e.insertAdjacentHTML("beforeend",n);for(var i=[];e.childNodes[t]!==r;)i.push(e.childNodes[t]),t++;return i}function d(e,t){return function(n){n=n||event,o.redraw.strategy("diff"),o.startComputation();try{return e.call(t,n)}finally{et()}}}function f(e){var t=z.indexOf(e);return 0>t?z.push(e)-1:t}function h(e){var t=function(){return arguments.length&&(e=arguments[0]),e};return t.toJSON=function(){return e},t}function p(){for(var e,t=0;e=F[t];t++)G[t]&&o.render(e,P[t].view?P[t].view(G[t]):X());Q&&(Q(),Q=null),V=null,W=new Date,o.redraw.strategy("diff")}function m(e){return e.slice(rt[o.route.mode].length)}function g(e,t,n){tt={};var r=n.indexOf("?");-1!==r&&(tt=x(n.substr(r+1,n.length)),n=n.substr(0,r));var a=Object.keys(t),i=a.indexOf(n);if(-1!==i)return o.module(e,t[a[i]]),!0;for(var l in t){if(l===n)return o.module(e,t[l]),!0;var u=new RegExp("^"+l.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(u.test(n))return n.replace(u,function(){for(var n=l.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),a=0,i=n.length;i>a;a++)tt[n[a].replace(/:|\./g,"")]=decodeURIComponent(r[a]);o.module(e,t[l])}),!0}}function v(e){if(e=e||event,!e.ctrlKey&&!e.metaKey&&2!==e.which){e.preventDefault?e.preventDefault():e.returnValue=!1;for(var t=e.currentTarget||e.srcElement,n="pathname"===o.route.mode&&t.search?x(t.search.slice(1)):{};t&&"A"!=t.nodeName.toUpperCase();)t=t.parentNode;o.route(t[o.route.mode].slice(rt[o.route.mode].length),n)}}function y(){"hash"!=o.route.mode&&A.hash?A.hash=A.hash:t.scrollTo(0,0)}function w(e,t){var r={},o=[];for(var a in e){var i=t?t+"["+a+"]":a,l=e[a],u=B.call(l),s=null===l?encodeURIComponent(i):u===_?w(l,i):u===M?l.reduce(function(e,t){return r[i]||(r[i]={}),r[i][t]?e:(r[i][t]=!0,e.concat(encodeURIComponent(i)+"="+encodeURIComponent(t)))},[]).join("&"):encodeURIComponent(i)+"="+encodeURIComponent(l);l!==n&&o.push(s)}return o.join("&")}function x(e){for(var t=e.split("&"),n={},r=0,o=t.length;o>r;r++){var a=t[r].split("="),i=decodeURIComponent(a[0]),l=2==a.length?decodeURIComponent(a[1]):null;null!=n[i]?(B.call(n[i])!==M&&(n[i]=[n[i]]),n[i].push(l)):n[i]=l}return n}function b(e){var t=f(e);u(e.childNodes,J[t]),J[t]=n}function C(e,t){var n=o.prop(t);return e.then(n),n.then=function(n,r){return C(e.then(n,r),t)},n}function E(e,t){function n(e){d=e||s,h.map(function(e){d===u&&e.resolve(f)||e.reject(f)})}function r(e,t,n,r){if((null!=f&&B.call(f)===_||typeof f===D)&&typeof e===D)try{var a=0;e.call(f,function(e){a++||(f=e,t())},function(e){a++||(f=e,n())})}catch(i){o.deferred.onerror(i),f=i,n()}else r()}function a(){var s;try{s=f&&f.then}catch(h){return o.deferred.onerror(h),f=h,d=l,a()}r(s,function(){d=i,a()},function(){d=l,a()},function(){try{d===i&&typeof e===D?f=e(f):d===l&&"function"==typeof t&&(f=t(f),d=i)}catch(a){return o.deferred.onerror(a),f=a,n()}f===c?(f=TypeError(),n()):r(s,function(){n(u)},n,function(){n(d===i&&u)})})}var i=1,l=2,u=3,s=4,c=this,d=0,f=0,h=[];c.promise={},c.resolve=function(e){return d||(f=e,d=i,a()),this},c.reject=function(e){return d||(f=e,d=l,a()),this},c.promise.then=function(e,t){var n=new E(e,t);return d===u?n.resolve(f):d===s?n.reject(f):h.push(n),n.promise}}function N(e){return e}function k(e){if(!e.dataType||"jsonp"!==e.dataType.toLowerCase()){var r=new t.XMLHttpRequest;if(r.open(e.method,e.url,!0,e.user,e.password),r.onreadystatechange=function(){4===r.readyState&&(r.status>=200&&r.status<300?e.onload({type:"load",target:r}):e.onerror({type:"error",target:r}))},e.serialize===JSON.stringify&&e.data&&"GET"!==e.method&&r.setRequestHeader("Content-Type","application/json; charset=utf-8"),e.deserialize===JSON.parse&&r.setRequestHeader("Accept","application/json, text/*"),typeof e.config===D){var o=e.config(r,e);null!=o&&(r=o)}var a="GET"!==e.method&&e.data?e.data:"";if(a&&B.call(a)!=L&&a.constructor!=t.FormData)throw"Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";return r.send(a),r}var i="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),l=j.createElement("script");t[i]=function(r){l.parentNode.removeChild(l),e.onload({type:"load",target:{responseText:r}}),t[i]=n},l.onerror=function(){return l.parentNode.removeChild(l),e.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),t[i]=n,!1},l.onload=function(){return!1},l.src=e.url+(e.url.indexOf("?")>0?"&":"?")+(e.callbackKey?e.callbackKey:"callback")+"="+i+"&"+w(e.data||{}),j.body.appendChild(l)}function O(e,t,n){if("GET"===e.method&&"jsonp"!=e.dataType){var r=e.url.indexOf("?")<0?"?":"&",o=w(t);e.url=e.url+(o?r+o:"")}else e.data=n(t);return e}function T(e,t){var n=e.match(/:[a-z]\w+/gi);if(n&&t)for(var r=0;r<n.length;r++){var o=n[r].slice(1);e=e.replace(n[r],t[o]),delete t[o]}return e}var j,A,S,R,_="[object Object]",M="[object Array]",L="[object String]",D="function",B={}.toString,I=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,q=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/,U=/^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/;r(t);var H,$={appendChild:function(e){H===n&&(H=j.createElement("html")),j.documentElement&&j.documentElement!==e?j.replaceChild(e,j.documentElement):j.appendChild(e),this.childNodes=j.childNodes},insertBefore:function(e){this.appendChild(e)},childNodes:[]},z=[],J={};o.render=function(e,t,r){var o=[];if(!e)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var i=f(e),l=e===j,s=l||e===j.documentElement?$:e;l&&"html"!=t.tag&&(t={tag:"html",attrs:{},children:t}),J[i]===n&&u(s.childNodes),r===!0&&b(e),J[i]=a(s,null,n,n,t,J[i],!1,0,null,n,o);for(var c=0,d=o.length;d>c;c++)o[c]()},o.trust=function(e){return e=new String(e),e.$trusted=!0,e},o.prop=function(e){return(null!=e&&B.call(e)===_||typeof e===D)&&typeof e.then===D?C(e):h(e)};var K,F=[],P=[],G=[],V=null,W=0,Q=null,Y=16;o.module=function(e,t){if(!e)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var n=F.indexOf(e);0>n&&(n=F.length);var r=!1;if(G[n]&&typeof G[n].onunload===D){var a={preventDefault:function(){r=!0}};G[n].onunload(a)}if(!r){o.redraw.strategy("all"),o.startComputation(),F[n]=e;var i=K=t=t||{},l=new(t.controller||function(){});return i===K&&(G[n]=l,P[n]=t),et(),G[n]}},o.redraw=function(e){V&&e!==!0?(new Date-W>Y||S===t.requestAnimationFrame)&&(V>0&&R(V),V=S(p,Y)):(p(),V=S(function(){V=null},Y))},o.redraw.strategy=o.prop();var X=function(){return""},Z=0;o.startComputation=function(){Z++},o.endComputation=function(){Z=Math.max(Z-1,0),0===Z&&o.redraw()};var et=function(){"none"==o.redraw.strategy()?(Z--,o.redraw.strategy("diff")):o.endComputation()};o.withAttr=function(e,t){return function(n){n=n||event;var r=n.currentTarget||this;t(e in r?r[e]:r.getAttribute(e))}};var tt,nt,rt={pathname:"",hash:"#",search:"?"},ot=function(){};return o.route=function(){if(0===arguments.length)return nt;if(3===arguments.length&&B.call(arguments[1])===L){var e=arguments[0],n=arguments[1],r=arguments[2];ot=function(t){var a=nt=m(t);g(e,r,a)||o.route(n,!0)};var a="hash"===o.route.mode?"onhashchange":"onpopstate";t[a]=function(){var e=A[o.route.mode];"pathname"===o.route.mode&&(e+=A.search),nt!=m(e)&&ot(e)},Q=y,t[a]()}else if(arguments[0].addEventListener||arguments[0].attachEvent){{var i=arguments[0];arguments[1],arguments[2]}i.href=("pathname"!==o.route.mode?A.pathname:"")+rt[o.route.mode]+this.attrs.href,i.addEventListener?(i.removeEventListener("click",v),i.addEventListener("click",v)):(i.detachEvent("onclick",v),i.attachEvent("onclick",v))}else if(B.call(arguments[0])===L){var l=nt;nt=arguments[0];var u=arguments[1]||{},s=nt.indexOf("?"),c=s>-1?x(nt.slice(s+1)):{};for(var d in u)c[d]=u[d];var f=w(c),h=s>-1?nt.slice(0,s):nt;f&&(nt=h+(-1===h.indexOf("?")?"?":"&")+f);var p=(3===arguments.length?arguments[2]:arguments[1])===!0||l===arguments[0];t.history.pushState?(Q=function(){t.history[p?"replaceState":"pushState"](null,j.title,rt[o.route.mode]+nt),y()},ot(rt[o.route.mode]+nt)):(A[o.route.mode]=nt,ot(rt[o.route.mode]+nt))}},o.route.param=function(e){if(!tt)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return tt[e]},o.route.mode="search",o.route.buildQueryString=w,o.route.parseQueryString=x,o.deferred=function(){var e=new E;return e.promise=C(e.promise),e},o.deferred.onerror=function(e){if("[object Error]"===B.call(e)&&!e.constructor.toString().match(/ Error/))throw e},o.sync=function(e){function t(e,t){return function(o){return i[e]=o,t||(n="reject"),0===--a&&(r.promise(i),r[n](i)),o}}var n="resolve",r=o.deferred(),a=e.length,i=new Array(a);if(e.length>0)for(var l=0;l<e.length;l++)e[l].then(t(l,!0),t(l,!1));else r.resolve([]);return r.promise},o.request=function(e){e.background!==!0&&o.startComputation();var t=new E,n=e.dataType&&"jsonp"===e.dataType.toLowerCase(),r=e.serialize=n?N:e.serialize||JSON.stringify,a=e.deserialize=n?N:e.deserialize||JSON.parse,i=e.extract||function(e){return 0===e.responseText.length&&a===JSON.parse?null:e.responseText};return e.url=T(e.url,e.data),e=O(e,e.data,r),e.onload=e.onerror=function(n){try{n=n||event;var r=("load"===n.type?e.unwrapSuccess:e.unwrapError)||N,l=r(a(i(n.target,e)),n.target);if("load"===n.type)if(B.call(l)===M&&e.type)for(var u=0;u<l.length;u++)l[u]=new e.type(l[u]);else e.type&&(l=new e.type(l));t["load"===n.type?"resolve":"reject"](l)}catch(n){o.deferred.onerror(n),t.reject(n)}e.background!==!0&&o.endComputation()},k(e),t.promise=C(t.promise,e.initialValue),t.promise},o.deps=function(e){return r(t=e||t),t},o.deps.factory=e,o}("undefined"!=typeof window?window:{});"undefined"!=typeof module&&null!==module&&module.exports?module.exports=m:"function"==typeof define&&define.amd&&define(function(){return m}),function(e){function t(){a={},i={},l=[]}function n(e,t){if("string"!=typeof e||""===e)throw Error("invalid module id "+e);if(i[e])throw Error("dupicated module id "+e);if("function"!=typeof t)throw Error("invalid module function");i[e]=t}function r(e){return function(t){if(e.hasOwnProperty(t))return e[t];throw new Error("Stub "+t+" not found!")}}function o(e,t){var n;if(!i[e])throw Error("module "+e+" is not defined");if(l.indexOf(e)>=0)throw Error("circular: "+l.join(", "));return t?(n={id:e,exports:{}},i[e](r(t),n,n.exports),n.exports):a[e]?a[e].exports:(n=a[e]={id:e,exports:{}},l.push(e),i[e](o,n,n.exports),l.pop(),n.exports)}var a,i,l;t(),e.define=n,e.require=o,e.reset=t}("undefined"!=typeof window?window:global),define("app",function(e){var t=e("about/about"),n=e("layout/layout");m.route.mode="hash",m.route(document.body,"/",{"/":n(t)})}),define("main",function(e){e("app")}),define("about/about",function(e,t,n){function r(){this.filterText=m.prop(""),modal=function(e,t){return[m(".col-md-3",[m("h4",e),m("p",m("span",t))])]},check_phonetic=function(e){ma=e.toLocaleLowerCase(),temp_string="";for(var t=e.length-1;t>=0;t--)temp_string+=e.toLocaleLowerCase().substr(t,1);return temp_string===ma?"is a phonetic":"is not a phonetic"},this.phonetic=function(){word_to_check=text_tempo.value,this.valores=[],this.valores.push(modal(check_phonetic(word_to_check),word_to_check))}.bind(this)}function o(e){return m(".about content-center",[m("h1","Phpnetic"),m("hr"),m('form.btn-group[role="group"][onsubmit={u.silence()}]',[m(".phonetic",[m("label.content-center","Word to be Checked"),m(".input-group",[m("input#text_tempo.form-control",{placeholder:"Write...",onkeyup:e.phonetic})])])]),m("hr"),e.valores])}e("com/u");n.label="cidades",n.controller=r,n.view=o}),define("com/u",function(e,t,n){var r=(Array.prototype.shift,Array.prototype.unshift,Array.prototype.slice);n.eachFunc=function(){var e=arguments;return function(){for(var t=0;t<e.length;t++)e[t].apply(this,arguments)}},n.init=function(e){var t={},n=Object.create(t);return e.controller.apply(t,r.call(arguments,1)),n.$module=e,n.$view=e.view.bind({},t),n},n.silence=function(e){return function(t){return t.preventDefault(),e?e():void 0}}}),define("layout/layout",function(e,t){function n(e){function t(){this.com=r.init(e),this.tabs=[{href:"/",label:"Home"}]}function n(e){function t(e){return m.route()===e?"active":""}for(var n=[],r=0;r<e.tabs.length;r++){var o=e.tabs[r];n.push(m("li",{"class":t(o.href)},[m("a",{href:o.href,config:m.route},[o.label])]))}return m("div",{"class":"page"},[m("header"),m("div",{"class":"container main-page"},[e.com.$view()])])}return{controller:t,view:n}}var r=e("com/u");t.exports=n}),require("main");