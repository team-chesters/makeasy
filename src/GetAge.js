import ymdToDate from "./ymdToDate";

/**
 * Calculates the age based on the provided date of birth in the format yyyymmdd.
 * 
 * @param {string | number} yyyymmdd - The date of birth in the format yyyymmdd.
 * @returns {number} Returns the calculated age.
 */

export default function GetAge(yyyymmdd) {
    if (yyyymmdd == null || yyyymmdd == undefined)
        return 0;

    yyyymmdd = "" + yyyymmdd;

    if (yyyymmdd.length != 6 && yyyymmdd.length != 8) return 0;

    if (yyyymmdd.length == 6) {
        // yymmdd

        let smallYear = parseInt(yyyymmdd.substring(0,2), 10);
        let todayYear = new Date().getFullYear() % 100;
        if (smallYear > todayYear) {
            yyyymmdd = "19" + yyyymmdd;
        } else {
            yyyymmdd = "20" + yyyymmdd;
        }
    }

    const today = new Date();
    const birthDate = ymdToDate(yyyymmdd, "12:00");

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age > 150) {
        age = 0;
    }

    return Number.isNaN(age) ? 0 : age;
};
