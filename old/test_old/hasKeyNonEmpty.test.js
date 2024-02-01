import hasKeyNonEmpty from '../old/src_old/hasKeyNonEmpty';

describe('hasKeyNonEmpty function', () => {
    it('should return true if key exists and its value is not empty', () => {
        expect(hasKeyNonEmpty({ name: 'John', age: 30 }, 'name')).toBe(true);
    });

    it('should return false if key exists but its value is empty', () => {
        expect(hasKeyNonEmpty({ name: '', age: 30 }, 'name')).toBe(false);
    });

    it('should return false if key does not exist in the object', () => {
        expect(hasKeyNonEmpty({ name: 'John', age: 30 }, 'address')).toBe(false);
    });

    it('should return true if nested key exists and its value is not empty', () => {
        expect(hasKeyNonEmpty({ person: { name: 'John', age: 30 } }, 'person', 'name')).toBe(true);
    });

    it('should return false if nested key exists but its value is empty', () => {
        expect(hasKeyNonEmpty({ person: { name: '', age: 30 } }, 'person', 'name')).toBe(false);
    });

    it('should return false if object is null', () => {
        expect(hasKeyNonEmpty(null, 'age')).toBe(false);
    });

    it('should return false if object is undefined', () => {
        expect(hasKeyNonEmpty(undefined, 'age')).toBe(false);
    });

    it('should return false if object is empty', () => {
        expect(hasKeyNonEmpty({}, 'age')).toBe(false);
    });

    it('should return false if nested key does not exist', () => {
        expect(hasKeyNonEmpty({ person: { name: 'John', age: 30 } }, 'person', 'address')).toBe(false);
    });

    it('should return false if nested key exists but its value is empty', () => {
        expect(hasKeyNonEmpty({ person: { name: 'John', address: '' } }, 'person', 'address')).toBe(false);
    });
});
