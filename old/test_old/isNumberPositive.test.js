import isNumberPositive from '../old/src_old/isNumberPositive';

describe('isNumberPositive function', () => {
    it('should return true for a positive number', () => {
        const positiveNumber = 42;

        const result = isNumberPositive(positiveNumber);

        expect(result).toBe(true);
    });

    it('should return null for zero', () => {
        const zero = 0;

        const result = isNumberPositive(zero);

        expect(result).toBe(null);
    });

    it('should return false for a negative number', () => {
        const negativeNumber = -7;

        const result = isNumberPositive(negativeNumber);

        expect(result).toBe(false);
    });

    it('should return null for an empty value', () => {
        const emptyValue = null;

        const result = isNumberPositive(emptyValue);

        expect(result).toBeNull();
    });

    it('should return null for a non-number value', () => {
        const nonNumber = 'abc';

        const result = isNumberPositive(nonNumber);

        expect(result).toBeNull();
    });
});
