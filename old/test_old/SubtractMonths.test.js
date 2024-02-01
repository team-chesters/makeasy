import SubtractMonths from '../old/src_old/SubtractMonths';

describe('SubtractMonths function', () => {
    it('should subtract the specified number of months from the current date', () => {
        const today = new Date();
        const threeMonthsAgo = SubtractMonths(3);

        expect(threeMonthsAgo.getFullYear()).toBe(today.getFullYear());
        expect(threeMonthsAgo.getMonth()).toBe(today.getMonth() - 3);
    });

    it('should subtract months from a custom date', () => {
        const customDate = new Date('2023-07-15');
        const fourMonthsAgo = SubtractMonths(4, customDate);

        expect(fourMonthsAgo.getFullYear()).toBe(2023);
        expect(fourMonthsAgo.getMonth()).toBe(2); // 0-based month (January is 0), 
    });

    it('should handle subtracting 0 months', () => {
        const today = new Date();
        const sameDate = SubtractMonths(0);

        expect(sameDate.getFullYear()).toBe(today.getFullYear());
        expect(sameDate.getMonth()).toBe(today.getMonth());
    });

    it('should handle subtracting more months than available in the current year', () => {
        const today = new Date();
        const twelveMonthsAgo = SubtractMonths(12);

        expect(twelveMonthsAgo.getFullYear()).toBe(today.getFullYear() - 1);
        expect(twelveMonthsAgo.getMonth()).toBe(today.getMonth());
    });

    it('should handle negative numOfMonths', () => {
        const today = new Date();
        const futureDate = SubtractMonths(-3);

        expect(futureDate.getFullYear()).toBe(today.getFullYear());
        expect(futureDate.getMonth()).toBe(today.getMonth() + 3);
    });
});
