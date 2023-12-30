import hasKey from './hasKey';
import ConvertHSLToHex from './ConvertHSLToHex';

const hslMap = {};

const convertStringToHSL = (stringInput, saturation = 100, lightness = 75) => {
    const hkey = `${stringInput}_${saturation}_${lightness}`;

    if (hslMap[hkey]) return hslMap[hkey];

    const stringUniqueHash = [...stringInput].reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);

    const val = ConvertHSLToHex(stringUniqueHash % 360, saturation, lightness);

    hslMap[hkey] = val;
    return val;
};

export default convertStringToHSL;