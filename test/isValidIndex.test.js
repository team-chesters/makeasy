import isValidIndex from '../src/isValidIndex';

describe('isValidIndex function', () => {
    it('should return true for valid indices in an array', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(isValidIndex(arr, 0)).toBe(true); // Index 0 is valid
        expect(isValidIndex(arr, 2)).toBe(true); // Index 2 is valid
        expect(isValidIndex(arr, 4)).toBe(true); // Index 4 is valid
    });

    it('should return false for negative indices', () => {
        const arr = [1, 2, 3];
        expect(isValidIndex(arr, -1)).toBe(false); // Negative index is not valid
    });

    it('should return false for out-of-range indices', () => {
        const arr = [1, 2, 3];
        expect(isValidIndex(arr, 3)).toBe(false); // Index 3 is out of range
        expect(isValidIndex(arr, 5)).toBe(false); // Index 5 is out of range
    });

    it('should return false for non-array inputs', () => {
        expect(isValidIndex(42, 2)).toBe(false); // Number input
        expect(isValidIndex('abc', 1)).toBe(false); // String input
        expect(isValidIndex({}, 0)).toBe(false); // Object input
    });
});
