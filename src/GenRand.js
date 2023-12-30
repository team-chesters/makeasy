export default function GenRand(len = 20) {
    let arr = new Uint8Array((len || 40) / 2);

    window.crypto.getRandomValues(arr);

    return Array.from(arr, Dec2Hex).join("");
};
