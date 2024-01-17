import hhmm2min from "../src/hhmm2min";

describe('hhmm2min function', () => {
    test("Valid input '12:34'", () => {
        expect(hhmm2min("12:34")).toBe(754);
    });

    test("Valid input '1234'", () => {
        expect(hhmm2min("1234")).toBe(754);
    });

    it('should return 0 for null input', () => {
        expect(hhmm2min(null)).toBe(0);
    });

    it('should return 0 for undefined input', () => {
        expect(hhmm2min(undefined)).toBe(0);
    });

    it('should return 0 for empty string input', () => {
        expect(hhmm2min('')).toBe(0);
    });

    it('should return 0 string with different separators', () => {
        expect(hhmm2min('12-30')).toBe(0);
    });

    it('should return 0 with only hours', () => {
        expect(hhmm2min('12')).toBe(0);
    });
});
