import { getTime } from 'date-fns';
import isEmpty from './isEmpty';
import isDate from './isDate';
import isNumber from './isNumber';

/**
 * Checks if a date is within the specified date range.
 * @param {Date|number} in_date - The date to check. It can be a Date object or a UNIX timestamp.
 * @param {Date} in_start - The start date of the range.
 * @param {Date} in_end - The end date of the range.
 * @returns {boolean} True if the input date is within the specified range, false otherwise.
 */

export default function isInDateRange (in_date, in_start, in_end) {
    let in_date_ts;
    
    if (isEmpty(in_date) || isEmpty(in_start) || isEmpty(in_end)) return false;

    if (isDate(in_date) && !isNumber(in_date)) {
        in_date_ts = in_date.getTime();
    }
    
    if (!isDate(in_date) && isNumber(in_date)) {
        in_date_ts = in_date;
    }

    return in_start.getTime() <= in_date_ts && in_date_ts <= in_end.getTime();
};