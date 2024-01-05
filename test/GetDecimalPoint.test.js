import GetDecimalPoint from "../src/GetDecimalPoint";

test('Returns the decimal point of a number rounded to one decimal place', () => {
    const wholeNumber = 5;
    const decimalNumber = 5.12345;

    const resultWhole = GetDecimalPoint(wholeNumber);
    const resultDecimal = GetDecimalPoint(decimalNumber);

    // Check if the result is a number
    expect(typeof resultWhole).toBe('number');
    expect(typeof resultDecimal).toBe('number');

    // Check the values after extracting decimal points
    expect(resultWhole).toBe(5); // For whole number input
    expect(resultDecimal).toBe(5.1); // For decimal number input rounded to one decimal place
});
