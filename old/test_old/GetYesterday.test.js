import GetYesterday from "../old/src_old/GetYesterday";

describe('GetYesterday function', () => {
    it('should return yesterday\'s date from a given date', () => {
        const today = new Date('2024-01-10'); // Assuming today is '2024-01-10'
        const yesterday = new Date('2024-01-09');
        const result = GetYesterday(today);
        expect(result.toDateString()).toEqual(yesterday.toDateString());
    });

    it('should return yesterday\'s date from the current date if no date is provided', () => {
        const today = new Date(); // Current date
        const yesterday = new Date(today.getTime() - 86400000);
        const result = GetYesterday();
        expect(result.toDateString()).toEqual(yesterday.toDateString());
    });
});
