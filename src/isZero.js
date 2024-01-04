import isNumber from './isNumber';

export default function isZero (int) {
    if (isEmpty(int)) return null;
    if (!isNumber(int)) return null;

    return Math.sign(int) === 0 || Math.sign(int) === -0;
};