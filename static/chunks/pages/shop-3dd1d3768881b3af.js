(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{1004:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return n(2184)}])},2969:function(e,r,n){"use strict";n.d(r,{b:function(){return t}});var i=n(5893),s=n(1664),t=function(e){var r=e.product,n=(e.onAddToWish,e.onAddToCart,e.addedInCart,r.name),t=r.oldPrice,a=r.price,c=r.image,o=(r.isSale,r.isNew,r.id);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"products-item",children:[(0,i.jsxs)("div",{className:"products-item__img",children:[(0,i.jsx)("img",{src:c,className:"js-img",alt:""}),(0,i.jsxs)("div",{className:"products-item__hover",children:[(0,i.jsx)(s.default,{href:"/product/".concat(o),children:(0,i.jsx)("a",{children:(0,i.jsx)("i",{className:"icon-search"})})}),(0,i.jsx)("div",{className:"products-item__hover-options"})]})]}),(0,i.jsxs)("div",{className:"products-item__info",children:[(0,i.jsx)(s.default,{href:"/product/".concat(o),children:(0,i.jsx)("a",{children:(0,i.jsx)("span",{className:"products-item__name",children:n})})}),(0,i.jsxs)("span",{className:"products-item__cost",children:[(0,i.jsx)("span",{children:t&&"RS ".concat(t)}),"RS ".concat(a)]})]})]})})}},4965:function(e,r,n){"use strict";n.d(r,{P:function(){return t}});var i=n(5893);function s(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=function(e){var r=e.paginate;return(0,i.jsxs)("ul",{className:"paging-list",children:[(0,i.jsx)("li",{onClick:function(){return r.prev()},className:"paging-list__item paging-prev",children:(0,i.jsx)("button",{className:"paging-list__link",children:(0,i.jsx)("i",{className:"icon-arrow"})})}),s(Array(r.maxPage)).map((function(e,n){return(0,i.jsx)("li",{onClick:function(){return r.jump(n+1)},className:"paging-list__item ".concat(r.currentPage===n+1&&"active"),children:(0,i.jsx)("button",{className:"paging-list__link",children:n+1})},n)})),(0,i.jsx)("li",{onClick:function(){return r.next()},className:"paging-list__item paging-next",children:(0,i.jsx)("button",{className:"paging-list__link",children:(0,i.jsx)("i",{className:"icon-arrow"})})})]})}},3873:function(e,r,n){"use strict";n.d(r,{x:function(){return s}});var i=n(5893),s=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"subscribe",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("div",{className:"subscribe-form",children:[(0,i.jsx)("div",{className:"subscribe-form__img",children:(0,i.jsx)("img",{src:"/assets/img/subscribe-img.png",className:"js-img",alt:""})}),(0,i.jsxs)("form",{children:[(0,i.jsx)("h3",{children:"Stay in touch"}),(0,i.jsx)("p",{children:"Nourish your skin with toxin-free cosmetic roducts."}),(0,i.jsxs)("div",{className:"box-field__row",children:[(0,i.jsx)("div",{className:"box-field",children:(0,i.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email"})}),(0,i.jsx)("button",{type:"submit",className:"btn",children:"subscribe"})]})]})]})})})})}},1775:function(e,r,n){"use strict";n.d(r,{h:function(){return s}});var i=n(7294),s=function(e,r){var n=(0,i.useState)(1),s=n[0],t=n[1],a=Math.ceil(e.length/r);return{next:function(){t((function(e){return Math.min(e+1,a)}))},prev:function(){t((function(e){return Math.max(e-1,1)}))},jump:function(e){var r=Math.max(1,e);t((function(e){return Math.min(r,a)}))},currentData:function(){var n=(s-1)*r,i=n+r;return e.slice(n,i)},currentPage:s,maxPage:a}}},2184:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return O}});var i=n(5893),s=n(3873),t=n(2654),a=n(7294),c=n(2969);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(r){o(e,r,n[r])}))}return e}function u(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(e){var r=e.products,n=(0,a.useContext)(t.CartContext),s=n.cart,o=n.setCart,d=function(e){var n=null===r||void 0===r?void 0:r.find((function(r){return r.id===e}));o(u(s).concat([l({},n,{quantity:1})]))};return(0,i.jsx)(i.Fragment,{children:r.map((function(e){return(0,i.jsx)(c.b,{addedInCart:Boolean(null===s||void 0===s?void 0:s.find((function(r){return r.id===e.id}))),product:e,onAddToWish:function(e){return console.log(e)},onAddToCart:d},e.id)}))})},h=n(4965),m=n(1775),p=n(2136),f=n(3550),j=n(3658),x=n(1664);function v(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var r=e.aside,n=r.id,s=r.image,t=r.name,a=r.price,c=r.star;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x.default,{href:"/product/".concat(n),children:(0,i.jsxs)("a",{className:"shop-aside__item-product",children:[(0,i.jsx)("div",{className:"shop-aside__item-product-img",children:(0,i.jsx)("img",{src:s,className:"js-img",alt:""})}),(0,i.jsxs)("div",{className:"shop-aside__item-product-info",children:[(0,i.jsx)("span",{className:"shop-aside__item-product-title",children:t}),(0,i.jsxs)("span",{className:"shop-aside__item-product-price",children:["$",a]}),(0,i.jsx)("ul",{className:"star-rating",children:v(Array(c)).map((function(e,r){}))})]})]})})})};function b(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(r){b(e,r,n[r])}))}return e}function _(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=(0,f.ZP.createSliderWithTooltip)(f.ZP.Range),w=[{value:"highToMin",label:"From expensive to cheap"},{value:"minToHigh",label:"From cheap to expensive"}],S=function(){var e=_(p),r=(0,a.useState)(e.sort((function(e,r){return e.price<r.price?1:-1}))),n=r[0],s=r[1],t=(0,a.useState)(_(n)),c=t[0],o=t[1],l=(0,a.useState)({isNew:!1,isSale:!0}),u=l[0],f=l[1];(0,a.useEffect)((function(){o(n)}),[n]),(0,a.useEffect)((function(){if(u.isNew&&u.isSale){var e=n.filter((function(e){return!0===e.isNew&&!0===e.isSale}));o(e)}else if(u.isNew&&!u.isSale){var r=n.filter((function(e){return!0===e.isNew}));o(r)}else if(u.isSale&&!u.isNew){var i=n.filter((function(e){return!0===e.isSale}));o(i)}else o(_(n))}),[u,n]);var x=_(p).slice(0,3),v=_(p).slice(3,6),b=(0,m.h)(c,9);return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"shop",children:[(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("div",{className:"shop-content",children:[(0,i.jsxs)("div",{className:"shop-aside",children:[(0,i.jsxs)("div",{className:"box-field box-field__search",children:[(0,i.jsx)("input",{type:"search",className:"form-control",placeholder:"Search"}),(0,i.jsx)("i",{className:"icon-search"})]}),(0,i.jsxs)("div",{className:"shop-aside__item",children:[(0,i.jsx)("span",{className:"shop-aside__item-title",children:"Categories"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"#",children:["Make up ",(0,i.jsx)("span",{children:"(37)"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"#",children:["SPA ",(0,i.jsx)("span",{children:"(162)"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"#",children:["Perfume ",(0,i.jsx)("span",{children:"(153)"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"#",children:["Nails ",(0,i.jsx)("span",{children:"(86)"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"#",children:["Skin care ",(0,i.jsx)("span",{children:"(48)"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"#",children:["Hair care ",(0,i.jsx)("span",{children:"(54)"})]})})]})]}),(0,i.jsxs)("div",{className:"shop-aside__item",children:[(0,i.jsx)("span",{className:"shop-aside__item-title",children:"Price"}),(0,i.jsx)("div",{className:"range-slider",children:(0,i.jsx)(y,{min:0,max:20,defaultValue:[0,20],tipFormatter:function(e){return"".concat(e,"$")},allowCross:!1,tipProps:{placement:"bottom",prefixCls:"rc-slider-tooltip"}})})]}),(0,i.jsxs)("div",{className:"shop-aside__item",children:[(0,i.jsx)("span",{className:"shop-aside__item-title",children:"You have viewed"}),x.map((function(e){return(0,i.jsx)(g,{aside:e},e.id)}))]}),(0,i.jsxs)("div",{className:"shop-aside__item",children:[(0,i.jsx)("span",{className:"shop-aside__item-title",children:"Top 3 for today"}),v.map((function(e){return(0,i.jsx)(g,{aside:e},e.id)}))]})]}),(0,i.jsxs)("div",{className:"shop-main",children:[(0,i.jsxs)("div",{className:"shop-main__filter",children:[(0,i.jsxs)("div",{className:"shop-main__checkboxes",children:[(0,i.jsxs)("label",{className:"checkbox-box",children:[(0,i.jsx)("input",{checked:u.isSale,onChange:function(){return f(N({},u,{isSale:!u.isSale}))},type:"checkbox"}),(0,i.jsx)("span",{className:"checkmark"}),"SALE"]}),(0,i.jsxs)("label",{className:"checkbox-box",children:[(0,i.jsx)("input",{checked:u.isNew,onChange:function(){return f(N({},u,{isNew:!u.isNew}))},type:"checkbox"}),(0,i.jsx)("span",{className:"checkmark"}),"NEW"]})]}),(0,i.jsx)("div",{className:"shop-main__select",children:(0,i.jsx)(j.Z,{options:w,className:"react-dropdown",onChange:function(r){return function(r){if("highToMin"===r){var n=e.sort((function(e,r){return e.price<r.price?1:-1}));s(n)}if("minToHigh"===r){var i=e.sort((function(e,r){return e.price>r.price?1:-1}));s(i)}}(r.value)},value:w[0]})})]}),(0,i.jsx)("div",{className:"shop-main__items",children:(0,i.jsx)(d,{products:null===b||void 0===b?void 0:b.currentData()})}),(0,i.jsx)(h.P,{paginate:b})]})]})}),(0,i.jsx)("img",{className:"promo-video__decor js-img",src:"/assets/img/promo-video__decor.jpg",alt:""}),(0,i.jsx)("img",{className:"shop-decor js-img",src:"/assets/img/shop-decor.jpg",alt:""})]})})},A=n(6731),k=[{label:"Home",path:"/"},{label:"Shop",path:"/shop"}],O=function(){return(0,i.jsxs)(A.Y,{breadcrumb:k,breadcrumbTitle:"Shop",children:[(0,i.jsx)(S,{}),(0,i.jsx)(s.x,{})]})}}},function(e){e.O(0,[994,116,122,731,136,774,888,179],(function(){return r=1004,e(e.s=r);var r}));var r=e.O();_N_E=r}]);