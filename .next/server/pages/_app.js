/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/favorite-coins/coins-context.tsx":
/*!**************************************************!*\
  !*** ./context/favorite-coins/coins-context.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteCoinsContext\": () => (/* binding */ FavoriteCoinsContext),\n/* harmony export */   \"FavoriteCoinsProvider\": () => (/* binding */ FavoriteCoinsProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _coins_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coins-reducer */ \"./context/favorite-coins/coins-reducer.tsx\");\n\n\n\nconst FavoriteCoinsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst initalState = {\n    favorites: []\n};\nconst FavoriteCoinsProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_coins_reducer__WEBPACK_IMPORTED_MODULE_2__.favoriteCoinsReducer, initalState);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            state,\n            dispatch\n        }), [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteCoinsContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/sebastian/coding/crypto-moon/context/favorite-coins/coins-context.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Zhdm9yaXRlLWNvaW5zL2NvaW5zLWNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQU9lO0FBQ3dDO0FBTWhELE1BQU1JLG9CQUFvQixpQkFBR0osb0RBQWEsQ0FFL0NLLFNBQVMsQ0FBQyxDQUFDO0FBRWIsTUFBTUMsV0FBVyxHQUFVO0lBQUVDLFNBQVMsRUFBRSxFQUFFO0NBQUU7QUFFckMsTUFBTUMscUJBQXFCLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQXlCLEdBQUs7SUFDNUUsTUFBTSxLQUFDQyxLQUFLLE1BQUVDLFFBQVEsTUFBSVYsaURBQVUsQ0FBQ0UsZ0VBQW9CLEVBQUVHLFdBQVcsQ0FBQztJQUV2RSxNQUFNTSxLQUFLLEdBQUdWLDhDQUFPLENBQUMsSUFBTSxDQUFDO1lBQUVRLEtBQUs7WUFBRUMsUUFBUTtTQUFFLENBQUMsRUFBRTtRQUFDRCxLQUFLO0tBQUMsQ0FBQztJQUUzRCxxQkFDRSw4REFBQ04sb0JBQW9CLENBQUNTLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUN4Q0gsUUFBUTs7Ozs7aUJBQ3FCLENBQ2hDO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub25pbWUvLi9jb250ZXh0L2Zhdm9yaXRlLWNvaW5zL2NvaW5zLWNvbnRleHQudHN4PzBjM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVhY3ROb2RlLFxuICBjcmVhdGVDb250ZXh0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VDb250ZXh0LFxuICB1c2VNZW1vLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmYXZvcml0ZUNvaW5zUmVkdWNlciB9IGZyb20gXCIuL2NvaW5zLXJlZHVjZXJcIjtcbmltcG9ydCB7IEFjdGlvbiwgU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG50eXBlIERpc3BhdGNoID0gKGFjdGlvbjogQWN0aW9uKSA9PiB2b2lkO1xudHlwZSBGYXZvcml0ZUNvaW5zUHJvdmlkZXIgPSB7IHJlYWRvbmx5IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfTtcblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlQ29pbnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxcbiAgeyBzdGF0ZTogU3RhdGU7IGRpc3BhdGNoOiBEaXNwYXRjaCB9IHwgdW5kZWZpbmVkXG4+KHVuZGVmaW5lZCk7XG5cbmNvbnN0IGluaXRhbFN0YXRlOiBTdGF0ZSA9IHsgZmF2b3JpdGVzOiBbXSB9O1xuXG5leHBvcnQgY29uc3QgRmF2b3JpdGVDb2luc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogRmF2b3JpdGVDb2luc1Byb3ZpZGVyKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihmYXZvcml0ZUNvaW5zUmVkdWNlciwgaW5pdGFsU3RhdGUpO1xuXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbygoKSA9PiAoeyBzdGF0ZSwgZGlzcGF0Y2ggfSksIFtzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlQ29pbnNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9GYXZvcml0ZUNvaW5zQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VNZW1vIiwiZmF2b3JpdGVDb2luc1JlZHVjZXIiLCJGYXZvcml0ZUNvaW5zQ29udGV4dCIsInVuZGVmaW5lZCIsImluaXRhbFN0YXRlIiwiZmF2b3JpdGVzIiwiRmF2b3JpdGVDb2luc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/favorite-coins/coins-context.tsx\n");

/***/ }),

/***/ "./context/favorite-coins/coins-reducer.tsx":
/*!**************************************************!*\
  !*** ./context/favorite-coins/coins-reducer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favoriteCoinsReducer\": () => (/* binding */ favoriteCoinsReducer)\n/* harmony export */ });\nconst favoriteCoinsReducer = (state, action)=>{\n    switch(action.type){\n        case \"addToFavorite\":\n            {\n                const favorites = [\n                    ...state.favorites\n                ];\n                const newFavorite = action.payload;\n                if (!favorites.includes(action.payload)) {\n                    return {\n                        ...state,\n                        favorites: [\n                            ...favorites,\n                            newFavorite\n                        ]\n                    };\n                } else {\n                    return state;\n                }\n            }\n        default:\n            {\n                throw new Error(`Unhandled action type`);\n            }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Zhdm9yaXRlLWNvaW5zL2NvaW5zLXJlZHVjZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxvQkFBb0IsR0FBRyxDQUFDQyxLQUFZLEVBQUVDLE1BQWMsR0FBSztJQUNwRSxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBSyxlQUFlO1lBQUU7Z0JBQ3BCLE1BQU1DLFNBQVMsR0FBRzt1QkFBSUgsS0FBSyxDQUFDRyxTQUFTO2lCQUFDO2dCQUN0QyxNQUFNQyxXQUFXLEdBQUdILE1BQU0sQ0FBQ0ksT0FBTztnQkFDbEMsSUFBSSxDQUFDRixTQUFTLENBQUNHLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDSSxPQUFPLENBQUMsRUFBRTtvQkFDdkMsT0FBTzt3QkFDTCxHQUFHTCxLQUFLO3dCQUNSRyxTQUFTLEVBQUU7K0JBQUlBLFNBQVM7NEJBQUVDLFdBQVc7eUJBQUM7cUJBQ3ZDLENBQUM7aUJBQ0gsTUFBTTtvQkFDTCxPQUFPSixLQUFLLENBQUM7aUJBQ2Q7YUFDRjtRQUNEO1lBQVM7Z0JBQ1AsTUFBTSxJQUFJTyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7YUFDMUM7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm9uaW1lLy4vY29udGV4dC9mYXZvcml0ZS1jb2lucy9jb2lucy1yZWR1Y2VyLnRzeD9kZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQWN0aW9uLCBTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBmYXZvcml0ZUNvaW5zUmVkdWNlciA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiYWRkVG9GYXZvcml0ZVwiOiB7XG4gICAgICBjb25zdCBmYXZvcml0ZXMgPSBbLi4uc3RhdGUuZmF2b3JpdGVzXTtcbiAgICAgIGNvbnN0IG5ld0Zhdm9yaXRlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoIWZhdm9yaXRlcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmYXZvcml0ZXM6IFsuLi5mYXZvcml0ZXMsIG5ld0Zhdm9yaXRlXSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGVgKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZmF2b3JpdGVDb2luc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJmYXZvcml0ZXMiLCJuZXdGYXZvcml0ZSIsInBheWxvYWQiLCJpbmNsdWRlcyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/favorite-coins/coins-reducer.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var context_favorite_coins_coins_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/favorite-coins/coins-context */ \"./context/favorite-coins/coins-context.tsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: queryClient  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_favorite_coins_coins_context__WEBPACK_IMPORTED_MODULE_5__.FavoriteCoinsProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__.ReactQueryDevtools, {\n                initialIsOpen: false\n            }, void 0, false, {\n                fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQU1BO0FBQ3FDO0FBQ25DO0FBQzRDO0FBQzdFLFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELE1BQU0sS0FBQ0MsV0FBVyxNQUFJTCwrQ0FBUSxDQUFDLElBQU0sSUFBSUgsOERBQVcsRUFBRSxDQUFDO0lBRXZELHFCQUNFLDhEQUFDQyxzRUFBbUI7UUFBQ1EsTUFBTSxFQUFFRCxXQUFXOzswQkFDdEMsOERBQUNULDBEQUFPO2dCQUFDVyxLQUFLLEVBQUVILFNBQVMsQ0FBQ0ksZUFBZTswQkFDdkMsNEVBQUNQLHVGQUFxQjs4QkFDcEIsNEVBQUNFLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNOOzs7OztvQkFDaEI7MEJBQ1YsOERBQUNMLDhFQUFrQjtnQkFBQ1UsYUFBYSxFQUFFLEtBQUs7Ozs7O29CQUFJOzs7Ozs7WUFDeEIsQ0FDdEI7Q0FDSDtBQUVELGlFQUFlUCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm9uaW1lLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7XG4gIEh5ZHJhdGUsXG4gIFF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudFByb3ZpZGVyLFxufSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmF2b3JpdGVDb2luc1Byb3ZpZGVyIH0gZnJvbSBcImNvbnRleHQvZmF2b3JpdGUtY29pbnMvY29pbnMtY29udGV4dFwiO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFF1ZXJ5Q2xpZW50KCkpO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XG4gICAgICAgIDxGYXZvcml0ZUNvaW5zUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Zhdm9yaXRlQ29pbnNQcm92aWRlcj5cbiAgICAgIDwvSHlkcmF0ZT5cbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwidXNlU3RhdGUiLCJGYXZvcml0ZUNvaW5zUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInF1ZXJ5Q2xpZW50IiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiLCJpbml0aWFsSXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query");

/***/ }),

/***/ "@tanstack/react-query-devtools":
/*!*************************************************!*\
  !*** external "@tanstack/react-query-devtools" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query-devtools");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();