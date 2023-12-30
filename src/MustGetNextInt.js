export default function MustGetNextInt(obj, key, ...rest) {
    rest.push(0);
    return GetNext(obj, key, ...rest);
};
