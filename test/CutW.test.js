import CutW from '../src/CutW';

const null_value = null;
const empty_value = '';
const short_value = 'Lorem';
const string_value = 'Lorem ipsum dolor sit amet';

test('Test function "Cut"', () => {
    expect(CutW(null_value, 8)).toBe(empty_value);
    expect(CutW(empty_value, 3)).toEqual(empty_value);
    expect(CutW(short_value, 8)).toBe(short_value);
    expect(CutW(string_value, 8)).toBe('Lorem ip...');
});