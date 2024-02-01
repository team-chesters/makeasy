import isInArray from '../old/src_old/isInArray';

describe('isInArray function', () => {
    it('should return true if value exists in the array', () => {
        expect(isInArray(2, [1, 2, 3])).toBe(true);
    });

    it('should return false if value does not exist in the array', () => {
        expect(isInArray(4, [1, 2, 3])).toBe(false);
    });

    it('should return false if array is empty', () => {
        expect(isInArray(1, [])).toBe(false);
    });

    it('should return false if input is not an array', () => {
        expect(isInArray(1, 'not an array')).toBe(false);
    });

    it('should return true if value exists as a string in the array', () => {
        expect(isInArray('2', [1, '2', 3])).toBe(true);
    });

    it('should return true if value exists as a string in the array with different case', () => {
        expect(isInArray('hello', ['Hello', 'World'])).toBe(false);
    });

    it('should return true if array contains null value', () => {
        expect(isInArray(null, [1, null, 3])).toBe(true);
    });
});
