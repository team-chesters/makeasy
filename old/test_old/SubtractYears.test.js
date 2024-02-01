import SubtractYears from '../old/src_old/SubtractYears';

describe('SubtractYears function', () => {
    it('should subtract the specified number of years from the current date', () => {
        const today = new Date();
        const fiveYearsAgo = SubtractYears(5);

        expect(fiveYearsAgo.getFullYear()).toBe(today.getFullYear() - 5);
        expect(fiveYearsAgo.getMonth()).toBe(today.getMonth());
        expect(fiveYearsAgo.getDate()).toBe(today.getDate());
    });

    it('should subtract years from a custom date', () => {
        const customDate = new Date('2023-01-15');
        const threeYearsAgo = SubtractYears(3, customDate);

        expect(threeYearsAgo.getFullYear()).toBe(2020);
        expect(threeYearsAgo.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(threeYearsAgo.getDate()).toBe(15);
    });

    it('should handle subtracting 0 years', () => {
        const today = new Date();
        const sameDate = SubtractYears(0);

        expect(sameDate.getFullYear()).toBe(today.getFullYear());
        expect(sameDate.getMonth()).toBe(today.getMonth());
        expect(sameDate.getDate()).toBe(today.getDate());
    });

    it('should handle subtracting more years than available in the current date', () => {
        const today = new Date();
        const twentyYearsAgo = SubtractYears(20);

        expect(twentyYearsAgo.getFullYear()).toBe(today.getFullYear() - 20);
        expect(twentyYearsAgo.getMonth()).toBe(today.getMonth());
        expect(twentyYearsAgo.getDate()).toBe(today.getDate());
    });

    it('should handle negative numOfYears', () => {
        const today = new Date();
        const futureDate = SubtractYears(-3);

        expect(futureDate.getFullYear()).toBe(today.getFullYear() + 3);
        expect(futureDate.getMonth()).toBe(today.getMonth());
        expect(futureDate.getDate()).toBe(today.getDate());
    });
});
