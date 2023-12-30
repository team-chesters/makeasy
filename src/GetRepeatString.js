export default function repeatString(string, times, separator = '') {
    return Array(times).fill(string).join(separator);
};
