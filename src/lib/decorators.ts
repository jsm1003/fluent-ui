export function onSelect(event, item) {
  return function(target, name, descriptor) {
    descriptor.value = function() {};
  };
}

export function killEvent() {
  // default prevented
  // propagation stopped
}
