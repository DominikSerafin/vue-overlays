import extend from './util/extend';


const rootStyles = function(){
  return {
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
};

const invisibleStyles = function(){
  return {
    backgroundColor: 'transparent',
  }
};



export default {

  name: 'Backdrop',

  props: {
    invisible: {
      type: Boolean,
      default: false,
    },
    rootClass: {
      type: String,
    },
    invisibleClass: {
      type: String,
    },
  },

  render: function(h) {

    var style = rootStyles();
    if (this.$props.invisible) Object.assign(style, invisibleStyles());

    //var className = this.$props.invisible ?
    //  this.$props.rootClass + ' ' + this.$props.invisibleClass : this.$props.rootClass;

    return h('div', {
      //class: className,
      style: style,
      ref: 'root',
      attrs: {
        'aria-hidden': 'true',
      },
    });

  },

};
