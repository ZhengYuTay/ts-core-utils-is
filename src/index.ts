function isArray<T extends {} | null>(arg?: T) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}

function isBoolean<T extends {} | null>(arg?: T) {
  return typeof arg === 'boolean';
}

function isNull<T extends {} | null>(arg?: T) {
  return arg === null;
}

function isNullOrUndefined<T extends {} | null>(arg?: T) {
  return arg == null;
}

function isNumber<T extends {} | null>(arg?: T) {
  return typeof arg === 'number';
}

function isString<T extends {} | null>(arg?: T) {
  return typeof arg === 'string';
}

function isSymbol<T extends {} | null>(arg?: T) {
  return typeof arg === 'symbol';
}

function isUndefined<T extends {} | null>(arg?: T) {
  return arg === void 0;
}

function isRegExp<T extends {} | null>(re: T) {
  return objectToString(re) === '[object RegExp]';
}

function isObject<T extends {} | null>(arg?: T) {
  return typeof arg === 'object' && arg !== null;
}

function isDate<T extends {} | null>(d?: T) {
  return objectToString(d) === '[object Date]';
}

function isError<T extends {} | null>(e?: T) {
  return objectToString(e) === '[object Error]' || e instanceof Error;
}

function isFunction<T extends {} | null>(arg?: T) {
  return typeof arg === 'function';
}

function isPrimitive<T extends {} | null>(arg?: T) {
  return (
    arg === null ||
    typeof arg === 'boolean' ||
    typeof arg === 'number' ||
    typeof arg === 'string' ||
    typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined'
  );
}

function objectToString<T extends {} | null>(o?: T) {
  return Object.prototype.toString.call(o);
}

const isBuffer = Buffer.isBuffer;

export {
  isArray,
  isBoolean,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isRegExp,
  isObject,
  isDate,
  isError,
  isFunction,
  isPrimitive,
  objectToString,
  isBuffer,
};
