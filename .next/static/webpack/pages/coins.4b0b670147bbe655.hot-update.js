"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/coins",{

/***/ "./modules/coins/components/Coin.tsx":
/*!*******************************************!*\
  !*** ./modules/coins/components/Coin.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Coin\": function() { return /* binding */ Coin; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/umd/index.production.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./modules/coins/api.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Coin = function(param) {\n    var name = param.name, id = param.id;\n    _s();\n    var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\n    var mutateAsync = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_api__WEBPACK_IMPORTED_MODULE_2__.remove).mutateAsync;\n    var deleteFav = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return mutateAsync(id);\n                    case 2:\n                        queryClient.invalidateQueries([\n                            \"fav\"\n                        ]);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteFav() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var addFav = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_api__WEBPACK_IMPORTED_MODULE_2__.create, {\n        onSuccess: function() {\n            queryClient.invalidateQueries([\n                \"fav\"\n            ]);\n            console.log(\"added\");\n        }\n    });\n    var creates = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return _Users_sebastian_coding_crypto_moon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return addFav.mutateAsync(id);\n                    case 3:\n                        _ctx.next = 8;\n                        break;\n                    case 5:\n                        _ctx.prev = 5;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    5\n                ]\n            ]);\n        }));\n        return function creates(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-zinc-700\",\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/sebastian/coding/crypto-moon/modules/coins/components/Coin.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return creates(id);\n                },\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastian/coding/crypto-moon/modules/coins/components/Coin.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: deleteFav,\n                children: \"Remove\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastian/coding/crypto-moon/modules/coins/components/Coin.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastian/coding/crypto-moon/modules/coins/components/Coin.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Coin, \"+thBGk9j0eN6eWP2/LVWFpeq5Xs=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = Coin;\nvar _c;\n$RefreshReg$(_c, \"Coin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2NvaW5zL2NvbXBvbmVudHMvQ29pbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQWlFO0FBQ3pCO0FBTWpDLElBQU1JLElBQUksR0FBRyxnQkFBMEI7UUFBdkJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxFQUFFLFNBQUZBLEVBQUU7O0lBQzdCLElBQU1DLFdBQVcsR0FBRyxJQUFJUCw4REFBVyxFQUFFO0lBQ3JDLElBQU0sV0FBYSxHQUFLQyxrRUFBVyxDQUFDQyx3Q0FBTSxDQUFDLENBQW5DTSxXQUFXO0lBRW5CLElBQU1DLFNBQVM7bUJBQUcsc1BBQVk7Ozs7OytCQUN0QkQsV0FBVyxDQUFDRixFQUFFLENBQUM7O3dCQUNyQkMsV0FBVyxDQUFDRyxpQkFBaUIsQ0FBQzs0QkFBQyxLQUFLO3lCQUFDLENBQUMsQ0FBQzs7Ozs7O1NBQ3hDO3dCQUhLRCxTQUFTOzs7T0FHZDtJQUVELElBQU1FLE1BQU0sR0FBR1Ysa0VBQVcsQ0FBQ0Usd0NBQU0sRUFBRTtRQUNqQ1MsU0FBUyxFQUFFLFdBQU07WUFDZkwsV0FBVyxDQUFDRyxpQkFBaUIsQ0FBQztnQkFBQyxLQUFLO2FBQUMsQ0FBQyxDQUFDO1lBQ3ZDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtLQUNGLENBQUM7SUFDRixJQUFNQyxPQUFPO21CQUFHLG9QQUFPVCxFQUFVLEVBQUs7Ozs7OzsrQkFFNUJLLE1BQU0sQ0FBQ0gsV0FBVyxDQUFDRixFQUFFLENBQUM7Ozs7Ozs7d0JBRTVCTyxPQUFPLENBQUNDLEdBQUcsU0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUV0Qjt3QkFOS0MsT0FBTyxDQUFVVCxFQUFVOzs7T0FNaEM7SUFFRCxxQkFDRSw4REFBQ1UsS0FBRzs7MEJBQ0YsOERBQUNDLEdBQUM7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOzBCQUFFYixJQUFJOzs7OztxQkFBSzswQkFDdkMsOERBQUNjLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTUwsT0FBTyxDQUFDVCxFQUFFLENBQUM7aUJBQUE7MEJBQUUsS0FBRzs7Ozs7cUJBQVM7MEJBQ2hELDhEQUFDYSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVYLFNBQVM7MEJBQUUsUUFBTTs7Ozs7cUJBQVM7Ozs7OzthQUN2QyxDQUNOO0NBQ0gsQ0FBQztHQTlCV0wsSUFBSTs7UUFFU0gsOERBQVc7UUFPcEJBLDhEQUFXOzs7QUFUZkcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2R1bGVzL2NvaW5zL2NvbXBvbmVudHMvQ29pbi50c3g/NjY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyByZW1vdmUsIGNyZWF0ZSB9IGZyb20gXCIuLi9hcGlcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBDb2luID0gKHsgbmFtZSwgaWQgfTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IHsgbXV0YXRlQXN5bmMgfSA9IHVzZU11dGF0aW9uKHJlbW92ZSk7XG5cbiAgY29uc3QgZGVsZXRlRmF2ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IG11dGF0ZUFzeW5jKGlkKTtcbiAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbXCJmYXZcIl0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZEZhdiA9IHVzZU11dGF0aW9uKGNyZWF0ZSwge1xuICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1wiZmF2XCJdKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWRkZWRcIik7XG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNyZWF0ZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhZGRGYXYubXV0YXRlQXN5bmMoaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtemluYy03MDBcIj57bmFtZX08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNyZWF0ZXMoaWQpfT5BZGQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlRmF2fT5SZW1vdmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJ1c2VNdXRhdGlvbiIsInJlbW92ZSIsImNyZWF0ZSIsIkNvaW4iLCJuYW1lIiwiaWQiLCJxdWVyeUNsaWVudCIsIm11dGF0ZUFzeW5jIiwiZGVsZXRlRmF2IiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJhZGRGYXYiLCJvblN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlcyIsImRpdiIsInAiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/coins/components/Coin.tsx\n"));

/***/ })

});