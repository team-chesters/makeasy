const isCharacterInRange = function (character, ranges) {
    return ranges.some(range => character >= range.start && character <= range.end);
};

export default isCharacterInRange;