(this.webpackJsonpstocks_app=this.webpackJsonpstocks_app||[]).push([[0],{49:function(e,t,a){e.exports=a.p+"static/media/nse.c0005ab4.jpg"},52:function(e,t,a){e.exports=a(85)},57:function(e,t,a){},67:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),s=(a(57),a(3)),o=a(9),i=a.n(o),m=a(18),u=a(6),d=a(30);a(63),a(65);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyCRwf1wfEq1dvo-flTFLIjc0Vuo1Zj0RRU",appId:"1:767252587796:web:638112e9d7fe5af9590e01",authDomain:"stockfolio-e2ef9.firebaseapp.com",databaseURL:"https://stockfolio-e2ef9.firebaseio.com",measurementId:"G-T7N35FZQ2G",messagingSenderId:"767252587796",projectId:"stockfolio-e2ef9",storageBucket:"stockfolio-e2ef9.appspot.com"});var p,_=d.a,f=(a(67),r.a.createContext({dark:!1,toggle:function(){}})),E=["--bg-color: var(--color-white)","--bg-color-hp: var(--bg-color-hp-primary)","--bg-navbar: var(--bg-navbar-primary)","--bg-logo: var(--bg-logo-primary)","--home-title: var(--home-title-primary)","--sign-btn: var(--sign-btn-primary)","--sign-btn-fontColor: var(--sign-btn-fontColor-primary)","--navLink-text: var(--navLink-text-primary)","--logoTitle: var(--logoTitle-primary)","--border: var(--border-primary)"],v=["--bg-color: var(--color-blue)","--bg-color-hp: var(--bg-color-hp-secondary)","--bg-navbar: var(--bg-navbar-secondary)","--bg-logo: var(--bg-logo-secondary)","--home-title: var(--home-title-secondary)","--sign-btn: var(--sign-btn-secondary)","--sign-btn-fontColor: var(--sign-btn-fontColor-secondary)","--navLink-text: var(--navLink-text-secondary)","--logoTitle: var(--logoTitle-secondary)","--border: var(--border-secondary)"],b=function(e){var t=e.children,a=window.matchMedia("(prefers-color-scheme: dark)").matches,c=Object(n.useState)(a),l=Object(u.a)(c,2),s=l[0],o=l[1];Object(n.useLayoutEffect)((function(){i()}),[s]);var i=function(){var e,t;s&&(t=v),s||(t=E),document.getElementsByTagName("html")[0].style.cssText=null===(e=t)||void 0===e?void 0:e.join(";")};return r.a.createElement(f.Provider,{value:{dark:s,toggle:function(){console.log("Toggle Method Called"),document.getElementsByTagName("body")[0].style.cssText="transition: background .5s ease",o(!s)}}},t)},h=a(19),g=a(8),y=function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.firestore().collection("users").doc(e).get();case 3:(n=t.sent).exists&&(r=n.data(),a({type:"SET_USER",payload:r})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(t){t({type:"SET_LOADING",payload:e})}},w=function(){return function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(N(!0)),e.next=4,_.auth().signOut();case 4:t({type:"SIGN_OUT"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t(N(!1));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(t){t({type:"SET_ERROR",payload:e})}},C=function(e){return function(t){t({type:"SET_SUCCESS",payload:e})}},O=function(e,t){return function(){var a=Object(m.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_.auth().sendPasswordResetEmail(e);case 3:n(C(t)),a.next=10;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0),n(k(a.t0.message));case 10:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()},x=function(){var e=Object(n.useContext)(f).toggle,t=Object(g.g)(),a=Object(s.b)(),c=Object(s.c)((function(e){return e.auth})).authenticated;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"logo"},r.a.createElement("div",{className:"nav-link"},r.a.createElement("span",{className:"link-text logo-text "},r.a.createElement(h.b,{className:"title",to:c?"/dashboard":"/"},"StockFolio")),r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"},r.a.createElement("g",{className:"fa-group"},r.a.createElement("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),r.a.createElement("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"}))))),c?r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link logout",onClick:function(){a(w())}},r.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"register ",fill:"currentColor",d:"M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"})),r.a.createElement("span",{className:"link-text"},"Log-Out"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item "},r.a.createElement("div",{className:"nav-link",onClick:function(){return t.push("/signup")}},r.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"register",fill:"currentColor",d:"M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"})),r.a.createElement("span",{className:"link-text"},"Register"))),r.a.createElement("li",{className:"nav-item "},r.a.createElement("div",{className:"nav-link",onClick:function(){return t.push("/signin")}},r.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"register",fill:"currentColor",d:"M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"})),r.a.createElement("span",{className:"link-text"},"Log-In")))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link logout",onClick:e},r.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"register ",fill:"currentColor",d:"M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"})),r.a.createElement("span",{className:"link-text"},"Theme")))))},j=function(e){var t=e.type,a=e.placeholder,n=e.value,c=e.name,l=e.onChange,s=e.label;return r.a.createElement("div",{className:"control block-cube block-input"},r.a.createElement("label",{htmlFor:c},s),r.a.createElement("input",{className:"input",color:"red",type:t,placeholder:a,value:n,name:c,id:c,onChange:l,required:!0,autoComplete:"off"}),r.a.createElement("div",{className:"bg-top"},r.a.createElement("div",{className:"bg-inner"})),r.a.createElement("div",{className:"bg-right"},r.a.createElement("div",{className:"bg-inner"})),r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"bg-inner"})))},L=function(e){var t=e.text,a=(e.className,e.onClick),n=e.type,c=e.disabled;return r.a.createElement("button",{type:n,className:"btn",onClick:a,disabled:c},t)},S=function(e){var t=e.msg,a=e.type,n="";return"danger"===a&&(n="msg__cont"),"success"===a&&(n="success"),r.a.createElement("article",{className:n},r.a.createElement("div",{className:"msg__cont__body"},t))},M=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),d=o[0],p=o[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),v=E[0],b=E[1],h=Object(n.useState)(!1),g=Object(u.a)(h,2),y=g[0],N=g[1],w=Object(s.b)(),C=Object(s.c)((function(e){return e.auth})).error;Object(n.useEffect)((function(){return function(){C&&w(k(""))}}),[C,w]);return r.a.createElement("div",{className:"signup__container"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"has-text-centered is-size-2 mb-3"},"Sign Up"),r.a.createElement("form",{className:"form",onSubmit:function(e){var t,n;e.preventDefault(),N(!0),w((t={email:d,password:v,firstName:a},n=function(){return N(!1)},function(){var e=Object(m.a)(i.a.mark((function e(a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.auth().createUserWithEmailAndPassword(t.email,t.password);case 3:if(!(r=e.sent).user){e.next=12;break}return c={email:t.email,firstName:t.firstName,id:r.user.uid,createdAt:_.firestore.FieldValue.serverTimestamp()},e.next=8,_.firestore().collection("/users").doc(r.user.uid).set(c);case 8:return e.next=10,r.user.sendEmailVerification();case 10:a({type:"NEED_VERIFICATION"}),a({type:"SET_USER",payload:c});case 12:e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),n(),a({type:"SET_ERROR",payload:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()))}},C&&r.a.createElement(S,{type:"danger",msg:C}),r.a.createElement(j,{name:"firstName",value:a,onChange:function(e){return c(e.currentTarget.value)},placeholder:"First Name",label:"First name",type:"text"}),r.a.createElement(j,{name:"email",value:d,onChange:function(e){return p(e.currentTarget.value)},placeholder:"Email address",label:"Email address",type:"text"}),r.a.createElement(j,{name:"password",value:v,onChange:function(e){return b(e.currentTarget.value)},placeholder:"Password",label:"Password",type:"password"}),r.a.createElement(L,{text:y?"Loading...":"Sign Up",className:"is-primary is-fullwidth mt-5",disabled:y})))))},I=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),d=o[0],p=o[1],f=Object(n.useState)(!1),E=Object(u.a)(f,2),v=E[0],b=E[1],g=Object(s.b)(),y=Object(s.c)((function(e){return e.auth})).error;Object(n.useEffect)((function(){return function(){y&&g(k(""))}}),[y,g]);return r.a.createElement("div",{className:"signup__container"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"has-text-centered is-size-2 mb-3"},"Sign In"),r.a.createElement("form",{className:"form",onSubmit:function(e){var t,n;e.preventDefault(),b(!0),g((t={email:a,password:d},n=function(){return b(!1)},function(){var e=Object(m.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.auth().signInWithEmailAndPassword(t.email,t.password);case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),n(),a(k(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()))}},y&&r.a.createElement(S,{type:"danger",msg:y}),r.a.createElement(j,{name:"email",value:a,onChange:function(e){return c(e.currentTarget.value)},placeholder:"Email address",label:"Email address",type:"text"}),r.a.createElement(j,{name:"password",value:d,onChange:function(e){return p(e.currentTarget.value)},placeholder:"Password",label:"Password",type:"password"}),r.a.createElement("p",null,r.a.createElement(h.b,{to:"/forgot-password"},"Forgot Password ?")),r.a.createElement(L,{text:v?"Loading...":"Sign In",className:"is-primary is-fullwidth mt-5",disabled:v})))))},A=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),d=o[0],p=o[1],_=Object(s.b)(),f=Object(s.c)((function(e){return e.auth})),E=f.error,v=f.success;Object(n.useEffect)((function(){return function(){E&&_(k("")),v&&_(C(""))}}),[E,v,_]);var b=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.next=4,_(O(a,"Email Sent!"));case 4:p(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"has-text-centered is-size-2 mb-3"},"Reset Password"),r.a.createElement("form",{className:"form",onSubmit:b},E&&r.a.createElement(S,{type:"danger",msg:E}),v&&r.a.createElement(S,{type:"success",msg:v}),r.a.createElement(j,{name:"email",value:a,onChange:function(e){return c(e.currentTarget.value)},placeholder:"Email address",label:"Email address",type:"text"}),r.a.createElement(L,{text:d?"Loading...":"Send password reset email",className:"is-primary is-fullwidth mt-5",disabled:d}))))},V=a(10),T=function(){var e=Object(g.g)(),t=Object(s.b)(),a=Object(s.c)((function(e){return e.auth})).authenticated;return r.a.createElement("div",{className:"hp__cont"},r.a.createElement(V.b.h2,{className:"hp__cont__title-1",initial:{y:"100vh"},animate:{y:0},transition:{type:"spring",stiffness:60,delay:.5}},"StockFolio"),r.a.createElement(V.b.h5,{className:"hp__cont__title-2",initial:{y:"100vh"},animate:{y:0},transition:{type:"spring",stiffness:70,delay:.8}},"Welcome to the stockfolio ",r.a.createElement("br",null),"where you can build your very own ",r.a.createElement("br",null),"stock market (mock)  portfolio!"),r.a.createElement(V.b.div,{className:"hp__cont__btn__cont",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5}},a?r.a.createElement(L,{text:"Sign Out",onClick:function(){t(w())}}):r.a.createElement("div",{className:""},r.a.createElement(L,{text:"Sign Up",onClick:function(){return e.push("/signup")},className:""}),r.a.createElement(L,{text:"Sign In",onClick:function(){return e.push("/signin")},className:""}))))},B=a(48),D=a.n(B),F={visible:{opacity:1},hidden:{opacity:0}},R={visible:{y:"200px",opacity:1,transition:{delay:.5}},hidden:{y:"-100vh",opacity:0}},H=function(e){var t=e.showModal,a=Object(s.c)((function(e){return e.auth})),c=a.user,l=a.success,o=Object(s.b)();return Object(n.useEffect)((function(){l&&o(C(""))}),[l,o]),r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(V.b.div,{className:"backdrop",variants:F,initial:"hidden",animate:"visible",exit:"hidden"},r.a.createElement(V.b.div,{className:"modal-1",variants:R},r.a.createElement("p",{className:"modal-1__text"},null===c||void 0===c?void 0:c.firstName,", you need to verify your email address! ",r.a.createElement("br",null),"If verified please refresh."))))},P=function(e){var t=e.showNiftyModal,a=e.setNiftyShowModal,n=e.users;return r.a.createElement(V.a,null,t&&r.a.createElement(V.b.div,{className:"modal-2",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},r.a.createElement(V.b.div,{className:"modal-2__cont",initial:{y:50},animate:{y:0},exit:{y:15}},r.a.createElement(V.b.div,{onClick:function(){return a(!1)},className:"modal-2__cont__btn"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"modal-2__cont__btn-x"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{"color-interpolation-filters":"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"#fff",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))),r.a.createElement(V.b.div,{className:"modal-2__cont__info"},r.a.createElement("p",{className:"item"},"Advances : ",n.advances),r.a.createElement("p",{className:"item"},"Declines : ",n.declines),r.a.createElement("p",{className:"item"},"Year High : ",n.latestData[0].yHigh),r.a.createElement("p",{className:"item"},"Year Low : ",n.latestData[0].yLow),r.a.createElement("p",{className:"item"},"Day High : ",n.latestData[0].high),r.a.createElement("p",{className:"item"},"Day Low : ",n.latestData[0].low),r.a.createElement("p",{className:"item"},"Year Returns : ",n.latestData[0].yCls),r.a.createElement("p",{className:"item"},"Open : ",n.latestData[0].open)))))},z=function(e){var t=e.showStockModal,a=e.setStockShowModal,n=e.data;return r.a.createElement(V.a,null,t&&r.a.createElement(V.b.div,{className:"modal-2",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},r.a.createElement(V.b.div,{className:"modal-2__cont",initial:{y:50},animate:{y:0},exit:{y:15}},r.a.createElement(V.b.div,{onClick:function(){return a(!1)},className:"modal-2__cont__btn"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"modal-2__cont__btn-x"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{"color-interpolation-filters":"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"#fff",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))),r.a.createElement(V.b.div,{className:"modal-2__cont__info"},r.a.createElement("p",{className:"modal-2__cont__info__item"},n.iislPtsChange>0?r.a.createElement("p",null,"One day return (Pts) : ",r.a.createElement("span",{style:{color:"green"}},n.iislPtsChange)):r.a.createElement("p",null,"One day return (Pts) : ",r.a.createElement("span",{style:{color:"red"}},n.iislPtsChange))),r.a.createElement("p",{className:"modal-2__cont__info__item"},n.iislPtsChange>0?r.a.createElement("p",null," One day return (%) : ",r.a.createElement("span",{style:{color:"green"}},n.iislPercChange,"%")):r.a.createElement("p",null," One day return (%) : ",r.a.createElement("span",{style:{color:"red"}},n.iislPercChange,"%"))),r.a.createElement("p",{className:"modal-2__cont__info__item"},"High : ",n.high),r.a.createElement("p",{className:"modal-2__cont__info__item"},"Low : ",n.low),r.a.createElement("p",{className:"modal-2__cont__info__item"},"52 week high : ",n.wkhi),r.a.createElement("p",{className:"modal-2__cont__info__item"},"52 week low : ",n.wklo),r.a.createElement("p",{className:"modal-2__cont__info__item"},"Trd Vol (shares) : ",n.trdVol),r.a.createElement("p",{className:"modal-2__cont__info__item"},"Trd Vol (lacs) : ",n.ntP)))))},G=a(49),U=a.n(G);a(35);!function(e){e.ADD="ADD",e.DELETE="DELETE"}(p||(p={}));var Z=function(e){return{type:p.ADD,payload:e}},W=function(e){return{type:p.DELETE,payload:e}},Y=function(e){var t=e.data,a=e.symbol,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],m=Object(s.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stocks__btnCont"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:"stocks__btnCont__btn",onClick:function(){return m(Z(t))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"currentColor",stroke:"#fff",fillRule:"nonzero",d:"M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"stocks__btnCont__btn",onClick:function(){return m(W(a))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{fill:"#fff",d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24",className:"stocks__btnCont__btn",onClick:function(){return i((function(e){return!e}))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"#fff",d:"M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"}))),r.a.createElement(z,{data:t,showStockModal:o,setStockShowModal:i}))},q=function(e){var t=e.data,a=Object(n.useState)(!1),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(s.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stocks__btnCont"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:"stocks__btnCont__btn",onClick:function(){return i(Z(t))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"currentColor",stroke:"#fff",fillRule:"nonzero",d:"M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"stocks__btnCont__btn",onClick:function(){return i(W(t.symbol))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{fill:"#fff",d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24",className:"stocks__btnCont__btn",onClick:function(){return o((function(e){return!e}))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"#fff",d:"M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"}))),r.a.createElement(z,{data:t,showStockModal:l,setStockShowModal:o}))},J=function(e){var t=e.users,a=Object(n.useState)(!1),c=Object(u.a)(a,2),l=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stocks__btnCont"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24",className:"stocks__btnCont__btn",onClick:function(){return s((function(e){return!e}))}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"id-of-your-filter"},r.a.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:"0 0 0 0 0 0 0.50 0 0 0 0 0 0.50 0 0 0 0 0 1 0 "})),"..."),r.a.createElement("path",{fill:"#fff",d:"M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"}))),r.a.createElement(P,{users:t,showNiftyModal:l,setNiftyShowModal:s}))},K=function(e){var t=e.data;e.key;return r.a.createElement("div",{className:"stockItem__cont"},r.a.createElement("div",{className:"stockItem__cont-1"},r.a.createElement("p",{className:"stockItem__cont-1__secA"},t.symbol),r.a.createElement("div",{className:"stockItem__cont-1__secB"},r.a.createElement("p",{className:"stockItem__cont-1__secB-1"},void 0===t.dayEndClose?"Previous Close: ".concat(t.dayEndClose):"Previous Close : N/A"),r.a.createElement("p",{className:"stockItem__cont-1__secB-2"},"Open: ",t.open)),r.a.createElement("div",{className:"stockItem__cont-1__secC"},t.ptsC>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stockItem__cont-1__secC__pts"},r.a.createElement("p",{className:"triangle--green"},"\u25b2"),r.a.createElement("p",{style:{color:"green"}},t.ptsC)),r.a.createElement("p",{style:{color:"green"},className:"stockItem__cont-1__secC__per"},"(",t.per,"%)")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stockItem__cont-1__secC__pts"},r.a.createElement("p",{className:"triangle--red"},"\u25b2"),r.a.createElement("p",{style:{color:"red"}},t.ptsC)),r.a.createElement("p",{style:{color:"red"},className:"stockItem__cont-1__secC__per"},"(",t.per,"%)")))),r.a.createElement("div",{className:"stockItem__cont-2"},r.a.createElement("p",{className:"stockItem__cont-2__secA"},t.ltP),r.a.createElement("div",{className:"stockItem__cont-2__secB"},t.yPC>0?r.a.createElement("p",null,"52 weeks return : ",r.a.createElement("span",{style:{color:"green"}},t.yPC)):r.a.createElement("p",null,"52 weeks return : ",r.a.createElement("span",{style:{color:"red"}},t.yPC)))),r.a.createElement(q,{data:t}))},Q=function(e){var t=e.users;return console.log(t.data.map((function(e){return e}))),r.a.createElement("div",{className:"stocks"},r.a.createElement("div",{className:"stocks__nifty__cont"},r.a.createElement("div",{className:"stocks__nifty__cont-1"},r.a.createElement("img",{src:U.a,alt:"NSE",className:"stocks__nifty__cont-1__img"}),r.a.createElement("h1",{className:"stocks__nifty__cont-1__title"},"NIFTY 50"),r.a.createElement("div",{className:"stocks__nifty__cont-1__ticker"},t.latestData[0].ch>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stocks__nifty__cont-1__ticker__ch"},r.a.createElement("p",{className:"triangle--green"},"\u25b2"),r.a.createElement("p",{style:{color:"green"}},t.latestData[0].ch)),r.a.createElement("p",{style:{color:"green"},className:"stocks__nifty__cont-1__ticker__per"},"(",t.latestData[0].per,"%)")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stocks__nifty__cont-1__ticker__ch"},r.a.createElement("p",{className:"triangle--red"},"\u25b2"),r.a.createElement("p",{style:{color:"red"}},t.latestData[0].ch)),r.a.createElement("p",{style:{color:"red"},className:"stocks__nifty__cont-1__ticker__per"},"(",t.latestData[0].per,"%)")))),r.a.createElement("div",{className:"stocks__nifty__cont-2"},r.a.createElement("p",{className:"stocks__nifty__cont-2__ltp"},t.latestData[0].ltp),r.a.createElement("p",{className:"stocks__nifty__cont-2__time"},"Last Updated: ",t.time)),r.a.createElement(J,{users:t})),r.a.createElement("div",{className:"stocks__stockItem__cont"},t.data.map((function(e,t){return r.a.createElement(K,{data:e,key:t})}))))},X=function(e){var t=e.list,a=e.symbol;return r.a.createElement("div",{className:"stockItem__cont"},r.a.createElement("div",{className:"stockItem__cont-1"},r.a.createElement("p",{className:"stockItem__cont-1__secA"},t.symbol),r.a.createElement("div",{className:"stockItem__cont-1__secB"},r.a.createElement("p",{className:"stockItem__cont-1__secB-1"},void 0===t.dayEndClose?"Previous Close: ".concat(t.dayEndClose):"Previous Close : N/A"),r.a.createElement("p",{className:"stockItem__cont-1__secB-2"},"Open: ",t.open)),r.a.createElement("div",{className:"stockItem__cont-1__secC"},t.ptsC>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stockItem__cont-1__secC__pts"},r.a.createElement("p",{className:"triangle--green"},"\u25b2"),r.a.createElement("p",{style:{color:"green"}},t.ptsC)),r.a.createElement("p",{style:{color:"green"},className:"stockItem__cont-1__secC__per"},"(",t.per,"%)")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stockItem__cont-1__secC__pts"},r.a.createElement("p",{className:"triangle--red"},"\u25b2"),r.a.createElement("p",{style:{color:"red"}},t.ptsC)),r.a.createElement("p",{style:{color:"red"},className:"stockItem__cont-1__secC__per"},"(",t.per,"%)")))),r.a.createElement("div",{className:"stockItem__cont-2"},r.a.createElement("p",{className:"stockItem__cont-2__secA"},t.ltP),r.a.createElement("div",{className:"stockItem__cont-2__secB"},t.yPC>0?r.a.createElement("p",null,"52 weeks return : ",r.a.createElement("span",{style:{color:"green"}},t.yPC)):r.a.createElement("p",null,"52 weeks return : ",r.a.createElement("span",{style:{color:"red"}},t.yPC)))),r.a.createElement(Y,{data:t,symbol:a}))},$=function(e){var t=e.user,a=Object(s.c)((function(e){return e.list})).list;return r.a.createElement(r.a.Fragment,null,a.length>0?r.a.createElement("div",{className:"pf__cont"},r.a.createElement("div",{className:"pf__cont__secA"},r.a.createElement("h1",null," ",t.firstName,", Welcome to StockFolio!")),r.a.createElement("div",{className:"pf__cont__secB"},a.map((function(e,t){return r.a.createElement(X,{list:e,symbol:e.symbol,key:t})})))):r.a.createElement("div",{className:"pf__cont"},r.a.createElement("div",{className:"pf__cont__secA"},r.a.createElement("h1",null," ",t.firstName,", Welcome to StockFolio!")),r.a.createElement("div",{className:"pf__cont__secB"},r.a.createElement("span",null,"You do not own any stocks on our platform. To start your portfolio add upto 10 stocks according to your interest!"))))},ee=function(){var e=Object(s.c)((function(e){return e.auth})),t=e.user,a=e.needVerification,c=e.success,l=Object(s.b)(),o=Object(n.useState)(!0),i=Object(u.a)(o,2),m=i[0],d=i[1],p=Object(n.useState)(void 0),_=Object(u.a)(p,2),f=_[0],E=_[1];return Object(n.useEffect)((function(){c&&l(C(""))}),[c,l]),Object(n.useLayoutEffect)((function(){D.a.get("http://localhost:4000/nse/get_index_stocks?symbol=nifty",{headers:{"Content-Type":"application/json"}}).then((function(e){E(e.data)}))}),[]),void 0!==f&&console.log(t),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(H,{showModal:m,setShowModal:d}),r.a.createElement("div",{className:"db"},r.a.createElement("div",{className:"db__cont-1"},f&&r.a.createElement(Q,{users:f})),r.a.createElement("div",{className:"db__cont-2"},r.a.createElement($,{users:f,user:t}))))},te=a(29),ae=function(e){var t=e.component,a=e.showModal,n=e.setShowModal,c=Object(te.a)(e,["component","showModal","setShowModal"]),l=Object(s.c)((function(e){return e.auth})).authenticated;return r.a.createElement(g.b,Object.assign({},c,{render:function(e){return l?r.a.createElement(t,Object.assign({},e,{showModal:a,setShowModal:n})):r.a.createElement(g.a,{to:"/signin"})}}))},ne=function(e){var t=e.component,a=Object(te.a)(e,["component"]),n=Object(s.c)((function(e){return e.auth})).authenticated;return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(g.a,{to:"/dashboard"}):r.a.createElement(t,e)}}))},re=function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"custom-loader"}))},ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).loading,a=Object(n.useState)(!0),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){e(N(!0));var t=_.auth().onAuthStateChanged(function(){var t=Object(m.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return e(N(!0)),t.next=4,e(y(a.uid));case 4:a.emailVerified||e((function(e){e({type:"NEED_VERIFICATION"})}));case 5:e(N(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return function(){t()}}),[e]),t?r.a.createElement(re,null):r.a.createElement(h.a,null,r.a.createElement(b,null,r.a.createElement(x,null),r.a.createElement(g.d,null,r.a.createElement(ne,{path:"/",component:T,exact:!0}),r.a.createElement(ne,{path:"/signup",component:M,exact:!0}),r.a.createElement(ne,{path:"/signin",component:I,exact:!0}),r.a.createElement(ne,{path:"/forgot-password",component:A,exact:!0}),r.a.createElement(ae,{path:"/dashboard",component:ee,showModal:l,setShowModal:o,exact:!0}))))},le=a(20),se=a(50),oe=a(51),ie=a(7),me={user:null,authenticated:!1,loading:!1,error:"",needVerification:!1,success:""},ue=a(36),de={list:[]},pe=Object(le.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(ie.a)(Object(ie.a)({},e),{},{user:t.payload,authenticated:!0});case"SET_LOADING":return Object(ie.a)(Object(ie.a)({},e),{},{loading:t.payload});case"SIGN_OUT":return Object(ie.a)(Object(ie.a)({},e),{},{user:null,authenticated:!1,loading:!1});case"SET_ERROR":return Object(ie.a)(Object(ie.a)({},e),{},{error:t.payload});case"NEED_VERIFICATION":return Object(ie.a)(Object(ie.a)({},e),{},{needVerification:!0});case"SET_SUCCESS":return Object(ie.a)(Object(ie.a)({},e),{},{success:t.payload});default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ADD:if(e.list.length>9)return Object(ie.a)({},e);for(var a=0,n=0;n<e.list.length;n++)e.list[n]===t.payload&&(a+=1);return 0===a?Object(ie.a)(Object(ie.a)({},e),{},{list:[].concat(Object(ue.a)(e.list),[t.payload])}):Object(ie.a)({},e);case p.DELETE:var r=Object(ue.a)(e.list);if(r.length<2){r.splice(t.payload,1);var c=r;return Object(ie.a)(Object(ie.a)({},e),{},{list:c})}for(var l=0;l<r.length;l++)if(r[l].symbol===t.payload)return r.splice(l,1)[0];return Object(ie.a)(Object(ie.a)({},e),{},{list:r});default:return e}}}),_e=Object(le.createStore)(pe,Object(oe.composeWithDevTools)(Object(le.applyMiddleware)(se.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:_e},r.a.createElement(ce,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e0a6dcc6.chunk.js.map