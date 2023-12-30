import isDate from "./isDate";

export default function GetUnix(date) {
    if (isDate(date)) {
        return Number.parseInt(date.getTime() / 1000);
    }
    return 0;
};
