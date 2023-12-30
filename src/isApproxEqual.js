export default function isApproxEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
};
