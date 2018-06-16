
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
      showPortal: false,
      count: 1,
      modalOpen1: false,
      modalOpen2: false,
      modalOpen3: false,
    };
  },

  created: function(){
  },

  mounted: function(){
    //this._portalContainer = window.document.querySelector('.js-custom-container');
    //this.$forceUpdate();
  },

  methods: {
    onRendered: function(){
    },

    togglePortalContainer: function(){
      if(this._portalContainer) {
        this._portalContainer = void 0;
      } else {
        this._portalContainer = window.document.querySelector('.js-custom-container');
      }

      this.$forceUpdate();

    },


    rand: function() {
      return Math.round(Math.random() * 20) - 10;
    },

    getModalStyle: function (no) {
      if( this['_modalStyleCached'+no] ) {
        return this['_modalStyleCached'+no];
      }

      const top = 50 + this.rand();
      const left = 50 + this.rand();

      var style = {

        width: '400px',
        padding: '32px',
        position: 'absolute',


        background: 'white',
        top: top + '%',
        left: left + '%',
        transform: `translate(-${top}%, -${left}%)`,
      };


      this['_modalStyleCached'+no] = style;

      return style;

    },

  },

});
