export default function isNotInArray(v, t) {
    if (Array.isArray(t)) {
        for (let et of t) {
            if (v == et) return false;
        }
    }
    return true;
};
