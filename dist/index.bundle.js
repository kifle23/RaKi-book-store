"use strict";
(self["webpackChunkRAKI_Book_Store"] = self["webpackChunkRAKI_Book_Store"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\nnav {\n  background-color: #cbb89a;\n  box-shadow: #2b1c2f 0 0 10px;\n  opacity: 0.8;\n  color: #2a695e; }\n\n.profile-picture {\n  width: 36px;\n  border-radius: 50px; }\n\n.thumbnail-row {\n  margin-bottom: 8px;\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  max-height: 420px;\n  text-overflow: ellipsis; }\n\n.book-stats {\n  font-size: 12px;\n  color: #606060; }\n\n.book-preview {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.book-time {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px;\n  border-radius: 2px;\n  background-color: black;\n  color: white;\n  position: absolute;\n  bottom: 8px;\n  left: 5px; }\n\n.book-like {\n  font-size: 14px;\n  font-weight: 700;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: gold;\n  color: white;\n  bottom: 8px;\n  min-width: 90px;\n  cursor: pointer; }\n\n#book-count {\n  font-weight: bolder; }\n\n.book-info {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.book-title {\n  margin-top: 0;\n  font-size: 16px;\n  font-weight: bold; }\n\n.book-author {\n  margin-top: 5px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: #606060; }\n\n.book-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n  padding: 50px; }\n  @media (max-width: 750px) {\n    .book-grid {\n      grid-template-columns: 1fr; } }\n  @media (min-width: 751px) and (max-width: 999px) {\n    .book-grid {\n      grid-template-columns: 1fr 1fr; } }\n  @media (min-width: 1000px) {\n    .book-grid {\n      grid-template-columns: 1fr 1fr 1fr; } }\n\n.popup {\n  position: fixed;\n  padding-top: 130px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  height: 110vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  scroll-behavior: smooth; }\n\n.popup__content {\n  background-color: #cbb89a;\n  padding: 20px;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-top: 30px;\n  margin-bottom: 40px; }\n\n.popup__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px; }\n  .popup__header .popup__close {\n    font-size: 3.5rem;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: #143f46;\n    transition: all 0.2s; }\n    .popup__header .popup__close:hover {\n      color: black;\n      background-color: #143f46; }\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start; }\n\n.popup__publish-year {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #2b1c2f;\n  margin-bottom: 5px;\n  align-self: flex-start; }\n\n.popup__comments-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #2b1c2f;\n  margin-bottom: 5px;\n  align-self: start;\n  display: flex;\n  flex-direction: row; }\n\n.popup__comments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  width: 100%;\n  align-self: flex-start; }\n\n.popup__comment {\n  margin-bottom: 5px;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: 1px solid #143f46;\n  box-sizing: border-box;\n  color: #143f46;\n  padding-left: 10px;\n  background-color: #cbb89a; }\n\n.popup__comment:hover {\n  outline: none;\n  border-color: #143f46;\n  box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\nspan {\n  font-weight: bold;\n  color: #2a695e;\n  font-size: 1.5rem; }\n\n.popup__new-comment {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5px; }\n\n.popup__new-comment-username {\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start; }\n  .popup__new-comment-username:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\n.popup__new-comment-textarea {\n  width: 100%;\n  height: 60px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  resize: none;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start; }\n  .popup__new-comment-textarea:focus {\n    outline: none;\n    border-color: #143f46;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\n.popup__new-comment-button {\n  background-color: #2b1c2f;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .popup__new-comment-button:hover {\n    background-color: #143f46;\n    color: #cbb89a; }\n\n.popup__title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin: 10px;\n  color: #2a695e;\n  max-width: 400px; }\n\n.popup__cover-image {\n  width: 300px;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  align-self: center; }\n\nfooter {\n  background-color: #cbb89a;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  opacity: 0.8; }\n\n.footer-cards {\n  width: 100%; }\n\n::-webkit-scrollbar {\n  width: 3px;\n  background-color: #07020d; }\n\n::-webkit-scrollbar-thumb {\n  width: 10px;\n  background-color: gold;\n  border-radius: 30px; }\n\n.comment-button {\n  background-color: #2b1c2f;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .comment-button:hover {\n    background-color: #143f46;\n    color: #cbb89a; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: rgb(15, 15, 15);\n$secondary-color: #cbb89a;\n$tertiary-color: #8d8171;\n$quaternary-color: #2a695e;\n$quinary-color: #143f46;\n$senary-color: #2b1c2f;\n$families: 'Roboto', 'Helvetica Neue', sans-serif;\n$thumbnail-width: 100%;\n\nbody {\n  background-image: url('./img/background.jpg');\n  font-family: $families;\n}\n\nnav {\n  background-color: $secondary-color;\n  box-shadow: $senary-color 0 0 10px;\n  opacity: 0.8;\n  color: $quaternary-color;\n}\n\n.profile-picture {\n  width: 36px;\n  border-radius: 50px;\n}\n\n.thumbnail-row {\n  margin-bottom: 8px;\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  max-height: 420px;\n  text-overflow: ellipsis;\n}\n\n.book-stats {\n  font-size: 12px;\n  color: rgb(96, 96, 96);\n}\n\n.book-preview {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.thumbnail {\n  width: $thumbnail-width;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.book-time {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px;\n  border-radius: 2px;\n  background-color: black;\n  color: white;\n  position: absolute;\n  bottom: 8px;\n  left: 5px;\n}\n\n.book-like {\n  font-size: 14px;\n  font-weight: 700;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: gold;\n  color: white;\n  bottom: 8px;\n  min-width: 90px;\n  cursor: pointer;\n}\n\n#book-count {\n  font-weight: bolder;\n}\n\n.book-info {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.book-title {\n  margin-top: 0;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.book-author {\n  margin-top: 5px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: rgb(96, 96, 96);\n}\n\n.book-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n  padding: 50px;\n\n  @media (max-width: 750px) {\n    grid-template-columns: 1fr;\n  }\n\n  @media (min-width: 751px) and (max-width: 999px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (min-width: 1000px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n.popup {\n  position: fixed;\n  padding-top: 130px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  height: 110vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n\n.popup__content {\n  background-color: $secondary-color;\n  padding: 20px;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-top: 30px;\n  margin-bottom: 40px;\n}\n\n.popup__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n\n  .popup__close {\n    font-size: 3.5rem;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: $quinary-color;\n    transition: all 0.2s;\n\n    &:hover {\n      color: black;\n      background-color: #143f46;\n    }\n  }\n}\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n}\n\n.popup__publish-year {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: $senary-color;\n  margin-bottom: 5px;\n  align-self: flex-start;\n}\n\n.popup__comments-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: $senary-color;\n  margin-bottom: 5px;\n  align-self: start;\n  display: flex;\n  flex-direction: row;\n}\n\n.popup__comments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  width: 100%;\n  align-self: flex-start;\n}\n\n.popup__comment {\n  margin-bottom: 5px;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: 1px solid $quinary-color;\n  box-sizing: border-box;\n  color: $quinary-color;\n  padding-left: 10px;\n  background-color: $secondary-color;\n}\n\n.popup__comment:hover {\n  outline: none;\n  border-color: $quinary-color;\n  box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\n}\n\nspan {\n  font-weight: bold;\n  color: $quaternary-color;\n  font-size: 1.5rem;\n}\n\n.popup__new-comment {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5px;\n}\n\n.popup__new-comment-username {\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start;\n\n  &:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\n  }\n}\n\n.popup__new-comment-textarea {\n  width: 100%;\n  height: 60px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  resize: none;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start;\n\n  &:focus {\n    outline: none;\n    border-color: $quinary-color;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\n  }\n}\n\n.popup__new-comment-button {\n  background-color: $senary-color;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background-color: $quinary-color;\n    color: $secondary-color;\n  }\n}\n\n.popup__title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin: 10px;\n  color: $quaternary-color;\n  max-width: 400px;\n}\n\n.popup__cover-image {\n  width: 300px;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  align-self: center;\n}\n\nfooter {\n  background-color: $secondary-color;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  opacity: 0.8;\n}\n\n.footer-cards {\n  width: 100%;\n}\n\n::-webkit-scrollbar {\n  width: 3px;\n  background-color: rgb(7, 2, 13);\n}\n\n::-webkit-scrollbar-thumb {\n  width: 10px;\n  background-color: gold;\n  border-radius: 30px;\n}\n\n.comment-button {\n  background-color: $senary-color;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background-color: $quinary-color;\n    color: $secondary-color;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view.js */ "./src/modules/view.js");




(0,_modules_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// add the logo to the navbar
const logo = document.createElement('img');
logo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logo.alt = 'logo';
logo.classList.add('logoimg');
document.querySelector('.logo').appendChild(logo);


/***/ }),

/***/ "./src/modules/bookCount.js":
/*!**********************************!*\
  !*** ./src/modules/bookCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bookCount = (count) => {
  const counter = document.getElementById('book-count');
  counter.innerHTML = `(${count})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookCount);


/***/ }),

/***/ "./src/modules/getBooks.js":
/*!*********************************!*\
  !*** ./src/modules/getBooks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const OPEN_LIBRARY_API_URL = 'https://openlibrary.org';

const fetchScienceFictionBooks = async () => {
  const response = await fetch(
    `${OPEN_LIBRARY_API_URL}/subjects/science_fiction.json?limit=18`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Science Fiction books data');
  }
  const data = await response.json();
  return data.works;
};

const formatBookData = (book) => {
  const bookData = {
    title: book.title,
    coverImageUrl: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
    publishYear: book.first_publish_year,
  };
  return bookData;
};

const getBooks = async () => {
  const books = await fetchScienceFictionBooks();
  const formattedBooks = books.map((book) => formatBookData(book));
  return formattedBooks;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBooks);


/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/comments';

const getComments = async (itemId) => {
  itemId += 1;
  const response = await fetch(`${CAPSTONE_API_URL}?item_id=item${itemId}`);
  const comments = await response.json();
  return comments;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   getLikesAfterPost: () => (/* binding */ getLikesAfterPost)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


const getLikes = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};

const getLikesAfterPost = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};




/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
  constructor(index) {
    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.innerHTML = `
        <div class="popup__content">
            <div class="popup__header">
            <h3 class="popup__title"></h3>
            <button type="button" class="close popup__close " aria-label="Close">
                &times;</button>
            </div>
            <div class="popup__body">
            <img class="popup__cover-image" src="" alt="">
            <p class="popup__publish-year"> This book was published on </p>
            <p class="popup__description"></p>
            <h4 class="popup__comments-title">Comments <div class="comment-count"> </div></h4>
            
            <ul class="popup__comments"></ul>
            <div class="popup__new-comment">
            <input type="text" class="popup__new-comment-username" required placeholder="Your name">
            <textarea class="popup__new-comment-textarea" required placeholder="Add a comment..."></textarea>
            <button class="popup__new-comment-button btn" type="submit">Comment</button>
            </div>
            </div>
        </div>
        `;
    // get book index from the popup
    this.index = index;
    this.titleElement = this.popup.querySelector('.popup__title');
    this.coverImageElement = this.popup.querySelector('.popup__cover-image');
    this.commentsList = this.popup.querySelector('.popup__comments');
    this.popup.querySelector('.popup__close').addEventListener('click', () => {
      this.closeCommentsPopup();
    });
    this.popup.querySelector('.popup__new-comment-button').addEventListener('click', () => {
      this.addComment(this.index);
    });
  }

  // show the popup for a specific book
  showPopup(book) {
    this.titleElement.textContent = book.title;
    this.coverImageElement.src = book.coverImageUrl;
    this.coverImageElement.alt = book.title;
    this.popup.querySelector('.popup__publish-year').textContent = `This book was published on ${book.publishYear}`;
    this.popup.querySelector('.popup__description').textContent = book.description;
    document.body.appendChild(this.popup);
  }

  // dsplay the comments for a specific book
  displayComments(comments) {
    this.commentsList.innerHTML = '';
    comments.forEach((comment) => {
      const commentElement = document.createElement('li');
      commentElement.classList.add('popup__comment');
      commentElement.innerHTML = `<span>${comment.username}</span>: ${comment.comment}`;
      this.commentsList.appendChild(commentElement);
    });
    this.popup.querySelector('.comment-count').textContent = `...(${comments.length})`;
  }

  // close the popup
  closeCommentsPopup() {
    this.popup.remove();
  }

  // add a comment to the popup with username that swhod be entered by the user
  addComment(index) {
    const comment = document.querySelector('.popup__new-comment-textarea').value;
    const username = document.querySelector('.popup__new-comment-username').value;
    // check if the user entered a comment and a username
    if (!comment || !username) {
      return;
    }
    const commentElement = document.createElement('li');
    commentElement.classList.add('popup__comment');
    commentElement.innerHTML = `<span>${username}</span>: ${comment}`;
    this.popup.querySelector('.popup__comments').appendChild(commentElement);
    document.querySelector('.popup__new-comment-textarea').value = '';
    document.querySelector('.popup__new-comment-username').value = '';

    // post the comment to the API
    const commentData = {
      item_id: `item${index + 1}`,
      username,
      comment,
    };
    const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/comments';
    fetch(CAPSTONE_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      });

    // update the comment count
    const commentCount = this.popup.querySelector('.comment-count');
    const count = parseInt(commentCount.textContent.match(/\d+/)[0], 10);
    commentCount.textContent = `...(${count + 1})`;
  }
}


/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


const postLikes = async (id) => {
  try {
    await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id.toString(),
      }),
    });
  } catch (error) {
    throw new Error('Failed to post Likes data');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/likes';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CAPSTONE_API_URL);


/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBooks.js */ "./src/modules/getBooks.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ "./src/modules/postLikes.js");
/* harmony import */ var _bookCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookCount.js */ "./src/modules/bookCount.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");







const bookGrid = document.querySelector('.book-grid');
bookGrid.innerHTML = '';

const display = async () => {
  try {
    const books = await (0,_getBooks_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_bookCount_js__WEBPACK_IMPORTED_MODULE_3__["default"])(books.length);
    const getTheLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
    books.forEach((book, index) => {
      const id = getTheLikes.findIndex((like) => +like.item_id === index);
      const likes = id >= 0 ? getTheLikes[id].likes : 0;

      const thumbnail = document.createElement('img');
      thumbnail.classList.add('thumbnail');
      thumbnail.src = book.coverImageUrl;

      const bookTime = document.createElement('div');
      bookTime.classList.add('book-time');
      bookTime.textContent = `Published in: ${book.publishYear}`;

      const thumbnailRow = document.createElement('div');
      thumbnailRow.classList.add('thumbnail-row');
      thumbnailRow.append(thumbnail, bookTime);

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-title');
      bookTitle.textContent = book.title;

      const bookLike = document.createElement('p');
      bookLike.classList.add('book-like');
      bookLike.textContent = `❤ ${likes} Likes`;
      bookLike.addEventListener('click', async () => {
        if ((0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id)) {
          const getPostedLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikesAfterPost)();
          if (getPostedLikes) {
            const updatedLikes = getPostedLikes[id].likes;
            bookLike.textContent = `❤ ${updatedLikes} Likes`;
          }
        }
      });

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
      bookInfo.append(bookTitle, bookLike);

      const bookInfoGrid = document.createElement('div');
      bookInfoGrid.classList.add('book-info-grid');
      bookInfoGrid.append(bookInfo);

      const bookPreview = document.createElement('div');
      bookPreview.classList.add('book-preview');
      bookPreview.append(thumbnailRow, bookInfoGrid);

      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-button');
      commentButton.textContent = 'Add Comment';
      commentButton.addEventListener('click', () => {
        // show comment popup for this book
        const popup = new _popup_js__WEBPACK_IMPORTED_MODULE_4__["default"](index);
        popup.showPopup(book);
        // get comments for this book and display them in the popup
        (0,_getComments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(index).then((comments) => {
          popup.displayComments(comments);
        });
        // add event listener to the popup's form
        const popupForm = document.querySelector('.popup__new-comment-button');
        popupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          popup.addComment(index);
        });
      });
      bookPreview.appendChild(commentButton);

      bookGrid.appendChild(bookPreview);
    });
  } catch (error) {
    bookGrid.innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCekI7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZLO0FBQ3VCO0FBQ3JCO0FBQ0E7QUFDUjtBQUNZOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVE7QUFDaEMsSUFBSSx5REFBUztBQUNiLDhCQUE4QixzREFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsaUJBQWlCOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLFlBQVkseURBQVM7QUFDckIsdUNBQXVDLCtEQUFpQjtBQUN4RDtBQUNBO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBSztBQUMvQjtBQUNBO0FBQ0EsUUFBUSwyREFBVztBQUNuQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0oscURBQXFELGNBQWM7QUFDbkU7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SQUtJLUJvb2stU3RvcmUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9SQUtJLUJvb2stU3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1JBS0ktQm9vay1TdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9SQUtJLUJvb2stU3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9SQUtJLUJvb2stU3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1JBS0ktQm9vay1TdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1JBS0ktQm9vay1TdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1JBS0ktQm9vay1TdG9yZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9SQUtJLUJvb2stU3RvcmUvLi9zcmMvbW9kdWxlcy9ib29rQ291bnQuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vc3JjL21vZHVsZXMvZ2V0Qm9va3MuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vUkFLSS1Cb29rLVN0b3JlLy4vc3JjL21vZHVsZXMvcG9zdExpa2VzLmpzIiwid2VicGFjazovL1JBS0ktQm9vay1TdG9yZS8uL3NyYy9tb2R1bGVzL3VybC5qcyIsIndlYnBhY2s6Ly9SQUtJLUJvb2stU3RvcmUvLi9zcmMvbW9kdWxlcy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiODlhO1xcbiAgYm94LXNoYWRvdzogIzJiMWMyZiAwIDAgMTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGNvbG9yOiAjMmE2OTVlOyB9XFxuXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuICB3aWR0aDogMzZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4udGh1bWJuYWlsLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogNDIwcHg7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcblxcbi5ib29rLXN0YXRzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNjA2MDYwOyB9XFxuXFxuLmJvb2stcHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4udGh1bWJuYWlsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG4uYm9vay10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbGVmdDogNXB4OyB9XFxuXFxuLmJvb2stbGlrZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbWluLXdpZHRoOiA5MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuI2Jvb2stY291bnQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi5ib29rLWluZm8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmJvb2stdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmJvb2stYXV0aG9yIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGNvbG9yOiAjNjA2MDYwOyB9XFxuXFxuLmJvb2stZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogNTBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5ib29rLWdyaWQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTFweCkgYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XFxuICAgIC5ib29rLWdyaWQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5ib29rLWdyaWQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IH0gfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cXG5cXG4ucG9wdXBfX2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjg5YTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cXG5cXG4ucG9wdXBfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIC5wb3B1cF9faGVhZGVyIC5wb3B1cF9fY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzE0M2Y0NjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gICAgLnBvcHVwX19oZWFkZXIgLnBvcHVwX19jbG9zZTpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDNmNDY7IH1cXG5cXG4ucG9wdXBfX2JvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDsgfVxcblxcbi5wb3B1cF9fcHVibGlzaC15ZWFyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzJiMWMyZjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ucG9wdXBfX2NvbW1lbnRzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzJiMWMyZjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4ucG9wdXBfX2NvbW1lbnRzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLnBvcHVwX19jb21tZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNDNmNDY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMxNDNmNDY7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiODlhOyB9XFxuXFxuLnBvcHVwX19jb21tZW50OmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6ICMxNDNmNDY7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7IH1cXG5cXG5zcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMyYTY5NWU7XFxuICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5wb3B1cF9fbmV3LWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNXB4OyB9XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC11c2VybmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgLnBvcHVwX19uZXctY29tbWVudC11c2VybmFtZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpOyB9XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzE0M2Y0NjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpOyB9XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMWMyZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gIC5wb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Y0NjtcXG4gICAgY29sb3I6ICNjYmI4OWE7IH1cXG5cXG4ucG9wdXBfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBjb2xvcjogIzJhNjk1ZTtcXG4gIG1heC13aWR0aDogNDAwcHg7IH1cXG5cXG4ucG9wdXBfX2NvdmVyLWltYWdlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmI4OWE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuODsgfVxcblxcbi5mb290ZXItY2FyZHMge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwMjBkOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4OyB9XFxuXFxuLmNvbW1lbnQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjFjMmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAuY29tbWVudC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjQ2O1xcbiAgICBjb2xvcjogI2NiYjg5YTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0UseURBQTZDO0VBQzdDLG1EQUwrQyxFQUFBOztBQVFqRDtFQUNFLHlCQWR1QjtFQWV2Qiw0QkFBa0M7RUFDbEMsWUFBWTtFQUNaLGNBZndCLEVBQUE7O0FBa0IxQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBNUNvQjtFQTZDcEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVB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QjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBbFR1QjtFQW1UdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLHlCQUErQixFQUFBOztBQUdqQztFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBclVvQjtFQXNVcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0IsRUFBQTtFQVB0QjtJQVVJLHlCQS9VbUI7SUFnVm5CLGNBblZxQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRwcmltYXJ5LWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XFxuJHNlY29uZGFyeS1jb2xvcjogI2NiYjg5YTtcXG4kdGVydGlhcnktY29sb3I6ICM4ZDgxNzE7XFxuJHF1YXRlcm5hcnktY29sb3I6ICMyYTY5NWU7XFxuJHF1aW5hcnktY29sb3I6ICMxNDNmNDY7XFxuJHNlbmFyeS1jb2xvcjogIzJiMWMyZjtcXG4kZmFtaWxpZXM6ICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiR0aHVtYm5haWwtd2lkdGg6IDEwMCU7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2JhY2tncm91bmQuanBnJyk7XFxuICBmb250LWZhbWlseTogJGZhbWlsaWVzO1xcbn1cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGJveC1zaGFkb3c6ICRzZW5hcnktY29sb3IgMCAwIDEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogJHF1YXRlcm5hcnktY29sb3I7XFxufVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4udGh1bWJuYWlsLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogNDIwcHg7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmJvb2stc3RhdHMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcXG59XFxuXFxuLmJvb2stcHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50aHVtYm5haWwge1xcbiAgd2lkdGg6ICR0aHVtYm5haWwtd2lkdGg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJvb2stdGltZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDhweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuXFxuLmJvb2stbGlrZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbWluLXdpZHRoOiA5MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9vay1jb3VudCB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYm9vay1pbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2stdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYm9vay1hdXRob3Ige1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcXG59XFxuXFxuLmJvb2stZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogNTBweDtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTFweCkgYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLnBvcHVwX19jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ucG9wdXBfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAucG9wdXBfX2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICRxdWluYXJ5LWNvbG9yO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDNmNDY7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnBvcHVwX19ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XFxufVxcblxcbi5wb3B1cF9fcHVibGlzaC15ZWFyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogJHNlbmFyeS1jb2xvcjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wb3B1cF9fY29tbWVudHMtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBvcHVwX19jb21tZW50cyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnBvcHVwX19jb21tZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRxdWluYXJ5LWNvbG9yO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi5wb3B1cF9fY29tbWVudDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcXG59XFxuXFxuc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucG9wdXBfX25ldy1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC11c2VybmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcXG4gIH1cXG59XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICRxdWluYXJ5LWNvbG9yO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7XFxuICB9XFxufVxcblxcbi5wb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZW5hcnktY29sb3I7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRxdWluYXJ5LWNvbG9yO1xcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIH1cXG59XFxuXFxuLnBvcHVwX190aXRsZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgY29sb3I6ICRxdWF0ZXJuYXJ5LWNvbG9yO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnBvcHVwX19jb3Zlci1pbWFnZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmZvb3Rlci1jYXJkcyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDIsIDEzKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlbmFyeS1jb2xvcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHF1aW5hcnktY29sb3I7XFxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgaW1nIGZyb20gJy4vaW1nL2xvZ28ucG5nJztcbmltcG9ydCBnZXRCb29rcyBmcm9tICcuL21vZHVsZXMvdmlldy5qcyc7XG5cbmdldEJvb2tzKCk7XG5cbi8vIGFkZCB0aGUgbG9nbyB0byB0aGUgbmF2YmFyXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5sb2dvLnNyYyA9IGltZztcbmxvZ28uYWx0ID0gJ2xvZ28nO1xubG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvaW1nJyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpLmFwcGVuZENoaWxkKGxvZ28pO1xuIiwiY29uc3QgYm9va0NvdW50ID0gKGNvdW50KSA9PiB7XG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1jb3VudCcpO1xuICBjb3VudGVyLmlubmVySFRNTCA9IGAoJHtjb3VudH0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2tDb3VudDtcbiIsImNvbnN0IE9QRU5fTElCUkFSWV9BUElfVVJMID0gJ2h0dHBzOi8vb3BlbmxpYnJhcnkub3JnJztcblxuY29uc3QgZmV0Y2hTY2llbmNlRmljdGlvbkJvb2tzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke09QRU5fTElCUkFSWV9BUElfVVJMfS9zdWJqZWN0cy9zY2llbmNlX2ZpY3Rpb24uanNvbj9saW1pdD0xOGAsXG4gICk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBTY2llbmNlIEZpY3Rpb24gYm9va3MgZGF0YScpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLndvcmtzO1xufTtcblxuY29uc3QgZm9ybWF0Qm9va0RhdGEgPSAoYm9vaykgPT4ge1xuICBjb25zdCBib29rRGF0YSA9IHtcbiAgICB0aXRsZTogYm9vay50aXRsZSxcbiAgICBjb3ZlckltYWdlVXJsOiBgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtib29rLmNvdmVyX2lkfS1MLmpwZ2AsXG4gICAgcHVibGlzaFllYXI6IGJvb2suZmlyc3RfcHVibGlzaF95ZWFyLFxuICB9O1xuICByZXR1cm4gYm9va0RhdGE7XG59O1xuXG5jb25zdCBnZXRCb29rcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm9va3MgPSBhd2FpdCBmZXRjaFNjaWVuY2VGaWN0aW9uQm9va3MoKTtcbiAgY29uc3QgZm9ybWF0dGVkQm9va3MgPSBib29rcy5tYXAoKGJvb2spID0+IGZvcm1hdEJvb2tEYXRhKGJvb2spKTtcbiAgcmV0dXJuIGZvcm1hdHRlZEJvb2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Qm9va3M7XG4iLCJjb25zdCBDQVBTVE9ORV9BUElfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NKQmNsWGhHM3hzVkVBdXluZ1ZBL2NvbW1lbnRzJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGl0ZW1JZCArPSAxO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NBUFNUT05FX0FQSV9VUkx9P2l0ZW1faWQ9aXRlbSR7aXRlbUlkfWApO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNvbW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7IiwiaW1wb3J0IENBUFNUT05FX0FQSV9VUkwgZnJvbSAnLi91cmwuanMnO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDQVBTVE9ORV9BUElfVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExpa2VzIGRhdGEnKTtcbiAgfVxuICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBnZXRMaWtlc0FmdGVyUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDQVBTVE9ORV9BUElfVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExpa2VzIGRhdGEnKTtcbiAgfVxuICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXM7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlcywgZ2V0TGlrZXNBZnRlclBvc3QgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoaW5kZXgpIHtcbiAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgIHRoaXMucG9wdXAuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJwb3B1cF9fdGl0bGVcIj48L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwb3B1cF9fY2xvc2UgXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgJnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2JvZHlcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cF9fY292ZXItaW1hZ2VcIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXBfX3B1Ymxpc2gteWVhclwiPiBUaGlzIGJvb2sgd2FzIHB1Ymxpc2hlZCBvbiA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwX19kZXNjcmlwdGlvblwiPjwvcD5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInBvcHVwX19jb21tZW50cy10aXRsZVwiPkNvbW1lbnRzIDxkaXYgY2xhc3M9XCJjb21tZW50LWNvdW50XCI+IDwvZGl2PjwvaDQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcHVwX19jb21tZW50c1wiPjwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX25ldy1jb21tZW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInBvcHVwX19uZXctY29tbWVudC11c2VybmFtZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJwb3B1cF9fbmV3LWNvbW1lbnQtdGV4dGFyZWFcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnQuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcHVwX19uZXctY29tbWVudC1idXR0b24gYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIC8vIGdldCBib29rIGluZGV4IGZyb20gdGhlIHBvcHVwXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudGl0bGVFbGVtZW50ID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RpdGxlJyk7XG4gICAgdGhpcy5jb3ZlckltYWdlRWxlbWVudCA9IHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb3Zlci1pbWFnZScpO1xuICAgIHRoaXMuY29tbWVudHNMaXN0ID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbW1lbnRzJyk7XG4gICAgdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlQ29tbWVudHNQb3B1cCgpO1xuICAgIH0pO1xuICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19uZXctY29tbWVudC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWRkQ29tbWVudCh0aGlzLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHNob3cgdGhlIHBvcHVwIGZvciBhIHNwZWNpZmljIGJvb2tcbiAgc2hvd1BvcHVwKGJvb2spIHtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGJvb2sudGl0bGU7XG4gICAgdGhpcy5jb3ZlckltYWdlRWxlbWVudC5zcmMgPSBib29rLmNvdmVySW1hZ2VVcmw7XG4gICAgdGhpcy5jb3ZlckltYWdlRWxlbWVudC5hbHQgPSBib29rLnRpdGxlO1xuICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19wdWJsaXNoLXllYXInKS50ZXh0Q29udGVudCA9IGBUaGlzIGJvb2sgd2FzIHB1Ymxpc2hlZCBvbiAke2Jvb2sucHVibGlzaFllYXJ9YDtcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGJvb2suZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcbiAgfVxuXG4gIC8vIGRzcGxheSB0aGUgY29tbWVudHMgZm9yIGEgc3BlY2lmaWMgYm9va1xuICBkaXNwbGF5Q29tbWVudHMoY29tbWVudHMpIHtcbiAgICB0aGlzLmNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb21tZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9fY29tbWVudCcpO1xuICAgICAgY29tbWVudEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuPiR7Y29tbWVudC51c2VybmFtZX08L3NwYW4+OiAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgICAgdGhpcy5jb21tZW50c0xpc3QuYXBwZW5kQ2hpbGQoY29tbWVudEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9IGAuLi4oJHtjb21tZW50cy5sZW5ndGh9KWA7XG4gIH1cblxuICAvLyBjbG9zZSB0aGUgcG9wdXBcbiAgY2xvc2VDb21tZW50c1BvcHVwKCkge1xuICAgIHRoaXMucG9wdXAucmVtb3ZlKCk7XG4gIH1cblxuICAvLyBhZGQgYSBjb21tZW50IHRvIHRoZSBwb3B1cCB3aXRoIHVzZXJuYW1lIHRoYXQgc3dob2QgYmUgZW50ZXJlZCBieSB0aGUgdXNlclxuICBhZGRDb21tZW50KGluZGV4KSB7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtdGV4dGFyZWEnKS52YWx1ZTtcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtdXNlcm5hbWUnKS52YWx1ZTtcbiAgICAvLyBjaGVjayBpZiB0aGUgdXNlciBlbnRlcmVkIGEgY29tbWVudCBhbmQgYSB1c2VybmFtZVxuICAgIGlmICghY29tbWVudCB8fCAhdXNlcm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29tbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHVwX19jb21tZW50Jyk7XG4gICAgY29tbWVudEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuPiR7dXNlcm5hbWV9PC9zcGFuPjogJHtjb21tZW50fWA7XG4gICAgdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbW1lbnRzJykuYXBwZW5kQ2hpbGQoY29tbWVudEVsZW1lbnQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtdGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtdXNlcm5hbWUnKS52YWx1ZSA9ICcnO1xuXG4gICAgLy8gcG9zdCB0aGUgY29tbWVudCB0byB0aGUgQVBJXG4gICAgY29uc3QgY29tbWVudERhdGEgPSB7XG4gICAgICBpdGVtX2lkOiBgaXRlbSR7aW5kZXggKyAxfWAsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfTtcbiAgICBjb25zdCBDQVBTVE9ORV9BUElfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NKQmNsWGhHM3hzVkVBdXluZ1ZBL2NvbW1lbnRzJztcbiAgICBmZXRjaChDQVBTVE9ORV9BUElfVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50RGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGNvbW1lbnQgY291bnRcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50Jyk7XG4gICAgY29uc3QgY291bnQgPSBwYXJzZUludChjb21tZW50Q291bnQudGV4dENvbnRlbnQubWF0Y2goL1xcZCsvKVswXSwgMTApO1xuICAgIGNvbW1lbnRDb3VudC50ZXh0Q29udGVudCA9IGAuLi4oJHtjb3VudCArIDF9KWA7XG4gIH1cbn1cbiIsImltcG9ydCBDQVBTVE9ORV9BUElfVVJMIGZyb20gJy4vdXJsLmpzJztcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZmV0Y2goQ0FQU1RPTkVfQVBJX1VSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZC50b1N0cmluZygpLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcG9zdCBMaWtlcyBkYXRhJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlcztcbiIsImNvbnN0IENBUFNUT05FX0FQSV9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ0pCY2xYaEczeHNWRUF1eW5nVkEvbGlrZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBDQVBTVE9ORV9BUElfVVJMO1xuIiwiaW1wb3J0IGdldEJvb2tzIGZyb20gJy4vZ2V0Qm9va3MuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIGdldExpa2VzQWZ0ZXJQb3N0IH0gZnJvbSAnLi9nZXRMaWtlcy5qcyc7XG5pbXBvcnQgcG9zdExpa2VzIGZyb20gJy4vcG9zdExpa2VzLmpzJztcbmltcG9ydCBib29rQ291bnQgZnJvbSAnLi9ib29rQ291bnQuanMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vZ2V0Q29tbWVudHMuanMnO1xuXG5jb25zdCBib29rR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWdyaWQnKTtcbmJvb2tHcmlkLmlubmVySFRNTCA9ICcnO1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgZ2V0Qm9va3MoKTtcbiAgICBib29rQ291bnQoYm9va3MubGVuZ3RoKTtcbiAgICBjb25zdCBnZXRUaGVMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgYm9va3MuZm9yRWFjaCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0VGhlTGlrZXMuZmluZEluZGV4KChsaWtlKSA9PiArbGlrZS5pdGVtX2lkID09PSBpbmRleCk7XG4gICAgICBjb25zdCBsaWtlcyA9IGlkID49IDAgPyBnZXRUaGVMaWtlc1tpZF0ubGlrZXMgOiAwO1xuXG4gICAgICBjb25zdCB0aHVtYm5haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCd0aHVtYm5haWwnKTtcbiAgICAgIHRodW1ibmFpbC5zcmMgPSBib29rLmNvdmVySW1hZ2VVcmw7XG5cbiAgICAgIGNvbnN0IGJvb2tUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib29rVGltZS5jbGFzc0xpc3QuYWRkKCdib29rLXRpbWUnKTtcbiAgICAgIGJvb2tUaW1lLnRleHRDb250ZW50ID0gYFB1Ymxpc2hlZCBpbjogJHtib29rLnB1Ymxpc2hZZWFyfWA7XG5cbiAgICAgIGNvbnN0IHRodW1ibmFpbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGh1bWJuYWlsUm93LmNsYXNzTGlzdC5hZGQoJ3RodW1ibmFpbC1yb3cnKTtcbiAgICAgIHRodW1ibmFpbFJvdy5hcHBlbmQodGh1bWJuYWlsLCBib29rVGltZSk7XG5cbiAgICAgIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGJvb2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdib29rLXRpdGxlJyk7XG4gICAgICBib29rVGl0bGUudGV4dENvbnRlbnQgPSBib29rLnRpdGxlO1xuXG4gICAgICBjb25zdCBib29rTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGJvb2tMaWtlLmNsYXNzTGlzdC5hZGQoJ2Jvb2stbGlrZScpO1xuICAgICAgYm9va0xpa2UudGV4dENvbnRlbnQgPSBg4p2kICR7bGlrZXN9IExpa2VzYDtcbiAgICAgIGJvb2tMaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAocG9zdExpa2VzKGlkKSkge1xuICAgICAgICAgIGNvbnN0IGdldFBvc3RlZExpa2VzID0gYXdhaXQgZ2V0TGlrZXNBZnRlclBvc3QoKTtcbiAgICAgICAgICBpZiAoZ2V0UG9zdGVkTGlrZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaWtlcyA9IGdldFBvc3RlZExpa2VzW2lkXS5saWtlcztcbiAgICAgICAgICAgIGJvb2tMaWtlLnRleHRDb250ZW50ID0gYOKdpCAke3VwZGF0ZWRMaWtlc30gTGlrZXNgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGJvb2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib29rSW5mby5jbGFzc0xpc3QuYWRkKCdib29rLWluZm8nKTtcbiAgICAgIGJvb2tJbmZvLmFwcGVuZChib29rVGl0bGUsIGJvb2tMaWtlKTtcblxuICAgICAgY29uc3QgYm9va0luZm9HcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib29rSW5mb0dyaWQuY2xhc3NMaXN0LmFkZCgnYm9vay1pbmZvLWdyaWQnKTtcbiAgICAgIGJvb2tJbmZvR3JpZC5hcHBlbmQoYm9va0luZm8pO1xuXG4gICAgICBjb25zdCBib29rUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9va1ByZXZpZXcuY2xhc3NMaXN0LmFkZCgnYm9vay1wcmV2aWV3Jyk7XG4gICAgICBib29rUHJldmlldy5hcHBlbmQodGh1bWJuYWlsUm93LCBib29rSW5mb0dyaWQpO1xuXG4gICAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBDb21tZW50JztcbiAgICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIHNob3cgY29tbWVudCBwb3B1cCBmb3IgdGhpcyBib29rXG4gICAgICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKGluZGV4KTtcbiAgICAgICAgcG9wdXAuc2hvd1BvcHVwKGJvb2spO1xuICAgICAgICAvLyBnZXQgY29tbWVudHMgZm9yIHRoaXMgYm9vayBhbmQgZGlzcGxheSB0aGVtIGluIHRoZSBwb3B1cFxuICAgICAgICBnZXRDb21tZW50cyhpbmRleCkudGhlbigoY29tbWVudHMpID0+IHtcbiAgICAgICAgICBwb3B1cC5kaXNwbGF5Q29tbWVudHMoY29tbWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwb3B1cCdzIGZvcm1cbiAgICAgICAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19uZXctY29tbWVudC1idXR0b24nKTtcbiAgICAgICAgcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHBvcHVwLmFkZENvbW1lbnQoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYm9va1ByZXZpZXcuYXBwZW5kQ2hpbGQoY29tbWVudEJ1dHRvbik7XG5cbiAgICAgIGJvb2tHcmlkLmFwcGVuZENoaWxkKGJvb2tQcmV2aWV3KTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib29rR3JpZC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+JHtlcnJvci5tZXNzYWdlfTwvcD5gO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9