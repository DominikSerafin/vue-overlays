// Taken from (with some potential modifications)  https://github.com/mui-org/material-ui/blob/7a412df351bbec25957215a27e94250f49f5e142/packages/material-ui/src/Modal/manageAriaHidden.js


const BLACKLIST = ['template', 'script', 'style'];

function isHidable(node) {
  return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
}

function siblings(container, mount, callback) {
  mount = [].concat(mount); // eslint-disable-line no-param-reassign
  [].forEach.call(container.children, node => {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      callback(node);
    }
  });
}

export function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

export function hideSiblings(container, mountNode) {
  siblings(container, mountNode, node => ariaHidden(true, node));
}

export function showSiblings(container, mountNode) {
  siblings(container, mountNode, node => ariaHidden(false, node));
}