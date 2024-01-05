import GetDayStart from "../src/GetDayStart";

test('Returns the start of a given day', () => {
    const someDate = new Date('2023-01-01'); // For instance, a specific date

    const result = GetDayStart(someDate);

    // Check if the result is an instance of Date
    expect(result instanceof Date).toBe(true);
});
