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

    // with this I was  trying to remove the leftover empty comment elements appended to body
    // that happen when you nest Portals in Portals
    //this.$parent.$vnode.elm.remove();
    //this.$parent.$vnode.elm.appendChild(root);
    //this.$_containerElement.removeChild(root);

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
