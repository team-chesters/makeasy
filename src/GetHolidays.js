import ymdToDate from "./ymdToDate.js";

export default function GetHolidays(holidays_array) {
    if (Array.isArray(holidays_array) && holidays_array.length > 0) return holidays_array;
    holidays_array = [];

    for (const [key, value] of Object.entries(HOLIDAYS)) {
        holidays_array.push(ymdToDate(key));
    }

    return holidays_array;
};
