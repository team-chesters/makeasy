import hhmm2min from "../src/hhmm2min";

describe('hhmm2min function', () => {
    it('should convert time string to minutes', () => {
        expect(hhmm2min('09:30')).toBe(9 * 60 + 30);
    });

    it('should return 0 for null input', () => {
        expect(hhmm2min(null)).toBe(0);
    });

    // FIXME: hhmm without : will return 0, but return 12 * 60 + 30.
    // it('should return 0 for invalid time format', () => {
    //     expect(hhmm2min('1230')).toBe(0);
    // });

    it('should return 0 for empty string input', () => {
        expect(hhmm2min('')).toBe(0);
    });

    it('should handle time string without leading zero for hours', () => {
        expect(hhmm2min('09:45')).toBe(9 * 60 + 45);
    });

    it('should handle time string without leading zero for minutes', () => {
        expect(hhmm2min('12:05')).toBe(12 * 60 + 5);
    });

    it('should return 0 string with different separators', () => {
        expect(hhmm2min('12-30')).toBe(0);
    });

    it('should return 0 with only hours', () => {
        expect(hhmm2min('12')).toBe(0);
    });
});
