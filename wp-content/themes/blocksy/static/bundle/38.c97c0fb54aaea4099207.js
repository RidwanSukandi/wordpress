(globalThis.blocksyJsonP=globalThis.blocksyJsonP||[]).push([[38],{38:function(e,t,n){"use strict";n.r(t),n.d(t,{handleClick:function(){return P},mount:function(){return q}});var o=n(891);const r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);var c=function(e){r?(0,o.clearAllBodyScrollLocks)():(document.body.style.overflow="",document.body.style.removeProperty("--scrollbar-width"))},i=function(e){if(r)e&&(0,o.disableBodyScroll)(e,{allowTouchMove:function(e){return!!e.closest(".select2-container")}});else{let e=window.innerWidth-document.documentElement.clientWidth;e>0&&document.body.style.setProperty("--scrollbar-width",`${e}px`),document.body.style.overflow="hidden"}};const a=function(){return window.ctFrontend&&window.ctFrontend.scrollLockManager||(window.ctFrontend=window.ctFrontend||{},window.ctFrontend.scrollLockManager={enable:c,disable:i}),window.ctFrontend.scrollLockManager};var l=n(601),s=n.n(l);const u=function(e){if(!e)return;const t=e.querySelector(".ct-toggle-dropdown-mobile");e.classList.contains("dropdown-active")?(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label",ct_localizations.expand_submenu),function(e,t){const n=e.querySelector("ul");requestAnimationFrame((function(){const e=n.getBoundingClientRect().height;n.style.height=`${e}px`,n.classList.add("is-animating"),requestAnimationFrame((function(){n.style.height="0px",d(n,(function(){n.classList.remove("is-animating"),n.removeAttribute("style"),t()}))}))}))}(e,(function(){e.classList.toggle("dropdown-active"),[...e.querySelectorAll(".menu-item-has-children.dropdown-active, .page_item_has_children.dropdown-active")].map((function(e){return e.classList.remove("dropdown-active")}))}))):(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label",ct_localizations.collapse_submenu),[...e.parentNode.children].map((function(e){return e.classList.contains("dropdown-active")&&u(e)})),e.classList.toggle("dropdown-active"),function(e){const t=e.querySelector("ul");requestAnimationFrame((function(){const e=t.getBoundingClientRect().height;t.style.height="0px",t.classList.add("is-animating"),requestAnimationFrame((function(){t.style.height=`${e}px`,d(t,(function(){t.classList.remove("is-animating"),t.removeAttribute("style")}))}))}))}(e))};function d(e,t){const n=function(o){o.target===e&&(e.removeEventListener("transitionend",n),t())};e.addEventListener("transitionend",n)}var f=n(130),m=n(846);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"];let y=null;const b=function(e){if(!y)return;let t=[...y.querySelectorAll(h.join(","))];y.querySelector('[data-device="mobile"]')&&"mobile"!==(0,f.C)()&&(t=t.filter((function(e){return!e.closest('[data-device="mobile"]')})));const n=t[0],o=t[t.length-1];"Tab"!==e.key&&9!==e.keyCode||(t.includes(document.activeElement)||(n.focus(),e.preventDefault()),e.shiftKey?document.activeElement===n&&(o.focus(),e.preventDefault()):document.activeElement===o&&(n.focus(),e.preventDefault()))},w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=p({focusOnMount:!0},t),y&&y!==e)return;const n=e.querySelectorAll(h.join(","));0!==n.length&&(y=e,document.addEventListener("keydown",b),t.focusOnMount&&!(0,m.b)()&&setTimeout((function(){n[0].focus()}),200))},L=function(e){e.removeEventListener("keydown",b),y=null},S=function(){return window.ctFrontend&&window.ctFrontend.focusLockManager||(window.ctFrontend=window.ctFrontend||{},window.ctFrontend.focusLockManager={focusLockOn:w,focusLockOff:L}),window.ctFrontend.focusLockManager};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const A=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=k({onClose:function(){},container:null},e),t=k({closeInstant:!1,shouldFocusOriginalTrigger:!0},t),!document.body.hasAttribute("data-panel"))return e.container.classList.remove("active"),void e.onClose();[...document.querySelectorAll(`[data-toggle-panel*="${e.container.id}"]`),...document.querySelectorAll(`[href*="${e.container.id}"]`)].map((function(e,n){e.setAttribute("aria-expanded","false"),t.shouldFocusOriginalTrigger&&!(0,m.b)()&&(e.focusDisabled||setTimeout((function(){0===n&&e.focus()}),50),e.focusDisabled=!1)})),e.container.classList.remove("active"),t.closeInstant?(document.body.removeAttribute("data-panel"),s().trigger("ct:modal:closed",e.container),a().enable(e.computeScrollContainer?e.computeScrollContainer():e.container.querySelector(".ct-panel-content"))):(document.body.dataset.panel="out",e.container.addEventListener("transitionend",(function(){setTimeout((function(){document.body.removeAttribute("data-panel"),s().trigger("ct:modal:closed",e.container),a().enable(e.computeScrollContainer?e.computeScrollContainer():e.container.querySelector(".ct-panel-content")),S().focusLockOff(e.container.querySelector(".ct-panel-content").parentNode)}),300)}),{once:!0})),window.removeEventListener("click",e.handleWindowClick,{capture:!0}),e.container.removeEventListener("click",e.handleContainerClick),e.onClose()},P=function(e,t){e&&e.preventDefault&&e.preventDefault(),t=k({onClose:function(){},container:null,focus:!1,clickOutside:!0,isModal:!1,computeScrollContainer:null,closeWhenLinkInside:!1,handleContainerClick:function(e){let n=e.target.closest(".ct-panel-content"),o=[...t.container.querySelectorAll(".ct-panel-content")].indexOf(e.target)>-1;t.isModal&&!o&&n||!t.isModal&&(o||n)||e.target.closest('[class*="select2-container"]')||window.getSelection().toString().length>0||document.body.hasAttribute("data-panel")&&A(t)},handleWindowClick:function(e){t.container.contains(e.target)||e.target===document.body||event.target.closest('[class*="select2-container"]')||document.body.hasAttribute("data-panel")&&A(t)}},t),function(e){e=k({onClose:function(){},container:null,focus:!0},e),[...document.querySelectorAll(`[data-toggle-panel*="${e.container.id}"]`),...document.querySelectorAll(`[href*="${e.container.id}"]`)].map((function(e){e.setAttribute("aria-expanded","true")})),e.focus&&setTimeout((function(){e.container.querySelector("input")&&e.container.querySelector("input").focus()}),200),e.container.querySelector(".ct-panel-content")&&e.container.querySelector(".ct-panel-content").addEventListener("click",(function(t){Array.from(e.container.querySelectorAll("select")).map((function(e){return e.selectr&&e.selectr.events.dismiss(t)}))})),e.clickOutside&&e.container.querySelector(".ct-panel-content")&&e.container.addEventListener("click",e.handleContainerClick);const t=function(n){const{keyCode:o,target:r}=n;27===o&&(n.preventDefault(),document.body.hasAttribute("data-panel")&&A(e),document.removeEventListener("keyup",t))};document.addEventListener("keyup",t);let n=e.container&&e.container.querySelector(".ct-toggle-close");n&&(n.addEventListener("click",(function(t){t.preventDefault(),A(e)}),{once:!0}),n.hasEnterListener||(n.hasEnterListener=!0,n.addEventListener("keyup",(function(t){13==t.keyCode&&(t.preventDefault(),A(e))})))),(e.computeScrollContainer||e.container.querySelector(".ct-panel-content"))&&(a().disable(e.computeScrollContainer?e.computeScrollContainer():e.container.querySelector(".ct-panel-content")),setTimeout((function(){S().focusLockOn(e.container.querySelector(".ct-panel-content").parentNode,{focusOnMount:!e.focus})}))),window.addEventListener("click",e.handleWindowClick,{capture:!0}),s().trigger("ct:modal:opened",e.container),[...e.container.querySelectorAll(".ct-toggle-dropdown-mobile")].map((function(e){!function(e){if(e.hasListener)return;e.hasListener=!0;let t=e.previousElementSibling.getAttribute("href");t&&"#"!==t||e.previousElementSibling.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),u(e.closest(".menu-item-has-children, .page_item_has_children"))})),e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),u(e.closest(".menu-item-has-children, .page_item_has_children"))}))}(e)}))}(t),t.closeWhenLinkInside&&(t.container.hasListener||(t.container.hasListener=!0,t.container.addEventListener("click",(function(e){if(!e.target)return;let n=e.target;e.target.closest("a")&&(n=e.target.closest("a")),n.closest(".ct-panel").classList.contains("active")&&n.matches("a")&&(n.classList.contains("ct-overlay-skip")||(n.closest('nav[data-id*="menu"]')||n.closest('[data-id*="text"]')||n.closest('[data-id*="button"]')||n.matches(".ct-offcanvas-trigger")||n.matches(".ct-header-account")||n.closest(".widget_nav_menu"))&&(A(t,{closeInstant:"#"!==n.getAttribute("href")[0],shouldFocusOriginalTrigger:!1}),setTimeout((function(){(n.matches(".ct-offcanvas-trigger")||n.matches(".ct-header-account"))&&n.click()}),500)))}))))};s().on("ct:offcanvas:force-close",(function(e){return A(e)}));const q=function(e,t){let{event:n,focus:o=!1}=t;P(n,{isModal:!0,container:document.querySelector(e.dataset.togglePanel||e.hash),clickOutside:!0,focus:o})}},891:function(e,t){var n,o;n=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}function r(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function c(e){var t=e||window.event;return!!r(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function i(){setTimeout((function(){void 0!==f&&(document.body.style.paddingRight=f,f=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)}))}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),l=[],s=!1,u=-1,d=void 0,f=void 0;e.disableBodyScroll=function(e,o){if(a){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!l.some((function(t){return t.targetElement===e}))){var i={targetElement:e,options:o||{}};l=[].concat(t(l),[i]),e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,o,i,a;1===t.targetTouches.length&&(o=e,a=(n=t).targetTouches[0].clientY-u,r(n.target)||(o&&0===o.scrollTop&&0<a||(i=o)&&i.scrollHeight-i.scrollTop<=i.clientHeight&&a<0?c(n):n.stopPropagation()))},s||(document.addEventListener("touchmove",c,n?{passive:!1}:void 0),s=!0)}}else{v=o,setTimeout((function(){if(void 0===f){var e=!!v&&!0===v.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(f=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:o||{}};l=[].concat(t(l),[m])}var v},e.clearAllBodyScrollLocks=function(){a?(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",c,n?{passive:!1}:void 0),s=!1),l=[],u=-1):(i(),l=[])},e.enableBodyScroll=function(e){if(a){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,l=l.filter((function(t){return t.targetElement!==e})),s&&0===l.length&&(document.removeEventListener("touchmove",c,n?{passive:!1}:void 0),s=!1)}else(l=l.filter((function(t){return t.targetElement!==e}))).length||i()}},void 0===(o=n.apply(t,[t]))||(e.exports=o)}}]);
//# sourceMappingURL=38.c97c0fb54aaea4099207.js.map