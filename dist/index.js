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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _activeElement=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/activeElement */ \"./src/util/dom-helpers/activeElement.js\"));var _contains=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/query/contains */ \"./src/util/dom-helpers/query/contains.js\"));var _inDOM=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/util/inDOM */ \"./src/util/dom-helpers/util/inDOM.js\"));var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/ownerDocument */ \"./src/util/dom-helpers/ownerDocument.js\"));var _Portal=_interopRequireDefault(__webpack_require__(/*! ./Portal.js */ \"./src/Portal.js\"));var _Backdrop=_interopRequireDefault(__webpack_require__(/*! ./Backdrop.js */ \"./src/Backdrop.js\"));var _ModalManager=_interopRequireDefault(__webpack_require__(/*! ./ModalManager.js */ \"./src/ModalManager.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}var modalStyles={display:'flex',width:'100%',height:'100%',position:'fixed',//zIndex: theme.zIndex.modal,\nzIndex:1300,top:0,left:0};var hiddenStyles={visibility:'hidden'};var _default={props:{container:{validator:function validator(value){if(value instanceof HTMLElement)return true;if(_typeof(value)==='object')return true;}},open:{type:Boolean,default:false},hideBackdrop:{type:Boolean,default:false},disableBackdropClick:{type:Boolean,default:false},disableEscapeKeyDown:{type:Boolean,default:false}},data:function data(){return{};},computed:{},watch:{},beforeCreate:function beforeCreate(){},created:function created(){this.getOrCreateManager();},mounted:function mounted(){if(this.$props.open){this.handleOpen();}},updated:function updated(){if(this.$props.open){this.handleOpen();}else{this.handleClose();}},beforeDestroy:function beforeDestroy(){this.handleClose();},methods:{handleRendered:function handleRendered(){this.$_mountNode=this.$refs.portal.$refs.root;//this.autoFocus();\nthis.$emit('rendered');},getOrCreateManager:function getOrCreateManager(){// i didn't know how to port the manager from React props to Vue version in \"proper\" way\n// and I didn't wanted to spent too much time on it, so this version is a little hackish\n// and done differently than in Material-UI React version...\n// in this version - manager is global (for container) for all modals inside that container\n// so it will manage all modals inside container, not only nested ones that have manage passes as prop\n// (pull requests welcome)\nvar doc=(0,_ownerDocument.default)(this.$_mountNode);var container=this.$props.container||doc.body;container.__vo_manager__=container.__vo_manager__?container.__vo_manager__:new _ModalManager.default();this.$_manager=container.__vo_manager__;},handleOpen:function handleOpen(event){var doc=(0,_ownerDocument.default)(this.$_mountNode);var container=this.$props.container||doc.body;this.$_manager.add(this.$_mountNode,container);doc.addEventListener('keydown',this.handleDocumentKeyDown);doc.addEventListener('focus',this.enforceFocus,true);},handleClose:function handleClose(event){var doc=(0,_ownerDocument.default)(this.$_mountNode);this.$_manager.remove(this.$_mountNode);doc.removeEventListener('keydown',this.handleDocumentKeyDown);doc.removeEventListener('focus',this.enforceFocus);//this.restoreLastFocus();\n},handleDocumentKeyDown:function handleDocumentKeyDown(event){var charCode=typeof event.which=='number'?event.which:event.keyCode;var pressedEsc=charCode===27;if(!this.isTopModal()||!pressedEsc)return;this.$emit('escape-key-down',event);if(!this.$props.disableEscapeKeyDown)this.$emit('close-request',event,'escape-key-down');},handleBackdropClick:function handleBackdropClick(event){if(event.target!==event.currentTarget)return;this.$emit('backdrop-click',event);if(!this.$props.disableBackdropClick)this.$emit('close-request',event,'backdrop-click');},isTopModal:function isTopModal(){return this.$_manager.isTopModal(this.$_mountNode);}},render:function render(h){if(!this.$props.open)return;var style=this.$props.hideBackdrop?Object.assign(modalStyles,hiddenStyles):modalStyles;var modal=h('div',{},this.$slots.default);var backdrop=this.$props.hideBackdrop?null:h('Backdrop',{attrs:{open:this.$props.open},nativeOn:{'click':this.handleBackdropClick},ref:'backdrop'});var portal=h('Portal',{ref:'portal',style:style,on:{'rendered':this.handleRendered}},[modal,backdrop]);return portal;}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Modal.js?");

/***/ }),

/***/ "./src/ModalManager.js":
/*!*****************************!*\
  !*** ./src/ModalManager.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _style=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/style */ \"./src/util/dom-helpers/style/index.js\"));var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/ownerDocument */ \"./src/util/dom-helpers/ownerDocument.js\"));var _scrollbarSize=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/util/scrollbarSize */ \"./src/util/dom-helpers/util/scrollbarSize.js\"));var _isOverflowing=_interopRequireDefault(__webpack_require__(/*! ./util/isOverflowing */ \"./src/util/isOverflowing.js\"));var _manageAriaHidden=__webpack_require__(/*! ./util/manageAriaHidden */ \"./src/util/manageAriaHidden.js\");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function findIndexOf(data,callback){var idx=-1;data.some(function(item,index){if(callback(item)){idx=index;return true;}return false;});return idx;}function getPaddingRight(node){return parseInt((0,_style.default)(node,'paddingRight')||0,10);}function setContainerStyle(data,container){var style={overflow:'hidden'};// We are only interested in the actual `style` here because we will override it.\ndata.style={overflow:container.style.overflow,paddingRight:container.style.paddingRight};if(data.overflowing){var scrollbarSize=(0,_scrollbarSize.default)();// Use computed style, here to get the real padding to add our scrollbar width.\nstyle.paddingRight=\"\".concat(getPaddingRight(container)+scrollbarSize,\"px\");// .mui-fixed is a global helper.\nvar fixedNodes=(0,_ownerDocument.default)(container).querySelectorAll('.mui-fixed');for(var i=0;i<fixedNodes.length;i+=1){var paddingRight=getPaddingRight(fixedNodes[i]);data.prevPaddings.push(paddingRight);fixedNodes[i].style.paddingRight=\"\".concat(paddingRight+scrollbarSize,\"px\");}}Object.keys(style).forEach(function(key){container.style[key]=style[key];});}function removeContainerStyle(data,container){Object.keys(data.style).forEach(function(key){container.style[key]=data.style[key];});var fixedNodes=(0,_ownerDocument.default)(container).querySelectorAll('.mui-fixed');for(var i=0;i<fixedNodes.length;i+=1){fixedNodes[i].style.paddingRight=\"\".concat(data.prevPaddings[i],\"px\");}}/**\n * @ignore - do not document.\n *\n * Proper state managment for containers and the modals in those containers.\n * Simplified, but inspired by react-overlay's ModalManager class\n * Used by the Modal to ensure proper styling of containers.\n */var ModalManager=/*#__PURE__*/function(){function ModalManager(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,ModalManager);var _options$hideSiblingN=options.hideSiblingNodes,hideSiblingNodes=_options$hideSiblingN===void 0?true:_options$hideSiblingN,_options$handleContai=options.handleContainerOverflow,handleContainerOverflow=_options$handleContai===void 0?true:_options$handleContai;this.hideSiblingNodes=hideSiblingNodes;this.handleContainerOverflow=handleContainerOverflow;// this.modals[modalIdx] = modal\nthis.modals=[];// this.containers[containerIdx] = container\nthis.containers=[];// this.data[containerIdx] = {\n//   modals: [],\n// }\nthis.data=[];}_createClass(ModalManager,[{key:\"add\",value:function add(modal,container){var modalIdx=this.modals.indexOf(modal);if(modalIdx!==-1){return modalIdx;}modalIdx=this.modals.length;this.modals.push(modal);if(this.hideSiblingNodes){//hideSiblings(container, modal.mountNode);\n(0,_manageAriaHidden.hideSiblings)(container,modal);}var containerIdx=this.containers.indexOf(container);if(containerIdx!==-1){this.data[containerIdx].modals.push(modal);return modalIdx;}var data={modals:[modal],overflowing:(0,_isOverflowing.default)(container),prevPaddings:[]};if(this.handleContainerOverflow){setContainerStyle(data,container);}this.containers.push(container);this.data.push(data);return modalIdx;}},{key:\"remove\",value:function remove(modal){var modalIdx=this.modals.indexOf(modal);if(modalIdx===-1){return modalIdx;}var containerIdx=findIndexOf(this.data,function(item){return item.modals.indexOf(modal)!==-1;});var data=this.data[containerIdx];var container=this.containers[containerIdx];data.modals.splice(data.modals.indexOf(modal),1);this.modals.splice(modalIdx,1);// If that was the last modal in a container, clean up the container.\nif(data.modals.length===0){if(this.handleContainerOverflow){removeContainerStyle(data,container);}if(this.hideSiblingNodes){//showSiblings(container, modal.mountNode);\n(0,_manageAriaHidden.showSiblings)(container,modal);}this.containers.splice(containerIdx,1);this.data.splice(containerIdx,1);}else if(this.hideSiblingNodes){// Otherwise make sure the next top modal is visible to a screan reader.\n//ariaHidden(false, data.modals[data.modals.length - 1].mountNode);\n(0,_manageAriaHidden.ariaHidden)(false,data.modals[data.modals.length-1]);}return modalIdx;}},{key:\"isTopModal\",value:function isTopModal(modal){return!!this.modals.length&&this.modals[this.modals.length-1]===modal;}}]);return ModalManager;}();var _default=ModalManager;exports.default=_default;\n\n//# sourceURL=webpack:///./src/ModalManager.js?");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./util/dom-helpers/ownerDocument */ \"./src/util/dom-helpers/ownerDocument.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}var _default={props:{container:{validator:function validator(value){if(value instanceof HTMLElement)return true;if(_typeof(value)==='object')return true;}}},data:function data(){return{};},computed:{},watch:{},mounted:function mounted(){/*\n      https://vuejs.org/v2/api/#mounted\n      Note that mounted does not guarantee that all child components have also been mounted.\n      If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted.\n    */this.portalElement();this.$emit('rendered');},updated:function updated(){this.portalElement();this.$emit('rendered');},beforeDestroy:function beforeDestroy(){var root=this.$refs.root;// with this I was  trying to remove the leftover empty comment elements appended to body\n// that happen when you nest Portals in Portals\n//this.$parent.$vnode.elm.remove();\n//this.$parent.$vnode.elm.appendChild(root);\n//this.$_containerElement.removeChild(root);\nroot?root.remove():null;},methods:{portalElement:function portalElement(){this.$_containerElement=this.$props.container||(0,_ownerDocument.default)(this.$refs.root).body;var container=this.$_containerElement;var root=this.$refs.root;if(!root)return;if(!container)return;// checks whether container was already appended...\nif(root.parentElement==container)return;container.appendChild(root);}},render:function render(h){//this.$nextTick(function(){\n//this.portalElement();\n//this.$emit('rendered');\n//});\nreturn h('div',{ref:'root'},this.$slots.default);}};exports.default=_default;\n\n//# sourceURL=webpack:///./src/Portal.js?");

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

/***/ "./src/util/dom-helpers/activeElement.js":
/*!***********************************************!*\
  !*** ./src/util/dom-helpers/activeElement.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=activeElement;var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./ownerDocument */ \"./src/util/dom-helpers/ownerDocument.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function activeElement(){var doc=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_ownerDocument.default)();try{return doc.activeElement;}catch(e){/* ie throws if no active element */}}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/activeElement.js?");

/***/ }),

/***/ "./src/util/dom-helpers/ownerDocument.js":
/*!***********************************************!*\
  !*** ./src/util/dom-helpers/ownerDocument.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=ownerDocument;function ownerDocument(node){return node&&node.ownerDocument||document;}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/ownerDocument.js?");

/***/ }),

/***/ "./src/util/dom-helpers/query/contains.js":
/*!************************************************!*\
  !*** ./src/util/dom-helpers/query/contains.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _inDOM=_interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ \"./src/util/dom-helpers/util/inDOM.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function(){// HTML DOM and SVG DOM may have different support levels,\n// so we need to check on context instead of a document root element.\nreturn _inDOM.default?function(context,node){if(context.contains){return context.contains(node);}else if(context.compareDocumentPosition){return context===node||!!(context.compareDocumentPosition(node)&16);}else{return fallback(context,node);}}:fallback;}();exports.default=_default;function fallback(context,node){if(node)do{if(node===context)return true;}while(node=node.parentNode);return false;}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/query/contains.js?");

/***/ }),

/***/ "./src/util/dom-helpers/query/isWindow.js":
/*!************************************************!*\
  !*** ./src/util/dom-helpers/query/isWindow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=getWindow;function getWindow(node){return node===node.window?node:node.nodeType===9?node.defaultView||node.parentWindow:false;}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/query/isWindow.js?");

/***/ }),

/***/ "./src/util/dom-helpers/style/getComputedStyle.js":
/*!********************************************************!*\
  !*** ./src/util/dom-helpers/style/getComputedStyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=_getComputedStyle;var _camelizeStyle=_interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ \"./src/util/dom-helpers/util/camelizeStyle.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var rposition=/^(top|right|bottom|left)$/;var rnumnonpx=/^([+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|))(?!px)[a-z%]+$/i;function _getComputedStyle(node){if(!node)throw new TypeError('No Element passed to `getComputedStyle()`');var doc=node.ownerDocument;return'defaultView'in doc?doc.defaultView.opener?node.ownerDocument.defaultView.getComputedStyle(node,null):window.getComputedStyle(node,null):{//ie 8 \"magic\" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72\ngetPropertyValue:function getPropertyValue(prop){var style=node.style;prop=(0,_camelizeStyle.default)(prop);if(prop=='float')prop='styleFloat';var current=node.currentStyle[prop]||null;if(current==null&&style&&style[prop])current=style[prop];if(rnumnonpx.test(current)&&!rposition.test(prop)){// Remember the original values\nvar left=style.left;var runStyle=node.runtimeStyle;var rsLeft=runStyle&&runStyle.left;// Put in the new values to get a computed value out\nif(rsLeft)runStyle.left=node.currentStyle.left;style.left=prop==='fontSize'?'1em':current;current=style.pixelLeft+'px';// Revert the changed values\nstyle.left=left;if(rsLeft)runStyle.left=rsLeft;}return current;}};}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/style/getComputedStyle.js?");

/***/ }),

/***/ "./src/util/dom-helpers/style/index.js":
/*!*********************************************!*\
  !*** ./src/util/dom-helpers/style/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=style;var _camelizeStyle=_interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ \"./src/util/dom-helpers/util/camelizeStyle.js\"));var _hyphenateStyle=_interopRequireDefault(__webpack_require__(/*! ../util/hyphenateStyle */ \"./src/util/dom-helpers/util/hyphenateStyle.js\"));var _getComputedStyle2=_interopRequireDefault(__webpack_require__(/*! ./getComputedStyle */ \"./src/util/dom-helpers/style/getComputedStyle.js\"));var _removeStyle=_interopRequireDefault(__webpack_require__(/*! ./removeStyle */ \"./src/util/dom-helpers/style/removeStyle.js\"));var _properties=__webpack_require__(/*! ../transition/properties */ \"./src/util/dom-helpers/transition/properties.js\");var _isTransform=_interopRequireDefault(__webpack_require__(/*! ../transition/isTransform */ \"./src/util/dom-helpers/transition/isTransform.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function style(node,property,value){var css='';var transforms='';var props=property;if(typeof property==='string'){if(value===undefined){return node.style[(0,_camelizeStyle.default)(property)]||(0,_getComputedStyle2.default)(node).getPropertyValue((0,_hyphenateStyle.default)(property));}else{(props={})[property]=value;}}Object.keys(props).forEach(function(key){var value=props[key];if(!value&&value!==0){(0,_removeStyle.default)(node,(0,_hyphenateStyle.default)(key));}else if((0,_isTransform.default)(key)){transforms+=\"\".concat(key,\"(\").concat(value,\") \");}else{css+=\"\".concat((0,_hyphenateStyle.default)(key),\": \").concat(value,\";\");}});if(transforms){css+=\"\".concat(_properties.transform,\": \").concat(transforms,\";\");}node.style.cssText+=';'+css;}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/style/index.js?");

/***/ }),

/***/ "./src/util/dom-helpers/style/removeStyle.js":
/*!***************************************************!*\
  !*** ./src/util/dom-helpers/style/removeStyle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=removeStyle;function removeStyle(node,key){return'removeProperty'in node.style?node.style.removeProperty(key):node.style.removeAttribute(key);}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/style/removeStyle.js?");

/***/ }),

/***/ "./src/util/dom-helpers/transition/isTransform.js":
/*!********************************************************!*\
  !*** ./src/util/dom-helpers/transition/isTransform.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=isTransform;var supportedTransforms=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function isTransform(property){return!!(property&&supportedTransforms.test(property));}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/transition/isTransform.js?");

/***/ }),

/***/ "./src/util/dom-helpers/transition/properties.js":
/*!*******************************************************!*\
  !*** ./src/util/dom-helpers/transition/properties.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=exports.animationEnd=exports.animationDelay=exports.animationTiming=exports.animationDuration=exports.animationName=exports.transitionEnd=exports.transitionDuration=exports.transitionDelay=exports.transitionTiming=exports.transitionProperty=exports.transform=void 0;var _inDOM=_interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ \"./src/util/dom-helpers/util/inDOM.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var transform='transform';exports.transform=transform;var prefix,transitionEnd,animationEnd;exports.animationEnd=animationEnd;exports.transitionEnd=transitionEnd;var transitionProperty,transitionDuration,transitionTiming,transitionDelay;exports.transitionDelay=transitionDelay;exports.transitionTiming=transitionTiming;exports.transitionDuration=transitionDuration;exports.transitionProperty=transitionProperty;var animationName,animationDuration,animationTiming,animationDelay;exports.animationDelay=animationDelay;exports.animationTiming=animationTiming;exports.animationDuration=animationDuration;exports.animationName=animationName;if(_inDOM.default){var _getTransitionPropert=getTransitionProperties();prefix=_getTransitionPropert.prefix;exports.transitionEnd=transitionEnd=_getTransitionPropert.transitionEnd;exports.animationEnd=animationEnd=_getTransitionPropert.animationEnd;exports.transform=transform=\"\".concat(prefix,\"-\").concat(transform);exports.transitionProperty=transitionProperty=\"\".concat(prefix,\"-transition-property\");exports.transitionDuration=transitionDuration=\"\".concat(prefix,\"-transition-duration\");exports.transitionDelay=transitionDelay=\"\".concat(prefix,\"-transition-delay\");exports.transitionTiming=transitionTiming=\"\".concat(prefix,\"-transition-timing-function\");exports.animationName=animationName=\"\".concat(prefix,\"-animation-name\");exports.animationDuration=animationDuration=\"\".concat(prefix,\"-animation-duration\");exports.animationTiming=animationTiming=\"\".concat(prefix,\"-animation-delay\");exports.animationDelay=animationDelay=\"\".concat(prefix,\"-animation-timing-function\");}var _default={transform:transform,end:transitionEnd,property:transitionProperty,timing:transitionTiming,delay:transitionDelay,duration:transitionDuration};exports.default=_default;function getTransitionProperties(){var style=document.createElement('div').style;var vendorMap={O:function O(e){return\"o\".concat(e.toLowerCase());},Moz:function Moz(e){return e.toLowerCase();},Webkit:function Webkit(e){return\"webkit\".concat(e);},ms:function ms(e){return\"MS\".concat(e);}};var vendors=Object.keys(vendorMap);var transitionEnd,animationEnd;var prefix='';for(var i=0;i<vendors.length;i++){var vendor=vendors[i];if(\"\".concat(vendor,\"TransitionProperty\")in style){prefix=\"-\".concat(vendor.toLowerCase());transitionEnd=vendorMap[vendor]('TransitionEnd');animationEnd=vendorMap[vendor]('AnimationEnd');break;}}if(!transitionEnd&&'transitionProperty'in style)transitionEnd='transitionend';if(!animationEnd&&'animationName'in style)animationEnd='animationend';style=null;return{animationEnd:animationEnd,transitionEnd:transitionEnd,prefix:prefix};}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/transition/properties.js?");

/***/ }),

/***/ "./src/util/dom-helpers/util/camelize.js":
/*!***********************************************!*\
  !*** ./src/util/dom-helpers/util/camelize.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=camelize;var rHyphen=/-(.)/g;function camelize(string){return string.replace(rHyphen,function(_,chr){return chr.toUpperCase();});}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/util/camelize.js?");

/***/ }),

/***/ "./src/util/dom-helpers/util/camelizeStyle.js":
/*!****************************************************!*\
  !*** ./src/util/dom-helpers/util/camelizeStyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=camelizeStyleName;var _camelize=_interopRequireDefault(__webpack_require__(/*! ./camelize */ \"./src/util/dom-helpers/util/camelize.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**\n * Copyright 2014-2015, Facebook, Inc.\n * All rights reserved.\n * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js\n */var msPattern=/^-ms-/;function camelizeStyleName(string){return(0,_camelize.default)(string.replace(msPattern,'ms-'));}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/util/camelizeStyle.js?");

/***/ }),

/***/ "./src/util/dom-helpers/util/hyphenate.js":
/*!************************************************!*\
  !*** ./src/util/dom-helpers/util/hyphenate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=hyphenate;var rUpper=/([A-Z])/g;function hyphenate(string){return string.replace(rUpper,'-$1').toLowerCase();}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/util/hyphenate.js?");

/***/ }),

/***/ "./src/util/dom-helpers/util/hyphenateStyle.js":
/*!*****************************************************!*\
  !*** ./src/util/dom-helpers/util/hyphenateStyle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=hyphenateStyleName;var _hyphenate=_interopRequireDefault(__webpack_require__(/*! ./hyphenate */ \"./src/util/dom-helpers/util/hyphenate.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**\n * Copyright 2013-2014, Facebook, Inc.\n * All rights reserved.\n * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js\n */var msPattern=/^ms-/;function hyphenateStyleName(string){return(0,_hyphenate.default)(string).replace(msPattern,'-ms-');}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/util/hyphenateStyle.js?");

/***/ }),

/***/ "./src/util/dom-helpers/util/inDOM.js":
/*!********************************************!*\
  !*** ./src/util/dom-helpers/util/inDOM.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _default=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);exports.default=_default;\n\n//# sourceURL=webpack:///./src/util/dom-helpers/util/inDOM.js?");

/***/ }),

/***/ "./src/util/dom-helpers/util/scrollbarSize.js":
/*!****************************************************!*\
  !*** ./src/util/dom-helpers/util/scrollbarSize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=scrollbarSize;var _inDOM=_interopRequireDefault(__webpack_require__(/*! ./inDOM */ \"./src/util/dom-helpers/util/inDOM.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var size;function scrollbarSize(recalc){if(!size&&size!==0||recalc){if(_inDOM.default){var scrollDiv=document.createElement('div');scrollDiv.style.position='absolute';scrollDiv.style.top='-9999px';scrollDiv.style.width='50px';scrollDiv.style.height='50px';scrollDiv.style.overflow='scroll';document.body.appendChild(scrollDiv);size=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}}return size;}\n\n//# sourceURL=webpack:///./src/util/dom-helpers/util/scrollbarSize.js?");

/***/ }),

/***/ "./src/util/isOverflowing.js":
/*!***********************************!*\
  !*** ./src/util/isOverflowing.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.isBody=isBody;exports.default=isOverflowing;var _isWindow=_interopRequireDefault(__webpack_require__(/*! ./dom-helpers/query/isWindow */ \"./src/util/dom-helpers/query/isWindow.js\"));var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./dom-helpers/ownerDocument */ \"./src/util/dom-helpers/ownerDocument.js\"));var _ownerWindow=_interopRequireDefault(__webpack_require__(/*! ./ownerWindow */ \"./src/util/ownerWindow.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Taken from (with some potential modifications)  https://github.com/mui-org/material-ui/blob/7a412df351bbec25957215a27e94250f49f5e142/packages/material-ui/src/Modal/isOverflowing.js\nfunction isBody(node){return node&&node.tagName.toLowerCase()==='body';}// Do we have a scroll bar?\nfunction isOverflowing(container){var doc=(0,_ownerDocument.default)(container);var win=(0,_ownerWindow.default)(doc);/* istanbul ignore next */if(!(0,_isWindow.default)(doc)&&!isBody(container)){return container.scrollHeight>container.clientHeight;}// Takes in account potential non zero margin on the body.\nvar style=win.getComputedStyle(doc.body);var marginLeft=parseInt(style.getPropertyValue('margin-left'),10);var marginRight=parseInt(style.getPropertyValue('margin-right'),10);return marginLeft+doc.body.clientWidth+marginRight<win.innerWidth;}\n\n//# sourceURL=webpack:///./src/util/isOverflowing.js?");

/***/ }),

/***/ "./src/util/manageAriaHidden.js":
/*!**************************************!*\
  !*** ./src/util/manageAriaHidden.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.ariaHidden=ariaHidden;exports.hideSiblings=hideSiblings;exports.showSiblings=showSiblings;// Taken from (with some potential modifications)  https://github.com/mui-org/material-ui/blob/7a412df351bbec25957215a27e94250f49f5e142/packages/material-ui/src/Modal/manageAriaHidden.js\nvar BLACKLIST=['template','script','style'];function isHidable(node){return node.nodeType===1&&BLACKLIST.indexOf(node.tagName.toLowerCase())===-1;}function siblings(container,mount,callback){mount=[].concat(mount);// eslint-disable-line no-param-reassign\n[].forEach.call(container.children,function(node){if(mount.indexOf(node)===-1&&isHidable(node)){callback(node);}});}function ariaHidden(show,node){if(!node){return;}if(show){node.setAttribute('aria-hidden','true');}else{node.removeAttribute('aria-hidden');}}function hideSiblings(container,mountNode){siblings(container,mountNode,function(node){return ariaHidden(true,node);});}function showSiblings(container,mountNode){siblings(container,mountNode,function(node){return ariaHidden(false,node);});}\n\n//# sourceURL=webpack:///./src/util/manageAriaHidden.js?");

/***/ }),

/***/ "./src/util/ownerWindow.js":
/*!*********************************!*\
  !*** ./src/util/ownerWindow.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _ownerDocument=_interopRequireDefault(__webpack_require__(/*! ./dom-helpers/ownerDocument */ \"./src/util/dom-helpers/ownerDocument.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Taken from (with some potential modifications)  https://github.com/mui-org/material-ui/blob/7a412df351bbec25957215a27e94250f49f5e142/packages/material-ui/src/utils/ownerWindow.js\nvar ownerWindow=function ownerWindow(node,fallback){var doc=(0,_ownerDocument.default)(node);return doc.defaultView||doc.parentView||fallback||window;};var _default=ownerWindow;exports.default=_default;\n\n//# sourceURL=webpack:///./src/util/ownerWindow.js?");

/***/ })

/******/ });