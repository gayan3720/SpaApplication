"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{5108:function(e,n,t){t.d(n,{A:function(){return k}});var a=t(5893),r=t(8509),i=t(7294),s=function(){var e=(0,i.useState)(0),n=e[0],t=e[1],a=(0,i.useState)(0),r=a[0],s=a[1],c=function(){t(window.innerWidth),s(window.innerHeight)};return(0,i.useEffect)((function(){return c(),window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),[n,r]},c="/assets/img/header-logo.ico",o=[{name:"Home",path:"/"},{name:"About us",path:"/about"},{name:"Services",path:"/services"},{name:"Product",path:"/product"},{name:"contact",path:"/contact"}],l=t(1664),u=t(2654),h=t(1163);function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(t.push(s.value),!n||t.length!==n);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var n=e.navItem,t=(0,h.useRouter)(),r=(0,i.useState)(!1),c=r[0],o=r[1],u=d(s(),2),m=u[0];u[1];return(0,i.useEffect)((function(){m>768&&o(!1)}),[m]),(0,a.jsx)("ul",{className:"header-nav",children:n.map((function(e){return(0,a.jsxs)("li",{onClick:function(){e.subNav&&o(!c)},children:[(0,a.jsx)(l.default,{href:e.path,children:(0,a.jsx)("a",{className:e.path===t.pathname?"active":"",children:e.name})}),e.subNav&&(0,a.jsx)("ul",{className:c?"active":"",children:e.subNav.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{href:e.path,children:(0,a.jsx)("a",{children:e.name})})},e.path)}))})]},e.path)}))})};function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(t.push(s.value),!n||t.length!==n);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){(0,i.useContext)(u.CartContext).cart;var e=(0,i.useState)(!0),n=(e[0],e[1],(0,i.useState)(!1)),t=n[0],h=n[1],d=(0,i.useState)(!1),f=d[0],j=d[1],x=p(s(),2),g=x[0];x[1];(0,i.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}));var v=function(){var e=window.scrollY;h(e>10)};return(0,i.useEffect)((function(){f&&g<767?(0,r.Qp)(document):(0,r.tG)(document)}),[f,g]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("header",{className:"header",children:(0,a.jsxs)("div",{className:"header-content ".concat(t?"fixed":""),children:[(0,a.jsx)("div",{className:"header-logo",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:c,alt:""})})})}),(0,a.jsx)("div",{style:{right:f?0:-360},className:"header-box",children:(0,a.jsx)(m,{navItem:o})}),(0,a.jsx)("div",{onClick:function(){return j(!f)},className:f?"btn-menu js-btn-menu active":"btn-menu js-btn-menu",children:[1,2,3].map((function(e){return(0,a.jsx)("span",{children:"\xa0"},e)}))})]})})})},j=function(e){var n=e.insta,t=n.image,r=n.link;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("a",{href:r,className:"insta-photo",children:[(0,a.jsx)("img",{src:t,className:"js-img",alt:""}),(0,a.jsx)("div",{className:"insta-photo__hover",children:(0,a.jsx)("i",{className:"icon-insta"})})]})})},x=[{image:"/assets/img/insta-photo1.jpg",link:"#/",id:"1"},{image:"/assets/img/insta-photo2.jpg",link:"#/",id:"2"},{image:"/assets/img/insta-photo3.jpg",link:"#/",id:"3"},{image:"/assets/img/insta-photo4.jpg",link:"#/",id:"4"},{image:"/assets/img/insta-photo5.jpg",link:"#/",id:"5"},{image:"/assets/img/insta-photo6.jpg",link:"#/",id:"6"}],g=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"insta-photos",children:x.map((function(e){return(0,a.jsx)(j,{insta:e},e.id)}))})})},v=JSON.parse('[{"title":"About","navLinks":[{"name":"About us","path":"/about"},{"name":"Categories","path":"/categories"},{"name":"Shop","path":"/shop"},{"name":"Blog","path":"/blog"},{"name":"FAQ","path":"/faq"},{"name":"Contacts","path":"/contact"}]},{"title":"Categories","navLinks":[{"name":"Make up","path":"/categories"},{"name":"SPA","path":"/categories"},{"name":"Perfume","path":"/categories"},{"name":"Nails","path":"/categories"},{"name":"Skin care","path":"/categories"},{"name":"Hair care","path":"/categories"}]},{"title":"Useful links","navLinks":[{"name":"Careers","path":"/about"},{"name":"Privacy policy","path":"/faq"},{"name":"Terms of use","path":"/about"},{"name":"Support","path":"/blog"},{"name":"Shipping details","path":"/about"},{"name":"Information","path":"/about"}]}]'),b=JSON.parse('[{"icon":"/assets/img/payment1.png"},{"icon":"/assets/img/payment2.png"},{"icon":"/assets/img/payment3.png"},{"icon":"/assets/img/payment4.png"}]'),N=t(5941);function y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=function(){y(v);var e=y(N);y(b);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("footer",{className:"footer",children:(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsxs)("div",{className:"footer-top",children:[(0,a.jsxs)("div",{className:"footer-top__social",children:[(0,a.jsx)("span",{children:"Find us here:"}),(0,a.jsx)("ul",{children:e.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.path,children:(0,a.jsx)("i",{className:e.icon})})},n)}))})]}),(0,a.jsx)("div",{className:"footer-top__logo"}),(0,a.jsx)("div",{className:"footer-top__payments",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/img/footer-logo.svg",className:"js-img",alt:""})})})})]}),(0,a.jsx)("div",{className:"footer-copy",children:(0,a.jsx)("span",{children:"\xa9 All rights reserved. Spark 2024"})})]})})})},k=function(e){var n=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"header",children:(0,a.jsx)(f,{})}),(0,a.jsxs)("main",{className:"content",children:[n,(0,a.jsx)(g,{})]}),(0,a.jsx)("footer",{className:"footer",children:(0,a.jsx)(w,{})})]})}},6731:function(e,n,t){t.d(n,{Y:function(){return l}});var a=t(5893),r=t(1664),i=t(1163),s=t(7294),c=function(e){var n=e.breadcrumb,t=e.title,c=e.description,o=(0,i.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"detail-block detail-block_margin",children:(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsxs)("div",{className:"detail-block__content",children:[(0,a.jsx)("h1",{children:t}),n&&(0,a.jsx)("ul",{className:"bread-crumbs",children:null===n||void 0===n?void 0:n.map((function(e,n){var t=e.path,i=e.label;return(0,a.jsx)(s.Fragment,{children:t===o.asPath?(0,a.jsx)("li",{className:"bread-crumbs__item",children:i}):(0,a.jsx)("li",{className:"bread-crumbs__item",children:(0,a.jsx)(r.default,{href:t,children:(0,a.jsx)("a",{className:"bread-crumbs__link",children:i})})})},n)}))}),c&&(0,a.jsx)("span",{className:"error-descr",children:c})]})})})})},o=t(5108),l=function(e){var n=e.children,t=e.breadcrumb,r=e.breadcrumbTitle,i=e.description;return(0,a.jsxs)(o.A,{children:[(0,a.jsx)(c,{breadcrumb:t,title:r,description:i}),(0,a.jsx)(a.Fragment,{children:n})]})}},5941:function(e){e.exports=JSON.parse('[{"icon":"icon-facebook","path":"#/"},{"icon":"icon-twitter","path":"#/"},{"icon":"icon-insta","path":"#/"},{"icon":"icon-in","path":"#/"}]')}}]);