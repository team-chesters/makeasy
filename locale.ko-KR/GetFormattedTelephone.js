import Len from "../src/Len";

/**
 * Returns a formatted telephone number.
 * 
 * @param {string} tel - The telephone number to format.
 * @returns {string} Returns the formatted telephone number.
 */

export default function GetFormattedTelephone(tel) {
    let telRegExp = new RegExp(/^(|\+\d{1,2})(|[-.\s])(\d{2}|\d{2,3}|\(\d{2,3}\))(|[-.\s])(\d{3,4})(|[-.\s])(\d{4})$/);
    let found = telRegExp.exec(tel);
    if (Len(found) >= 8) {
        let formed_tel = found[3] + "-" + found[5] + "-" + found[7];
        if (found[1] != "") formed_tel = "(" + found[1] + ") " + formed_tel;
        return formed_tel;
    }
    return tel;
};
