import isDateRangeSet from '../old/src_old/isDateRangeSet';

describe('isDateRangeSet function', () => {
    it('returns true for a valid date range object', () => {
        const validRange = { start: new Date('2020-01-01'), end: new Date('2020-01-31') };
        expect(isDateRangeSet(validRange)).toBe(true);
    });

    it('returns false for an object missing start or end', () => {
        const invalidRange = { start: new Date('2020-01-01') };
        expect(isDateRangeSet(invalidRange)).toBe(false);
    });

    it('returns false for non-Date start or end values', () => {
        const invalidRange = { start: '2020-01-01', end: new Date('2020-01-31') };
        expect(isDateRangeSet(invalidRange)).toBe(false);
    });

    it('returns false for an empty object', () => {
        expect(isDateRangeSet({})).toBe(false);
    });
});
