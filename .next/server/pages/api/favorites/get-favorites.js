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
exports.id = "pages/api/favorites/get-favorites";
exports.ids = ["pages/api/favorites/get-favorites"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./pages/api/favorites/get-favorites.ts":
/*!**********************************************!*\
  !*** ./pages/api/favorites/get-favorites.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prisma_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prisma/db */ \"(api)/./prisma/db.ts\");\n/* harmony import */ var schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! schema */ \"(api)/./schema.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([schema__WEBPACK_IMPORTED_MODULE_1__]);\nschema__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const favorites = await prisma_db__WEBPACK_IMPORTED_MODULE_0__.prisma.favorites.findMany();\n    try {\n        if (schema__WEBPACK_IMPORTED_MODULE_1__.favoritesArraySchema.safeParse(favorites).success) {\n            res.status(200).json(favorites);\n        } else {\n            res.status(404).json({\n                message: \"Wrong data\"\n            });\n        }\n    } catch (error) {\n        res.status(404).json(error);\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3JpdGVzL2dldC1mYXZvcml0ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21DO0FBQ1c7QUFFOUMsaUVBQWUsT0FBT0UsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNsRSxNQUFNQyxTQUFTLEdBQUcsTUFBTUosZ0VBQXlCLEVBQUU7SUFDbkQsSUFBSTtRQUNGLElBQUlDLGtFQUE4QixDQUFDRyxTQUFTLENBQUMsQ0FBQ0csT0FBTyxFQUFFO1lBQ3JESixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxTQUFTLENBQUMsQ0FBQztTQUNqQyxNQUFNO1lBQ0xELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxZQUFZO2FBQUUsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0YsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZFIsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUM7S0FDN0I7Q0FDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vbmltZS8uL3BhZ2VzL2FwaS9mYXZvcml0ZXMvZ2V0LWZhdm9yaXRlcy50cz8zYTQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcInByaXNtYS9kYlwiO1xuaW1wb3J0IHsgZmF2b3JpdGVzQXJyYXlTY2hlbWEgfSBmcm9tIFwic2NoZW1hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBmYXZvcml0ZXMgPSBhd2FpdCBwcmlzbWEuZmF2b3JpdGVzLmZpbmRNYW55KCk7XG4gIHRyeSB7XG4gICAgaWYgKGZhdm9yaXRlc0FycmF5U2NoZW1hLnNhZmVQYXJzZShmYXZvcml0ZXMpLnN1Y2Nlc3MpIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZhdm9yaXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJXcm9uZyBkYXRhXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKGVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJmYXZvcml0ZXNBcnJheVNjaGVtYSIsInJlcSIsInJlcyIsImZhdm9yaXRlcyIsImZpbmRNYW55Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/favorites/get-favorites.ts\n");

/***/ }),

/***/ "(api)/./prisma/db.ts":
/*!**********************!*\
  !*** ./prisma/db.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBUXZDLE1BQU1DLE1BQU0sR0FDakJDLE1BQU0sQ0FBQ0QsTUFBTSxJQUNiLElBQUlELHdEQUFZLENBQUM7SUFDZkcsR0FBRyxFQUFFO1FBQUMsT0FBTztLQUFDO0NBQ2YsQ0FBQyxDQUFDO0FBRUwsSUFBSUMsSUFBcUMsRUFBRUYsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub25pbWUvLi9wcmlzbWEvZGIudHM/NTQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBhbGxvdyBnbG9iYWwgYHZhcmAgZGVjbGFyYXRpb25zXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcInF1ZXJ5XCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/db.ts\n");

/***/ }),

/***/ "(api)/./schema.ts":
/*!*******************!*\
  !*** ./schema.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favoritesArraySchema\": () => (/* binding */ favoritesArraySchema),\n/* harmony export */   \"favoritesSchema\": () => (/* binding */ favoritesSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);\nzod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst favoritesSchema = zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string()\n});\nconst favoritesArraySchema = zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].array(zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string()\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9CO0FBRWIsTUFBTUMsZUFBZSxHQUFHRCxrREFBUSxDQUFDO0lBQ3RDRyxJQUFJLEVBQUVILGtEQUFRLEVBQUU7Q0FDakIsQ0FBQyxDQUFDO0FBQ0ksTUFBTUssb0JBQW9CLEdBQUdMLGlEQUFPLENBQ3pDQSxrREFBUSxDQUFDO0lBQ1BHLElBQUksRUFBRUgsa0RBQVEsRUFBRTtDQUNqQixDQUFDLENBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub25pbWUvLi9zY2hlbWEudHM/MzFhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBmYXZvcml0ZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCksXG59KTtcbmV4cG9ydCBjb25zdCBmYXZvcml0ZXNBcnJheVNjaGVtYSA9IHouYXJyYXkoXG4gIHoub2JqZWN0KHtcbiAgICBuYW1lOiB6LnN0cmluZygpLFxuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJ6IiwiZmF2b3JpdGVzU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsImZhdm9yaXRlc0FycmF5U2NoZW1hIiwiYXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/favorites/get-favorites.ts"));
module.exports = __webpack_exports__;

})();