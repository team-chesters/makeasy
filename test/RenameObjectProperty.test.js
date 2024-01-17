import RenameObjectProperty from '../src/RenameObjectProperty';

describe('RenameObjectProperty function', () => {
    it('should rename a property of an object', () => {
        const obj = { name: 'John', age: 30 };
        RenameObjectProperty(obj, 'name', 'firstName');
        expect(obj.firstName).toBe('John');
        expect(obj.hasOwnProperty('name')).toBe(false);
    });

    it('should handle renaming to an existing property', () => {
        const obj = { name: 'John', age: 30 };
        RenameObjectProperty(obj, 'name', 'age');
        expect(obj.age).toBe('John');
        expect(obj.hasOwnProperty('name')).toBe(false);
    });

    it('should handle non-existing properties', () => {
        const obj = { name: 'John', age: 30 };
        RenameObjectProperty(obj, 'email', 'address');
        expect(obj.hasOwnProperty('email')).toBe(false);
        expect(obj.hasOwnProperty('address')).toBe(false);
    });

    it('should handle empty object', () => {
        const obj = {};
        RenameObjectProperty(obj, 'name', 'firstName');
        expect(obj.hasOwnProperty('name')).toBe(false);
        expect(obj.hasOwnProperty('firstName')).toBe(false);
    });
});
