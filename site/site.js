
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
      portalTarget: null,
      modalOpen: false,
    };
  },

  mounted: function(){
  },

  methods: {
    onRendered: function(){
    },
  },

});
