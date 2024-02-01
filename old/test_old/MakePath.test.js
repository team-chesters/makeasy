import MakePath from '../old/src_old/MakePath';

describe('MakePath function', () => {
    it('should construct a URL with default separator', () => {
        const url = MakePath(['https://example.com', 'folder', 'file.txt']);
        expect(url).toBe('https://example.com/folder/file.txt');
    });

    it('should construct a URL with custom separator', () => {
        const url = MakePath(['https://example.com', 'folder', 'file.txt'], '/');
        expect(url).toBe('https://example.com/folder/file.txt');
    });

    it('should handle leading and trailing separators', () => {
        const url1 = MakePath(['https://example.com/', 'folder', 'file.txt']);
        expect(url1).toBe('https://example.com/folder/file.txt');

        const url2 = MakePath(['https://example.com', 'folder/', 'file.txt']);
        expect(url2).toBe('https://example.com/folder/file.txt');

        const url3 = MakePath(['https://example.com/', 'folder/', 'file.txt']);
        expect(url3).toBe('https://example.com/folder/file.txt');
    });

    it('should return the base URL for an empty array', () => {
        const url = MakePath([]);
        expect(url).toBe('');
    });
});
