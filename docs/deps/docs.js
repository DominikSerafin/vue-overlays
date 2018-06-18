


/* iframe component */
Vue.component('browser', {

  name: 'browser',

  props: {

    'url': {
      type: String,
      required: true,
    },

  },

  data: function(){
    return {
    }
  },

  template: `<div class="browser">

    <div class="browser-top">

      <div class="browser-omnibox-icon mod-back">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" width="24px" height="24px">
        <g id="surface1">
        <path style=" " d="M 11.78125 2.28125 L 2.78125 11.28125 L 2.09375 12 L 2.78125 12.71875 L 11.78125 21.71875 L 13.21875 20.28125 L 5.9375 13 L 22 13 L 22 11 L 5.9375 11 L 13.21875 3.71875 Z "/>
        </g>
        </svg>

      </div>

      <div class="browser-omnibox-icon mod-forward">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" width="24px" height="24px">
        <g id="surface1">
        <path style=" " d="M 12.21875 2.28125 L 10.78125 3.71875 L 18.0625 11 L 2 11 L 2 13 L 18.0625 13 L 10.78125 20.28125 L 12.21875 21.71875 L 21.21875 12.71875 L 21.90625 12 L 21.21875 11.28125 Z "/>
        </g>
        </svg>
      </div>

      <div class="browser-omnibox-icon mod-refresh">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" width="24px" height="24px">
        <g id="surface1">
        <path style=" " d="M 21 1.90625 L 18.46875 4.4375 C 16.707031 2.941406 14.472656 2 12 2 C 6.464844 2 2 6.464844 2 12 C 2 17.535156 6.464844 22 12 22 C 17.535156 22 22 17.535156 22 12 L 20 12 C 20 16.464844 16.464844 20 12 20 C 7.535156 20 4 16.464844 4 12 C 4 7.535156 7.535156 4 12 4 C 13.921875 4 15.660156 4.695313 17.0625 5.84375 L 14.90625 8 L 21 8 Z "/>
        </g>
        </svg>
      </div>

      <div class="browser-omnibox">{{url}}</div>

      <a :href="url" target="_blank" rel="noopener noreferrer" class="browser-omnibox-icon mod-external">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
        <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
        </svg>
      </a>

    </div>

    <div class="browser-window">
      <iframe :src="url" frameborder="0" width="100%" height="400"></iframe>
    </div>

  </div>`,

});









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

});





/* nav */

var navWrapper = new Vue({

  el: '#nav-wrapper',

  store: store,

  data: function(){
    return {
    }
  },

});





/* browser */

var browser = new Vue({

  el: '[vue-browser]',

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

});




function removeClass(el, className){
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}


removeClass(window.document.documentElement, 'mod-js-parsing');
