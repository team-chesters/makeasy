/**
 * Checks if a key exists in an object and if its value is a positive number. Optionally, it can check nested keys for positive numbers.
 * @param {Object} obj - The object to check for the key.
 * @param {string} level - The key to check within the object.
 * @param {...string} rest - (Optional) Additional keys to check for positive numbers in nested objects.
 * @returns {boolean} True if the key exists in the object and its value is a positive number, false otherwise.
 */

export default function hasKeyPositive(obj, level, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;
    if (rest.length == 0 && Object.prototype.hasOwnProperty.call(obj, level)) {
        if (obj[level] == null)
            return false;

        return obj[level] > 0;
    }
    return hasKeyPositive(obj[level], ...rest);
};
