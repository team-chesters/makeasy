/**
 * Converts a time slot number to a string in "hh:mm" format.
 * @param {number} slotNo - The time slot number to convert.
 * @returns {string} Returns the time in "hh:mm" format.
 */

export default function slotNo2hhmm(slotNo) {
    let hh = Number.parseInt(slotNo / 2);
    let mm = slotNo % 2 == 0 ? 0 : 30;
    return (hh > 9 ? hh : "0" + hh) + ":" + (mm > 9 ? mm : "0" + mm);
};
