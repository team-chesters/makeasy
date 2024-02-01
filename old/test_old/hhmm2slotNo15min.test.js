import hhmm2slotNo15min from '../old/src_old/hhmm2slotNo15min';

describe('hhmm2slotNo15min function', () => {
    it('should convert time string to slot number for 15-minute intervals', () => {
        expect(hhmm2slotNo15min('09:00')).toBe(36); // 36 represents 9:00 AM (9*4 = 36)
        expect(hhmm2slotNo15min('10:15')).toBe(41); // 41 represents 10:15 AM (10*4 + 1 = 41)
        expect(hhmm2slotNo15min('12:30')).toBe(50); // 50 represents 12:30 PM (12*4 + 2 = 50)
        expect(hhmm2slotNo15min('23:45')).toBe(95); // 95 represents 11:45 PM (23*4 + 3 = 95)
    });

    it('should handle time for time without colon', () => {
        expect(hhmm2slotNo15min('1230')).toBe(50);
    });

    it('should return -1 for null input', () => {
        expect(hhmm2slotNo15min(null)).toBe(-1);
    });

    it('should return -1 for empty string input', () => {
        expect(hhmm2slotNo15min('')).toBe(-1);
    });
});
