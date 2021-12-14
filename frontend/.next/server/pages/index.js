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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./factory.js":
/*!********************!*\
  !*** ./factory.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./web3.js\");\n\nconst address = '0x587E66D42E786Fa2Ed7e6325fc7c76bBcA2F778e';\nconst abi = [\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"pMinContrib\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"CreateCampaign\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"gDeployedCampaigns\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"GetDeployedCampaigns\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address[]\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    }\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(abi, address));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQTRDO0FBRTVELEtBQUssQ0FBQ0MsR0FBRyxHQUNULENBQUM7SUFDQSxDQUFDO1FBQ0EsQ0FBVSxXQUFFLEtBQUs7UUFDakIsQ0FBUSxTQUFFLENBQUM7WUFDVixDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFhO2dCQUNyQixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFTLFVBQUUsQ0FBQyxDQUFDO1FBQ2IsQ0FBUyxVQUFFLEtBQUs7UUFDaEIsQ0FBaUIsa0JBQUUsQ0FBWTtRQUMvQixDQUFNLE9BQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNBLENBQVUsV0FBRSxJQUFJO1FBQ2hCLENBQVEsU0FBRSxDQUFDO1lBQ1YsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFvQjtRQUM1QixDQUFTLFVBQUUsQ0FBQztZQUNYLENBQUM7Z0JBQ0EsQ0FBTSxPQUFFLENBQUU7Z0JBQ1YsQ0FBTSxPQUFFLENBQVM7WUFDbEIsQ0FBQztRQUNGLENBQUM7UUFDRCxDQUFTLFVBQUUsS0FBSztRQUNoQixDQUFpQixrQkFBRSxDQUFNO1FBQ3pCLENBQU0sT0FBRSxDQUFVO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0EsQ0FBVSxXQUFFLElBQUk7UUFDaEIsQ0FBUSxTQUFFLENBQUMsQ0FBQztRQUNaLENBQU0sT0FBRSxDQUFzQjtRQUM5QixDQUFTLFVBQUUsQ0FBQztZQUNYLENBQUM7Z0JBQ0EsQ0FBTSxPQUFFLENBQUU7Z0JBQ1YsQ0FBTSxPQUFFLENBQVc7WUFDcEIsQ0FBQztRQUNGLENBQUM7UUFDRCxDQUFTLFVBQUUsS0FBSztRQUNoQixDQUFpQixrQkFBRSxDQUFNO1FBQ3pCLENBQU0sT0FBRSxDQUFVO0lBQ25CLENBQUM7QUFDRixDQUFDO0FBRUQsaUVBQWUsR0FBRyxDQUFDRiwwREFBaUIsQ0FBQ0UsR0FBRyxFQUFFRCxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZmFjdG9yeS5qcz9hNDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XHJcblxyXG5jb25zdCBhZGRyZXNzID0gJzB4NTg3RTY2RDQyRTc4NkZhMkVkN2U2MzI1ZmM3Yzc2YkJjQTJGNzc4ZSc7XHJcblxyXG5jb25zdCBhYmkgPSBcclxuW1xyXG5cdHtcclxuXHRcdFwiY29uc3RhbnRcIjogZmFsc2UsXHJcblx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJwTWluQ29udHJpYlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwiQ3JlYXRlQ2FtcGFpZ25cIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXSxcclxuXHRcdFwicGF5YWJsZVwiOiBmYWxzZSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb25zdGFudFwiOiB0cnVlLFxyXG5cdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcIm5hbWVcIjogXCJnRGVwbG95ZWRDYW1wYWlnbnNcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwicGF5YWJsZVwiOiBmYWxzZSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb25zdGFudFwiOiB0cnVlLFxyXG5cdFx0XCJpbnB1dHNcIjogW10sXHJcblx0XHRcIm5hbWVcIjogXCJHZXREZXBsb3llZENhbXBhaWduc1wiLFxyXG5cdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImFkZHJlc3NbXVwiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBhZGRyZXNzKTsiXSwibmFtZXMiOlsid2ViMyIsImFkZHJlc3MiLCJhYmkiLCJldGgiLCJDb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./factory.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ \"./factory.js\");\n\n\n\n\n// export default () => {\n//     return <h1>This is the campaign list page.</h1>\n// }\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps() {\n        //const campaigns = await factory.methods.GetDeployedCampaigns().call();\n        const campaigns = await _factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.GetDeployedCampaigns().call();\n        return {\n            campaigns: campaigns\n        };\n    }\n    // async componentDidMount(){\n    //     //const campaigns = await factory.methods.GetDeployedCampaigns().call();\n    //     console.log(campaigns);\n    // }\n    renderCampaigns() {\n        const items = this.props.campaigns.map((address)=>{\n            return {\n                header: address,\n                description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 30\n                    },\n                    __self: this,\n                    children: \"View Campaign\"\n                }),\n                fluid: true\n            };\n        });\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 16\n            },\n            __self: this\n        }));\n    }\n    render() {\n        //return <div>Campaigns Index</div>;\n        //return <div>{this.props.campaigns}</div>;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 16\n            },\n            __self: this,\n            children: this.renderCampaigns()\n        }));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignIndex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNSO0FBRWhDLEVBQXlCO0FBQ3pCLEVBQXNEO0FBQ3RELEVBQUk7TUFFRUksYUFBYSxTQUFTSCw0Q0FBUztpQkFDcEJJLGVBQWUsR0FBRSxDQUFDO1FBQzNCLEVBQXdFO1FBQ3hFLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQ0gsNkVBQW9DLEdBQUdNLElBQUk7UUFHbkUsTUFBTSxDQUFDLENBQUNIO1lBQUFBLFNBQVMsRUFBR0EsU0FBUztRQUFBLENBQUM7SUFDbEMsQ0FBQztJQUVELEVBQTZCO0lBQzdCLEVBQStFO0lBQy9FLEVBQThCO0lBQzlCLEVBQUk7SUFFSkksZUFBZSxHQUFFLENBQUM7UUFDZCxLQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sU0FBUyxDQUFDTyxHQUFHLEVBQUNDLE9BQU8sR0FBRSxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxDQUFDO2dCQUNKQyxNQUFNLEVBQUdELE9BQU87Z0JBQ2hCRSxXQUFXLHVFQUFHQyxDQUFDOzs7Ozs7OzhCQUFDLENBQWE7O2dCQUM3QkMsS0FBSyxFQUFFLElBQUk7WUFDZixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sc0VBQUVoQix5REFBVTtZQUFDUyxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7O0lBQ25DLENBQUM7SUFFRFMsTUFBTSxHQUFFLENBQUM7UUFDTCxFQUFvQztRQUNwQyxFQUEyQztRQUMzQyxNQUFNLHNFQUFFQyxDQUFHOzs7Ozs7O3NCQUFFLElBQUksQ0FBQ1gsZUFBZTs7SUFDckMsQ0FBQzs7QUFHTCxpRUFBZU4sYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2ZhY3RvcnknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIDxoMT5UaGlzIGlzIHRoZSBjYW1wYWlnbiBsaXN0IHBhZ2UuPC9oMT5cclxuLy8gfVxyXG5cclxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICAvL2NvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5HZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuR2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB7Y2FtcGFpZ25zIDogY2FtcGFpZ25zfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIC8vICAgICAvL2NvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5HZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlckNhbXBhaWducygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGFkZHJlc3M9PnsgLy8gVGhpcyBpcyB0aGUgbG9vcFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyIDogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8YT5WaWV3IENhbXBhaWduPC9hPixcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9yZXR1cm4gPGRpdj5DYW1wYWlnbnMgSW5kZXg8L2Rpdj47XHJcbiAgICAgICAgLy9yZXR1cm4gPGRpdj57dGhpcy5wcm9wcy5jYW1wYWlnbnN9PC9kaXY+O1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pnt0aGlzLnJlbmRlckNhbXBhaWducygpfTwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJmYWN0b3J5IiwiQ2FtcGFpZ25JbmRleCIsImdldEluaXRpYWxQcm9wcyIsImNhbXBhaWducyIsIm1ldGhvZHMiLCJHZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtcyIsInByb3BzIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiYSIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\n//const web3 = new Web3(window.web3.currentProvider); // provider provided automatically by metamask\nlet web3;\nif (false) {} else {\n    // We are on the server OR user is not running metamask\n    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://rinkeby.infura.io/v3/50ffb4aa2d03422da9dc47e7205e2397');\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QjtBQUN2QixFQUFvRztBQUVwRyxHQUFHLENBQUNDLElBQUk7QUFDUixFQUFFLEVBQUUsS0FBbUUsRUFBQyxFQUl2RSxNQUFJLENBQUM7SUFDRixFQUF1RDtJQUN2RCxLQUFLLENBQUNHLFFBQVEsR0FBRyxHQUFHLENBQUNKLG9FQUEyQixDQUM1QyxDQUErRDtJQUVuRUMsSUFBSSxHQUFHLEdBQUcsQ0FBQ0QsNkNBQUksQ0FBQ0ksUUFBUTtBQUU1QixDQUFDO0FBR0QsaUVBQWVILElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vd2ViMy5qcz9mNmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG4vL2NvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpOyAvLyBwcm92aWRlciBwcm92aWRlZCBhdXRvbWF0aWNhbGx5IGJ5IG1ldGFtYXNrXHJcblxyXG5sZXQgd2ViMztcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5zXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuXHJcbn1lbHNle1xyXG4gICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgT1IgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgICAgICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzUwZmZiNGFhMmQwMzQyMmRhOWRjNDdlNzIwNWUyMzk3J1xyXG4gICAgKTtcclxuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViMzsiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();