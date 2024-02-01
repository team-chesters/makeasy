import isNotIn from '../old/src_old/isNotIn';

describe('isNotIn function', () => {
    it('should return true when the value is not in the list', () => {
        expect(isNotIn(1, 2, 3, 4)).toBe(true); // 1 is not in the list [2, 3, 4]
        expect(isNotIn('apple', 'banana', 'cherry')).toBe(true); // 'apple' is not in the list ['banana', 'cherry']
    });

    it('should return false when the value is in the list', () => {
        expect(isNotIn(3, 1, 2, 3, 4)).toBe(false); // 3 is in the list [1, 2, 3, 4]
        expect(isNotIn('cherry', 'apple', 'banana', 'cherry')).toBe(false); // 'cherry' is in the list ['apple', 'banana', 'cherry']
    });

    it('should return true when no values are provided', () => {
        expect(isNotIn('apple')).toBe(true); // When no values are provided, it should always return true.
    });
});
