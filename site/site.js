
Vue.component('Portal', window.vo.Portal);

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
      portalTarget: null,
    };
  },

  mounted: function(){
  },

  methods: {
    onRendered: function(){
      window.console.warn('onRendered');
    },
  },

});
