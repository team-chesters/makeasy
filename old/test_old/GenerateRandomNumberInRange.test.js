import GenerateRandomNumberInRange from "../old/src_old/GenerateRandomNumberInRange";

describe('GenerateRandomNumberInRange', () => {
    test('Generates a random integer within the specified range', () => {
        const min = 1;
        const max = 10;
        const randomInt = GenerateRandomNumberInRange(min, max);

        expect(randomInt).toBeGreaterThanOrEqual(min); // Check if random integer is greater than or equal to min
        expect(randomInt).toBeLessThan(max); // Check if random integer is less than max
    });
});
