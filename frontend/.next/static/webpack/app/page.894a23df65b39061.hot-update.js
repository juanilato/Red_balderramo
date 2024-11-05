/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/formulario/components/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/formulario/components/index.tsx ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/components/formulario/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/formulario/index.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form),\n/* harmony export */   FormContext: () => (/* binding */ FormContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/components/formulario/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"(app-pages-browser)/./src/components/formulario/components/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ FormContext,Form auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction Form(param) {\n    let { title, children, onSubmit, description } = param;\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handlesubmit = (event)=>{\n        event.preventDefault();\n        onSubmit(formValues);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContext.Provider, {\n        value: {\n            formValues,\n            setFormValues\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n            onSubmit: handlesubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().descriptionContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\components\\\\formulario\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\components\\\\formulario\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 37\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\components\\\\formulario\\\\index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\components\\\\formulario\\\\index.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\joaqu\\\\OneDrive\\\\Escritorio\\\\RedBalderramo\\\\Red_balderramo\\\\frontend\\\\src\\\\components\\\\formulario\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"HaAN28vQIwcytciUCVbzfu1nIYg=\");\n_c = Form;\nForm.Input = _components__WEBPACK_IMPORTED_MODULE_3__.Input;\nForm.SubmitButtom = _components__WEBPACK_IMPORTED_MODULE_3__.SubmitButtom;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm11bGFyaW8vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXNEO0FBQ2I7QUFDUztBQWlCM0MsTUFBTU0sNEJBQWNMLG9EQUFhQSxDQUE4Qk0sV0FBVTtBQUV6RSxTQUFTQyxLQUFNLEtBQW1EO1FBQW5ELEVBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBWSxHQUFuRDs7SUFDbEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUNaLCtDQUFRQSxDQUFhLENBQUM7SUFFeEQsTUFBTWEsZUFBZSxDQUFDQztRQUNsQkEsTUFBTUMsY0FBYztRQUNwQk4sU0FBU0U7SUFDYjtJQUVBLHFCQUNJLDhEQUFDUCxZQUFZWSxRQUFRO1FBQUNDLE9BQU87WUFBRU47WUFBWUM7UUFBYTtrQkFDcEQsNEVBQUNNO1lBQUtDLFdBQVdsQixpRUFBVztZQUFFUSxVQUFVSTs7OEJBQ3BDLDhEQUFDTztvQkFBSUQsV0FBV2xCLGlGQUEyQjs7c0NBQ3ZDLDhEQUFDcUI7c0NBQUlmOzs7Ozs7d0JBQ0pHLDZCQUFlLDhEQUFDYTtzQ0FBR2I7Ozs7Ozs7Ozs7OztnQkFFdkJGOzs7Ozs7Ozs7Ozs7QUFJakI7R0FuQmdCRjtLQUFBQTtBQXFCaEJBLEtBQUtKLEtBQUssR0FBRUEsOENBQUtBO0FBQ2pCSSxLQUFLSCxZQUFZLEdBQUVBLHFEQUFZQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm11bGFyaW8vaW5kZXgudHN4PzQ4NzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBJbnB1dCwgU3VibWl0QnV0dG9tIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcblxyXG50eXBlIEZvcm1WYWx1ZXMgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XHJcblxyXG5pbnRlcmZhY2UgRm9ybUNvbnRleHRUeXBle1xyXG4gICAgZm9ybVZhbHVlczogRm9ybVZhbHVlc1xyXG4gICAgc2V0Rm9ybVZhbHVlczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Rm9ybVZhbHVlcz4+XHJcbn1cclxuXHJcbmludGVyZmFjZSBGb3JtUHJvcHN7XHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gICAgb25TdWJtaXQ6KHZhbHVlczogRm9ybVZhbHVlcyk9PiB2b2lkXHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0IDxGb3JtQ29udGV4dFR5cGV8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0gKHt0aXRsZSwgY2hpbGRyZW4sIG9uU3VibWl0LCBkZXNjcmlwdGlvbn06IEZvcm1Qcm9wcyl7XHJcbiAgICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc109dXNlU3RhdGU8Rm9ybVZhbHVlcz4oe30pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlc3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBvblN1Ym1pdChmb3JtVmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc319PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlc3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHA+e2Rlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvcm0uSW5wdXQ9IElucHV0XHJcbkZvcm0uU3VibWl0QnV0dG9tPSBTdWJtaXRCdXR0b20iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbnB1dCIsIlN1Ym1pdEJ1dHRvbSIsIkZvcm1Db250ZXh0IiwidW5kZWZpbmVkIiwiRm9ybSIsInRpdGxlIiwiY2hpbGRyZW4iLCJvblN1Ym1pdCIsImRlc2NyaXB0aW9uIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJoYW5kbGVzdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsImgyIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/formulario/index.tsx\n"));

/***/ })

});