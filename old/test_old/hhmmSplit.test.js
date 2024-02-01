import hhmmSplit from '../old/src_old/hhmmSplit';

describe('hhmmSplit function', () => {
    it('should split time string into hours and minutes', () => {
        expect(hhmmSplit('09:00')).toEqual({ hh: 9, mm: 0 });
        expect(hhmmSplit('10:30')).toEqual({ hh: 10, mm: 30 });
        expect(hhmmSplit('23:45')).toEqual({ hh: 23, mm: 45 });
    });

    it('should return 0 for null input', () => {
        expect(hhmmSplit(null)).toBe(0);
    });
});
