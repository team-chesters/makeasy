export default function MustGetNextStr (obj, key, ...rest) {
    rest.push("");
    return GetNext(obj, key, ...rest);
};
