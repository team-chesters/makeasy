import GetLastSunday from "../src/GetLastSunday";

/**
 * Gets the start and end of the week based on the provided date.
 * @param {Date} date - The date for which to find the week range.
 * @returns {Object} Object containing start and end dates for the week.
 */

export default function GetWeekRange(date) {
    let sunday = GetLastSunday(date);

    let satday = new Date(sunday);
    satday.setDate(sunday.getDate() + 6);
    satday.setHours(23, 59, 59, 0);

    return {
        start: sunday,
        end: satday,
    };
};
