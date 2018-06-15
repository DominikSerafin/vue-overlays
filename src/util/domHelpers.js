


export function ownerDocument(node) {
  return (node && node.ownerDocument) || document;
}

export function ownerWindow(node) {
  let doc = ownerDocument(node);
  return doc && doc.defaultView || doc.parentWindow;
}


export function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}


export function scrollbarSize(recalc) {
  let size;
  if ((!size && size !== 0) || recalc) {
    if (canUseDOM()) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}





export default {
  ownerDocument: ownerDocument,
  ownerWindow: ownerWindow,
  scrollbarSize: scrollbarSize,
}
