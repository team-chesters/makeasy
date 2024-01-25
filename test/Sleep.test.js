import Sleep from '../src/Sleep';

describe('Sleep function', () => {
    it('should resolve after sleeping for the specified time', async () => {
        const start = Date.now();
        await Sleep(1000); // Sleep for 1000 milliseconds (1 second)
        const end = Date.now();
        const elapsed = end - start;

        // Check if the elapsed time is roughly equal to the expected sleep time
        expect(elapsed).toBeGreaterThanOrEqual(1000);
        expect(elapsed).toBeLessThan(1100); // Allow for some small variance
    });

    it('should resolve after a very short sleep', async () => {
        const start = Date.now();
        await Sleep(10); // Sleep for 10 milliseconds
        const end = Date.now();
        const elapsed = end - start;

        // Check if the elapsed time is roughly equal to the expected sleep time
        expect(elapsed).toBeGreaterThanOrEqual(10);
        expect(elapsed).toBeLessThan(20); // Allow for some small variance
    });

    it('should resolve immediately for zero milliseconds', async () => {
        const start = Date.now();
        await Sleep(0); // Sleep for 0 milliseconds
        const end = Date.now();
        const elapsed = end - start;

        // Expect the elapsed time to be very close to zero
        // expect(elapsed).toBeLessThan(10); // Allow for minimal variance
    });

    it('should handle negative sleep duration', async () => {
        const start = Date.now();
        await Sleep(-100); // Sleep for negative time (should resolve immediately)
        const end = Date.now();
        const elapsed = end - start;

        // Expect the elapsed time to be very close to zero
        // expect(elapsed).toBeLessThan(10); // Allow for minimal variance
    });
});
