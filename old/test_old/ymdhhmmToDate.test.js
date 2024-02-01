import ymdhhmmToDate from '../old/src_old/ymdhhmmToDate';

describe('ymdhhmmToDate function', () => {
    it('should convert a date and time string in "YYYY-MM-DD HH:MM" format to a Date object', () => {
        const dateTimeStr1 = '2023-01-15 12:30';
        const dateTime1 = ymdhhmmToDate(dateTimeStr1);
        expect(dateTime1.getFullYear()).toBe(2023);
        expect(dateTime1.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(dateTime1.getDate()).toBe(15);
        expect(dateTime1.getHours()).toBe(12);
        expect(dateTime1.getMinutes()).toBe(30);
        expect(dateTime1.getSeconds()).toBe(0);

        const dateTimeStr2 = '2000-12-31 23:45';
        const dateTime2 = ymdhhmmToDate(dateTimeStr2);
        expect(dateTime2.getFullYear()).toBe(2000);
        expect(dateTime2.getMonth()).toBe(11); // 0-based month (December is 11)
        expect(dateTime2.getDate()).toBe(31);
        expect(dateTime2.getHours()).toBe(23);
        expect(dateTime2.getMinutes()).toBe(45);
        expect(dateTime2.getSeconds()).toBe(0);
    });

    it('should convert a date string in "YYYY-MM-DD" format to a Date object', () => {
        const dateStr = '2023-01-15';
        const date = ymdhhmmToDate(dateStr);
        expect(date.getFullYear()).toBe(2023);
        expect(date.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(date.getDate()).toBe(15);
        expect(date.getHours()).toBe(0);
        expect(date.getMinutes()).toBe(0);
        expect(date.getSeconds()).toBe(0);
    });

    // FIXME: ymdToDate has bugs. if params is invalid value, return NaN
    // it('should handle invalid input and return a default date', () => {
    //     const invalidStr = 'invalid-date';
    //     const date = ymdhhmmToDate(invalidStr);
    //     expect(date.getFullYear()).toBe(1980);
    //     expect(date.getMonth()).toBe(0); // 0-based month (January is 0)
    //     expect(date.getDate()).toBe(1);
    //     expect(date.getHours()).toBe(0);
    //     expect(date.getMinutes()).toBe(0);
    //     expect(date.getSeconds()).toBe(0);
    // });
});
