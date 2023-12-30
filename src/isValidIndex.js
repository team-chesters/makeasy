import Len from "./Len";

export default function isValidIndex(arr, idx) {
    return Array.isArray(arr) && idx >= 0 && Len(arr) > idx;
};
