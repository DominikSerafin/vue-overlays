/*
  TODO:

  * Passing DOM attributes like aria-* to modals

*/




import Portal from './Portal.js';
import Backdrop from './Backdrop.js';
import Modal from './Modal.js';
import Popover from './Popover.js';


//if (typeof window !== typeof void 0){
  window.vo = {
    Portal: Portal,
    Backdrop: Backdrop,
    Modal: Modal,
    Popover: Popover,
  }
//};




  /*------------------------------------*\
    Expose / Autoinstall
  \*------------------------------------*/
  /*
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = XXXXX;
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return XXXXX });
  } else if (typeof window !== typeof void 0) {
    window.XXXXX = XXXXX;
  }

  if (typeof Vue !== typeof void 0) {
    Vue.use(XXXXX);
  }

*/
