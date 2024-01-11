import hhmm2slotNoByDuration from '../src/hhmm2slotNoByDuration';

describe('hhmm2slotNoByDuration function', () => {
    it('should convert time string to slot number for given duration', () => {
        expect(hhmm2slotNoByDuration('09:00', 30)).toBe(18); // 18 represents 9:00 AM for 30-minute slots
        expect(hhmm2slotNoByDuration('10:30', 30)).toBe(21); // 21 represents 10:30 AM for 30-minute slots
        expect(hhmm2slotNoByDuration('12:00', 60)).toBe(12); // 12 represents 12:00 PM for 60-minute slots
        expect(hhmm2slotNoByDuration('23:45', 15)).toBe(95); // 95 represents 11:45 PM for 15-minute slots
    });

    it('should return -1 for null input', () => {
        expect(hhmm2slotNoByDuration(null, 30)).toBe(-1);
    });

    it('should return -1 for empty string input', () => {
        expect(hhmm2slotNoByDuration('', 30)).toBe(-1);
    });
});