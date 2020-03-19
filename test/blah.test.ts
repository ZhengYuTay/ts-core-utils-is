import * as t from '../src';

describe('is test', () => {
  it('works', () => {
    expect(t.isArray([])).toBe(true);
    expect(t.isArray({})).toBe(false);

    expect(t.isBoolean(null)).toBe(false);
    expect(t.isBoolean(true)).toBe(true);
    expect(t.isBoolean(false)).toBe(true);

    expect(t.isNull(null)).toBe(true);
    expect(t.isNull(undefined)).toBe(false);
    expect(t.isNull(false)).toBe(false);
    expect(t.isNull()).toBe(false);

    expect(t.isNullOrUndefined(null)).toBe(true);
    expect(t.isNullOrUndefined(undefined)).toBe(true);
    expect(t.isNullOrUndefined(false)).toBe(false);
    expect(t.isNullOrUndefined()).toBe(true);

    expect(t.isNumber(null)).toBe(false);
    expect(t.isNumber('1')).toBe(false);
    expect(t.isNumber(1)).toBe(true);

    expect(t.isString(null)).toBe(false);
    expect(t.isString('1')).toBe(true);
    expect(t.isString(1)).toBe(false);

    expect(t.isSymbol(null)).toBe(false);
    expect(t.isSymbol('1')).toBe(false);
    expect(t.isSymbol(1)).toBe(false);
    expect(t.isSymbol(Symbol())).toBe(true);

    expect(t.isUndefined(null)).toBe(false);
    expect(t.isUndefined(undefined)).toBe(true);
    expect(t.isUndefined(false)).toBe(false);
    expect(t.isUndefined()).toBe(true);

    expect(t.isRegExp(null)).toBe(false);
    expect(t.isRegExp('1')).toBe(false);
    expect(t.isRegExp(new RegExp(''))).toBe(true);

    expect(t.isObject({})).toBe(true);
    expect(t.isObject([])).toBe(true);
    expect(t.isObject(new RegExp(''))).toBe(true);
    expect(t.isObject(new Date())).toBe(true);

    expect(t.isDate(null)).toBe(false);
    expect(t.isDate('1')).toBe(false);
    expect(t.isDate(new Date())).toBe(true);

    expect(t.isError(null)).toBe(false);
    expect(t.isError({ err: true })).toBe(false);
    expect(t.isError(new Error())).toBe(true);

    expect(t.isFunction(null)).toBe(false);
    expect(t.isFunction({})).toBe(false);
    expect(t.isFunction(function() {})).toBe(true);

    expect(t.isPrimitive(null)).toBe(true);
    expect(t.isPrimitive('')).toBe(true);
    expect(t.isPrimitive(0)).toBe(true);
    expect(t.isPrimitive(new Date())).toBe(false);

    expect(t.isBuffer(null)).toBe(false);
    expect(t.isBuffer({})).toBe(false);
    expect(t.isBuffer(new Buffer(0))).toBe(true);
  });
});
