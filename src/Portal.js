import ownerDocument from './util/dom-helpers/ownerDocument';
export default {

  name: 'Portal',

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
    this.$_main = this.$refs.main;
    this.$_originalContainer = this.$refs.main.parentElement;
    this.portalElement();
    this.$emit('rendered');
  },

  updated: function(){
    this.portalElement();
    this.$emit('rendered');
  },

  beforeDestroy: function(){

    // this is sketchy... and might brake something in some edge cases (like nesting Portals, etc)
    // (this helps components that have Portal as root component - e.g. Modal)
    // but it's there to ensure that there won't be any vue comment nodes left over
    // and any new portals will always be appended last to the container
    // (pull requests welcome for less sketchy solution...)
    var parentVnode = (this.$parent && this.$parent.$vnode) ? this.$parent.$vnode : null;
    parentVnode && parentVnode.elm && (parentVnode.elm.nodeName==='#comment') ? parentVnode.elm.remove() : null;

    // remove ref comment
    //this.$_refComment.parentNode.insertBefore(parentVnodeElm, this.$_refComment);
    //this.$_refComment.remove();

    this.$_main && this.$_main.remove();

  },


  methods: {


    portalElement: function(){
      if (!this.$_main) return;

      var doc = ownerDocument(this.$_main);

      this.$_containerElement = this.$props.container || doc.body;

      if (!this.$_containerElement) return;


      // place reference comment node to keep original portal position
      //this.$_refComment = doc.createComment('vo-reference');
      //this.$_main.parentNode.insertBefore(this.$_refComment, this.$_main);


      // checks whether container was already appended...
      if (this.$_main.parentElement==this.$_containerElement) return;

      this.$_containerElement.appendChild(this.$_main);

    },

  },

  render: function(h) {
    //this.$nextTick(function(){
      //this.portalElement();
      //this.$emit('rendered');
    //});
    //var key = +(new Date());
    //console.warn(key);
    return h('div', {ref: 'main'}, this.$slots.default);
  },

};
