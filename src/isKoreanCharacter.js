import isCharacterInRange from './isCharacterInRange';

const UNICODE_RANGES = [
    { start: 0xAC00, end: 0xD7A3 } // 한글 유니코드 범위
];

const isKoreanCharacter = function (character) {
    return isCharacterInRange(character, UNICODE_RANGES);
};

export default isKoreanCharacter;
