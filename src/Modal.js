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


    
  },

  render: function(h) {

    if (!this.$props.open) return null;


    var style = this.$props.hideBackdrop ?
      Object.assign(modalStyles, hiddenStyles) : modalStyles;

    var modal = h('div', {style: style, ref: 'modal'}, this.$slots.default);




    if (this.$props.hideBackdrop) {
      var backdrop = null;
    } else {
      var backdrop = h('Backdrop', {attrs: {open: this.$props.open}, ref: 'backdrop'});
    }

    var portal = h('Portal', {ref: 'portal'}, [modal, backdrop]);

    return portal;

  },

};
