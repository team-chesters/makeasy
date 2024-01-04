import GenRand from "../src/GenerateRandomBytes";

test('Generates a random string', () => {
    const randomString = GenRand();
    expect(randomString.length).toBe(20); // Check if default length is 20
    // You might add a test to check for random pattern or characters, 
    // but testing truly random output might not be practical or reliable.
});
