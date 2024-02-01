import hasKeyAll from '../old/src_old/hasKeyAll';

describe('hasKeyAll function', () => {
    it('should return true if all keys exist in the object', () => {
        const obj = { name: 'John', age: 30, city: 'New York' };
        expect(hasKeyAll(obj, 'name', 'age')).toBe(true);
    });

    it('should return false if any key is missing in the object', () => {
        const obj = { name: 'John', age: 30, city: 'New York' };
        expect(hasKeyAll(obj, 'name', 'gender')).toBe(false);
    });

    it('should return false for an empty object', () => {
        const obj = {};
        expect(hasKeyAll(obj, 'name', 'age')).toBe(false);
    });

    it('should return false if no keys are provided', () => {
        const obj = { name: 'John', age: 30, city: 'New York' };
        expect(hasKeyAll(obj)).toBe(false);
    });
});
