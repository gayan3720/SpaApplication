(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[737],{5026:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wishlist",function(){return t(2865)}])},5914:function(e,r,t){"use strict";t.d(r,{b:function(){return h}});var n=t(5893),s=t(602),i=t(2654),a=t(7294),c=t(6066),o=t(2969);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function u(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e){var r=e.products,t=(0,a.useContext)(i.CartContext),l=t.cart,h=t.setCart,f=function(e){var t=null===r||void 0===r?void 0:r.find((function(r){return r.id===e}));h(u(l).concat([d({},t,{quantity:1})]))},m={dots:!1,infinite:!1,arrows:!0,speed:300,slidesToShow:4,slidesToScroll:1,prevArrow:(0,n.jsx)(s.R,{}),nextArrow:(0,n.jsx)(s.S,{}),lazyLoad:"progressive",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}}]};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,d({},m,{children:r.map((function(e){return(0,n.jsx)(o.b,{addedInCart:Boolean(null===l||void 0===l?void 0:l.find((function(r){return r.id===e.id}))),product:e,onAddToWish:function(e){return console.log(e)},onAddToCart:f},e.id)}))}))})}},2969:function(e,r,t){"use strict";t.d(r,{b:function(){return i}});var n=t(5893),s=t(1664),i=function(e){var r=e.product,t=(e.onAddToWish,e.onAddToCart,e.addedInCart,r.name),i=r.oldPrice,a=r.price,c=r.image,o=(r.isSale,r.isNew,r.id);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"products-item",children:[(0,n.jsxs)("div",{className:"products-item__img",children:[(0,n.jsx)("img",{src:c,className:"js-img",alt:""}),(0,n.jsxs)("div",{className:"products-item__hover",children:[(0,n.jsx)(s.default,{href:"/product/".concat(o),children:(0,n.jsx)("a",{children:(0,n.jsx)("i",{className:"icon-search"})})}),(0,n.jsx)("div",{className:"products-item__hover-options"})]})]}),(0,n.jsxs)("div",{className:"products-item__info",children:[(0,n.jsx)(s.default,{href:"/product/".concat(o),children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{className:"products-item__name",children:t})})}),(0,n.jsxs)("span",{className:"products-item__cost",children:[(0,n.jsx)("span",{children:i&&"RS ".concat(i)}),"RS ".concat(a)]})]})]})})}},5918:function(e,r,t){"use strict";t.d(r,{o:function(){return o}});var n=t(5893),s=t(5914),i=t(12),a=t(2136);function c(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(e){var r=e.additionalClass,t=c(a).slice(0,6);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{className:"arrivals ".concat(r||""),children:[(0,n.jsx)(i.N,{subTitle:"Our Products",title:"",body:"We provide our own line of ITI-approved products along with widely researched Sri Lankan therapeutic approaches and customary ingredients."}),(0,n.jsx)("div",{className:"products-items",children:(0,n.jsx)(s.b,{products:t})})]})})}},12:function(e,r,t){"use strict";t.d(r,{N:function(){return s}});var n=t(5893),s=function(e){var r=e.subTitle,t=e.title,s=e.body;return(0,n.jsxs)("div",{className:"trending-top",children:[(0,n.jsx)("span",{className:"saint-text",children:r}),(0,n.jsx)("h2",{children:t}),(0,n.jsx)("p",{className:"info-blocks__item-descr",children:s})]})}},602:function(e,r,t){"use strict";t.d(r,{R:function(){return c},S:function(){return o}});var n=t(5893);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=function(e){var r=e.currentSlide,t=(e.slideCount,a(e,["currentSlide","slideCount"]));return(0,n.jsx)("button",i({},t,{id:"prev",className:"slick-arrow slick-prev"+(0===r?" slick-disabled":""),"aria-hidden":"true","aria-disabled":0===r,type:"button",children:(0,n.jsx)("i",{className:"icon icon-arrow"})}))},o=function(e){var r=e.currentSlide,t=e.slideCount,s=a(e,["currentSlide","slideCount"]);return(0,n.jsx)("button",i({},s,{className:"slick-arrow slick-next"+(r===t-1?" slick-disabled":""),"aria-hidden":"true","aria-disabled":r===t-1,type:"button",children:(0,n.jsx)("i",{className:"icon icon-arrow"})}))}},2865:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(5893),s=t(5918),i=t(2136),a=t(1664),c=function(e){var r=e.wish,t=r.name,s=r.image,i=r.id,c=r.isStocked,o=r.productNumber,l=r.price;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"cart-table__row",children:[(0,n.jsxs)("div",{className:"cart-table__col",children:[(0,n.jsx)(a.default,{href:"/product/".concat(i),children:(0,n.jsx)("a",{className:"cart-table__img",children:(0,n.jsx)("img",{src:s,className:"js-img",alt:""})})}),(0,n.jsxs)("div",{className:"cart-table__info",children:[(0,n.jsx)(a.default,{href:"/product/".concat(i),children:(0,n.jsx)("a",{className:"title5",children:t})}),(0,n.jsxs)("span",{className:"cart-table__info-num",children:["SKU: ",o]})]})]}),(0,n.jsx)("div",{className:"cart-table__col",children:(0,n.jsxs)("span",{className:"cart-table__price",children:["$",l]})}),(0,n.jsx)("div",{className:"cart-table__col",children:c?(0,n.jsx)("span",{className:"wishlist-stock",children:"in stock"}):(0,n.jsx)("span",{className:"wishlist-available",children:"not available"})}),(0,n.jsx)("div",{className:"cart-table__col",children:(0,n.jsx)("span",{className:"cart-table__total",children:(0,n.jsx)(a.default,{href:"/product/".concat(i),children:(0,n.jsxs)("a",{className:"blog-item__link",children:["buy now ",(0,n.jsx)("i",{className:"icon-arrow-md"})]})})})})]})})};function o(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(){var e=o(i).slice(0,2);return e[1].isStocked=!1,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"wishlist",children:[(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)("div",{className:"cart-table",children:(0,n.jsxs)("div",{className:"cart-table__box",children:[(0,n.jsxs)("div",{className:"cart-table__row cart-table__row-head",children:[(0,n.jsx)("div",{className:"cart-table__col",children:"Product"}),(0,n.jsx)("div",{className:"cart-table__col",children:"Price"}),(0,n.jsx)("div",{className:"cart-table__col",children:"status"}),(0,n.jsx)("div",{className:"cart-table__col",children:"Add to cart"})]}),e.map((function(e){return(0,n.jsx)(c,{wish:e},e.id)}))]})}),(0,n.jsxs)("div",{className:"wishlist-buttons",children:[(0,n.jsx)("a",{href:"#",className:"btn btn-grey",children:"clear Wishlist"}),(0,n.jsx)(a.default,{href:"/shop",children:(0,n.jsx)("a",{className:"btn",children:"go shopping"})})]})]}),(0,n.jsx)("img",{className:"promo-video__decor js-img","data-src":"./assets/img/promo-video__decor.jpg",alt:""})]})})},d=t(6731),u=[{label:"Home",path:"/"},{label:"Wishlist",path:"/wishlist"}],h=function(){return(0,n.jsxs)(d.Y,{breadcrumb:u,breadcrumbTitle:"Wishlist",children:[(0,n.jsx)(l,{}),(0,n.jsx)(s.o,{})]})}}},function(e){e.O(0,[994,116,66,731,136,774,888,179],(function(){return r=5026,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
