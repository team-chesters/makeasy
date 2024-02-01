import GetDateInt from "../old/src_old/GetDateInt";

describe('GetDateInt', () => {
    test('Converts Date object to integer correctly', () => {
        const date = new Date(2023, 0, 1); // January 1, 2023
        expect(GetDateInt(date)).toBe(20230101); // Check if Date object is converted to 'yyyyMMdd' format
    });

    test('Returns -1 for non-Date objects', () => {
        expect(GetDateInt(123)).toBe(-1); // Check if a number returns -1
        expect(GetDateInt("2023-01-01")).toBe(-1); // Check if a string returns -1
        expect(GetDateInt({ day: 1, month: 1, year: 2023 })).toBe(-1); // Check if an object returns -1
        expect(GetDateInt(null)).toBe(-1); // Check if null returns -1
        expect(GetDateInt(undefined)).toBe(-1); // Check if undefined returns -1
    });

    test('Handles invalid inputs gracefully', () => {
        expect(GetDateInt()).toBe(-1); // Check if no input returns -1
    });
});
