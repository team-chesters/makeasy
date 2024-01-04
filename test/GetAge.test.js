import GetAge from "../src/GetAge";

describe('GetAge', () => {
    test('Calculates age correctly for YYYYMMDD format', () => {
        expect(GetAge(19901125)).toBe(33); // For instance, birthdate: November 25, 1990
        expect(GetAge(20051231)).toBe(18); // For instance, birthdate: December 31, 2005
    });

    test('Returns 0 for invalid or null input', () => {
        expect(GetAge(null)).toBe(0);
        expect(GetAge(undefined)).toBe(0);
        expect(GetAge(123)).toBe(0);
        expect(GetAge("invalid")).toBe(0);
    });
});
