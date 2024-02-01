import isDate from "../old/src_old/isDate";

describe('isDate', () => {
    test('Identifies a Date object correctly', () => {
        expect(isDate(new Date())).toBe(true); // Check if a Date object returns true
    });

    test('Identifies non-Date objects correctly', () => {
        expect(isDate(123)).toBe(false); // Check if a number returns false
        expect(isDate("2023-01-01")).toBe(false); // Check if a string returns false
        expect(isDate({ day: 1, month: 1, year: 2023 })).toBe(false); // Check if an object returns false
        expect(isDate(null)).toBe(false); // Check if null returns false
        expect(isDate(undefined)).toBe(false); // Check if undefined returns false
    });

    test('Handles invalid inputs gracefully', () => {
        expect(isDate()).toBe(false); // Check if no input returns false
    });
});
