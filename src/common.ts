export type ErrorCallback = (err: Error, result?: any) => void;

export async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function isFunction(x: any): x is Function {
  return typeof x === 'function' || x instanceof Function;
}

export function isNonNullPrimitive(x: any): x is NonNullPrimitive {
  return x !== null && x !== undefined && NonNullPrimitives.includes(typeof x);
}

export type NonNullPrimitive = 'string' | 'boolean' | 'number' | 'bigint' | 'symbol';
export const NonNullPrimitives = [
  'string', 'boolean', 'number', 'bigint', 'symbol'
]

/**
 * A way of determining if a value contains only numbers.
 *
 * @param {any} value A value to check whether or not it is only numbers.
 * @returns {boolean} Whether or not the thing provided is entirely made of
 * numbers.
 */
export function isOnlyNumbers(x: any) {
  return (isNonNullPrimitive(x) && typeof x === 'number') || (typeof x === 'string' && /^\d+$/.test(x));
}