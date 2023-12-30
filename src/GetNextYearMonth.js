import isDate from './isDate';

export default function GetNextYearMonth(t_date, year, month) {
    if (!isDate(t_date)) return new Date();

    let y_date = new Date(t_date);
    let tmp_date = new Date(t_date.getFullYear() + year, t_date.getMonth() + month + 1, 0);
    let d = Math.min(t_date.getDate(),tmp_date.getDate());

    return new Date(t_date.getFullYear() + year, t_date.getMonth() + month, d, t_date.getHours(), t_date.getMinutes(), t_date.getSeconds());
}