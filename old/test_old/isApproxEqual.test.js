import isApproxEqual from '../old/src_old/isApproxEqual';

describe('isApproxEqual function', () => {
    it('returns true for numbers that are approximately equal', () => {
        expect(isApproxEqual(0.1 + 0.2, 0.3)).toBe(true); // Common floating-point precision issue
    });

    it('returns false for numbers that are not approximately equal', () => {
        expect(isApproxEqual(0.1, 0.2)).toBe(false);
    });

    it('returns true for exactly equal numbers', () => {
        expect(isApproxEqual(1, 1)).toBe(true);
    });

    it('returns true for very close numbers', () => {
        expect(isApproxEqual(1, 1 + Number.EPSILON / 2)).toBe(true);
    });

    it('returns false for numbers that differ by more than Number.EPSILON', () => {
        expect(isApproxEqual(1, 1 + Number.EPSILON)).toBe(false);
    });
});
