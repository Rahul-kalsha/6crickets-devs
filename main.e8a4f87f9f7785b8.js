var __webpack_modules__={1695:(i,d,l)=>{l.e(636).then(l.bind(l,2636)).catch(s=>console.error(s))}},__webpack_module_cache__={};function __webpack_require__(i){var d=__webpack_module_cache__[i];if(void 0!==d)return d.exports;var l=__webpack_module_cache__[i]={exports:{}};return __webpack_modules__[i](l,l.exports,__webpack_require__),l.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(i,d)=>{for(var l in d)__webpack_require__.o(d,l)&&!__webpack_require__.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:d[l]})},__webpack_require__.f={},__webpack_require__.e=i=>Promise.all(Object.keys(__webpack_require__.f).reduce((d,l)=>(__webpack_require__.f[l](i,d),d),[])),__webpack_require__.u=i=>i+"."+{177:"70b1dea59d786f82",245:"bc0a199b5ccb3eef",397:"3003299af4473cfa",488:"053d6296ecd78597",546:"97157c306aab81fe",558:"c0977e2ac9182a78",614:"b1f7f731e144425e",626:"a90309991fefcc89",636:"2b6a82be45cc7f4b",705:"34a748b582e6d395",778:"a36a256cdf177f02"}[i]+".js",__webpack_require__.miniCssF=i=>{},__webpack_require__.o=(i,d)=>Object.prototype.hasOwnProperty.call(i,d),(()=>{var i={},d="codingChallenge:";__webpack_require__.l=(l,s,p,v)=>{if(i[l])i[l].push(s);else{var f,y;if(void 0!==p)for(var c=document.getElementsByTagName("script"),_=0;_<c.length;_++){var h=c[_];if(h.getAttribute("src")==l||h.getAttribute("data-webpack")==d+p){f=h;break}}f||(y=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,__webpack_require__.nc&&f.setAttribute("nonce",__webpack_require__.nc),f.setAttribute("data-webpack",d+p),f.src=__webpack_require__.tu(l)),i[l]=[s];var m=(x,j)=>{f.onerror=f.onload=null,clearTimeout(b);var S=i[l];if(delete i[l],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(g=>g(j)),x)return x(j)},b=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),y&&document.head.appendChild(f)}}})(),__webpack_require__.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var i={},d={};__webpack_require__.I=(l,s)=>{s||(s=[]);var p=d[l];if(p||(p=d[l]={}),!(s.indexOf(p)>=0)){if(s.push(p),i[l])return i[l];__webpack_require__.o(__webpack_require__.S,l)||(__webpack_require__.S[l]={});var v=__webpack_require__.S[l],y="codingChallenge",c=(m,b,x,j)=>{var S=v[m]=v[m]||{},g=S[b];(!g||!g.loaded&&(!j!=!g.eager?j:y>g.from))&&(S[b]={get:x,from:y,eager:!!j})},h=[];return"default"===l&&(c("@angular/common/http","18.2.0",()=>__webpack_require__.e(626).then(()=>()=>__webpack_require__(1626))),c("@angular/common","18.2.0",()=>__webpack_require__.e(558).then(()=>()=>__webpack_require__(177))),c("@angular/core/primitives/event-dispatch","18.2.0",()=>__webpack_require__.e(546).then(()=>()=>__webpack_require__(7546))),c("@angular/core/primitives/signals","18.2.0",()=>__webpack_require__.e(488).then(()=>()=>__webpack_require__(3488))),c("@angular/core","18.2.0",()=>__webpack_require__.e(705).then(()=>()=>__webpack_require__(7705))),c("@angular/router","18.2.0",()=>__webpack_require__.e(778).then(()=>()=>__webpack_require__(3778)))),i[l]=h.length?Promise.all(h).then(()=>i[l]=1):1}}})(),(()=>{var i;__webpack_require__.tt=()=>(void 0===i&&(i={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),__webpack_require__.tu=i=>__webpack_require__.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=i})(),(()=>{var i=e=>{var t=n=>n.split(".").map(a=>+a==a?+a:a),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),u=r[1]?t(r[1]):[];return r[2]&&(u.length++,u.push.apply(u,t(r[2]))),r[3]&&(u.push([]),u.push.apply(u,t(r[3]))),u},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var u=1,n=1;n<e.length;n++)u--,r+="u"==(typeof(o=e[n]))[0]?"-":(u>0?".":"")+(u=2,o);return r}var a=[];for(n=1;n<e.length;n++){var o=e[n];a.push(0===o?"not("+w()+")":1===o?"("+w()+" || "+w()+")":2===o?a.pop()+" "+a.pop():l(o))}return w();function w(){return a.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=i(t);var r=e[0],u=r<0;u&&(r=-r-1);for(var n=0,a=1,o=!0;;a++,n++){var w,T,C=a<e.length?(typeof e[a])[0]:"";if(n>=t.length||"o"==(T=(typeof(w=t[n]))[0]))return!o||("u"==C?a>r&&!u:""==C!=u);if("u"==T){if(!o||"u"!=C)return!1}else if(o)if(C==T)if(a<=r){if(w!=e[a])return!1}else{if(u?w>e[a]:w<e[a])return!1;w!=e[a]&&(o=!1)}else if("s"!=C&&"n"!=C){if(u||a<=r)return!1;o=!1,a--}else{if(a<=r||T<C!=u)return!1;o=!1}else"s"!=C&&"n"!=C&&(o=!1,a--)}}var V=[],P=V.pop.bind(V);for(n=1;n<e.length;n++){var M=e[n];V.push(1==M?P()|P():2==M?P()&P():M?s(M,t):!P())}return!!P()},_=(e,t,r)=>{var u=r?(e=>Object.keys(e).reduce((t,r)=>(e[r].eager&&(t[r]=e[r]),t),{}))(e[t]):e[t];return Object.keys(u).reduce((n,a)=>!n||!u[n].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var u=e[r],n=(typeof u)[0];if(r>=t.length)return"u"==n;var a=t[r],o=(typeof a)[0];if(n!=o)return"o"==n&&"n"==o||"s"==o||"u"==n;if("o"!=n&&"u"!=n&&u!=a)return u<a;r++}})(n,a)?a:n,0)},b=e=>{throw new Error(e)},O=(e=>function(t,r,u,n,a){var o=__webpack_require__.I(t);return o&&o.then&&!u?o.then(e.bind(e,t,__webpack_require__.S[t],r,!1,n,a)):e(t,__webpack_require__.S[t],r,u,n,a)})((e,t,r,u,n,a)=>{if(!((e,t)=>e&&__webpack_require__.o(e,t))(t,r))return((e,t,r)=>r?r():((e,t)=>b("Shared module "+t+" doesn't exist in shared scope "+e))(e,t))(e,r,a);var o=_(t,r,u);return s(n,o)||b(((e,t,r,u)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+l(u)+")")(t,r,o,n)),(e=>(e.loaded=1,e.get()))(t[r][o])}),E={},$={2323:()=>O("default","@angular/common",!1,[1,18,2,0],()=>__webpack_require__.e(177).then(()=>()=>__webpack_require__(177))),7653:()=>O("default","@angular/core",!1,[1,18,2,0],()=>__webpack_require__.e(705).then(()=>()=>__webpack_require__(7705))),8309:()=>O("default","@angular/core/primitives/event-dispatch",!1,[1,18,2,0],()=>__webpack_require__.e(546).then(()=>()=>__webpack_require__(7546))),9993:()=>O("default","@angular/core/primitives/signals",!1,[1,18,2,0],()=>__webpack_require__.e(488).then(()=>()=>__webpack_require__(3488))),7745:()=>O("default","@angular/common/http",!1,[1,18,2,0],()=>__webpack_require__.e(245).then(()=>()=>__webpack_require__(1626))),7031:()=>O("default","@angular/router",!1,[1,18,2,0],()=>__webpack_require__.e(397).then(()=>()=>__webpack_require__(3778)))},A={558:[7653],626:[2323,7653],636:[2323,7031,7653,7745],705:[8309,9993],778:[2323,7653,7745]},L={};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(A,e)&&A[e].forEach(r=>{if(__webpack_require__.o(E,r))return t.push(E[r]);if(!L[r]){var u=o=>{E[r]=0,__webpack_require__.m[r]=w=>{delete __webpack_require__.c[r],w.exports=o()}};L[r]=!0;var n=o=>{delete E[r],__webpack_require__.m[r]=w=>{throw delete __webpack_require__.c[r],o}};try{var a=$[r]();a.then?t.push(E[r]=a.then(u).catch(n)):u(a)}catch(o){n(o)}}})}})(),(()=>{__webpack_require__.b=document.baseURI||self.location.href;var i={792:0};__webpack_require__.f.j=(s,p)=>{var v=__webpack_require__.o(i,s)?i[s]:void 0;if(0!==v)if(v)p.push(v[2]);else{var f=new Promise((h,m)=>v=i[s]=[h,m]);p.push(v[2]=f);var y=__webpack_require__.p+__webpack_require__.u(s),c=new Error;__webpack_require__.l(y,h=>{if(__webpack_require__.o(i,s)&&(0!==(v=i[s])&&(i[s]=void 0),v)){var m=h&&("load"===h.type?"missing":h.type),b=h&&h.target&&h.target.src;c.message="Loading chunk "+s+" failed.\n("+m+": "+b+")",c.name="ChunkLoadError",c.type=m,c.request=b,v[1](c)}},"chunk-"+s,s)}};var d=(s,p)=>{var c,_,[v,f,y]=p,h=0;if(v.some(b=>0!==i[b])){for(c in f)__webpack_require__.o(f,c)&&(__webpack_require__.m[c]=f[c]);y&&y(__webpack_require__)}for(s&&s(p);h<v.length;h++)__webpack_require__.o(i,_=v[h])&&i[_]&&i[_][0](),i[_]=0},l=self.webpackChunkcodingChallenge=self.webpackChunkcodingChallenge||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})();var __webpack_exports__=__webpack_require__(1695);