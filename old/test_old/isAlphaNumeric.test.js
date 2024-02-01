import isAlphaNumeric from '../old/src_old/isAlphaNumeric';

describe('isAlphaNumeric function', () => {
    it("returns true for alphanumeric strings", () => {
        expect(isAlphaNumeric("Hello123")).toBe(true);
        expect(isAlphaNumeric("Special@Char")).toBe(true);
    });

    it("returns false for empty string", () => {
        expect(isAlphaNumeric("")).toBe(false);
    });

    it("returns false for null or undefined", () => {
        expect(isAlphaNumeric(null)).toBe(false);
        expect(isAlphaNumeric(undefined)).toBe(false);
    });
});
