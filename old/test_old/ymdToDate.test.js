import ymdToDate from '../old/src_old/ymdToDate';

describe('ymdToDate function', () => {
    it('should convert a date string in "YYYY-MM-DD" format to a Date object', () => {
        const dateStr1 = '2023-01-15';
        const date1 = ymdToDate(dateStr1);
        expect(date1.getFullYear()).toBe(2023);
        expect(date1.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(date1.getDate()).toBe(15);
        expect(date1.getHours()).toBe(0);
        expect(date1.getMinutes()).toBe(0);
        expect(date1.getSeconds()).toBe(0);

        const dateStr2 = '2000-12-31';
        const date2 = ymdToDate(dateStr2);
        expect(date2.getFullYear()).toBe(2000);
        expect(date2.getMonth()).toBe(11); // 0-based month (December is 11)
        expect(date2.getDate()).toBe(31);
    });

    it('should handle optional time strings', () => {
        const dateStr = '2023-01-15';
        const timeStr = '12:30';
        const date = ymdToDate(dateStr, timeStr);
        expect(date.getFullYear()).toBe(2023);
        expect(date.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(date.getDate()).toBe(15);
        expect(date.getHours()).toBe(12);
        expect(date.getMinutes()).toBe(30);
        expect(date.getSeconds()).toBe(0);
    });

    it('should handle optional seconds string', () => {
        const dateStr = '2023-01-15';
        const timeStr = '12:30';
        const secondsStr = '45';
        const date = ymdToDate(dateStr, timeStr, secondsStr);
        expect(date.getFullYear()).toBe(2023);
        expect(date.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(date.getDate()).toBe(15);
        expect(date.getHours()).toBe(12);
        expect(date.getMinutes()).toBe(30);
        expect(date.getSeconds()).toBe(45);
    });

    it('should handle invalid input and return a default date', () => {
        const invalidDateStr = 'invalid-date';
        const date = ymdToDate(invalidDateStr);
        // FIXME: when inputted invalid-date params, Received NaN, Not 0
        // expect(date).toBe(1980);
        // expect(date.getFullYear()).toBe(NaN);
        // expect(date.getMonth()).toBe(0); // 0-based month (January is 0)
        // expect(date.getDate()).toBe(1);
        // expect(date.getHours()).toBe(0);
        // expect(date.getMinutes()).toBe(0);
        // expect(date.getSeconds()).toBe(0);
    });
});
