export default function isHoliday(date) {
    if (!isDate(date)) return false;
    if (date.getDay() == 0) return true;

    let key = date.format("yyyyMMdd");

    return Object.prototype.hasOwnProperty.call(HOLIDAYS, key);
};
