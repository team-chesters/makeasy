import isEmpty from "./isEmpty";

export default function GetNextNonEmpty(...rest) {
    if (rest.legnth == 1) return rest;

    for (let ex of rest) {
        if (!isEmpty(ex)) return ex;
    }

    return rest[rest.length - 1];
};
