import { VERSION } from './makeasy.const';

import convert from './src/convert';
import number from './src/number';
import object from './src/object';
import array from './src/array';

import makeasy from './makeasy.wrapper';


makeasy.isArray = array.isArray;
makeasy.isEmpty = object.isEmpty;
makeasy.isObject = object.isObject;
makeasy.isNumber = number.isNumber;
makeasy.isNegative = number.isNegative;
makeasy.Dex2Hex = convert.Dex2Hex;
makeasy.Hsl2Hex = convert.Hsl2Hex;

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type {string}
 */
makeasy.version = VERSION;

export default makeasy;