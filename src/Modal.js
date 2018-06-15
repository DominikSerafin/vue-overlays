import activeElement from './util/dom-helpers/activeElement';
import contains from './util/dom-helpers/query/contains';
import inDOM from './util/dom-helpers/util/inDOM';
import ownerDocument from './util/dom-helpers/ownerDocument';
//import { createChainedFunction } from './util/helpers';

import Portal from './Portal.js';
import Backdrop from './Backdrop.js';
import ModalManager from './ModalManager.js';



const modalStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'fixed',
  //zIndex: theme.zIndex.modal,
  zIndex: 1300,
  top: 0,
  left: 0,
}


const hiddenStyles = {
  visibility: 'hidden',
}


export default {

  props: {

    open: {
      type: Boolean,
      default: false,
    },

    hideBackdrop: {
      type: Boolean,
      default: false,
    },

    disableBackdropClick: {
      type: Boolean,
      default: false,
    },

    disableEscapeKeyDown: {
      type: Boolean,
      default: false,
    },

    manager: {
      default: function(){
        return new ModalManager();
      },
    },


  },

  data: function(){
    return {

    }
  },

  computed: {
  },

  watch: {
  },

  mounted: function(){

    if (this.$props.open) {
      this.handleOpen();
    }

  },

  updated: function(){

    if (this.$props.open) {
      this.handleOpen();
    } else {
      this.handleClose();
    }
  },

  beforeDestroy: function(){
    this.handleClose();
  },





  methods: {



    isTopModal: function(){
      return true; // TODO
    },



    handleRendered: function(){
      //this.autoFocus();
      this.$emit('rendered');
    },


    handleOpen: function(event){
      const doc = ownerDocument(this.$refs.modal);

      //const container = getContainer(this.props.container, doc.body);
      //this.$props.manager.add(this, container);

      doc.addEventListener('keydown', this.handleDocumentKeyDown);
      doc.addEventListener('focus', this.enforceFocus, true);

    },


    handleClose: function(event){

      //this.props.manager.remove(this);

      const doc = ownerDocument(this.$refs.modal);
      doc.removeEventListener('keydown', this.handleDocumentKeyDown);
      doc.removeEventListener('focus', this.enforceFocus);

      //this.restoreLastFocus();

    },


    handleDocumentKeyDown: function(event){

      var charCode = (typeof event.which == 'number') ? event.which : event.keyCode;
      var pressedEsc = charCode === 27;

      if (!this.isTopModal() || !pressedEsc)  return;

      this.$emit('escape-key-down', event);

      if (!this.$props.disableEscapeKeyDown)
        this.$emit('close-request', event, 'escape-key-down');


    },


    handleBackdropClick: function(event){

      if (event.target !== event.currentTarget) return;

      this.$emit('backdrop-click', event);

      if (!this.$props.disableBackdropClick)
        this.$emit('close-request', event, 'backdrop-click');

    },

  },





  render: function(h) {

    if (!this.$props.open) return null;


    var style = this.$props.hideBackdrop ?
      Object.assign(modalStyles, hiddenStyles) : modalStyles;

    var modal = h('div', {
      ref: 'modal',
    }, this.$slots.default);




    var backdrop = this.$props.hideBackdrop ? null : h('Backdrop', {
      attrs: {open: this.$props.open},
      nativeOn: {
        'click': this.handleBackdropClick,
      },
      ref: 'backdrop',
    });




    var portal = h('Portal', {
      style: style,
      ref: 'portal',
      on: {
        'rendered': this.handleRendered,
      },
    }, [modal, backdrop]);


    return portal;

  },

};
