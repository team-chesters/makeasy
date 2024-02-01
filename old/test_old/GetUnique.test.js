import GetUnique from "../old/src_old/GetUnique";

describe('GetUnique function', () => {
    it('should return an array with unique values', () => {
        const inputArray = [1, 2, 2, 3, 4, 4, 5];
        const result = GetUnique(inputArray);
        const expected = [1, 2, 3, 4, 5];
        expect(result).toEqual(expected);
    });

    it('should return an empty array if the input array is empty', () => {
        const emptyArray = [];
        const result = GetUnique(emptyArray);
        const expected = [];
        expect(result).toEqual(expected);
    });

    it('should return the same array if all values are already unique', () => {
        const uniqueArray = [10, 20, 30, 40];
        const result = GetUnique(uniqueArray);
        const expected = [10, 20, 30, 40];
        expect(result).toEqual(expected);
    });
});
