(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[25,32],{221:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,s=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(o){l=!0,s=o}finally{try{n||null==i.return||i.return()}finally{if(l)throw s}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return l}))},238:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(43),r=a(3);a(240);class i extends n.Component{constructor(){super(),this.state={list:[],list2:[],description:"",address:"",socialMedia:[{item:"Facebook",url:""},{item:"Twitter",url:""},{item:"Youtube",url:""},{item:"Instagram",url:""},{item:"LinkedIn",url:""}],imageFile:"",header:[],logo:"",banner:["You Rely on Lawyer, Lawyers rely on us"]}}componentDidMount(){r.b.get("/footer/showall/").then(e=>{console.log(e),this.setState(e.data.data[e.data.data.length-1])})}render(){return l.a.createElement("div",{id:"menu",className:"bg-white border-bottom navigation-wrap shadow-sm sticky-top p-0"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light p-0 pb-2 px-3"},l.a.createElement(s.b,{className:"navbar-brand-name page-scroll ml-2",to:"/"},l.a.createElement("img",{alt:"Case Management",height:"90px",width:"100px",src:this.state.headerLogo})),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement("ul",{className:"navbar-nav pt-1 px-md-3",id:" topNav"},this.state.header.map((e,t)=>l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:e.url,className:"nav-link page-scroll"},e.item)))),l.a.createElement("div",{className:"navbar-login ml-auto",id:"bottomNav"},l.a.createElement("ul",{className:"navbar-nav px-md-3"},l.a.createElement("li",{className:"nav-item mr-3"},l.a.createElement(s.b,{to:"/login",className:"nav-link page-scroll"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/registration",className:"text-white page-scroll cust-btn-primary",style:{borderRadius:"0.25rem"}},"Register"))))))))))}}t.a=i},239:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(3);class r extends l.a.Component{constructor(){super(),this.state={list:[],list2:[],description:"",address:"",socialMedia:[{item:"Facebook",url:""},{item:"Twitter",url:""},{item:"Youtube",url:""},{item:"Instagram",url:""},{item:"LinkedIn",url:""}],imageFile:"",header:[],logo:"",banner:["You Rely on Lawyer, Lawyers rely on us"]}}componentDidMount(){s.b.get("/footer/showall/").then(e=>{console.log(e),this.setState(e.data.data[e.data.data.length-1])})}render(){return l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"f-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-sm-12 pb-4"},l.a.createElement("div",{className:"ftr-set"},l.a.createElement("h3",null,l.a.createElement("img",{alt:"No image",height:"40%",width:"40%",src:this.state.logo})),l.a.createElement("p",null,this.state.description))),l.a.createElement("div",{className:"col-md-3 col-sm-12 pb-4 "},l.a.createElement("div",{className:"ftr-set"},l.a.createElement("h3",null,"Contact"),l.a.createElement("ul",{className:"nav ftr-nav flex-column"},this.state.list.map((e,t)=>l.a.createElement("li",{onClick:t=>{t.preventDefault(),this.props.handleRoute(e.url)}},l.a.createElement("a",{className:"page-scroll"},e.item)))))),l.a.createElement("div",{className:"col-md-3 col-sm-12 pb-4"},l.a.createElement("div",{className:"ftr-set"},l.a.createElement("h3",null,"Link"),l.a.createElement("ul",{className:"nav ftr-nav flex-column"},this.state.list2.map((e,t)=>l.a.createElement("li",null,l.a.createElement("a",{href:e.url,className:"page-scroll"},e.item)))))),l.a.createElement("div",{className:"col-md-3 col-sm-12 "},l.a.createElement("div",{className:"ftr-set"},l.a.createElement("div",{className:"social"},l.a.createElement("h3",null,"Address"),l.a.createElement("p",null," ",this.state.address),l.a.createElement("h3",null,"Social"),l.a.createElement("ul",{className:"clearfix"},l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.location.href=this.state.socialMedia[0].url}},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.location.href=this.state.socialMedia[1].url}},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.open(this.state.socialMedia[2].url)}},l.a.createElement("i",{className:"fa fa-youtube"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.open(this.state.socialMedia[4].url)}},l.a.createElement("span",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.open(this.state.socialMedia[3].url)}},l.a.createElement("span",{className:"fa fa-instagram"})))))))))),l.a.createElement("div",{className:"f-nav"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"clearfix f-menu-items",style:{"line-height":"2"}},l.a.createElement("li",null,l.a.createElement("small",null,this.state.footer)),l.a.createElement("li",null,l.a.createElement("div",{className:"l-social c-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.location.href=this.state.socialMedia[0].url}},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.location.href=this.state.socialMedia[1].url}},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.open(this.state.socialMedia[2].url)}},l.a.createElement("i",{className:"fa fa-youtube"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.open(this.state.socialMedia[4].url)}},l.a.createElement("span",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{onClick:()=>{window.open(this.state.socialMedia[3].url)}},l.a.createElement("span",{className:"fa fa-instagram"}))))))))))}}t.a=r},240:function(e,t,a){"use strict";var n=a(1),l=a(227),s=a.n(l);function r(e){let t=!1;return s()(this).one(i.TRANSITION_END,()=>{t=!0}),setTimeout(()=>{t||i.triggerTransitionEnd(this)},e),this}const i={TRANSITION_END:"bsTransitionEnd",getUID(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement(e){let t=e.getAttribute("data-target");if(!t||"#"===t){const a=e.getAttribute("href");t=a&&"#"!==a?a.trim():""}try{return document.querySelector(t)?t:null}catch(a){return null}},getTransitionDurationFromElement(e){if(!e)return 0;let t=s()(e).css("transition-duration"),a=s()(e).css("transition-delay");const n=parseFloat(t),l=parseFloat(a);return n||l?(t=t.split(",")[0],a=a.split(",")[0],1e3*(parseFloat(t)+parseFloat(a))):0},reflow:e=>e.offsetHeight,triggerTransitionEnd(e){s()(e).trigger("transitionend")},supportsTransitionEnd:()=>Boolean("transitionend"),isElement:e=>(e[0]||e).nodeType,typeCheckConfig(e,t,a){for(const l in a)if(Object.prototype.hasOwnProperty.call(a,l)){const s=a[l],r=t[l],o=r&&i.isElement(r)?"element":null===(n=r)||"undefined"===typeof n?"".concat(n):{}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(o))throw new Error("".concat(e.toUpperCase(),": ")+'Option "'.concat(l,'" provided type "').concat(o,'" ')+'but expected type "'.concat(s,'".'))}var n},findShadowRoot(e){if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?i.findShadowRoot(e.parentNode):null},jQueryDetection(){if("undefined"===typeof s.a)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");const e=s.a.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};i.jQueryDetection(),s.a.fn.emulateTransitionEnd=r,s.a.event.special[i.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle(e){if(s()(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var o=i;const c="collapse",m="bs.collapse",d=".".concat(m),u=s.a.fn[c],h={toggle:!0,parent:""},g={toggle:"boolean",parent:"(string|element)"},p="show".concat(d),f="shown".concat(d),E="hide".concat(d),b="hidden".concat(d),y="click".concat(d).concat(".data-api");class v{constructor(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'.concat(e.id,'"],')+'[data-toggle="collapse"][data-target="#'.concat(e.id,'"]')));const a=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]'));for(let n=0,l=a.length;n<l;n++){const t=a[n],l=o.getSelectorFromElement(t),s=[].slice.call(document.querySelectorAll(l)).filter(t=>t===e);null!==l&&s.length>0&&(this._selector=l,this._triggerArray.push(t))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get VERSION(){return"4.5.0"}static get Default(){return h}toggle(){s()(this._element).hasClass("show")?this.hide():this.show()}show(){if(this._isTransitioning||s()(this._element).hasClass("show"))return;let e,t;if(this._parent&&(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(e=>"string"===typeof this._config.parent?e.getAttribute("data-parent")===this._config.parent:e.classList.contains("collapse")),0===e.length&&(e=null)),e&&(t=s()(e).not(this._selector).data(m),t&&t._isTransitioning))return;const a=s.a.Event(p);if(s()(this._element).trigger(a),a.isDefaultPrevented())return;e&&(v._jQueryInterface.call(s()(e).not(this._selector),"hide"),t||s()(e).data(m,null));const n=this._getDimension();s()(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[n]=0,this._triggerArray.length&&s()(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);const l=n[0].toUpperCase()+n.slice(1),r="scroll".concat(l),i=o.getTransitionDurationFromElement(this._element);s()(this._element).one(o.TRANSITION_END,()=>{s()(this._element).removeClass("collapsing").addClass("".concat("collapse"," ").concat("show")),this._element.style[n]="",this.setTransitioning(!1),s()(this._element).trigger(f)}).emulateTransitionEnd(i),this._element.style[n]="".concat(this._element[r],"px")}hide(){if(this._isTransitioning||!s()(this._element).hasClass("show"))return;const e=s.a.Event(E);if(s()(this._element).trigger(e),e.isDefaultPrevented())return;const t=this._getDimension();this._element.style[t]="".concat(this._element.getBoundingClientRect()[t],"px"),o.reflow(this._element),s()(this._element).addClass("collapsing").removeClass("".concat("collapse"," ").concat("show"));const a=this._triggerArray.length;if(a>0)for(let l=0;l<a;l++){const e=this._triggerArray[l],t=o.getSelectorFromElement(e);if(null!==t){s()([].slice.call(document.querySelectorAll(t))).hasClass("show")||s()(e).addClass("collapsed").attr("aria-expanded",!1)}}this.setTransitioning(!0);this._element.style[t]="";const n=o.getTransitionDurationFromElement(this._element);s()(this._element).one(o.TRANSITION_END,()=>{this.setTransitioning(!1),s()(this._element).removeClass("collapsing").addClass("collapse").trigger(b)}).emulateTransitionEnd(n)}setTransitioning(e){this._isTransitioning=e}dispose(){s.a.removeData(this._element,m),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(e){return(e=Object(n.a)(Object(n.a)({},h),e)).toggle=Boolean(e.toggle),o.typeCheckConfig(c,e,g),e}_getDimension(){return s()(this._element).hasClass("width")?"width":"height"}_getParent(){let e;o.isElement(this._config.parent)?(e=this._config.parent,"undefined"!==typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);const t='[data-toggle="collapse"][data-parent="'.concat(this._config.parent,'"]'),a=[].slice.call(e.querySelectorAll(t));return s()(a).each((e,t)=>{this._addAriaAndCollapsedClass(v._getTargetFromElement(t),[t])}),e}_addAriaAndCollapsedClass(e,t){const a=s()(e).hasClass("show");t.length&&s()(t).toggleClass("collapsed",!a).attr("aria-expanded",a)}static _getTargetFromElement(e){const t=o.getSelectorFromElement(e);return t?document.querySelector(t):null}static _jQueryInterface(e){return this.each((function(){const t=s()(this);let a=t.data(m);const l=Object(n.a)(Object(n.a)(Object(n.a)({},h),t.data()),"object"===typeof e&&e?e:{});if(!a&&l.toggle&&"string"===typeof e&&/show|hide/.test(e)&&(l.toggle=!1),a||(a=new v(this,l),t.data(m,a)),"string"===typeof e){if("undefined"===typeof a[e])throw new TypeError('No method named "'.concat(e,'"'));a[e]()}}))}}s()(document).on(y,'[data-toggle="collapse"]',(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();const t=s()(this),a=o.getSelectorFromElement(this),n=[].slice.call(document.querySelectorAll(a));s()(n).each((function(){const e=s()(this),a=e.data(m)?"toggle":t.data();v._jQueryInterface.call(e,a)}))})),s.a.fn[c]=v._jQueryInterface,s.a.fn[c].Constructor=v,s.a.fn[c].noConflict=()=>(s.a.fn[c]=u,v._jQueryInterface)},450:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(221),s=a(0),r=a.n(s),i=a(17),o=a(8),c=a(238),m=a(239),d=a(5),u=a(43),h=a(110),g=a(153),p=a(3);const f=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);t.default=e=>{const t=Object(o.c)(),a=Object(d.h)(),E=Object(s.useState)(!1),b=Object(l.a)(E,2),y=b[0],v=b[1],w=Object(s.useState)(!1),N=Object(l.a)(w,2),_=N[0],C=N[1],S=Object(s.useState)({emailAddress:"",password:""}),A=Object(l.a)(S,2),T=A[0],j=A[1],x=Object(s.useState)({emailAddress:"",password:""}),O=Object(l.a)(x,2),k=O[0],I=O[1],D=e=>{e.persist(),v(!1);const t=e.target,a=t.name,l=t.value;j(e=>Object(n.a)(Object(n.a)({},e),{},{[a]:l}));var s=k;switch(a){case"emailAddress":s.emailAddress=f.test(l)?"":"Email is not valid!";break;case"password":k.password=l.length<6?"Password must be at least 6 characters":""}I(Object(n.a)({},s))};Object(s.useEffect)(()=>{a.lawyer&&t(Object(i.s)({token:{user:JSON.parse(atob(a.lawyer))}}))},[]);const R=()=>{if(""===T.emailAddress||""===T.password)return C(!1),v(!0),h.a.warning({message:"Fields Should Not Be Empty"});t(Object(i.k)(Object(n.a)(Object(n.a)({},T),{},{type:"user"}),(t,a)=>{if(t)v(!0),console.log(t),"Your trial period expired."!==t.message&&"You payment has been declined."!==t.message&&"Payment confirmation awaited."!==t.message||e.history.push("/plans/subscription"),h.a.error(t);else{h.a.success(a),console.log(a),localStorage.setItem("timer",0);let e=JSON.parse(window.localStorage.getItem("Case.user"));e=e.token.user,e.updated_at=new Date,p.b.post("user/update/".concat(e._id),e).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}C(!1)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"align-content-center py-5 row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"bg-light l-wrapper p-3 p-md-5 shadow"},r.a.createElement("div",{className:"section-title mb-2"},r.a.createElement("h2",{className:"text-center"},"Login")),r.a.createElement("form",{id:"forgotForm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:D,type:"email",name:"emailAddress",value:T.emailAddress,id:"email",className:"form-control",placeholder:"Email",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"},k.emailAddress))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:D,type:"password",name:"password",value:T.password,id:"password",className:"form-control",placeholder:"Password",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"},k.password)))),_&&r.a.createElement(g.a,null),r.a.createElement("div",{id:"success"}),r.a.createElement("button",{type:"submit",onClick:e=>{if(e.preventDefault(),!y){C(!0);if(!(e=>{let t=!0;return Object.values(e).forEach(e=>e.length>0&&(t=!1)),t})(k))return C(!1),v(!0),h.a.warning({message:"Failed to Register."});R()}},style:{borderRadius:"0.25rem"},className:"text-white page-scroll cust-btn-primary mt-3"},"Login"),r.a.createElement("div",{class:"text-block text-center my-3"},r.a.createElement(u.b,{to:"/forgot",class:"text-small forgot-password text-primary"},"Forgot Password")),r.a.createElement("div",{class:"text-block text-center my-3"},r.a.createElement("span",{class:"text-small font-weight-semibold"},"New user?"),r.a.createElement(u.b,{to:"/registration",className:"text-custom-primary text-small"}," ","Register")))))))),r.a.createElement(m.a,{handleRoute:t=>{console.log(t),e.history.push(t)}}))}}}]);
//# sourceMappingURL=25.261286c8.chunk.js.map