import hasKey from "./hasKey";

export default function hasKeyAll(obj, ...rest) {
    if (rest.length == 0) return false;

    for(const k of rest) {
        if(!hasKey(obj, k)) {
            return false;
        }
    }

    return true;
};
