"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/favorite/page",{

/***/ "(app-pages-browser)/./app/favorite/page.tsx":
/*!*******************************!*\
  !*** ./app/favorite/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavoriteCharacters; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_favorite_character_card_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/favorite/character-card-detail */ \"(app-pages-browser)/./components/favorite/character-card-detail.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction FavoriteCharacters() {\n    _s();\n    const { favoriteCharacters } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.favoriteCharacter);\n    return favoriteCharacters.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pl-4 my-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg text-red-600 font-bold my-4\",\n                children: \"My Favourite Character List\"\n            }, void 0, false, {\n                fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-12 justify-center items-start  my-auto\",\n                children: favoriteCharacters.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_favorite_character_card_detail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        characterData: data\n                    }, data.id, false, {\n                        fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pl-4 my-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \" text-lg text-red-600 font-bold my-4\",\n                children: \"My Favourite Character List\"\n            }, void 0, false, {\n                fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"You have never selected any character as favourite\"\n            }, void 0, false, {\n                fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hakanaksoy/Projects/github/rick-and-morty/app/favorite/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(FavoriteCharacters, \"fPjxSU4F3lLlMITJr0sISopWaJM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = FavoriteCharacters;\nvar _c;\n$RefreshReg$(_c, \"FavoriteCharacters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mYXZvcml0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM4RTtBQUVwRDtBQUVnQjtBQUUzQixTQUFTRzs7SUFDdEIsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHRix3REFBV0EsQ0FDeEMsQ0FBQ0csUUFBZUEsTUFBTUMsaUJBQWlCO0lBR3pDLE9BQU9GLG1CQUFtQkcsTUFBTSxpQkFDOUIsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0M7Ozs7OzswQkFHcEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaTCxtQkFBbUJPLEdBQUcsQ0FBQyxDQUFDQyxxQkFDdkIsOERBQUNaLGtGQUFtQkE7d0JBQWVhLGVBQWVEO3VCQUF4QkEsS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzZCQUt2Qyw4REFBQ047UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF1Qzs7Ozs7OzBCQUdyRCw4REFBQ007MEJBQUU7Ozs7Ozs7Ozs7OztBQUdUO0dBeEJ3Qlo7O1FBQ1NELG9EQUFXQTs7O0tBRHBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZmF2b3JpdGUvcGFnZS50c3g/NjNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBDaGFyYWN0ZXJDYXJkRGV0YWlsIGZyb20gXCJAL2NvbXBvbmVudHMvZmF2b3JpdGUvY2hhcmFjdGVyLWNhcmQtZGV0YWlsXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYXJhY3RlclR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdm9yaXRlQ2hhcmFjdGVycygpIHtcbiAgY29uc3QgeyBmYXZvcml0ZUNoYXJhY3RlcnMgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5mYXZvcml0ZUNoYXJhY3RlclxuICApO1xuXG4gIHJldHVybiBmYXZvcml0ZUNoYXJhY3RlcnMubGVuZ3RoID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCBteS0xNlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1yZWQtNjAwIGZvbnQtYm9sZCBteS00XCI+XG4gICAgICAgIE15IEZhdm91cml0ZSBDaGFyYWN0ZXIgTGlzdFxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgIG15LWF1dG9cIj5cbiAgICAgICAge2Zhdm9yaXRlQ2hhcmFjdGVycy5tYXAoKGRhdGE6IENoYXJhY3RlclR5cGUpID0+IChcbiAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZERldGFpbCBrZXk9e2RhdGEuaWR9IGNoYXJhY3RlckRhdGE9e2RhdGF9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IG15LTE2XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQtbGcgdGV4dC1yZWQtNjAwIGZvbnQtYm9sZCBteS00XCI+XG4gICAgICAgIE15IEZhdm91cml0ZSBDaGFyYWN0ZXIgTGlzdFxuICAgICAgPC9oMj5cbiAgICAgIDxwPllvdSBoYXZlIG5ldmVyIHNlbGVjdGVkIGFueSBjaGFyYWN0ZXIgYXMgZmF2b3VyaXRlPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoYXJhY3RlckNhcmREZXRhaWwiLCJSZWFjdCIsInVzZVNlbGVjdG9yIiwiRmF2b3JpdGVDaGFyYWN0ZXJzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic3RhdGUiLCJmYXZvcml0ZUNoYXJhY3RlciIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiZGF0YSIsImNoYXJhY3RlckRhdGEiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/favorite/page.tsx\n"));

/***/ })

});