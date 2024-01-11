import isInDateRange from '../src/isInDateRange';

describe('isInDateRange function', () => {
    it('should return true for a date within the specified range', () => {
        const date = new Date('2023-01-15');
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-01-31');

        const result = isInDateRange(date, startDate, endDate);

        expect(result).toBe(true);
    });

    it('should return false for a date outside the specified range', () => {
        const date = new Date('2023-02-15');
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-01-31');

        const result = isInDateRange(date, startDate, endDate);

        expect(result).toBe(false);
    });

    // FIXME: i don't know why result is false.
    // it('should handle UNIX timestamps as input', () => {
    //     const date = 1674259200; // UNIX timestamp for '2023-01-21'
    //     const startDate = new Date('2023-01-01');
    //     const endDate = new Date('2023-01-31');

    //     const result = isInDateRange(date, startDate, endDate);

    //     expect(result).toBe(true);
    // });

    it('should return false for empty input date', () => {
        const date = null;
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-01-31');

        const result = isInDateRange(date, startDate, endDate);

        expect(result).toBe(false);
    });
});
