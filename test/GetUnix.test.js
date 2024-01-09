import GetUnix from "../src/GetUnix";

describe('GetUnix function', () => {
    it('should return the Unix time of a valid Date object', () => {
        const date = new Date('2023-01-15');
        const result = GetUnix(date);
        const expected = Math.floor(date.getTime() / 1000);
        expect(result).toEqual(expected);
    });

    it('should return 0 if the input is not a valid Date object', () => {
        const notDate = '2023-01-15'; // not a Date object
        const result = GetUnix(notDate);
        const expected = 0;
        expect(result).toEqual(expected);
    });

    it('should return 0 if the input is an undefined', () => {
        const undefinedDate = undefined;
        const resultUndefined = GetUnix(undefinedDate);
        const expected = 0;
        expect(resultUndefined).toEqual(expected);
    });
});
