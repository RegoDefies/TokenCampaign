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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./web3.js\");\n\nconst address = '0x587E66D42E786Fa2Ed7e6325fc7c76bBcA2F778e';\nconst abi = [\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"pRequestIndex\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"FinalizeRequest\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"name\": \"gApprovers\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"bool\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"gApproversCounter\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"pDescription\",\n                \"type\": \"string\"\n            },\n            {\n                \"name\": \"pValue\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"name\": \"pRecipient\",\n                \"type\": \"address\"\n            }\n        ],\n        \"name\": \"CreateRequest\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [],\n        \"name\": \"Contribute\",\n        \"outputs\": [],\n        \"payable\": true,\n        \"stateMutability\": \"payable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"gManager\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"gRequests\",\n        \"outputs\": [\n            {\n                \"name\": \"description\",\n                \"type\": \"string\"\n            },\n            {\n                \"name\": \"value\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"name\": \"recipient\",\n                \"type\": \"address\"\n            },\n            {\n                \"name\": \"complete\",\n                \"type\": \"bool\"\n            },\n            {\n                \"name\": \"approvals_counter\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"gMinContrib\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"pRequestIndex\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"ApproveRequest\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"name\": \"pMinContrib\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"name\": \"pCampaignCreator\",\n                \"type\": \"address\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    }\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(abi, address));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQTRDO0FBRTVELEtBQUssQ0FBQ0MsR0FBRyxHQUNULENBQUM7SUFDQSxDQUFDO1FBQ0EsQ0FBVSxXQUFFLEtBQUs7UUFDakIsQ0FBUSxTQUFFLENBQUM7WUFDVixDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFlO2dCQUN2QixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFTLFVBQUUsQ0FBQyxDQUFDO1FBQ2IsQ0FBUyxVQUFFLEtBQUs7UUFDaEIsQ0FBaUIsa0JBQUUsQ0FBWTtRQUMvQixDQUFNLE9BQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNBLENBQVUsV0FBRSxJQUFJO1FBQ2hCLENBQVEsU0FBRSxDQUFDO1lBQ1YsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFZO1FBQ3BCLENBQVMsVUFBRSxDQUFDO1lBQ1gsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBTTtZQUNmLENBQUM7UUFDRixDQUFDO1FBQ0QsQ0FBUyxVQUFFLEtBQUs7UUFDaEIsQ0FBaUIsa0JBQUUsQ0FBTTtRQUN6QixDQUFNLE9BQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNBLENBQVUsV0FBRSxJQUFJO1FBQ2hCLENBQVEsU0FBRSxDQUFDLENBQUM7UUFDWixDQUFNLE9BQUUsQ0FBbUI7UUFDM0IsQ0FBUyxVQUFFLENBQUM7WUFDWCxDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFFO2dCQUNWLENBQU0sT0FBRSxDQUFTO1lBQ2xCLENBQUM7UUFDRixDQUFDO1FBQ0QsQ0FBUyxVQUFFLEtBQUs7UUFDaEIsQ0FBaUIsa0JBQUUsQ0FBTTtRQUN6QixDQUFNLE9BQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNBLENBQVUsV0FBRSxLQUFLO1FBQ2pCLENBQVEsU0FBRSxDQUFDO1lBQ1YsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBYztnQkFDdEIsQ0FBTSxPQUFFLENBQVE7WUFDakIsQ0FBQztZQUNELENBQUM7Z0JBQ0EsQ0FBTSxPQUFFLENBQVE7Z0JBQ2hCLENBQU0sT0FBRSxDQUFTO1lBQ2xCLENBQUM7WUFDRCxDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFZO2dCQUNwQixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQVMsVUFBRSxDQUFDLENBQUM7UUFDYixDQUFTLFVBQUUsS0FBSztRQUNoQixDQUFpQixrQkFBRSxDQUFZO1FBQy9CLENBQU0sT0FBRSxDQUFVO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0EsQ0FBVSxXQUFFLEtBQUs7UUFDakIsQ0FBUSxTQUFFLENBQUMsQ0FBQztRQUNaLENBQU0sT0FBRSxDQUFZO1FBQ3BCLENBQVMsVUFBRSxDQUFDLENBQUM7UUFDYixDQUFTLFVBQUUsSUFBSTtRQUNmLENBQWlCLGtCQUFFLENBQVM7UUFDNUIsQ0FBTSxPQUFFLENBQVU7SUFDbkIsQ0FBQztJQUNELENBQUM7UUFDQSxDQUFVLFdBQUUsSUFBSTtRQUNoQixDQUFRLFNBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBUyxVQUFFLENBQUM7WUFDWCxDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFFO2dCQUNWLENBQU0sT0FBRSxDQUFTO1lBQ2xCLENBQUM7UUFDRixDQUFDO1FBQ0QsQ0FBUyxVQUFFLEtBQUs7UUFDaEIsQ0FBaUIsa0JBQUUsQ0FBTTtRQUN6QixDQUFNLE9BQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNBLENBQVUsV0FBRSxJQUFJO1FBQ2hCLENBQVEsU0FBRSxDQUFDO1lBQ1YsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQU0sT0FBRSxDQUFXO1FBQ25CLENBQVMsVUFBRSxDQUFDO1lBQ1gsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBYTtnQkFDckIsQ0FBTSxPQUFFLENBQVE7WUFDakIsQ0FBQztZQUNELENBQUM7Z0JBQ0EsQ0FBTSxPQUFFLENBQU87Z0JBQ2YsQ0FBTSxPQUFFLENBQVM7WUFDbEIsQ0FBQztZQUNELENBQUM7Z0JBQ0EsQ0FBTSxPQUFFLENBQVc7Z0JBQ25CLENBQU0sT0FBRSxDQUFTO1lBQ2xCLENBQUM7WUFDRCxDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFVO2dCQUNsQixDQUFNLE9BQUUsQ0FBTTtZQUNmLENBQUM7WUFDRCxDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFtQjtnQkFDM0IsQ0FBTSxPQUFFLENBQVM7WUFDbEIsQ0FBQztRQUNGLENBQUM7UUFDRCxDQUFTLFVBQUUsS0FBSztRQUNoQixDQUFpQixrQkFBRSxDQUFNO1FBQ3pCLENBQU0sT0FBRSxDQUFVO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0EsQ0FBVSxXQUFFLElBQUk7UUFDaEIsQ0FBUSxTQUFFLENBQUMsQ0FBQztRQUNaLENBQU0sT0FBRSxDQUFhO1FBQ3JCLENBQVMsVUFBRSxDQUFDO1lBQ1gsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBRTtnQkFDVixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0YsQ0FBQztRQUNELENBQVMsVUFBRSxLQUFLO1FBQ2hCLENBQWlCLGtCQUFFLENBQU07UUFDekIsQ0FBTSxPQUFFLENBQVU7SUFDbkIsQ0FBQztJQUNELENBQUM7UUFDQSxDQUFVLFdBQUUsS0FBSztRQUNqQixDQUFRLFNBQUUsQ0FBQztZQUNWLENBQUM7Z0JBQ0EsQ0FBTSxPQUFFLENBQWU7Z0JBQ3ZCLENBQU0sT0FBRSxDQUFTO1lBQ2xCLENBQUM7UUFDRixDQUFDO1FBQ0QsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQVMsVUFBRSxDQUFDLENBQUM7UUFDYixDQUFTLFVBQUUsS0FBSztRQUNoQixDQUFpQixrQkFBRSxDQUFZO1FBQy9CLENBQU0sT0FBRSxDQUFVO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0EsQ0FBUSxTQUFFLENBQUM7WUFDVixDQUFDO2dCQUNBLENBQU0sT0FBRSxDQUFhO2dCQUNyQixDQUFNLE9BQUUsQ0FBUztZQUNsQixDQUFDO1lBQ0QsQ0FBQztnQkFDQSxDQUFNLE9BQUUsQ0FBa0I7Z0JBQzFCLENBQU0sT0FBRSxDQUFTO1lBQ2xCLENBQUM7UUFDRixDQUFDO1FBQ0QsQ0FBUyxVQUFFLEtBQUs7UUFDaEIsQ0FBaUIsa0JBQUUsQ0FBWTtRQUMvQixDQUFNLE9BQUUsQ0FBYTtJQUN0QixDQUFDO0FBQ0YsQ0FBQztBQUVELGlFQUFlLEdBQUcsQ0FBQ0YsMERBQWlCLENBQUNFLEdBQUcsRUFBRUQsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2ZhY3RvcnkuanM/YTQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2ViMyBmcm9tICcuL3dlYjMnO1xyXG5cclxuY29uc3QgYWRkcmVzcyA9ICcweDU4N0U2NkQ0MkU3ODZGYTJFZDdlNjMyNWZjN2M3NmJCY0EyRjc3OGUnO1xyXG5cclxuY29uc3QgYWJpID0gXHJcbltcclxuXHR7XHJcblx0XHRcImNvbnN0YW50XCI6IGZhbHNlLFxyXG5cdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwicFJlcXVlc3RJbmRleFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwiRmluYWxpemVSZXF1ZXN0XCIsXHJcblx0XHRcIm91dHB1dHNcIjogW10sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZSxcclxuXHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwiZ0FwcHJvdmVyc1wiLFxyXG5cdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImJvb2xcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJwYXlhYmxlXCI6IGZhbHNlLFxyXG5cdFx0XCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcblx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbnN0YW50XCI6IHRydWUsXHJcblx0XHRcImlucHV0c1wiOiBbXSxcclxuXHRcdFwibmFtZVwiOiBcImdBcHByb3ZlcnNDb3VudGVyXCIsXHJcblx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29uc3RhbnRcIjogZmFsc2UsXHJcblx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJwRGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwicFZhbHVlXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJwUmVjaXBpZW50XCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcIm5hbWVcIjogXCJDcmVhdGVSZXF1ZXN0XCIsXHJcblx0XHRcIm91dHB1dHNcIjogW10sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29uc3RhbnRcIjogZmFsc2UsXHJcblx0XHRcImlucHV0c1wiOiBbXSxcclxuXHRcdFwibmFtZVwiOiBcIkNvbnRyaWJ1dGVcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXSxcclxuXHRcdFwicGF5YWJsZVwiOiB0cnVlLFxyXG5cdFx0XCJzdGF0ZU11dGFiaWxpdHlcIjogXCJwYXlhYmxlXCIsXHJcblx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbnN0YW50XCI6IHRydWUsXHJcblx0XHRcImlucHV0c1wiOiBbXSxcclxuXHRcdFwibmFtZVwiOiBcImdNYW5hZ2VyXCIsXHJcblx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZSxcclxuXHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwiZ1JlcXVlc3RzXCIsXHJcblx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwidmFsdWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcInJlY2lwaWVudFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiY29tcGxldGVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJib29sXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcImFwcHJvdmFsc19jb3VudGVyXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZSxcclxuXHRcdFwiaW5wdXRzXCI6IFtdLFxyXG5cdFx0XCJuYW1lXCI6IFwiZ01pbkNvbnRyaWJcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwicGF5YWJsZVwiOiBmYWxzZSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb25zdGFudFwiOiBmYWxzZSxcclxuXHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcInBSZXF1ZXN0SW5kZXhcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwibmFtZVwiOiBcIkFwcHJvdmVSZXF1ZXN0XCIsXHJcblx0XHRcIm91dHB1dHNcIjogW10sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcInBNaW5Db250cmliXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJwQ2FtcGFpZ25DcmVhdG9yXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInBheWFibGVcIjogZmFsc2UsXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuXHRcdFwidHlwZVwiOiBcImNvbnN0cnVjdG9yXCJcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBhZGRyZXNzKTsiXSwibmFtZXMiOlsid2ViMyIsImFkZHJlc3MiLCJhYmkiLCJldGgiLCJDb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./factory.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ \"./factory.js\");\n\n\n\n// export default () => {\n//     return <h1>This is the campaign list page.</h1>\n// }\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    async componentDidMount() {\n        const campaigns = await _factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call();\n        console.log(campaigns);\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 16\n            },\n            __self: this,\n            children: \"Campaigns Index\"\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ1I7QUFFaEMsRUFBeUI7QUFDekIsRUFBc0Q7QUFDdEQsRUFBSTtNQUVFRyxhQUFhLFNBQVNGLDRDQUFTO1VBQzNCRyxpQkFBaUIsR0FBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQ0gsNkVBQW9DLEdBQUdNLElBQUk7UUFFbkVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxTQUFTO0lBQ3pCLENBQUM7SUFFRE0sTUFBTSxHQUFFLENBQUM7UUFDTCxNQUFNLHNFQUFFQyxDQUFHOzs7Ozs7O3NCQUFDLENBQWU7O0lBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZmFjdG9yeSc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4gPGgxPlRoaXMgaXMgdGhlIGNhbXBhaWduIGxpc3QgcGFnZS48L2gxPlxyXG4vLyB9XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhbXBhaWducyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+Q2FtcGFpZ25zIEluZGV4PC9kaXY+XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5IiwiQ2FtcGFpZ25JbmRleCIsImNvbXBvbmVudERpZE1vdW50IiwiY2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider); // provider provided automatically by metamask\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QjtBQUN2QixLQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNELDZDQUFJLENBQUNFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxlQUFlLEVBQUcsQ0FBOEM7QUFDbEcsaUVBQWVGLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vd2ViMy5qcz9mNmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTsgLy8gcHJvdmlkZXIgcHJvdmlkZWQgYXV0b21hdGljYWxseSBieSBtZXRhbWFza1xyXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3.js\n");

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