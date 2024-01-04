import GetDateRangeToNowStartEnd from "../src/GetDateRangeToNowStartEnd";

test('Generates start and end date range correctly', () => {
    const beforeDays = 7; // Generating a date range for the last 7 days
    const { start, end } = GetDateRangeToNowStartEnd(beforeDays);

    // Check if the parameter is empty
    expect(GetDateRangeToNowStartEnd()).toBe('parameter is empty');

    // Check if the generated dates are instances of Date
    expect(start instanceof Date).toBe(true);
    expect(end instanceof Date).toBe(true);
});
