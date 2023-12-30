import isEmpty from './isEmpty';
import isDate from './isDate';

export default function IsInDateRange (in_date, in_start, in_end) {
    if (isEmpty(in_date)) return false;

    let in_date_ts = in_date;
    if (isDate(in_date)) in_date_ts = in_date.getUnix();

    return in_start.getUnix() <= in_date_ts && in_date_ts <= in_end.getUnix();
};