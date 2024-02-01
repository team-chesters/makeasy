import hhmm2slotNo30min from '../old/src_old/hhmm2slotNo30min';

describe('hhmm2slotNo30min function', () => {
    it('should convert time string to slot number for 30-minute intervals', () => {
        expect(hhmm2slotNo30min('09:00')).toBe(18); // 18 represents 9:00 AM (9*2 = 18)
        expect(hhmm2slotNo30min('10:30')).toBe(21); // 21 represents 10:30 AM (10*2 + 1 = 21)
        expect(hhmm2slotNo30min('12:00')).toBe(24); // 24 represents 12:00 PM (12*2 = 24)
        expect(hhmm2slotNo30min('23:45')).toBe(47); // 47 represents 11:30 PM (23*2 + 1 = 47)
    });

    it('should return -1 for null input', () => {
        expect(hhmm2slotNo30min(null)).toBe(-1);
    });

    it('should return -1 for empty string input', () => {
        expect(hhmm2slotNo30min('')).toBe(-1);
    });
});
