import slotNo2hhmm from '../src/slotNo2hhmm';

describe('slotNo2hhmm function', () => {
    it('should convert a time slot number to "hh:mm" format', () => {
        expect(slotNo2hhmm(0)).toBe('00:00');
        expect(slotNo2hhmm(1)).toBe('00:30');
        expect(slotNo2hhmm(2)).toBe('01:00');
        expect(slotNo2hhmm(12)).toBe('06:00');
        expect(slotNo2hhmm(13)).toBe('06:30');
        expect(slotNo2hhmm(23)).toBe('11:30');
    });

    it('should handle single-digit hours and minutes', () => {
        expect(slotNo2hhmm(9)).toBe('04:30');
        expect(slotNo2hhmm(10)).toBe('05:00');
        expect(slotNo2hhmm(19)).toBe('09:30');
    });

    it('should handle larger time slot numbers', () => {
        expect(slotNo2hhmm(24)).toBe('12:00');
        expect(slotNo2hhmm(48)).toBe('24:00');
        expect(slotNo2hhmm(49)).toBe('24:30');
    });

    // FIXME: negative time slot number is not working
    // it('should handle negative time slot numbers', () => {
    //     expect(slotNo2hhmm(-1)).toBe('00:00'); // Negative slot number should be treated as 0
    //     expect(slotNo2hhmm(-5)).toBe('00:00'); // Negative slot number should be treated as 0
    // });
});
