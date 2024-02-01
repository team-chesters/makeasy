import SplitTagString from '../old/src_old/SplitTagString';

describe('SplitTagString function', () => {
    it('should split a tag string into an array of tag strings', () => {
        const tagStr1 = '#programming #javascript #coding';
        expect(SplitTagString(tagStr1)).toEqual(['programming', 'javascript', 'coding']);

        const tagStr2 = ' # web development  # front-end  # design   ';
        expect(SplitTagString(tagStr2)).toEqual(['web development', 'front-end', 'design']);

        const tagStr3 = '#tag1';
        expect(SplitTagString(tagStr3)).toEqual(['tag1']);

        const tagStr4 = '';
        expect(SplitTagString(tagStr4)).toEqual([]);
    });

    it('should handle leading and trailing spaces', () => {
        const tagStr = '  #tag1  #tag2  #tag3  ';
        expect(SplitTagString(tagStr)).toEqual(['tag1', 'tag2', 'tag3']);
    });

    it('should handle empty input', () => {
        const tagStr = '';
        expect(SplitTagString(tagStr)).toEqual([]);

        const tagStrWithSpaces = '   ';
        expect(SplitTagString(tagStrWithSpaces)).toEqual([]);
    });

    it('should handle input with no tags', () => {
        const tagStr = 'This is a sample text with no tags';
        expect(SplitTagString(tagStr)).toEqual([]);
    });
});
