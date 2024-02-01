import isEmpty from "../src/isEmpty";

/**
 * Returns the first non-empty value from the provided arguments array.
 * @param  {...any} rest - The array of arguments.
 * @returns {any} The first non-empty value found or the last argument if all are empty.
 */

export default function GetNextNonEmpty(...rest) {
    if (rest.legnth == 1) return rest;

    for (let ex of rest) {
        if (!isEmpty(ex)) return ex;
    }

    return rest[rest.length - 1];
};
