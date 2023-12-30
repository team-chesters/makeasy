import isDate from './isDate';

export default function GetDateInt(d1) {
    if (isDate(d1)) return Number.parseInt(d1.format('yyyyMMdd'));
    return -1;
};
