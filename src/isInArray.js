export default function isInArray(v, t) {
    if (Array.isArray(t)) {
        for (let et of t) {
            if (v == et) return true;
        }
    }

    return false;
};
