import baseMakeasy from './src/_base/baseMakeasy.js';
import isArray from './src/array/isArray.js';
import isObject from './src/object/isObject.js';

function makeasy(value) {
  if (isObject(value) && !isArray(value)) {
    if (value instanceof MakeasyWrapper) {
      return value;
    }
  }
  return new MakeasyWrapper(value);
}

// Ensure wrappers are instances of `baseMakeasy`.
makeasy.prototype = baseMakeasy.prototype;
makeasy.prototype.constructor = makeasy;

export default makeasy;
