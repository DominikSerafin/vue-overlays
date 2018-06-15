const rootStyles = {
  zIndex: -1,
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  // Remove grey highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};


const invisibleStyles = {
  backgroundColor: 'transparent',
}



export default {

  props: {
    invisible: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      required: true,
    },
    rootClass: {
      type: String,
    },
    invisibleClass: {
      type: String,
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

    var style = this.$props.invisible ?
      Object.assign(rootStyles, invisibleStyles) : rootStyles;

    var className = this.$props.invisible ?
      this.$props.rootClass + ' ' + this.$props.invisibleClass : this.$props.rootClass;

    return h('div', {
      class: className,
      style: style,
      ref: 'root',
      attrs: {
        'aria-hidden': 'true',
      },
    });

  },

};
