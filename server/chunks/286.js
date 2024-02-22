"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 250:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Advantage

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/shared/Advantage/Card/Card.jsx

const Card_Card = ({ advantage  })=>{
    const { icon , title , body  } = advantage;
    return(/*#__PURE__*/ _jsxs("div", {
        className: "advantages-item",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "advantages-item__icon",
                children: /*#__PURE__*/ _jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ _jsx("h4", {
                children: title
            }),
            /*#__PURE__*/ _jsx("p", {
                children: body
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/data/advantage/advantage.json
const advantage_namespaceObject = [];
;// CONCATENATED MODULE: ./src/components/shared/Advantage/Advantage.jsx



const Advantage = ()=>{
    const advantages = [
        ...advantagesData
    ];
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "advantages",
            children: /*#__PURE__*/ _jsx("div", {
                className: "wrapper",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "advantages-items",
                    children: advantages.map((advantage, index)=>/*#__PURE__*/ _jsx(Card, {
                            advantage: advantage
                        }, index)
                    )
                })
            })
        })
    }));
};


/***/ }),

/***/ 299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ PromoVideo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PromoVideo = ({ play , videoUrl , onVideoPlay , image  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: image,
                className: "js-img",
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                autoPlay: true,
                src: videoUrl,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            }),
            !play && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "info-blocks__item-img-overlay",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Promotion video"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: onVideoPlay,
                        className: "info-blocks__item-img-play",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/img/play-btn.png",
                            className: "js-img",
                            alt: ""
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;