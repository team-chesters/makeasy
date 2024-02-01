import padZero from '../old/src_old/padZero';

describe('padZero function', () => {
    it('should pad a string with leading zeros to the default length', () => {
        expect(padZero('5')).toBe('05'); // Single-digit string
        expect(padZero('42')).toBe('42'); // Two-digit string
    });

    it('should pad a string with leading zeros to a custom length', () => {
        expect(padZero('7', 4)).toBe('0007'); // Length 4
        expect(padZero('123', 6)).toBe('000123'); // Length 6
    });

    it('should not pad if the length is equal or greater than the original length', () => {
        expect(padZero('abc', 3)).toBe('abc'); // Length equal to original length
        expect(padZero('hello', 5)).toBe('hello'); // Length greater than original length
    });
});
