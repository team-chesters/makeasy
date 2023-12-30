import isEmpty from "./isEmpty";

export default function GetNext(obj, key, ...rest) {
    if (rest.length === 0) {
        return key;
    }

    if (isEmpty(obj)) return "";

    if (Object.prototype.hasOwnProperty.call(obj, key) && !isEmpty(obj[key]))
        return obj[key];

    return GetNext(obj, ...rest);
};
