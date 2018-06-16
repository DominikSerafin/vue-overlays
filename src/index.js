import Portal from './Portal.js';
import Backdrop from './Backdrop.js';
import Modal from './Modal.js';
import ModalManager from './ModalManager.js';
import Popover from './Popover.js';


var publicExport = function(){
  return {
    Portal: Portal,
    Backdrop: Backdrop,
    Modal: Modal,
    ModalManager: ModalManager,
    Popover: Popover,
  }
}


/*
if (typeof exports === 'object' && typeof module === 'object') {
  console.warn(1);
  module.exports = publicExport();
} else if (typeof define === 'function' && define.amd) {
  console.warn(2);
  define(function () { return publicExport() });
} else if (typeof window !== typeof void 0) {
  console.warn(3);
  window.vo = publicExport();
}
*/

/*
if (typeof Vue !== typeof void 0) {
  Vue.use(XXXXX);
}
*/



window.vo = publicExport();


module.exports = module.exports.default = publicExport();
