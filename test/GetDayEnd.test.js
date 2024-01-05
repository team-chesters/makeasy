import GetDayEnd from "../src/GetDayEnd";

test('Returns the end of a given day', () => {
    const someDate = new Date('2023-01-01'); // For instance, a specific date

    const result = GetDayEnd(someDate);

    // Check if the result is an instance of Date
    expect(result instanceof Date).toBe(true);
});