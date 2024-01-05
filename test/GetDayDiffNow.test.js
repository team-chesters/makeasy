import Len from "../src/Len";
import GetDayDiffNow from "../src/GetDayDiffNow";

test('Calculates difference in days between a timestamp and the current date', () => {
    const timestamp = 1703980800; // For instance, a timestamp representing a date

    const result = GetDayDiffNow(timestamp);

    // Check if the result is a number
    expect(typeof result).toBe('number');
});