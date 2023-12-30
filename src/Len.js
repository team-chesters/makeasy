export default function Len(obj) {
    if (Array.isArray(obj)) return obj.length;

    if (typeof obj == "string") return obj.length;

    return 0;
};
