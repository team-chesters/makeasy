import GetDateFromMs from "../src/GetDateFromMs";

describe("GetDateFromMs function", () => {
  it("should return a Date object when a valid timestamp in milliseconds is provided", () => {
    const timestamp = 1642588800000; // February 19, 2022, 00:00:00 UTC in milliseconds
    const result = GetDateFromMs(timestamp);
    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(2022);
    expect(result.getMonth()).toBe(0); // Months are 0-based
    expect(result.getDate()).toBe(19);
  });

  it("should return false when an empty timestamp is provided", () => {
    const timestamp = "";
    const result = GetDateFromMs(timestamp);
    expect(result).toBe(false);
  });

  it("should return false when an invalid timestamp is provided", () => {
    const timestamp = "invalid_timestamp";
    const result = GetDateFromMs(timestamp);
    expect(result).toBe(false);
  });
});
