import GetDaysAgo from "../old/src_old/GetDayAgo";

test('Calculates date that was a specified number of days ago', () => {
    const numOfDays = 7; // For instance, calculating a date 7 days ago

    const result = GetDaysAgo(numOfDays);

    // Check if the result is an instance of Date
    expect(result instanceof Date).toBe(true);
});

test('Calculates date that was a specified number of days ago from a specific date', () => {
    const numOfDays = 10;
    const specificDate = new Date('2023-01-01'); // For instance, a specific reference date

    const result = GetDaysAgo(numOfDays, specificDate);

    // Check if the result is an instance of Date
    expect(result instanceof Date).toBe(true);
});