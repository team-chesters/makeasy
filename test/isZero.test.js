import isZero from '../src/isZero';

describe('isZero function', () => {
    it('should return true for integer zero', () => {
        expect(isZero(0)).toBe(true); // Integer zero
        expect(isZero(-0)).toBe(true); // Negative zero
    });

    it('should return false for non-zero integers', () => {
        expect(isZero(1)).toBe(false); // Positive integer
        expect(isZero(-1)).toBe(false); // Negative integer
        expect(isZero(42)).toBe(false); // Another positive integer
    });

    it('should return false for non-integer inputs', () => {
        expect(isZero(0.5)).toBe(false); // Floating-point number
    });
    
    it('should return null for empty inputs', () => {
        expect(isZero('0')).toBe(null); // String '0'
        expect(isZero(undefined)).toBe(null); // undefined
        expect(isZero([])).toBe(null); // Empty array
        expect(isZero('')).toBe(null); // Empty string
        expect(isZero(null)).toBe(null); // null
        expect(isZero({})).toBe(null); // Empty object
    });
});
