import activeElement from './util/dom-helpers/activeElement';
import contains from './util/dom-helpers/query/contains';
import inDOM from './util/dom-helpers/util/inDOM';
import ownerDocument from './util/dom-helpers/ownerDocument';
import warning from './util/warning';
import extend from './util/extend';
//import { createChainedFunction } from './util/helpers';

import Portal from './Portal.js';
import Backdrop from './Backdrop.js';
import ModalManager from './ModalManager.js';

const rootStyles = function(){
  return {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'fixed',
    //zIndex: theme.zIndex.modal,
    zIndex: 1300,
    top: 0,
    left: 0,
  }
};


export default {

  name: 'Modal',

  props: {

    container: {
      validator: function(value){
        if (value instanceof HTMLElement) return true;
        if (typeof value === 'object') return true;
      },
    },

    backdropInvisible: {
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

    disableAutoFocus: {
      type: Boolean,
      default: false,
    },

    disableRestoreFocus: {
      type: Boolean,
      default: false,
    },

    disableEnforceFocus: {
      type: Boolean,
      default: false,
    },

  },

  watch: {


  },

  created: function(){
    this.getOrCreateManager();
  },

  mounted: function(){
    this.handleOpen();
  },

  updated: function(){
    this.checkForFocus();
  },

  beforeDestroy: function(){
    this.handleClose();
  },

  methods: {

    handleRendered: function(){

      // hackish solution to get portal main DOM ref
      this.$_mountNode = this.$refs.portal.$refs.main;

      this.autoFocus();
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

      container.__vo_manager__ = (
        container.__vo_manager__ ?
          container.__vo_manager__ : new ModalManager({handleContainerOverflow: false})
      );

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
      doc.removeEventListener('focus', this.enforceFocus, true);

      this.restoreLastFocus();

    },


    handleDocumentKeyDown: function(event){

      var charCode = (typeof event.which == 'number') ? event.which : event.keyCode;
      var pressedEsc = charCode === 27;

      if (!this.isTopModal() || !pressedEsc)  return;

      this.$emit('escape-key-down', event);

      if (!this.$props.disableEscapeKeyDown)
        this.$emit('close', event, 'escape-key-down');


    },


    handleBackdropClick: function(event){

      if (event.target !== event.currentTarget) return;

      this.$emit('backdrop-click', event);

      if (!this.$props.disableBackdropClick)
        this.$emit('close', event, 'backdrop-click');

    },


    checkForFocus: function(){
      if (inDOM) {
        this.$_lastFocus = activeElement();
      }
    },

    autoFocus: function(){
      if (this.$props.disableAutoFocus) return;

      this.$nextTick(function(){
        if (this.$props.disableAutoFocus) return;

        var modalEl = this.$refs.portal.$el.childNodes[1];

        const currentActiveElement = activeElement(ownerDocument(this.$_mountNode));

        if (modalEl && !contains(modalEl, currentActiveElement)) {
          this.$_lastFocus = currentActiveElement;

          if (!modalEl.hasAttribute('tabIndex')) {

            warning(
              false,
              [
                'Vue-Overlays: the Modal direct descendant element does not accept focus.',
                'For the benefit of assistive technologies, ' +
                'the tabindex of the node is being set to "-1".',
              ].join('\n'),
            );

            modalEl.setAttribute('tabIndex', -1);

          }

          modalEl.focus();

        }

      });

    },

    restoreLastFocus: function(){
      if (this.$props.disableRestoreFocus) return;

      this.$nextTick(function(){
        if (this.$props.disableRestoreFocus) return;

        if (this.$_lastFocus) {
          // Not all elements in IE11 have a focus method.
          // Because IE11 market share is low, we accept the restore focus being broken
          // and we silent the issue.
          if (this.$_lastFocus.focus) {
            this.$_lastFocus.focus();
          }

          this.$_lastFocus = null;
        }
      });

    },

    enforceFocus: function(){
      if (this.$props.disableEnforceFocus) return;

      this.$nextTick(function(){

        if (this.$props.disableEnforceFocus || !this.isTopModal()) {
          return;
        }

        var modalEl = this.$refs.portal.$el.childNodes[1];

        const currentActiveElement = activeElement(ownerDocument(this.$_mountNode));

        if (modalEl && !contains(modalEl, currentActiveElement)) {
          modalEl.focus();
        }

      });
    },


    isTopModal: function(){
      return this.$_manager.isTopModal(this.$_mountNode);
    },

  },



  render: function(h) {

    var backdrop = this.$props.hideBackdrop ? null : h('Backdrop', {
      ref: 'backdrop',
      attrs: {
        invisible: this.$props.backdropInvisible,
      },
      nativeOn: {
        'click': this.handleBackdropClick,
      },
    });



    var portal = h('Portal', {
      ref: 'portal',
      style: rootStyles(),
      on: {
        'rendered': this.handleRendered,
      },
    }, [backdrop, this.$slots.default]);



    return portal;

  },

};
