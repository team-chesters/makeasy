import isDateRangeSet from './isDateRangeSet';
import GetUnix from './GetUnix';

export default function isSameDateRange(range1, range2) {
    if (isDateRangeSet(range1) && isDateRangeSet(range2)) {
        return range1.start.getUnix() == range2.start.getUnix() && range1.end.getUnix() == range2.end.getUnix();
    }
    return false;
};
