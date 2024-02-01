import ymdSlotNoToDate from '../old/src_old/ymdSlotNoToDate';

describe('ymdSlotNoToDate function', () => {
    it('should convert a date and slot number to a Date object', () => {
        const dateStr1 = '2023-01-15';
        const slotNo1 = 8;
        const dateTime1 = ymdSlotNoToDate(dateStr1, slotNo1);
        expect(dateTime1.getFullYear()).toBe(2023);
        expect(dateTime1.getMonth()).toBe(0); // 0-based month (January is 0)
        expect(dateTime1.getDate()).toBe(15);
        expect(dateTime1.getHours()).toBe(4); // Slot 8 corresponds to 04:00
        expect(dateTime1.getMinutes()).toBe(0);
        expect(dateTime1.getSeconds()).toBe(0);

        const dateStr2 = '2000-12-31';
        const slotNo2 = 16;
        const dateTime2 = ymdSlotNoToDate(dateStr2, slotNo2);
        expect(dateTime2.getFullYear()).toBe(2000);
        expect(dateTime2.getMonth()).toBe(11); // 0-based month (December is 11)
        expect(dateTime2.getDate()).toBe(31);
        expect(dateTime2.getHours()).toBe(8); // Slot 16 corresponds to 08:00
        expect(dateTime2.getMinutes()).toBe(0);
        expect(dateTime2.getSeconds()).toBe(0);
    });

    // FIXME: if param is invalid, return NaN, Not 0
    // it('should handle invalid input and return a default date', () => {
    //     const invalidDateStr = 'invalid-date';
    //     const slotNo = 'invalid-slot';
    //     const date = ymdSlotNoToDate(invalidDateStr, slotNo);
    //     expect(date.getFullYear()).toBe(1980);
    //     expect(date.getMonth()).toBe(0); // 0-based month (January is 0)
    //     expect(date.getDate()).toBe(1);
    //     expect(date.getHours()).toBe(0);
    //     expect(date.getMinutes()).toBe(0);
    //     expect(date.getSeconds()).toBe(0);
    // });
});
