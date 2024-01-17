import MergeTagString from '../src/MergeTagString';

describe('MergeTagString function', () => {
    it('should merge an array of tags into a space-separated string', () => {
        const tagList = ['programming', 'javascript', 'coding'];

        const mergedTags = MergeTagString(tagList);

        expect(mergedTags).toBe('#programming #javascript #coding');
    });

    it('should trim and merge tags with spaces', () => {
        const tagList = [' web development ', '  front-end ', '   design   '];

        const mergedTags = MergeTagString(tagList);

        expect(mergedTags).toBe('#web development #front-end #design');
    });

    it('should handle an empty array', () => {
        const tagList = [];

        const mergedTags = MergeTagString(tagList);

        expect(mergedTags).toBe('');
    });

    it('should handle tags with special characters', () => {
        const tagList = ['web development', 'front-end', 'design & UI'];

        const mergedTags = MergeTagString(tagList);

        expect(mergedTags).toBe('#web development #front-end #design & UI');
    });
});
