function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(h,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=v();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function w(e){return u=void 0,p&&o?y(e):(o=i=void 0,a)}function O(){var e=v(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=g(t)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea");y.addEventListener("input",e(t)((function(e){const t={email:j.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));const h=JSON.parse(localStorage.getItem("feedback-form-state"));h&&(j.value=h.email,S.value=h.message),y.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:j.value,message:S.value}),y.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.79e47e3b.js.map
