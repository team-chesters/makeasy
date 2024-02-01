import GetMonthDiff from "../old/src_old/GetMonthDiff";

describe('GetMonthDiff function', () => {
    test('Return 0 for same dates', () => {
        const date1 = new Date('2023-01-15');
        const date2 = new Date('2023-01-15');
        expect(GetMonthDiff(date1, date2)).toBe(0);
    });

    test('Return correct difference for different months within the same year', () => {
        const date1 = new Date('2023-02-15');
        const date2 = new Date('2023-05-15');
        expect(GetMonthDiff(date1, date2)).toBe(3);
    });

    test('Return correct difference for different years', () => {
        const date1 = new Date('2022-10-15');
        const date2 = new Date('2023-03-15');
        expect(GetMonthDiff(date1, date2)).toBe(5);
    });
});
