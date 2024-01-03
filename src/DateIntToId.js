import Len from './Len';

/**
 * Converts a date string in integer format to a formatted date string (YYYY-MM-DD).
 * 
 * @param {string} dint - The date string in integer format.
 * @returns {string} Returns the formatted date string (YYYY-MM-DD) or "0000-00-00" if the input format is invalid.
 */

export default function DateIntToId(dint) {
    let date_regexp = new RegExp(/([0-9]{4})-{0,1}([0-9]{2})-{0,1}([0-9]{2})/);
    let date_found = date_regexp.exec(dint);
    if (Len(date_found) >= 3) {
        return date_found[1] + "-" + date_found[2] + "-" + date_found[3];
    } else {
        return "0000-00-00";
    }
};
