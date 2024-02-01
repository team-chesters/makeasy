import GetPrevMonth from "../old/src_old/GetPrevMonth";

describe('GetPrevMonth function', () => {
    test('Return start and end dates of the previous month relative to the provided date', () => {
        const referenceDate = new Date('2023-09-15');

        const result = GetPrevMonth(referenceDate);

        const expectedStartDate = new Date('2023-08-01');
        const expectedEndDate = new Date('2023-08-31');
        expectedStartDate.setHours(0, 0, 0, 0);
        expectedEndDate.setHours(23, 59, 59, 0);

        expect(result.start.getFullYear()).toBe(expectedStartDate.getFullYear());
        expect(result.start.getMonth()).toBe(expectedStartDate.getMonth());
        expect(result.start.getDate()).toBe(expectedStartDate.getDate());
        expect(result.start.getHours()).toBe(expectedStartDate.getHours());
        expect(result.start.getMinutes()).toBe(expectedStartDate.getMinutes());
        expect(result.start.getSeconds()).toBe(expectedStartDate.getSeconds());

        expect(result.end.getFullYear()).toBe(expectedEndDate.getFullYear());
        expect(result.end.getMonth()).toBe(expectedEndDate.getMonth());
        expect(result.end.getDate()).toBe(expectedEndDate.getDate());
        expect(result.end.getHours()).toBe(expectedEndDate.getHours());
        expect(result.end.getMinutes()).toBe(expectedEndDate.getMinutes());
        expect(result.end.getSeconds()).toBe(expectedEndDate.getSeconds());
    });

    test('Return start and end dates of the previous month for the current date if not provided', () => {
        const result = GetPrevMonth();

        const currentDate = new Date();
        const expectedStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        const expectedEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        expectedStartDate.setHours(0, 0, 0, 0);
        expectedEndDate.setHours(23, 59, 59, 0);

        expect(result.start.getFullYear()).toBe(expectedStartDate.getFullYear());
        expect(result.start.getMonth()).toBe(expectedStartDate.getMonth());
        expect(result.start.getDate()).toBe(expectedStartDate.getDate());
        expect(result.start.getHours()).toBe(expectedStartDate.getHours());
        expect(result.start.getMinutes()).toBe(expectedStartDate.getMinutes());
        expect(result.start.getSeconds()).toBe(expectedStartDate.getSeconds());

        expect(result.end.getFullYear()).toBe(expectedEndDate.getFullYear());
        expect(result.end.getMonth()).toBe(expectedEndDate.getMonth());
        expect(result.end.getDate()).toBe(expectedEndDate.getDate());
        expect(result.end.getHours()).toBe(expectedEndDate.getHours());
        expect(result.end.getMinutes()).toBe(expectedEndDate.getMinutes());
        expect(result.end.getSeconds()).toBe(expectedEndDate.getSeconds());
    });
});
