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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _Portal=_interopRequireDefault(__webpack_require__(/*! ./Portal.js */ \"./src/Portal.js\"));var _Backdrop=_interopRequireDefault(__webpack_require__(/*! ./Backdrop.js */ \"./src/Backdrop.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var rootStyles={display:'flex',width:'100%',height:'100%',position:'fixed',//zIndex: theme.zIndex.modal,\nzIndex:1300,top:0,left:0};var hiddenStyles={visibility:'hidden'};var _default={props:{open:{type:Boolean,default:false},hideBackdrop:{type:Boolean,default:false}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){},updated:function updated(){},beforeDestroy:function beforeDestroy(){},methods:{},render:function render(h){var props=this.$props;var slots=this.$slots;/*\n    <Portal\n      ref={node => {\n        this.mountNode = node ? node.getMountNode() : node;\n      }}\n      container={container}\n      onRendered={this.handleRendered}\n    >\n      <div\n        data-mui-test=\"Modal\"\n        className={classNames(classes.root, className, {\n          [classes.hidden]: exited,\n        })}\n        {...other}\n      >\n        {hideBackdrop ? null : (\n          <BackdropComponent open={open} onClick={this.handleBackdropClick} {...BackdropProps} />\n        )}\n        <RootRef\n          rootRef={node => {\n            this.dialogElement = node;\n          }}\n        >\n          {React.cloneElement(children, childProps)}\n        </RootRef>\n      </div>\n    </Portal>\n    */console.log(this.$slots);if(!props.open)return null;if(props.hideBackdrop){var backdrop=null;}else{var backdrop=h('Backdrop',{attrs:{open:props.open},ref:'backdrop'});}var modal=h('div',{attrs:{},ref:'modal'},this.$slots.default);var portal=h('Portal',{attrs:{},ref:'portal'},[modal,backdrop]);return portal;}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Modal.js?");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _domHelpers=_interopRequireDefault(__webpack_require__(/*! ./util/domHelpers.js */ \"./src/util/domHelpers.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default={props:{target:{type:[String,Object]//default: function(){\n//  return window.body;\n//},\n//validator: function(value){\n//  return typeof value === 'object';\n//},\n}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){/*\n      https://vuejs.org/v2/api/#mounted\n      Note that mounted does not guarantee that all child components have also been mounted.\n      If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted.\n    */this.portalElement();},updated:function updated(){this.portalElement();},beforeDestroy:function beforeDestroy(){var root=this.$refs.root;root?root.remove():null;},methods:{setTargetElement:function setTargetElement(){if(typeof this.$props.target==='string'){var queriedElement=document.querySelector(this.$props.target);if(!queriedElement){console.error('Can\\'t find element with provided query selector to Portal target prop.');return;};this._targetElement=queriedElement;}else{this._targetElement=window.document.body;}return this._targetElement;},portalElement:function portalElement(){this.setTargetElement();var target=this._targetElement;var root=this.$refs.root;if(!root)return;if(!target)return;// checks whether target was already appended...\nif(root.parentElement==target)return;target.appendChild(root);}},render:function render(h){this.$nextTick(function(){//this.portalElement();\nthis.$emit('rendered');});return h('div',{ref:'root'},this.$slots.default);}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Portal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _Portal=_interopRequireDefault(__webpack_require__(/*! ./Portal.js */ \"./src/Portal.js\"));var _Backdrop=_interopRequireDefault(__webpack_require__(/*! ./Backdrop.js */ \"./src/Backdrop.js\"));var _Modal=_interopRequireDefault(__webpack_require__(/*! ./Modal.js */ \"./src/Modal.js\"));var _Popover=_interopRequireDefault(__webpack_require__(/*! ./Popover.js */ \"./src/Popover.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//if (typeof window !== typeof void 0){\nwindow.vo={Portal:_Portal.default,Backdrop:_Backdrop.default,Modal:_Modal.default,Popover:_Popover.default//};\n/*------------------------------------*\\\r\n    Expose / Autoinstall\r\n  \\*------------------------------------*/ /*\r\n  if (typeof exports === 'object' && typeof module === 'object') {\r\n    module.exports = XXXXX;\r\n  } else if (typeof define === 'function' && define.amd) {\r\n    define(function () { return XXXXX });\r\n  } else if (typeof window !== typeof void 0) {\r\n    window.XXXXX = XXXXX;\r\n  }\r\n\r\n  if (typeof Vue !== typeof void 0) {\r\n    Vue.use(XXXXX);\r\n  }\r\n\r\n*/};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/domHelpers.js":
/*!********************************!*\
  !*** ./src/util/domHelpers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.ownerDocument=ownerDocument;exports.ownerWindow=ownerWindow;exports.canUseDOM=canUseDOM;exports.scrollbarSize=scrollbarSize;exports.default=void 0;function ownerDocument(node){return node&&node.ownerDocument||document;}function ownerWindow(node){var doc=ownerDocument(node);return doc&&doc.defaultView||doc.parentWindow;}function canUseDOM(){return!!(typeof window!=='undefined'&&window.document&&window.document.createElement);}function scrollbarSize(recalc){var size;if(!size&&size!==0||recalc){if(canUseDOM()){var scrollDiv=document.createElement('div');scrollDiv.style.position='absolute';scrollDiv.style.top='-9999px';scrollDiv.style.width='50px';scrollDiv.style.height='50px';scrollDiv.style.overflow='scroll';document.body.appendChild(scrollDiv);size=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}}return size;}var _default={ownerDocument:ownerDocument,ownerWindow:ownerWindow,scrollbarSize:scrollbarSize};exports.default=_default;\n\n//# sourceURL=webpack:///./src/util/domHelpers.js?");

/***/ })

/******/ });