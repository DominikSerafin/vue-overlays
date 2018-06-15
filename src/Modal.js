import Portal from './Portal.js';
import Backdrop from './Backdrop.js';


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

  },

  updated: function(){

  },

  beforeDestroy: function(){

  },

  methods: {


    handleBackdropClick: function(event){
      if (event.target !== event.currentTarget) return;
      this.$emit('backdrop-click', event);
      if (!this.$props.disableBackdropClick) this.$emit('close-request', event, 'backdrop-click');
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
      ref: 'portal'
    }, [modal, backdrop]);


    return portal;

  },

};
