"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 5108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(5782);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/utils/windowSize/windowSize.jsx

const useWindowSize = ()=>{
    const { 0: width , 1: setWidth  } = (0,external_react_.useState)(0);
    const { 0: height , 1: setHeight  } = (0,external_react_.useState)(0);
    const handleWindowResize = ()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    (0,external_react_.useEffect)(()=>{
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return ()=>window.removeEventListener('resize', handleWindowResize)
        ;
    }, []);
    return [
        width,
        height
    ];
};
/* harmony default export */ const windowSize = (useWindowSize);

;// CONCATENATED MODULE: ./src/data/data.header.js
const header = {
    logo: '/assets/img/header-logo.ico'
};
const navItem = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About us',
        path: '/about'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Product',
        path: '/product'
    },
    {
        name: 'contact',
        path: '/contact'
    }, 
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(2654);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/shared/Header/Nav/Nav.jsx





const Nav = ({ navItem  })=>{
    const router = (0,router_.useRouter)();
    const { 0: sub1 , 1: setSub  } = (0,external_react_.useState)(false);
    const [height, width] = windowSize();
    (0,external_react_.useEffect)(()=>{
        if (height > 768) {
            setSub(false);
        }
    }, [
        height
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "header-nav",
        children: navItem.map((nav)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                onClick: ()=>{
                    nav.subNav ? setSub(!sub1) : '';
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: nav.path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: nav.path === router.pathname ? 'active' : '',
                            children: nav.name
                        })
                    }),
                    nav.subNav && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: sub1 ? 'active' : '',
                        children: nav.subNav.map((sub)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: sub.path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: sub.name
                                    })
                                })
                            }, sub.path)
                        )
                    })
                ]
            }, nav.path)
        )
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Header/Header.jsx








const Header = ()=>{
    const { cart  } = (0,external_react_.useContext)(_app.CartContext);
    const { 0: promo , 1: setPromo  } = (0,external_react_.useState)(true);
    const { 0: fixedNav , 1: setFixedNav  } = (0,external_react_.useState)(false);
    const { 0: openMenu , 1: setOpenMenu  } = (0,external_react_.useState)(false);
    const [height, width] = windowSize();
    // For Fixed nav
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('scroll', isSticky);
        return ()=>{
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = ()=>{
        const scrollTop = window.scrollY;
        if (scrollTop > 10) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (openMenu) {
            if (height < 767) {
                (0,external_body_scroll_lock_.disableBodyScroll)(document);
            } else {
                (0,external_body_scroll_lock_.enableBodyScroll)(document);
            }
        } else {
            (0,external_body_scroll_lock_.enableBodyScroll)(document);
        }
    }, [
        openMenu,
        height
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "header",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `header-content ${fixedNav ? 'fixed' : ''}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: header.logo,
                                    alt: ""
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            right: openMenu ? 0 : -360
                        },
                        className: "header-box",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                            navItem: navItem
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setOpenMenu(!openMenu)
                        ,
                        className: openMenu ? 'btn-menu js-btn-menu active' : 'btn-menu js-btn-menu',
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "\xa0"
                            }, i)
                        )
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Insta/Card/Card.jsx

const Card = ({ insta  })=>{
    const { image , link  } = insta;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: link,
            className: "insta-photo",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    className: "js-img",
                    alt: ""
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "insta-photo__hover",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon-insta"
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Insta/Insta.jsx


const instaData = [
    {
        image: '/assets/img/insta-photo1.jpg',
        link: '#/',
        id: '1'
    },
    {
        image: '/assets/img/insta-photo2.jpg',
        link: '#/',
        id: '2'
    },
    {
        image: '/assets/img/insta-photo3.jpg',
        link: '#/',
        id: '3'
    },
    {
        image: '/assets/img/insta-photo4.jpg',
        link: '#/',
        id: '4'
    },
    {
        image: '/assets/img/insta-photo5.jpg',
        link: '#/',
        id: '5'
    },
    {
        image: '/assets/img/insta-photo6.jpg',
        link: '#/',
        id: '6'
    }, 
];
const Insta = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "insta-photos",
            children: instaData.map((insta)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                    insta: insta
                }, insta.id)
            )
        })
    }));
};

;// CONCATENATED MODULE: ./src/data/footer/footerNav.json
const footerNav_namespaceObject = JSON.parse('[{"title":"About","navLinks":[{"name":"About us","path":"/about"},{"name":"Categories","path":"/categories"},{"name":"Shop","path":"/shop"},{"name":"Blog","path":"/blog"},{"name":"FAQ","path":"/faq"},{"name":"Contacts","path":"/contact"}]},{"title":"Categories","navLinks":[{"name":"Make up","path":"/categories"},{"name":"SPA","path":"/categories"},{"name":"Perfume","path":"/categories"},{"name":"Nails","path":"/categories"},{"name":"Skin care","path":"/categories"},{"name":"Hair care","path":"/categories"}]},{"title":"Useful links","navLinks":[{"name":"Careers","path":"/about"},{"name":"Privacy policy","path":"/faq"},{"name":"Terms of use","path":"/about"},{"name":"Support","path":"/blog"},{"name":"Shipping details","path":"/about"},{"name":"Information","path":"/about"}]}]');
;// CONCATENATED MODULE: ./src/data/footer/payment.json
const payment_namespaceObject = JSON.parse('[{"icon":"/assets/img/payment1.png"},{"icon":"/assets/img/payment2.png"},{"icon":"/assets/img/payment3.png"},{"icon":"/assets/img/payment4.png"}]');
// EXTERNAL MODULE: ./src/data/social/index.json
var social = __webpack_require__(5941);
;// CONCATENATED MODULE: ./src/components/shared/Footer/NavCol/NavCol.jsx


const NavCol = ({ nav: nav1  })=>{
    var ref;
    return(/*#__PURE__*/ _jsxs("div", {
        className: "footer-nav__col",
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "footer-nav__col-title",
                children: nav1.title
            }),
            /*#__PURE__*/ _jsx("ul", {
                children: nav1 === null || nav1 === void 0 ? void 0 : (ref = nav1.navLinks) === null || ref === void 0 ? void 0 : ref.map((nav, indx)=>/*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: nav.path,
                            children: /*#__PURE__*/ _jsx("a", {
                                children: nav.name
                            })
                        })
                    }, nav.name + indx)
                )
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Footer/Footer.jsx






const Footer = ()=>{
    const footerLogo = '/assets/img/footer-logo.svg';
    const footerNav = [
        ...footerNav_namespaceObject
    ];
    const footerSocial = [
        ...social
    ];
    const paymentMethods = [
        ...payment_namespaceObject
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-top",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-top__social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Find us here:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: footerSocial.map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: social.path,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: social.icon
                                                    })
                                                })
                                            }, index)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-top__logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-top__payments",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: footerLogo,
                                            className: "js-img",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-copy",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "\xa9 All rights reserved. Spark 2024"
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/layout/Layout.jsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "content",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Insta, {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                })
            })
        ]
    }));
};


/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartContext": () => (/* binding */ CartContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const MyApp = ({ Component , pageProps  })=>{
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cart,
            setCart
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = JSON.parse('[{"icon":"icon-facebook","path":"#/"},{"icon":"icon-twitter","path":"#/"},{"icon":"icon-insta","path":"#/"},{"icon":"icon-in","path":"#/"}]');

/***/ })

};
;