import GetTomorrow from "../old/src_old/GetTomorrow";

describe('GetTomorrow function', () => {
    test('Return date object representing tomorrow', () => {
        const mockDate = new Date('2023-09-15');
        const tomorrow = GetTomorrow(mockDate);

        expect(tomorrow.getFullYear()).toBe(2023);
        expect(tomorrow.getMonth()).toBe(8); // Months are zero-indexed (0: January, 1: February, ...)
        expect(tomorrow.getDate()).toBe(16); // Tomorrow's date
    });
});
