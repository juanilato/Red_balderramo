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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_formulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/formulario */ \"(app-pages-browser)/./src/components/formulario/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction InicioSesion() {\n    _s();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleLogin = async (data)=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: data.name,\n                    password: data.password\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Error en el inicio de sesión\");\n            }\n            const result = await response.json();\n            // Aquí podrías guardar el token en localStorage, si tu backend devuelve uno.\n            console.log(\"Inicio de sesión exitoso\", result);\n        } catch (error) {\n            setError(error.message);\n            console.error(\"Error de autenticación\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formulario__WEBPACK_IMPORTED_MODULE_2__.Form, {\n            title: \"Inicio Sesion\",\n            onSubmit: handleLogin,\n            description: \"Formulario para iniciar Sesion\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-[10px] flex flex-col gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formulario__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {\n                            label: \"Usuario\",\n                            name: \"name\",\n                            placeholder: \"Usuario...\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formulario__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {\n                            label: \"Contrase\\xf1a\",\n                            name: \"password\",\n                            placeholder: \"Contrase\\xf1a...\",\n                            type: \"password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formulario__WEBPACK_IMPORTED_MODULE_2__.Form.SubmitButtom, {\n                    buttonText: \"Iniciar Sesion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 19\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(InicioSesion, \"A8i/78Fx3FIozbyR2zwnz0NK35o=\");\n_c = InicioSesion;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InicioSesion);\nvar _c;\n$RefreshReg$(_c, \"InicioSesion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNRO0FBRWhELFNBQVNHOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNSyxjQUFjLE9BQU9DO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0NBQW9DO2dCQUMvREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxNQUFNUixLQUFLUSxJQUFJO29CQUNmQyxVQUFVVCxLQUFLUyxRQUFRO2dCQUN6QjtZQUNGO1lBRUEsSUFBSSxDQUFDUixTQUFTUyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLFNBQVMsTUFBTVgsU0FBU1ksSUFBSTtZQUNsQyw2RUFBNkU7WUFDN0VDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJIO1FBRTFDLEVBQUUsT0FBT2YsT0FBTztZQUNkQyxTQUFTRCxNQUFNbUIsT0FBTztZQUN0QkYsUUFBUWpCLEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0Ysd0RBQUlBO1lBQUNzQixPQUFNO1lBQWdCQyxVQUFVbkI7WUFBYW9CLGFBQVk7OzhCQUM3RCw4REFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDMUIsd0RBQUlBLENBQUMyQixLQUFLOzRCQUFDQyxPQUFNOzRCQUFVZixNQUFLOzRCQUFPZ0IsYUFBWTs0QkFBYUMsTUFBSzs7Ozs7O3NDQUN0RSw4REFBQzlCLHdEQUFJQSxDQUFDMkIsS0FBSzs0QkFBQ0MsT0FBTTs0QkFBYWYsTUFBSzs0QkFBV2dCLGFBQVk7NEJBQWdCQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRWxGLDhEQUFDOUIsd0RBQUlBLENBQUMrQixZQUFZO29CQUFDQyxZQUFXOzs7Ozs7Z0JBQzdCOUIsdUJBQVMsOERBQUMrQjtvQkFBRVAsV0FBVTs4QkFBZ0J4Qjs7Ozs7Ozs7Ozs7OztBQUkvQztHQTFDU0Q7S0FBQUE7QUE0Q1QsaUVBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm11bGFyaW9cIjtcclxuXHJcbmZ1bmN0aW9uIEluaWNpb1Nlc2lvbigpIHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvbG9naW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgLy8gQXF1w60gcG9kcsOtYXMgZ3VhcmRhciBlbCB0b2tlbiBlbiBsb2NhbFN0b3JhZ2UsIHNpIHR1IGJhY2tlbmQgZGV2dWVsdmUgdW5vLlxyXG4gICAgICBjb25zb2xlLmxvZyhcIkluaWNpbyBkZSBzZXNpw7NuIGV4aXRvc29cIiwgcmVzdWx0KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlIGF1dGVudGljYWNpw7NuXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gdGl0bGU9XCJJbmljaW8gU2VzaW9uXCIgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufSBkZXNjcmlwdGlvbj1cIkZvcm11bGFyaW8gcGFyYSBpbmljaWFyIFNlc2lvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktWzEwcHhdIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiVXN1YXJpb1wiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc3VhcmlvLi4uXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJDb250cmFzZcOxYVwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWEuLi5cIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtLlN1Ym1pdEJ1dHRvbSBidXR0b25UZXh0PVwiSW5pY2lhciBTZXNpb25cIiAvPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pY2lvU2VzaW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJJbmljaW9TZXNpb24iLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlTG9naW4iLCJkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJwYXNzd29yZCIsIm9rIiwiRXJyb3IiLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0aXRsZSIsIm9uU3VibWl0IiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiU3VibWl0QnV0dG9tIiwiYnV0dG9uVGV4dCIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});