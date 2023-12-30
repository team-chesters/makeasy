import Len from "./Len";

export default function LenByte(str) {
    let count = 0;
    let lenStr = Len(str);

    for (let i = 0; i < lenStr; i++) {
        if (str.charCodeAt(i) > 127) {
            count++;
        }
        count++;
    }

    return count;
};
