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
    /*
      https://vuejs.org/v2/api/#mounted
      Note that mounted does not guarantee that all child components have also been mounted. If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted:
    */
    this.portalElement();
  },

  updated: function(){
    this.portalElement();
  },

  beforeDestroy: function(){
    this.removeElement();
  },

  methods: {

    getTargetElement: function(){
      var target;
      if (typeof this.$props.target === 'string') {
        target = document.querySelector(this.$props.target);
        if (!target) {
          console.error('Can\'t find element with provided query selector to Portal target prop.')
          return;
        };
      } else {
        target = window.body;
      }
      return target;
    },

    portalElement: function(){

      var root = this.$refs.root;
      var target = this.getTargetElement();

      if (!root) return;
      if (!target) return;

      if (root.parentElement!==target) {
        target.appendChild(root);
      }

    },

    removeElement: function(){
      var root = this.$refs.root;
      root ? root.remove() : null;
    },

  },

  render: function(h) {
    this.$nextTick(function(){
      //this.portalElement();
      this.$emit('rendered');
    });
    return h('div', {attrs: {tabindex: '-1'}, ref: 'root'}, this.$slots.default);
  },

};
