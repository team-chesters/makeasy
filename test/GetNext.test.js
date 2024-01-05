import GetNext from "../src/GetNext";

describe('GetNext function', () => {
    const data = {
        info: {
            details: {
                id: 123,
                name: 'John Doe',
            },
            contact: {
                email: 'john@example.com',
            },
        },
    };

    test('Retrieve value at nested property keys', () => {
        // expect(GetNext(data, 'info', 'details', 'id')).toBe(123);
        expect(GetNext(data, 'info', 'details', 'name')).toBe('John Doe');
        expect(GetNext(data, 'info', 'contact', 'email')).toBe('john@example.com');
    });

    test('Return last key if rest keys are empty', () => {
        expect(GetNext(data, 'info')).toBe('info');
    });

    test('Return empty string if object or any key in the path is empty or undefined', () => {
        // expect(GetNext({}, 'info', 'details', 'id')).toBe('');
        expect(GetNext(data, 'info', 'details', 'address')).toBe('');
        expect(GetNext(data, 'info', 'contact', 'phone')).toBe('');
    });
});
