"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// TelaInicial.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TelaInicial = ()=>{\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cityName, setCityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (e)=>{\n        setUserName(e.target.value);\n    };\n    const handleCityChange = (e)=>{\n        setCityName(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Adicione validações aqui, se necessário\n        // Navega para a Dashboard com os parâmetros de nome e cidade\n        window.location.href = \"/Dashboard?name=\".concat(encodeURIComponent(userName), \"&city=\").concat(encodeURIComponent(cityName));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().TelaInicial),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                initial: {\n                    scale: 0.2,\n                    opacity: 0\n                },\n                animate: {\n                    scale: 1,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 3,\n                    ease: \"easeOut\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Capa),\n                    src: \"/video/Costelacao.webm\",\n                    autoPlay: true,\n                    loop: true,\n                    muted: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                src: \"/image/Logo.svg\",\n                alt: \"\",\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Logo),\n                initial: {\n                    scale: 0,\n                    opacity: 0\n                },\n                animate: {\n                    scale: 1,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Form),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: [\n                            \"Seja bem-vindo \\xe0 \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 28\n                            }, undefined),\n                            \" sClimate Future\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Restante),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        required: true,\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                        value: userName,\n                                        onChange: handleNameChange,\n                                        id: \"userName\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"userName\",\n                                        children: \"Digite Seu nome:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        required: true,\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                        value: cityName,\n                                        onChange: handleCityChange,\n                                        id: \"cityName\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"cityName\",\n                                        children: \"Digite uma cidade:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().remember),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: isChecked,\n                                            onChange: (e)=>setIsChecked(e.target.checked)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                            children: \"Receber notifica\\xe7\\xf5es?\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                children: \"Entrar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TelaInicial, \"XaOC+jNV32M1XOKROZBbaU0p2u8=\");\n_c = TelaInicial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TelaInicial);\nvar _c;\n$RefreshReg$(_c, \"TelaInicial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixrRUFBZTs7Ozs7O3NEQUNoQyw4REFBQ3VEOzRDQUFLbkMsV0FBV3BCLCtEQUFZO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbkMsOERBQUN5RDtnQ0FBT1YsTUFBSztnQ0FBUzNCLFdBQVdwQixnRUFBYTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBNUZNQztLQUFBQTtBQThGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGVsYUluaWNpYWwudHN4XG5cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgVGVsYUluaWNpYWwgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2NpdHlOYW1lLCBzZXRDaXR5TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2l0eUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldENpdHlOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gQWRpY2lvbmUgdmFsaWRhw6fDtWVzIGFxdWksIHNlIG5lY2Vzc8OhcmlvXG5cbiAgICAvLyBOYXZlZ2EgcGFyYSBhIERhc2hib2FyZCBjb20gb3MgcGFyw6JtZXRyb3MgZGUgbm9tZSBlIGNpZGFkZVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9EYXNoYm9hcmQ/bmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIHVzZXJOYW1lXG4gICAgKX0mY2l0eT0ke2VuY29kZVVSSUNvbXBvbmVudChjaXR5TmFtZSl9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLlRlbGFJbmljaWFsfT5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1haW59XG4gICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuMiwgb3BhY2l0eTogMCB9fSAvLyBDb21lw6dhIG1lbm9yIGUgaW52aXPDrXZlbFxuICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19IC8vIENyZXNjZSBwYXJhIG8gdGFtYW5obyB0b3RhbCBlIGZpY2Egdmlzw612ZWxcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMywgZWFzZTogXCJlYXNlT3V0XCIgfX0gLy8gQWp1c3RhIGEgZHVyYcOnw6NvIGUgYSBzdWF2aWRhZGVcbiAgICAgID5cbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ2FwYX1cbiAgICAgICAgICBzcmM9XCIvdmlkZW8vQ29zdGVsYWNhby53ZWJtXCJcbiAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgIGxvb3BcbiAgICAgICAgICBtdXRlZFxuICAgICAgICA+PC92aWRlbz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgIHNyYz1cIi9pbWFnZS9Mb2dvLnN2Z1wiXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkxvZ299XG4gICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgICAvPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuRm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgU2VqYSBiZW0tdmluZG8gw6AgPGJyIC8+IHNDbGltYXRlIEZ1dHVyZVxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlJlc3RhbnRlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlkPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVcIj5EaWdpdGUgU2V1IG5vbWU6PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHZhbHVlPXtjaXR5TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNpdHlDaGFuZ2V9XG4gICAgICAgICAgICAgIGlkPVwiY2l0eU5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eU5hbWVcIj5EaWdpdGUgdW1hIGNpZGFkZTo8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVtZW1iZXJ9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJc0NoZWNrZWQoZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fT48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5SZWNlYmVyIG5vdGlmaWNhw6fDtWVzPzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgIEVudHJhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWxhSW5pY2lhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwic3R5bGVzIiwiVGVsYUluaWNpYWwiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2l0eU5hbWUiLCJzZXRDaXR5TmFtZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaXR5Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwidmlkZW8iLCJDYXBhIiwic3JjIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJpbWciLCJhbHQiLCJMb2dvIiwiZm9ybSIsIkZvcm0iLCJvblN1Ym1pdCIsImgyIiwidGl0bGUiLCJiciIsIlJlc3RhbnRlIiwiaW5wdXRHcm91cCIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJpZCIsImxhYmVsIiwiaHRtbEZvciIsInJlbWVtYmVyIiwiY2hlY2tlZCIsInNwYW4iLCJjaGVja2JveCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});