import FilterJsonWithoutEmptyKey from "../src/FilterJsonWithoutEmptyKey";

describe('FilterJsonWithoutEmptyKey', () => {
    test('Filters JSON object with specified keys', () => {
        const jsonObject = {
            name: 'John Doe',
            age: 30,
            email: null,
            address: undefined,
        };
        const keysToKeep = ['name', 'age', 'email', 'address'];

        const filteredObject = FilterJsonWithoutEmptyKey(jsonObject, keysToKeep);
        expect(filteredObject).toEqual({ name: 'John Doe', age: 30 });
    });

    test('Handles empty keysOfInterest array', () => {
        const jsonObject = {
            name: 'John Doe',
            age: 30,
        };
        const emptyKeysToKeep = [];

        const filteredObject = FilterJsonWithoutEmptyKey(jsonObject, emptyKeysToKeep);
        expect(filteredObject).toEqual({});
    });

    test('Handles keysOfInterest not present in the object', () => {
        const jsonObject = {
            name: 'John Doe',
            age: 30,
        };
        const keysToKeep = ['email', 'address'];

        const filteredObject = FilterJsonWithoutEmptyKey(jsonObject, keysToKeep);
        expect(filteredObject).toEqual({});
    });
});
