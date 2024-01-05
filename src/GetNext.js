import isEmpty from "./isEmpty";

/**
 * Recursively retrieves the value of the given nested property keys from the provided object.
 * @param {object} obj - The object from which to retrieve values.
 * @param {string} key - The initial key to retrieve from the object.
 * @param  {...string} rest - The rest of the keys in the nested structure.
 * @returns {any} The value found at the nested property keys or an empty string if not found.
 */

export default function GetNext(obj, key, ...rest) {
    if (rest.length === 0) {
        return key;
    }

    if (isEmpty(obj)) return "";

    if (Object.prototype.hasOwnProperty.call(obj, key) && !isEmpty(obj[key]))
        return obj[key];

    return GetNext(obj, ...rest);
};
