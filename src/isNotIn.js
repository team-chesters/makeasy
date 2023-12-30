export default function isNotIn(v, ...t) {
    let tt = Array.from(t);
    for (let et of tt) {
        if (v == et) return false;
    }

    return true;
};
