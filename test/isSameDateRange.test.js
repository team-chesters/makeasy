import isSameDateRange from '../src/isSameDateRange';

describe('isSameDateRange function', () => {
    it('should return true for two identical date ranges', () => {
        const range1 = { start: new Date('2022-01-01'), end: new Date('2022-01-10') };
        const range2 = { start: new Date('2022-01-01'), end: new Date('2022-01-10') };
        expect(isSameDateRange(range1, range2)).toBe(true);
    });

    it('should return false for different date ranges', () => {
        const range1 = { start: new Date('2022-01-01'), end: new Date('2022-01-10') };
        const range2 = { start: new Date('2022-01-05'), end: new Date('2022-01-15') };
        expect(isSameDateRange(range1, range2)).toBe(false);
    });

    it('should return false when one or both inputs are not date ranges', () => {
        const range1 = { start: new Date('2022-01-01'), end: new Date('2022-01-10') };
        const notARange = '2022-01-01';
        expect(isSameDateRange(range1, notARange)).toBe(false); // Second input is not a date range
        expect(isSameDateRange(notARange, range1)).toBe(false); // First input is not a date range
        expect(isSameDateRange(notARange, notARange)).toBe(false); // Neither input is a date range
    });
});
