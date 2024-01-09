import GetStartOfWeek from "../src/GetStartOfWeek";

describe('GetStartOfWeek function', () => {
    it('should return the start of the week for a given valid date', () => {
        // Modify this based on your needs to test different scenarios
        const inputDate = '20240103';
        const result = GetStartOfWeek(inputDate);
        const expected = new Date('2023-12-31T15:00:00.000Z');
        expect(result).toEqual(expected);
    });

    it('should return a message if the parameter is empty', () => {
        const emptyInput = '';
        const result = GetStartOfWeek(emptyInput);
        const expected = 'parameter is empty';
        expect(result).toEqual(expected);
    });
});
