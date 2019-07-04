function getAncestorWithNonVisibleOverflow(node) {
  const { parentNode } = node;

  if (parentNode === document.body) {
    return document.body;
  }

  const overflowY = window.getComputedStyle(parentNode).overflowY;

  if (overflowY !== 'visible') {
    return parentNode;
  }

  return getAncestorWithNonVisibleOverflow(parentNode);
}

export default getAncestorWithNonVisibleOverflow;
