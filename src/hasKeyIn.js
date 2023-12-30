import isInArray from "./isInArray";

export default function hasKeyIn(obj, key, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;

    if (!Object.prototype.hasOwnProperty.call(obj, key)) return false;

    if (rest.length == 0) {
        if (obj[key] == null) return false;
        return true;
    }

    return isInArray(obj[key], rest);
};