(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{3962:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return i(4966)}])},4966:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return x}});var s=i(5893),a=i(7294),t=i(1664),o=i(2136);function n(e){return function(e){if(Array.isArray(e)){for(var r=0,i=new Array(e.length);r<e.length;r++)i[r]=e[r];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(){var e=n(o).slice(0,3);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"profile-aside",children:[(0,s.jsxs)("div",{className:"profile-aside__subscribe",children:[(0,s.jsx)("h3",{children:"Stay in touch"}),(0,s.jsx)("div",{className:"box-field",children:(0,s.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email"})}),(0,s.jsx)("button",{type:"submit",className:"btn",children:"subscribe"}),(0,s.jsx)("img",{src:"/assets/img/subscribe-img-decor-sm.png",className:"js-img",alt:""})]}),(0,s.jsxs)("div",{className:"profile-aside__viewed",children:[(0,s.jsx)("h5",{children:"You have viewed"}),e.map((function(e){return(0,s.jsxs)("div",{className:"profile-aside__viewed-item",children:[(0,s.jsx)(t.default,{href:"/product/".concat(e.id),children:(0,s.jsx)("a",{className:"profile-aside__viewed-item-img",children:(0,s.jsx)("img",{src:e.image,className:"js-img",alt:""})})}),(0,s.jsxs)("div",{className:"profile-aside__viewed-item-info",children:[(0,s.jsx)(t.default,{href:"/product/".concat(e.id),children:(0,s.jsx)("a",{className:"profile-aside__viewed-item-title",children:e.name})}),(0,s.jsxs)("span",{className:"profile-aside__viewed-item-price",children:["$",e.price]})]})]},e.id)}))]}),(0,s.jsxs)("div",{className:"profile-aside__discount js-img",style:{backgroundImage:"url('/assets/img/discount-bg-sm.jpg')"},children:[(0,s.jsxs)("div",{className:"profile-aside__discount-title",children:["Get Your",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"50%"})," Off"]}),(0,s.jsx)(t.default,{href:"/shop",children:(0,s.jsx)("a",{className:"btn",children:"get now!"})})]})]})})},c=JSON.parse('[{"date":"Aug 17, 2020","deliveryAddress":"27 Division St, ew York, NY 10002, US.  St, New York, NY 10002, USA","amount":"618.80","status":{"onWay":true},"orderItems":[{"name":"Foundation Beshop","price":"125.95"},{"name":"Hair mask with oat extract","price":"401.90"},{"name":"Spray balm with oat extract","price":"60.95"}]},{"date":"APril 22, 2020","deliveryAddress":"27 Division St, ew York, NY 10002, US.  St, New York, NY 10002, USA","amount":"700.80","status":{"delivered":true},"orderItems":[{"name":"Foundation Beshop","price":"125.95"},{"name":"Hair mask with oat extract","price":"401.90"},{"name":"Spray balm with oat extract","price":"60.95"}]},{"date":"jun 10, 2020","deliveryAddress":"27 Division St, ew York, NY 10002, US.  St, New York, NY 10002, USA","amount":"618.80","status":{"onWay":true},"orderItems":[{"name":"Foundation Beshop","price":"125.95"},{"name":"Hair mask with oat extract","price":"401.90"},{"name":"Spray balm with oat extract","price":"60.95"}]},{"date":"Aug 26, 2020","deliveryAddress":"27 Division St, ew York, NY 10002, US.  St, New York, NY 10002, USA","amount":"88.80","status":{"delivered":true},"orderItems":[{"name":"Foundation Beshop","price":"125.95"},{"name":"Hair mask with oat extract","price":"401.90"},{"name":"Spray balm with oat extract","price":"60.95"}]},{"date":"Aug 12, 2020","deliveryAddress":"27 Division St, ew York, NY 10002, US.  St, New York, NY 10002, USA","amount":"234.80","status":{"delivered":true},"orderItems":[{"name":"Foundation Beshop","price":"125.95"},{"name":"Hair mask with oat extract","price":"401.90"},{"name":"Spray balm with oat extract","price":"60.95"}]}]'),d=function(e){var r=e.order,i=e.index,a=e.onCollapse,t=e.active,o=r.date,n=r.deliveryAddress,l=r.amount,c=r.status,d=r.orderItems;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"profile-orders__item ".concat(t===i&&"active"),children:[(0,s.jsxs)("div",{className:"profile-orders__row",children:[(0,s.jsxs)("div",{className:"profile-orders__col",children:[(0,s.jsx)("span",{className:"profile-orders__col-mob",children:"date"}),(0,s.jsx)("span",{className:"profile-orders__item-date",children:o})]}),(0,s.jsxs)("div",{className:"profile-orders__col",children:[(0,s.jsx)("span",{className:"profile-orders__col-mob",children:"Delivery address"}),(0,s.jsx)("span",{className:"profile-orders__item-addr",children:n})]}),(0,s.jsxs)("div",{className:"profile-orders__col",children:[(0,s.jsx)("span",{className:"profile-orders__col-mob",children:"amount"}),(0,s.jsxs)("span",{className:"profile-orders__item-price",children:["$",l]})]}),(0,s.jsxs)("div",{className:"profile-orders__col",children:[(0,s.jsx)("span",{className:"profile-orders__col-mob",children:"Status"}),(0,s.jsx)("span",{className:"profile-orders__col-".concat(c.delivered?"delivered":"onway"),children:c.onWay?"on it\u2019s way":c.delivered?"DELIVERED":null}),(0,s.jsx)("span",{onClick:function(){return a(i)},className:"profile-orders__col-btn"})]})]}),(0,s.jsx)("div",{className:"profile-orders__content",children:(0,s.jsxs)("ul",{children:[d.map((function(e,r){return(0,s.jsxs)("li",{children:[e.name,(0,s.jsxs)("span",{children:["$",e.price]})]},r)})),(0,s.jsxs)("li",{children:["Payment Methods:",(0,s.jsx)("span",{children:"\u0421redit card: **** **** **** 1633"})]})]})})]})})};function m(e){return function(e){if(Array.isArray(e)){for(var r=0,i=new Array(e.length);r<e.length;r++)i[r]=e[r];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(){var e=(0,a.useState)(-1),r=e[0],i=e[1],t=m(c),o=function(e){i(r===e?-1:e)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"profile-orders",children:[(0,s.jsxs)("div",{className:"profile-orders__row profile-orders__row-head",children:[(0,s.jsx)("div",{className:"profile-orders__col",children:"date"}),(0,s.jsx)("div",{className:"profile-orders__col",children:"Delivery address"}),(0,s.jsx)("div",{className:"profile-orders__col",children:"amount"}),(0,s.jsx)("div",{className:"profile-orders__col",children:"Status"})]}),t.map((function(e,i){return(0,s.jsx)(d,{index:i,onCollapse:o,order:e,active:r},i)}))]})})},u=function(){var e=(0,a.useState)("orders"),r=e[0],i=e[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"profile",children:[(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("div",{className:"profile-content",children:[(0,s.jsx)(l,{}),(0,s.jsx)("div",{className:"profile-main",children:(0,s.jsxs)("div",{className:"tab-wrap",children:[(0,s.jsxs)("ul",{className:"nav-tab-list tabs",children:[(0,s.jsx)("li",{onClick:function(){return i("myInfo")},className:"myInfo"===r?"active":"",children:"My info"}),(0,s.jsx)("li",{onClick:function(){return i("orders")},className:"orders"===r?"active":"",children:"My orders"}),(0,s.jsx)("li",{onClick:function(){return i("wishList")},className:"wishList"===r?"active":"",children:"Wishlist"})]}),(0,s.jsxs)("div",{className:"box-tab-cont",children:["myInfo"===r&&(0,s.jsx)("div",{className:"tab-cont",id:"profile-tab_1",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi, sit vel exercitationem ea veniam quo asperiores corporis dignissimos quod id. Adipisci libero similique a commodi fugiat quibusdam maiores ipsa!"}),"orders"===r&&(0,s.jsx)(p,{}),"wishList"===r&&(0,s.jsx)("div",{className:"tab-cont",id:"profile-tab_3",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore saepe blanditiis omnis. Reprehenderit officia atque facere tempora, neque quaerat et aliquid tempore mollitia, nemo, minima iste placeat cupiditate odio?"})]})]})})]})}),(0,s.jsx)("img",{className:"promo-video__decor js-img",src:"/assets/img/promo-video__decor.jpg",alt:""})]})})},h=i(6731),f=[{label:"Home",path:"/"},{label:"My Profile",path:"/profile"}],x=function(){return(0,s.jsx)(h.Y,{breadcrumb:f,breadcrumbTitle:"My Profile",children:(0,s.jsx)(u,{})})}}},function(e){e.O(0,[994,731,136,774,888,179],(function(){return r=3962,e(e.s=r);var r}));var r=e.O();_N_E=r}]);