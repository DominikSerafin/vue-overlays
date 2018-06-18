

/* install */
Vue.use(Vuex);


/* store */

const store = new Vuex.Store({

  state: {

    navActive: 0, // for rwd,

  },

  mutations: {

    navActive: function(s, p) {
      s.navActive = p;
    },

  },

});




/* topbar */

var topbar = new Vue({

  el: '#topbar',

  store: store,

  data: function(){
    return {
      badgesOn: false,
    }
  },

  mounted: function(){
    setTimeout(function () {
      this.badgesOn = true;
    }.bind(this), 500);
  },

})





/* nav */

var navWrapper = new Vue({

  el: '#nav-wrapper',

  store: store,

  data: function(){
    return {
    }
  },

})




function removeClass(el, className){
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}


removeClass(window.document.documentElement, 'mod-js-parsing');
