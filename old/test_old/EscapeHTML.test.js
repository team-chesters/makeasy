import EscapeHTML from '../old/src_old/EscapeHTML';

describe('EscapeHTML', () => {
    test('Escapes special characters in HTML', () => {
        const stringWithHTML = '<div>Hello, world!</div>';
        const escapedString = EscapeHTML(stringWithHTML);
        const expectedOutput = '&lt;div&gt;Hello, world!&lt;/div&gt;';
        expect(escapedString).toBe(expectedOutput);
    });

    test('Handles empty string', () => {
        const emptyString = '';
        expect(EscapeHTML(emptyString)).toBe('');
    });

    test('Handles string without special characters', () => {
        const stringWithoutSpecialChars = 'Hello, world!';
        expect(EscapeHTML(stringWithoutSpecialChars)).toBe('Hello, world!');
    });

    test('Handles string with mixed special characters and text', () => {
        const stringWithSpecialChars = 'Hello, & world < "quotes"';
        const expectedOutput = 'Hello, &amp; world &lt; &quot;quotes&quot;';
        expect(EscapeHTML(stringWithSpecialChars)).toBe(expectedOutput);
    });
});
