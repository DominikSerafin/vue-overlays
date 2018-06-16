import Portal from './Portal.js';
import Backdrop from './Backdrop.js';
import Modal from './Modal.js';
import ModalManager from './ModalManager.js';
import Popover from './Popover.js';

var publicExport = {
  Portal: Portal,
  Backdrop: Backdrop,
  Modal: Modal,
  ModalManager: ModalManager,
  Popover: Popover,
}

window.vo = publicExport;

export default publicExport;
