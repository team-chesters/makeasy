import { format } from 'date-fns';
import GetEndOfWeek from '../src/GetEndOfWeek';
import GetTomorrow from '../src/GetTomorrow';

/**
 * Returns the date range object for the next week based on the provided date or the current date.
 * @param {Date} t_date - The reference date. Defaults to the current date if not provided.
 * @returns {Object} The date range object representing the start and end dates of the next week.
 */

export default function GetNextWeek(yyyymmdd) {
    let saturday = GetEndOfWeek(yyyymmdd);
    let next_sun = GetTomorrow(saturday);
    let next_sat = GetEndOfWeek(format(next_sun, 'yyyyMMdd'));

    next_sun.setHours(0, 0, 0, 0);
    next_sat.setHours(23, 59, 59, 0);

    return {
        start: new Date(next_sun),
        end: new Date(next_sat),
    };
};
