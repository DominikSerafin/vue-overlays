import Portal from './Portal.js';
import Backdrop from './Backdrop.js';


const rootStyles = {
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
    var props = this.$props;
    var slots = this.$slots;

    /*
    <Portal
      ref={node => {
        this.mountNode = node ? node.getMountNode() : node;
      }}
      container={container}
      onRendered={this.handleRendered}
    >
      <div
        data-mui-test="Modal"
        className={classNames(classes.root, className, {
          [classes.hidden]: exited,
        })}
        {...other}
      >
        {hideBackdrop ? null : (
          <BackdropComponent open={open} onClick={this.handleBackdropClick} {...BackdropProps} />
        )}
        <RootRef
          rootRef={node => {
            this.dialogElement = node;
          }}
        >
          {React.cloneElement(children, childProps)}
        </RootRef>
      </div>
    </Portal>
    */

    console.log(this.$slots);

    if (!props.open) return null;



    if (props.hideBackdrop) {
      var backdrop = null;
    } else {
      var backdrop = h('Backdrop', {attrs: {open: props.open}, ref: 'backdrop'});
    }


    var modal = h('div', {attrs: {}, ref: 'modal'}, this.$slots.default);

    var portal = h('Portal', {attrs: {}, ref: 'portal'}, [modal, backdrop]);

    return portal;



  },

};
