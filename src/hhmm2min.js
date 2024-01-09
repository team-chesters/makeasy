import isEmpty from "./isEmpty";

/**
 * Converts a time string in HH:MM format to minutes.
 * @param {string} t - The time string in HH:MM format to convert to minutes.
 * @returns {number} The equivalent number of minutes.
 */

export default function hhmm2min (t) {
    if (isEmpty(t)) return 0;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return 0;

    return Number.parseInt(tx[1]) * 60 + Number.parseInt(tx[2]);
};
