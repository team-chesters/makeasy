import isKoreanChar from '../src/isKoreanChar';

describe('isKoreanChar function', () => {
    it('returns true for a Korean character', () => {
        expect(isKoreanChar('가')).toBe(true); // '가' is within the Korean Unicode range
    });

    it('returns false for a non-Korean character', () => {
        expect(isKoreanChar('A')).toBe(false); // 'A' is not within the Korean Unicode range
    });

    it('returns false for a numeric character', () => {
        expect(isKoreanChar('1')).toBe(false); // '1' is not a Korean character
    });

    it('returns false for a special character', () => {
        expect(isKoreanChar('@')).toBe(false); // '@' is not a Korean character
    });
});