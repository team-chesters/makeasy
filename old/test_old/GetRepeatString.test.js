import GetRepeatString from "../old/src_old/GetRepeatString"; 

describe('GetRepeatString function', () => {
    test('Repeat the string without a separator', () => {
        const result = GetRepeatString('hello', 3);

        expect(result).toBe('hellohellohello');
    });

    test('Repeat the string with a separator', () => {
        const result = GetRepeatString('world', 5, '-');

        expect(result).toBe('world-world-world-world-world');
    });

    test('Repeat the string with an empty separator', () => {
        const result = GetRepeatString('test', 4, '');

        expect(result).toBe('testtesttesttest');
    });

    test('Repeat an empty string', () => {
        const result = GetRepeatString('', 2, '*');

        expect(result).toBe('*');
    });

    test('Repeat zero times', () => {
        const result = GetRepeatString('hello', 0, ',');

        expect(result).toBe('');
    });
});
