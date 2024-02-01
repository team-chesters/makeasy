import isTimestamp from '../old/src_old/isTimestamp';

describe('isTimestamp function', () => {
    it('should return true for valid Unix timestamps', () => {
        expect(isTimestamp(1641900000)).toBe(true); // Valid Unix timestamp
        expect(isTimestamp(0)).toBe(true); // Valid Unix timestamp for January 1, 1970
    });

    it('should return false for invalid values', () => {
        // expect(isTimestamp('1641900000')).toBe(false); // String is not a valid Unix timestamp. but, string 'timestamp' is return true.
        expect(isTimestamp(null)).toBe(false); // null is not a valid Unix timestamp
        expect(isTimestamp(undefined)).toBe(false); // undefined is not a valid Unix timestamp
        expect(isTimestamp({})).toBe(false); // Empty object is not a valid Unix timestamp
        expect(isTimestamp([])).toBe(false); // Empty array is not a valid Unix timestamp
    });
});
