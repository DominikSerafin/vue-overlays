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

    transformOrigin: {
      default: function(){
        return {
          vertical: 'top',
          horizontal: 'left',
        }
      },
    },

    anchorEl: {

    },

    anchorOrigin: {
      default: function(){
        return {
          vertical: 'top',
          horizontal: 'left',
        }
      },
    },

    getContentAnchorEl: {

    },

    anchorReference: {
      default: 'anchorEl',
    },

    marginThreshold: {
      default: 16,
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
    this.setPositioningStyles(this.$refs.popover);
    const win = ownerWindow(this.$refs.popover);
    win.addEventListener('resize', this.handleResize, false);
  },

  updated: function(){

  },

  beforeDestroy: function(){
    const win = ownerWindow(this.$refs.popover);
    win.removeEventListener('resize', this.handleResize, false);
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

      const anchorEl = this.$props.anchorEl;
      const anchorReference = this.$props.anchorReference;
      const marginThreshold = this.$props.marginThreshold;


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

      console.warn(
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











    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    getAnchorOffset(contentAnchorOffset) {


      const anchorEl = this.$props.anchorEl;
      const anchorOrigin = this.$props.anchorOrigin;
      const anchorReference = this.$props.anchorReference;
      const anchorPosition = this.$props.anchorPosition;



      if (anchorReference === 'anchorPosition') {
        console.warn(
          anchorPosition,
          'Material-UI: you need to provide a `anchorPosition` property when using ' +
            '<Popover anchorReference="anchorPosition" />.',
        );
        return anchorPosition;
      }

      // If an anchor element wasn't provided, just use the parent body element of this Popover

      const anchorElement =
        getAnchorEl(anchorEl) || ownerDocument(ReactDOM.findDOMNode(this.transitionEl)).body;

      const anchorRect = anchorElement.getBoundingClientRect();
      const anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';

      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal),
      };
    },






    // Returns the vertical offset of inner content to anchor the transform on if provided
    getContentAnchorOffset: function(element){

      const anchorOrigin = this.$props.anchorOrigin;
      const getContentAnchorEl = this.$props.getContentAnchorEl;
      const anchorReference = this.$props.anchorReference;

      let contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        const contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && contains(element, contentAnchorEl)) {
          const scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset =
            contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        }

        // != the default value
        console.warn(
          anchorOrigin.vertical === 'top',
          [
            'Material-UI: you can not change the default `anchorOrigin.vertical` value ',
            'when also providing the `getContentAnchorEl` property to the popover component.',
            'Only use one of the two properties.',
            'Set `getContentAnchorEl` to null or left `anchorOrigin.vertical` unchanged.',
          ].join('\n'),
        );
      }

      return contentAnchorOffset;
    },




    // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use
    getTransformOrigin: function(elemRect, contentAnchorOffset) {
      if (typeof contentAnchorOffset === 'undefined') {
        var contentAnchorOffset = 0;
      }

      const transformOrigin = this.$props.transformOrigin;


      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal),
      };
    },





    handleGetOffsetTop: getOffsetTop,


    handleGetOffsetLeft: getOffsetLeft,



    handleResize: debounce(function(){
      console.warn('handleResize');
      this.setPositioningStyles(this.$refs.popover);
    }, 166), // Corresponds to 10 frames at 60 Hz.


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
