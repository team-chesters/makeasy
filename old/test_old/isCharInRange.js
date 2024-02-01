import { _CHAR_RANGE_MAP } from '../old/src_old/const';
import isCharInRange from '../old/src_old/isCharInRange';

describe('isCharInRange function', () => {
    const ASCII_RANGES = [{ start: 'A', end: 'Z' }];
    const UNICODE_RANGES = [{ start: 0x0041, end: 0x005A }]; // Unicode range for A-Z

    it('returns true for a character within ASCII range', () => {
        expect(isCharInRange('B', ASCII_RANGES)).toBe(true);
    });

    it('returns false for a character outside ASCII range', () => {
        expect(isCharInRange('a', ASCII_RANGES)).toBe(false);
    });

    it('returns true for a character within Unicode range', () => {
        expect(isCharInRange('A', UNICODE_RANGES, _CHAR_RANGE_MAP.UNICODE)).toBe(true);
    });

    it('returns false for a character outside Unicode range', () => {
        expect(isCharInRange('α', UNICODE_RANGES, _CHAR_RANGE_MAP.UNICODE)).toBe(false);
    });

    it('returns false if character or ranges are empty', () => {
        expect(isCharInRange('', ASCII_RANGES)).toBe(false);
        expect(isCharInRange('A', [])).toBe(false);
    });
});
