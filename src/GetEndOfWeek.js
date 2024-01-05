import isEmpty from "./isEmpty";

/**
 * Returns the end of the week for a given date.
 * 
 * @param {Date} d - The date for which the end of the week is required.
 * @returns {Date} Returns the end of the week for the specified date.
 */

export default function GetEndOfWeek(d) {
    if (isEmpty(d)) return 'parameter is empty';

    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() + (6 - day);
    let t = new Date(d.setDate(diff));
    t.setHours(23, 59, 59, 0);
    return t;
};
