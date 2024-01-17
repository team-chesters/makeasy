import hasKeyNumberPositive from '../src/hasKeyNumberPositive';

describe('hasKeyNumberPositive function', () => {
    it('should return false if key exists and its value is a positive number, but level is not defined', () => {
        expect(hasKeyNumberPositive({ count: 5 })).toBe(false);
    });

    it('should return false if key exists but its value is zero', () => {
        expect(hasKeyNumberPositive({ count: 0 })).toBe(false);
    });

    it('should return false if key exists but its value is negative', () => {
        expect(hasKeyNumberPositive({ count: -5 })).toBe(false);
    });

    it('should return false if key exists but its value is not a number', () => {
        expect(hasKeyNumberPositive({ count: '5' })).toBe(false);
    });

    it('should return false if key does not exist in the object', () => {
        expect(hasKeyNumberPositive({ name: 'John', age: 30 }, 'address')).toBe(false);
    });

    it('should return true if nested key exists and its value is a positive number', () => {
        expect(hasKeyNumberPositive({ person: { age: 30 } }, 'person', 'age')).toBe(true);
    });

    it('should return false if nested key exists but its value is zero', () => {
        expect(hasKeyNumberPositive({ person: { age: 0 } }, 'person', 'age')).toBe(false);
    });

    it('should return false if nested key exists but its value is negative', () => {
        expect(hasKeyNumberPositive({ person: { age: -30 } }, 'person', 'age')).toBe(false);
    });


    it('should return false if nested key exists but its value is not a number', () => {
        expect(hasKeyNumberPositive({ person: { age: '30' } }, 'person', 'age')).toBe(false);
    });

    it('should return false if object is null', () => {
        expect(hasKeyNumberPositive(null, 'age')).toBe(false);
    });

    it('should return false if object is undefined', () => {
        expect(hasKeyNumberPositive(undefined, 'age')).toBe(false);
    });

    it('should return false if object is empty', () => {
        expect(hasKeyNumberPositive({}, 'age')).toBe(false);
    });

    it('should return false if nested key does not exist', () => {
        expect(hasKeyNumberPositive({ person: { age: 30 } }, 'person', 'address')).toBe(false);
    });
});
