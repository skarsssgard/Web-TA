"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0";
exports.ids = ["vendor-chunks/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RemoveScrollBar = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar react_style_singleton_1 = __webpack_require__(/*! react-style-singleton */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.24_react@18.2.0/node_modules/react-style-singleton/dist/es5/index.js\");\nvar constants_1 = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js\");\nvar Style = (0, react_style_singleton_1.styleSingleton)();\n// important tip - once we measure scrollBar width and remove them\n// we could not repeat this operation\n// thus we are using style-singleton - only the first \"yet correct\" style will be applied.\nvar getStyles = function (_a, allowRelative, gapMode, important) {\n    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;\n    if (gapMode === void 0) { gapMode = 'margin'; }\n    return \"\\n  .\".concat(constants_1.noScrollbarsClassName, \" {\\n   overflow: hidden \").concat(important, \";\\n   padding-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  body {\\n    overflow: hidden \").concat(important, \";\\n    overscroll-behavior: contain;\\n    \").concat([\n        allowRelative && \"position: relative \".concat(important, \";\"),\n        gapMode === 'margin' &&\n            \"\\n    padding-left: \".concat(left, \"px;\\n    padding-top: \").concat(top, \"px;\\n    padding-right: \").concat(right, \"px;\\n    margin-left:0;\\n    margin-top:0;\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n    \"),\n        gapMode === 'padding' && \"padding-right: \".concat(gap, \"px \").concat(important, \";\"),\n    ]\n        .filter(Boolean)\n        .join(''), \"\\n  }\\n  \\n  .\").concat(constants_1.zeroRightClassName, \" {\\n    right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(constants_1.fullWidthClassName, \" {\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(constants_1.zeroRightClassName, \" .\").concat(constants_1.zeroRightClassName, \" {\\n    right: 0 \").concat(important, \";\\n  }\\n  \\n  .\").concat(constants_1.fullWidthClassName, \" .\").concat(constants_1.fullWidthClassName, \" {\\n    margin-right: 0 \").concat(important, \";\\n  }\\n  \\n  body {\\n    \").concat(constants_1.removedBarSizeVariable, \": \").concat(gap, \"px;\\n  }\\n\");\n};\n/**\n * Removes page scrollbar and blocks page scroll when mounted\n */\nvar RemoveScrollBar = function (props) {\n    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;\n    /*\n     gap will be measured on every component mount\n     however it will be used only by the \"first\" invocation\n     due to singleton nature of <Style\n     */\n    var gap = React.useMemo(function () { return (0, utils_1.getGapWidth)(gapMode); }, [gapMode]);\n    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });\n};\nexports.RemoveScrollBar = RemoveScrollBar;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjRfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9jb21wb25lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCLGNBQWMsbUJBQU8sQ0FBQyxzRkFBTztBQUM3QixpQ0FBaUMsbUJBQU8sQ0FBQyxxS0FBTztBQUNoRCw4QkFBOEIsbUJBQU8sQ0FBQyw0S0FBdUI7QUFDN0Qsa0JBQWtCLG1CQUFPLENBQUMsMEtBQWE7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLGtLQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixnRUFBZ0UsNkNBQTZDLDhEQUE4RCxLQUFLLFVBQVUsOENBQThDLG1DQUFtQztBQUMzUSxtRUFBbUU7QUFDbkU7QUFDQSxvREFBb0Qsc0NBQXNDLDBDQUEwQyxvQkFBb0IsbUJBQW1CLDhEQUE4RDtBQUN6TywwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLHlCQUF5QixzREFBc0QsdURBQXVELEtBQUssc0RBQXNELDhEQUE4RCxLQUFLLG1HQUFtRyxzQ0FBc0MsS0FBSyxtR0FBbUcsNkNBQTZDLEtBQUssY0FBYywwRUFBMEUsS0FBSztBQUNwb0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQ0FBMkM7QUFDckYsd0NBQXdDLGdGQUFnRjtBQUN4SDtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNF9AdHlwZXMrcmVhY3RAMTguMi4yNF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXM1L2NvbXBvbmVudC5qcz9jMGUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW1vdmVTY3JvbGxCYXIgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBSZWFjdCA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3Rfc3R5bGVfc2luZ2xldG9uXzEgPSByZXF1aXJlKFwicmVhY3Qtc3R5bGUtc2luZ2xldG9uXCIpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBTdHlsZSA9ICgwLCByZWFjdF9zdHlsZV9zaW5nbGV0b25fMS5zdHlsZVNpbmdsZXRvbikoKTtcbi8vIGltcG9ydGFudCB0aXAgLSBvbmNlIHdlIG1lYXN1cmUgc2Nyb2xsQmFyIHdpZHRoIGFuZCByZW1vdmUgdGhlbVxuLy8gd2UgY291bGQgbm90IHJlcGVhdCB0aGlzIG9wZXJhdGlvblxuLy8gdGh1cyB3ZSBhcmUgdXNpbmcgc3R5bGUtc2luZ2xldG9uIC0gb25seSB0aGUgZmlyc3QgXCJ5ZXQgY29ycmVjdFwiIHN0eWxlIHdpbGwgYmUgYXBwbGllZC5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAoX2EsIGFsbG93UmVsYXRpdmUsIGdhcE1vZGUsIGltcG9ydGFudCkge1xuICAgIHZhciBsZWZ0ID0gX2EubGVmdCwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBnYXAgPSBfYS5nYXA7XG4gICAgaWYgKGdhcE1vZGUgPT09IHZvaWQgMCkgeyBnYXBNb2RlID0gJ21hcmdpbic7IH1cbiAgICByZXR1cm4gXCJcXG4gIC5cIi5jb25jYXQoY29uc3RhbnRzXzEubm9TY3JvbGxiYXJzQ2xhc3NOYW1lLCBcIiB7XFxuICAgb3ZlcmZsb3c6IGhpZGRlbiBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICAgcGFkZGluZy1yaWdodDogXCIpLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xcbiAgICBcIikuY29uY2F0KFtcbiAgICAgICAgYWxsb3dSZWxhdGl2ZSAmJiBcInBvc2l0aW9uOiByZWxhdGl2ZSBcIi5jb25jYXQoaW1wb3J0YW50LCBcIjtcIiksXG4gICAgICAgIGdhcE1vZGUgPT09ICdtYXJnaW4nICYmXG4gICAgICAgICAgICBcIlxcbiAgICBwYWRkaW5nLWxlZnQ6IFwiLmNvbmNhdChsZWZ0LCBcInB4O1xcbiAgICBwYWRkaW5nLXRvcDogXCIpLmNvbmNhdCh0b3AsIFwicHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IFwiKS5jb25jYXQocmlnaHQsIFwicHg7XFxuICAgIG1hcmdpbi1sZWZ0OjA7XFxuICAgIG1hcmdpbi10b3A6MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICAgIFwiKSxcbiAgICAgICAgZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnICYmIFwicGFkZGluZy1yaWdodDogXCIuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XCIpLFxuICAgIF1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignJyksIFwiXFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KGNvbnN0YW50c18xLnplcm9SaWdodENsYXNzTmFtZSwgXCIge1xcbiAgICByaWdodDogXCIpLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICAuXCIpLmNvbmNhdChjb25zdGFudHNfMS5mdWxsV2lkdGhDbGFzc05hbWUsIFwiIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KGNvbnN0YW50c18xLnplcm9SaWdodENsYXNzTmFtZSwgXCIgLlwiKS5jb25jYXQoY29uc3RhbnRzXzEuemVyb1JpZ2h0Q2xhc3NOYW1lLCBcIiB7XFxuICAgIHJpZ2h0OiAwIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoY29uc3RhbnRzXzEuZnVsbFdpZHRoQ2xhc3NOYW1lLCBcIiAuXCIpLmNvbmNhdChjb25zdGFudHNfMS5mdWxsV2lkdGhDbGFzc05hbWUsIFwiIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIFwiKS5jb25jYXQoY29uc3RhbnRzXzEucmVtb3ZlZEJhclNpemVWYXJpYWJsZSwgXCI6IFwiKS5jb25jYXQoZ2FwLCBcInB4O1xcbiAgfVxcblwiKTtcbn07XG4vKipcbiAqIFJlbW92ZXMgcGFnZSBzY3JvbGxiYXIgYW5kIGJsb2NrcyBwYWdlIHNjcm9sbCB3aGVuIG1vdW50ZWRcbiAqL1xudmFyIFJlbW92ZVNjcm9sbEJhciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBub1JlbGF0aXZlID0gcHJvcHMubm9SZWxhdGl2ZSwgbm9JbXBvcnRhbnQgPSBwcm9wcy5ub0ltcG9ydGFudCwgX2EgPSBwcm9wcy5nYXBNb2RlLCBnYXBNb2RlID0gX2EgPT09IHZvaWQgMCA/ICdtYXJnaW4nIDogX2E7XG4gICAgLypcbiAgICAgZ2FwIHdpbGwgYmUgbWVhc3VyZWQgb24gZXZlcnkgY29tcG9uZW50IG1vdW50XG4gICAgIGhvd2V2ZXIgaXQgd2lsbCBiZSB1c2VkIG9ubHkgYnkgdGhlIFwiZmlyc3RcIiBpbnZvY2F0aW9uXG4gICAgIGR1ZSB0byBzaW5nbGV0b24gbmF0dXJlIG9mIDxTdHlsZVxuICAgICAqL1xuICAgIHZhciBnYXAgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICgwLCB1dGlsc18xLmdldEdhcFdpZHRoKShnYXBNb2RlKTsgfSwgW2dhcE1vZGVdKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZSwgeyBzdHlsZXM6IGdldFN0eWxlcyhnYXAsICFub1JlbGF0aXZlLCBnYXBNb2RlLCAhbm9JbXBvcnRhbnQgPyAnIWltcG9ydGFudCcgOiAnJykgfSk7XG59O1xuZXhwb3J0cy5SZW1vdmVTY3JvbGxCYXIgPSBSZW1vdmVTY3JvbGxCYXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;\nexports.zeroRightClassName = 'right-scroll-bar-position';\nexports.fullWidthClassName = 'width-before-scroll-bar';\nexports.noScrollbarsClassName = 'with-scroll-bars-hidden';\n/**\n * Name of a CSS variable containing the amount of \"hidden\" scrollbar\n * ! might be undefined ! use will fallback!\n */\nexports.removedBarSizeVariable = '--removed-body-scroll-bar-size';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjRfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLEdBQUcsNkJBQTZCLEdBQUcsMEJBQTBCLEdBQUcsMEJBQTBCO0FBQ3hILDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyQDIuMy40X0B0eXBlcytyZWFjdEAxOC4yLjI0X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczUvY29uc3RhbnRzLmpzP2M1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW92ZWRCYXJTaXplVmFyaWFibGUgPSBleHBvcnRzLm5vU2Nyb2xsYmFyc0NsYXNzTmFtZSA9IGV4cG9ydHMuZnVsbFdpZHRoQ2xhc3NOYW1lID0gZXhwb3J0cy56ZXJvUmlnaHRDbGFzc05hbWUgPSB2b2lkIDA7XG5leHBvcnRzLnplcm9SaWdodENsYXNzTmFtZSA9ICdyaWdodC1zY3JvbGwtYmFyLXBvc2l0aW9uJztcbmV4cG9ydHMuZnVsbFdpZHRoQ2xhc3NOYW1lID0gJ3dpZHRoLWJlZm9yZS1zY3JvbGwtYmFyJztcbmV4cG9ydHMubm9TY3JvbGxiYXJzQ2xhc3NOYW1lID0gJ3dpdGgtc2Nyb2xsLWJhcnMtaGlkZGVuJztcbi8qKlxuICogTmFtZSBvZiBhIENTUyB2YXJpYWJsZSBjb250YWluaW5nIHRoZSBhbW91bnQgb2YgXCJoaWRkZW5cIiBzY3JvbGxiYXJcbiAqICEgbWlnaHQgYmUgdW5kZWZpbmVkICEgdXNlIHdpbGwgZmFsbGJhY2shXG4gKi9cbmV4cG9ydHMucmVtb3ZlZEJhclNpemVWYXJpYWJsZSA9ICctLXJlbW92ZWQtYm9keS1zY3JvbGwtYmFyLXNpemUnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/index.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;\nvar component_1 = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js\");\nObject.defineProperty(exports, \"RemoveScrollBar\", ({ enumerable: true, get: function () { return component_1.RemoveScrollBar; } }));\nvar constants_1 = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js\");\nObject.defineProperty(exports, \"zeroRightClassName\", ({ enumerable: true, get: function () { return constants_1.zeroRightClassName; } }));\nObject.defineProperty(exports, \"fullWidthClassName\", ({ enumerable: true, get: function () { return constants_1.fullWidthClassName; } }));\nObject.defineProperty(exports, \"noScrollbarsClassName\", ({ enumerable: true, get: function () { return constants_1.noScrollbarsClassName; } }));\nObject.defineProperty(exports, \"removedBarSizeVariable\", ({ enumerable: true, get: function () { return constants_1.removedBarSizeVariable; } }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js\");\nObject.defineProperty(exports, \"getGapWidth\", ({ enumerable: true, get: function () { return utils_1.getGapWidth; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjRfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyw4QkFBOEIsR0FBRyw2QkFBNkIsR0FBRywwQkFBMEIsR0FBRywwQkFBMEIsR0FBRyx1QkFBdUI7QUFDeEssa0JBQWtCLG1CQUFPLENBQUMsMEtBQWE7QUFDdkMsbURBQWtELEVBQUUscUNBQXFDLHVDQUF1QyxFQUFDO0FBQ2pJLGtCQUFrQixtQkFBTyxDQUFDLDBLQUFhO0FBQ3ZDLHNEQUFxRCxFQUFFLHFDQUFxQywwQ0FBMEMsRUFBQztBQUN2SSxzREFBcUQsRUFBRSxxQ0FBcUMsMENBQTBDLEVBQUM7QUFDdkkseURBQXdELEVBQUUscUNBQXFDLDZDQUE2QyxFQUFDO0FBQzdJLDBEQUF5RCxFQUFFLHFDQUFxQyw4Q0FBOEMsRUFBQztBQUMvSSxjQUFjLG1CQUFPLENBQUMsa0tBQVM7QUFDL0IsK0NBQThDLEVBQUUscUNBQXFDLCtCQUErQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyQDIuMy40X0B0eXBlcytyZWFjdEAxOC4yLjI0X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczUvaW5kZXguanM/M2EyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0R2FwV2lkdGggPSBleHBvcnRzLnJlbW92ZWRCYXJTaXplVmFyaWFibGUgPSBleHBvcnRzLm5vU2Nyb2xsYmFyc0NsYXNzTmFtZSA9IGV4cG9ydHMuZnVsbFdpZHRoQ2xhc3NOYW1lID0gZXhwb3J0cy56ZXJvUmlnaHRDbGFzc05hbWUgPSBleHBvcnRzLlJlbW92ZVNjcm9sbEJhciA9IHZvaWQgMDtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJlbW92ZVNjcm9sbEJhclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9uZW50XzEuUmVtb3ZlU2Nyb2xsQmFyOyB9IH0pO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiemVyb1JpZ2h0Q2xhc3NOYW1lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zdGFudHNfMS56ZXJvUmlnaHRDbGFzc05hbWU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmdWxsV2lkdGhDbGFzc05hbWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnN0YW50c18xLmZ1bGxXaWR0aENsYXNzTmFtZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vU2Nyb2xsYmFyc0NsYXNzTmFtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc3RhbnRzXzEubm9TY3JvbGxiYXJzQ2xhc3NOYW1lOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVtb3ZlZEJhclNpemVWYXJpYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc3RhbnRzXzEucmVtb3ZlZEJhclNpemVWYXJpYWJsZTsgfSB9KTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRHYXBXaWR0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbHNfMS5nZXRHYXBXaWR0aDsgfSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getGapWidth = exports.zeroGap = void 0;\nexports.zeroGap = {\n    left: 0,\n    top: 0,\n    right: 0,\n    gap: 0,\n};\nvar parse = function (x) { return parseInt(x || '', 10) || 0; };\nvar getOffset = function (gapMode) {\n    var cs = window.getComputedStyle(document.body);\n    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];\n    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];\n    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];\n    return [parse(left), parse(top), parse(right)];\n};\nvar getGapWidth = function (gapMode) {\n    if (gapMode === void 0) { gapMode = 'margin'; }\n    if (typeof window === 'undefined') {\n        return exports.zeroGap;\n    }\n    var offsets = getOffset(gapMode);\n    var documentWidth = document.documentElement.clientWidth;\n    var windowWidth = window.innerWidth;\n    return {\n        left: offsets[0],\n        top: offsets[1],\n        right: offsets[2],\n        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),\n    };\n};\nexports.getGapWidth = getGapWidth;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjRfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS91dGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyxlQUFlO0FBQ3JDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjRfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS91dGlscy5qcz82YjJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRHYXBXaWR0aCA9IGV4cG9ydHMuemVyb0dhcCA9IHZvaWQgMDtcbmV4cG9ydHMuemVyb0dhcCA9IHtcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBnYXA6IDAsXG59O1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHBhcnNlSW50KHggfHwgJycsIDEwKSB8fCAwOyB9O1xudmFyIGdldE9mZnNldCA9IGZ1bmN0aW9uIChnYXBNb2RlKSB7XG4gICAgdmFyIGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgdmFyIGxlZnQgPSBjc1tnYXBNb2RlID09PSAncGFkZGluZycgPyAncGFkZGluZ0xlZnQnIDogJ21hcmdpbkxlZnQnXTtcbiAgICB2YXIgdG9wID0gY3NbZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnID8gJ3BhZGRpbmdUb3AnIDogJ21hcmdpblRvcCddO1xuICAgIHZhciByaWdodCA9IGNzW2dhcE1vZGUgPT09ICdwYWRkaW5nJyA/ICdwYWRkaW5nUmlnaHQnIDogJ21hcmdpblJpZ2h0J107XG4gICAgcmV0dXJuIFtwYXJzZShsZWZ0KSwgcGFyc2UodG9wKSwgcGFyc2UocmlnaHQpXTtcbn07XG52YXIgZ2V0R2FwV2lkdGggPSBmdW5jdGlvbiAoZ2FwTW9kZSkge1xuICAgIGlmIChnYXBNb2RlID09PSB2b2lkIDApIHsgZ2FwTW9kZSA9ICdtYXJnaW4nOyB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLnplcm9HYXA7XG4gICAgfVxuICAgIHZhciBvZmZzZXRzID0gZ2V0T2Zmc2V0KGdhcE1vZGUpO1xuICAgIHZhciBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IG9mZnNldHNbMF0sXG4gICAgICAgIHRvcDogb2Zmc2V0c1sxXSxcbiAgICAgICAgcmlnaHQ6IG9mZnNldHNbMl0sXG4gICAgICAgIGdhcDogTWF0aC5tYXgoMCwgd2luZG93V2lkdGggLSBkb2N1bWVudFdpZHRoICsgb2Zmc2V0c1syXSAtIG9mZnNldHNbMF0pLFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRHYXBXaWR0aCA9IGdldEdhcFdpZHRoO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.24_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js\n");

/***/ })

};
;