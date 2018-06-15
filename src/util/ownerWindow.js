// Taken from (with some potential modifications)  https://github.com/mui-org/material-ui/blob/7a412df351bbec25957215a27e94250f49f5e142/packages/material-ui/src/utils/ownerWindow.js

import ownerDocument from './dom-helpers/ownerDocument';



const ownerWindow = (node, fallback) => {
  const doc = ownerDocument(node);
  return doc.defaultView || doc.parentView || (fallback || window);
};

export default ownerWindow;
