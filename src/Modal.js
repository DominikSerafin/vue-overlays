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

    container: {
      validator: function(value){
        if (value instanceof HTMLElement) return true;
        if (typeof value === 'object') return true;
      },
    },

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


  },

  data: function(){
    return {

    }
  },

  computed: {
  },

  watch: {
  },

  beforeCreate: function(){
  },


  created: function(){
    this.getOrCreateManager();
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


    handleRendered: function(){
      this.$_mountNode = this.$refs.portal.$refs.root;

      //this.autoFocus();
      this.$emit('rendered');

    },

    getOrCreateManager: function(){
      // i didn't know how to port the manager from React props to Vue version in "proper" way
      // and I didn't wanted to spent too much time on it, so this version is a little hackish
      // and done differently than in Material-UI React version...
      // in this version - manager is global (for container) for all modals inside that container
      // so it will manage all modals inside container, not only nested ones that have manage passes as prop
      // (pull requests welcome)
      const doc = ownerDocument(this.$_mountNode);
      const container = this.$props.container || doc.body;
      container.__vo_manager__ = container.__vo_manager__ ? container.__vo_manager__ : new ModalManager();
      this.$_manager = container.__vo_manager__;
    },


    handleOpen: function(event){

      const doc = ownerDocument(this.$_mountNode);
      const container = this.$props.container || doc.body;

      this.$_manager.add(this.$_mountNode, container);

      doc.addEventListener('keydown', this.handleDocumentKeyDown);
      doc.addEventListener('focus', this.enforceFocus, true);

    },


    handleClose: function(event){

      const doc = ownerDocument(this.$_mountNode);

      this.$_manager.remove(this.$_mountNode);

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




    isTopModal: function(){
      return this.$_manager.isTopModal(this.$_mountNode);
    },



  },





  render: function(h) {

    if (!this.$props.open) return;


    var style = this.$props.hideBackdrop ?
      Object.assign(modalStyles, hiddenStyles) : modalStyles;

    var modal = h('div', {
    }, this.$slots.default);




    var backdrop = this.$props.hideBackdrop ? null : h('Backdrop', {
      attrs: {open: this.$props.open},
      nativeOn: {
        'click': this.handleBackdropClick,
      },
      ref: 'backdrop',
    });




    var portal = h('Portal', {
      ref: 'portal',
      style: style,
      on: {
        'rendered': this.handleRendered,
      },
    }, [modal, backdrop]);


    return portal;

  },

};
