// Taken from (with some potential modifications)  https://github.com/mui-org/material-ui/blob/7a412df351bbec25957215a27e94250f49f5e142/packages/material-ui/src/Modal/isOverflowing.js

import isWindow from './dom-helpers/query/isWindow';
import ownerDocument from './dom-helpers/ownerDocument';
import ownerWindow from './ownerWindow';


export function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

// Do we have a scroll bar?
export default function isOverflowing(container) {
  const doc = ownerDocument(container);
  const win = ownerWindow(doc);

  /* istanbul ignore next */
  if (!isWindow(doc) && !isBody(container)) {
    return container.scrollHeight > container.clientHeight;
  }

  // Takes in account potential non zero margin on the body.
  const style = win.getComputedStyle(doc.body);
  const marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  const marginRight = parseInt(style.getPropertyValue('margin-right'), 10);

  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
}
