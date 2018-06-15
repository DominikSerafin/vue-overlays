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

/***/ "./src/Backdrop.js":
/*!*************************!*\
  !*** ./src/Backdrop.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var rootStyles={zIndex:-1,width:'100%',height:'100%',position:'fixed',top:0,left:0,// Remove grey highlight\nWebkitTapHighlightColor:'transparent',backgroundColor:'rgba(0, 0, 0, 0.5)'};var invisibleStyles={backgroundColor:'transparent'};var _default={props:{invisible:{type:Boolean,default:false},open:{type:Boolean,required:true},rootClass:{type:String},invisibleClass:{type:String}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){},updated:function updated(){},beforeDestroy:function beforeDestroy(){},methods:{},render:function render(h){if(!this.$props.open)return null;var style=this.$props.invisible?Object.assign(rootStyles,invisibleStyles):rootStyles;var className=this.$props.invisible?this.$props.rootClass+' '+this.$props.invisibleClass:this.$props.rootClass;return h('div',{class:className,style:style,ref:'root',attrs:{'aria-hidden':'true'}});}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Backdrop.js?");

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./dom-helpers/ownerDocument */ \"./src/dom-helpers/ownerDocument.js\"));var _Portal=_interopRequireDefault(__webpack_require__(/*! ./Portal.js */ \"./src/Portal.js\"));var _Backdrop=_interopRequireDefault(__webpack_require__(/*! ./Backdrop.js */ \"./src/Backdrop.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var modalStyles={display:'flex',width:'100%',height:'100%',position:'fixed',//zIndex: theme.zIndex.modal,\nzIndex:1300,top:0,left:0};var hiddenStyles={visibility:'hidden'};var _default={props:{open:{type:Boolean,default:false},hideBackdrop:{type:Boolean,default:false},disableBackdropClick:{type:Boolean,default:false},disableEscapeKeyDown:{type:Boolean,default:false}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){if(this.$props.open){this.handleOpen();}},updated:function updated(){if(this.$props.open){this.handleOpen();}else{this.handleClose();}},beforeDestroy:function beforeDestroy(){this.handleClose();},methods:{isTopModal:function isTopModal(){return true;// TODO\n},handleRendered:function handleRendered(){//this.autoFocus();\nthis.$emit('rendered');},handleOpen:function handleOpen(event){var doc=(0,_ownerDocument.default)(this.$refs.modal);//const container = getContainer(this.props.container, doc.body);\n//this.props.manager.add(this, container);\ndoc.addEventListener('keydown',this.handleDocumentKeyDown);doc.addEventListener('focus',this.enforceFocus,true);},handleClose:function handleClose(event){//this.props.manager.remove(this);\nvar doc=(0,_ownerDocument.default)(this.$refs.modal);doc.removeEventListener('keydown',this.handleDocumentKeyDown);doc.removeEventListener('focus',this.enforceFocus);//this.restoreLastFocus();\n},handleDocumentKeyDown:function handleDocumentKeyDown(event){var charCode=typeof event.which=='number'?event.which:event.keyCode;var pressedEsc=charCode===27;if(!this.isTopModal()||!pressedEsc)return;this.$emit('escape-key-down',event);if(!this.$props.disableEscapeKeyDown)this.$emit('close-request',event,'escape-key-down');},handleBackdropClick:function handleBackdropClick(event){if(event.target!==event.currentTarget)return;this.$emit('backdrop-click',event);if(!this.$props.disableBackdropClick)this.$emit('close-request',event,'backdrop-click');}},render:function render(h){if(!this.$props.open)return null;var style=this.$props.hideBackdrop?Object.assign(modalStyles,hiddenStyles):modalStyles;var modal=h('div',{ref:'modal'},this.$slots.default);var backdrop=this.$props.hideBackdrop?null:h('Backdrop',{attrs:{open:this.$props.open},nativeOn:{'click':this.handleBackdropClick},ref:'backdrop'});var portal=h('Portal',{style:style,ref:'portal',on:{'rendered':this.handleRendered}},[modal,backdrop]);return portal;}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Modal.js?");

/***/ }),

/***/ "./src/Popover.js":
/*!************************!*\
  !*** ./src/Popover.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _default={props:{},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){},updated:function updated(){},beforeDestroy:function beforeDestroy(){},methods:{},render:function render(h){return h('div',{attrs:{tabindex:'-1'},ref:'root'},this.$slots.default);}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Popover.js?");

/***/ }),

/***/ "./src/Portal.js":
/*!***********************!*\
  !*** ./src/Portal.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./dom-helpers/ownerDocument */ \"./src/dom-helpers/ownerDocument.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}var _default={props:{target:{//default: function(){\n//  return window.body;\n//},\nvalidator:function validator(value){if(value instanceof HTMLElement)return true;if(_typeof(value)==='object')return true;}}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){/*\n      https://vuejs.org/v2/api/#mounted\n      Note that mounted does not guarantee that all child components have also been mounted.\n      If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted.\n    */this.portalElement();},updated:function updated(){this.portalElement();},beforeDestroy:function beforeDestroy(){var root=this.$refs.root;root?root.remove():null;},methods:{setTargetElement:function setTargetElement(){if(this.$props.target){this._targetElement=this.$props.target;}else{this._targetElement=(0,_ownerDocument.default)(this.$refs.root).body;}return this._targetElement;},portalElement:function portalElement(){this.setTargetElement();var target=this._targetElement;var root=this.$refs.root;if(!root)return;if(!target)return;// checks whether target was already appended...\nif(root.parentElement==target)return;target.appendChild(root);}},render:function render(h){this.$nextTick(function(){//this.portalElement();\nthis.$emit('rendered');});return h('div',{ref:'root'},this.$slots.default);}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Portal.js?");

/***/ }),

/***/ "./src/dom-helpers/ownerDocument.js":
/*!******************************************!*\
  !*** ./src/dom-helpers/ownerDocument.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=ownerDocument;function ownerDocument(node){return node&&node.ownerDocument||document;}\n\n//# sourceURL=webpack:///./src/dom-helpers/ownerDocument.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _Portal=_interopRequireDefault(__webpack_require__(/*! ./Portal.js */ \"./src/Portal.js\"));var _Backdrop=_interopRequireDefault(__webpack_require__(/*! ./Backdrop.js */ \"./src/Backdrop.js\"));var _Modal=_interopRequireDefault(__webpack_require__(/*! ./Modal.js */ \"./src/Modal.js\"));var _Popover=_interopRequireDefault(__webpack_require__(/*! ./Popover.js */ \"./src/Popover.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//if (typeof window !== typeof void 0){\nwindow.vo={Portal:_Portal.default,Backdrop:_Backdrop.default,Modal:_Modal.default,Popover:_Popover.default//};\n/*------------------------------------*\\\r\n    Expose / Autoinstall\r\n  \\*------------------------------------*/ /*\r\n  if (typeof exports === 'object' && typeof module === 'object') {\r\n    module.exports = XXXXX;\r\n  } else if (typeof define === 'function' && define.amd) {\r\n    define(function () { return XXXXX });\r\n  } else if (typeof window !== typeof void 0) {\r\n    window.XXXXX = XXXXX;\r\n  }\r\n\r\n  if (typeof Vue !== typeof void 0) {\r\n    Vue.use(XXXXX);\r\n  }\r\n\r\n*/};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });