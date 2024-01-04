import GetDateRangeToNow from "../src/GetDateRangeToNow";

test('Generates date range correctly', () => {
    const beforeDays = 7; // Generating a date range for the last 7 days
    const [startDate, endDate] = GetDateRangeToNow(beforeDays);

    // Check if the parameter is empty
    expect(GetDateRangeToNow()).toBe('parameter is empty');

    // Check if the generated dates are instances of Date
    expect(startDate instanceof Date).toBe(true);
    expect(endDate instanceof Date).toBe(true);
});