import canUseDOM from '../util/inDOM'

export default (function(){
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return canUseDOM
    ? function(context, node){
        if (context.contains) {
          return context.contains(node);
        } else if (context.compareDocumentPosition){
          return context === node || !!(context.compareDocumentPosition(node) & 16);
        } else {
          return fallback(context, node);
        }
      }
    : fallback;
})()

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while ((node = node.parentNode));

  return false;
}
