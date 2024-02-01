import LenByte from '../old/src_old/LenByte';

describe('LenByte function', () => {
    it('should return the byte length of a string', () => {
        expect(LenByte('Hello')).toBe(5); // Single-byte characters
        expect(LenByte('안녕하세요')).toBe(10); // Multi-byte characters (UTF-8)
        expect(LenByte('12345')).toBe(5); // Single-byte characters (digits)
    });

    it('should return 0 for an empty string', () => {
        expect(LenByte('')).toBe(0);
    });

    it('should handle special characters correctly', () => {
        // Euro symbol (€) is a multi-byte character
        expect(LenByte('Price: €50')).toBe(11); // 8 single-byte characters + 3 multi-byte characters
    });

    it('should return 0 for non-string inputs', () => {
        expect(LenByte(42)).toBe(0); // Number input
        expect(LenByte(null)).toBe(0); // null input
        expect(LenByte(undefined)).toBe(0); // undefined input
        expect(LenByte({})).toBe(0); // Empty object input
    });
});
