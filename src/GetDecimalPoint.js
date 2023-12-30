export default function GetDecimalPoint (num) {
    let numArr = String(num).split(".");
    if (numArr.length === 1) {
        return Number.parseInt(num);
    } else {
        return Number.parseFloat(num.toFixed(1));
    }
};
