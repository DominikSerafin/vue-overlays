import domHelpers from './util/domHelpers.js';
export default {

  props: {
    target: {
      type: [String, Object],
      //default: function(){
      //  return window.body;
      //},
      //validator: function(value){
      //  return typeof value === 'object';
      //},
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
    console.warn(domHelpers.scrollbarSize());
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
      if (typeof this.$props.target === 'string') {
        var queriedElement = document.querySelector(this.$props.target);
        if (!queriedElement) {
          console.error('Can\'t find element with provided query selector to Portal target prop.')
          return;
        };
        this._targetElement = queriedElement;
      } else {
        this._targetElement = window.document.body;
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
