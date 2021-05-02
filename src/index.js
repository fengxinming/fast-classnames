/* eslint-disable prefer-rest-params */
import createHasOwn from 'celia/es/_createHasOwn';

const { isArray } = Array;

function forArray(classes, args, len) {
  for (let i = 0; i < len; i++) {
    _className(classes, args[i]);
  }
  return classes;
}

function _className(classes, arg) {
  if (arg) {
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      classes[classes.length] = arg;
    }
    else if (isArray(arg)) {
      forArray(classes, arg, arg.length);
    }
    else if (argType === 'object') {
      const hasOwn = createHasOwn(arg);
      for (const key in arg) {
        if (hasOwn(arg, key) && arg[key]) {
          classes[classes.length] = key;
        }
      }
    }
  }
  return classes;
}

export default function className() {
  const len = arguments.length;
  switch (len) {
    case 0:
      return '';
    case 1:
      return _className([], arguments[0]).join(' ');
    default:
      return forArray([], arguments, len).join(' ');
  }
}
