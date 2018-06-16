import contains from './util/dom-helpers/query/contains';
import ownerDocument from './util/dom-helpers/ownerDocument';

import debounce from './util/debounce';
//import EventListener from 'react-event-listener';
import ownerWindow from './util/ownerWindow';

import Modal from './Modal.js';




function getOffsetTop(rect, vertical) {
  let offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}


function getOffsetLeft(rect, horizontal) {
  let offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}


function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical]
    .map(n => {
      return typeof n === 'number' ? `${n}px` : n;
    })
    .join(' ');
}


// Sum the scrollTop between two elements.
function getScrollParent(parent, child) {
  let element = child;
  let scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}


function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}



const popoverStyles = function(){ // paper:
  return {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
  }
};



export default {

  name: 'Popover',

  props: {

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

  },

  updated: function(){

  },

  beforeDestroy: function(){

  },

  methods: {

    handleCloseRequest: function(event, source){
      this.$emit('close-request', event, source);
    },


    setPositioningStyles: function(element){

      if (element && element.style) {
        const positioning = this.getPositioningStyle(element);
        if (positioning.top !== null) {
          element.style.top = positioning.top;
        }
        if (positioning.left !== null) {
          element.style.left = positioning.left;
        }
        element.style.transformOrigin = positioning.transformOrigin;
      }

    },






    getPositioningStyle: function(element){
      const { anchorEl, anchorReference, marginThreshold } = this.props;

      // Check if the parent has requested anchoring on an inner content node
      const contentAnchorOffset = this.getContentAnchorOffset(element);
      const elemRect = {
        width: element.clientWidth,
        height: element.clientHeight,
      };

      // Get the transform origin point on the element itself
      const transformOrigin = this.getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(transformOrigin),
        };
      }

      // Get the offset of of the anchoring element
      const anchorOffset = this.getAnchorOffset(contentAnchorOffset);

      // Calculate element positioning
      let top = anchorOffset.top - transformOrigin.vertical;
      let left = anchorOffset.left - transformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;

      // Use the parent window of the anchorEl if provided
      const containerWindow = ownerWindow(getAnchorEl(anchorEl));

      // Window thresholds taking required margin into account
      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      }

      warning(
        elemRect.height < heightThreshold || !elemRect.height || !heightThreshold,
        [
          'Material-UI: the popover component is too tall.',
          `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`,
          'Please consider adding a `max-height` to improve the user-experience.',
        ].join('\n'),
      );

      // Check if the horizontal axis needs shifting
      if (left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        transformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        transformOrigin.horizontal += diff;
      }

      return {
        top: `${top}px`,
        left: `${left}px`,
        transformOrigin: getTransformOriginValue(transformOrigin),
      };
    },













  },



  render: function(h) {

    var popover = h('div', {
      ref: 'popover',
      style: popoverStyles(),
    }, [this.$slots.default]);


    var modal = h('Modal', {
      ref: 'modal',
      attrs: {
        backdropInvisible: true,
      },
      on: {
        'close-request': this.handleCloseRequest,
      },
    }, [popover]);
    return modal;


    //var wrapper = h('div', {
    //  ref: 'wrapper',
    //}, [popover]);
    //return wrapper;


  },

};
