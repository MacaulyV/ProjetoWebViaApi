"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Dashboard",{

/***/ "./src/Componentes/Nav/Nav.tsx":
/*!*************************************!*\
  !*** ./src/Componentes/Nav/Nav.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav.module.css */ \"./src/Componentes/Nav/Nav.module.css\");\n/* harmony import */ var _Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Nav = (param)=>{\n    let { setCidade, setMapCoordinates } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name } = router.query;\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pesquisa, setPesquisa] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sugestoes, setSugestoes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [mostrarSugestoes, setMostrarSugestoes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.isReady) {\n            if (typeof queryName === \"string\") {\n                setPesquisa(queryName);\n            }\n        }\n    }, [\n        router\n    ]);\n    const handlePesquisaChange = async (e)=>{\n        const valorPesquisa = e.target.value;\n        setPesquisa(valorPesquisa);\n        if (valorPesquisa.length > 2) {\n            try {\n                const response = await fetch(\"/places-suggestions?query=\".concat(encodeURIComponent(valorPesquisa)));\n                const data = await response.json();\n                setSugestoes(data);\n                setMostrarSugestoes(true);\n            } catch (error) {\n                console.error(\"Erro ao buscar sugest\\xf5es:\", error);\n            }\n        } else {\n            setSugestoes([]);\n            setMostrarSugestoes(false);\n        }\n    };\n    const handlePesquisaSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\".concat(encodeURIComponent(pesquisa), \"&appid=1b267ca5664ea689f15c46015e55af37\"));\n            const data = await response.json();\n            if (data && data.timezone) {\n                const localTime = new Date(data.dt * 1000 + data.timezone * 1000).toLocaleTimeString([], {\n                    hour: \"2-digit\",\n                    minute: \"2-digit\"\n                });\n                console.log(\"Hora local antes de passar para SectionPrincipal2:\", localTime);\n            } else {\n                console.error(\"Dados n\\xe3o encontrados ou formato inesperado.\");\n            }\n            setSugestoes([]);\n            setMostrarSugestoes(false);\n        } catch (error) {\n            console.error(\"Erro ao buscar dados da cidade:\", error);\n        }\n        try {\n            const response = await fetch(\"/map-location\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    locationName: pesquisa\n                })\n            });\n            const data = await response.json();\n            if (data.latitude && data.longitude) {\n                setMapCoordinates({\n                    lat: data.latitude,\n                    lng: data.longitude\n                });\n            } else {\n                console.error(\"N\\xe3o foi poss\\xedvel encontrar as coordenadas para a localiza\\xe7\\xe3o especificada.\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao buscar coordenadas:\", error);\n        }\n    };\n    const handleClickSugestao = async (suggestion)=>{\n        setPesquisa(suggestion.description);\n        setCidade(suggestion.description);\n        setSugestoes([]);\n        setMostrarSugestoes(false);\n    };\n    const handleMouseDownSugestao = (e, suggestion)=>{\n        e.preventDefault();\n        setPesquisa(suggestion.description);\n        setCidade(suggestion.description);\n        setSugestoes([]);\n        setMostrarSugestoes(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                src: \"/image/Logo.svg\",\n                alt: \"\",\n                className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().Logo),\n                initial: {\n                    scale: 0,\n                    opacity: 0\n                },\n                animate: {\n                    scale: 1,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h1, {\n                initial: {\n                    scale: 0,\n                    opacity: 0\n                },\n                animate: {\n                    scale: 1,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1\n                },\n                className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().Titulo),\n                children: \"ClimaticFuture\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().BarraPesquisa),\n                onSubmit: handlePesquisaSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"campoDeEntrada\",\n                        type: \"text\",\n                        placeholder: \"Buscar cidade\",\n                        value: pesquisa,\n                        onChange: handlePesquisaChange,\n                        onFocus: ()=>setMostrarSugestoes(true),\n                        onBlur: ()=>setMostrarSugestoes(false)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined),\n                    mostrarSugestoes && sugestoes.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseDown: (e)=>handleMouseDownSugestao(e, suggestion),\n                            className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sugestao),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMapMarkerAlt,\n                                    size: \"lg\",\n                                    style: {\n                                        marginRight: \"10px\",\n                                        color: \"#007bff\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, undefined),\n                                suggestion.description\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                    src: \"/image/Conta.svg\",\n                    alt: \"IconPerfil\",\n                    className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().IconPerfil),\n                    initial: {\n                        scale: 0,\n                        opacity: 0\n                    },\n                    animate: {\n                        scale: 1,\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 3\n                    },\n                    whileHover: {\n                        scale: 1.125,\n                        transition: {\n                            duration: 0.5\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                    lineNumber: 175,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, undefined),\n            name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().Welcome),\n                children: [\n                    \"Ol\\xe1 \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 190,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 191,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Nav_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().Welcome2),\n                        children: \"Seja bem-vindo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 189,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Desktop\\\\Downloads\\\\ClimaticFuture\\\\src\\\\Componentes\\\\Nav\\\\Nav.tsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"7TEumcTGs1Wop282VzCAFmbEdgI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsYUFBYSxDQUFDL0QsSUFBTW1DLHdCQUF3Qm5DLEdBQUdpQzs0QkFDL0NJLFdBQVczRCxxRUFBZTs7OENBRTFCLDhEQUFDRywyRUFBZUE7b0NBQ2RvRixNQUFNbkYsNkVBQWNBO29DQUNwQm9GLE1BQUs7b0NBQ0xDLE9BQU87d0NBQUVDLGFBQWE7d0NBQVFDLE9BQU87b0NBQVU7Ozs7OztnQ0FFaERwQyxXQUFXQyxXQUFXOzsyQkFUbEIyQjs7Ozs7Ozs7Ozs7MEJBYWIsOERBQUNqRixrREFBSUE7Z0JBQUMwRixNQUFLOzBCQUNULDRFQUFDM0YsaURBQU1BLENBQUMyRCxHQUFHO29CQUNUQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKSCxXQUFXM0QsdUVBQWlCO29CQUM1QmdFLFNBQVM7d0JBQUVDLE9BQU87d0JBQUdDLFNBQVM7b0JBQUU7b0JBQ2hDQyxTQUFTO3dCQUFFRixPQUFPO3dCQUFHQyxTQUFTO29CQUFFO29CQUNoQ0UsWUFBWTt3QkFBRUMsVUFBVTtvQkFBRTtvQkFDMUJ5QixZQUFZO3dCQUNWN0IsT0FBTzt3QkFDUEcsWUFBWTs0QkFBRUMsVUFBVTt3QkFBSTtvQkFDOUI7Ozs7Ozs7Ozs7O1lBR0g1RCxzQkFDSyw4REFBQ3NGO2dCQUFHcEMsV0FBVzNELG9FQUFjOztvQkFBRTtrQ0FDekIsOERBQUNpRztrQ0FBTXhGOzs7Ozs7a0NBQ1gsOERBQUN5Rjs7Ozs7a0NBQ0QsOERBQUNEO3dCQUFLdEMsV0FBVzNELHFFQUFlO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7R0FsTE1LOztRQUNXTixrREFBU0E7OztLQURwQk07QUFvTE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudGVzL05hdi9OYXYudHN4Pzk0NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vTmF2L05hdi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFNYXBNYXJrZXJBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmludGVyZmFjZSBTdWdnZXN0aW9uIHtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE5hdlByb3BzIHtcbiAgc2V0Q2lkYWRlOiAoY2lkYWRlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldE1hcENvb3JkaW5hdGVzOiAoY29vcmRpbmF0ZXM6IHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH0pID0+IHZvaWQ7XG4gIHVzZXJOYW1lOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCBOYXYgPSAoeyBzZXRDaWRhZGUsIHNldE1hcENvb3JkaW5hdGVzIH06IE5hdlByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IG5hbWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcGVzcXVpc2EsIHNldFBlc3F1aXNhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtzdWdlc3RvZXMsIHNldFN1Z2VzdG9lc10gPSB1c2VTdGF0ZTxTdWdnZXN0aW9uW10+KFtdKTtcbiAgY29uc3QgW21vc3RyYXJTdWdlc3RvZXMsIHNldE1vc3RyYXJTdWdlc3RvZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5pc1JlYWR5KSB7XG4gICAgIFxuICAgICAgaWYgKHR5cGVvZiBxdWVyeU5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc2V0UGVzcXVpc2EocXVlcnlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBjb25zdCBoYW5kbGVQZXNxdWlzYUNoYW5nZSA9IGFzeW5jIChcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zdCB2YWxvclBlc3F1aXNhID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0UGVzcXVpc2EodmFsb3JQZXNxdWlzYSk7XG5cbiAgICBpZiAodmFsb3JQZXNxdWlzYS5sZW5ndGggPiAyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGAvcGxhY2VzLXN1Z2dlc3Rpb25zP3F1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbG9yUGVzcXVpc2EpfWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0U3VnZXN0b2VzKGRhdGEpO1xuICAgICAgICBzZXRNb3N0cmFyU3VnZXN0b2VzKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIHN1Z2VzdMO1ZXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3VnZXN0b2VzKFtdKTtcbiAgICAgIHNldE1vc3RyYXJTdWdlc3RvZXMoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQZXNxdWlzYVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBwZXNxdWlzYVxuICAgICAgICApfSZhcHBpZD0xYjI2N2NhNTY2NGVhNjg5ZjE1YzQ2MDE1ZTU1YWYzN2BcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnRpbWV6b25lKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKFxuICAgICAgICAgIGRhdGEuZHQgKiAxMDAwICsgZGF0YS50aW1lem9uZSAqIDEwMDBcbiAgICAgICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiSG9yYSBsb2NhbCBhbnRlcyBkZSBwYXNzYXIgcGFyYSBTZWN0aW9uUHJpbmNpcGFsMjpcIixcbiAgICAgICAgICBsb2NhbFRpbWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYWRvcyBuw6NvIGVuY29udHJhZG9zIG91IGZvcm1hdG8gaW5lc3BlcmFkby5cIik7XG4gICAgICB9XG5cbiAgICAgIHNldFN1Z2VzdG9lcyhbXSk7XG4gICAgICBzZXRNb3N0cmFyU3VnZXN0b2VzKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIGRhZG9zIGRhIGNpZGFkZTpcIiwgZXJyb3IpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL21hcC1sb2NhdGlvblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGxvY2F0aW9uTmFtZTogcGVzcXVpc2EsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5sYXRpdHVkZSAmJiBkYXRhLmxvbmdpdHVkZSkge1xuICAgICAgICBzZXRNYXBDb29yZGluYXRlcyh7IGxhdDogZGF0YS5sYXRpdHVkZSwgbG5nOiBkYXRhLmxvbmdpdHVkZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJOw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGFzIGNvb3JkZW5hZGFzIHBhcmEgYSBsb2NhbGl6YcOnw6NvIGVzcGVjaWZpY2FkYS5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBidXNjYXIgY29vcmRlbmFkYXM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTdWdlc3RhbyA9IGFzeW5jIChzdWdnZXN0aW9uOiBTdWdnZXN0aW9uKSA9PiB7XG4gICAgc2V0UGVzcXVpc2Eoc3VnZ2VzdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgc2V0Q2lkYWRlKHN1Z2dlc3Rpb24uZGVzY3JpcHRpb24pO1xuICAgIHNldFN1Z2VzdG9lcyhbXSk7XG4gICAgc2V0TW9zdHJhclN1Z2VzdG9lcyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duU3VnZXN0YW8gPSAoXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4sXG4gICAgc3VnZ2VzdGlvbjogU3VnZ2VzdGlvblxuICApID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0UGVzcXVpc2Eoc3VnZ2VzdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgc2V0Q2lkYWRlKHN1Z2dlc3Rpb24uZGVzY3JpcHRpb24pO1xuICAgIHNldFN1Z2VzdG9lcyhbXSk7XG4gICAgc2V0TW9zdHJhclN1Z2VzdG9lcyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICA8bW90aW9uLmltZ1xuICAgICAgICBzcmM9XCIvaW1hZ2UvTG9nby5zdmdcIlxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Mb2dvfVxuICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgLz5cbiAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGl0dWxvfVxuICAgICAgPlxuICAgICAgICBDbGltYXRpY0Z1dHVyZVxuICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5CYXJyYVBlc3F1aXNhfSBvblN1Ym1pdD17aGFuZGxlUGVzcXVpc2FTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNhbXBvRGVFbnRyYWRhXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYXIgY2lkYWRlXCJcbiAgICAgICAgICB2YWx1ZT17cGVzcXVpc2F9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBlc3F1aXNhQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldE1vc3RyYXJTdWdlc3RvZXModHJ1ZSl9XG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRNb3N0cmFyU3VnZXN0b2VzKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICAge21vc3RyYXJTdWdlc3RvZXMgJiZcbiAgICAgICAgICBzdWdlc3RvZXMubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZU1vdXNlRG93blN1Z2VzdGFvKGUsIHN1Z2dlc3Rpb24pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWdlc3Rhb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhTWFwTWFya2VyQWx0fVxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBjb2xvcjogXCIjMDA3YmZmXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlL0NvbnRhLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiSWNvblBlcmZpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSWNvblBlcmZpbH1cbiAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDMgfX1cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgICAgICBzY2FsZTogMS4xMjUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAge25hbWUgJiYgKFxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLldlbGNvbWV9PlxuICAgICAgICAgICAgICBPbMOhIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLldlbGNvbWUyfT5TZWphIGJlbS12aW5kbzwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsIm1vdGlvbiIsIkxpbmsiLCJGb250QXdlc29tZUljb24iLCJmYU1hcE1hcmtlckFsdCIsIk5hdiIsInNldENpZGFkZSIsInNldE1hcENvb3JkaW5hdGVzIiwicm91dGVyIiwibmFtZSIsInF1ZXJ5IiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInBlc3F1aXNhIiwic2V0UGVzcXVpc2EiLCJzdWdlc3RvZXMiLCJzZXRTdWdlc3RvZXMiLCJtb3N0cmFyU3VnZXN0b2VzIiwic2V0TW9zdHJhclN1Z2VzdG9lcyIsImlzUmVhZHkiLCJxdWVyeU5hbWUiLCJoYW5kbGVQZXNxdWlzYUNoYW5nZSIsImUiLCJ2YWxvclBlc3F1aXNhIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVQZXNxdWlzYVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidGltZXpvbmUiLCJsb2NhbFRpbWUiLCJEYXRlIiwiZHQiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwibG9nIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb25OYW1lIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJsYXQiLCJsbmciLCJoYW5kbGVDbGlja1N1Z2VzdGFvIiwic3VnZ2VzdGlvbiIsImRlc2NyaXB0aW9uIiwiaGFuZGxlTW91c2VEb3duU3VnZXN0YW8iLCJuYXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJMb2dvIiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMSIsIlRpdHVsbyIsImZvcm0iLCJCYXJyYVBlc3F1aXNhIiwib25TdWJtaXQiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib25CbHVyIiwibWFwIiwiaW5kZXgiLCJidXR0b24iLCJvbk1vdXNlRG93biIsInN1Z2VzdGFvIiwiaWNvbiIsInNpemUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJocmVmIiwiSWNvblBlcmZpbCIsIndoaWxlSG92ZXIiLCJoMyIsIldlbGNvbWUiLCJzcGFuIiwiYnIiLCJXZWxjb21lMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Componentes/Nav/Nav.tsx\n"));

/***/ })

});