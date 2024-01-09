import isNotInArray from '../src/isNotInArray'; // 경로 변경

describe('isNotInArray function', () => {
    it('should return true if value is not in the array', () => {
        const arr = [1, 2, 3, 4];
        expect(isNotInArray(5, arr)).toBe(true);
    });

    it('should return false if value is in the array', () => {
        const arr = [1, 2, 3, 4];
        expect(isNotInArray(3, arr)).toBe(false);
    });

    it('should return true if array is empty', () => {
        const arr = [];
        expect(isNotInArray(5, arr)).toBe(true);
    });

    it('should return true if input is not an array', () => {
        const arr = 'Not an array';
        expect(isNotInArray(5, arr)).toBe(true);
    });
});
