import GetDatesBetween from "../src/GetDatesBetween";

test('Generates dates between the given range correctly', () => {
    const startDate = '2023-01-01';
    const endDate = '2023-01-05';

    const result = GetDatesBetween(startDate, endDate);

    // Check if the parameters are empty
    expect(GetDatesBetween()).toBe('All parameters are empty');
    expect(GetDatesBetween(startDate, null)).toBe('Some of range parameter are empty');
    expect(GetDatesBetween(null, endDate)).toBe('Some of range parameter are empty');

    // Check if the generated dates are instances of Date
    result.forEach(date => {
        expect(date instanceof Date).toBe(true);
    });
});