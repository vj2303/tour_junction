(()=>{var e={};e.id=569,e.ids=[569],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6074:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d});var s=r(482),a=r(9108),i=r(2563),l=r.n(i),n=r(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let d=["",{children:["delete",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9231)),"/Users/vishnujangid/Desktop/Tourist_landing/startup-agency-landing-page/src/app/delete/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"/Users/vishnujangid/Desktop/Tourist_landing/startup-agency-landing-page/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/vishnujangid/Desktop/Tourist_landing/startup-agency-landing-page/src/app/delete/page.tsx"],c="/delete/page",f={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/delete/page",pathname:"/delete",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7879:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},4496:()=>{},5228:(e,t,r)=>{Promise.resolve().then(r.bind(r,7108))},7108:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ew});var s=r(2295),a=r(9988),i=r(3729),l=r(9408);let n=function(){return(0,s.jsxs)("section",{className:"flex flex-col gap-[1.9rem] w-full mt-[10.44rem]",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 justify-between",children:[s.jsx("div",{children:s.jsx("img",{src:"/images/icon.png",alt:"footer logo",className:"w-20 h-50"})}),s.jsx("div",{className:"text-lightBlue text-[1rem] font-serif",children:"\xa9 2024 Tourists Junction. All rights reserved."}),s.jsx("div",{className:"text-lightBlue text-[1rem] font-serif",children:"Email: touristjunction8@gmail.com"}),s.jsx("div",{className:"text-lightBlue text-[1rem] font-serif",children:"Mob No - 8669124213"})]}),s.jsx(l.Separator,{}),s.jsx("div",{className:"pb-[2.56rem]",children:s.jsx("p",{className:"text-customGray",children:"Tourist Junction – Your gateway to a smarter, more efficient travel business!"})})]})};var o=e=>"checkbox"===e.type,d=e=>e instanceof Date,u=e=>null==e;let c=e=>"object"==typeof e;var f=e=>!u(e)&&!Array.isArray(e)&&c(e)&&!d(e),m=e=>f(e)&&e.target?o(e.target)?e.target.checked:e.target.value:e,p=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,h=(e,t)=>e.has(p(t)),g=e=>{let t=e.constructor&&e.constructor.prototype;return f(t)&&t.hasOwnProperty("isPrototypeOf")};function y(e){let t;let r=Array.isArray(e);if("undefined"!=typeof FileList&&FileList,e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(r||f(e)))return e;else if(t=r?[]:{},r||g(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=y(e[r]));else t=e;return t}var x=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,b=(e,t,r)=>{if(!t||!f(e))return r;let s=x(t.split(/[,[\].]+?/)).reduce((e,t)=>u(e)?e:e[t],e);return v(s)||s===e?v(e[t])?r:e[t]:s},w=e=>"boolean"==typeof e,_=e=>/^\w*$/.test(e),j=e=>x(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,t,r)=>{let s=-1,a=_(t)?[t]:j(t),i=a.length,l=i-1;for(;++s<i;){let t=a[s],i=r;if(s!==l){let r=e[t];i=f(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}if("__proto__"===t||"constructor"===t||"prototype"===t)return;e[t]=i,e=e[t]}return e};let A={BLUR:"blur",FOCUS_OUT:"focusout"},F={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},V={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var S=(e,t,r,s=!0)=>{let a={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(a,i,{get:()=>(t._proxyFormState[i]!==F.all&&(t._proxyFormState[i]=!s||F.all),r&&(r[i]=!0),e[i])});return a},N=e=>f(e)&&!Object.keys(e).length,D=(e,t,r,s)=>{r(e);let{name:a,...i}=e;return N(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!s||F.all))},O=e=>Array.isArray(e)?e:[e],E=e=>"string"==typeof e,P=(e,t,r,s,a)=>E(e)?(s&&t.watch.add(e),b(r,e,a)):Array.isArray(e)?e.map(e=>(s&&t.watch.add(e),b(r,e))):(s&&(t.watchAll=!0),r),C=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},q=e=>({isOnSubmit:!e||e===F.onSubmit,isOnBlur:e===F.onBlur,isOnChange:e===F.onChange,isOnAll:e===F.all,isOnTouch:e===F.onTouched}),T=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let U=(e,t,r,s)=>{for(let a of r||Object.keys(e)){let r=b(e,a);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s||e.ref&&t(e.ref,e.name)&&!s)return!0;if(U(i,t))break}else if(f(i)&&U(i,t))break}}};var B=(e,t,r)=>{let s=O(b(e,r));return k(s,"root",t[r]),k(e,r,s),e},L=e=>"file"===e.type,$=e=>"function"==typeof e,M=e=>!1,R=e=>E(e),z=e=>"radio"===e.type,G=e=>e instanceof RegExp;let I={value:!1,isValid:!1},W={value:!0,isValid:!0};var H=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?W:{value:e[0].value,isValid:!0}:W:I}return I};let J={isValid:!1,value:null};var Y=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,J):J;function Z(e,t,r="validate"){if(R(e)||Array.isArray(e)&&e.every(R)||w(e)&&!e)return{type:r,message:R(e)?e:"",ref:t}}var X=e=>f(e)&&!G(e)?e:{value:e,message:""},K=async(e,t,r,s,a)=>{let{ref:i,refs:l,required:n,maxLength:d,minLength:c,min:m,max:p,pattern:h,validate:g,name:y,valueAsNumber:x,mount:_,disabled:j}=e._f,k=b(t,y);if(!_||j)return{};let A=l?l[0]:i,F=e=>{s&&A.reportValidity&&(A.setCustomValidity(w(e)?"":e||""),A.reportValidity())},S={},D=z(i),O=o(i),P=(x||L(i))&&v(i.value)&&v(k)||M(i)&&""===i.value||""===k||Array.isArray(k)&&!k.length,q=C.bind(null,y,r,S),T=(e,t,r,s=V.maxLength,a=V.minLength)=>{let l=e?t:r;S[y]={type:e?s:a,message:l,ref:i,...q(e?s:a,l)}};if(a?!Array.isArray(k)||!k.length:n&&(!(D||O)&&(P||u(k))||w(k)&&!k||O&&!H(l).isValid||D&&!Y(l).isValid)){let{value:e,message:t}=R(n)?{value:!!n,message:n}:X(n);if(e&&(S[y]={type:V.required,message:t,ref:A,...q(V.required,t)},!r))return F(t),S}if(!P&&(!u(m)||!u(p))){let e,t;let s=X(p),a=X(m);if(u(k)||isNaN(k)){let r=i.valueAsDate||new Date(k),l=e=>new Date(new Date().toDateString()+" "+e),n="time"==i.type,o="week"==i.type;E(s.value)&&k&&(e=n?l(k)>l(s.value):o?k>s.value:r>new Date(s.value)),E(a.value)&&k&&(t=n?l(k)<l(a.value):o?k<a.value:r<new Date(a.value))}else{let r=i.valueAsNumber||(k?+k:k);u(s.value)||(e=r>s.value),u(a.value)||(t=r<a.value)}if((e||t)&&(T(!!e,s.message,a.message,V.max,V.min),!r))return F(S[y].message),S}if((d||c)&&!P&&(E(k)||a&&Array.isArray(k))){let e=X(d),t=X(c),s=!u(e.value)&&k.length>+e.value,a=!u(t.value)&&k.length<+t.value;if((s||a)&&(T(s,e.message,t.message),!r))return F(S[y].message),S}if(h&&!P&&E(k)){let{value:e,message:t}=X(h);if(G(e)&&!k.match(e)&&(S[y]={type:V.pattern,message:t,ref:i,...q(V.pattern,t)},!r))return F(t),S}if(g){if($(g)){let e=Z(await g(k,t),A);if(e&&(S[y]={...e,...q(V.validate,e.message)},!r))return F(e.message),S}else if(f(g)){let e={};for(let s in g){if(!N(e)&&!r)break;let a=Z(await g[s](k,t),A,s);a&&(e={...a,...q(s,a.message)},F(a.message),r&&(S[y]=e))}if(!N(e)&&(S[y]={ref:A,...e},!r))return S}}return F(!0),S};function Q(e,t){let r=Array.isArray(t)?t:_(t)?[t]:j(t),s=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,s=0;for(;s<r;)e=v(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(f(s)&&N(s)||Array.isArray(s)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(s))&&Q(e,r.slice(0,-1)),e}var ee=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},et=e=>u(e)||!c(e);function er(e,t){if(et(e)||et(t))return e===t;if(d(e)&&d(t))return e.getTime()===t.getTime();let r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(let a of r){let r=e[a];if(!s.includes(a))return!1;if("ref"!==a){let e=t[a];if(d(r)&&d(e)||f(r)&&f(e)||Array.isArray(r)&&Array.isArray(e)?!er(r,e):r!==e)return!1}}return!0}var es=e=>"select-multiple"===e.type,ea=e=>z(e)||o(e),ei=e=>M(e)&&e.isConnected,el=e=>{for(let t in e)if($(e[t]))return!0;return!1};function en(e,t={}){let r=Array.isArray(e);if(f(e)||r)for(let r in e)Array.isArray(e[r])||f(e[r])&&!el(e[r])?(t[r]=Array.isArray(e[r])?[]:{},en(e[r],t[r])):u(e[r])||(t[r]=!0);return t}var eo=(e,t)=>(function e(t,r,s){let a=Array.isArray(t);if(f(t)||a)for(let a in t)Array.isArray(t[a])||f(t[a])&&!el(t[a])?v(r)||et(s[a])?s[a]=Array.isArray(t[a])?en(t[a],[]):{...en(t[a])}:e(t[a],u(r)?{}:r[a],s[a]):s[a]=!er(t[a],r[a]);return s})(e,t,en(t)),ed=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&E(e)?new Date(e):s?s(e):e;function eu(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:L(t)?t.files:z(t)?Y(e.refs).value:es(t)?[...t.selectedOptions].map(({value:e})=>e):o(t)?H(e.refs).value:ed(v(t.value)?e.ref.value:t.value,e)}var ec=(e,t,r,s)=>{let a={};for(let r of e){let e=b(t,r);e&&k(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},ef=e=>v(e)?e:G(e)?e.source:f(e)?G(e.value)?e.value.source:e.value:e;let em="AsyncFunction";var ep=e=>!!e&&!!e.validate&&!!($(e.validate)&&e.validate.constructor.name===em||f(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===em)),eh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eg(e,t,r){let s=b(e,r);if(s||_(r))return{error:s,name:r};let a=r.split(".");for(;a.length;){let s=a.join("."),i=b(t,s),l=b(e,s);if(i&&!Array.isArray(i)&&r!==s)break;if(l&&l.type)return{name:s,error:l};a.pop()}return{name:r}}var ey=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:(r?!s.isOnChange:!a.isOnChange)||e),ex=(e,t)=>!x(b(e,t)).length&&Q(e,t);let ev={mode:F.onSubmit,reValidateMode:F.onChange,shouldFocusError:!0},eb=()=>{let{register:e,handleSubmit:t,control:r,formState:{errors:a}}=function(e={}){let t=i.useRef(void 0),r=i.useRef(void 0),[s,a]=i.useState({isDirty:!1,isValidating:!1,isLoading:$(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:$(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...ev,...e},s={submitCount:0,isDirty:!1,isLoading:$(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},i=(f(r.defaultValues)||f(r.values))&&y(r.defaultValues||r.values)||{},l=r.shouldUnregister?{}:y(i),n={action:!1,mount:!1,watch:!1},c={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:ee(),array:ee(),state:ee()},j=q(r.mode),V=q(r.reValidateMode),S=r.criteriaMode===F.all,D=e=>t=>{clearTimeout(p),p=setTimeout(e,t)},C=async e=>{if(!r.disabled&&(g.isValid||e)){let e=r.resolver?N((await H()).errors):await Y(a,!0);e!==s.isValid&&_.state.next({isValid:e})}},R=(e,t)=>{!r.disabled&&(g.isValidating||g.validatingFields)&&((e||Array.from(c.mount)).forEach(e=>{e&&(t?k(s.validatingFields,e,t):Q(s.validatingFields,e))}),_.state.next({validatingFields:s.validatingFields,isValidating:!N(s.validatingFields)}))},z=(e,t)=>{k(s.errors,e,t),_.state.next({errors:s.errors})},G=(e,t,r,s)=>{let o=b(a,e);if(o){let a=b(l,e,v(r)?b(i,e):r);v(a)||s&&s.defaultChecked||t?k(l,e,t?a:eu(o._f)):et(e,a),n.mount&&C()}},I=(e,t,l,n,o)=>{let d=!1,u=!1,c={name:e};if(!r.disabled){let r=!!(b(a,e)&&b(a,e)._f&&b(a,e)._f.disabled);if(!l||n){g.isDirty&&(u=s.isDirty,s.isDirty=c.isDirty=Z(),d=u!==c.isDirty);let a=r||er(b(i,e),t);u=!!(!r&&b(s.dirtyFields,e)),a||r?Q(s.dirtyFields,e):k(s.dirtyFields,e,!0),c.dirtyFields=s.dirtyFields,d=d||g.dirtyFields&&!a!==u}if(l){let t=b(s.touchedFields,e);t||(k(s.touchedFields,e,l),c.touchedFields=s.touchedFields,d=d||g.touchedFields&&t!==l)}d&&o&&_.state.next(c)}return d?c:{}},W=(e,a,i,l)=>{let n=b(s.errors,e),o=g.isValid&&w(a)&&s.isValid!==a;if(r.delayError&&i?(t=D(()=>z(e,i)))(r.delayError):(clearTimeout(p),t=null,i?k(s.errors,e,i):Q(s.errors,e)),(i?!er(n,i):n)||!N(l)||o){let t={...l,...o&&w(a)?{isValid:a}:{},errors:s.errors,name:e};s={...s,...t},_.state.next(t)}},H=async e=>{R(e,!0);let t=await r.resolver(l,r.context,ec(e||c.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return R(e),t},J=async e=>{let{errors:t}=await H(e);if(e)for(let r of e){let e=b(t,r);e?k(s.errors,r,e):Q(s.errors,r)}else s.errors=t;return t},Y=async(e,t,a={valid:!0})=>{for(let i in e){let n=e[i];if(n){let{_f:e,...o}=n;if(e){let o=c.array.has(e.name),d=n._f&&ep(n._f);d&&g.validatingFields&&R([i],!0);let u=await K(n,l,S,r.shouldUseNativeValidation&&!t,o);if(d&&g.validatingFields&&R([i]),u[e.name]&&(a.valid=!1,t))break;t||(b(u,e.name)?o?B(s.errors,u,e.name):k(s.errors,e.name,u[e.name]):Q(s.errors,e.name))}N(o)||await Y(o,t,a)}}return a.valid},Z=(e,t)=>!r.disabled&&(e&&t&&k(l,e,t),!er(e_(),i)),X=(e,t,r)=>P(e,c,{...n.mount?l:v(t)?i:E(e)?{[e]:t}:t},r,t),et=(e,t,r={})=>{let s=b(a,e),i=t;if(s){let r=s._f;r&&(r.disabled||k(l,e,ed(t,r)),i=M(r.ref)&&u(t)?"":t,es(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?o(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):L(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||_.values.next({name:e,values:{...l}})))}(r.shouldDirty||r.shouldTouch)&&I(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},el=(e,t,r)=>{for(let s in t){let i=t[s],l=`${e}.${s}`,n=b(a,l);(c.array.has(e)||f(i)||n&&!n._f)&&!d(i)?el(l,i,r):et(l,i,r)}},en=(e,t,r={})=>{let o=b(a,e),d=c.array.has(e),f=y(t);k(l,e,f),d?(_.array.next({name:e,values:{...l}}),(g.isDirty||g.dirtyFields)&&r.shouldDirty&&_.state.next({name:e,dirtyFields:eo(i,l),isDirty:Z(e,f)})):!o||o._f||u(f)?et(e,f,r):el(e,f,r),T(e,c)&&_.state.next({...s}),_.values.next({name:n.mount?e:void 0,values:{...l}})},em=async e=>{n.mount=!0;let i=e.target,o=i.name,u=!0,f=b(a,o),p=e=>{u=Number.isNaN(e)||d(e)&&isNaN(e.getTime())||er(e,b(l,o,e))};if(f){let n,d;let h=i.type?eu(f._f):m(e),y=e.type===A.BLUR||e.type===A.FOCUS_OUT,x=!eh(f._f)&&!r.resolver&&!b(s.errors,o)&&!f._f.deps||ey(y,b(s.touchedFields,o),s.isSubmitted,V,j),v=T(o,c,y);k(l,o,h),y?(f._f.onBlur&&f._f.onBlur(e),t&&t(0)):f._f.onChange&&f._f.onChange(e);let w=I(o,h,y,!1),F=!N(w)||v;if(y||_.values.next({name:o,type:e.type,values:{...l}}),x)return g.isValid&&("onBlur"===r.mode?y&&C():C()),F&&_.state.next({name:o,...v?{}:w});if(!y&&v&&_.state.next({...s}),r.resolver){let{errors:e}=await H([o]);if(p(h),u){let t=eg(s.errors,a,o),r=eg(e,a,t.name||o);n=r.error,o=r.name,d=N(e)}}else R([o],!0),n=(await K(f,l,S,r.shouldUseNativeValidation))[o],R([o]),p(h),u&&(n?d=!1:g.isValid&&(d=await Y(a,!0)));u&&(f._f.deps&&ew(f._f.deps),W(o,d,n,w))}},eb=(e,t)=>{if(b(s.errors,t)&&e.focus)return e.focus(),1},ew=async(e,t={})=>{let i,l;let n=O(e);if(r.resolver){let t=await J(v(e)?e:n);i=N(t),l=e?!n.some(e=>b(t,e)):i}else e?((l=(await Promise.all(n.map(async e=>{let t=b(a,e);return await Y(t&&t._f?{[e]:t}:t)}))).every(Boolean))||s.isValid)&&C():l=i=await Y(a);return _.state.next({...!E(e)||g.isValid&&i!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:i}:{},errors:s.errors}),t.shouldFocus&&!l&&U(a,eb,e?n:c.mount),l},e_=e=>{let t={...n.mount?l:i};return v(e)?t:E(e)?b(t,e):e.map(e=>b(t,e))},ej=(e,t)=>({invalid:!!b((t||s).errors,e),isDirty:!!b((t||s).dirtyFields,e),error:b((t||s).errors,e),isValidating:!!b(s.validatingFields,e),isTouched:!!b((t||s).touchedFields,e)}),ek=(e,t,r)=>{let i=(b(a,e,{_f:{}})._f||{}).ref,{ref:l,message:n,type:o,...d}=b(s.errors,e)||{};k(s.errors,e,{...d,...t,ref:i}),_.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},eA=(e,t={})=>{for(let n of e?O(e):c.mount)c.mount.delete(n),c.array.delete(n),t.keepValue||(Q(a,n),Q(l,n)),t.keepError||Q(s.errors,n),t.keepDirty||Q(s.dirtyFields,n),t.keepTouched||Q(s.touchedFields,n),t.keepIsValidating||Q(s.validatingFields,n),r.shouldUnregister||t.keepDefaultValue||Q(i,n);_.values.next({values:{...l}}),_.state.next({...s,...t.keepDirty?{isDirty:Z()}:{}}),t.keepIsValid||C()},eF=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(w(e)&&n.mount||e){let i=e?void 0:v(a)?eu(r?r._f:b(s,t)._f):a;!e&&(e||v(i))||k(l,t,i),I(t,i,!1,!1,!0)}},eV=(e,t={})=>{let s=b(a,e),l=w(t.disabled)||w(r.disabled);return k(a,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),c.mount.add(e),s?eF({field:s,disabled:w(t.disabled)?t.disabled:r.disabled,name:e,value:t.value}):G(e,!0,t.value),{...l?{disabled:t.disabled||r.disabled}:{},...r.progressive?{required:!!t.required,min:ef(t.min),max:ef(t.max),minLength:ef(t.minLength),maxLength:ef(t.maxLength),pattern:ef(t.pattern)}:{},name:e,onChange:em,onBlur:em,ref:l=>{if(l){eV(e,t),s=b(a,e);let r=v(l.value)&&l.querySelectorAll&&l.querySelectorAll("input,select,textarea")[0]||l,n=ea(r),o=s._f.refs||[];(n?o.find(e=>e===r):r===s._f.ref)||(k(a,e,{_f:{...s._f,...n?{refs:[...o.filter(ei),r,...Array.isArray(b(i,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),G(e,!1,void 0,r))}else(s=b(a,e,{}))._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(h(c.array,e)&&n.action)&&c.unMount.add(e)}}},eS=()=>r.shouldFocusError&&U(a,eb,c.mount),eN=(e,t)=>async i=>{let n;if(i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist()),r.disabled){t&&await t({...s.errors},i);return}let o=y(l);if(_.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await H();s.errors=e,o=t}else await Y(a);if(Q(s.errors,"root"),N(s.errors)){_.state.next({errors:{}});try{await e(o,i)}catch(e){n=e}}else t&&await t({...s.errors},i),eS(),setTimeout(eS);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(s.errors)&&!n,submitCount:s.submitCount+1,errors:s.errors}),n)throw n},eD=(e,t={})=>{let o=e?y(e):i,d=y(o),u=N(e),f=u?i:d;if(t.keepDefaultValues||(i=o),!t.keepValues){if(t.keepDirtyValues)for(let e of Array.from(new Set([...c.mount,...Object.keys(eo(i,l))])))b(s.dirtyFields,e)?k(f,e,b(l,e)):en(e,b(f,e));else a={};l=r.shouldUnregister?t.keepDefaultValues?y(i):{}:y(f),_.array.next({values:{...f}}),_.values.next({values:{...f}})}c={mount:t.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},n.mount=!g.isValid||!!t.keepIsValid||!!t.keepDirtyValues,n.watch=!!r.shouldUnregister,_.state.next({submitCount:t.keepSubmitCount?s.submitCount:0,isDirty:!u&&(t.keepDirty?s.isDirty:!!(t.keepDefaultValues&&!er(e,i))),isSubmitted:!!t.keepIsSubmitted&&s.isSubmitted,dirtyFields:u?{}:t.keepDirtyValues?t.keepDefaultValues&&l?eo(i,l):s.dirtyFields:t.keepDefaultValues&&e?eo(i,e):t.keepDirty?s.dirtyFields:{},touchedFields:t.keepTouched?s.touchedFields:{},errors:t.keepErrors?s.errors:{},isSubmitSuccessful:!!t.keepIsSubmitSuccessful&&s.isSubmitSuccessful,isSubmitting:!1})},eO=(e,t)=>eD($(e)?e(l):e,t);return{control:{register:eV,unregister:eA,getFieldState:ej,handleSubmit:eN,setError:ek,_executeSchema:H,_getWatch:X,_getDirty:Z,_updateValid:C,_removeUnmounted:()=>{for(let e of c.unMount){let t=b(a,e);t&&(t._f.refs?t._f.refs.every(e=>!ei(e)):!ei(t._f.ref))&&eA(e)}c.unMount=new Set},_updateFieldArray:(e,t=[],o,d,u=!0,c=!0)=>{if(d&&o&&!r.disabled){if(n.action=!0,c&&Array.isArray(b(a,e))){let t=o(b(a,e),d.argA,d.argB);u&&k(a,e,t)}if(c&&Array.isArray(b(s.errors,e))){let t=o(b(s.errors,e),d.argA,d.argB);u&&k(s.errors,e,t),ex(s.errors,e)}if(g.touchedFields&&c&&Array.isArray(b(s.touchedFields,e))){let t=o(b(s.touchedFields,e),d.argA,d.argB);u&&k(s.touchedFields,e,t)}g.dirtyFields&&(s.dirtyFields=eo(i,l)),_.state.next({name:e,isDirty:Z(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else k(l,e,t)},_updateDisabledField:eF,_getFieldArray:e=>x(b(n.mount?l:i,e,r.shouldUnregister?b(i,e,[]):[])),_reset:eD,_resetDefaultValues:()=>$(r.defaultValues)&&r.defaultValues().then(e=>{eO(e,r.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:e=>{s={...s,...e}},_disableForm:e=>{w(e)&&(_.state.next({disabled:e}),U(a,(t,r)=>{let s=b(a,r);s&&(t.disabled=s._f.disabled||e,Array.isArray(s._f.refs)&&s._f.refs.forEach(t=>{t.disabled=s._f.disabled||e}))},0,!1))},_subjects:_,_proxyFormState:g,_setErrors:e=>{s.errors=e,_.state.next({errors:s.errors,isValid:!1})},get _fields(){return a},get _formValues(){return l},get _state(){return n},set _state(value){n=value},get _defaultValues(){return i},get _names(){return c},set _names(value){c=value},get _formState(){return s},set _formState(value){s=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:ew,register:eV,handleSubmit:eN,watch:(e,t)=>$(e)?_.values.subscribe({next:r=>e(X(void 0,t),r)}):X(e,t,!0),setValue:en,getValues:e_,reset:eO,resetField:(e,t={})=>{b(a,e)&&(v(t.defaultValue)?en(e,y(b(i,e))):(en(e,t.defaultValue),k(i,e,y(t.defaultValue))),t.keepTouched||Q(s.touchedFields,e),t.keepDirty||(Q(s.dirtyFields,e),s.isDirty=t.defaultValue?Z(e,y(b(i,e))):Z()),!t.keepError&&(Q(s.errors,e),g.isValid&&C()),_.state.next({...s}))},clearErrors:e=>{e&&O(e).forEach(e=>Q(s.errors,e)),_.state.next({errors:e?s.errors:{}})},unregister:eA,setError:ek,setFocus:(e,t={})=>{let r=b(a,e),s=r&&r._f;if(s){let e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&$(e.select)&&e.select())}},getFieldState:ej}}(e),formState:s});let l=t.current.control;return l._options=e,function(e){let t=i.useRef(e);t.current=e,i.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:l._subjects.state,next:e=>{D(e,l._proxyFormState,l._updateFormState,!0)&&a({...l._formState})}}),i.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),i.useEffect(()=>{if(l._proxyFormState.isDirty){let e=l._getDirty();e!==s.isDirty&&l._subjects.state.next({isDirty:e})}},[l,s.isDirty]),i.useEffect(()=>{e.values&&!er(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,a(e=>({...e}))):l._resetDefaultValues()},[e.values,l]),i.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),i.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),t.current.formState=S(s,l),t.current}();return(0,s.jsxs)("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"20px"},children:[s.jsx("h2",{children:"Delete Your Account"}),(0,s.jsxs)("form",{onSubmit:t(e=>{console.log("Form Submitted:",e),alert("Form submitted successfully!")}),children:[[{name:"name",label:"User Name*",type:"text",validation:{required:"Name is required"}},{name:"email",label:"Email Address*",type:"text",validation:{required:"Email address is required"}},{name:"reason",label:"Why do you want to delete your account?*",type:"text",validation:{required:"Reason is required"}}].map((t,r)=>s.jsx("div",{style:{marginBottom:"15px"},children:"text"===t.type&&(0,s.jsxs)("div",{className:"relative w-full",children:[s.jsx("input",{type:t.type,...e(t.name,t.validation),id:t.name,className:`block p-[15px] w-full text-base text-gray-900 bg-white border ${a[t.name]?"border-red-500":"border-gray-300"} rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2`}),s.jsx("label",{htmlFor:t.name,className:"absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4",children:t.label}),a[t.name]&&s.jsx("p",{style:{color:"red"},children:String(a[t.name]?.message)})]})},r)),s.jsx("button",{type:"submit",style:{padding:"10px 20px",background:"blue",color:"white",border:"none",borderRadius:"5px"},children:"Submit"})]})]})},ew=()=>(0,s.jsxs)("div",{children:[s.jsx(a.default,{}),s.jsx(eb,{}),s.jsx(n,{})]})},9988:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(2295),a=r(3729),i=r(4513),l=r(2739),n=r(5877),o=r(9247),d=r(1453);let u=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...i},l)=>{let o=a?n.g7:"button";return s.jsx(o,{className:(0,d.cn)(u({variant:t,size:r,className:e})),ref:l,...i})});c.displayName="Button";let f=(0,a.forwardRef)(({text:e,isLoading:t=!1,form:r,action:a,disabled:i=!1,isSubmitable:n,width:o,dataLoadingText:d="Please wait ...",variant:u="primary",classes:f,iconRoute:m,rightIconRoute:p,rightIconClass:h="w-[24px] h-[24px]",iconComponent:g,size:y="normal"},x)=>{let v="full_width"===o?"w-full":o||"w-[7.4375rem]",b="normal"===y?"h-[3.1215rem]":"large"===y?"h-[3.75rem]":"h-[2.625rem]";return t?(0,s.jsxs)(c,{className:`bg-primary  text-white ${v} md:${v} select-none rounded-[0.625rem] cursor-not-allowed ${b} ${f||""}`,ref:x,disabled:!0,children:[s.jsx(l.Z,{className:"mr-2 h-4 w-4 animate-spin"}),d]}):(0,s.jsxs)(c,{form:r,className:`${"primary"!==u?"text-normal text-white  bg-secondary":"bg-primary"} text-white shadow-xl ${v} md:${v}  select-none rounded-[0.625rem] hover:opacity-90 ${"primary"===u?"hover:bg-primary":"hover:bg-secondary"} ${b} ${f}`,onClick:i?()=>void 0:a,type:n?"submit":"button",ref:x,disabled:i,children:[m&&s.jsx("img",{src:m,alt:"left button icon",className:"w-[24px] h-[24px]"}),m&&s.jsx("span",{children:"\xa0"}),g,g&&s.jsx("span",{children:"\xa0"}),e,p&&s.jsx("span",{children:"\xa0"}),p&&s.jsx("img",{src:p,alt:"right button icon",className:h})]})});f.displayName="MainButton";var m=r(783),p=r.n(m);let h=function(){let[e,t]=(0,a.useState)(!1),r=()=>{t(!e)};return(0,s.jsxs)("div",{className:"md:sticky md:top-0   md:shadow-none z-20 ",children:[s.jsx("div",{className:" hidden lg:block animate-in fade-in zoom-in bg-white p-4",children:(0,s.jsxs)("div",{className:"flex justify-between md:mx-[9rem]  items-center",children:[s.jsx("div",{children:s.jsx("img",{src:"/images/icon.png",alt:"logo",className:"w-20 h-50"})}),(0,s.jsxs)("div",{className:"flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none",children:[s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Home"}),s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"About Us"}),s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Our App"}),s.jsx(p(),{href:"/delete",children:s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Delete Account"})})]})]})}),(0,s.jsxs)("div",{className:` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${e?" bg-primary py-2":""} `,children:[(0,s.jsxs)("div",{className:"flex justify-between mx-[10px]",children:[s.jsx("div",{className:"flex gap-[50px] text-[16px] items-center select-none",children:s.jsx("img",{src:"/images/icon.png",alt:"logo",className:"w-[7rem]"})}),s.jsx("div",{className:"flex items-center gap-[40px]",children:e?s.jsx(i.Z,{className:"cursor-pointer animate-in fade-in zoom-in text-black",onClick:r}):s.jsx("img",{src:"/svgs/hamburger.svg",alt:"logo",className:"cursor-pointer animate-in fade-in zoom-in",onClick:r})})]}),e?s.jsx("div",{className:"my-8 select-none animate-in slide-in-from-right",children:(0,s.jsxs)("div",{className:"flex flex-col gap-8 mt-8 mx-4",children:[s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Home"}),s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"About Us"}),s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Our App"}),s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Contacts"}),(0,s.jsxs)("div",{className:"flex flex-col gap-[40px] select-none",children:[s.jsx("p",{className:"hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray",children:"Login"}),s.jsx(f,{text:"Sign up",classes:"shadow-none"})]})]})}):s.jsx("div",{})]})]})}},9408:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Separator:()=>n});var s=r(2295),a=r(3729),i=r(640),l=r(1453);let n=a.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...a},n)=>s.jsx(i.f,{ref:n,decorative:r,orientation:t,className:(0,l.cn)("shrink-0 bg-slate-200 dark:bg-slate-800","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...a}));n.displayName=i.f.displayName},1453:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var s=r(6815),a=r(9377);function i(...e){return(0,a.m6)((0,s.W)(e))}},9231:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>l});let s=(0,r(6843).createProxy)(String.raw`/Users/vishnujangid/Desktop/Tourist_landing/startup-agency-landing-page/src/app/delete/page.tsx`),{__esModule:a,$$typeof:i}=s,l=s.default},1342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>l});var s=r(5036),a=r(479),i=r.n(a);r(5023);let l={title:"Create Next App",description:"Generated by create next app"};function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:e})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,691,787],()=>r(6074));module.exports=s})();