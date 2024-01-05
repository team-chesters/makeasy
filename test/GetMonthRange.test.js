import GetMonthRange from "../src/GetMonthRange";

describe('GetMonthRange function', () => {
    test('Return correct start and end dates for a given month', () => {
        const date = new Date('2023-07-15');
        const result = GetMonthRange(date);

        expect(result.start.getFullYear()).toBe(2023);
        expect(result.start.getMonth()).toBe(6); // JavaScript months are zero-based (0: January, 1: February, ...)
        expect(result.start.getDate()).toBe(1);
        expect(result.start.getHours()).toBe(0);
        expect(result.start.getMinutes()).toBe(0);
        expect(result.start.getSeconds()).toBe(0);

        expect(result.end.getFullYear()).toBe(2023);
        expect(result.end.getMonth()).toBe(6); // JavaScript months are zero-based (0: January, 1: February, ...)
        expect(result.end.getDate()).toBe(31);
        expect(result.end.getHours()).toBe(23);
        expect(result.end.getMinutes()).toBe(59);
        expect(result.end.getSeconds()).toBe(59);
    });
});
