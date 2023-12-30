export default function FilterJsonWithoutEmptyKey(obj, keysOfInterest) {
    const keep = {};

    for (const key of keysOfInterest) {
        if (obj[key] !== null && obj[key] !== undefined) {
            keep[key] = obj[key];
        }
    }

    return keep;
}