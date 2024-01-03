import hasKey from './hasKey';
import ConvertHSLToHex from './ConvertHSLToHex';

/**
 * Converts a hex string input to an HSL (Hue, Saturation, Lightness) color representation.
 * 
 * @param {string} stringInput - The input hex string to convert.
 * @param {number} [saturation=100] - The saturation value (default: 100).
 * @param {number} [lightness=75] - The lightness value (default: 75).
 * @returns {string} Returns the HSL color representation of the input string.
 */

const hslMap = {};
const ConvertHexToHSL = false;

// const ConvertHexToHSL = (stringInput, saturation = 100, lightness = 75) => {
//     const hkey = `${stringInput}_${saturation}_${lightness}`;

//     if (hslMap[hkey]) return hslMap[hkey];

//     const stringUniqueHash = [...stringInput].reduce((acc, char) => {
//         return char.charCodeAt(0) + ((acc << 5) - acc);
//     }, 0);

//     const val = ConvertHSLToHex(stringUniqueHash % 360, saturation, lightness);

//     hslMap[hkey] = val;
//     return val;
// };

export default ConvertHexToHSL;