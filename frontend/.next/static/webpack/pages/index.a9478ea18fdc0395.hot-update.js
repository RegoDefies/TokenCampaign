"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var P_SNG_TokenCampaign_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var P_SNG_TokenCampaign_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(P_SNG_TokenCampaign_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ \"./factory.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n // https://react.semantic-ui.com/\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar CampaignIndex = // export default () => {\n//     return <h1>This is the campaign list page.</h1>\n// }\n/*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(CampaignIndex, Component);\n    var _super = _createSuper(CampaignIndex);\n    function CampaignIndex() {\n        _classCallCheck(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    _createClass(CampaignIndex, [\n        {\n            // async componentDidMount(){\n            //     //const campaigns = await factory.methods.GetDeployedCampaigns().call();\n            //     console.log(campaigns);\n            // }\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                var _this = this;\n                var items = this.props.campaigns.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            __source: {\n                                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 30\n                            },\n                            __self: _this,\n                            children: \"View Campaign\"\n                        }),\n                        fluid: true\n                    };\n                });\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                    items: items,\n                    __source: {\n                        fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 16\n                    },\n                    __self: this\n                }));\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                //return <div>Campaigns Index</div>;\n                //return <div>{this.props.campaigns}</div>;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 16\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css\",\n                            __source: {\n                                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"Campaign Factory\"\n                        }),\n                        this.renderCampaigns(),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            content: \"Create Campaign\",\n                            icon: \"add circle\",\n                            primary: true,\n                            __source: {\n                                fileName: \"P:\\\\SNG.TokenCampaign\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        })\n                    ]\n                }));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(P_SNG_TokenCampaign_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaigns;\n                    return P_SNG_TokenCampaign_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.GetDeployedCampaigns().call();\n                            case 2:\n                                campaigns = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    campaigns: campaigns\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDVSxDQUFpQztBQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU0xQkssYUFBYSxHQUpuQixFQUF5QjtBQUN6QixFQUFzRDtBQUN0RCxFQUFJO2NBRUosUUFBUTs7Y0FBRkEsYUFBYTs4QkFBYkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhOzs7aUJBQWJBLGFBQWE7O1lBU2YsRUFBNkI7WUFDN0IsRUFBK0U7WUFDL0UsRUFBOEI7WUFDOUIsRUFBSTtZQUVKQyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxHQUFFLENBQUM7O2dCQUFBLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPLEVBQUUsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLENBQUM7d0JBQ0pDLE1BQU0sRUFBR0QsT0FBTzt3QkFDaEJFLFdBQVcsdUVBQUdDLENBQUM7Ozs7Ozs7c0NBQUMsQ0FBYTs7d0JBQzdCQyxLQUFLLEVBQUUsSUFBSTtvQkFDZixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsTUFBTSxzRUFBRWIseURBQVU7b0JBQUNLLEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozs7WUFDbkMsQ0FBQzs7O1lBRURVLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUUsQ0FBQztnQkFDTCxFQUFvQztnQkFDcEMsRUFBMkM7Z0JBQzNDLE1BQU0sdUVBQUVDLENBQUc7Ozs7Ozs7OzZGQUNOQyxDQUFJOzRCQUFDQyxHQUFHLEVBQUMsQ0FBWTs0QkFBQ0MsSUFBSSxFQUFDLENBQXNFOzs7Ozs7Ozs2RkFFakdDLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBZ0I7O3dCQUNuQixJQUFJLENBQUNoQixlQUFlOzZGQUNwQkgscURBQU07NEJBQ0hvQixPQUFPLEVBQUMsQ0FBaUI7NEJBQ3pCQyxJQUFJLEVBQUMsQ0FBWTs0QkFDakJDLE9BQU87Ozs7Ozs7Ozs7WUFHbkIsQ0FBQzs7OztZQXJDWUMsR0FBZSxFQUFmQSxDQUFlO21CQUE1QixRQUFRLENBQUtBLGVBQWU7OEpBQTVCLFFBQVEsV0FBc0IsQ0FBQzt3QkFFckJqQixTQUFTOzs7Ozt1Q0FBU0wsNkVBQW9DLEdBQUd5QixJQUFJOztnQ0FBN0RwQixTQUFTOzZEQUdSLENBQUNBO29DQUFBQSxTQUFTLEVBQUdBLFNBQVM7Z0NBQUEsQ0FBQzs7Ozs7O2dCQUNsQyxDQUFDOzs7O1dBUENKLGFBQWE7RUFBU0osNENBQVM7QUF5Q3JDLCtEQUFlSSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7IC8vIGh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9mYWN0b3J5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuLy8gICAgIHJldHVybiA8aDE+VGhpcyBpcyB0aGUgY2FtcGFpZ24gbGlzdCBwYWdlLjwvaDE+XHJcbi8vIH1cclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XHJcbiAgICAgICAgLy9jb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuR2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLkdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4ge2NhbXBhaWducyA6IGNhbXBhaWduc307XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAvLyAgICAgLy9jb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuR2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coY2FtcGFpZ25zKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXJDYW1wYWlnbnMoKXtjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzPT57IC8vIFRoaXMgaXMgdGhlIGxvb3BcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlciA6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBDYW1wYWlnbjwvYT4sXHJcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vcmV0dXJuIDxkaXY+Q2FtcGFpZ25zIEluZGV4PC9kaXY+O1xyXG4gICAgICAgIC8vcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMuY2FtcGFpZ25zfTwvZGl2PjtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8aDE+Q2FtcGFpZ24gRmFjdG9yeTwvaDE+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PSdDcmVhdGUgQ2FtcGFpZ24nXHJcbiAgICAgICAgICAgICAgICBpY29uPSdhZGQgY2lyY2xlJ1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiZmFjdG9yeSIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiYSIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsImgxIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwibWV0aG9kcyIsIkdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});