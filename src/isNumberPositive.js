import isEmpty from './isEmpty';
import isNumber from './isNumber';

export default function isNumberPositive (int) {
    if (isEmpty(int)) return null;
    if (!isNumber(int)) return null;

    return Math.sign(int) === 1;
};