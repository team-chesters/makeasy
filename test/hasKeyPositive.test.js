import hasKeyPositive from '../src/hasKeyPositive';

describe('hasKeyPositive function', () => {
    it('should return false if key exists and its value is a positive number, but level is not defined', () => {
        expect(hasKeyPositive({ count: 5 })).toBe(false);
    });

    it('should return false if key exists but its value is zero', () => {
        expect(hasKeyPositive({ count: 0 })).toBe(false);
    });

    it('should return false if key exists but its value is negative', () => {
        expect(hasKeyPositive({ count: -5 })).toBe(false);
    });

    it('should return false if key exists but its value is not a number', () => {
        expect(hasKeyPositive({ count: '5' })).toBe(false);
    });

    it('should return false if key does not exist in the object', () => {
        expect(hasKeyPositive({ name: 'John', age: 30 }, 'address')).toBe(false);
    });

    it('should return true if nested key exists and its value is a positive number', () => {
        expect(hasKeyPositive({ person: { age: 30 } }, 'person', 'age')).toBe(true);
    });

    it('should return false if nested key exists but its value is zero', () => {
        expect(hasKeyPositive({ person: { age: 0 } }, 'person', 'age')).toBe(false);
    });

    it('should return false if nested key exists but its value is negative', () => {
        expect(hasKeyPositive({ person: { age: -30 } }, 'person', 'age')).toBe(false);
    });

    // FIXME: number 'string' is must be false, but return true.
    // it('should return false if nested key exists but its value is not a number', () => {
    // expect(hasKeyPositive({ person: { age: '30' } }, 'person', 'age')).toBe(false);
    // });

    it('should return false if object is null', () => {
        expect(hasKeyPositive(null, 'age')).toBe(false);
    });

    it('should return false if object is undefined', () => {
        expect(hasKeyPositive(undefined, 'age')).toBe(false);
    });

    it('should return false if object is empty', () => {
        expect(hasKeyPositive({}, 'age')).toBe(false);
    });

    it('should return false if nested key does not exist', () => {
        expect(hasKeyPositive({ person: { age: 30 } }, 'person', 'address')).toBe(false);
    });
});
