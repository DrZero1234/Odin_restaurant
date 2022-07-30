(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),c=t(667),d=t.n(c),s=new URL(t(955),t.b),l=new URL(t(102),t.b),p=new URL(t(88),t.b),m=new URL(t(895),t.b),u=i()(o()),h=d()(s),f=d()(l),g=d()(p),x=d()(m);u.push([e.id,'@font-face {\n    font-family: "MrDafoe";\n    src: url('+h+') format("woff"),\n         url('+f+') format("woff2");\n    font-weight: 700;\n\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: Arial, Helvetica, sans-serif;\n    background-image: url('+g+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-size: 22px;\n    color: #FFF;\n}\n\n.navbar,\nfooter {\n    color: white;\n    text-align: center;\n}\n\n.navbar {\n    background-image: url("+x+');\n    background-size: cover;\n    padding: 20px;\n    \n}\n\n.navbar > ul {\n    display: flex;\n    list-style-type: none;\n    gap: 100px;\n    margin-right: 100px;\n    justify-content: flex-end;\n}\n\n.navbar li {\n    border-radius: 10px;\n    font-size: 36px;\n    font-weight: bold;\n}\n\na {\n    text-decoration: none;\n    color: white\n}\n\n/* MAIN STYLES */\n\n\n.main {\n    height: 100vh;\n    display: flex;\n    flex: 1;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: white;\n}\n\n#main-title {\n    font-family: "MrDafoe";\n    font-size: 96px;\n}\n\n/* MENU STYLES */\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    margin: 0px 30px;\n    background-color: #6B7280;\n    opacity: .8;\n    margin: 75px 26px;\n    padding: 12px;\n}\n\n\n\n.appetizers,\n.main-dishes {\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));\n    grid-auto-rows: auto;\n    gap: 25px;\n    word-wrap: break-word;\n    align-items: stretch;\n}\n\n#main-dishes-title,\n#appetizers-title {\n    margin-bottom: 50px;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border-radius: 6px;\n    padding: 8px 20px;\n    gap: 10px;\n    line-height: 1.3rem;\n}\n\n.price {\n    display: flex;\n    align-self: flex-end;\n    font-size: 32px;\n    font-weight: bolder;\n}\n\n.contact-wrapper {\n    display: flex;\n    outline: 2px solid green;\n    gap: 100px;\n    line-height: 2.1rem;\n    justify-content: center;\n    row-gap: 60px;\n}\n\n.contact-details {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n}\n\n.contact-image {\n    display: flex;\n    align-items: center;\n}\n\n\nfooter {\n    background-color: black;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    padding: 20px;\n}\n\n#location-img {\n    min-height: 200px;\n    min-width: 200px;\n    max-height: 400px;\n    max-width: 400px;\n}\n\nimg {\n    min-height: 100px;\n    min-width: 100px;\n    max-height: 300px;\n    max-width: 300px;\n}\n\nli {\n    cursor: pointer;\n}',""]);const v=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var d=a(e,o),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},304:(e,n,t)=>{t.d(n,{N:()=>o,W:()=>r});const a=document.getElementById("content"),o=()=>{const e=document.createElement("div");e.className="navbar";const n=document.createElement("ul"),t=document.createElement("li");t.textContent="Home";const o=document.createElement("li");o.textContent="Menu";const r=document.createElement("li");r.textContent="Contact",n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n),a.appendChild(e)},r=()=>{console.log("Foooter");const e=document.createElement("footer");e.textContent="@The Odin Project",a.append(e)}},88:(e,n,t)=>{e.exports=t.p+"af58e84396046724cd21.jpg"},955:(e,n,t)=>{e.exports=t.p+"b39e4c214bfe2ed7f50d.woff"},102:(e,n,t)=>{e.exports=t.p+"e07d93b36c5ee1d5b359.woff2"},895:(e,n,t)=>{e.exports=t.p+"276f6f1d4d0f112323c9.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),m=t.n(p),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f=t(304);const g=t.p+"45b36fcd0e72a28442de.png",x=document.getElementById("content"),v=()=>{console.log(g);const e=document.createElement("div");e.className="main";const n=document.createElement("img");n.setAttribute("alt","restaurant icon"),n.setAttribute("src",g);const t=document.createElement("h1");t.id="main-title",t.textContent="The United Stakes";const a=document.createElement("h2");a.textContent="We not only meat expectations we exceed them",e.appendChild(n),e.appendChild(t),e.appendChild(a),x.appendChild(e)},C=[{name:"STARTER SALAD - CAESAR",description:"Romaine lettuce, smoked bacon, croutons, Grana Padano cheese, signature Caesar dressing.",price:"9 $"},{name:"CRISPY SHRIMP",description:"Hand-battered in Cajun spices, enhanced with General Tao sauce, served on Asian slaw",price:"18 $"},{name:"CHEDDAR DIP",description:"Warm blend of cheeses, diced tomatoes enhanced with Smoke Show® hot sauce, served with warm tortilla chips.",price:"14 $"},{name:"CAULIFLOWER WINGS",description:"Crispy cauliflower bites topped with General Tao sauce and sesame seeds",price:"12 $"}],b=[{name:"CLUB SANDWICH",description:"Flame-grilled chicken breast, smoked bacon, Monterey Jack, lettuce, tomato & mayonnaise",price:"19 $"},{name:"BIG DEVIL BURGER",description:"Premium beef, onion rings, tomatoes, Swiss cheese, smoked bacon with sweet & spicy BBQ sauce",price:"20 $"},{name:"CHICKEN TENDERS PLATTER",description:"Five hand-battered chicken tenders, served with BBQ & Dijonnaise sauces or French fries",price:"21 $"},{name:"BBQ PORK BACK RIBS",description:"Our signature fall-off-the-bone pork back ribs, slow-cooked at low heat for 8 hours until they’re mouthwateringly tender and basted with our made-in-house classic Bâton Rouge BBQ sauce.",price:"28 $"},{name:"RIBS & JUMBO BLACK TIGER SHRIMP",description:"A full rack of ribs served alongside a Black Tiger shrimp skewer, smothered in BBQ sauce",price:"45 $"},{name:"FILET MIGNON",description:"THE FINEST CUTS. Our Reserve Steaks are certified Canada AAA, hand-selected for superior quality and marbling, aged to tender perfection then seasoned with our own spice blend and served alongside our signature peppercorn sauce.",price:"44 $"},{name:"NEW YORK STRIPLOIN",description:"The result is a richness of flavour distinct to Bâton Rouge. Dishes are served with seasonal vegetables and one choice among the following: French fries, garlic mashed potatoes, fully loaded baked potato, sweet potato fries, coleslaw, wild rice pilaf or side salad",price:"41 $"}],E=document.getElementById("content"),w=e=>{let n,t=[];return"appetizer"===e?n=C:"main"===e&&(n=b),n.forEach((e=>{let n=document.createElement("div");n.className="menu-item";let a=document.createElement("h3");a.textContent=e.name;let o=document.createElement("p");o.textContent=e.description;let r=document.createElement("p");r.className="price",r.textContent=e.price,n.appendChild(a),n.appendChild(o),n.appendChild(r),t.push(n)})),t},y=t.p+"a7e8027bc08d4305fafe.jpg",S=document.getElementById("content");document.addEventListener("DOMContentLoaded",(()=>{let e=document.getElementById("content");document.querySelectorAll("li").forEach((n=>{switch(n.textContent){case"Home":n.addEventListener("click",(()=>{const n=document.querySelector(".menu")||document.querySelector(".main")||document.querySelector(".contact-wrapper");n.innerHTML="",n&&e.removeChild(n),v()}));break;case"Menu":n.addEventListener("click",(()=>{const n=document.querySelector(".menu")||document.querySelector(".main")||document.querySelector(".contact-wrapper");n.innerHTML="",n&&e.removeChild(n),(()=>{const e=document.createElement("div");e.className="menu";const n=document.createElement("div");n.className="appetizers-wrapper";const t=document.createElement("div");t.id="appetizers-title";const a=document.createElement("h2");a.textContent="Appetizers",t.appendChild(a);const o=document.createElement("div");o.className="appetizers",w("appetizer").forEach((e=>{o.appendChild(e)})),n.appendChild(a),n.appendChild(o);const r=document.createElement("div");r.className="main-dish-wrapper";const i=document.createElement("div");i.id="main-dish-title";const c=document.createElement("h2");c.textContent="Main dishes",i.appendChild(c);const d=document.createElement("div");d.className="main-dishes",w("main").forEach((e=>{d.appendChild(e)})),r.appendChild(c),r.appendChild(d),e.appendChild(n),e.appendChild(r),E.appendChild(e)})()}));break;case"Contact":n.addEventListener("click",(()=>{const n=document.querySelector(".menu")||document.querySelector(".main")||document.querySelector(".contact-wrapper");n.innerHTML="",n&&e.removeChild(n),(()=>{const e=document.createElement("div");e.className="contact-wrapper";const n=document.createElement("div");n.className="contact-details";const t=document.createElement("div");t.id="contact-title";const a=document.createElement("h1");a.textContent="Contact Us!",t.appendChild(a);const o=document.createElement("div");o.id="contact-address";const r=document.createElement("h3");r.textContent="Address: ";const i=document.createElement("span");i.textContent="37°14′0″N 115°48′30″W",o.appendChild(r),o.appendChild(i);const c=document.createElement("div");c.id="contact-phone";const d=document.createElement("h3");d.textContent="Phone: ";const s=document.createElement("span");s.textContent="+1-202-555-0116",c.appendChild(d),c.appendChild(s);const l=document.createElement("div");l.id="contact-email";const p=document.createElement("h3");p.textContent="Email: ";const m=document.createElement("span");m.textContent="theunitedstakes@notfake.us",l.appendChild(p),l.appendChild(m);const u=document.createElement("div");l.id="contact-fax";const h=document.createElement("h3");h.textContent="Fax: ";const f=document.createElement("span");f.textContent="+1-212-9876543",u.appendChild(h),u.appendChild(f),n.appendChild(t),n.appendChild(o),n.appendChild(c),n.appendChild(l),n.appendChild(u);const g=document.createElement("div");g.className="contact-image";const x=document.createElement("img");x.id="location-img",x.setAttribute("src",y),x.setAttribute("alt","Location Image"),g.appendChild(x),e.appendChild(n),e.appendChild(g),S.appendChild(e)})()}))}}))})),(0,f.N)(),v(),(0,f.W)()})()})();