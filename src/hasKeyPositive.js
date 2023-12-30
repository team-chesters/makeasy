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
