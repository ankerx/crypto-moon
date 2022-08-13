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
exports.id = "pages/api/favorites/delete";
exports.ids = ["pages/api/favorites/delete"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/favorites/delete.ts":
/*!***************************************!*\
  !*** ./pages/api/favorites/delete.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prisma_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prisma/db */ \"(api)/./prisma/db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const id = req.body.id;\n    await prisma_db__WEBPACK_IMPORTED_MODULE_0__.prisma.favorites[\"delete\"]({\n        where: {\n            name: id\n        }\n    });\n    try {\n        res.status(200).json(\"Successfully deleted\");\n    } catch (error) {\n        res.status(404).json(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3JpdGVzL2RlbGV0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNtQztBQUVuQyxpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ2xFLE1BQU1DLEVBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELEVBQUU7SUFFdEIsTUFBTUgsaUVBQXVCLENBQUM7UUFBRU8sS0FBSyxFQUFFO1lBQUVDLElBQUksRUFBRUwsRUFBRTtTQUFFO0tBQUUsQ0FBQyxDQUFDO0lBRXZELElBQUk7UUFDRkQsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQzlDLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2RULEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub25pbWUvLi9wYWdlcy9hcGkvZmF2b3JpdGVzL2RlbGV0ZS50cz84ZDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcInByaXNtYS9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgaWQgPSByZXEuYm9keS5pZDtcblxuICBhd2FpdCBwcmlzbWEuZmF2b3JpdGVzLmRlbGV0ZSh7IHdoZXJlOiB7IG5hbWU6IGlkIH0gfSk7XG5cbiAgdHJ5IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIlN1Y2Nlc3NmdWxseSBkZWxldGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKGVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJmYXZvcml0ZXMiLCJkZWxldGUiLCJ3aGVyZSIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/favorites/delete.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/favorites/delete.ts"));
module.exports = __webpack_exports__;

})();