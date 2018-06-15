import ownerDocument from './util/dom-helpers/ownerDocument';
export default {

  props: {
    container: {
      //default: function(){
      //  return window.body;
      //},
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
    root ? root.remove() : null;
  },

  methods: {

    setContainerElement: function(){
      if (this.$props.container) {
        this._containerElement = this.$props.container;
      } else {
        this._containerElement = ownerDocument(this.$refs.root).body;
      }
      return this._containerElement;
    },

    portalElement: function(){
      this.setContainerElement();

      var container = this._containerElement;
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
