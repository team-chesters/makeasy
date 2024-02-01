import GetThisMonthRange from "../old/src_old/GetThisMonthRange";

describe('GetThisMonthRange function', () => {
    test('Get range of the current month', () => {
        const result = GetThisMonthRange();
        const startDate = result.start;
        const endDate = result.end;
        const today = new Date();

        // Check if start date is the first day of the month
        expect(startDate.getDate()).toBe(1);
        expect(startDate.getMonth()).toBe(today.getMonth());
        expect(startDate.getFullYear()).toBe(today.getFullYear());
        
        // Check if end date is the last day of the month
        const nextMonth = today.getMonth() + 1 === 12 ? 0 : today.getMonth() + 1;
        const nextYear = nextMonth === 0 ? today.getFullYear() + 1 : today.getFullYear();
        const expectedEndDate = new Date(nextYear, nextMonth, 0);

        expect(endDate.getDate()).toBe(expectedEndDate.getDate());
        expect(endDate.getMonth()).toBe(expectedEndDate.getMonth());
        expect(endDate.getFullYear()).toBe(expectedEndDate.getFullYear());
    });
});
