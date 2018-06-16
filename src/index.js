/*
  TODO:

  * Good way to customize styling/classes of VO components
  * Passing DOM attributes like aria-* to VO components
  * Sinking props into lower level components (e.g. Popover props => Modal props)
  * Modal: keepMounted
  * Modal: BackdropComponent
  * Modal: children props role
  * Modal: tabIndex prop make it work similar as in React version render
  * Backdrop: custom backdrop rendering (slot?)

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
