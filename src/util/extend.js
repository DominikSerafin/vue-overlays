// Taken from (with some potential modifications) https://plainjs.com/javascript/utilities/merge-two-javascript-objects-19/

/*

  Merge two JavaScript objects
  Extend a JavaScript object with the key/value pairs of another.

  With the following helper, you can merge two objects into one new object:

  function extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
  }

  // example
  var a = { foo: true }, b = { bar: false };
  var c = extend(a, b);

  console.log(c);
  // { foo: true, bar: false }
  This is typically useful when merging an options dict with the default settings in a function or a plugin.

  If support for IE 8 is not required, you may use Object.keys for the same functionality instead:

  function extend(obj, src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
  }
  This involves slightly less code and is a bit faster.

*/



export default function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}
