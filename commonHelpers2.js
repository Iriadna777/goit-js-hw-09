import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form");dokument.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),a.elements.email.value=e.email,orm.elements.message.value=e.message)});a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{t.preventDefault(),!e.email||!e.message?alert("Please fill all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset())});
//# sourceMappingURL=commonHelpers2.js.map
