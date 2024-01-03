import DateIntToId from '../src/DateIntToId';

const DateStringNotIncludeDash = '20221231';
const DateStringIncludeDash = '2022-12-31';
const emptyInput = '';
const undefinedInput = undefined;
const nullInput = null;

describe('DateIntToId', () => {
    test('Converts valid date integer to formatted date string', () => {
        expect(DateIntToId(DateStringNotIncludeDash)).toBe('2022-12-31');
    });

    test('Handles invalid date integer format', () => {
        expect(DateIntToId(DateStringIncludeDash)).toBe('2022-12-31');
    });

    test('Handles empty input', () => {
        expect(DateIntToId(emptyInput)).toBe('0000-00-00');
    });

    test('Handles undefined input', () => {
        expect(DateIntToId(undefinedInput)).toBe('0000-00-00');
    });

    test('Handles null input', () => {
        expect(DateIntToId(nullInput)).toBe('0000-00-00');
    });
});