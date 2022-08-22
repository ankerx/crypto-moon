"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prisma_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prisma/db */ \"(api)/./prisma/db.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma_db__WEBPACK_IMPORTED_MODULE_3__.prisma),\n    providers: [\n        // GitHubProvider({\n        //   clientId: process.env.GITHUB_ID || \"\",\n        //   clientSecret: process.env.GITHUB_SECRET || \"\",\n        // }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID || \"\",\n            clientSecret: process.env.GOOGLE_SECRET || \"\"\n        }), \n    ],\n    // pages: {\n    //   signIn: \"/auth/signin\",\n    // },\n    callbacks: {\n        session: async ({ session , token  })=>{\n            if (session?.user) {\n                session.user.id = token.uid;\n            }\n            return session;\n        },\n        jwt: async ({ user , token  })=>{\n            if (user) {\n                token.uid = user.id;\n            }\n            return token;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ0U7QUFFdkI7QUFFbkMsaUVBQWVBLGdEQUFRLENBQUM7SUFDdEJJLE9BQU8sRUFBRUYsd0VBQWEsQ0FBQ0MsNkNBQU0sQ0FBQztJQUM5QkUsU0FBUyxFQUFFO1FBQ1QsbUJBQW1CO1FBQ25CLDJDQUEyQztRQUMzQyxtREFBbUQ7UUFDbkQsTUFBTTtRQUNOSixpRUFBYyxDQUFDO1lBQ2JLLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsSUFBSSxFQUFFO1lBQ3JDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhLElBQUksRUFBRTtTQUM5QyxDQUFDO0tBQ0g7SUFDRCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLEtBQUs7SUFDTEMsU0FBUyxFQUFFO1FBQ1RDLE9BQU8sRUFBRSxPQUFPLEVBQUVBLE9BQU8sR0FBRUMsS0FBSyxHQUFFLEdBQUs7WUFDckMsSUFBSUQsT0FBTyxFQUFFRSxJQUFJLEVBQUU7Z0JBQ2pCRixPQUFPLENBQUNFLElBQUksQ0FBQ0MsRUFBRSxHQUFHRixLQUFLLENBQUNHLEdBQUcsQ0FBQzthQUM3QjtZQUNELE9BQU9KLE9BQU8sQ0FBQztTQUNoQjtRQUNESyxHQUFHLEVBQUUsT0FBTyxFQUFFSCxJQUFJLEdBQUVELEtBQUssR0FBRSxHQUFLO1lBQzlCLElBQUlDLElBQUksRUFBRTtnQkFDUkQsS0FBSyxDQUFDRyxHQUFHLEdBQUdGLElBQUksQ0FBQ0MsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBT0YsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNERCxPQUFPLEVBQUU7UUFDUE0sUUFBUSxFQUFFLEtBQUs7S0FDaEI7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm9uaW1lLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJwcmlzbWEvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgfHwgXCJcIixcbiAgICAvLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCB8fCBcIlwiLFxuICAgIC8vIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuICBdLFxuICAvLyBwYWdlczoge1xuICAvLyAgIHNpZ25JbjogXCIvYXV0aC9zaWduaW5cIixcbiAgLy8gfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xuICAgICAgaWYgKHNlc3Npb24/LnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4udWlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBqd3Q6IGFzeW5jICh7IHVzZXIsIHRva2VuIH0pID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnVpZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpZCIsInVpZCIsImp3dCIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./prisma/db.ts":
/*!**********************!*\
  !*** ./prisma/db.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBUXZDLE1BQU1DLE1BQU0sR0FDakJDLE1BQU0sQ0FBQ0QsTUFBTSxJQUNiLElBQUlELHdEQUFZLENBQUM7SUFDZkcsR0FBRyxFQUFFO1FBQUMsT0FBTztLQUFDO0NBQ2YsQ0FBQyxDQUFDO0FBRUwsSUFBSUMsSUFBcUMsRUFBRUYsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub25pbWUvLi9wcmlzbWEvZGIudHM/NTQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBhbGxvdyBnbG9iYWwgYHZhcmAgZGVjbGFyYXRpb25zXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcInF1ZXJ5XCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();