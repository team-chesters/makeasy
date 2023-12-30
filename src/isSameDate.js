import isDate from './isDate';

export default function isSameDate(a, b) {
    if (!isDate(a) || !isDate(b)) return false;

    return Math.abs(a - b) < ONE_DAY_MS && a.getDay() === b.getDay();
};
