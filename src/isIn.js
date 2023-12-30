export default function isIn (v, ...t) {
    let tt = Array.from(t);
    for (let et of tt) {
        if (v == et) return true;
    }

    return false;
};
