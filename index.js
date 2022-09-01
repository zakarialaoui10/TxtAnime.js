(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/TxtAnime.js":
/*!**************************!*\
  !*** ./dist/TxtAnime.js ***!
  \**************************/
/***/ (() => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/TxtAnime.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/TxtAnime.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_594__) => {

__nested_webpack_require_594__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_594__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_594__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_594__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_594__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_594__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tx-an-1 {\n  display: inline-block;\n  animation: tx-an-1 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-1 {\n  0% {\n    opacity: 0;\n    transform: translateY(150px) translateX(150px) rotate(200deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) translateX(0) rotateZ(0);\n  }\n}\n\n.tx-an-2 {\n  display: inline-block;\n  animation: tx-an-2 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-2 {\n  0% {\n    opacity: 0;\n    transform: translateY(-200px) translateX(150px) rotate(-280deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) translateX(0) rotate(0);\n  }\n}\n\n.tx-an-3 {\n  display: inline-block;\n  animation: tx-an-3 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-3 {\n  0% {\n    opacity: 0;\n    transform: translateX(100px) scale(10);\n    filter: blur(5);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n    filter: blur(0);\n  }\n}\n\n.tx-an-4 {\n  display: inline-block;\n  animation: tx-an-4 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-4 {\n  0% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n.tx-an-5 {\n  display: inline-block;\n  animation: tx-an-5 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-5 {\n  0% {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n.tx-an-6 {\n  display: inline-block;\n  animation: tx-an-6 cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-6 {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.tx-an-7 {\n  display: inline-block;\n  animation: tx-an-7 cubic-bezier(0, 0.55, 0.45, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-7 {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.tx-an-8 {\n  display: inline-block;\n  animation: tx-an-8 cubic-bezier(0.25, 1, 0.5, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-8 {\n  0% {\n    filter: blur(5px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n.tx-an-9 {\n  display: inline-block;\n  animation: tx-an-9 cubic-bezier(0.25, 1, 0.5, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-9 {\n  0% {\n    transform: scale(1.3);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.tx-an-10 {\n  display: inline-block;\n  animation: tx-an-10 cubic-bezier(0, 0.55, 0.45, 1) forwards;\n  opacity: 0;\n}\n@keyframes tx-an-10 {\n  0% {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 0;\n    filter: blur(1px);\n    transform: translateY(-100px) scale(0.8);\n  }\n}\n\n.scale-1 {\n  display: inline-block;\n  animation: scale-1 cubic-bezier(0.09, 0.78, 0, 1.28) forwards;\n  opacity: 0;\n  transform-origin: center;\n}\n@keyframes scale-1 {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    filter: blur(0px);\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    filter: blur(5px);\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n\n.scale-2 {\n  display: inline-block;\n  animation: scale-2 cubic-bezier(0.09, 0.78, 0, 1.28) forwards;\n  opacity: 0;\n  transform-origin: center;\n}\n@keyframes scale-2 {\n  0% {\n    filter: blur(5px);\n    transform: scale(5);\n  }\n  50% {\n    filter: blur(0px);\n    opacity: 1;\n    transform: scale(1.3);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n\n.parent-overlay-1 {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  padding: 0 10px;\n  border-radius: 3px;\n}\n.parent-overlay-1 span {\n  display: block;\n  position: relative;\n  z-index: 2;\n  mix-blend-mode: hard-light;\n  animation: 1s spn-overlay-1 cubic-bezier(0.075, 0.82, 0.165, 1) both;\n  opacity: 0;\n}\n@keyframes spn-overlay-1 {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n.parent-overlay-1 span.out {\n  animation: 0.8s spn-overlay-out-1 cubic-bezier(0.25, 1, 0.5, 1) both;\n}\n@keyframes spn-overlay-out-1 {\n  0% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n.parent-overlay-1 .overlay-1 {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  animation: 1s overlay-1 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;\n}\n@keyframes overlay-1 {\n  100% {\n    left: -50%;\n  }\n}\n.parent-overlay-1 .overlay-1.out {\n  animation: 0.8s overlay-out-1 cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}\n@keyframes overlay-out-1 {\n  0% {\n    opacity: 1;\n    left: -50%;\n  }\n  100% {\n    opacity: 0;\n    left: -100%;\n  }\n}\n\n.parent-overlay-2 {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n.parent-overlay-2 span {\n  display: block;\n  position: relative;\n  z-index: 2;\n  mix-blend-mode: hard-light;\n  animation: 1s spn-overlay-2 cubic-bezier(0.075, 0.82, 0.165, 1) both;\n  opacity: 0;\n}\n@keyframes spn-overlay-2 {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n.parent-overlay-2 span.out {\n  animation: 0.8s spn-overlay-out-2 cubic-bezier(0.25, 1, 0.5, 1) both;\n}\n@keyframes spn-overlay-out-2 {\n  0% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n.parent-overlay-2 .overlay-2 {\n  position: absolute;\n  top: 100%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  animation: 1s overlay-2 cubic-bezier(0, 0.55, 0.45, 1) forwards;\n}\n@keyframes overlay-2 {\n  100% {\n    top: -100%;\n  }\n}\n.parent-overlay-2 .overlay-2.out {\n  animation: 0.8s overlay-out-2 cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}\n@keyframes overlay-out-2 {\n  100% {\n    opacity: 0;\n    left: -100%;\n  }\n}\n\n.parent-overlay-3 {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  padding: 0 10px;\n}\n.parent-overlay-3 span {\n  display: block;\n  position: relative;\n  z-index: 1;\n  animation: 2s spn-overlay-3 cubic-bezier(0.165, 0.84, 0.44, 1) both;\n  animation-delay: 0.7s;\n  opacity: 0;\n}\n@keyframes spn-overlay-3 {\n  0% {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.parent-overlay-3 span.out {\n  animation: 1s spn-overlay-out-3 cubic-bezier(0.075, 0.82, 0.165, 1) both;\n  animation-delay: 0.1s;\n}\n@keyframes spn-overlay-out-3 {\n  0% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n.parent-overlay-3 .overlay-3 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 2;\n  animation: 1.2s overlay-3 cubic-bezier(0, 0.55, 0.45, 1) forwards;\n}\n@keyframes overlay-3 {\n  0% {\n    left: 0;\n    width: 0%;\n  }\n  50% {\n    width: 50%;\n    left: 50%;\n  }\n  100% {\n    left: 100%;\n    width: 100%;\n  }\n}\n.parent-overlay-3 .overlay-3.out {\n  animation: 1.4s overlay-out-3 cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}\n@keyframes overlay-out-3 {\n  0% {\n    left: 100%;\n    width: 100%;\n  }\n  50% {\n    width: 50%;\n    left: 50%;\n  }\n  100% {\n    left: 0%;\n    width: 0%;\n  }\n}\n\n.typed-1 {\n  position: relative;\n}\n.typed-1::after {\n  content: \"|\";\n  animation: 0.5s typed-1 ease-in-out infinite;\n}\n@keyframes typed-1 {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.typed-2 {\n  position: relative;\n}\n.typed-2::after {\n  content: \"|\";\n  opacity: 0.5;\n}\n\n.typed-3 {\n  position: relative;\n  display: none;\n}\n.typed-3.show {\n  animation: typed-3-show cubic-bezier(0, 0.55, 0.45, 1) forwards;\n  display: block;\n}\n@keyframes typed-3-show {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/scss/TxtAnime.scss":
/*!********************************!*\
  !*** ./src/scss/TxtAnime.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_13547__) => {

__nested_webpack_require_13547__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_13547__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13547__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_13547__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_13547__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_13547__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_13547__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_13547__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_13547__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_13547__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_13547__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_13547__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_13547__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_13547__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TxtAnime_scss__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_13547__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./TxtAnime.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/TxtAnime.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TxtAnime_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TxtAnime_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TxtAnime_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TxtAnime_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_24077__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =   true ? __nested_webpack_require_24077__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/TxtAnime.js":
/*!****************************!*\
  !*** ./src/js/TxtAnime.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_26960__) => {

__nested_webpack_require_26960__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_26960__.d(__webpack_exports__, {
/* harmony export */   "TxtAnime": () => (/* binding */ TxtAnime)
/* harmony export */ });
function TxtAnime () {
    // regex
    const re = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*|\S/g

    this.animate = function(element , options) {

        // selector
        if (typeof element === 'string') {
            this.el = Array.from(document.querySelectorAll(element));
        }else if (typeof element === 'object') {

            if (element instanceof NodeList) {
                this.el = Array.from(element);
            }else if (element instanceof Element) {
                this.el = [element];
            }

        }

        // default options
        this.default = {
            effect : 'tx-an-1',
            delayStart : 0, 
            delay: 0.05,
            duration: 0.7, 
            loop : true,
            loopTime : 2,
            overflow : true
        };

        // options
        this.options = Object.assign(this.default , options);

        // functions
        let elmnt = this.el;
        let effect = this.options.effect;
        let delayStart = this.options.delayStart;
        let delay = this.options.delay;
        let duration = this.options.duration;
        let loop = this.options.loop;
        let loopTime = this.options.loopTime;
        let overflow = this.options.overflow;

        txtAnimations();
        function txtAnimations() {

            // -----
            elmnt.forEach((el) => {

                // replace text or span
                el.innerHTML = el.textContent.replace(re, `<span>$&</span>`);
    
                let spn = Array.from(el.querySelectorAll('span'));
    
                setTimeout(() => {
                    startAnime();
                }, delayStart * 1000);
    
                // add efects
                function startAnime() {
                    spn.forEach((tx , index) => {

                        if (tx.parentNode) {
                            if (overflow == true) {
                                tx.parentNode.style.overflow = 'hidden';
                            }
    
                            tx.parentNode.style.display = 'block';
                            tx.parentNode.style.opacity = '1';
                        }
    
                        tx.classList.add(effect);
                        tx.style.display = 'inline-flex';
    
                        tx.style.animationDelay = `${index * delay}s`;
                        tx.style.animationDuration = `${duration}s`;
                    });
                }
            });
        }

        // loop and loope Time 
        if (loop == true) {
            setInterval(() => {
                txtAnimations();
            },loopTime * 1000);
        }
    };

    this.scale = function(element , options) {
         // selector
        if (typeof element === 'string') {
            this.el = Array.from(document.querySelectorAll(element));
        }else if (typeof element === 'object') {

            if (element instanceof NodeList) {
                this.el = Array.from(element);
            }else if (element instanceof Element) {
                this.el = [element];
            }

        }

        // default options
        this.default = {
            effect : 'scale-1',
            delayStart : 0, 
            delay: 1.5,
            duration: 2, 
            loop : true,
            text : ['Go' , 'To' , 'Site'],
        };

        // options
        this.options = Object.assign(this.default , options);

        // functions
        let elmnt = this.el;
        let effect = this.options.effect;
        let delayStart = this.options.delayStart;
        let delay = this.options.delay;
        let duration = this.options.duration;
        let loop = this.options.loop;
        this.options.loopTime;
        this.options.overflow;
        let text = this.options.text;

        
        // func 
        function startScale() {

            // parent styles
            elmnt.forEach((el) => {
                el.style.position = 'relative';
                el.style.display = 'flex';
            });
            
            // creat spn on div
            for (let i = 0 ; i < text.length ; i++) {
                let spn = document.createElement('span');
                spn.innerHTML = text[i];

                elmnt.forEach((el) => {
                    el.appendChild(spn);
                });

                spn.classList.remove(effect);
            }

            // main func
            elmnt.forEach((el) => {
                let spnArr = Array.from(el.querySelectorAll('span'));

                let start = 0;

                spnArr.forEach((sp) => {
                    sp.style.display = 'none';

                    spnArr[start].style.display = 'block';
                    spnArr[start].classList.add(effect);

                    if (sp.classList.contains(effect)) {
                        sp.style.animationDuration = `${duration}s`;
                    }
                });

                let startInterval = setInterval(() => {

                    spnArr[start].classList.remove(effect);
                    spnArr[start].style.display = 'none';

                    start++;

                    if (start > text.length - 1) {
                        start = 0;
                        
                        if (loop !== true) {
                            el.innerHTML = '';
                            clearInterval(startInterval);
                        }
                    }

                    spnArr[start].classList.add(effect);
                    spnArr[start].style.display = 'block';

                    spnArr.forEach((spn) => {
                        if (spn.classList.contains(effect)) {
                            spn.style.animationDuration = `${duration}s`;
                        }
                    });

                },delay * 1000);

            });
        }

        // delayStart
        setTimeout(() => {
            startScale();
        },delayStart * 1000);
    };

    this.overlay = function (element , options) {
        // selector
        if (typeof element === 'string') {
            this.el = Array.from(document.querySelectorAll(element));
        }else if (typeof element === 'object') {

            if (element instanceof NodeList) {
                this.el = Array.from(element);
            }else if (element instanceof Element) {
                this.el = [element];
            }

        }

        // default options
        this.default = {
            effect : 'overlay-1',
            overlayColor : '#03a9f4',
            textColor : '#161414',
            loop : true,
            loopTime : 5,
            outTime : 3,
            delayStart : 0,
        };

        // options
        this.options = Object.assign(this.default , options);

        // functions
        let elmnt = this.el;
        let effect = this.options.effect;
        let overlayColor = this.options.overlayColor;
        let textColor = this.options.textColor;
        let outTime = this.options.outTime;
        let loop = this.options.loop;
        let loopTime = this.options.loopTime;
        let delayStart = this.options.delayStart;


        // func
        function mainFunc() {
            elmnt.forEach((el) => {
                el.classList.add(`parent-${effect}`);

                // span func
                spanFunc();
                function spanFunc() {

                    // get el text content and append for span
                    let elContent = el.textContent;
                    el.textContent = '';
                    let elSpn = document.createElement('span');
                    elSpn.style.color = textColor
                    elSpn.innerHTML = elContent;
                    el.appendChild(elSpn);

                    // outTime property
                    setTimeout(() => {
                        elSpn.classList.add("out");
                    },outTime * 1000);
                }


                // overlay function
                overlayFunc();
                function overlayFunc() {

                    // create overlay 
                    let Creatoverlay = document.createElement('div');
                    Creatoverlay.classList.add(effect);
                    Creatoverlay.style.background = overlayColor;

                    el.appendChild(Creatoverlay);

                    // outTime property
                    setTimeout(() => {
                        Creatoverlay.classList.add("out");
                    },outTime * 1000);
                }
            });
        }

        
        // loop and loopTime property
        if (loop !== false) {
            setInterval(() => {
                setTimeout(() => {
                    mainFunc();
                },delayStart * 1000);
            },loopTime * 1000);
        }

        // delayStart 
        setTimeout(() => {
            mainFunc();
        },delayStart * 1000);
    };

    this.typed = function (element , options) {
        // selector
        if (typeof element === 'string') {
            this.el = Array.from(document.querySelectorAll(element));
        }else if (typeof element === 'object') {

            if (element instanceof NodeList) {
                this.el = Array.from(element);
            }else if (element instanceof Element) {
                this.el = [element];
            }

        }

        // default options
        this.default = {
            effect : 'typed-1',
            text : ['Typed for TxtAnime' , 'Try free' , 'JavaScript Plugin'],
            typedSpeed : 0.05,
            timeOut : 1,
            loopTime : 3,
            typedStart : 0
        };

        // options
        this.options = Object.assign(this.default , options);

        // functions
        let elmnt = this.el;
        let effect = this.options.effect;
        let text = this.options.text;
        let typedSpeed = this.options.typedSpeed
        let timeOut = this.options.timeOut
        let loopTime = this.options.loopTime
        let typedStart = this.options.typedStart

        // functions
        function typedStartFunc () {

            // add efect for spn 
            elmnt.forEach((el) => {

                if (effect == 'typed-1' || effect == 'typed-2') {
                    typedFuncOne()
                }

                if (effect == 'typed-3') {
                    typedFuncTwo()
                }

                // typed func one and two
                function typedFuncOne() {

                    // add to span for el 
                    el.innerHTML = ''
                    let spn = document.createElement('span');
                    spn.classList.add(effect)
                    el.appendChild(spn)

                    // index start
                    let index_start = 0;

                    // creat func
                    function startEffect(start) {

                        // creat main span 
                        let getSpan = el.querySelector('span')
                        getSpan.textContent = text[start]

                        // convert text content to array the spans
                        getSpan.innerHTML = getSpan.textContent.replace(re, `<span>$&</span>`);

                        let getAllSpans = Array.from(getSpan.querySelectorAll('span'))


                        function spanHide() {

                            getAllSpans.forEach((spn) => {
                                spn.style.display = 'none'
                            })

                        }
                        spanHide()

                        function spanShow (spnStart) {
                            getAllSpans[spnStart].style.display = 'inline-block'
                        }
                        spanShow (0)

                        function spanHideOut() {
                            
                            let lastIndex = getAllSpans.length - 1

                            function hideOut() {

                                getAllSpans[lastIndex].style.display = 'none'

                                let intervalOut = setInterval(() => {

                                    lastIndex--

                                    if (lastIndex <= 0) {
                                        clearInterval(intervalOut)
                                        getSpan.innerHTML = ''
                                    }

                                    getAllSpans[lastIndex].style.display = 'none'

                                },typedSpeed * 1000)
                            }

                            setTimeout(() => {
                                hideOut()
                            },timeOut * 1000)
                        }

                        let indexStart = 0;
                        let interval = setInterval(() => {

                            indexStart++

                            if (indexStart > getAllSpans.length - 1) {
                                clearInterval(interval)
                                spanHideOut()
                            }else{
                                spanShow(indexStart)
                            }

                        },typedSpeed * 1000)

                    }

                    // startEffect(index_start)

                    let moveinterval = setInterval(() => {

                        index_start++;

                        if (index_start > text.length) {

                            index_start = 0

                        }else{

                        startEffect(index_start - 1)

                    }

                    },loopTime * 1000)

                }

                // typed func three
                function typedFuncTwo() {

                    // add to span for el 
                    el.innerHTML = ''

                    for (let i = 0 ; i < text.length ; i++) {

                        let spn = document.createElement('span');

                        spn.textContent = text[i]

                        el.appendChild(spn)

                    }

                    // creat func start effect
                    function startEffectTwo(start) {

                        // el style
                        el.style.overflow = 'hidden'

                        // select all children span the el
                        let spans = Array.from(el.querySelectorAll('span'))

                        // hide all spans
                        spans.forEach((spn) => {
                            spn.classList.add(`${effect}`)

                            spn.style.animationDuration = `${typedSpeed}s`
                        })
                        spans[start].classList.add('show')

                        setInterval(() => {

                            spans[start].classList.remove('show')

                            start++

                            if (start > text.length - 1) {
                                start = 0
                            }

                            spans[start].classList.add('show')

                        }, loopTime * 1000)
                    }

                    startEffectTwo(0)

                }

            })

        }

        setTimeout(() => {
            typedStartFunc()
        }, typedStart * 1000)
    }

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_43471__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_43471__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_43471__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_43471__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_43471__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_43471__.o(definition, key) && !__nested_webpack_require_43471__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_43471__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_43471__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__nested_webpack_require_43471__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__nested_webpack_require_43471__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_43471__.d(__webpack_exports__, {
/* harmony export */   "TxtAnime": () => (/* reexport safe */ _js_TxtAnime__WEBPACK_IMPORTED_MODULE_1__.TxtAnime)
/* harmony export */ });
/* harmony import */ var _scss_TxtAnime_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43471__(/*! ./scss/TxtAnime.scss */ "./src/scss/TxtAnime.scss");
/* harmony import */ var _js_TxtAnime__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43471__(/*! ./js/TxtAnime */ "./src/js/TxtAnime.js");



if (typeof window !== 'undefined') {
    window.TxtAnime = _js_TxtAnime__WEBPACK_IMPORTED_MODULE_1__.TxtAnime;
}


})();

/******/ })()
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/hljs.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/hljs.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hljs {\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta .hljs-string {\n  color: #98c379;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-built_in,\n.hljs-title.class_,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/index.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  border: none;\n  outline: 0;\n  background: transparent;\n}\n\n.tx-container {\n  width: 80%;\n  margin: auto;\n}\n\n.header {\n  background: white;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 0 30px #ededed;\n}\n.header .header-container {\n  width: 80%;\n  margin: auto;\n}\n.header .header-container nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .header-container nav .logo a {\n  color: #607d8b;\n}\n.header .header-container nav .nav-bar {\n  display: flex;\n  align-items: center;\n}\n.header .header-container nav .nav-bar ul {\n  margin-right: 27px;\n  padding-right: 27px;\n  border-right: 1px solid #f1f1f1;\n  display: flex;\n}\n.header .header-container nav .nav-bar ul li {\n  margin-right: 3px;\n}\n.header .header-container nav .nav-bar ul li a {\n  color: #5a5a5a;\n  font-size: 13px;\n  font-weight: 400;\n  text-transform: capitalize;\n  letter-spacing: 0.35px;\n  padding: 5px 15px;\n  transition: color 0.5s ease-in-out;\n}\n.header .header-container nav .nav-bar ul li a:hover {\n  color: #a29bfe;\n}\n.header .header-container nav .nav-bar .btn {\n  width: 50px;\n  height: 50px;\n  border: 0;\n  outline: 0;\n  border-radius: 5px;\n}\n.header .header-container nav .nav-bar .btn a i {\n  font-size: 20px;\n  color: #607d8b;\n}\n.header .header-container nav .nav-bar .btn-menu-close {\n  display: none;\n}\n.header .header-container nav .btn-menu {\n  display: none;\n}\n\n.demo {\n  width: 100%;\n  height: 100%;\n  padding: 30px 0;\n}\n.demo .demo-item {\n  margin-bottom: 25px;\n}\n.demo .demo-item .demo-item-content {\n  display: flex;\n}\n.demo .demo-item .demo-item-content .demo-view {\n  flex: 1;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div > span {\n  font-size: 48px;\n  font-weight: 900;\n  letter-spacing: 0.25px;\n  color: #5a5a5a;\n}\n.demo .demo-item .demo-item-content .demo-view h3 {\n  color: #5a5a5a;\n  font-size: 30px;\n}\n.demo .demo-item .demo-item-content .demo-view div {\n  display: flex;\n}\n.demo .demo-item .demo-item-content .demo-view div > span {\n  color: #9e9e9e;\n}\n.demo .demo-item .demo-item-content .demo-view div span, .demo .demo-item .demo-item-content .demo-view div p {\n  font-size: 25px;\n  font-weight: 600;\n  letter-spacing: 0.25px;\n}\n.demo .demo-item .demo-item-content .demo-view div p {\n  padding-right: 10px;\n  color: #5a5a5a;\n}\n.demo .demo-item .demo-item-content .demo-view .d-11-scale span {\n  color: #4e7ca1;\n  font-size: 40px;\n}\n.demo .demo-item .demo-item-content .demo-view .d-12-scale span {\n  color: #2196f3;\n  font-size: 40px;\n}\n.demo .demo-item .demo-item-content .demo-view .d-17-type {\n  color: #2196f3;\n}\n.demo .demo-item .demo-item-content .demo-view .d-18-type {\n  color: #c93c3c;\n}\n.demo .demo-item .demo-item-content .demo-code {\n  flex: 1;\n  background: #f9f9f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.demo .demo-item .demo-item-content .demo-code pre {\n  background: #FFFFFF;\n  padding: 0 30px;\n  width: 60%;\n}\n.demo .demo-item .demo-item-content .demo-code pre code {\n  line-height: 1.8;\n  background: #FFFFFF;\n  color: gray;\n}\n.demo .demo-item.d-1 {\n  border: 1px solid #D2EAFF;\n}\n.demo .demo-item.d-1 .demo-view {\n  background: #D2EAFF;\n}\n.demo .demo-item.d-2 {\n  border: 1px solid #F1DCD7;\n}\n.demo .demo-item.d-2 .demo-view {\n  background: #F1DCD7;\n}\n.demo .demo-item.d-3 {\n  border: 1px solid #D7DCE3;\n}\n.demo .demo-item.d-3 .demo-view {\n  background: #D7DCE3;\n}\n.demo .demo-item.d-4 {\n  border: 1px solid #FFEAA7;\n}\n.demo .demo-item.d-4 .demo-view {\n  background: #FFEAA7;\n}\n.demo .demo-item.d-5 {\n  border: 1px solid #D0E6EF;\n}\n.demo .demo-item.d-5 .demo-view {\n  background: #D0E6EF;\n}\n.demo .demo-item.d-6 {\n  border: 1px solid #f3cec5;\n}\n.demo .demo-item.d-6 .demo-view {\n  background: #f3cec5;\n}\n.demo .demo-item.d-7 {\n  border: 1px solid #D7E7E7;\n}\n.demo .demo-item.d-7 .demo-view {\n  background: #D7E7E7;\n}\n.demo .demo-item.d-8 {\n  border: 1px solid #D5D2F9;\n}\n.demo .demo-item.d-8 .demo-view {\n  background: #D5D2F9;\n}\n.demo .demo-item.d-9 {\n  border: 1px solid #F7E6E3;\n}\n.demo .demo-item.d-9 .demo-view {\n  background: #F7E6E3;\n}\n.demo .demo-item.d-10 {\n  border: 1px solid #D3D3D3;\n}\n.demo .demo-item.d-10 .demo-view {\n  background: #D3D3D3;\n}\n.demo .demo-item.d-11 {\n  border: 1px solid #D7E7E8;\n}\n.demo .demo-item.d-11 .demo-view {\n  background: #D7E7E8;\n}\n.demo .demo-item.d-12 {\n  border: 1px solid #D3EAFF;\n}\n.demo .demo-item.d-12 .demo-view {\n  background: #D3EAFF;\n}\n.demo .demo-item.d-13 {\n  border: 1px solid #F3CEC6;\n}\n.demo .demo-item.d-13 .demo-view {\n  background: #F3CEC6;\n}\n.demo .demo-item.d-14 {\n  border: 1px solid #D5D2F8;\n}\n.demo .demo-item.d-14 .demo-view {\n  background: #D5D2F8;\n}\n.demo .demo-item.d-15 {\n  border: 1px solid #FFEAA8;\n}\n.demo .demo-item.d-15 .demo-view {\n  background: #FFEAA8;\n}\n.demo .demo-item.d-16 {\n  border: 1px solid #D7E7E9;\n}\n.demo .demo-item.d-16 .demo-view {\n  background: #D7E7E9;\n}\n.demo .demo-item.d-17 {\n  border: 1px solid #D4EAFF;\n}\n.demo .demo-item.d-17 .demo-view {\n  background: #D4EAFF;\n}\n.demo .demo-item.d-18 {\n  border: 1px solid #F3CEC7;\n}\n.demo .demo-item.d-18 .demo-view {\n  background: #F3CEC7;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/responsive.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/responsive.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*  Extra small devices (portrait phones, less than 576px) */\n@media (max-width: 575px) {\n  .tx-container {\n    width: 95%;\n  }\n  .header .header-container nav .btn-menu {\n    display: block;\n  }\n  .header .header-container nav .btn-menu i {\n    width: 30px;\n    height: 30px;\n    color: #607d8b;\n    background: #e9e9e9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n  .header .header-container nav .nav-bar {\n    display: none;\n  }\n  .header .header-container nav .nav-bar.responseve {\n    display: flex;\n    position: fixed;\n    top: 0;\n    right: 0;\n    background: white;\n    box-shadow: 0 0 30 gray;\n    width: 100%;\n    height: 80px;\n    z-index: 9999;\n    border-bottom: 2px solid #a29bfe;\n    text-align: center;\n    animation: 0.5s show cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  }\n  .header .header-container nav .nav-bar.responseve ul {\n    display: flex;\n    border: 0;\n    width: 100%;\n    padding-right: 0;\n  }\n  .header .header-container nav .nav-bar.responseve ul li {\n    height: 40px;\n    line-height: 40px;\n  }\n  .header .header-container nav .nav-bar.responseve ul li a {\n    padding: 0 15px;\n    height: 100%;\n  }\n  .header .header-container nav .nav-bar.responseve .btn-menu-close {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n  }\n  .header .header-container nav .nav-bar.responseve .btn-menu-close i {\n    width: 25px;\n    height: 25px;\n    color: white;\n    color: #607d8b;\n    background: #a29bfe;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 17px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    cursor: pointer;\n  }\n  @keyframes show {\n    0% {\n      opacity: 0;\n      transform: translateY(-100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n  }\n  .header .header-container nav .nav-bar.responseve.hide {\n    animation: 0.5s hide cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  }\n  @keyframes hide {\n    0% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n    100% {\n      opacity: 0;\n      transform: translateY(-100%);\n    }\n  }\n  .demo .demo-item {\n    margin-bottom: 30px;\n  }\n  .demo .demo-item .demo-item-content {\n    display: block;\n  }\n  .demo .demo-item .demo-item-content .demo-view {\n    flex: 1;\n    height: 300px;\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div span {\n    font-size: 40px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div > span {\n    font-size: 48px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h3 {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view div span, .demo .demo-item .demo-item-content .demo-view div p {\n    font-size: 25px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-11-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-12-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-code {\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-code pre {\n    width: 100%;\n  }\n}\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .tx-container {\n    width: 90%;\n  }\n  .header .header-container nav .btn-menu {\n    display: block;\n  }\n  .header .header-container nav .btn-menu i {\n    width: 30px;\n    height: 30px;\n    color: #607d8b;\n    background: #e9e9e9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n  .header .header-container nav .nav-bar {\n    display: none;\n  }\n  .header .header-container nav .nav-bar.responseve {\n    display: flex;\n    position: fixed;\n    top: 0;\n    right: 0;\n    background: white;\n    box-shadow: 0 0 30 gray;\n    width: 100%;\n    height: 80px;\n    z-index: 9999;\n    border-bottom: 2px solid #a29bfe;\n    text-align: center;\n    animation: 0.5s show cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  }\n  .header .header-container nav .nav-bar.responseve ul {\n    display: flex;\n    border: 0;\n    width: 100%;\n    padding-right: 0;\n  }\n  .header .header-container nav .nav-bar.responseve ul li {\n    height: 40px;\n    line-height: 40px;\n  }\n  .header .header-container nav .nav-bar.responseve ul li a {\n    padding: 0 15px;\n    height: 100%;\n  }\n  .header .header-container nav .nav-bar.responseve .btn-menu-close {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n  }\n  .header .header-container nav .nav-bar.responseve .btn-menu-close i {\n    width: 25px;\n    height: 25px;\n    color: white;\n    color: #607d8b;\n    background: #a29bfe;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 17px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    cursor: pointer;\n  }\n  @keyframes show {\n    0% {\n      opacity: 0;\n      transform: translateY(-100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n  }\n  .header .header-container nav .nav-bar.responseve.hide {\n    animation: 0.5s hide cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  }\n  @keyframes hide {\n    0% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n    100% {\n      opacity: 0;\n      transform: translateY(-100%);\n    }\n  }\n  .demo .demo-item {\n    margin-bottom: 30px;\n  }\n  .demo .demo-item .demo-item-content {\n    display: block;\n  }\n  .demo .demo-item .demo-item-content .demo-view {\n    flex: 1;\n    height: 300px;\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div span {\n    font-size: 40px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div > span {\n    font-size: 48px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h3 {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view div span, .demo .demo-item .demo-item-content .demo-view div p {\n    font-size: 25px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-11-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-12-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-code {\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-code pre {\n    width: 100%;\n  }\n}\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .demo .demo-item {\n    margin-bottom: 30px;\n  }\n  .demo .demo-item .demo-item-content {\n    display: block;\n  }\n  .demo .demo-item .demo-item-content .demo-view {\n    flex: 1;\n    height: 500px;\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div span {\n    font-size: 40px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div > span {\n    font-size: 48px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h3 {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view div span, .demo .demo-item .demo-item-content .demo-view div p {\n    font-size: 25px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-11-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-12-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-code {\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-code pre {\n    width: 100%;\n  }\n}\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .demo .demo-item {\n    margin-bottom: 30px;\n  }\n  .demo .demo-item .demo-item-content {\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-view {\n    flex: 1;\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div span {\n    font-size: 40px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h2, .demo .demo-item .demo-item-content .demo-view div > span {\n    font-size: 48px;\n  }\n  .demo .demo-item .demo-item-content .demo-view h3 {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view div span, .demo .demo-item .demo-item-content .demo-view div p {\n    font-size: 25px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-11-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-view .d-12-scale span {\n    font-size: 30px;\n  }\n  .demo .demo-item .demo-item-content .demo-code {\n    display: flex;\n  }\n  .demo .demo-item .demo-item-content .demo-code pre {\n    width: 80%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/doc/hljs.scss":
/*!***************************!*\
  !*** ./src/doc/hljs.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hljs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./hljs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/hljs.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hljs_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hljs_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hljs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hljs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/doc/index.scss":
/*!****************************!*\
  !*** ./src/doc/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/doc/responsive.scss":
/*!*********************************!*\
  !*** ./src/doc/responsive.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./responsive.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/doc/responsive.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/doc/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_TxtAnime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/TxtAnime */ "./dist/TxtAnime.js");
/* harmony import */ var _dist_TxtAnime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_TxtAnime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/doc/index.scss");
/* harmony import */ var _responsive_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.scss */ "./src/doc/responsive.scss");
/* harmony import */ var _hljs_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hljs.scss */ "./src/doc/hljs.scss");

// site index.scss


// hljs code disign




hljs.initHighlightingOnLoad();

// site ------------------------
class MySite {
    constructor () {
        return this.run()
    }

    run () {
        this.addEffect()
        this.menuBar()
    }

    addEffect () {

        // txt.animate()
        let d_1 = document.querySelector('.d-1 .demo-view h2');
        let d_2 = document.querySelector('.d-2 .demo-view h2');
        let d_3 = document.querySelector('.d-3 .demo-view h2');
        let d_4 = document.querySelector('.d-4 .demo-view h2');
        let d_5 = document.querySelector('.d-5 .demo-view h2');
        let d_6 = document.querySelector('.d-6 .demo-view h2');
        let d_7 = document.querySelector('.d-7 .demo-view h2');
        let d_8 = document.querySelector('.d-8 .demo-view h2');
        let d_9 = document.querySelector('.d-9 .demo-view h2');
        let d_10 = document.querySelector('.d-10 .demo-view h2');

        // txt.scale()
        let d_11 = document.querySelector('.d-11 .demo-view .d-11-scale');
        let d_12 = document.querySelector('.d-12 .demo-view .d-12-scale');

        // txt.overlay()
        let d_13 = document.querySelector('.d-13 .demo-view h2');
        let d_14 = document.querySelector('.d-14 .demo-view h2');
        let d_15 = document.querySelector('.d-15 .demo-view h2');

        // txt.typed()
        let d_16 = document.querySelector('.d-16 .demo-view h3');
        let d_17 = document.querySelector('.d-17 .demo-view span.d-17-type');
        let d_18 = document.querySelector('.d-18 .demo-view span.d-18-type');


        let txt = new TxtAnime();

        // txt.animate
        txt.animate(d_1 , {
            effect : 'tx-an-1',
            loop : true,
            delay : 0.07
        })
        txt.animate(d_2, {
            effect : 'tx-an-2',
            loop : true,
            loopTime : 2.3,
            delay : 0.07
        })
        txt.animate(d_3, {
            effect : 'tx-an-3',
            loop : true,
            loopTime : 5,
            delay : 0.3,
            overflow : false
        })
        txt.animate(d_4, {
            effect : 'tx-an-4',
            loop : true,
        })
        txt.animate(d_5, {
            effect : 'tx-an-5',
            loop : true,
            loopTime : 1.7,
        })
        txt.animate(d_6, {
            effect : 'tx-an-6',
            loop : true,
            loopTime : 4,
            delay : 0.1,
            overflow : false
        })
        txt.animate(d_7, {
            effect : 'tx-an-7',
            loop : true,
            loopTime : 2.1
        })
        txt.animate(d_8, {
            effect : 'tx-an-8',
            loop : true,
            loopTime : 2.3
        })
        txt.animate(d_9, {
            effect : 'tx-an-9',
            loop : true,
            loopTime : 2,
        })
        txt.animate(d_10, {
            effect : 'tx-an-10',
            loop : true,
            loopTime : 1.7,
            duration : 2,
            delay: 0,
        })

        // txt.scale
        txt.scale(d_11, {
            text : ['Go' , 'To' , 'Site'],
            effect : 'scale-1',
        })
        txt.scale(d_12, {
            text : ['Go' , 'To' , 'Site'],
            effect : 'scale-2',
        })

        // txt.overlay
        txt.overlay(d_13, {
            effect : 'overlay-1',
            overlayColor : '#d9b1a8',
            textColor : '#5a5a5a'
        })
        txt.overlay(d_14, {
            effect : 'overlay-2',
            overlayColor : '#b8b5dd',
            textColor : '#5a5a5a'
        })
        txt.overlay(d_15 , {
            effect : 'overlay-3',
            overlayColor : '#FFC716',
            loop : true,
        })

        // txt.typed
        txt.typed(d_16, {
            effect : 'typed-1',
            text : ['Try' , 'Free' , 'Typed'],
            loopTime : 2
        })
        txt.typed(d_17, {
            effect : 'typed-2',
            text : ['web designer' , 'web developer'],
            loopTime : 2,
            typedSpeed : 0.01
        })
        txt.typed(d_18, {
            effect : 'typed-3',
            text : ['developer' , 'freelancer'],
            loopTime : 1.5,
            typedSpeed : .5,
        })

    }

    menuBar () {
        let btn_menu = document.querySelector('.btn-menu');
        let btn_menu_close = document.querySelector('.btn-menu-close');
        let nav_bar = document.querySelector('.nav-bar');

        btn_menu.addEventListener('click' , function () {
            nav_bar.classList.add('responseve')
            nav_bar.classList.remove('hide')
        })
        btn_menu_close.addEventListener('click' , function () {
            nav_bar.classList.add('hide')
        })
    }
}

new MySite()
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});