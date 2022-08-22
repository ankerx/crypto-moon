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

/***/ "./core/utils/material-ui/createEmotionCache.ts":
/*!******************************************************!*\
  !*** ./core/utils/material-ui/createEmotionCache.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createEmotionCache = ()=>{\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"css\",\n        prepend: true\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3V0aWxzL21hdGVyaWFsLXVpL2NyZWF0ZUVtb3Rpb25DYWNoZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsa0JBQWtCLEdBQUcsSUFBTTtJQUMvQixPQUFPRCxxREFBVyxDQUFDO1FBQUVFLEdBQUcsRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQ25EO0FBRUQsaUVBQWVGLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvLW1vb24vLi9jb3JlL3V0aWxzL21hdGVyaWFsLXVpL2NyZWF0ZUVtb3Rpb25DYWNoZS50cz80YjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIjtcblxuY29uc3QgY3JlYXRlRW1vdGlvbkNhY2hlID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6IFwiY3NzXCIsIHByZXBlbmQ6IHRydWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbW90aW9uQ2FjaGU7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./core/utils/material-ui/createEmotionCache.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/roboto/300.css */ \"./node_modules/@fontsource/roboto/300.css\");\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/roboto/400.css */ \"./node_modules/@fontsource/roboto/400.css\");\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/roboto/500.css */ \"./node_modules/@fontsource/roboto/500.css\");\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fontsource/roboto/700.css */ \"./node_modules/@fontsource/roboto/700.css\");\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _core_utils_material_ui_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/utils/material-ui/createEmotionCache */ \"./core/utils/material-ui/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme_ligthThemeOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/theme/ligthThemeOptions */ \"./styles/theme/ligthThemeOptions.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_core_utils_material_ui_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\nconst lightTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.createTheme)(_styles_theme_ligthThemeOptions__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    const { 0: queryClient  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient());\n    const emotionCache = clientSideEmotionCache;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const jssStyles = document.querySelector(\"#jss-server-side\");\n        if (jssStyles) {\n            jssStyles.parentElement.removeChild(jssStyles);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                    state: pageProps.dehydratedState,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.CacheProvider, {\n                        value: emotionCache,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n                            theme: lightTheme,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CssBaseline, {}, void 0, false, {\n                                    fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__.ReactQueryDevtools, {\n                    initialIsOpen: false\n                }, void 0, false, {\n                    fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebastian/coding/crypto-moon/pages/_app.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNvQjtBQUVnQztBQUNkO0FBQ3hCO0FBQ2lCO0FBQ1c7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDWjtBQUtsRSxNQUFNYSxzQkFBc0IsR0FBR0YsdUZBQWtCLEVBQUU7QUFDbkQsTUFBTUcsVUFBVSxHQUFHSiwwREFBVyxDQUFDRSx3RUFBaUIsQ0FBQztBQUNqRCxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUdELFNBQVMsRUFBRSxHQUFjLEVBQUU7SUFDOUUsTUFBTSxLQUFDRSxXQUFXLE1BQUliLCtDQUFRLENBQUMsSUFBTSxJQUFJSiw4REFBVyxFQUFFLENBQUM7SUFDdkQsTUFBTWtCLFlBQVksR0FBR1Asc0JBQXNCO0lBQzNDUixnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNZ0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RCxJQUFJRixTQUFTLEVBQUU7WUFDYkEsU0FBUyxDQUFDRyxhQUFhLENBQUVDLFdBQVcsQ0FBQ0osU0FBUyxDQUFDLENBQUM7U0FDakQ7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNyQiw0REFBZTtRQUFDa0IsT0FBTyxFQUFFQSxPQUFPO2tCQUMvQiw0RUFBQ2Ysc0VBQW1CO1lBQUN1QixNQUFNLEVBQUVQLFdBQVc7OzhCQUN0Qyw4REFBQ2xCLDBEQUFPO29CQUFDMEIsS0FBSyxFQUFFVixTQUFTLENBQUNXLGVBQWU7OEJBQ3ZDLDRFQUFDckIseURBQWE7d0JBQUNzQixLQUFLLEVBQUVULFlBQVk7a0NBQ2hDLDRFQUFDWix3REFBYTs0QkFBQ3NCLEtBQUssRUFBRWhCLFVBQVU7OzhDQUM5Qiw4REFBQ0wsc0RBQVc7Ozs7d0NBQUc7OENBQ2YsOERBQUNPLFNBQVM7b0NBQUUsR0FBR0MsU0FBUzs7Ozs7d0NBQUk7Ozs7OztnQ0FDZDs7Ozs7NEJBQ0Y7Ozs7O3dCQUNSOzhCQUNWLDhEQUFDYiw4RUFBa0I7b0JBQUMyQixhQUFhLEVBQUUsS0FBSzs7Ozs7d0JBQUk7Ozs7OztnQkFDeEI7Ozs7O1lBQ04sQ0FDbEI7Q0FDSDtBQUVELGlFQUFlaEIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvLW1vb24vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBIeWRyYXRlLCBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIsIEVtb3Rpb25DYWNoZSB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUsIGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by8zMDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vNDAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzUwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by83MDAuY3NzXCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gXCIuLi9jb3JlL3V0aWxzL21hdGVyaWFsLXVpL2NyZWF0ZUVtb3Rpb25DYWNoZVwiO1xuaW1wb3J0IGxpZ2h0VGhlbWVPcHRpb25zIGZyb20gXCIuLi9zdHlsZXMvdGhlbWUvbGlndGhUaGVtZU9wdGlvbnNcIjtcblxuaW50ZXJmYWNlIE15QXBwUHJvcHMgZXh0ZW5kcyBBcHBQcm9wcyB7XG4gIGVtb3Rpb25DYWNoZT86IEVtb3Rpb25DYWNoZTtcbn1cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcbmNvbnN0IGxpZ2h0VGhlbWUgPSBjcmVhdGVUaGVtZShsaWdodFRoZW1lT3B0aW9ucyk7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IE15QXBwUHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5Q2xpZW50XSA9IHVzZVN0YXRlKCgpID0+IG5ldyBRdWVyeUNsaWVudCgpKTtcbiAgY29uc3QgZW1vdGlvbkNhY2hlID0gY2xpZW50U2lkZUVtb3Rpb25DYWNoZTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudCEucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtlbW90aW9uQ2FjaGV9PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0VGhlbWV9PlxuICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYWNoZVByb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiY3JlYXRlVGhlbWUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJsaWdodFRoZW1lT3B0aW9ucyIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJsaWdodFRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwicXVlcnlDbGllbnQiLCJlbW90aW9uQ2FjaGUiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSIsInZhbHVlIiwidGhlbWUiLCJpbml0aWFsSXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/theme/ligthThemeOptions.ts":
/*!*******************************************!*\
  !*** ./styles/theme/ligthThemeOptions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst lightThemeOptions = {\n    palette: {\n        mode: \"light\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightThemeOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUvbGlndGhUaGVtZU9wdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLGlCQUFpQixHQUFpQjtJQUN0Q0MsT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDRjtBQUVELGlFQUFlRixpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0by1tb29uLy4vc3R5bGVzL3RoZW1lL2xpZ3RoVGhlbWVPcHRpb25zLnRzP2FkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVPcHRpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5cbmNvbnN0IGxpZ2h0VGhlbWVPcHRpb25zOiBUaGVtZU9wdGlvbnMgPSB7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiBcImxpZ2h0XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaWdodFRoZW1lT3B0aW9ucztcbiJdLCJuYW1lcyI6WyJsaWdodFRoZW1lT3B0aW9ucyIsInBhbGV0dGUiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme/ligthThemeOptions.ts\n");

/***/ }),

/***/ "./node_modules/@fontsource/roboto/300.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/300.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/400.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/400.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/500.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/500.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/700.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/700.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

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

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

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