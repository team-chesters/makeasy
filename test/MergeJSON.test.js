import MergeJson from '../src/MergeJson';

describe('MergeJson function', () => {
    it('should merge two JSON objects', () => {
        const obj1 = { name: 'John', age: 30 };
        const obj2 = { city: 'New York', country: 'USA' };

        const merged = MergeJson(obj1, obj2);

        expect(merged).toEqual({ name: 'John', age: 30, city: 'New York', country: 'USA' });
    });

    it('should not modify the original objects', () => {
        const obj1 = { name: 'John', age: 30 };
        const obj2 = { city: 'New York', country: 'USA' };

        MergeJson(obj1, obj2);

        expect(obj1).toEqual({ name: 'John', age: 30 });
        expect(obj2).toEqual({ city: 'New York', country: 'USA' });
    });

    it('should handle empty objects', () => {
        const obj1 = {};
        const obj2 = {};

        const merged = MergeJson(obj1, obj2);

        expect(merged).toEqual({});
    });

    it('should handle objects with overlapping keys', () => {
        const obj1 = { name: 'John', age: 30 };
        const obj2 = { age: 35, city: 'New York' };

        const merged = MergeJson(obj1, obj2);

        expect(merged).toEqual({ name: 'John', age: 35, city: 'New York' });
    });
});
