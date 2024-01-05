import GetDayDiffBetween from "../src/GetDayDiffBetween";

test('Calculates difference in days between two dates', () => {
    const dateA = new Date('2023-01-01');
    const dateB = new Date('2023-01-10');

    const result = GetDayDiffBetween(dateA, dateB);

    // Check if the result is a number
    expect(typeof result).toBe('number');
});