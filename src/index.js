import Portal from './Portal.js';
import Backdrop from './Backdrop.js';
import Modal from './Modal.js';
import ModalManager from './ModalManager.js';
import Popover from './Popover.js';


try {
  window.vo = {
    Portal: Portal,
    Backdrop: Backdrop,
    Modal: Modal,
    ModalManager: ModalManager,
    Popover: Popover,
  };
} catch (e) {
  console.error(e);
}


export default {
  Portal: Portal,
  Backdrop: Backdrop,
  Modal: Modal,
  ModalManager: ModalManager,
  Popover: Popover,
}
