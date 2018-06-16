
Vue.component('Portal', window.vo.Portal);
Vue.component('Backdrop', window.vo.Backdrop);
Vue.component('Modal', window.vo.Modal);
Vue.component('Popover', window.vo.Popover);


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
      daySeconds: 0,
      showPortal: false,
      modalOpen1: false,
      modalOpen2: false,
      modalOpen3: false,
      modalOpen4: false,
      showPopover1: false,
      showPopover1b: false,
      showPopover2: false,
      showPopover3: false,
      popover3Event: null,
    };
  },

  created: function(){
    this.setDaySeconds();
  },

  mounted: function(){
    //this._portalContainer = window.document.querySelector('.js-custom-container');
    //this.$forceUpdate();

    this.daySecondsInterval();
  },

  methods: {


    popover3BtnClick: function(event){
      this.popover3Event = event;
      this.showPopover3 = true;
    },




    setDaySeconds: function(){
      var dt = new Date();
      var secs = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
      this.daySeconds = secs;
    },

    daySecondsInterval: function(){
      setInterval(function () {
        this.setDaySeconds();
      }.bind(this), 1000);
    },

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
      if( this['$_modalStyleCached'+no] ) {
        return this['$_modalStyleCached'+no];
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


      this['$_modalStyleCached'+no] = style;

      return style;

    },

  },

});
