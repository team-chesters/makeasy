import FormatBytes from "../old/src_old/FormatBytes";

describe('FormatBytes', () => {
    test('Formats bytes to KB', () => {
        expect(FormatBytes(1024)).toBe('1 KB');
    });

    test('Formats bytes to MB', () => {
        expect(FormatBytes(1048576)).toBe('1 MB');
    });

    test('Formats bytes to GB', () => {
        expect(FormatBytes(1073741824)).toBe('1 GB');
    });

    test('Handles zero bytes', () => {
        expect(FormatBytes(0)).toBe('0 Bytes');
    });

    test('Handles negative bytes', () => {
        expect(FormatBytes(-1000)).toBe('Invalid Bytes');
    });

    test('Handles less than 1 KB', () => {
        expect(FormatBytes(500)).toBe('500 Bytes');
    });
});
