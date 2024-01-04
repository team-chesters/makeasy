import isEmpty from "./isEmpty";
import ConvertDecimalToHex from "./ConvertDecimalToHex";

/**
 * Generates a random string of specified length using cryptographic random values.
 * 
 * @param {number} [len=20] - The length of the random string (default: 20).
 * @returns {string} Returns the generated random string.
 */

export default function GenerateRandomBytes(length = 20) {
    const byteLength = (length || 40) / 2
    const randomBytes = new Uint8Array(byteLength);
    
    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(randomBytes);
    } else {
        // Fallback for browsers not supporting crypto API
        return 'This browser does not support crypto API.';
    }
    
    let flag = 0;
    for (const item of randomBytes) {
        if (isEmpty(item)) flag += 1;
    }

    if (flag != 0) {
        return 'Some bytes are empty.';
    }

    return Array.from(randomBytes, ConvertDecimalToHex).join("");
};
