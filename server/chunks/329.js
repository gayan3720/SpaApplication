"use strict";
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 6329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ Categories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Category/Categories/Card/Card.jsx


const Card = ({ category , isPage  })=>{
    const { name , image , description  } = category;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: !isPage ? `/services` : ``,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "top-categories__item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    className: "js-img",
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top-categories__item-hover",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: name
                        }),
                        isPage && /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            children: description
                        }),
                        !isPage && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Browse Services -"
                        }),
                        !isPage && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-arrow-lg"
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/Category/Categories/Categories.jsx


const Categories = ({ categories , isPage  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                category: category,
                isPage: isPage
            }, category.categoryId)
        )
    }));
};


/***/ })

};
;