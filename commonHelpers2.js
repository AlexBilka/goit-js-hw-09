import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",n=document.querySelector(".feedback-form"),a=n.elements.email,o=n.elements.message;n.addEventListener("input",c);n.addEventListener("submit",r);const m=JSON.parse(localStorage.getItem(l))||{};a.value=m.email||"";o.value=m.message||"";function c(){const s=a.value,e=o.value,t=JSON.stringify({email:s,message:e});localStorage.setItem(l,t)}function r(s){s.preventDefault();const e=a.value,t=o.value;e&&t&&(console.log({email:e,message:t}),localStorage.removeItem(l),a.value="",o.value="")}
//# sourceMappingURL=commonHelpers2.js.map