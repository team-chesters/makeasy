import GetNextYearMonth from "../src/GetNextYearMonth";

describe('GetNextYearMonth function', () => {
    test('Return the date for the year and month ahead or behind the provided date', () => {
        const referenceDate = new Date('2023-09-15');

        // Adding 1 year and 2 months to the reference date
        const resultDate = GetNextYearMonth(referenceDate, 1, 2);

        // Expected date after adding 1 year and 2 months to the reference date
        const expectedDate = new Date('2024-11-15');

        expect(resultDate.getFullYear()).toBe(expectedDate.getFullYear());
        expect(resultDate.getMonth()).toBe(expectedDate.getMonth());
        expect(resultDate.getDate()).toBe(expectedDate.getDate());
        expect(resultDate.getHours()).toBe(expectedDate.getHours());
        expect(resultDate.getMinutes()).toBe(expectedDate.getMinutes());
        expect(resultDate.getSeconds()).toBe(expectedDate.getSeconds());
    });

    test('Return current date if invalid date is provided', () => {
        const resultDate = GetNextYearMonth('invalid date', 1, 2);
        const currentDate = new Date();

        expect(resultDate.getFullYear()).toBe(currentDate.getFullYear());
        expect(resultDate.getMonth()).toBe(currentDate.getMonth());
        expect(resultDate.getDate()).toBe(currentDate.getDate());
        expect(resultDate.getHours()).toBe(currentDate.getHours());
        expect(resultDate.getMinutes()).toBe(currentDate.getMinutes());
        expect(resultDate.getSeconds()).toBe(currentDate.getSeconds());
    });
});
