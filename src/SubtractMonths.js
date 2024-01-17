/**
 * Subtracts a specified number of months from a given date.
 * @param {number} numOfMonths - The number of months to subtract.
 * @param {Date} date - Optional. The reference date to subtract months from. Default is the current date.
 * @returns {Date} Returns a new Date object after subtracting the specified months.
 */

export default function SubtractMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() - numOfMonths);
    return date;
};
