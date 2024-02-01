import GetEndOfWeek from "../old/src_old/GetEndOfWeek";

test('Returns the end of the week for a given date', () => {
    const someDate = new Date('2023-01-01'); // For instance, a specific date

    const result = GetEndOfWeek(someDate);

    // Check if the result is an instance of Date
    expect(result instanceof Date).toBe(true);
});
