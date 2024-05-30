"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{5151:(M,_,r)=>{r.d(_,{c:()=>i});var c=r(771),l=r(9951),d=r(6535);const i=(n,o)=>{let t,e;const f=(a,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,p);E&&o(E)?E!==t&&(s(),u(E,w)):s()},u=(a,p)=>{t=a,e||(e=t);const w=t;(0,c.w)(()=>w.classList.add("ion-activated")),p()},s=(a=!1)=>{if(!t)return;const p=t;(0,c.w)(()=>p.classList.remove("ion-activated")),a&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>f(a.currentX,a.currentY,l.a),onMove:a=>f(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),e=void 0}})}},1836:(M,_,r)=>{r.d(_,{g:()=>l});var c=r(1848);const l=()=>{if(void 0!==c.w)return c.w.Capacitor}},983:(M,_,r)=>{r.d(_,{c:()=>c,i:()=>l});const c=(d,i,n)=>"function"==typeof n?n(d,i):"string"==typeof n?d[n]===i[n]:Array.isArray(i)?i.includes(d):d===i,l=(d,i,n)=>void 0!==d&&(Array.isArray(d)?d.some(o=>c(o,i,n)):c(d,i,n))},4510:(M,_,r)=>{r.d(_,{g:()=>c});const c=(o,t,e,f,u)=>d(o[1],t[1],e[1],f[1],u).map(s=>l(o[0],t[0],e[0],f[0],s)),l=(o,t,e,f,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*e*u+3*e+f*u))-o*Math.pow(u-1,3),d=(o,t,e,f,u)=>n((f-=u)-3*(e-=u)+3*(t-=u)-(o-=u),3*e-6*t+3*o,3*t-3*o,o).filter(a=>a>=0&&a<=1),n=(o,t,e,f)=>{if(0===o)return((o,t,e)=>{const f=t*t-4*o*e;return f<0?[]:[(-t+Math.sqrt(f))/(2*o),(-t-Math.sqrt(f))/(2*o)]})(t,e,f);const u=(3*(e/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*e+27*(f/=o))/27;if(0===u)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-u),-Math.sqrt(-u)];const a=Math.pow(s/2,2)+Math.pow(u/3,3);if(0===a)return[Math.pow(s/2,.5)-t/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-t/3];const p=Math.sqrt(Math.pow(-u/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-u/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},4162:(M,_,r)=>{r.d(_,{i:()=>c});const c=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8434:(M,_,r)=>{r.r(_),r.d(_,{startFocusVisible:()=>i});const c="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let o=[],t=!0;const e=n?n.shadowRoot:document,f=n||document.body,u=y=>{o.forEach(h=>h.classList.remove(c)),y.forEach(h=>h.classList.add(c)),o=y},s=()=>{t=!1,u([])},a=y=>{t=d.includes(y.key),t||u([])},p=y=>{if(t&&void 0!==y.composedPath){const h=y.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));u(h)}},w=()=>{e.activeElement===f&&u([])};return e.addEventListener("keydown",a),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",s,{passive:!0}),e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("keydown",a),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",s),e.removeEventListener("mousedown",s)},setFocus:u}}},9749:(M,_,r)=>{r.d(_,{c:()=>l});var c=r(512);const l=o=>{const t=o;let e;return{hasLegacyControl:()=>{if(void 0===e){const u=void 0!==t.label||d(t),s=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,a=(0,c.h)(t);e=!0===t.legacy||!u&&!s&&null!==a}return e}}},d=o=>!!(i.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||n.includes(o.tagName)&&""!==o.textContent),i=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(M,_,r)=>{r.d(_,{I:()=>l,a:()=>t,b:()=>e,c:()=>o,d:()=>u,h:()=>f});var c=r(1836),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const i={getEngine(){const s=window.TapticEngine;if(s)return s;const a=(0,c.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,c.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,c.g)(),impact(s){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?s.style:s.style.toLowerCase();a.impact({style:p})},notification(s){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?s.type:s.type.toLowerCase();a.notification({type:p})},selection(){const s=this.isCapacitor()?l.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},n=()=>i.available(),o=()=>{n()&&i.selection()},t=()=>{n()&&i.selectionStart()},e=()=>{n()&&i.selectionChanged()},f=()=>{n()&&i.selectionEnd()},u=s=>{n()&&i.impact(s)}},7946:(M,_,r)=>{r.d(_,{I:()=>o,a:()=>u,b:()=>n,c:()=>p,d:()=>E,f:()=>s,g:()=>f,i:()=>e,p:()=>w,r:()=>y,s:()=>a});var c=r(5861),l=r(512),d=r(2400);const n="ion-content",o=".ion-content-scroll-host",t=`${n}, ${o}`,e=h=>"ION-CONTENT"===h.tagName,f=function(){var h=(0,c.Z)(function*(v){return e(v)?(yield new Promise(m=>(0,l.c)(v,m)),v.getScrollElement()):v});return function(m){return h.apply(this,arguments)}}(),u=h=>h.querySelector(o)||h.querySelector(t),s=h=>h.closest(t),a=(h,v)=>e(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(h,v,m,O)=>e(h)?h.scrollByPoint(v,m,O):Promise.resolve(h.scrollBy({top:m,left:v,behavior:O>0?"smooth":"auto"})),w=h=>(0,d.b)(h,n),E=h=>{if(e(h)){const m=h.scrollY;return h.scrollY=!1,m}return h.style.setProperty("overflow","hidden"),!0},y=(h,v)=>{e(h)?h.scrollY=v:h.style.removeProperty("overflow")}},5307:(M,_,r)=>{r.d(_,{a:()=>c,b:()=>p,c:()=>t,d:()=>w,e:()=>D,f:()=>o,g:()=>E,h:()=>d,i:()=>l,j:()=>O,k:()=>C,l:()=>e,m:()=>s,n:()=>y,o:()=>u,p:()=>n,q:()=>i,r:()=>m,s:()=>g,t:()=>a,u:()=>h,v:()=>v,w:()=>f});const c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5917:(M,_,r)=>{r.d(_,{c:()=>i,g:()=>n});var c=r(1848),l=r(512),d=r(2400);const i=(t,e,f)=>{let u,s;if(void 0!==c.w&&"MutationObserver"in c.w){const E=Array.isArray(e)?e:[e];u=new MutationObserver(y=>{for(const h of y)for(const v of h.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&E.includes(v.slot))return f(),void(0,l.r)(()=>a(v))}),u.observe(t,{childList:!0})}const a=E=>{var y;s&&(s.disconnect(),s=void 0),s=new MutationObserver(h=>{f();for(const v of h)for(const m of v.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&w()}),s.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),w()}}},n=(t,e,f)=>{const u=null==t?0:t.toString().length,s=o(u,e);if(void 0===f)return s;try{return f(u,e)}catch(a){return(0,d.a)("Exception in provided `counterFormatter`.",a),s}},o=(t,e)=>`${t} / ${e}`},6591:(M,_,r)=>{r.r(_),r.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>u,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var c=r(3920);r(1836),r(1848);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},e={},f=!1;const u=()=>{t={},e={},f=!1},s=g=>{if(c.K.getEngine())a(g);else{if(!g.visualViewport)return;e=C(g.visualViewport),g.visualViewport.onresize=()=>{O(g),E()||y(g)?p(g):h(g)&&w(g)}}},a=g=>{g.addEventListener("keyboardDidShow",D=>p(g,D)),g.addEventListener("keyboardDidHide",()=>w(g))},p=(g,D)=>{v(g,D),f=!0},w=g=>{m(g),f=!1},E=()=>!f&&t.width===e.width&&(t.height-e.height)*e.scale>150,y=g=>f&&!h(g),h=g=>f&&e.height===g.innerHeight,v=(g,D)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-e.height}});g.dispatchEvent(L)},m=g=>{const D=new CustomEvent(n);g.dispatchEvent(D)},O=g=>{t=Object.assign({},e),e=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},3920:(M,_,r)=>{r.d(_,{K:()=>i,a:()=>d});var c=r(1836),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),d=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(d||{});const i={getEngine(){const n=(0,c.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},9252:(M,_,r)=>{r.d(_,{c:()=>o});var c=r(5861),l=r(1848),d=r(3920);const i=t=>{if(void 0===l.d||t===d.a.None||void 0===t)return null;const e=l.d.querySelector("ion-app");return null!=e?e:l.d.body},n=t=>{const e=i(t);return null===e?0:e.clientHeight},o=function(){var t=(0,c.Z)(function*(e){let f,u,s,a;const p=function(){var v=(0,c.Z)(function*(){const m=yield d.K.getResizeMode(),O=void 0===m?void 0:m.mode;f=()=>{void 0===a&&(a=n(O)),s=!0,w(s,O)},u=()=>{s=!1,w(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",f),null==l.w||l.w.addEventListener("keyboardWillHide",u)});return function(){return v.apply(this,arguments)}}(),w=(v,m)=>{e&&e(v,E(m))},E=v=>{if(0===a||a===n(v))return;const m=i(v);return null!==m?new Promise(O=>{const g=new ResizeObserver(()=>{m.clientHeight===a&&(g.disconnect(),O())});g.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",f),null==l.w||l.w.removeEventListener("keyboardWillHide",u),f=u=void 0},isKeyboardVisible:()=>s}});return function(f){return t.apply(this,arguments)}}()},9229:(M,_,r)=>{r.d(_,{c:()=>l});var c=r(5861);const l=()=>{let d;return{lock:function(){var n=(0,c.Z)(function*(){const o=d;let t;return d=new Promise(e=>t=e),void 0!==o&&(yield o),t});return function(){return n.apply(this,arguments)}}()}}},4793:(M,_,r)=>{r.d(_,{c:()=>d});var c=r(1848),l=r(512);const d=(i,n,o)=>{let t;const e=()=>!(void 0===n()||void 0!==i.label||null===o()),u=()=>{const a=n();if(void 0===a)return;if(!e())return void a.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==c.w&&"IntersectionObserver"in c.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(u(),w.disconnect(),t=void 0)},{threshold:.01,root:i});w.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,l.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},2217:(M,_,r)=>{r.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(d,i,n)=>{const o=d*i/n-d+"ms",t=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(d,i,n)=>{const o=i/n,t=d*o-d+"ms",e=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})}}},3049:(M,_,r)=>{r.r(_),r.d(_,{createSwipeBackGesture:()=>n});var c=r(512),l=r(4162),d=r(6535);r(2019);const n=(o,t,e,f,u)=>{const s=o.ownerDocument.defaultView;let a=(0,l.i)(o);const w=m=>a?-m.deltaX:m.deltaX;return(0,d.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(o),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&t()),onStart:e,onMove:m=>{const C=w(m)/s.innerWidth;f(C)},onEnd:m=>{const O=w(m),C=s.innerWidth,g=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),P=(L?1-g:g)*C;let A=0;if(P>5){const T=P/Math.abs(D);A=Math.min(T,540)}u(L,g<=0?.01:(0,c.l)(0,g,.9999),A)}})}},6806:(M,_,r)=>{r.d(_,{w:()=>c});const c=(i,n,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{o(l(e,n))});return t.observe(i,{childList:!0,subtree:!0}),t},l=(i,n)=>{let o;return i.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)o=d(t.addedNodes[e],n)||o}),o},d=(i,n)=>{if(1!==i.nodeType)return;const o=i;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(e=>e.value===o.value)}},5344:(M,_,r)=>{r.d(_,{U:()=>d});var c=r(9212),l=r(1929);let d=(()=>{var i;class n{constructor(t){this.modalController=t}closeModal(){this.modalController.dismiss()}}return(i=n).\u0275fac=function(t){return new(t||i)(c.Y36(l.IN))},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-faq-modal"]],inputs:{faq:"faq"},decls:12,vars:2,consts:[["slot","end"],[3,"click"],[1,"container"],[1,"image-container"],["src","./assets/Shrug-bro.svg","alt",""],[2,"font-weight","bold","margin-bottom","2px"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-toolbar")(1,"ion-buttons",0)(2,"ion-button",1),c.NdJ("click",function(){return e.closeModal()}),c._uU(3,"Close"),c.qZA()()(),c.TgZ(4,"ion-content")(5,"div",2)(6,"div",3),c._UZ(7,"img",4),c.qZA()(),c.TgZ(8,"p",5),c._uU(9),c.qZA(),c.TgZ(10,"p"),c._uU(11),c.qZA()()),2&t&&(c.xp6(9),c.Oqu(null==e.faq?null:e.faq.question),c.xp6(2),c.hij(" ",null==e.faq?null:e.faq.answer,""))},dependencies:[l.YG,l.Sm,l.W2,l.sr],styles:[".container[_ngcontent-%COMP%]{margin:20px;display:flex;justify-content:center;align-items:center;height:300px}.image-container[_ngcontent-%COMP%]{width:200px;height:200px}p[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}"]}),n})()}}]);