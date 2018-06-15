
Vue.component('Portal', window.vo.Portal);
Vue.component('Backdrop', window.vo.Backdrop);
Vue.component('Modal', window.vo.Modal);


var app = new Vue({
  el: '#app',

  computed: {
    window: function(){
      return window || null;
    },
  },

  data: function(){
    return {
      count: 1,
      modalOpen1: false,
      modalOpen2: false,
      modalOpen3: false,
    };
  },

  mounted: function(){
  },

  methods: {
    onRendered: function(){
    },

    togglePortalTarget: function(){
      if(this._portalTarget) {
        this._portalTarget = void 0;
      } else {
        this._portalTarget = window.document.querySelector('.js-custom-target');
      }

      this.$forceUpdate();

    },
  },

});
