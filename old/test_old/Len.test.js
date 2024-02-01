import Len from '../old/src_old/Len';

describe('Len function', () => {
    it('should return the length of an array', () => {
        expect(Len([1, 2, 3])).toBe(3); // Array length is 3
        expect(Len([])).toBe(0); // Empty array has a length of 0
    });

    it('should return the length of a string', () => {
        expect(Len('Hello')).toBe(5); // String 'Hello' has a length of 5
        expect(Len('')).toBe(0); // Empty string has a length of 0
    });

    it('should return 0 for non-array and non-string inputs', () => {
        expect(Len(42)).toBe(0); // Number input
        expect(Len(null)).toBe(0); // null input
        expect(Len(undefined)).toBe(0); // undefined input
        expect(Len({})).toBe(0); // Empty object input
    });
});
