import hasKeyButNotIn from '../src/hasKeyButNotIn';

describe('hasKeyButNotIn function', () => {
    it('should return false if object is null', () => {
        expect(hasKeyButNotIn(null, 'key')).toBe(false);
    });

    it('should return false if object is undefined', () => {
        expect(hasKeyButNotIn(undefined, 'key')).toBe(false);
    });

    it('should return false if object does not have the specified key', () => {
        const obj = { a: 1, b: 2 };
        expect(hasKeyButNotIn(obj, 'c')).toBe(false);
    });

    it('should return false if the specified key exists but has a null value', () => {
        const obj = { a: null, b: 2 };
        expect(hasKeyButNotIn(obj, 'a')).toBe(false);
    });

    it('should return true if the specified key exists and is not in the rest of the arguments', () => {
        const obj = { a: 1, b: 2 };
        expect(hasKeyButNotIn(obj, 'a', 2, 3)).toBe(true);
    });

    it('should return false if the specified key exists and is in the rest of the arguments', () => {
        const obj = { a: 1, b: 2 };
        expect(hasKeyButNotIn(obj, 'a', 1, 3)).toBe(false);
    });

    it('should return true if there are no rest arguments but the specified key exists', () => {
        const obj = { a: 1, b: 2 };
        expect(hasKeyButNotIn(obj, 'a')).toBe(true);
    });
});
