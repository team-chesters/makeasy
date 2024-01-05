import GetLastSunday from "../src/GetLastSunday";

test('Returns the date of the last Sunday before a given date', () => {
    const someDate = new Date('2023-01-15'); // For instance, a specific date

    const result = GetLastSunday(someDate);

    // Check if the result is an instance of Date
    expect(result instanceof Date).toBe(true);
});

