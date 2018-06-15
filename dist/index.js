/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Portal.js":
/*!***********************!*\
  !*** ./src/Portal.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _default={props:{target:{type:[String,Object]//default: function(){\n//  return window.body;\n//},\n//validator: function(value){\n//  return typeof value === 'object';\n//},\n}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){/*\n      https://vuejs.org/v2/api/#mounted\n      Note that mounted does not guarantee that all child components have also been mounted. If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted:\n    */this.portalElement();},updated:function updated(){this.portalElement();},beforeDestroy:function beforeDestroy(){this.removeElement();},methods:{getTargetElement:function getTargetElement(){var target;if(typeof this.$props.target==='string'){target=document.querySelector(this.$props.target);if(!target){console.error('Can\\'t find element with provided query selector to Portal target prop.');return;};}else{target=window.body;}return target;},portalElement:function portalElement(){var root=this.$refs.root;var target=this.getTargetElement();if(!root)return;if(!target)return;if(root.parentElement!==target){target.appendChild(root);}},removeElement:function removeElement(){var root=this.$refs.root;root?root.remove():null;}},render:function render(h){this.$nextTick(function(){//this.portalElement();\nthis.$emit('rendered');});return h('div',{attrs:{tabindex:'-1'},ref:'root'},this.$slots.default);}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Portal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _Portal=_interopRequireDefault(__webpack_require__(/*! ./Portal.js */ \"./src/Portal.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//if (typeof window !== typeof void 0) {\nwindow.vo={Portal:_Portal.default,Modal:null,Popover:null//}\n/*------------------------------------*\\\r\n    Expose / Autoinstall\r\n  \\*------------------------------------*/ /*\r\n  if (typeof exports === 'object' && typeof module === 'object') {\r\n    module.exports = XXXXX;\r\n  } else if (typeof define === 'function' && define.amd) {\r\n    define(function () { return XXXXX });\r\n  } else if (typeof window !== typeof void 0) {\r\n    window.XXXXX = XXXXX;\r\n  }\r\n\r\n  if (typeof Vue !== typeof void 0) {\r\n    Vue.use(XXXXX);\r\n  }\r\n\r\n*/};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });