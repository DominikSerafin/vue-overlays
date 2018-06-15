import ownerDocument from './dom-helpers/ownerDocument';
export default {

  props: {
    target: {
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
  },

  updated: function(){
    this.portalElement();
  },

  beforeDestroy: function(){
    var root = this.$refs.root;
    root ? root.remove() : null;
  },

  methods: {

    setTargetElement: function(){
      if (this.$props.target) {
        this._targetElement = this.$props.target;
      } else {
        this._targetElement = ownerDocument(this.$refs.root).body;
      }
      return this._targetElement;
    },

    portalElement: function(){
      this.setTargetElement();

      var target = this._targetElement;
      var root = this.$refs.root;

      if (!root) return;
      if (!target) return;

      // checks whether target was already appended...
      if (root.parentElement==target) return;

      target.appendChild(root);
    },

  },

  render: function(h) {
    this.$nextTick(function(){
      //this.portalElement();
      this.$emit('rendered');
    });
    return h('div', {ref: 'root'}, this.$slots.default);
  },

};
