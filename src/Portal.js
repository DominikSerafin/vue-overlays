import ownerDocument from './util/dom-helpers/ownerDocument';
export default {

  props: {
    container: {
      validator: function(value){
        if (value instanceof HTMLElement) return true;
        if (typeof value === 'object') return true;
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
    /*
      https://vuejs.org/v2/api/#mounted
      Note that mounted does not guarantee that all child components have also been mounted.
      If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted.
    */
    this.portalElement();
    this.$emit('rendered');

  },

  updated: function(){
    this.portalElement();
    this.$emit('rendered');
  },

  beforeDestroy: function(){
    var root = this.$refs.root;

    // this is sketchy...
    // but it's there to ensure that there won't be any comment nodes left tover
    // and any new portals will always be appended last to the container
    // (pull requests welcome for less sketchy solution...)
    this.$parent.$vnode.elm.remove();

    root ? root.remove() : null;

  },

  methods: {


    portalElement: function(){
      this.$_containerElement = this.$props.container || ownerDocument(this.$refs.root).body;

      var container = this.$_containerElement;
      var root = this.$refs.root;

      if (!root) return;
      if (!container) return;

      // checks whether container was already appended...
      if (root.parentElement==container) return;

      container.appendChild(root);
    },

  },

  render: function(h) {
    //this.$nextTick(function(){
      //this.portalElement();
      //this.$emit('rendered');
    //});
    return h('div', {ref: 'root'}, this.$slots.default);
  },

};
