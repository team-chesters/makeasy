import hasKeyIn from '../src/hasKeyIn';

describe('hasKeyIn function', () => {
    it('should return true if key exists in the object', () => {
        expect(hasKeyIn({ name: 'John', age: 30 }, 'name')).toBe(true);
    });

    it('should return true if key exists and its value matches any provided value', () => {
        expect(hasKeyIn({ name: 'John', age: 30 }, 'age', 30)).toBe(true);
    });

    it('should return false if key does not exist in the object', () => {
        expect(hasKeyIn({ name: 'John', age: 30 }, 'address')).toBe(false);
    });

    it('should return false if key exists but its value does not match any provided value', () => {
        expect(hasKeyIn({ name: 'John', age: 30 }, 'age', 25)).toBe(false);
    });

    it('should return false if object is null', () => {
        expect(hasKeyIn(null, 'age')).toBe(false);
    });

    it('should return false if object is undefined', () => {
        expect(hasKeyIn(undefined, 'age')).toBe(false);
    });

    it('should return false if object is empty', () => {
        expect(hasKeyIn({}, 'age')).toBe(false);
    });

    it('should return true if value is provided to match', () => {
        expect(hasKeyIn({ name: 'John', age: 30 }, 'age', 30)).toBe(true);
    });

    it('should return false if provided value does not match key value', () => {
        expect(hasKeyIn({ name: 'John', age: 30 }, 'age', 25)).toBe(false);
    });
});
