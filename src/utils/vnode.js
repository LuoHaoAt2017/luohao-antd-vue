export function getSlotChildren(h, slots, names) {
  let children = [];
  names.forEach(name => {
    const slot = slots[name];
    if (slot) {
      children.push(h('template', {
        slot: name
      }, slot));
    }
  });
  return children;
}