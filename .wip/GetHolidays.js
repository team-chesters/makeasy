import { _HOLIDAYS } from "../src/const.js";
import ymdToDate from "../src/ymdToDate.js";

/**
 * Returns an array of holidays.
 * 
 * @param {Array} holidays_array - An array containing holidays.
 * @returns {Array} Returns an array of holidays.
 */

export default function GetHolidays(holidays_array) {
    if (Array.isArray(holidays_array) && holidays_array.length > 0) return holidays_array;
    holidays_array = [];

    for (const [key, value] of Object.entries(_HOLIDAYS)) {
        holidays_array.push(ymdToDate(key));
    }

    return holidays_array;
};
