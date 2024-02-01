import GetNextMonth from "../old/src_old/GetNextMonth";

describe('GetNextMonth function', () => {
    test('Return correct start and end dates for the next month', () => {
        const result = GetNextMonth();

        expect(result.start.getFullYear()).toBe(2024);
        expect(result.start.getMonth()).toBe(1); // Months are zero-indexed (0: January, 1: February, ...)
    });
});
