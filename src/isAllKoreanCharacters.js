import isKoreanCharacter from './isKoreanCharacter';

const isAllKoreanCharacters = function (str) {
    if (typeof str !== 'string')
        return false;

    const characters = Array.from(str);

    for (let i = 0; i < characters.length; ++i) {
        if (!isKoreanCharacter(characters[i].charCodeAt(0)))
            return false;
    }

    return true;
};

export default isAllKoreanCharacters;
