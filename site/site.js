Vue.component('Portal', window.vo.Portal);

var app = new Vue({
  el: '#app',

  computed: {
    window: function(){
      return window || null;
    },
  },

  mounted: function(){
  },

  methods: {
    onRendered: function(){
      window.console.warn('onRendered');
    },
  },

});
