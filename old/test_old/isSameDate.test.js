import isSameDate from '../old/src_old/isSameDate';

describe('isSameDate function', () => {
    it('should return true for two Date objects representing the same date', () => {
        const date1 = new Date('2022-01-11');
        const date2 = new Date('2022-01-11');
        expect(isSameDate(date1, date2)).toBe(true); // Both dates represent the same date (January 11, 2022)
    });

    it('should return false for two Date objects representing different dates', () => {
        const date1 = new Date('2022-01-11');
        const date2 = new Date('2022-01-12');
        expect(isSameDate(date1, date2)).toBe(false); // Different dates
    });

    it('should return false when one or both inputs are not Date objects', () => {
        const date1 = new Date('2022-01-11');
        const notADate = '2022-01-11';
        expect(isSameDate(date1, notADate)).toBe(false); // Second input is not a Date object
        expect(isSameDate(notADate, date1)).toBe(false); // First input is not a Date object
        expect(isSameDate(notADate, notADate)).toBe(false); // Neither input is a Date object
    });
});
