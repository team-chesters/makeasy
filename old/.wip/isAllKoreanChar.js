import isKoreanChar from '../src/isKoreanChar';

/**
 * Checks if all characters in a given string are Korean characters.
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if all characters in the string are Korean characters, otherwise false.
 */

const isAllKoreanChar = function (str) {
    if (typeof str !== 'string') return false;

    const characters = Array.from(str);

    for (let i = 0; i < characters.length; ++i) {
        if (!isKoreanChar(characters[i].charCodeAt(0))) return false;
    }

    return true;
};

export default isAllKoreanChar;
