export default function GetUnique(vaList) {
    let set = new Set();

    for (const v of vaList) {
        set.add(v);
    }

    return Array.from(set);
};
