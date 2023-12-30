import hasKeyAll from './hasKeyAll';
import isDate from './isDate';

export default function isDateRangeSet(range) {
    return hasKeyAll(range, 'start', 'end') && isDate(range.start) && isDate(range.end);
};