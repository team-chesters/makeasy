import isSameColor from '../old/src_old/isSameColor';

describe('isSameColor function', () => {
    it('should return true for two identical colors (case insensitive)', () => {
        const color1 = 'Red';
        const color2 = 'red';

        const result = isSameColor(color1, color2);

        expect(result).toBe(true);
    });

    it('should return true for two identical colors with different case', () => {
        const color1 = 'Blue';
        const color2 = 'Blue';

        const result = isSameColor(color1, color2);

        expect(result).toBe(true);
    });

    it('should return false for two different colors', () => {
        const color1 = 'Green';
        const color2 = 'Purple';

        const result = isSameColor(color1, color2);

        expect(result).toBe(false);
    });

    it('should return false if one of the colors is empty', () => {
        const color1 = 'Yellow';
        const color2 = '';

        const result = isSameColor(color1, color2);

        expect(result).toBe(false);
    });
});
