import GenerateRandomBytes from "../src/GenerateRandomBytes";

describe('GenerateRandomBytes function', () => {
    // test('should generate random bytes with default length', () => {
    //     const result = GenerateRandomBytes();
    //     expect(result.length).toBe(20);
    // });

    // test('should generate random bytes with specified length', () => {
    //     // FIXME: sometimes get random bytes in default length, 21.
    //     const result = GenerateRandomBytes(16);
    //     expect(result.length).toBe(16);
    // });
    test('should generate random bytes with default length', () => {
        const result = GenerateRandomBytes();
        expect(result.length).toBe(20); // Match the expected string length
    });

    test('should generate random bytes with specified length', () => {
        const result = GenerateRandomBytes(16);
        expect(result.length).toBe(16); // Match the specified length
    });
});
