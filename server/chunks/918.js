"use strict";
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ MostViewed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Product_Products_ProductsCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5914);
/* harmony import */ var components_shared_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var data_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2136);




const MostViewed = ({ additionalClass  })=>{
    const mostViewed = [
        ...data_product_product__WEBPACK_IMPORTED_MODULE_3__
    ].slice(0, 6);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: `arrivals ${additionalClass ? additionalClass : ''}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_2__/* .SectionTitle */ .N, {
                    subTitle: "Our Products",
                    title: "",
                    body: "We provide our own line of ITI-approved products along with widely researched Sri Lankan therapeutic approaches and customary ingredients."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-items",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Product_Products_ProductsCarousel__WEBPACK_IMPORTED_MODULE_1__/* .ProductsCarousel */ .b, {
                        products: mostViewed
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;