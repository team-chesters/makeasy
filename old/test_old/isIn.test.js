import isIn from '../old/src_old/isIn';

describe('isIn function', () => {
    it('returns true if the value is in the list', () => {
        expect(isIn(1, 1, 2, 3)).toBe(true);
        expect(isIn('hello', 'hello', 'world')).toBe(true);
    });

    it('returns false if the value is not in the list', () => {
        expect(isIn(4, 1, 2, 3)).toBe(false);
        expect(isIn('test', 'hello', 'world')).toBe(false);
    });

    it('handles different data types', () => {
        expect(isIn('1', 1, 2, 3)).toBe(false); // '1' (string) is not equal to 1 (number)
        expect(isIn(true, false, null, undefined)).toBe(false);
    });

    it('returns false for an empty list', () => {
        expect(isIn('value')).toBe(false);
    });
});
