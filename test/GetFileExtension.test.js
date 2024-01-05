import GetFileExtension from "../src/GetFileExtension";

test('Returns the file extension from a file name', () => {
    const fileName1 = 'example.txt';
    const fileName2 = 'document.pdf';
    const fileName3 = 'script.js';

    const result1 = GetFileExtension(fileName1);
    const result2 = GetFileExtension(fileName2);
    const result3 = GetFileExtension(fileName3);

    // Check if the results are strings
    expect(typeof result1).toBe('string');
    expect(typeof result2).toBe('string');
    expect(typeof result3).toBe('string');

    // Check the extracted file extensions
    expect(result1).toBe('txt');
    expect(result2).toBe('pdf');
    expect(result3).toBe('js');
});
