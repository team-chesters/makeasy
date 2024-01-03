import Cut from '../src/Cut';

const null_value = null;
const empty_value = '';
const short_value = 'Lorem';
const string_value = 'Lorem ipsum dolor sit amet';

test('Test function "hasKey"', () => {
    expect(Cut(empty_value, 3)).toEqual(empty_value);
    expect(Cut(null_value, 8)).toBe(undefined);
    expect(Cut(short_value, 8)).toBe(short_value);
    expect(Cut(string_value, 8)).toBe('Lorem ip');
});