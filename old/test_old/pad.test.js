import pad from '../old/src_old/pad';

describe('pad function', () => {
    it('should pad a number with leading zeros', () => {
        expect(pad(5, 3)).toBe('005');
        expect(pad(42, 4)).toBe('0042');
    });

    it('should pad a string with leading zeros', () => {
        expect(pad('7', 4)).toBe('0007');
        expect(pad('123', 5)).toBe('00123');
    });

    it('should not pad if the width is equal or greater than the length', () => {
        expect(pad(123, 2)).toBe('123');
        expect(pad('abc', 3)).toBe('abc');
    });
});
